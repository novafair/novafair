<template>
    <div class="contact-us">
        <div class="contact-us-background">
            <div class="container">
                <div class="row">
                    <div class="call-us text-center">
                        <div class="desc" style="font-size: 35px;">

                        </div>
                        <div class="title" style="font-size:45px">

                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 col-md-6">
                        <i class=" icon_item fa fa-whatsapp" style="font-size:24px"></i> {{ $t("message.phone_no") }} : +90 212 231 15 45 <br>
                        <i class=" icon_item fa fa-envelope" style="font-size:24px"></i>  info@novaexpo.com.tr <br>
                        <i class=" icon_item fa fa-home" style="font-size:24px"></i> 19 Mayıs Mahallesi Balçık Tarlası Sokak No:1 Kat:8 Tanlı Han İş Hanı Şişli/İstanbul
                        <i class=" icon_item fa fa-clock-o" style="font-size:24px"></i> {{ $t("message.days") }} 09:00 & 18:00 <br>
                    </div>
                    <div class="col-12 col-md-6">
                        <form @submit.prevent="sendEmail()" ref="form">
                            <div class="form-group">
                                <label for="exampleFormControlInput1">{{ $t("message.contact_name") }}</label>
                                <input type="name"  class="form-control" id="from_name" name="from_name"  placeholder="">
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlInput1" class="mt-3">{{ $t("message.contact_mail") }}</label>
                                <input type="email" id="email_id" class="form-control"  name="email_id" placeholder="">
                            </div>  
                            <div class="form-group">
                                <label for="exampleFormControlInput1 mt-4" class="mt-3">{{ $t("message.contact_phone_no") }}</label>
                                <input type="number" id="number_id" class="form-control" name="number_id" placeholder="">
                            </div>                            

                            <div class="form-group">
                                <label for="exampleFormControlTextarea1" clasS="mt-3">{{ $t("message.contact_message") }}</label>
                                <textarea class="form-control" id="message" name="message" rows="3" placeholder=""></textarea>
                            </div>
                            <button type="submit" style="background-color:#a377a7 !important" class="btn btn-primary mt-3">{{ $t("message.contact_send") }}</button>
                        </form>
                    </div>
                </div>
            </div>
                <div class="footer">
                <hr>
               <p>{{ new Date().getFullYear() }} - Supernova </p>
            </div>
        </div>
    </div>
</template>

<script>
    import emailjs from '@emailjs/browser';

    export default {
        name: 'footer',
        methods: {
        sendEmail() {
        emailjs.sendForm('service_gy7wfhm', 'template_4ksrgwk', this.$refs.form, 'zf04lm9jp2ixVgBK8', {
            email_id : this.$refs.form.email_id,
            number_id : this.$refs.form.number_id,
            message : this.$refs.form,
            from_name : this.$refs.form.from_name,
        })
            .then((result) => {
                console.log(result);
                console.log('SUCCESS!', result.text);
            }, (error) => {
                console.log('FAILED...', error.text);
          });
        }
      }
    }
</script>

<style lang="scss">
    .footer {
        height: auto;
        width: 100%;
        text-align:center;
        padding:10px;
        color:#ffffff;
    }
    .contact-us {
      background-image: url('../assets/asansor/footer.jpg');
      height: 100%;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      margin-top: 25px;
  }
    .fa-whatsapp  {
    color:#fff;
    background:
    linear-gradient(#a377a7,#a377a7) 14% 84%/16% 16% no-repeat,
    radial-gradient(#a377a7 58%,transparent 0);
    }
    .fa-envelope  {
    color:#a377a7 !important; 
    }
    .fa-home  {
    color:#a377a7 !important; 
    }
    .fa-clock-o  {
    color:#a377a7 !important; 
    }
    .contact-us-background {
      opacity: 0.93;
      color: white;
  }
  .call-us {
    margin : 70px 0px!important;
  }

  @media screen and (max-width: 600px) {
    .call-us {
    .title {
        font-size: 35px!important;
    }
  }
}
</style>
