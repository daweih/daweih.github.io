title: FileMaker Design Functions
date: 2016-10-13 23:39:29
updated: 2016-10-13 23:39:29
tags: [baby step,FileMaker]
categories: profession
---
FileMaker 系统内提供了大量的函数，其中有一大类称为 Design，顾名思义就是设计用函数。

<center>![1](http://daweih.github.io/images/fm3.0.png "Design Functions")

官方的说法：
Design functions return information about the structure of open database files. For example, you could determine the names of all the layouts or fields in an open database file.

也就是说，Design funciton 是用于提取数据库设计信息的工具。这对于快速获取一个不熟悉的数据库非常有用。我们甚至可以使用数据库保存这些函数返回的信息，用于追踪数据库设计的变化或撰写开发日志，乃至开发完整的 FileMaker 开发日志系统。

我们先来看看这类函数都有哪些。
DatabaseNames: A list of the names of all files open on the computer.FieldBounds: The location, in points, of each field boundary and the field’s rotation in degrees.FieldComment: The specified field’s comment.FieldIDs: A list of all field IDs in fileName and layoutName.FieldNames: A list of the names of all fields on layoutName in fileName.FieldRepetitions: The number and orientation of repetitions of a repeating field as formatted on a layout.  FieldStyle: The field formatting applied to fieldName on layoutName in fileName.FieldType: Information about fieldName.GetNextSerialValue: The next serial number of fieldName in fileName.LayoutIDs: A list of all layout IDs in fileName.LayoutNames: A list of the names of all layouts in fileName.LayoutObjectNames: A list of the names of all named objects on layoutName in fileName.RelationInfo: A list of four values for each relationship directly related to tableName.ScriptIDs: A list of all script IDs in fileName.ScriptNames: A list of the names of all scripts in fileName.TableIDs: A list of all table IDs in fileName.TableNames: A list of all table occurrences in the relationships graph for fileName.

Get(LayoutTableName)


``` bash
/*  copyright Ulf Carlsson, ulf.carlsson@studentlitteratur.se, free to use if this row is here
     copyright Dawei Huang, daweih@me.com, free to use if this row is here
     在原作的基础上增加了对重复出现布局名称情况的处理，会返回错误值 (-1)
Use: Gets the Layout-ID of current layout if parameter layout="current" or of the layout which name is in parameter layoutFunction name: GetLayoutIDParameter: layout     If layout="current"  is current layout used, otherwise should "layout" contain the name of wich layout ID you want*/Let ( [	// use "current" layout or the layoutname that is coming from the "layout"-parameter	theLayout = If ( layout ="current" ; Get ( LayoutName ) ; layout );            	// Get all the layout names (is a list)	theLayoutNames = LayoutNames ( Get ( FileName ) );	// realLayoutNames	realLayoutNames = Substitute ( theLayoutNames; ["-";""] ; ["¶¶";"¶"] );		// Count all ¶ from the start to where the layout name are and add 1	currentLayoutPosition =  PatternCount (                                                 								Middle ( theLayoutNames ; 1 ;                  								Position ( theLayoutNames ; theLayout ; 1 ; 1 ) ) ;                                "¶" ) + 1 ;	// Get all the layout IDs (is a list)	layoutIDs = LayoutIDs ( Get ( FileName ) ) ;		// Count how many layouts there is	numberOfLayouts = Get ( LayoutCount ) ;                          	// Get the the ID from the list	layoutID = Case (                                                                                   				//ValueCount ( UniqueValues ( realLayoutNames ) )  ≠  ValueCount ( realLayoutNames );				ValueCount ( FilterValues ( theLayoutNames ; theLayout ) )>1;				"-1";				// If first value in the list, do this					currentLayoutPosition = 1 ; LeftWords ( layoutIDs ; 1 ) ;   				// if not first or last item in the list, do this					currentLayoutPosition < numberOfLayouts ;                                                              Middle ( layoutIDs ;							              Position ( layoutIDs ; "¶" ; 1 ; currentLayoutPosition -1 ) ; 								     Position ( layoutIDs ; "¶" ; 1 ; currentLayoutPosition ) - Position ( layoutIDs ; "¶" ; 1 ; currentLayoutPosition -1 ) ) ;                                                                                                             				// If last item in the list, do this					Middle ( layoutIDs ;                                                               						     Position ( layoutIDs ; "¶" ; 1 ; currentLayoutPosition -1 ) ; 						     Length ( layoutIDs ) )                      )];    GetAsNumber ( layoutID ))
```
#### Reference
1. [title](http://www.ncbi.nlm.nih.gov/pubmed/?term=)
<br>
<div align=center>
<img src="http://daweih.github.io/images/wechat_small_black.jpg">
</div>