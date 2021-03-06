
// preloader
$(window).load(function(){
    $('.preloader').fadeOut(1000); // set duration in brackets
});
$(document).ready(function() {
  if($(window).width() < 425) {
    $('#hidediv').hide();
  }
  console.log("Width is "+$(window).width());
});
$('#collapseStart').click(function() {
  $('#hideclick').toggle();
}); 
$('#clicklogin').click(function() {
  $('#account').show();
  $('#register').hide();
  $('#login').show();
  $('#home').hide();
  $('#contact').hide();
});
$('#clickcontact').click(function() {
  $('#contact').show();
  $('#account').hide();
  $('#home').hide();
});
$('#click1').click(function() {
  $('#login').toggle();
  $('#register').toggle();
});
$('#click2').click(function() {
  $('#login').toggle();
  $('#register').toggle();
});
/* HTML document is loaded. DOM is ready. 
-------------------------------------------*/
$(function(){

  // ------- WOW ANIMATED ------ //
  wow = new WOW(
  {
    mobile: false
  });
  wow.init();

  // ------- JQUERY PARALLAX ---- //
  function initParallax() {
    $('#home').parallax("100%", 0.1);
    $('#gallery').parallax("100%", 0.3);
    $('#menu').parallax("100%", 0.2);
    $('#team').parallax("100%", 0.3);
    $('#contact').parallax("100%", 0.1);

  }
  initParallax();

  // HIDE MOBILE MENU AFTER CLIKING ON A LINK
  $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });

  // NIVO LIGHTBOX
  $('#gallery a').nivoLightbox({
        effect: 'fadeScale',
    });
});

$(document).ready(function(){
    var docHeight = $(window).height();
    var footerHeight = $('#copyright').height();
    var footerTop = $('#copyright').position().top + footerHeight;
       
    var same = '<div class="md-form"><input name="company" type="text" class="form-control" placeholder="Enter Organization/Society/Company name" required id="company"></div><div class="md-form"><input name="location" type="text" class="form-control" placeholder="Enter Location" id="location"></div><div class="md-form"><select name="rank" id="rank" class="mdb-select"><option value="" disabled selected>Choose Grade Rank</option><option value="Group A">Group A or Grade Rank 1</option><option value="Group B">Group B or Grade Rank 2</option><option value="Group C">Group C or Grade Rank 3</option><option value="Group D">Group D or Grade Rank 4</option></select></div><div class="md-form"><input name="position" id="position" type="text" class="form-control" placeholder="Enter your Position"></div><div class="md-form"><input name="role" type="text" class="form-control" placeholder="Enter your Role" id="role"></div><div class="row"><div class="md-form"><div class="col-md-3"><label>Start date: </label></div><div class="col-md-9"><input name="from" type="date" class="form-control" placeholder="Start date"></div></div><div class="md-form"><div class="col-md-3"><label>End date: </label></div><div class="col-md-9"><input name="to" type="date" class="form-control" placeholder="End date"></div></div></div><div class="md-form"><textarea name="description" rows="1" class="md-textarea form-control" placeholder="Enter Description"></textarea></div>';

    var same2 = '<div class="md-form"><input name="company" type="text" class="form-control" placeholder="Organization/Society/Company name" id="company"></div><select name="rank" id="rank" class="mdb-select"><option value="" required disabled selected>Choose Grade Rank</option><option value="Group A">Group A or Grade Rank 1</option><option value="Group B">Group B or Grade Rank 2</option><option value="Group C">Group C or Grade Rank 3</option><option value="Group D">Group D or Grade Rank 4</option></select></div><div class="md-form"><input name="position" id="position" type="text" class="form-control" placeholder="Enter Position"></div>';

    if (footerTop < docHeight) {
      $('#copyright').css('margin-top', 10 + (docHeight - footerTop - 160) + 'px');
    }
    $('#sector').on('change', function (e) {
        var valueSelected = this.value;
        if(valueSelected == 'Public Sector'){
          $('#addAccording').append('<select class="mdb-select" id="publicSector" name="category"><option value="" required disabled selected>In Public Sector</option><option value="Central Government">Central Government</option><option value="State Government">State Government</option><option value="Public Sector Units">Public Sector Units</option></select>');
        }
        else if(valueSelected == 'Private Sector'){
          document.getElementById("addAccording").innerHTML = '<div class="md-form"><input name="category" type="text" required class="form-control" placeholder="Enter Sector" id="category"></div>';
          document.getElementById("inPublic").innerHTML = same;
        }
    });

    $('#sectorAll').on('change', function (e) {
        var valueSelected = this.value;
        if(valueSelected == 'Public Sector'){
          $('#addAccording2').append('<select class="mdb-select" required id="publicSector" name="category"><option value="" disabled selected>In Public Sector</option><option value="Central Government">Central Government</option><option value="State Government">State Government</option><option value="Public Sector Units">Public Sector Units</option></select>');
        }
        else if(valueSelected == 'Private Sector'){
          document.getElementById("addAccording2").innerHTML = '<div class="md-form"><input name="category" type="text" class="form-control" placeholder="Enter Sector" id="category"></div>';
          document.getElementById("inPublic").innerHTML = same2;
        }
    });

    $('#addAccording').on('change', '#publicSector', function(e){
        var valSelected = this.value;
        if(valSelected == 'Central Government'){
          document.getElementById("inPublic").innerHTML = '<div class="md-form"><input name="ministry" type="text" class="form-control" placeholder="Enter Ministry" id="ministry"></div><div class="md-form"><input name="department" type="text" class="form-control" placeholder="Enter Departement"></div>' + same;
        }
        else if(valSelected == 'State Government'){
          document.getElementById("inPublic").innerHTML = '<div class="md-form"><input name="ministry" type="text" class="form-control" placeholder="Enter Ministry"></div><div class="md-form"><input name="department" type="text" class="form-control" placeholder="Enter Departement"></div>' + same;
        }
        else if(valSelected == 'Public Sector Units'){
          document.getElementById("inPublic").innerHTML = same;
        }
    });

    $('#addAccording2').on('change', '#publicSector', function(e){
        var valSelected = this.value;
        if(valSelected == 'Central Government'){
          document.getElementById("inPublic").innerHTML = '<div class="md-form"><input name="ministry" type="text" class="form-control" placeholder="Ministry" id="ministry"></div><div class="md-form"><input name="department" type="text" class="form-control" placeholder="Departement"></div>' + same2;
        }
        else if(valSelected == 'State Government'){
          document.getElementById("inPublic").innerHTML = '<div class="md-form"><input name="ministry" type="text" class="form-control" placeholder="Ministry"></div><div class="md-form"><input name="department" type="text" class="form-control" placeholder="Departement"></div>' + same2;
        }
        else if(valSelected == 'Public Sector Units'){
          document.getElementById("inPublic").innerHTML = same2;
        }
    });
});