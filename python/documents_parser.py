# -*- coding: utf-8 -*-

import xlrd

class StringSearcher:
    def __init__(self, workbook, theString):
        self.workbook = xlrd.open_workbook(workbook, "r")
        self.theString = theString

    def parsing(self):

        listOfElements = []
        theData = []

        for sheet in self.workbook.sheets():
            for col in range(sheet.ncols):
                for row in range(sheet.nrows):
                    listOfElements.append(str(sheet.cell(row, col).value))
        for theSearchedElement in listOfElements:
            if self.theString in theSearchedElement:
                theData.append(self.theString)
        print ("Your data is found! \n {}".format(theData))
        print ("The count of found data in the file: {} \n".format(len(theData)))
        print (">>>>>>>>>>>>>>><<<<<<<<<<<<<<<")

        #TODO: doesn't work. Investigate
        # else:
        #     print("Can't find your data. Check it and try again")

        theMessage = ">>> All values in the file:"

        userChoice = str(input('Do you want to see all available values in the document? Press "y" if yes or "n" if not '))

        if userChoice is 'y':
            theBeautifulLine = '-' * len(str(theMessage))
            print(theMessage +'\n', theBeautifulLine)

            for i in listOfElements:
                print(i)
        else:
            print("The script is done")

userSearchedString = str(input("Enter the string which should be found: "))

StringSearcher("C:\\Users\\Nic\\Desktop\\1.xls", userSearchedString).parsing()
StringSearcher("C:\\Users\\Nic\\Desktop\\2.xls", userSearchedString).parsing()
