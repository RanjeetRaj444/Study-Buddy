import { Box, Heading, Text } from "@chakra-ui/react";
import { Faq } from "../Components/ProductPage/Faq";
import SearchBar from "../Components/SearchBar";
import ProductTab from "../Components/ProductPage/ProductTab";
import { DIV } from "../style/Product_Style";

const infoSections = [
  {
    img: "https://quizlet.com/cdn-cgi/image/f=auto,fit=cover,h=500,onerror=redirect,w=500/https://assets.quizlet.com/_next/static/media/step-by-step-day.6c08ac80.svg",
    heading: "Step-by-step explanations promote deeper understanding",
    text: `Step-by-step explanations break down complex concepts into smaller, manageable pieces. This approach enables you to grasp each step of the topic thoroughly before moving on to the next, reducing the chances of confusion and promoting deeper understanding. Ultimately, you will gain a comprehensive understanding of the subject matter, leading to improved retention and recall for future exams or homework assignments.`,
    imgLeft: true,
  },
  {
    img: "https://quizlet.com/cdn-cgi/image/f=auto,fit=cover,h=500,onerror=redirect,w=500/https://assets.quizlet.com/_next/static/media/written-by-experts-day.921ce2b4.svg",
    heading: "Written by experts and verified for accuracy",
    text: `Textbook solutions are written by subject-matter experts and verified for accuracy to provide you with the best quality homework help for challenging problems. To ensure the highest level of accuracy, the verification process involves a multi-step approach that includes multiple rounds of review and feedback before any textbook solution is published.`,
    imgLeft: false,
  },
  {
    img: "https://quizlet.com/cdn-cgi/image/f=auto,fit=cover,h=500,onerror=redirect,w=500/https://assets.quizlet.com/_next/static/media/millions-of-solutions-day.d80520fb.svg",
    heading: "Millions of solutions and counting",
    text: `With millions of verified textbook solutions from 14,000 popular textbooks, you can rest assured that our expansive solution library can support you in all of your toughest classes. Our solutions are carefully crafted by expert educators to provide you with accurate and comprehensive support. With our ever-growing library, you can tackle any academic challenge, whether you're stumped on your biology homework, or need step-by-step guidance for solving a complex calculus problem. From high school to college and beyond, our textbook solutions have you covered throughout your educational journey.`,
    imgLeft: true,
  },
];

const feedbacks = [
  {
    text: "I got a 94 on my bio final thanks to StuddyBuddy 💙",
    user: "Alliecat1987",
    img: "https://quizlet.com/_next/static/media/testimonials_alliecat1987.a1b1e470.png",
  },
  {
    text: "StuddyBuddy got me through high school and the first semester of college. Let's continue this trend 💪",
    user: "Faith_resler",
    img: "https://quizlet.com/_next/static/media/testimonials_faithresler.3f3a3acc.png",
  },
  {
    text: "The only way I pass my classes is because of StuddyBuddy",
    user: "Makethisacctfamous",
    img: "https://quizlet.com/_next/static/media/testimonials_makethisacctfamous.4c6c8a21.png",
  },
];

const InfoSection = ({ img, heading, text, imgLeft }) => (
  <div className="container">
    {imgLeft && (
      <div className="container-Left">
        <img src={img} alt={heading} />
      </div>
    )}
    <div className="container-Right">
      <Heading size="lg">{heading}</Heading>
      <Text fontSize="larger">{text}</Text>
    </div>
    {!imgLeft && (
      <div className="container-Right">
        <img src={img} alt={heading} />
      </div>
    )}
  </div>
);

const ProductPage = () => {
  return (
    <DIV>
      <section className="topSec">
        <div className="topSecUpperBox">
          <div className="topSecHeading">
            <Text fontWeight="bold" fontSize="44px" lineHeight="55px" mb={4}>
              Find free textbook solutions you can trust
            </Text>
            <Text
              display="flex"
              gap="10px"
              alignItems="end"
              fontWeight="semibold"
              fontSize="lg"
            >
              Step-by-step explanations
            </Text>
            <Text
              display="flex"
              gap="10px"
              alignItems="end"
              fontWeight="semibold"
              fontSize="lg"
            >
              Expert-written and verified answers
            </Text>
            <Text
              display="flex"
              gap="10px"
              alignItems="end"
              fontWeight="semibold"
              fontSize="lg"
            >
              Millions of solutions for popular textbooks
            </Text>
          </div>
          <div className="topSecImages">
            <Box>
              <img
                src="https://quizlet.com/_next/static/media/landing-page-header-phone-exercise.01626b15.svg"
                alt="Exercise illustration"
              />
            </Box>
            <Box>
              <img
                src="https://quizlet.com/_next/static/media/landing-page-header-phone-solution.f3708594.svg"
                alt="Solution illustration"
              />
            </Box>
          </div>
        </div>
        <div className="topSecLowerBox">
          <SearchBar />
        </div>
        <div className="productContainer">
          <Text fontWeight="bold" fontSize="25px">
            Browse by subject
          </Text>
          <ProductTab />
        </div>
      </section>

      {infoSections.map((sec, idx) => (
        <InfoSection key={idx} {...sec} />
      ))}

      <section className="feedbackSec">
        <h2 className="heading">
          <img
            src="https://quizlet.com/_next/static/media/TikTokIcon.85c08241.svg"
            alt="TikTok"
          />
          <span>What students are saying about StuddyBuddy</span>
        </h2>
        <div className="innerFeedbackSec">
          {feedbacks.map((fb, idx) => (
            <div className="feedbackBox" key={idx}>
              <p>{fb.text}</p>
              <div className="innerFeedbackBox">
                <img src={fb.img} alt={fb.user} />
                <p>{fb.user}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="faqSec">
        <Heading m="25px 0px">FAQs</Heading>
        <Faq />
      </section>

      <section className="container">
        <div className="container-Left">
          <img
            src="https://quizlet.com/cdn-cgi/image/f=auto,fit=cover,h=500,onerror=redirect,w=500/https://assets.quizlet.com/_next/static/media/mobile-callout@2x.a08a9b45.png"
            alt="Study on the go"
          />
        </div>
        <div className="container-Right">
          <Heading size="lg">Study on the go</Heading>
          <Text fontSize="larger">
            Study anywhere — even offline — with our iOS and Android apps. Your
            progress syncs across your phone and computer.
          </Text>
          <div className="downloadButton">
            <button>
              <img
                src="https://quizlet.com/_next/static/media/apple.4170bb1a.png"
                alt="Download on the App Store"
              />
            </button>
            <button>
              <img
                src="https://quizlet.com/_next/static/media/google_play.fca45251.png"
                alt="Get it on Google Play"
              />
            </button>
          </div>
        </div>
      </section>
    </DIV>
  );
};

export default ProductPage;
