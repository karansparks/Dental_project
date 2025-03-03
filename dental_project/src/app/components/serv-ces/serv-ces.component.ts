import { Component, OnInit , signal , inject } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ThemeModuleModule } from '../../@modules/theme-module/theme-module.module';
import { SharedServiceService } from '../../services/shared-service.service';

@Component({
  selector: 'app-serv-ces',
  standalone:true,
  imports:[HeaderComponent,ThemeModuleModule],
  templateUrl: './serv-ces.component.html',
  styleUrl: './serv-ces.component.scss'
})
export class ServCesComponent implements OnInit {
 servicesData = inject(SharedServiceService);

  constructor() {}
  serviceDatas= signal<any[]>([{
    id:1,
    title : 'Braces',
    imgUrl:'./doctor.jpeg',
    description : ['Brace yourself for a whole new world of straight teeth and dazzling smiles with Braces Orthodontics. We’ll take you on a journey of smiles with our colourful braces, clear aligners and cutting-edge technology. Get ready to grin from ear to ear! Our team of experienced and dedicated orthodontists are committed to providing you with the highest level of service and care. We understand that every patient is unique, and we’ll work with you to create a personalized treatment plan that’s tailored to your specific needs and goals.','Orthodontic treatment is a type of treatment for irregular teeth, such as a bad bite or crooked teeth. It involves using wires and brackets to move teeth to the correct position, improving oral health and facial bone development. It can also prevent larger dental problems from developing later in life.','Orthodontic treatment can improve bite, making it easier to chew and speak, and aligning teeth for improved appearance. It can correct problems such as overcrowded or spaced teeth, crooked teeth, and uneven tooth wear, which can lead to jaw problems and difficulty cleaning teeth.','Orthodontic treatment has two types of appliances, fixed (braces or brackets) and removable. Fixed treatment is better for major problems and has less chance of relapse. Treatment can take 12-30 months, but can take longer for adults as facial bones have stopped growing. Keeping teeth and gums healthy during treatment can help keep treatment time on track.']
  ,
},{
  id:2,
  title : 'Dentures',
  imgUrl:'./doctor.jpeg',
  description : ['Let us help you say goodbye to ill-fitting, uncomfortable dentures and hello to a new, confident smile. We’ll make sure your dentures fit like a glove, and you’ll be able to enjoy all your favorite foods again in no time! At our clinic, our team of experts will work with you every step of the way to ensure your dentures are customized to your unique needs and preferences. From tooth color to shape, we’ll make sure your new dentures look and feel like your natural teeth.','Dentures are removable replacements for missing teeth and surrounding tissues. Benefits include restoring appearance, allowing for a normal diet, improved self-esteem, clear speech, and better digestion. Advances in dentistry have made dentures more natural-looking and comfortable. Two types are available, and regular check-ups with the dentist are necessary for proper fit and adjustments.','Dentures are removable replacements for missing teeth and surrounding tissues. Benefits include restoring appearance, allowing for a normal diet, improved self-esteem, clear speech, and better digestion. Advances in dentistry have made dentures more natural-looking and comfortable. Two types are available, and regular check-ups with the dentist are necessary for proper fit and adjustments.']
},{
  id:3,
  title : 'Clear aligner',
  imgUrl:'./doctor.jpeg',
  description : ['Say goodbye to metal mouth and hello to a discreet new you with Invisalign, the clear choice for a straighter smile. The aligners are made of a comfortable, clear plastic material that is virtually invisible when worn. The aligners are removable, which makes it easy to eat, brush and floss your teeth as you normally would and they are specifically designed to apply the right amount of force to the right teeth at the right time to achieve desired result.','Invisalign is a popular alternative to traditional braces that is more comfortable and invisible. It is more expensive on average, but many patients prefer it for its removability and clear plastic material. There are affordable and flexible payment plans available and dental insurance may cover some or all of the cost. Contact us for more details and to discuss your treatment options.','Based on any promotional offers or special occasions there may be given special offers on Invisalign treatment. Kindly contact us for more details.','Yes. We offer third-party financing, month-on-month payment plans and pay-as-you-go treatment options that can help with Invisalign costs.','This completely depends on the complexity of your case. Some Invisalign cases can take only a few months, while others can take up to 18 months. During your consultation visit, our team will let you know how exactly our treatment will be.']
},{
  id:4,
  title : 'Root Canal Therapy',
  imgUrl:'./doctor.jpeg',
  description : ['Don’t let a painful tooth ruin your day, let our Root Canal therapy service save the day! Our team of experts will make sure your root canal therapy is as painless as possible and have you back to your normal routine in no time. At our clinic, we use the latest technology and techniques to ensure that your root canal therapy is comfortable and efficient. Don’t let a bad tooth bring you down, let us root out the problem and have you smiling again in no time.','A tooth is composed of three layers: the outer enamel, the middle dentin, and the inner pulp (which contains nerves and blood vessels). Decay or damage to a tooth can occur in any of these layers, but it typically starts in the enamel. As the decay progresses, it can reach the dentin and pulp, causing severe pain and infection. In such cases, a root canal procedure may be necessary to clean out the infected pulp and repair the damage. Symptoms that may indicate the need for a root canal include spontaneous pain or throbbing while chewing, sensitivity to hot and cold foods, and severe decay or an injury that leads to an infection in the bone.']
},
{
  id:5,
  title : 'Dental Implants',
  imgUrl:'./doctor.jpeg',
  description : ['Get ready to say goodbye to gaps and hello to a new set of pearly whites with our Dental Implants service. Whether you’re missing one tooth or several, our team of experts will give you a smile that will knock your socks off! Our state-of-the-art technology and techniques ensure that your dental implants look and feel like your natural teeth. With our Dental Implants, you’ll be able to eat, speak, and smile with confidence again.','Dental implants are metal screw-like structures that are surgically placed in the jawbone to replace missing teeth. They act as an anchor for an overlying crown. Dental implant can be used to replace a single missing tooth. Missing teeth can cause several problems, such as:Problem 1: The gap from a missing tooth can cause the neighboring teeth to shift out of place as they try to fill the space.Problem 2: The adjacent teeth may begin to tilt towards the empty space.Problem 3: The jawbone may shrink in height and density as the tooth is no longer there to provide stimulation and support.','Dental implants are placed in the jawbone and allowed to heal for about three months. During this time, the bone around the implant grows and fuses with the implant, providing added stability. The result is a natural-looking replacement tooth that provides improved speech, making it easier to chew food, and eliminates the inconvenience of removable dentures. Additionally, dental implants do not require grinding down or reduction of other teeth and it is a conservative approach to replace a missing tooth. The success rate of implants is 98%.']
},{
  id:6,
  title : 'Infection Control',
  imgUrl:'./doctor.jpeg',
  description : ['Don’t let germs and bacteria dull your shine, let our Dental Infection Control service keep your smile sparkling! Our team of experts will make sure your dental environment is as clean and safe as possible, so you can relax and smile with confidence.Infection control is of the utmost importance at our dental center. We use disposable supplies and instruments that are not reused, and all other instruments are made of stainless steel or plastic that can withstand extreme heat and pressure in an autoclave sterilizer. All surfaces are cleaned and disinfected between appointments to prevent the spread of disease and cross-contamination.','DWe follow a four-tier sterilization procedure for non-disposable instruments. The instruments are scrubbed with spirit swabs to remove any debris, then immersed in a 5% Karsolex sterilizing solution for standard disinfection. The standard sterilization method used in our dental office is autoclaving. We also store sterilized instruments in a UV chamber to maintain their sterile condition.','Our infection control policies are in line with the standards recommended by the American Dental Association (ADA) and we are committed to your safety. Our team is highly trained and skilled, and we continuously strive to educate ourselves through attending dental lectures, meetings, and conventions to stay informed of new techniques and the latest equipment in the field. We are also members of various professional dental associations to keep up to date with the changes and recommendations for our profession. Our goal is to provide excellent, personalized care and make your visits as comfortable as possible.']
},{
  id:7,
  title : 'Gum Therapy',
  imgUrl:'./doctor.jpeg',
  description : ['Gum up the works no more! Allow our Gum Therapy service to provide you with a healthy smile that will help your gums smile as well. Our professionals will collaborate with you to keep your gums healthy and robust so that your smile may shine brightly.','Gum therapy is a treatment used to remove bacterial infections in the gums. These infections occur when bacteria in the mouth react with food particles and cause the gums to become infected. Following the procedure, the infection is eliminated, bad breath is eliminated, bleeding gums will be resolved with proper adherence to prescribed treatment, the strength of the gums will be improved, and loose teeth will become more stable.']
},{
  id:8,
  title : 'Teeth Whitening',
  imgUrl:'./doctor.jpeg',
  description : ['Get ready to dazzle with our Teeth Whitening service. We’ll make sure your pearly whites are brighter than ever before. From in-office treatments to take-home kits, we’ll give you a smile that will light up any room. No more hiding your smile, let our Teeth Whitening service give you the confidence to show off your dazzling grin. Whether you want a subtle touch-up or a dramatic change, we’ve got you covered.','Tooth whitening is a popular cosmetic dental procedure that can help improve the appearance of discolored or stained teeth. This can occur due to aging, medications, and certain types of beverages. However, it is important to note that whitening may not be effective for certain types of discoloration and in those cases, a dentist may recommend alternatives such as veneers. Our clinic uses the latest technology, such as the pola product from SDI Australia, for in-office tooth whitening treatment. This can safely lighten the color of the teeth, reduce discoloration and staining, resulting in a brighter smile that can last for up to five years. Teeth whitening refers to various techniques used to improve the brightness of teeth, including chemical whitening, mild acid whitening, abrasive teeth brightening and the newest techniques.']
},{
  id:9,
  title : 'Extraction & Wisdom Teeth Removal',
  imgUrl:'./doctor.jpeg',
  description : ['Don’t let your wisdom teeth or teeth concerns obstruct your smile; Instead, let our extraction & wisdom teeth removal service help you with our cutting-edge equipment and techniques, we’ll make the procedure as painless as possible and have you back to your daily routine in no time.','Dental extraction is the process of removing a tooth from the mouth. There are various reasons for needing tooth extraction, such as when a tooth is severely decayed or damaged and cannot be restored. Impacted or problematic wisdom teeth are also commonly extracted. In some cases, permanent teeth may need to be extracted to make space for orthodontic treatment. ','DOur clinic offers extraction treatment for a variety of issues, such as badly decayed non-restorable teeth, root stumps, failed root canal treated teeth, impacted teeth, fractured teeth, and periodontally weak teeth. If you are experiencing severe tooth pain or have a broken down tooth, it may be necessary to have the tooth extracted. Wisdom teeth, in particular, are often removed by a dental surgeon, after a consultation and x-ray evaluation. During the extraction process, patients have the option to use local anesthesia or IV sedation. IV sedation is often preferred as it allows the patient to be relaxed and unaware of the procedure, while local anesthesia only numbs the area and the patient is fully aware of the extraction process.']
},{
  id:10,
  title : ' Kids Dentistry',
  imgUrl:'./doctor.jpeg',
  description : ['Welcome to the world of kids dentistry where we turn dental visits into fun adventures! From glittery toothbrushes to colorful braces, we’ll make sure your little one’s smile sparkles brighter than ever before.','Children’s teeth begin forming before birth and the first primary teeth usually appear by age 3. It’s important to begin oral care soon after birth by cleaning gums after each feeding and brushing teeth as soon as they appear. Permanent teeth begin appearing around age 6 and the process continues until around age 21.','Teaching your child good oral hygiene habits early on can set them up for a lifetime of healthy teeth and gums.Regular dental check-ups are important to ensure that your child’s teeth are developing properly and to detect any issues early on.','It’s important to limit sugary snacks and drinks in your child’s diet to prevent tooth decay.Encourage your child to drink tap water, which is often fluoridated and can help strengthen their teeth.Dental sealants can be a great way to protect your child’s molars from decay, especially if they are prone to cavities.As soon as your child’s first tooth appears, you should start using a soft-bristled toothbrush and a small amount of fluoride toothpaste to brush their teeth.Parents should supervise their child’s brushing and flossing until at least age 8 to ensure that they are doing it correctly.Dental X-rays can help your dentist detect any hidden problems with your child’s teeth such as cavities between their teeth or impacted wisdom teeth.']
}
]);
  trimData = signal<number>(0);
  loopData = signal<any[]>([]);

  message: number = 0;
  ngOnInit() {
    let serviceValue:any,originalData:any = [];
    this.servicesData.messageFirst.subscribe({
      next: (v:any) =>{
        this.message = v;
        console.log(`observerA: ${v}`)
        originalData = [];
        console.log(this.serviceDatas().find((data:any) => data.id === v))
        originalData.push(this.serviceDatas().find((data:any) => data.id === v));
        console.log("originalData",originalData);

        this.loopData.set(originalData)
        console.log("loopData",this.loopData());
        // this.trimData.set(v);

      } 
    });
    console.log("loopData",this.loopData());

    console.log("serviceValue",this.serviceDatas());
    console.log("message",this.message);


    
  }


}