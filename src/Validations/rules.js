
import * as Yup from "yup";
import i18n from "../i18n";
  
export let registerSchema  = Yup.object().shape({
  message: Yup.string() 
  .min(3, i18n.language == 'fa' ? 'مسیج شما حداقل باید 3 کاراکتر داشته باشد' :"message must have 3 characters")
  .max(200,i18n.language == 'fa' ? 'مسیج شما حداکثر باید 200 کاراکتر داشته باشد': "message must have a maximum of 200 characters")
  .required(i18n.language == 'fa' ? 'مسیج خود را وارد کنید' :"Enter the Message"),

  email: Yup.string()
    .email(i18n.language == 'fa' ? 'ایمیل وارد شده صحیح نیست' :"Email is not valid")
    .min(10, i18n.language == 'fa' ? 'ایمیل حداقل باید 10 کاراکتر داشته باشد':"Email must have 10 characters")
    .max(30, i18n.language == 'fa' ? 'ایمیل حداکثر باید 30 کاراکتر داشته باشد':"Email must have a maximum of 30 characters") 
    .required(i18n.language == 'fa' ? 'ایمیل خود را وارد کنید':"Enter the email"),
 
    name: Yup.string() 
    .min(3, i18n.language == 'fa' ? 'اسم شما حداقل باید 3 کاراکتر داشته باشد' :"Name must have 3 characters")
    .max(12, i18n.language == 'fa' ?'اسم شما حداکثر باید 12 کاراکتر داشته باشد' :"Name must have a maximum of 12 characters")
    .required(i18n.language == 'fa' ?"اسم خود را وارد کنید" :"Enter the Name"),
});


export let registerSchemaFa = Yup.object().shape({
  message: Yup.string() 
  .min(3,  'مسیج  حداقل باید 3 کاراکتر داشته باشد'  )
  .max(200, 'مسیج  حداکثر باید 200 کاراکتر داشته باشد' )
  .required( 'مسیج خود را وارد کنید'  ),

  email: Yup.string()
    .email( 'ایمیل وارد شده صحیح نیست'  )
    .min(10,  'ایمیل حداقل باید 10 کاراکتر داشته باشد' )
    .max(30,  'ایمیل حداکثر باید 30 کاراکتر داشته باشد' ) 
    .required( 'ایمیل خود را وارد کنید' ),
 
    name: Yup.string() 
    .min(3,  'اسم  حداقل باید 3 کاراکتر داشته باشد'  )
    .max(12, 'اسم  حداکثر باید 12 کاراکتر داشته باشد'  )
    .required( "اسم خود را وارد کنید"  ),
});
 
 
