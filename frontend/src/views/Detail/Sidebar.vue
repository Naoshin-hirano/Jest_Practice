<template>
    <div class="sidebar">
        <v-container>
          <div class="btn-wrapper">
              <div class="entry">
                <a href="#" class="btn entry-btn"><h4>話を聞きに行きたい</h4></a>
              </div>
              <div class="checkAfter">
                <h4>0人がエントリー中</h4>
                <p>エントリー状況は公開されません</p>
                <a href="#" class="btn checkAfter-btn"><h4>あとで見る</h4></a>
              </div>
           </div>
        </v-container>
    </div>
</template>

<style scoped>
  .sidebar{
    width:35%;
    float:right;
  }

  .entry{
    text-align: center;
    margin-bottom:100px;
  }
  .entry-btn{
    background-color:#1E90FF;
    color:white;
    text-decoration: none;
    display: inline-block;
    width: 100%;
    height: auto;
    padding:15px 0px 15px 0px;
  }
  .entry-btn:hover{
    background-color:#4169E1;
  }
  .checkAfter-btn{
    border-style: solid;
    border-width: 1px;
    border-color:black;
    background-color:white;
    text-decoration: none;
    display: inline-block;
    width: 100%;
    height: auto;
    text-align: center;
    padding:5px 0px 5px 0px;
    color:#778899;
  }
  .checkAfter-btn:hover{
      background-color:#DCDCDC;
  }
  .btn{
    border-radius: 50px;
  }

</style>