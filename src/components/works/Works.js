/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";

import './Works.css';

// Import ../../assets/recentprojects/
import Anon from '../../assets/recentprojects/anonshopping.png';
import MakeupPortfolio from '../../assets/recentprojects/MakeupPortfolio.png';
import OlxClone from '../../assets/recentprojects/olxclone.png';
import windows11clone from '../../assets/recentprojects/windows11clone.png';
import netflixclone from '../../assets/recentprojects/netflixclone.png';

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
  },
}));

export const Works = () => {
  const classes = useStyles();
  const [projects, setProjects] = useState([
    { 
      id: 1,
      title: 'Anon', 
      description: `Designed and developed Ecommerce 
      with Node js, Express js, Mongo DB,  Payment Razorpay integrated.`,
      alter: 'Anon Ecommerce ',
      image: `${Anon}`,
    },
    { 
      id: 2,
      title: 'Makeup Portfolio', 
      description: `Designed and developed Portfolio website
      with Node js, Express js,`,
      alter: 'Makeup Portfolio ',
      image: `${MakeupPortfolio}`,
    },
    { 
      id: 3,
      title: 'Olx Clone', 
      description: `Olx Clone website using React js, Firebase integrated, firestore for user authentication. users can sell/ buy products after signing up just like OLX Works. `,
      alter: 'Olx Clone',
      image: `${OlxClone}`,
    },
    { 
      id: 4,
      title: 'Windows11 clone', 
      description: `A website for Desktop Windows 11 OS Clone is a Web Application, built Using React JS Library`,
      alter: 'windows11 clone',
      image: `${windows11clone }`,
    },
    { 
      id: 5,
      title: 'Netflix Clone', 
      description: `Netflix Clone using React js & TMDB API Services. I have implemented classification of movies by genre and youtube trailer play within the application.`,
      alter: 'Netflix Clone',
      image: `${netflixclone}`,
    },
  ]);

  return (
    <section id="works">
      <Container component="main" className={classes.main} maxWidth="md">
        {projects.map((project) => (
          <div className="project" key={ project.id }>
            <div className="__img_wrapper">
              <img src={ project.image } alt={ project.alter }/>
            </div>
            <div className="__content_wrapper">
              <h3 className="title">
                <TextDecrypt text={ project.id + '. ' + project.title } />
              </h3>
              <p className="description">
                { project.description }
              </p>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};
