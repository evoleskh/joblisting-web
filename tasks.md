- [x] create jobs page, jobs list, job details
- [x] make mock data as api so we can fetch data
- [x] make the job details component as server components 
- [ ] improve data schema to look like real jobs
- [ ] logic to improve job details in small screen

so now we can have beautiful layout where job listing at the left and job details at the right
the job details is server components it used searchParams to get the job id from the url and then fetch the job details from the api
it used a const to keep id and then we use that id to select the a job with that job data we can display it in job details component