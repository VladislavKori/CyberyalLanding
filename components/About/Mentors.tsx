import mentor1 from "../../public/mentors/mentor.jpg";
import mentor2 from "../../public/mentors/angryman.jpeg";
import Image from "next/image";

function Mentors() {
  return (
    <>
      <h2 className="ourteam__title">Mentors</h2>
      <div className="mentor_container">
        <div className="mentors_card">
          <div style={{ padding: "15px" }}>
            <Image
              src={mentor1}
              alt="Viljar Annerviek"
              style={{ borderRadius: "20px" }}
              className="mentors_image"
            />
            <h3
              style={{
                fontWeight: "500",
                fontSize: "20px",
                margin: "10px 0px",
              }}
            >
              Viljar Annerviek
            </h3>
            <p className="mentors_desc">
              The chairman of the company with over then 20 years of business
              experience in USA, Estonia and Finland. Has a high level of
              managing people and influence in his business area. In the company
              he is also a reliable mentor and investor.
            </p>
          </div>
        </div>
        <div className="mentors_card">
          <div style={{ padding: "15px" }}>
            <Image
              src={mentor2}
              alt="Peter Vesterbacka"
              style={{ borderRadius: "20px" }}
              className="mentors_image"
            />
            <h3
              style={{
                fontWeight: "500",
                fontSize: "20px",
                margin: "10px 0px",
              }}
            >
              Peter Vesterbacka
            </h3>
            <p className="mentors_desc">
              Entrepreneur, marketer, programmer and philanthropist. Marketing
              director of Rovio and founder of the Slush startup conference.
              Peter launched the educational initiative Fun Academy Future
              Astronauts, participated in the creation of FinEst Tunnel and a
              huge number of projects to improve the lives of millions of
              people. He was named one of the 100 most influential people on the
              planet by TIME magazine in 2011 and one of the top 10 in 2015.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Mentors;
