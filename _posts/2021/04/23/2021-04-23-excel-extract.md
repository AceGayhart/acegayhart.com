---
title: Excel Extract
date: 2021-04-23 11:57:28 AM
tags:    
    - programming
    - c#
    - excel
---

I just completed a recent project where the lynchpin was sending data to another entity.  My preference is to use an API or web service.  This setup makes it easier for instant feedback.  However, if there's no web service already in place, it can be a significant investment to create and maintain one.

Given the low volume of data, we agreed that it would be easiest to transmit a file via SFTP.  I recommended using a CSV format as we already had code to do this.  But, the entity requested .xlsx instead.

I've used various libraries and such to write Excel files.  But, since we basically dumped data to a spreadsheet and didn't care about formatting, I wanted something quick and inexpensive.  Enter [SwiftExcel](https://swiftexcel.pro/).

SwiftExcel is a "[l]ightweight, extremely fast and memory efficient Excel output library for .NET and .NET Core applications."  It met both the requirements of being quick to implement and being inexpensive.  Actually, SwiftExcel is free.  Though, there is a professional version that allows for more advanced features.

Since I already had code to put the data in a DataTable, with SwiftExcel, writing the extract function was easy:

``` c#
private static void CreateExcelExtract(string extractFilename, DataTable table)
{
    using (SwiftExcel.ExcelWriter ew = new SwiftExcel.ExcelWriter(extractFilename))
    {
        int row = 1;
        int col = 1;

        foreach (DataColumn column in table.Columns)
        {
            ew.Write(column.ColumnName, col, row);
            col++;
        }

        foreach (DataRow dataRow in table.Rows)
        {
            row++;
            col = 1;
            foreach (DataColumn column in table.Columns)
            {
                ew.Write(dataRow[column].ToString(), col, row);
                col++;
            }
        }
    }
}
```

When looking for a NuGet package to do something, I look for a few things:

- [ ] Is the code being actively maintained?  E.g., have there been regular and consistent updates?
- [ ] Are there several downloads?  While I love trying new things, I don't necessarily want my production code to be the guinea pig.
- [ ] Is there easy to reach/understand documentation?   The package may be exactly what I'm looking for.  But, if it takes me more time to understand something than writing it myself, I end up looking elsewhere.
- [ ] Is the source code available?  I like skimming the code as I typically find something new or exciting.  It also helps me better understand the author's intent.
