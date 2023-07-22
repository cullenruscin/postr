USE [master]

IF db_id('Postr') IS NULL
	CREATE DATABASE [Postr]
GO

USE [Postr];
GO

DROP TABLE IF EXISTS [User]
DROP TABLE IF EXISTS [Post]

CREATE TABLE [User] (
  [Id] int PRIMARY KEY IDENTITY(1, 1),
  [FirebaseUserId] varchar(28) NOT NULL,
  [Username] varchar(32) NOT NULL,
  [Email] varchar(64) NOT NULL,
  [CreateDate] datetime NOT NULL
)
GO

CREATE TABLE [Post] (
  [Id] int PRIMARY KEY IDENTITY(1, 1),
  [UserId] int NOT NULL,
  [Content] varchar(256) NOT NULL,
  [CreateDate] datetime NOT NULL
)
GO

ALTER TABLE [Post] ADD FOREIGN KEY ([UserId]) REFERENCES [User] ([Id])
GO
