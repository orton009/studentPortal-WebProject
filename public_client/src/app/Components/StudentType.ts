export class StudentType {
    tagline : string;
    email : string ;
    website : string ;
    name : string ;
    phone : number ;
    socialLink : { linkedIn:string , github:string , twitter:string } ;
    education : { degree : string , meta: string , time : string }[] ;
    languages : string[] ;
    interests : string[] ;
    profile : {summary:string} ;
    experiences : {jobTitle : string , time : string , company:string , details:string}[] ;
    projects: { projectTitle : string , projectTagline : string }[] ;
    skills : string[] ;

    constructor(){

    }
}