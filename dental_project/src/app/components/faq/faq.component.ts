import { Component,inject,Input,signal } from '@angular/core';
import { ThemeModuleModule } from '../../@modules/theme-module/theme-module.module';
import { SharedServiceService } from '../../services/shared-service.service';

@Component({
  selector: 'app-faq',
  imports: [ThemeModuleModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {
   servicesData = inject(SharedServiceService);
  tabs = [
    {
      id:1,
      faq:[ { question: 'Is there any special offer on Invisalign?', answer: 'Yes! We occasionally provide promotional offers or special discounts based on the season or events. Contact us to learn about any current deals.', value: '0' },
        { question: 'How long will it take for my teeth to get straighter?', answer: 'The treatment duration depends on the complexity of your case. Some patients see results in just a few months, while others may take up to 18 months. During your consultation, we will provide a personalized timeline.', value: '1' },
        { question: 'How long do I have to wear my clear aligners?', answer: 'For optimal results, wear your aligners for 20 to 22 hours per day. You should only remove them when eating, drinking (except water), brushing, or flossing.', value: '2' }]
    },
    {
      id: 2,
      faq: [
        { question: 'What are dentures?', answer: 'Dentures are removable prosthetic devices designed to replace missing teeth and restore oral function and aesthetics.', value: '0' },
        { question: 'What are the different types of dentures?', answer: 'There are two main types: complete dentures (for replacing all teeth) and partial dentures (for replacing some missing teeth).', value: '1' },
        { question: 'How long do dentures last?', answer: 'With proper care, dentures can last 5-10 years, though they may need adjustments or replacements due to wear or changes in gum structure.', value: '2' },
        { question: 'How should I clean my dentures?', answer: 'Dentures should be cleaned daily with a soft brush and non-abrasive denture cleaner. Avoid using regular toothpaste as it can cause scratches.', value: '3' },
        { question: 'Can I sleep with my dentures on?', answer: 'It is generally recommended to remove dentures at night to allow your gums to rest and prevent infections or irritation.', value: '4' },
        { question: 'Will dentures affect my ability to eat and speak?', answer: 'There may be an adjustment period, but with practice, most people regain normal eating and speaking abilities.', value: '5' },
        { question: 'Do dentures require adhesives?', answer: 'Properly fitted dentures should not require adhesives, but some people use them for extra stability.', value: '6' },
        { question: 'Can dentures be repaired if broken?', answer: 'Yes, minor damage can be repaired by a dentist, but severe damage may require replacement.', value: '7' },
        { question: 'Are there alternatives to dentures?', answer: 'Yes, alternatives include dental implants and bridges, which offer a more permanent and natural-looking solution.', value: '8' }
      ] },
    
      {
        id: 3,
        faq: [
          { question: 'What are clear aligners?', answer: 'Clear aligners are transparent, removable orthodontic devices used to straighten teeth without the need for metal braces.', value: '0' },
          { question: 'How do clear aligners work?', answer: 'Clear aligners gradually shift teeth into the desired position by applying gentle pressure, with new sets replaced every few weeks.', value: '1' },
          { question: 'Are clear aligners better than traditional braces?', answer: 'Clear aligners are nearly invisible, removable, and more comfortable, but they may not be suitable for severe orthodontic cases.', value: '2' },
          { question: 'How long does treatment with clear aligners take?', answer: 'The treatment duration varies but typically lasts between 6 to 24 months, depending on the complexity of the case.', value: '3' },
          { question: 'How often should I wear my clear aligners?', answer: 'For optimal results, clear aligners should be worn for 20-22 hours per day, only removed for eating, drinking, and oral hygiene.', value: '4' },
          { question: 'Can I eat and drink with clear aligners on?', answer: 'It is recommended to remove aligners while eating and drinking anything other than water to prevent staining and damage.', value: '5' },
          { question: 'How do I clean my clear aligners?', answer: 'Aligners should be rinsed with lukewarm water and cleaned with a soft brush and mild soap or aligner cleaner.', value: '6' },
          { question: 'Do clear aligners hurt?', answer: 'Mild discomfort may be experienced when switching to a new set of aligners, but it typically subsides within a few days.', value: '7' },
          { question: 'Are clear aligners suitable for everyone?', answer: 'Clear aligners are ideal for mild to moderate teeth misalignment, but severe cases may require traditional braces or additional orthodontic treatments.', value: '8' },
          { question: 'How much do clear aligners cost?', answer: 'The cost varies based on the treatment plan and provider, typically ranging between $2,000 and $8,000.', value: '9' }
        ]
      },
      {
        id: 4,
        faq: [
          { question: 'What is root canal therapy?', answer: 'Root canal therapy is a dental procedure used to remove infected or damaged pulp from inside a tooth and seal it to prevent further infection.', value: '0' },
          { question: 'Why is a root canal needed?', answer: 'A root canal is needed when the pulp inside a tooth becomes inflamed or infected due to deep decay, repeated dental procedures, cracks, or trauma.', value: '1' },
          { question: 'Is a root canal painful?', answer: 'With modern anesthesia and techniques, root canal treatment is generally no more painful than getting a dental filling.', value: '2' },
          { question: 'How long does a root canal procedure take?', answer: 'A root canal typically takes one to two appointments, each lasting between 60-90 minutes, depending on the tooth’s condition.', value: '3' },
          { question: 'What happens during a root canal procedure?', answer: 'The dentist removes infected pulp, cleans the root canals, disinfects them, and fills them with a biocompatible material before sealing the tooth.', value: '4' },
          { question: 'Will I need a crown after a root canal?', answer: 'In most cases, a dental crown is recommended after a root canal to restore the tooth’s strength and functionality.', value: '5' },
          { question: 'How long does a root canal-treated tooth last?', answer: 'With proper care, a root canal-treated tooth can last a lifetime, though the crown may need replacement over time.', value: '6' },
          { question: 'What are the alternatives to a root canal?', answer: 'The main alternative is tooth extraction, but preserving the natural tooth with a root canal is usually the best option.', value: '7' },
          { question: 'What should I expect after a root canal?', answer: 'Mild soreness or sensitivity is normal for a few days, but it can be managed with over-the-counter pain relievers.', value: '8' },
          { question: 'How do I care for my tooth after a root canal?', answer: 'Maintain good oral hygiene, avoid chewing hard foods on the treated tooth, and visit your dentist regularly for check-ups.', value: '9' }
        ]
      },
     {
        id: 5,
        faq: [
          { question: 'What are dental implants?', answer: 'Dental implants are artificial tooth roots made of titanium that are surgically placed into the jawbone to support replacement teeth.', value: '0' },
          { question: 'Who is a good candidate for dental implants?', answer: 'Anyone with good oral health, sufficient jawbone density, and no uncontrolled medical conditions may be a candidate for dental implants.', value: '1' },
          { question: 'How long do dental implants last?', answer: 'With proper care, dental implants can last a lifetime, though the attached crowns may need replacement over time.', value: '2' },
          { question: 'Is the dental implant procedure painful?', answer: 'The procedure is performed under local anesthesia, so there is minimal discomfort. Some mild soreness may occur during the healing period.', value: '3' },
          { question: 'How long does it take to get a dental implant?', answer: 'The entire process, including healing and crown placement, can take anywhere from 3 to 6 months, depending on the individual’s case.', value: '4' },
          { question: 'What are the benefits of dental implants?', answer: 'Dental implants provide a durable, natural-looking solution for missing teeth, preserving jawbone health and restoring chewing ability.', value: '5' },
          { question: 'Are dental implants better than dentures or bridges?', answer: 'Unlike dentures or bridges, implants are a permanent solution that do not require support from other teeth and help prevent bone loss.', value: '6' },
          { question: 'How do I care for my dental implants?', answer: 'Maintain good oral hygiene by brushing, flossing, and visiting your dentist regularly to ensure the longevity of your implants.', value: '7' },
          { question: 'What are the risks of dental implants?', answer: 'Though rare, risks include infection, implant failure, or nerve damage. Choosing an experienced dentist can minimize complications.', value: '8' },
          { question: 'How much do dental implants cost?', answer: 'The cost varies depending on location, dentist expertise, and additional procedures needed, typically ranging between $3,000 and $5,000 per implant.', value: '9' }
        ]
      },
      {
        id: 6,
        faq: [
          { question: 'What is infection control in dentistry?', answer: 'Infection control refers to the measures taken to prevent the spread of infections in dental clinics, ensuring patient and staff safety.', value: '0' },
          { question: 'Why is infection control important?', answer: 'It prevents the transmission of infectious diseases, such as hepatitis, HIV, and COVID-19, protecting both patients and dental professionals.', value: '1' },
          { question: 'What are common infection control practices in a dental clinic?', answer: 'These include sterilizing instruments, using personal protective equipment (PPE), disinfecting surfaces, and following hand hygiene protocols.', value: '2' },
          { question: 'How are dental instruments sterilized?', answer: 'Dental instruments are sterilized using autoclaves, chemical disinfectants, or dry heat sterilization to eliminate bacteria and viruses.', value: '3' },
          { question: 'What personal protective equipment (PPE) do dentists use?', answer: 'Dentists use gloves, masks, face shields, gowns, and protective eyewear to prevent cross-contamination and protect against infections.', value: '4' },
          { question: 'How does hand hygiene help in infection control?', answer: 'Proper handwashing with soap or using alcohol-based hand sanitizers helps reduce the spread of germs in the dental environment.', value: '5' },
          { question: 'What are universal precautions in infection control?', answer: 'Universal precautions are guidelines that treat all patients as potentially infectious and ensure proper infection prevention measures are followed.', value: '6' },
          { question: 'How are dental chairs and surfaces disinfected?', answer: 'Surfaces are cleaned with hospital-grade disinfectants after each patient to prevent the spread of pathogens.', value: '7' },
          { question: 'What should patients do to help prevent infections?', answer: 'Patients should maintain good oral hygiene, disclose any medical conditions, and follow post-treatment care instructions to minimize infection risks.', value: '8' },
          { question: 'How has COVID-19 impacted dental infection control?', answer: 'Dental clinics have implemented stricter protocols, including screening patients, enhancing PPE usage, and improving ventilation to reduce airborne infections.', value: '9' }
        ]
      },
      {
        id: 7,
        faq: [
          { question: 'What is gum therapy?', answer: 'Gum therapy, also known as periodontal therapy, is a treatment to manage and reverse gum disease, preventing tooth loss and improving oral health.', value: '0' },
          { question: 'Who needs gum therapy?', answer: 'Patients with gingivitis or periodontitis, experiencing symptoms like swollen, bleeding gums, bad breath, or gum recession, may need gum therapy.', value: '1' },
          { question: 'What are the signs of gum disease?', answer: 'Common signs include red, swollen gums, bleeding while brushing, persistent bad breath, gum recession, and loose teeth.', value: '2' },
          { question: 'What treatments are included in gum therapy?', answer: 'Gum therapy includes deep cleaning (scaling and root planing), laser therapy, medication, and in severe cases, gum surgery.', value: '3' },
          { question: 'What is scaling and root planing?', answer: 'Scaling removes plaque and tartar below the gum line, while root planing smooths tooth roots to promote gum reattachment and healing.', value: '4' },
          { question: 'Does gum therapy hurt?', answer: 'Mild discomfort may be felt during deep cleaning, but local anesthesia is used to minimize pain, and post-treatment soreness is temporary.', value: '5' },
          { question: 'How long does gum therapy take?', answer: 'Treatment duration varies; a deep cleaning session can take 1-2 hours, while advanced cases may require multiple visits.', value: '6' },
          { question: 'How can I prevent gum disease?', answer: 'Brushing twice a day, flossing, using an antibacterial mouthwash, and visiting the dentist regularly can help prevent gum disease.', value: '7' },
          { question: 'Is gum disease reversible?', answer: 'Gingivitis, the early stage of gum disease, is reversible with proper care, but periodontitis requires ongoing management to prevent further damage.', value: '8' },
          { question: 'What happens if gum disease is left untreated?', answer: 'Untreated gum disease can lead to gum recession, tooth loss, bone damage, and increased risk of systemic conditions like heart disease and diabetes.', value: '9' }
        ]
      },
      {
        id: 8,
        faq: [
          { question: 'What is teeth whitening?', answer: 'Teeth whitening is a cosmetic dental procedure that removes stains and discoloration to brighten teeth.', value: '0' },
          { question: 'What causes tooth discoloration?', answer: 'Tooth discoloration can be caused by coffee, tea, smoking, aging, certain medications, and poor oral hygiene.', value: '1' },
          { question: 'What are the different teeth whitening options?', answer: 'Whitening options include professional in-office treatments, at-home whitening kits, whitening toothpaste, and natural remedies.', value: '2' },
          { question: 'Is professional teeth whitening better than at-home treatments?', answer: 'Yes, professional whitening provides faster, longer-lasting results with stronger bleaching agents and controlled application.', value: '3' },
          { question: 'How long does teeth whitening last?', answer: 'Results typically last from several months to a few years, depending on diet, oral hygiene, and lifestyle habits.', value: '4' },
          { question: 'Does teeth whitening cause sensitivity?', answer: 'Some patients experience temporary tooth sensitivity, but it usually subsides within a few days.', value: '5' },
          { question: 'Can teeth whitening damage my enamel?', answer: 'When done correctly, professional whitening does not damage enamel, but excessive use of bleaching agents can weaken teeth.', value: '6' },
          { question: 'Who should avoid teeth whitening?', answer: 'Pregnant women, children under 16, and individuals with severe tooth sensitivity or gum disease should consult a dentist before whitening.', value: '7' },
          { question: 'How can I maintain my whitening results?', answer: 'Avoid staining foods, brush regularly, use a whitening toothpaste, and visit your dentist for touch-ups.', value: '8' },
          { question: 'Are there natural ways to whiten teeth?', answer: 'Brushing with baking soda, oil pulling, and eating crunchy fruits like apples can help reduce surface stains, but professional treatments provide the best results.', value: '9' }
        ]
      },
      {
        id: 9,
        faq: [
          { question: 'What is tooth extraction?', answer: 'Tooth extraction is the removal of a tooth from its socket in the jawbone due to damage, decay, or crowding.', value: '0' },
          { question: 'Why do wisdom teeth need to be removed?', answer: 'Wisdom teeth are often removed if they are impacted, causing pain, infection, or misalignment of other teeth.', value: '1' },
          { question: 'Is tooth extraction painful?', answer: 'The procedure is done under local anesthesia, minimizing pain, though mild discomfort and swelling may occur afterward.', value: '2' },
          { question: 'How long does it take to recover from a tooth extraction?', answer: 'Recovery typically takes 7-10 days, but complete healing of the bone and gum may take several weeks.', value: '3' },
          { question: 'What are the risks of tooth extraction?', answer: 'Risks include bleeding, infection, dry socket, and temporary or permanent nerve damage in rare cases.', value: '4' },
          { question: 'What is a dry socket?', answer: 'A dry socket occurs when the blood clot at the extraction site is dislodged, exposing the bone and causing severe pain.', value: '5' },
          { question: 'How can I prevent dry socket?', answer: 'Avoid smoking, drinking through a straw, or vigorously rinsing your mouth in the first 24 hours after extraction.', value: '6' },
          { question: 'Can I eat after a tooth extraction?', answer: 'Yes, but start with soft foods like yogurt, mashed potatoes, and soup, avoiding hard or spicy foods for a few days.', value: '7' },
          { question: 'When can I return to normal activities after extraction?', answer: 'Most patients can resume normal activities within 24-48 hours, but strenuous exercise should be avoided for a few days.', value: '8' },
          { question: 'How do I care for my mouth after an extraction?', answer: 'Keep the area clean by gently rinsing with warm salt water, avoid disturbing the site, and follow your dentist’s post-care instructions.', value: '9' }
        ]
      },
      {
        id: 10,
        faq: [
          { question: 'What is pediatric dentistry?', answer: 'Pediatric dentistry focuses on the oral health of children from infancy through adolescence.', value: '0' },
          { question: 'When should my child have their first dental visit?', answer: 'The American Dental Association recommends a child’s first dental visit by their first birthday or when the first tooth appears.', value: '1' },
          { question: 'Why are baby teeth important?', answer: 'Baby teeth help with chewing, speech development, and act as placeholders for permanent teeth.', value: '2' },
          { question: 'How can I prevent cavities in my child’s teeth?', answer: 'Ensure proper brushing, flossing, a healthy diet, and regular dental check-ups.', value: '3' },
          { question: 'What should I do if my child is afraid of the dentist?', answer: 'Choose a kid-friendly dentist, use positive reinforcement, and start dental visits early to build familiarity.', value: '4' },
          { question: 'When should my child start brushing their teeth?', answer: 'Start cleaning your baby’s gums before teeth emerge. Once teeth appear, use a small, soft-bristled toothbrush.', value: '5' },
          { question: 'Is fluoride safe for children?', answer: 'Yes, when used in appropriate amounts, fluoride strengthens enamel and helps prevent cavities.', value: '6' },
          { question: 'What are dental sealants, and does my child need them?', answer: 'Dental sealants are thin coatings applied to molars to protect against cavities and are recommended for most children.', value: '7' },
          { question: 'Can thumb-sucking harm my child’s teeth?', answer: 'Prolonged thumb-sucking can lead to misaligned teeth or bite problems. If it continues beyond age 4, consult a dentist.', value: '8' },
          { question: 'What should I do if my child knocks out a tooth?', answer: 'If it’s a baby tooth, keep calm and contact your dentist. If it’s a permanent tooth, try placing it back in the socket or store it in milk and see a dentist immediately.', value: '9' }
        ]
      },

   
];
havingData = signal<boolean>(false);
faqData :any;
@Input() serviceId!: string;
ngOnInit(){
  
  this.servicesData.messageFirst.subscribe({
    next: (v:any) =>{
      console.log(`observerA: ${v}`)
      let havingData:any;
      havingData = this.tabs.find((data:any) => data.id === v);
      console.log("havingData",havingData);
      this.faqData = havingData;
      console.log("faqData",this.faqData);

      if(havingData){
        this.havingData.set(true);
      }
      
    } 
  });
}
}
