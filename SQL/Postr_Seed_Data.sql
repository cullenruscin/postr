USE [Postr]
GO

SET IDENTITY_INSERT [UserType] ON
INSERT INTO [UserType] ([Id], [Name])
VALUES (1, 'Admin'), 
       (2, 'User')
SET IDENTITY_INSERT [UserType] OFF

SET IDENTITY_INSERT [UserProfile] ON
INSERT INTO [UserProfile] ([Id], [FirebaseUserId], [FirstName], [LastName], [DisplayName], [DisplayPicture], [Bio], [Email], [CreateDate], [UserTypeId])
VALUES (1, 'EpQ5n0ySTHZQNFQ6YPhAKbVzPDz1', 'Gebo', 'Hix', 'gebohix', 'https://nextluxury.com/wp-content/uploads/funny-profile-pictures-2.jpg', 'Hello', 'gebohix172@rc3s.com', GETDATE(), 1),
       (2, 'tlyVavudNmhyws5J4k0iTde3Nat1', 'Vel', 'Ixeg', 'velixeg', 'https://i.pinimg.com/474x/fa/ba/54/faba5498b3167071dc93e22f3ce1e22a.jpg', 'Yee yee', 'velixeg772@rc3s.com', GETDATE(), 2),
       (3, 'DSc4ZJIdovY1ctCUdUOV5QflyNH3', 'Hego', 'Ve', 'hegove', 'https://theawesomedaily.com/wp-content/uploads/2023/03/pfp-2.jpeg', 'Bloop', 'hegove7174@rc3s.com', GETDATE(), 2)
SET IDENTITY_INSERT [UserProfile] OFF

SET IDENTITY_INSERT [Post] ON
INSERT INTO [Post] ([Id], [UserProfileId], [Content], [IsDeleted], [CreateDate])
VALUES (1, 1, 'Hello World!', 0, GETDATE()),
       (2, 2, 'This is my first post!', 0, GETDATE()),
       (3, 3, 'Nice to see you!', 1, GETDATE())
SET IDENTITY_INSERT [Post] OFF

SET IDENTITY_INSERT [Post] ON
INSERT INTO [Post] ([Id], [UserProfileId], [ParentId], [Content], [IsDeleted], [CreateDate])
VALUES (4, 3, 1, 'This is a reply to the first post!', 0, GETDATE())
SET IDENTITY_INSERT [Post] OFF

SET IDENTITY_INSERT [Like] ON
INSERT INTO [Like] ([Id], [UserProfileId], [PostId])
VALUES (1, 1, 1),
       (2, 1, 2),
       (3, 1, 3)
SET IDENTITY_INSERT [Like] OFF




