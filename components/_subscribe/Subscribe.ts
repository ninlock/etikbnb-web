import Vue from 'vue'
import {Component, Prop} from 'vue-property-decorator'

@Component
export default class Subscribe extends Vue{
    @Prop()
    email!: String;
    @Prop()
    type!: String;
    @Prop({default: () => {
        return [
          {label:"Proposer un hebergement", value:"owner"},
          {label:"Faire une demande d'hebergement", value:"applicant"},
          {label:"Soutenir le projet", value:"donor"}
        ]
    }})
    types!: [];
    @Prop({default: ()=>new Array<String>()})
    errors!: Array<String>;

   checkForm(e: any): boolean {
      this.errors = [];

      if (!this.email) {
        this.errors.push('email')
      }

      if (!this.type) {
        this.errors.push('type')
      }

      e.preventDefault();
      if (this.errors.length == 0) {
        let subject= "Inscription etikbnb:";
        let body = 'Informations :\r\n    mail : ' + this.email + '\r\n    type : ' + this.type;

        let uri = "mailto:mail@example.org?subject=";
        uri += encodeURIComponent(subject);
        uri += "&body=";
        uri += encodeURIComponent(body);

        window.open(uri);
      }
      return false;
    }
}
