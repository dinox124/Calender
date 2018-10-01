import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import * as moment from 'moment';



@IonicPage()
@Component({
  selector: 'page-eventmodel',
  templateUrl: 'eventmodel.html',
})
export class EventmodelPage { 
  event={startTime:new Date().toISOString(),endTime: new Date().toISOString(),allday: false}
  minDate=new Date().toISOString();

  constructor(public navCtrl: NavController, public navParams: NavParams,public   viewCtrl: ViewController) {
    let preselectedDate = moment(this.navParams.get('selectedDay')).format();
    this.event.startTime=preselectedDate;
    this.event.endTime=preselectedDate;
  }
  clear(){
    this.viewCtrl.dismiss()
  }
 
  save(){
    this.viewCtrl.dismiss(this.event);
  }
}
