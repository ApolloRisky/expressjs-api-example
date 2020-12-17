class Pagination {
  constructor({
    page = 1,
    pageSize = 10,
  }) {
    this.total = 0;
    this.count = 0;
    this.page = page < 0 ? 1 : Math.ceil(page);
    this.pageSize = pageSize < 0 ? 10 : Math.ceil(pageSize);
    this.skipCount = (this.page - 1) * this.pageSize;
  }

  paginate(list = [], total) {
    this.total = total;
    this.count = list.length;

    return {
      list,
      pagi: {
        page: this.page,
        pageSize: this.pageSize,
        count: this.count,
        total: this.total,
      },
    };
  }
}

module.exports = Pagination;
