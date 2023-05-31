interface Teacher{
  readonly firstName: string,
  readonly lastName: string,
  fullTimeEmployee: boolean,
  yearsOfExperience?: Number,
  location: string,
  [propName: string]: any,
  }
