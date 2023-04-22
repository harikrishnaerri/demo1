function storeTheUserInfo()
{
    var inputTag=document.querySelectorAll("input")
    var selectTag=document.querySelectorAll("select")
    var fname=inputTag[0].value
    var lname=inputTag[1].value
    var mIdOrphno=inputTag[2].value
    var pass=inputTag[3].value
    var date=selectTag[1].value
    var mo=selectTag[1].value
    var yy=selectTag[2].value
    window.sessionStorage.setItem("mailIdOrphno",mIdOrphno)
    window.sessionStorage.setItem("pass",pass)
    window.localStorage.setItem("mailIdOrphno",mIdOrphno)
    window.localStorage.setItem("pass",pass)
    window.localStorage.setItem("fname",fname)
    window.localStorage.setItem("lname",lname)
    window.localStorage.setItem("date",date)
    window.localStorage.setItem("mo",mo)
    window.localStorage.setItem("yy",yy)
    window.localStorage.setItem("gender",gender)

}
var gender=function gender(a)
{
    window.localStorage.setItem("gender",a)

}



    
    


