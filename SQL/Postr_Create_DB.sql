USE [master]

IF db_id('Postr') IS NULL
	CREATE DATABASE [Postr]
GO

USE [Postr];
GO

DROP TABLE IF EXISTS [UserType]
DROP TABLE IF EXISTS [UserProfile]
DROP TABLE IF EXISTS [Post]

CREATE TABLE [UserType] (
 [Id] int PRIMARY KEY IDENTITY(1, 1),
 [Name] varchar(20) NOT NULL
)

CREATE TABLE [UserProfile] (
  [Id] int PRIMARY KEY IDENTITY(1, 1),
  [FirebaseUserId] varchar(28) NOT NULL,
  [DisplayName] varchar(32) NOT NULL,
  [Email] varchar(64) NOT NULL,
  [CreateDate] datetime NOT NULL,
  [UserTypeId] int NOT NULL,

  CONSTRAINT [FK_User_UserType] FOREIGN KEY ([UserTypeId]) REFERENCES [UserType] ([Id]),
  CONSTRAINT [UQ_FirebaseUserId] UNIQUE(FirebaseUserId)
)

CREATE TABLE [Post] (
  [Id] int PRIMARY KEY IDENTITY(1, 1),
  [UserProfileId] int NOT NULL,
  [Content] varchar(256) NOT NULL,
  [CreateDate] datetime NOT NULL

  CONSTRAINT [FK_Post_UserProfile] FOREIGN KEY ([UserProfileId]) REFERENCES [UserProfile] ([Id])
)
GO
