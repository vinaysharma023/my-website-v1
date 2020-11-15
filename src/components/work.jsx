import React from "react";
import data from "../data/data";
import ProjectCard from "../ui/ProjectCard";

import { Grid, Box } from "@material-ui/core";

const Projects = () => {
   return (
      <section id="work" className="portfolio-mf sect-pt4 route">
         <div>
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Portfolio</h3>
                <p className="subtitle-a">
                  A collection of the works and things that i have built!
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          </div>
         <Box mt="7rem" mx="auto" maxWidth="1280px" width="90%">
            <Grid container spacing={4} justify="center" alignItems="center">
               {data.map((project, i) => {
                  return (
                     <ProjectCard   
                        key={project.title}
                        title={project.title}
                        image={project.image}
                        liveLink={project.liveLink}
                        repoLink={project.repoLink}
                        techUsed={project.techUsed}
                        features={project.features}
                     />
                  );
               })}
            </Grid>
         </Box>
      </section>
   );
};
export default Projects;