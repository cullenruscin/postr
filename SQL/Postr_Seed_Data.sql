USE [Postr]
GO

SET IDENTITY_INSERT [UserType] ON
INSERT INTO [UserType] ([Id], [Name])
VALUES (1, 'Admin'), 
       (2, 'User')
SET IDENTITY_INSERT [UserType] OFF

SET IDENTITY_INSERT [UserProfile] ON

INSERT INTO [UserProfile] ([Id], [FirebaseUserId], [FirstName], [LastName], [DisplayName], [DisplayPicture], [Bio], [Email], [CreateDate], [UserTypeId])
VALUES 
  (1, 'b84caO1k09NuBqkqrGefnwk7wMr1', 'Cullen', 'Ruscin', 'cullenruscin', 'https://bulma.io/images/placeholders/96x96.png', 'Website creator. Sleep deprivation expert.', 'cullen.ruscin@test.com', GETDATE(), 1),
  (2, 'YIpjDRqgFYW9172LrOkzSFXUEos1', 'John', 'Doe', 'johndoe', 'https://bulma.io/images/placeholders/96x96.png', 'Web Developer. Music lover, sports enthusiast.', 'john.doe@test.com', GETDATE(), 2),
  (3, 'yv2NdmVX1zSn7LdlTemW5VZmX7H3', 'Jane', 'Smith', 'janesmith', 'https://bulma.io/images/placeholders/96x96.png', 'Student. Traveler, dog mom.', 'jane.smith@test.com', GETDATE(), 2),
  (4, 'MglWuo6cFvdFOiSb16XYywhjZLv1', 'Michael', 'Johnson', 'michaeljohnson', 'https://bulma.io/images/placeholders/96x96.png', 'Dream big. Fitness enthusiast, adventure seeker.', 'michael.johnson@test.com', GETDATE(), 2),
  (5, '3E2emTOcJXcqXduWX9JvgH9bI182', 'Emily', 'Brown', 'emilybrown', 'https://bulma.io/images/placeholders/96x96.png', 'Artist. Coffee addict, movie buff.', 'emily.brown@test.com', GETDATE(), 2),
  (6, '7YRFHVxB3XTY7DEHq5mJ1TrrnYZ2', 'David', 'Lee', 'davidlee', 'https://bulma.io/images/placeholders/96x96.png', 'Techie. Food lover, sports fan.', 'david.lee@test.com', GETDATE(), 2),
  (7, 'ksukcIPO0NWazWj6uxR0UdoO2Ss2', 'Sarah', 'Wilson', 'sarahwilson', 'https://bulma.io/images/placeholders/96x96.png', 'Nature lover. Book nerd, coffee enthusiast.', 'sarah.wilson@test.com', GETDATE(), 2),
  (8, '540tVUNbOWUwu1Wp5N2UooCwj1T2', 'Robert', 'Miller', 'robertmiller', 'https://bulma.io/images/placeholders/96x96.png', 'Wanderer. Science geek, movie lover.', 'robert.miller@test.com', GETDATE(), 2),
  (9, 'O7Lf2Qnv3pT2kLVxYbjJCnBIUTm1', 'Michelle', 'Jones', 'michellejones', 'https://bulma.io/images/placeholders/96x96.png', 'Foodie. Music enthusiast, dreamer.', 'michelle.jones@test.com', GETDATE(), 2),
  (10,'cn8EpcH3jEfipcmEhGLrlM32RLp2', 'Christopher', 'Davis', 'christopherdavis', 'https://bulma.io/images/placeholders/96x96.png', 'Coder. Traveler, food lover.', 'christopher.davis@test.com', GETDATE(), 2)
SET IDENTITY_INSERT [UserProfile] OFF


SET IDENTITY_INSERT [Post] ON
INSERT INTO [Post] ([Id], [UserProfileId], [Content], [IsDeleted], [CreateDate])
VALUES  (1, 1, 'Hello World!', 0, GETDATE()),
        (2, 1, 'Just launched my latest website project! Check it out! #webdesign #coding #dotnet #react', 0, GETDATE()),
        (3, 2, 'Working on a cool new web app today! Can''t wait to share it with you all. #webdevelopment #coding #tech', 0, GETDATE()),
        (4, 3, 'Studying hard for my exams but already planning my next travel adventure! #studentlife #travel #wanderlust', 0, GETDATE()),
        (5, 4, 'Reached a new personal best at the gym today! Hard work pays off. #fitness #gym #goals', 0, GETDATE()),
        (6, 5, 'Just finished a new painting and enjoying my favorite cup of coffee. #art #painting #caffeine', 0, GETDATE()),
        (7, 6, 'Excited to try out the latest tech gadgets! Also, who''s up for a game of basketball later? #tech #gadgets #sports', 0, GETDATE()),
        (8, 7, 'Nothing beats a peaceful hike in nature with a good book and a cup of coffee. #nature #hiking #books', 0, GETDATE()),
        (9, 8, 'Traveling to new places sparks my curiosity! Also, can''t wait for that upcoming sci-fi movie. #travel #science #movies', 0, GETDATE()),
        (10, 9, 'Tried a delicious new restaurant today, and the live music made it even better! #foodie #music #goodtimes', 0, GETDATE()),
        (11, 10, 'Coding away while reminiscing about my recent trip to Italy. The pasta there is unreal! #coding #travel #food', 0, GETDATE()),
        (12, 1, 'Just finished reading an amazing book. Highly recommend it! #books #reading #recommendation', 0, GETDATE()),
        (13, 2, 'Exploring new coding techniques and loving it! #coding #programming #webdevelopment', 0, GETDATE()),
        (14, 3, 'Spent the day at the beach with my furry friend. #dogs #beachday #sunshine', 0, GETDATE()),
        (15, 4, 'Achieved a new personal record in my morning run. #fitness #running #health', 0, GETDATE()),
        (16, 5, 'Just tried a new recipe and it turned out fantastic! #cooking #foodie #recipes', 0, GETDATE()),
        (17, 6, 'Attended an inspiring tech conference today. #technology #conference #inspiration', 0, GETDATE()),
        (18, 7, 'Found a hidden gem of a bookstore in the city. #bookstore #reading #literature', 0, GETDATE()),
        (19, 8, 'Visited an art museum and was blown away by the exhibits. #art #museum #culture', 0, GETDATE()),
        (20, 9, 'Enjoyed a thrilling roller coaster ride at the amusement park. #fun #adventure #thrills', 0, GETDATE()),
        (21, 10, 'Attended a live concert of my favorite band. #music #concert #livemusic', 0, GETDATE())
SET IDENTITY_INSERT [Post] OFF

SET IDENTITY_INSERT [Tag] ON;
INSERT INTO [Tag] (Id, [Name]) VALUES
    (1, 'Funny'),
    (2, 'Sarcastic'),
    (3, 'News'),
    (4, 'Lifestyle');
SET IDENTITY_INSERT [Tag] OFF;



