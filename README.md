# JITERA_FE

This project is created by using the latest `node` and `npm` with the latest `nextjs` using page route structure.

## How to run

1. Copy `.env.dev` to `.env.local` 
1. Run `npm install`
2. Run `npm run dev`

## Deploy
There are 2 possible ways to deploy this applications. 
1. Using default vercel config that executed every push on `main` branch
2. Using GCP that executed on every push on `gcp` branch, this using github actions and it only deploy the image to GCR and Artifact Registry (to showcase my ability to build CI/CD pipeline), the github actions can be enhanced further to immediately deploy it in GCE, GKE or Cloud Run

## Test

To run test coverage run `npm run test` this will run test for the whole project. please be advised that the test does not cover all the files. This test just to show case that I am capable of creating unit test

## Project Plan

This project can be enhanced further in terms of CI/CD, lets say we can have github actions that trigger commit lint and then running unit test before deploying to GCP