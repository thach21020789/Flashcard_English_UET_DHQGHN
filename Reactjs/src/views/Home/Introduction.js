import './HomeStyle/Introduction.scss';
import IntroductionData from './IntroductionData';
import Image1 from "../assets/img/1.jpg";
import Image2 from "../assets/img/2.jpg";
import Image3 from "../assets/img/3.jpg";
import Image4 from "../assets/img/4.jpg";

const Introduction = () => {
    return (
        <div className="introduction">
            <h1>Introduction</h1>
            <p>English will help you a lot.</p>
            
            <IntroductionData
                className="first-des"
                heading="IELTS"
                text="IELTS (International English Language Testing System)
                is a test that assesses the English language proficiency of learners. 
                IELTS is developed by two organizations: the British Council, IDP Education, 
                and Cambridge Assessment English. IELTS is widely recognized and accepted by thousands
                 of educational institutions, employers, government agencies, and international organizations around the world.

               The IELTS test consists of four sections: Listening, Speaking, Reading, and Writing, 
               and provides learners with an overall score on a 9.0 scale. IELTS is divided into 
               two versions: IELTS Academic (for learners who plan to study at universities or graduate schools 
               in countries that use English as a primary language) and IELTS General Training 
               (for learners who plan to immigrate or work in countries that use English).

               The IELTS test is regularly administered throughout the year at IELTS test centers worldwide."
               img1={Image1}
                img2={Image2}
               />

                <IntroductionData
                className="first-des-reverse"
                heading="TOEIC"
                text="TOEIC stands for Test of English for International Communication.
                    It is a standardized test that measures the English language proficiency of non-native speakers in a business or work context.
                    The test assesses the ability of test-takers to understand and use English in a workplace setting and includes sections 
                    on listening and reading comprehension. The TOEIC test is used by companies, organizations, and universities worldwide 
                    to determine the English language proficiency of job applicants, employees, and students."
                img1={Image3}
                img2={Image4}
                />
                
        </div>
    )
}
export default Introduction;