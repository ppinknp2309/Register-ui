<template>
  <head>
	<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>ลงทะเบียน</title>
  </head>
<body>
    <form action="" method="POST">
        <h1>ลงทะเบียน</h1>
        <fieldset>
            <legend><span class="section">1</span>วารสารและผู้เข้าอบรม</legend>
            <label for="journal_name" >ชื่อวารสาร</label> <br>
            <input type="text" name="journal_name"  required/> <br>
            <label>จำนวนผู้อบรม</label> <br>
            <div class="rdb-group" style="margin-top: 5px;">
                <input  class="light" type="radio" name="trainee" value="1"  checked  style="margin-left: 10px;"><span style="margin-left: 15px;">1 คน</span>
                <input  class="light" type="radio" name="trainee" value="2" style="margin-left: 20px;" ><span style="margin-left: 15px;">2 คน</span>
                <input  class="light" type="radio" name="trainee" value="3" style="margin-left: 20px;"><span style="margin-left: 15px;">3 คน</span>
                <input  class="light" type="radio" name="trainee" value="4" style="margin-left: 20px;"><span style="margin-left: 15px;">4 คน</span>
            </div>
            <ol>
                  <div>
                  <table class="table table-striped" id="trainee_list">
                  <thead>
                    <tr>
                    <th>ชื่อ-สกุล</th>
                    <th>อาหาร</th>
                    </tr>
                </thead>
                
                <tr>
                  <td><input type="text" name="trainee_name[]" required/></td>
                  <td><input type="text" name="trainee_food[]" size="10" value="อาหารปกติ" required/></td>
                </tr>
                <tr>
                  <td><input type="text" name="trainee_name[]" required/></td>
                  <td><input type="text" name="trainee_food[]" size="10" value="อาหารปกติ" required/></td>
                </tr>
                <tr>
                  <td><input type="text" name="trainee_name[]" required/></td>
                  <td><input type="text" name="trainee_food[]" size="10" value="อาหารปกติ" required/></td>
                </tr>
                <tr>
                  <td><input type="text" name="trainee_name[]" required/></td>
                  <td><input type="text" name="trainee_food[]" size="10" value="อาหารปกติ" required/></td>
                </tr>
                </table>
                </div>
            </ol>
            
        </fieldset>
        <fieldset>
            <legend><span class="section">2</span>ชื่อผู้ติดต่อ</legend>
            <label for="full_name">ชื่อ นามสกุล</label>
            <input type="text" name="full_name" required/>
            <label for="email">อีเมล</label>
            <input type="email" name="email" required/>
            <label for="tel">เบอร์โทร</label>
            <input type="text" name="tel" required>
        </fieldset>
        <fieldset>
            <legend><span class="section">3</span>ใบเสร็จ</legend>
            <h4>จะออกใบเสร็จแบบอิเล็กทรอนิกส์เท่านั้น</h4><br/>
            <label for="tax_id">หมายเลขผู้เสียภาษี</label>
            <input type="text" name="tax_id" required placeholder="x-xxxx-xxxxx-xx-x" autocomplete="off"/>
                <div class="text error" id="errorMessage" aria-hidden="Invalid ID" role="alert">
                    <p>Invalid ID Format ❌ </p>
                </div>
                <div class="text success" id="successMessage" aria-hidden="Valid ID" role="alert">
                    <p>Valid ID Format ✅ </p>
                </div>
            <label>ใบเสร็จออกรับเงินในนาม</label>
            <textarea name="bill_info" required></textarea>
        </fieldset>
        <button type="submit" name="submit" id="submit" >Submit</button>
         <button type="reset" name="cancel" id="cancel" >Reset</button>
    </form>


	
</body>
</template>

<script>
    

</script>

<style >
* { box-sizing: border-box;}
body{
    color: #384047;
}
form{
    max-width: 450px;
    margin: 10px auto;
    padding: 10px 20px;
    background: #f4f7f8;
    border-radius: 10px;
}
้้้h1{
    margin: 0 0 30px 0;
    text-align: center;
}
input[type=text],
input[type=email],
textarea{
    background: rgba(255, 255, 255, 0.1);
    border: none;
    font-size: 16px;
    height: auto;
    margin: 0;
    outline: 0;
    padding: 15px;
    width: 100%;
    background-color: #fdfeff;
    color: #8a97a0 ;
    box-shadow: 0 1px 0 rgba(0,0,0,.03) inset;
    margin-bottom: 30px;
}
input:focus,textarea:focus {
    box-shadow:  0 0 5px rgb(77, 167, 192);
    border: 2px solid rgb(77, 167, 192);
}
input[type="radio"]{
    margin: 0 4px 8px 0;
}
fieldset{
    margin-bottom: 30px;
    border: none;
}
legend{
    display: block;
    margin-bottom: 8px;

}
label{
    display: block;
    margin-bottom: 8px;
}
label.light {
    font-weight: 300;
    display: inline;
}
.section {
    background-color: #3e889e ;
    color: #fff;
    width: 30px;
    display: inline-block;
    font-size: 0.8em;
    margin-right: 4px;
    line-height: 30px;
    text-align: center;
    text-shadow: 0 1px 0 rgb(77, 167, 192);
    border-radius: 100%;
}
button[type=submit]{
    padding: 19px 39px 18px 39px;
    color: #fff;
    background-color: #31ad65;
    font-size: 18px;
    font-style: normal;
    border-radius: 5px;
    width: 100%;
    border: 1px solid #126936;
    border-width: 1px 1px 3px;
    box-shadow: 0 -1px 0 rgb(255, 255, 255,0.1) inset; 
    margin-bottom: 20px;

}
button[type=reset]{
    padding: 19px 39px 18px 39px;
    color: #fff;
    background-color: #dd5f49;
    font-size: 18px;
    font-style: normal;
    border-radius: 5px;
    width: 100%;
    border: 1px solid #a33a27;
    border-width: 1px 1px 3px;
    box-shadow: 0 -1px 0 rgb(255, 255, 255,0.1) inset; 
    margin-bottom: 20px;

}
@media screen and (min-width: 480px) {
    form{
        max-width: 480px;
    }
}
</style>