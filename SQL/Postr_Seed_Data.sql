USE [Postr]
GO

SET IDENTITY_INSERT [UserType] ON
INSERT INTO [UserType] ([Id], [Name])
VALUES (1, 'Admin'), 
	   (2, 'User')
SET IDENTITY_INSERT [UserType] OFF

SET IDENTITY_INSERT [UserProfile] ON
INSERT INTO [UserProfile] ([Id], [FirebaseUserId], [FirstName], [LastName], [DisplayName], [Email], [CreateDate], [UserTypeId])
VALUES (1, 'EpQ5n0ySTHZQNFQ6YPhAKbVzPDz1', 'Gebo', 'Hix', 'gebohix', 'gebohix172@rc3s.com', GETDATE(), 1),
	   (2, 'tlyVavudNmhyws5J4k0iTde3Nat1', 'Vel', 'Ixeg', 'velixeg', 'velixeg772@rc3s.com', GETDATE(), 2),
	   (3, 'DSc4ZJIdovY1ctCUdUOV5QflyNH3', 'Hego', 'Ve', 'hegove', 'hegove7174@rc3s.com', GETDATE(), 2)
SET IDENTITY_INSERT [UserProfile] OFF

SET IDENTITY_INSERT [Post] ON
INSERT INTO [Post] ([Id], [UserProfileId], [Content], [CreateDate])
VALUES (1, 1, 'Hello World!', GETDATE()),
       (2, 2, 'This is my first post!', GETDATE()),
	   (3, 3, 'Nice to see you all!', GETDATE())
SET IDENTITY_INSERT [Post] OFF

SET IDENTITY_INSERT [Like] ON
INSERT INTO [Like] ([Id], [UserProfileId], [PostId])
VALUES (1, 1, 1),
	   (2, 1, 2),
	   (3, 1, 3)
SET IDENTITY_INSERT [Like] OFF




