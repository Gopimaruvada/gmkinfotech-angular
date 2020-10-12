import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";

declare var Email: any;

@Injectable({
  providedIn: "root",
})
export class BaseService {
  bgclassnav: boolean = false;
  constructor() {}

  sendEmail(details) {
      const subject = `Need service for ${details.firstName}`;
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "ramakrishnatolapu.dev@gmail.com",
        Password : environment.smtpPassword,
     // SecureToken: environment.securityToken,
      To: "ram2rakhi@gmail.com",
      From: "ramakrishnatolapu.dev@gmail.com",
      Subject: subject,
      Body: `
                <h3>Hi Team,</h3> 
                <br/>
                <p>${details.firstName} contacted us for ${details.service} wit the following details:</p> 
                <br/>
                <table>
                    <tr> 
                        <td>Name: </td>  <td>${details.firstName} ${details.lastName}</td>
                    </tr>
                    <tr> 
                        <td>Email: </td>  <td>${details.email}</td>
                    </tr>
                    <tr> 
                        <td>mobile: </td>  <td>${details.mobile}</td>
                    </tr>
                    <tr> 
                        <td>Service: </td>  <td>${details.service}</td>
                    </tr>
                    <tr> 
                         <td>Budget: </td>  <td>${details.budget}</td>
                     </tr>
                    <tr> 
                        <td>Urgency: </td>  <td>${details.urgency}</td>
                    </tr>
                    <tr> 
                        <td>Requirement: </td>  <td>${details.requirement}</td>
                    </tr>
                    <tr> 
                        <td>About: </td>  <td>${details.about}</td>
                    </tr>
                </table>
                <br/>
                <p>Thank You,</p>
                <p>Dev Team</p>
            `,
      Attachments: [], //name,path
    }).then((message) => alert(message));
  }
}
