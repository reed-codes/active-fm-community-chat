import React, { useEffect, useContext } from "react";
import { scrollTop } from "../utils/index";
import {
  SectionHeader,
  Paragraph,
  LineDivider,
  SecondarySectionHeader,
} from "../styles/style-utils";
import { ThemeContext } from "../state/ThemeProvider";

const about = () => {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    scrollTop();
  }, []);

  return (
    <section>
      <SectionHeader theme={theme}>The Active FM story</SectionHeader>

      <div className="row">
        <div className="col-md-12">
          <video style={{
              width: "100%",
              height: 350,
              minHeight: 400,
              background: "#000",
            }}
            controls
            autoPlay
            >
            <source src="promo.mp4" type="video/mp4" />
            <source src="promo.ogg" type="video/ogg" />
          Your browser does not support the videotag. 
          </video>
        </div>

        <div className="col-sm-12">
          <LineDivider />

          <div className="row">
            <div className="col-sm-12">
              <SecondarySectionHeader theme={theme}>
                Who Are We?
              </SecondarySectionHeader>

              <Paragraph theme={theme}>
                <div>
                  Active FM is an international online podcasting radio station
                  operating from the south of Johannesburg.
                </div>

                <div>We release 5 shows a day - Mondays to Fridays.</div>

                <div>
                  We release 5 shows a day - Mondays to Fridays. We have all
                  your favourite shows and the greatest variety of topics to
                  match all your interests - from sports to trends, philosophy,
                  astronomy, comedy, love, movies and so much more.
                </div>

                <div>
                  We talk about handling day to day obstacles, enjoying life,
                  world events and its impact on us.
                </div>
              </Paragraph>

              <SecondarySectionHeader theme={theme}>
                Why Choose Active FM?
              </SecondarySectionHeader>

              <Paragraph theme={theme}>
                <div>Our presenters bring amusing fresh perspectives.</div>

                <div>
                  Active FM focuses on producing quality shows with unique
                  content and lively radio DJ’s. Active FM is more than just a
                  radio station - it’s a family. A community of people uniting
                  to discuss the issues of life and share common interests /
                  hobbies.
                </div>

                <div>
                  You are guaranteed to learn new life skills, feel great after
                  listening to our shows and we’ll keep you updated.
                </div>

                <div>
                  Get the truth and stay connected. Become a part of the family
                  today.
                </div>
              </Paragraph>

              <SecondarySectionHeader theme={theme}>
                Active FM Milestones / Achievements:
              </SecondarySectionHeader>

              <Paragraph theme={theme}>
                <ul>
                  <li>
                    {" "}
                    Active FM is in over 100 countries with a 50% increase in
                    listenership annually.{" "}
                  </li>

                  <li>
                    {" "}
                    De Mode has ranked number 1 in the category “Fashion and
                    Beauty” in Yemen and number 12 in category “Arts” in Yemen.
                    Philosophically Poetic ranked in the top listened to shows
                    on iTunes in Kenya.
                  </li>

                  <li>
                    {" "}
                    We have distinguished interviews with great artists and
                    businessmen / women all over the world.{" "}
                  </li>
                  <li>
                    {" "}
                    <b>Link</b>: https://iono.fm/c/4178{" "}
                  </li>
                </ul>
              </Paragraph>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default about;
