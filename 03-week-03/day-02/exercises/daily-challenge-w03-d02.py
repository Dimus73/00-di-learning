import math


class Pagination:
    def __init__(self, items=[], pageSize=10) -> None:
        self.pageSize = int(math.trunc(pageSize))
        self.items = items
        self.totalPages = 0
        self.currentPage = 1
        self.totalPages = (len(items)/math.ceil(pageSize))
        self.totalPages = int(self.totalPages if self.totalPages == math.trunc(
            self.totalPages) else self.totalPages+1)
        self.currentDisplayItems = items[0:pageSize]

    def getVisibleItems(self):
        return (self.currentDisplayItems)

    def prevPage(self):
        if self.currentPage > 1:
            self.currentPage -= 1
            self.currentDisplayItems = self.items[(
                self.currentPage-1)*self.pageSize:(self.currentPage)*self.pageSize]
            return self

    def nextPage(self):
        if self.currentPage < self.totalPages:
            self.currentPage += 1
            self.currentDisplayItems = self.items[(
                self.currentPage-1)*self.pageSize:self.currentPage*self.pageSize]
            return self

    def firstPage(self):
        self.currentPage = 1
        self.currentDisplayItems = self.items[(
            self.currentPage-1)*self.pageSize:self.currentPage*self.pageSize]
        return self

    def lastPage(self):
        self.currentPage = self.totalPages
        self.currentDisplayItems = self.items[(
            self.currentPage-1)*self.pageSize:self.currentPage*self.pageSize]
        return self

    def goToPage(self, pageNum):
        if pageNum < 1:
            self.currentPage=1
        elif pageNum > self.totalPages:
            self.currentPage=self.totalPages
        else:
            self.currentPage = pageNum
        self.currentDisplayItems = self.items[(
            self.currentPage-1)*self.pageSize:self.currentPage*self.pageSize]



alphabetList = [n for n in "abcdefghijklmnopqrstuvwxyz"]

p = Pagination(alphabetList, 4)

print(p.currentDisplayItems)

print(p.getVisibleItems())
print(p.pageSize, p.totalPages)
p.nextPage()
print(p.getVisibleItems())
p.nextPage()
print(p.getVisibleItems())
p.nextPage()
print(p.getVisibleItems())

p.nextPage().nextPage()
print(p.getVisibleItems())
p.firstPage()
print(p.getVisibleItems())
p.lastPage()
print(p.getVisibleItems())
p.goToPage(0)
print(p.getVisibleItems())
p.goToPage(2)
print(p.getVisibleItems())
p.goToPage(20)
print(p.getVisibleItems())


# print(p.getVisibleItems())
# p.nextPage()
# print(p.getVisibleItems())
# p.nextPage()
# print(p.getVisibleItems())
# p.nextPage()
# print(p.getVisibleItems())
# p.prevPage()
# print(p.getVisibleItems())
# p.prevPage()
# print(p.getVisibleItems())
# p.prevPage()
# print(p.getVisibleItems())
# p.prevPage()
# print(p.getVisibleItems())
# p.prevPage()
# print(p.getVisibleItems())
# p.prevPage()
# print(p.getVisibleItems())
# p.prevPage()
# print(p.getVisibleItems())
# p.prevPage()
# print(p.getVisibleItems())
