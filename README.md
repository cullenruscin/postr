# Postr

![04](https://github.com/cullenruscin/postr/assets/120587966/339c1e16-955a-4a0c-a405-4b95af31db65)

## Introduction
Postr is my server-side capstone project that I completed in Cohort 63 at Nashville Software School. It's written
with React and Bulma on the frontend and uses a custom API written in C# and SQL on the backend.

## Project Goals
I struggled to think of any original ideas that could be reasonably completed in less than two weeks time. 
The clock was ticking to come up with an ERD and have it approved by my instructors ASAP. So, I decided to
make a twitter clone. I thought it would be fun to disect what twitter is, why it was designed the way it was
and possibly, visualize how it could be designed better? Okay probably not.

## How does it work?
Users can create and log into their accounts. This is done with Firebase in conjunction with my custom API. Then they can create posts such as this:

![01](https://github.com/cullenruscin/postr/assets/120587966/7b44e868-b0ff-4b89-b9fd-4386e50a21f8)

The Post form allows you to publish posts up to 256 characters. This limit is enforced in both the front and back ends. It also requires a tag before posting and stores when the post was created.
Posts cannot be edited (just like twitter) but can be soft deleted (ie. It no longer displays on the webpage but still exists in the database)

![02](https://github.com/cullenruscin/postr/assets/120587966/4f71824e-ff6d-4695-b5f0-1f5112462a07)

Posts can be liked. Likes are enumerated in the backend (and there's even a component that shows the like count but I removed it because it looked silly by itself)

![Animation](https://github.com/cullenruscin/postr/assets/120587966/106e1c5f-5f9f-4269-97a0-686f130affb1)

Users can also reply to posts. This was a fun challenge because replies to posts can be stored as data in a variety of ways. I opted for nested posts (See the ERD below for how I included a self-referential one-to-many relationship).

![Animation2](https://github.com/cullenruscin/postr/assets/120587966/e33e5ee6-e56d-4344-b927-7b815526a89a)

And finally users have profiles which other users can visit. They can also be edited by the user or a user flagged as an admin.

![03](https://github.com/cullenruscin/postr/assets/120587966/a6c6d7dc-6a93-4a6d-b6aa-b0c156a67f7c)

## ERD

![ERD](https://github.com/cullenruscin/postr/assets/120587966/ded29774-1816-4776-842c-e0cc6f7070c3)

## Challenges, Lessons, etc

- It's not easy discerning what is doable in ~12 days. This project was really fun but is also really incomplete
- The site could benefit from a search bar and simple search algorithm
- ChatGPT is great for creating large amounts of dummy data for a fake social media site.
- It might be fun to deploy this one day
