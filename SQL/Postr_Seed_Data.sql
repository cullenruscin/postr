USE [Postr]
GO

SET IDENTITY_INSERT [User] ON
INSERT INTO [User] ([Id], [FirebaseUserId], [Username], [Password], [Email], [CreateDate])
VALUES (1, 'EpQ5n0ySTHZQNFQ6YPhAKbVzPDz1', 'gebohix', 'password', 'gebohix172@rc3s.com', GETDATE()),
	   (2, 'tlyVavudNmhyws5J4k0iTde3Nat1', 'velixeg', 'password', 'velixeg772@rc3s.com', GETDATE()),
	   (3, 'DSc4ZJIdovY1ctCUdUOV5QflyNH3', 'hegove', 'password', 'hegove7174@rc3s.com', GETDATE())
SET IDENTITY_INSERT [User] OFF

SET IDENTITY_INSERT [Post] ON
INSERT INTO [Post] ([Id], [UserId], [Content], [CreateDate])
VALUES (1, 1, 'Hello World!', GETDATE()),
       (2, 2, 'This is my first post!', GETDATE()),
	   (3, 3, 'Nice to see you all!', GETDATE())
SET IDENTITY_INSERT [Post] OFF




