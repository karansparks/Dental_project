import { Component, OnInit , signal , inject } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ThemeModuleModule } from '../../@modules/theme-module/theme-module.module';
import { SharedServiceService } from '../../services/shared-service.service';
import { AppointmentComponent } from '../appointment/appointment.component';
import { FooterComponent } from '../footer/footer.component';
import { FaqComponent } from '../faq/faq.component';

@Component({
  selector: 'app-serv-ces',
  standalone:true,
  imports:[HeaderComponent,ThemeModuleModule,AppointmentComponent,FooterComponent,FaqComponent],
  templateUrl: './serv-ces.component.html',
  styleUrl: './serv-ces.component.scss'
})
export class ServCesComponent implements OnInit {
 servicesData = inject(SharedServiceService);

  constructor() {}
  serviceDatas= signal<any[]>([{
    id: 1,
    title: 'BRACES ORTHODONTICS',
    imgUrl: './b2.jpg',
    imgUrl1: './b2.1.jpg',
    style: 'width: 50%; height: auto;',
    description: [
        'Brace yourself for a whole new world of straight teeth and dazzling smiles with Braces Orthodontics. We’ll take you on a journey of smiles with our colourful braces, clear aligners, and cutting-edge technology. Get ready to grin from ear to ear! Our team of experienced and dedicated orthodontists are committed to providing you with the highest level of service and care. We understand that every patient is unique, and we’ll work with you to create a personalized treatment plan that’s tailored to your specific needs and goals.',
        'Orthodontic treatment is a type of treatment for irregular teeth, such as a bad bite or crooked teeth. It involves using wires and brackets to move teeth to the correct position, improving oral health and facial bone development. It can also prevent larger dental problems from developing later in life.',
        'Orthodontic treatment can improve bite, making it easier to chew and speak, and aligning teeth for improved appearance. It can correct problems such as overcrowded or spaced teeth, crooked teeth, and uneven tooth wear, which can lead to jaw problems and difficulty cleaning teeth.',
        'Orthodontic treatment has two types of appliances: fixed (braces or brackets) and removable. Fixed treatment is better for major problems and has less chance of relapse. Treatment can take 12-30 months, but it may take longer for adults as facial bones have stopped growing. Keeping teeth and gums healthy during treatment can help keep treatment time on track.'
    ],
    description1: [
        'Invisalign offers a comfortable, clear, and removable solution for straightening teeth without the hassle of metal braces. Made from virtually invisible plastic material, these aligners let you maintain your natural smile while effectively correcting misalignment.',
        '',
        'Why Choose Invisalign?',
        '',
        '✔ Invisible: Clear aligners blend seamlessly with your teeth.',
        '✔ Comfortable: No wires or brackets causing discomfort.',
        '✔ Removable: Eat, brush, and floss with ease.',
        '✔ Effective: Custom-designed to apply the right amount of pressure to the right teeth at the right time.',
        '',
        'Though Invisalign tends to be more expensive than traditional braces, flexible payment plans and insurance coverage may help reduce costs. Contact us today to explore your treatment options!'
    ]
},
{
  id: 2,
  title: 'DENTURES',
  imgUrl: './d2.jpg',
  imgUrl1: './denture.webp',
  style: 'width: 50%; height: auto;',
  description: [
    'Let us help you say goodbye to ill-fitting, uncomfortable dentures and hello to a new, confident smile. We’ll make sure your dentures fit like a glove, and you’ll be able to enjoy all your favorite foods again in no time! At our clinic, our team of experts will work with you every step of the way to ensure your dentures are customized to your unique needs and preferences. From tooth color to shape, we’ll make sure your new dentures look and feel like your natural teeth.',
    'Dentures are removable replacements for missing teeth and surrounding tissues. They restore appearance, allow for a normal diet, improve self-esteem, enhance speech clarity, and support better digestion. Advances in dentistry have made modern dentures more natural-looking and comfortable. There are two main types: complete dentures for those who have lost all teeth and partial dentures for those with some remaining natural teeth.',
    'Types of Dentures:\n    1. Complete Dentures: Used when all teeth are missing, available in conventional and immediate types.\n    2. Partial Dentures: Used when some natural teeth remain, preventing shifting and improving oral function.\n    3. Implant-Supported Dentures: More stable option, secured with dental implants.\n    4. Snap-In Dentures: Provide extra retention and stability with snap-on attachments.',
    'Benefits of Dentures:\n    - Restores facial structure and aesthetics.\n    - Allows comfortable chewing and speaking.\n    - Boosts confidence and self-esteem.\n    - Easy to remove and clean.\n    - Modern designs ensure a natural appearance and comfortable fit.',
    'Denture Care Tips:\n    - Clean dentures daily with a soft brush and mild soap or denture cleaner.\n    - Soak dentures overnight in a denture solution to maintain moisture.\n    - Avoid hot water, which can warp the denture material.\n    - Regular dental visits are necessary for adjustments and oral health maintenance.',
    'If you’re considering dentures, schedule a consultation with our dental specialists to find the best option for you!'
  ],
  description1: [
    'How to Adjust to New Dentures:\n    - Start with soft foods and gradually introduce harder foods.\n    - Practice speaking to get used to the feel of dentures.\n    - Expect a short adjustment period before full comfort is achieved.\n    - Visit the dentist for any necessary adjustments to prevent irritation.',
    'Common Issues and Solutions:\n    - Sore Spots: Typically resolve with minor adjustments.\n    - Slipping: Using a denture adhesive can help secure the fit.\n    - Excess Saliva: A temporary reaction that improves over time.\n    - Difficulty Chewing: Start with small bites and soft foods until comfortable.',
    'Longevity of Dentures:\n    - Dentures typically last 5-10 years with proper care.\n    - Regular dental check-ups are necessary to ensure continued fit and comfort.\n    - Relining or replacing may be required as the mouth structure changes over time.',
    'Alternative Treatments:\n    - Dental Implants: Permanent and more stable than dentures.\n    - Bridges: Fixed replacements for missing teeth.\n    - Hybrid Dentures: A combination of implants and removable dentures for added stability.'
  ]
}
,{
  id: 3,
  title: 'CLEAR ALIGNER',
  imgUrl: './ca2.jpg',
  imgUrl1: './ca1.jpg',
  style: 'width: 50%; height: auto;',
  description: [
    'Say goodbye to metal mouth and hello to a discreet new you with Invisalign, the clear choice for a straighter smile. The aligners are made of a comfortable, clear plastic material that is virtually invisible when worn. The aligners are removable, which makes it easy to eat, brush and floss your teeth as you normally would, and they are specifically designed to apply the right amount of force to the right teeth at the right time to achieve desired results.',
    'Invisalign is a popular alternative to traditional braces that is more comfortable and invisible. It is more expensive on average, but many patients prefer it for its removability and clear plastic material. There are affordable and flexible payment plans available, and dental insurance may cover some or all of the cost. Contact us for more details and to discuss your treatment options.',
    'Types of Clear Aligners:\n    1. Invisalign: The most well-known brand, offering customized treatment plans.\n    2. Smile Direct Club: A more affordable option with at-home treatment.\n    3. Byte: Known for faster treatment times due to its high-frequency vibration technology.\n    4. Candid: Provides in-person consultations along with remote monitoring.',
    'Benefits of Clear Aligners:\n    - Virtually invisible, allowing a discreet treatment experience.\n    - Removable for easy eating, brushing, and flossing.\n    - No food restrictions compared to traditional braces.\n    - More comfortable with no wires or brackets.\n    - Gradual teeth movement with minimal discomfort.',
    'Clear Aligner Care Tips:\n    - Clean aligners daily with a gentle, non-abrasive toothpaste and soft brush.\n    - Avoid drinking colored beverages like coffee or tea while wearing aligners to prevent staining.\n    - Store aligners in their case when not in use to prevent damage.\n    - Follow the treatment plan and wear aligners for at least 20-22 hours daily for best results.',
    'If you’re considering clear aligners, schedule a consultation with our dental specialists to find the best option for you!'
  ],
  description1: [
    'How to Adjust to Clear Aligners:\n    - Expect mild discomfort initially as teeth start shifting.\n    - Speak more frequently to get used to aligners faster.\n    - Stay consistent with wearing aligners for the recommended time to avoid treatment delays.',
    'Common Issues and Solutions:\n    - Initial Discomfort: Usually subsides within a few days.\n    - Aligners Feeling Loose: Some looseness is normal before switching to a new set.\n    - Speech Difficulty: Typically improves within a week of wearing aligners.',
    'Longevity of Treatment:\n    - The duration depends on the complexity of the case, ranging from a few months to 18 months.\n    - Follow-up visits or remote monitoring ensure the treatment stays on track.',
    'Alternative Treatments:\n    - Traditional Braces: More effective for severe misalignment cases.\n    - Lingual Braces: Placed behind the teeth for a hidden orthodontic solution.\n    - Retainers: Used post-treatment to maintain teeth position.\n    - Veneers: An option for cosmetic improvement without orthodontic treatment.'
  ]
}
,{
  id: 4,
  title: 'ROOT CANAL THERAPY',
  imgUrl: './root1.jpg',
  imgUrl1: './rootpatient.jpg',
  style: 'width: 50%; height: auto;',
  description: [
    'Don’t let a painful tooth ruin your day, let our Root Canal Therapy service save the day! Our team of experts will make sure your root canal therapy is as painless as possible and have you back to your normal routine in no time. At our clinic, we use the latest technology and techniques to ensure that your root canal therapy is comfortable and efficient. Don’t let a bad tooth bring you down, let us root out the problem and have you smiling again in no time.',
    'A tooth is composed of three layers: the outer enamel, the middle dentin, and the inner pulp (which contains nerves and blood vessels). Decay or damage to a tooth can occur in any of these layers, but it typically starts in the enamel. As the decay progresses, it can reach the dentin and pulp, causing severe pain and infection. In such cases, a root canal procedure may be necessary to clean out the infected pulp and repair the damage. Symptoms that may indicate the need for a root canal include spontaneous pain or throbbing while chewing, sensitivity to hot and cold foods, and severe decay or an injury that leads to an infection in the bone.',
    'Steps of Root Canal Therapy:\n    1. Diagnosis: X-rays are taken to determine the extent of the infection.\n    2. Anesthesia: The tooth is numbed to ensure a painless procedure.\n    3. Pulp Removal: The infected pulp is removed, and the canals are cleaned.\n    4. Disinfection: The canals are disinfected to prevent reinfection.\n    5. Filling and Sealing: The cleaned canals are filled with a biocompatible material.\n    6. Restoration: A crown or filling is placed to restore the tooth’s function and appearance.',
    'Benefits of Root Canal Therapy:\n    - Saves the natural tooth, preventing extraction.\n    - Relieves pain and discomfort caused by infection.\n    - Prevents further infection and protects surrounding teeth.\n    - Restores normal biting and chewing ability.\n    - Enhances overall oral health and function.',
    'Post-Treatment Care:\n    - Avoid chewing on the treated tooth until fully restored.\n    - Maintain good oral hygiene with regular brushing and flossing.\n    - Schedule follow-up visits to monitor healing and restoration.\n    - Take prescribed medications as directed to manage any discomfort.',
    'If you’re experiencing tooth pain or signs of infection, contact our specialists to discuss whether a root canal is the right solution for you!'
  ],
  description1: [
    'Common Myths About Root Canals:\n    - "Root canals are painful": With modern anesthesia, root canals are no more painful than a filling.\n    - "Extraction is a better option": Saving your natural tooth is often the best choice for long-term dental health.\n    - "Root canals cause illness": This is a misconception; root canals eliminate infection rather than cause it.',
    'Longevity of Root Canal Treatment:\n    - With proper care, a treated tooth can last a lifetime.\n    - Regular dental check-ups help ensure the tooth remains healthy.\n    - A well-placed crown can enhance the durability of the treated tooth.',
    'Alternative Treatments:\n    - Tooth Extraction: May be necessary if the tooth is too damaged to be saved.\n    - Dental Implants: An option for replacing an extracted tooth.\n    - Bridge or Partial Denture: Used to restore function after tooth loss.'
  ]
}
,
{
  id: 5,
  title: 'DENTAL IMPLANTS',
  imgUrl: './dental.jpg',
  imgUrl1: './services/dental_implants.jpeg',
  style: 'width: 50%; height: auto;',
  description: [
    'Get ready to say goodbye to gaps and hello to a new set of pearly whites with our Dental Implants service. Whether you’re missing one tooth or several, our team of experts will give you a smile that will knock your socks off! Our state-of-the-art technology and techniques ensure that your dental implants look and feel like your natural teeth. With our Dental Implants, you’ll be able to eat, speak, and smile with confidence again.',
    'Dental implants are metal screw-like structures that are surgically placed in the jawbone to replace missing teeth. They act as an anchor for an overlying crown. A dental implant can be used to replace a single missing tooth. Missing teeth can cause several problems, such as:',
    '- The gap from a missing tooth can cause the neighboring teeth to shift out of place.',
    '- Adjacent teeth may begin to tilt towards the empty space.',
    '- The jawbone may shrink in height and density due to lack of stimulation.',
    'Dental implants are placed in the jawbone and allowed to heal for about three months. During this time, the bone around the implant grows and fuses with the implant, providing added stability. The result is a natural-looking replacement tooth that improves speech, enhances chewing ability, and eliminates the inconvenience of removable dentures. Additionally, dental implants do not require grinding down or reduction of other teeth, making them a conservative approach to tooth replacement. The success rate of implants is 98%.',
    'Types of Dental Implants:',
    '1. Endosteal Implants: The most common type, placed directly into the jawbone.',
    '2. Subperiosteal Implants: Placed under the gum but above the jawbone, ideal for patients with insufficient bone height.',
    '3. All-on-4 Implants: A full-arch replacement using only four strategically placed implants.',
    'Benefits of Dental Implants:',
    '- Provides a long-lasting and durable tooth replacement.',
    '- Preserves jawbone density and prevents facial sagging.',
    '- Feels and functions like a natural tooth.',
    '- Eliminates the discomfort of removable dentures.',
    '- Allows for normal eating and speaking abilities.',
    'Post-Treatment Care:',
    '- Maintain good oral hygiene by brushing and flossing regularly.',
    '- Avoid hard foods that could damage the implant crown.',
    '- Visit the dentist for regular check-ups to ensure implant stability.',
    'If you’re considering dental implants, book a consultation with our specialists today to determine the best treatment plan for your needs!'
  ],
  description1: [
    'Procedure of Dental Implant Placement:',
    '1. Initial Consultation: The dentist evaluates oral health and bone density to determine if implants are a suitable option.',
    '2. Implant Placement: A titanium post is surgically inserted into the jawbone, serving as a strong foundation for the artificial tooth.',
    '3. Healing Period: The implant integrates with the bone over several months, ensuring stability and strength.',
    '4. Abutment Placement: A small connector (abutment) is attached to the implant to support the final crown.',
    '5. Crown Attachment: A custom-made crown is placed on top of the abutment, restoring the natural appearance and function of the tooth.',
    'Common Concerns About Dental Implants:',
    '- "Are implants painful?" The procedure is done under anesthesia, minimizing discomfort. Some mild soreness may occur during healing.',
    '- "How long do they last?" With proper care, dental implants can last a lifetime, making them a long-term solution.',
    '- "Are implants safe?" Yes, dental implants are a well-established and proven treatment with a high success rate.',
    'Alternative Tooth Replacement Options:',
    '- Dental Bridges: A fixed prosthetic that replaces missing teeth by anchoring to adjacent natural teeth.',
    '- Removable Dentures: A non-surgical alternative that provides a temporary or permanent solution for missing teeth.',
    '- Mini Dental Implants: A less invasive option for patients with limited bone volume, requiring a shorter healing period.'
  ]
}

,{
  id: 6,
  title: 'INFECTION CONTROL',
  imgUrl: './infection.jpg',
  imgUrl1: './infectioncontrol.jpg',
  style: 'width: 50%; height: auto;',
  description: [
    "Don’t let germs and bacteria dull your shine, let our Dental Infection Control service keep your smile sparkling! Our team of experts will make sure your dental environment is as clean and safe as possible, so you can relax and smile with confidence. Infection control is of the utmost importance at our dental center. We use disposable supplies and instruments that are not reused, and all other instruments are made of stainless steel or plastic that can withstand extreme heat and pressure in an autoclave sterilizer. All surfaces are cleaned and disinfected between appointments to prevent the spread of disease and cross-contamination.",
    "We follow a four-tier sterilization procedure for non-disposable instruments. The instruments are scrubbed with spirit swabs to remove any debris, then immersed in a 5% Karsolex sterilizing solution for standard disinfection. The standard sterilization method used in our dental office is autoclaving. We also store sterilized instruments in a UV chamber to maintain their sterile condition.",
    "Our infection control policies are in line with the standards recommended by the American Dental Association (ADA) and we are committed to your safety. Our team is highly trained and skilled, and we continuously strive to educate ourselves through attending dental lectures, meetings, and conventions to stay informed of new techniques and the latest equipment in the field. We are also members of various professional dental associations to keep up to date with the changes and recommendations for our profession. Our goal is to provide excellent, personalized care and make your visits as comfortable as possible.",
    "Steps in Our Infection Control Process:",
    "1. Hand Hygiene: Our staff follows strict hand hygiene protocols before and after each patient interaction.",
    "2. Personal Protective Equipment (PPE): We use gloves, masks, face shields, and protective clothing to ensure safety.",
    "3. Surface Disinfection: All treatment areas are cleaned and disinfected between patient appointments.",
    "4. Instrument Sterilization: We follow a rigorous sterilization process for reusable instruments, including autoclaving and chemical disinfection.",
    "5. Air Filtration: We use high-efficiency particulate air (HEPA) filters to maintain clean air circulation in our clinic.",
    "6. Patient Education: We provide guidelines to our patients on maintaining oral hygiene and preventing infections at home."
  ],
  description1: [
    "Common Questions About Infection Control:",
    "- Why is infection control important? Proper infection control prevents the spread of bacteria and viruses, ensuring patient safety.",
    "- How do you ensure sterilization of dental instruments? We use a multi-step sterilization process including ultrasonic cleaning, chemical disinfection, and autoclaving.",
    "- Are disposable items used for each patient? Yes, wherever possible, we use disposable items such as gloves, masks, and single-use instruments to prevent cross-contamination.",
    "- How often are dental chairs and surfaces cleaned? All surfaces and dental chairs are disinfected thoroughly between every patient visit.",
    "If you have any concerns about infection control measures, feel free to reach out to our team for more information!"
  ]
},{
  id: 7,
  title: 'GUM THERAPY',
  imgUrl: './gum.jpg',
  imgUrl1: './gum1.jpg',
  style: 'width: 50%; height: auto;',
  description: [
    "Gum up the works no more! Allow our Gum Therapy service to provide you with a healthy smile that will help your gums smile as well. Our professionals will collaborate with you to keep your gums healthy and robust so that your smile may shine brightly.",
    "Gum therapy is a treatment used to remove bacterial infections in the gums. These infections occur when bacteria in the mouth react with food particles and cause the gums to become infected. Following the procedure, the infection is eliminated, bad breath is eliminated, bleeding gums will be resolved with proper adherence to prescribed treatment, the strength of the gums will be improved, and loose teeth will become more stable.",
    "Gum disease, also known as periodontal disease, is a common condition that affects the supporting structures of the teeth. It can cause redness, swelling, bleeding, and in severe cases, tooth loss. Regular dental visits and professional gum therapy can help manage and prevent these issues.",
    "Treatment options for gum therapy may include deep cleaning (scaling and root planing), laser therapy, and medication to reduce bacterial infection. In some cases, surgical intervention may be required for advanced gum disease."
  ],
  description1: [
    "Common Questions About Gum Therapy:",
    "- What are the symptoms of gum disease? Symptoms include swollen, red, or bleeding gums, persistent bad breath, gum recession, and loose teeth.",
    "- Is gum therapy painful? Most gum therapy procedures are performed under local anesthesia, making them relatively painless. Some discomfort may be experienced afterward, but it is usually minimal.",
    "- How long does gum therapy take? The duration depends on the severity of the condition, but most treatments are completed within one or two visits.",
    "- Can gum disease be reversed? In its early stages (gingivitis), gum disease can often be reversed with proper care and treatment. Advanced cases require ongoing management.",
    "If you have any concerns about your gum health, contact us for a consultation!"
  ]
}
,{
  id: 8,
  title: 'TEETH WHITENING',
  imgUrl: './white.jpg',
  imgUrl1: './white1.jpg',
  style: 'width: 50%; height: auto;',
  description: [
    "Get ready to dazzle with our Teeth Whitening service. We’ll make sure your pearly whites are brighter than ever before. From in-office treatments to take-home kits, we’ll give you a smile that will light up any room. No more hiding your smile, let our Teeth Whitening service give you the confidence to show off your dazzling grin. Whether you want a subtle touch-up or a dramatic change, we’ve got you covered.",
    "Tooth whitening is a popular cosmetic dental procedure that can help improve the appearance of discolored or stained teeth. This can occur due to aging, medications, and certain types of beverages. However, it is important to note that whitening may not be effective for certain types of discoloration and in those cases, a dentist may recommend alternatives such as veneers. Our clinic uses the latest technology, such as the pola product from SDI Australia, for in-office tooth whitening treatment. This can safely lighten the color of the teeth, reduce discoloration and staining, resulting in a brighter smile that can last for up to five years. Teeth whitening refers to various techniques used to improve the brightness of teeth, including chemical whitening, mild acid whitening, abrasive teeth brightening and the newest techniques."
  ],
  description1: [
    "Common Questions About Teeth Whitening:",
    "- How long does teeth whitening last? The results can last from several months to a few years, depending on lifestyle habits and oral care.",
    "- Is teeth whitening safe? Yes, professional whitening treatments are safe when performed by a dentist. Overuse of whitening products, however, can lead to tooth sensitivity and enamel damage.",
    "- Can anyone get their teeth whitened? Most people are good candidates for whitening, but those with dental restorations (like crowns or veneers) or severe discoloration may need alternative treatments.",
    "- Does whitening cause tooth sensitivity? Some people experience temporary sensitivity, but it usually subsides within a few days. Your dentist can recommend desensitizing treatments if needed.",
    "If you're interested in brightening your smile, schedule a consultation with us today!"
  ]
},{
  id: 9,
  title: 'EXTRACTION & WISDOM TEETH REMOVAL',
  imgUrl: './extraction.jpg',
  imgUrl1: 'extraction1.jpg',
  style: 'width: 50%; height: auto;',
  description: [
    "Don’t let your wisdom teeth or teeth concerns obstruct your smile; Instead, let our extraction & wisdom teeth removal service help you. With our cutting-edge equipment and techniques, we’ll make the procedure as painless as possible and have you back to your daily routine in no time.",
    "Dental extraction is the process of removing a tooth from the mouth. There are various reasons for needing tooth extraction, such as when a tooth is severely decayed or damaged and cannot be restored. Impacted or problematic wisdom teeth are also commonly extracted. In some cases, permanent teeth may need to be extracted to make space for orthodontic treatment.",
    "Our clinic offers extraction treatment for a variety of issues, such as badly decayed non-restorable teeth, root stumps, failed root canal treated teeth, impacted teeth, fractured teeth, and periodontally weak teeth. If you are experiencing severe tooth pain or have a broken-down tooth, it may be necessary to have the tooth extracted. Wisdom teeth, in particular, are often removed by a dental surgeon after a consultation and x-ray evaluation. During the extraction process, patients have the option to use local anesthesia or IV sedation. IV sedation is often preferred as it allows the patient to be relaxed and unaware of the procedure, while local anesthesia only numbs the area and the patient is fully aware of the extraction process."
  ],
  description1: [
    "Common Questions About Tooth Extraction:",
    "- Is tooth extraction painful? With modern anesthesia and sedation techniques, discomfort is minimal. Most patients only experience mild soreness after the procedure.",
    "- How long does it take to recover from a tooth extraction? Recovery typically takes a few days to a week, depending on the complexity of the extraction and how well post-care instructions are followed.",
    "- What can I eat after a tooth extraction? Soft foods like yogurt, mashed potatoes, and smoothies are recommended for the first few days. Avoid hard, spicy, or hot foods that could irritate the extraction site.",
    "- How do I prevent dry socket? Avoid smoking, drinking through a straw, or spitting forcefully for at least 48 hours after the procedure to allow the blood clot to form properly.",
    "- Do I need to replace an extracted tooth? If a visible or functional tooth is removed, options such as dental implants, bridges, or dentures can be discussed to restore function and aesthetics.",
    "For more details, book a consultation with us today!"
  ]
},{
  id: 10,
  title: 'KIDS DENTISTRY',
  imgUrl: './kid1.webp',
  imgUrl1: './kid.jpg',
  style: 'width: 50%; height: auto;',
  description: [
    "Welcome to the world of kids dentistry where we turn dental visits into fun adventures! From glittery toothbrushes to colorful braces, we’ll make sure your little one’s smile sparkles brighter than ever before.",
    "Children’s teeth begin forming before birth and the first primary teeth usually appear by age 3. It’s important to begin oral care soon after birth by cleaning gums after each feeding and brushing teeth as soon as they appear. Permanent teeth begin appearing around age 6 and the process continues until around age 21.",
    "Teaching your child good oral hygiene habits early on can set them up for a lifetime of healthy teeth and gums. Regular dental check-ups are important to ensure that your child’s teeth are developing properly and to detect any issues early on.",
    "It’s important to limit sugary snacks and drinks in your child’s diet to prevent tooth decay. Encourage your child to drink tap water, which is often fluoridated and can help strengthen their teeth. Dental sealants can be a great way to protect your child’s molars from decay, especially if they are prone to cavities. As soon as your child’s first tooth appears, you should start using a soft-bristled toothbrush and a small amount of fluoride toothpaste to brush their teeth. Parents should supervise their child’s brushing and flossing until at least age 8 to ensure that they are doing it correctly. Dental X-rays can help your dentist detect any hidden problems with your child’s teeth such as cavities between their teeth or impacted wisdom teeth."
  ],
  description1: [
    "Pediatric dentistry focuses on providing specialized care for children’s dental health from infancy through adolescence. It includes preventive care, early diagnosis, and treatment of dental issues to ensure lifelong oral health.",
    "Common pediatric dental procedures include fluoride treatments, dental sealants, fillings, and orthodontic evaluations. Regular visits to a pediatric dentist help in monitoring dental development and addressing concerns like thumb-sucking and teething issues.",
    "Proper dental care for children not only ensures strong and healthy teeth but also prevents oral health issues that could affect their overall well-being. By encouraging positive dental habits early on, children can grow up with a healthy, confident smile."
  ]
}
]);
  trimData = signal<number>(0);
  loopData = signal<any[]>([]);

  message: number = 1;
  showFaq:boolean = true;
reloadFaqComponent() {
  this.showFaq = true;
  setTimeout(() => this.showFaq = true, 0); // Triggers re-render
}
serviceID:any
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
        this.serviceID = v;
        this.loopData.set(originalData)
        console.log("loopData",this.loopData());
        this.reloadFaqComponent();
        // this.trimData.set(v);

      } 
    });
    console.log("loopData",this.loopData());

    console.log("serviceValue",this.serviceDatas());
    console.log("message",this.message);


    
  }


}