# DM 109 Fall 2020: Course Repository

### PROJECT MEMBERS
StdID | Name
------------ | -------------
**60747** | **Muhammad Salman**
61372 | Arsal Khan
61004 | Muhammad Qaim Mehdi

## Description

The worst case brute force solution for the N-queens puzzle has an O(n^n) time complexity. This means it will look through every position on an NxN board, N times, for N queens. It is by far the slowest and most impractical method. If we refactor and prevent it from checking queens occupying the same row as each other, it will still be brute force. It gets slower rapidly. To find the 73,712 13x13 boards takes it nearly 20 minutes, and time will go up rapidly beyond that 14x14 probably would take more and more time to execute.

I faced searching problem for brute force because no proper solution can be find on internet. Lots of available solutions have bugs in them when I ran those codes. Then I took changes in the code after reading brute algorithm for n queens problem.

_x__________________________x___________________________x

N queens backtracking algorithm is much more efficient by any brute force approach. I analyzed that all variables over which an implicit constraint is defined are assigned, it verifies that constraint. If the constraint fails, then it immediately assigns a different value to the variables.

Whereas, Brute force search only takes the explicit constraints into account which means it assigns all possible values from Si to a variable xi and this for all variables. After it has constructed such a configuration, it verifies that all implicit constraints are satisfied.

Backtracking is offering a decent speed that is why it is widely used if we want faster execution time. I faced a searching problem for backtracking because no proper solution can be found on the internet. Lots of available solutions have bugs in them when I ran those codes. Then I took changes in the code after reading a research paper on the backtracking algorithm for the n queens problem.

_x__________________________x___________________________x

We've done a lot of searching working on dynamic program We've search it by different ways. We have seen many codes but no proper code could be found. We read many research papers of different institutes. Some of them are not understandable by us and some are. There were very short implementations of dynamic algo with n queens problem. But no one can find the proper code.

This repository contains assignments and project submitted to DM course offered in Fall 2020 at PafKiet.





	
