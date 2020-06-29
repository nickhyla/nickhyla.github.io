// import { CODE_TYPE, DESIGN_TYPE, projectList } from './projectList'

var CODE_TYPE = 'code';
var DESIGN_TYPE = 'design';

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

Reminder all thumbnails should be set to 400 by 225

* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */


/*

Project List

*/

var projectList = [
  {
    title: 'Omnifood',
    url: 'https://nickhyla.github.io/Omnifood/',
    img: 'thumbnails/Omnifood_Thumbnail.png',
    type: DESIGN_TYPE
  },
  {
    title: 'Fitness University',
    url: 'https://www.figma.com/proto/Ph92FZ2zfDWHZd5o754YdW/Fitness-Website?node-id=5%3A211&scaling=scale-down-width',
    img: 'thumbnails/Fitness_University_Thumbnail.png',
    type: DESIGN_TYPE
  },
  {
    title: 'Fitness University Wireframe',
    url: 'https://nickhyla.github.io/Fitness-University-Wireframe/',
    img: 'thumbnails/Fitness_University_Wireframe_Thumbnail.png',
    type: DESIGN_TYPE
  },
  {
    title: 'Omnifood',
    url: 'https://nickhyla.github.io/Omnifood/',
    img: 'thumbnails/Omnifood_Thumbnail.png',
    type: CODE_TYPE
  },
  {
    title: 'Math Game',
    url: 'https://nickhyla.github.io/math-game/',
    img: 'thumbnails/Math-Game_Thumbnail.png',
    type: CODE_TYPE
  },


];

/*

Create cards

*/

function ProjectCard(props) {
  return (
    <div className='card'>
      <a href={props.url} target='_blank'>
        <img src={props.img} className='card-img'></img>
      </a>
      <h3 className='card-title'>{props.title}</h3>
    </div>
  );
}

function Projects(props) {
  console.log(props.projects)
  var projectListHTML = props.projects.map(slice => <ProjectCard key={slice.title} type={slice.type} img={slice.img} title={slice.title} url={slice.url} />);
  return <div className='card-container'>{projectListHTML}</div>
}

ReactDOM.render(
  <div>
    <Projects projects={projectList.filter(slice => slice.type === CODE_TYPE)} />
  </div>, document.querySelector(".coding-container")
);

ReactDOM.render(
  <div>
    <Projects projects={projectList.filter(slice => slice.type === DESIGN_TYPE)} />
  </div>, document.querySelector(".design-container")
);