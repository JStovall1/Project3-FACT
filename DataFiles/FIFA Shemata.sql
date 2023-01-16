drop table if exists fifa_ranking_2022_10_06
drop table if exists world_cup

CREATE TABLE "fifa_ranking_2022_10_06" (
    "team" varchar(100)   NOT NULL,
    "team_code" varchar(100)   NOT NULL,
    "association" varchar(100)   NOT NULL,
    "rank" int   NOT NULL,
    "previous_rank" int   NOT NULL,
    "points" numeric   NOT NULL,
    "previous_points" numeric   NOT NULL
);

CREATE TABLE "world_cup" (
    "Year" int   NOT NULL,
    "Teams" int   NOT NULL,
    "AttendanceAvg" int   NOT NULL
);


SELECT * FROM fifa_ranking_2022_10_06;
SELECT * FROM world_cup;