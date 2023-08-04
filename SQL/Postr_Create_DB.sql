USE [master]

IF db_id('Postr') IS NULL
    CREATE DATABASE [Postr]
GO

USE [Postr];
GO

DROP TABLE IF EXISTS [UserType]
DROP TABLE IF EXISTS [UserProfile]
DROP TABLE IF EXISTS [Post]
DROP TABLE IF EXISTS [Like]
DROP TABLE IF EXISTS [Tag]
DROP TABLE IF EXISTS [PostTag]

CREATE TABLE [UserType] (
    [Id] int PRIMARY KEY IDENTITY(1, 1),
    [Name] varchar(20) NOT NULL
)

CREATE TABLE [UserProfile] (
    [Id] int PRIMARY KEY IDENTITY(1, 1),
    [FirebaseUserId] varchar(28) NOT NULL,
    [FirstName] varchar(48) NOT NULL,
    [LastName] varchar(48) NOT NULL,
    [DisplayName] varchar(32) NOT NULL,
    [DisplayPicture] varchar(256) NOT NULL,
    [Bio] varchar(256) NOT NULL,
    [Email] varchar(64) NOT NULL,
    [CreateDate] datetime NOT NULL,
    [UserTypeId] int NOT NULL,

    CONSTRAINT [FK_User_UserType] FOREIGN KEY ([UserTypeId]) REFERENCES [UserType] ([Id]),
    CONSTRAINT [UQ_FirebaseUserId] UNIQUE(FirebaseUserId)
)

CREATE TABLE [Post] (
    [Id] int PRIMARY KEY IDENTITY(1, 1),
    [UserProfileId] int NOT NULL,
    [ParentId] int NULL,
    [Content] varchar(256) NOT NULL,
    [IsDeleted] bit NOT NULL,
    [CreateDate] datetime NOT NULL,

    CONSTRAINT [FK_Post_UserProfile] FOREIGN KEY ([UserProfileId]) REFERENCES [UserProfile] ([Id]),
    CONSTRAINT [FK_Post_Parent] FOREIGN KEY ([ParentId]) REFERENCES [Post] ([Id])
)

CREATE TABLE [Like] (
    [Id] int PRIMARY KEY IDENTITY(1, 1),
    [UserProfileId] int NOT NULL,
    [PostId] int NOT NULL,

    CONSTRAINT [FK_Like_UserProfile] FOREIGN KEY ([UserProfileId]) REFERENCES [UserProfile]([Id]),
    CONSTRAINT [FK_Like_PostId] FOREIGN KEY ([PostId]) REFERENCES [Post]([Id])
)

CREATE TABLE [Tag] (
    Id INT PRIMARY KEY IDENTITY,
    Name NVARCHAR(100) NOT NULL
)

CREATE TABLE [PostTag] (
    PostId INT NOT NULL,
    TagId INT NOT NULL,
    CONSTRAINT PK_PostTag PRIMARY KEY (PostId, TagId),
    CONSTRAINT FK_PostTag_Post FOREIGN KEY (PostId) REFERENCES Post (Id) ON DELETE CASCADE,
    CONSTRAINT FK_PostTag_Tag FOREIGN KEY (TagId) REFERENCES Tag (Id) ON DELETE CASCADE
)

GO

