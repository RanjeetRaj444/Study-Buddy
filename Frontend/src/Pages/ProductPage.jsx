import { styled } from "styled-components";
import { Heading, Text } from "@chakra-ui/react";


const ProductPage = () => {
    return <DIV>
        <div className="container">
            <div className="container-Left">
                <img
                    src="https://quizlet.com/cdn-cgi/image/f=auto,fit=cover,h=500,onerror=redirect,w=500/https://assets.quizlet.com/_next/static/media/step-by-step-day.6c08ac80.svg"
                    alt=""
                />
            </div>
            <div className="container-Right">
                <Heading size={"lg"}>Step-by-step explanations promote deeper understanding</Heading>
                <Text fontSize={"larger"}>
                    Step-by-step explanations break down complex concepts into smaller, manageable pieces. This approach enables you to grasp each step of the topic thoroughly before moving on to the next, reducing the chances of confusion and promoting deeper understanding. Ultimately, you will gain a comprehensive understanding of the subject matter, leading to improved retention and recall for future exams or homework assignments.
                </Text>
            </div>
        </div>
        <div className="container">
            <div className="container-Left">
                <Heading size={"lg"}>Written by experts and verified for accuracy</Heading>
                <Text fontSize={"larger"}>
                    Textbook solutions are written by subject-matter experts and verified for accuracy to provide you with the best quality homework help for challenging problems. To ensure the highest level of accuracy, the verification process involves a multi-step approach that includes multiple rounds of review and feedback before any textbook solution is published.
                </Text>
            </div>
            <div className="container-Right">
                <img
                    src="https://quizlet.com/cdn-cgi/image/f=auto,fit=cover,h=500,onerror=redirect,w=500/https://assets.quizlet.com/_next/static/media/written-by-experts-day.921ce2b4.svg"
                    alt=""
                />
            </div>
        </div>
        <div className="container">
            <div className="container-Left">
                <img
                    src="https://quizlet.com/cdn-cgi/image/f=auto,fit=cover,h=500,onerror=redirect,w=500/https://assets.quizlet.com/_next/static/media/millions-of-solutions-day.d80520fb.svg"
                    alt=""
                />
            </div>
            <div className="container-Right">
                <Heading size={"lg"}>Millions of solutions and counting</Heading>
                <Text fontSize={"larger"}>
                    With millions of verified textbook solutions from 14,000 popular textbooks, you can rest assured that our expansive solution library can support you in all of your toughest classes. Our solutions are carefully crafted by expert educators to provide you with accurate and comprehensive support. With our ever-growing library, you can tackle any academic challenge, whether you're stumped on your biology homework, or need step-by-step guidance for solving a complex calculus problem. From high school to college and beyond, our textbook solutions have you covered throughout your educational journey.
                </Text>
            </div>
        </div>
        <div className="feedbackSec">
            <h2 className="heading">
                <img src="https://quizlet.com/_next/static/media/TikTokIcon.85c08241.svg" alt="" />
                <p>What students are saying about StuddyBuddy</p>
            </h2>
            <div class="innerFeedbackSec">
                <div class="feedbackBox">
                    <p>I got a 94 on my bio final thanks to StuddyBuddy 💙</p>
                    <div class="innerFeedbackBox">
                        <img src="https://quizlet.com/_next/static/media/testimonials_alliecat1987.a1b1e470.png" alt="" />
                        <p>Alliecat1987</p>
                    </div>
                </div>
                <div class="feedbackBox">
                    <p>StuddyBuddy got me through high school and the first semester of college. Let's continue this trend 💪</p>
                    <div class="innerFeedbackBox">
                        <img src="https://quizlet.com/_next/static/media/testimonials_faithresler.3f3a3acc.png" alt="" />
                        <p>Faith_resler</p>
                    </div>
                </div>
                <div class="feedbackBox">
                    <p>The only way I pass my classes is because of StuddyBuddy</p>
                    <div class="innerFeedbackBox">
                        <img src="https://quizlet.com/_next/static/media/testimonials_makethisacctfamous.4c6c8a21.png" alt="" />
                        <p>Makethisacctfamous</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="container-Left">
                <img
                    src="https://quizlet.com/cdn-cgi/image/f=auto,fit=cover,h=500,onerror=redirect,w=500/https://assets.quizlet.com/_next/static/media/mobile-callout@2x.a08a9b45.png"
                    alt=""
                />
            </div>
            <div className="container-Right">
                <Heading size={"lg"}>Study on the go</Heading>
                <Text fontSize={"larger"}>
                    Study anywhere — even offline — with our iOS and Android apps. Your progress syncs across your phone and computer.
                </Text>
                <div className="downloadButton">
                    <button><img src="https://quizlet.com/_next/static/media/apple.4170bb1a.png" alt="" /></button>
                    <button><img src="https://quizlet.com/_next/static/media/google_play.fca45251.png" alt="" /></button>
                </div>

            </div>
        </div>
    </DIV>
}

const DIV = styled.div`
    .container {
    display: flex;
    justify-content: space-between;
    width: 70%;
    margin: 100px auto;
  }
   .container-Right,
  .container-Left {
    width: 45%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
  }
  .downloadButton{
    margin-top: 15px;
    display: flex;
    gap: 15px;
  }
  .downloadButton button{
    width: 37%;
  }
  .downloadButton button img{
    width: 100%;
  }
  .feedbackSec{
    width: 70%;
    margin: 100px auto;
  }
  .heading{
    display: flex;
    gap: 20px;
  }
  .heading p{
    font-size: xx-large;
    font-weight: bold;
  }
  .innerFeedbackSec{
    display: flex;
    justify-content: space-between;
    margin: 40px 0px;
  }
  .feedbackBox{
    width: 30%;
    height: 220px;
    background-color: #f1f1f1;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    padding:33px;
    justify-content: space-between;
  }
  .innerFeedbackBox{
    display: flex;
    gap: 8px;
    align-items: center;
  }
  .innerFeedbackBox img{
    width: 15%;
    border-radius: 100%;
  }
`

export default ProductPage;