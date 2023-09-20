import {MinHeightTextarea} from '../Input/input';
import './report.css';

export function Report (props) {
  return (
    <>
      <div className="Report">
        <p className='Title'>Today</p>
        <MinHeightTextarea name="Done" value="Write all things you have done today."/>
        <MinHeightTextarea name="Issue" value="Problems you have done."/>
        <MinHeightTextarea name="Achieved" value="What you have solved or earn money. All things you solved?"/>
        <MinHeightTextarea name="Skill Improve" value="What have you done to improve your skills such as learning new language?"/>
        <MinHeightTextarea name="New Job Earned" value="Especially, write down about the jobs you acquired." />
    </div>
    <div className="Report">
        <h1>Tomorrow</h1>
        <MinHeightTextarea name="Plan" value="What are you going to do?"/>
        <MinHeightTextarea name="Request" value="What do you want?"/>
        <MinHeightTextarea name="Estimated" value="What is your expected salary?"/>
        <MinHeightTextarea name="Other" value="Write your opinions such as your feeling about our site or some discussions."/>
        <MinHeightTextarea name="Note" value="Write anything you want or about yours. For example, today was very good." />
    </div>
    </>
  );
}

