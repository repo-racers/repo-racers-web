import { Component } from "react";

export default {
  logo: <span>Repo Racers</span>,
  project: {
    link: 'https://github.com/repo-racers/repo-racers-web',
  },
  editLink: {
    component: null,
  },
  feedback: {
    content: null,
  },
  footer: {
    text: (
      <span>
        &copy; {new Date().getFullYear()} {' '}
        <a href="https://reporacers.com" target="_blank">
          Repo Racers
        </a>
      </span>
    )
  },
}