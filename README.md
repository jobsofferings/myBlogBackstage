### 我的博客后台管理

[TOC]

#### 中文

&emsp;&emsp;这是 **jobsofferings** 做的一个React+Ts+Redux的后台管理项目。暂时未完成，希望通过我的commit能够将此项目补全。该项目已有JS版本，但是希望通过这次的补全，能将TS与React+Redux、请求结合起来，谢谢。

##### 使用方法

`npm install` 下载依赖包

`cd my-app` 进入项目目录

`npm run start` 运行项目

打开浏览器访问`http://localhost:3000/`

##### 中文更新日志

+ 2020-4-12 第一次更新

&emsp;&emsp;做好了All、LeftPage、rightPage等部分功能,初步将TS与Redux、React结合起来。

+ 2020-4-18 第一次更新

&emsp;&emsp;新加了antd库，版本4.0.1。
&emsp;&emsp;新使用了echarts库，版本4.7.0。
&emsp;&emsp;新使用echarts更新了两个表格，新使用了antd初始化一个表格，暂时未做数据传输，接下来若干的版本会完善数据请求，在Redux的defaultState中将保存默认数据作为请求数据。

+ 2020-4-20 第一次更新

&emsp;&emsp;新加了redux-thunk库，版本2.3.0。
&emsp;&emsp;重新变更了reducer与store，使其交互更遵从redux原则。
&emsp;&emsp;注意！此次是一次大变动！修改了大量内部逻辑，请使用第三版本，前两个版本为舍弃版本。
&emsp;&emsp;在Redux的defaultState中将保存默认数据作为请求数据。若希望自己进行请求，请在api.js与package.json中修改请求路径。
&emsp;&emsp;后面的版本会加入react-router以及部分代码完善。

#### English

&emsp;&emsp;This is a background management project of React + Ts + Redux made by **jobsofferings**. Not completed yet, I hope to complete this project through my commit. The project already has a JS version, but I hope that through this completion, I can combine TS with React + Redux and requests, thank you.

##### How to use ?

`npm install` Download dependencies

`cd my-app` Enter the project directory

`npm run start` Run the project

Open browser access `http://localhost:3000/`

##### English update logs

+ 2020-4-12 First update

&emsp;&emsp;Completed some functions such as All, LeftPage, rightPage, etc., and initially combined TS with Redux and React.

+ 2020-4-18 First update

&emsp;&emsp;new antd library, version 4.0.1.
&emsp;&emsp;new echarts library, version 4.7.0.
&emsp;&emsp;The new use of echarts updated two tables, the new use of antd initialization of a table, temporarily not for the data transfer, the next few versions will refine the data request, in Redux Statedefault will save the default data as the request data.

+ 2020-4-20 第一次更新

&emsp;&emsp;Newly added redux-thunk library, version 2.3.0.
&emsp;&emsp;Changed the reducer and store again to make their interaction more in line with the redux principle.
&emsp;&emsp;note! This is a big change! A lot of internal logic has been modified, please use the third version, the first two versions are discarded versions.
&emsp;&emsp;The default data will be saved as request data in Redux's defaultState. If you want to make your own request, please modify the request path in api.js and package.json.
&emsp;&emsp;Later versions will add react-router and some code improvements.