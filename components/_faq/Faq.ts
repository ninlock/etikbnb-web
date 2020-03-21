import Vue from 'vue'
import Component from "~/node_modules/vue-class-component";
import {Prop} from "~/node_modules/vue-property-decorator";

@Component
export default class Faq extends  Vue {
  @Prop({default: () => {
      return [
        {value:"Qui est Etikbnb et que fait l’association?", opened : false, answer:"La réponse est cachée"},
        {value:"Test de question avec description ouverte.", opened : true, answer:"La réponse est visible"},
        {value:"Une autre question avec reponse fermé initialement.", opened : false, answer:"Une autre réponse"}
      ]
    }})
    items!: Array<any>;

  toggle(item: any): void {
    this.items = this.items.map(i => {
      if (i.value === item.value) {
        i.opened = !i.opened
      }
      return i;
    })
  }
}
