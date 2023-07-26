USE [Postr]
GO

SET IDENTITY_INSERT [UserType] ON
INSERT INTO [UserType] ([Id], [Name])
VALUES (1, 'Admin'), 
	   (2, 'User')
SET IDENTITY_INSERT [UserType] OFF

SET IDENTITY_INSERT [UserProfile] ON
INSERT INTO [UserProfile] ([Id], [FirebaseUserId], [DisplayName], [Email], [CreateDate], [UserTypeId])
VALUES (1, 'EpQ5n0ySTHZQNFQ6YPhAKbVzPDz1', 'gebohix', 'gebohix172@rc3s.com', GETDATE(), 1),
	   (2, 'tlyVavudNmhyws5J4k0iTde3Nat1', 'velixeg', 'velixeg772@rc3s.com', GETDATE(), 2),
	   (3, 'DSc4ZJIdovY1ctCUdUOV5QflyNH3', 'hegove', 'hegove7174@rc3s.com', GETDATE(), 2)
SET IDENTITY_INSERT [UserProfile] OFF

SET IDENTITY_INSERT [Post] ON
INSERT INTO [Post] ([Id], [UserProfileId], [Content], [CreateDate])
VALUES (1, 1, 'Hello World!', GETDATE()),
       (2, 2, 'This is my first post!', GETDATE()),
	   (3, 3, 'Nice to see you all!', GETDATE())
SET IDENTITY_INSERT [Post] OFF




