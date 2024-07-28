class DateUtilities {
  static toISOString(date: (string | Date)) {
    let dateObj: Date;

    if (typeof date === 'string') {
      dateObj = new Date(date);
    }
    else {
      dateObj = date;
    }

    return dateObj.toISOString().split('T')[0];
  }
}

export default DateUtilities;
