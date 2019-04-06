$(document).ready(function() {
  // LIBRARIES CODE
  LibVars = {};

  function HealthDashboardLibrary() {
    lib_instance = "zh5hyj7jnk";
    com.fc.JavaScriptDistLib.EventListeners.mapLib("HealthDashboardLibrary", "zh5hyj7jnk");
    LibVars.healthdashboardlibrary = LibVars.healthdashboardlibrary || {};
    LibVars.healthdashboardlibrary._debugService = null;

    function StatisticsLibrary() {
      lib_instance = "0n6bwbogqs";
      com.fc.JavaScriptDistLib.EventListeners.mapLib("StatisticsLibrary", "0n6bwbogqs");
      LibVars.statisticslibrary = LibVars.statisticslibrary || {};
      LibVars.statisticslibrary._debugService = null;
      LibVars.statisticslibrary.averageValue = null;
      LibVars.statisticslibrary.maxValue = null;
      LibVars.statisticslibrary.minValue = null;
      /**
       * Describe this function...
       */
      this.average = average;

      function average(list) {
        return new Promise(function(resolve, reject) {
          // Block#: 99YE!yte3t7Tjm`GT0mB
          LibVars.statisticslibrary.averageValue = 0;
          // Block#: `115}W*Lfr:u]7~YX?J6
          var index_end = list.length - 1;
          var index_inc = 1;
          if(0 > index_end) {
            index_inc = -index_inc;
          }
          for(index = 0; index_inc >= 0 ? index <= index_end : index >= index_end; index += index_inc) {
            // Block#: jOP?b1{dR?y~OvjGv}M+
            LibVars.statisticslibrary.averageValue = LibVars.statisticslibrary.averageValue + list[index];
          }
          // Block#: f_VyNJfIH#dH-Prq?iOY
          if(list.length != 0) {
            // Block#: ZJ6!WBBiH2^q7/OnpZi3
            LibVars.statisticslibrary.averageValue = LibVars.statisticslibrary.averageValue / list.length;
            // Block#: QAG285RL/,4T82Tx0xtc
            resolve({
              name: "value",
              data: LibVars.statisticslibrary.averageValue
            });
          }
        });
      }
      /**
       * Describe this function...
       */
      this.max = max;

      function max(list) {
        return new Promise(function(resolve, reject) {
          // Block#: $6nO|{jxUQXM{0^g~.T]
          LibVars.statisticslibrary.maxValue = list[0];
          // Block#: *x.Y8aUaOZ-[2rN(mW^=
          var index_end2 = list.length - 1;
          var index_inc2 = 1;
          if(0 > index_end2) {
            index_inc2 = -index_inc2;
          }
          for(index = 0; index_inc2 >= 0 ? index <= index_end2 : index >= index_end2; index += index_inc2) {
            // Block#: G:(9R_/QZghFAuZxGooS
            if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(list[index], "GT", LibVars.statisticslibrary.maxValue)) {
              // Block#: YkxU}2!aAFa:IXygCA?0
              LibVars.statisticslibrary.maxValue = list[index];
            }
          }
          // Block#: )^@Bh6$U?r!5PTSkUFMk
          resolve({
            name: "value",
            data: LibVars.statisticslibrary.maxValue
          });
        });
      }
      /**
       * Describe this function...
       */
      this.min = min;

      function min(list) {
        return new Promise(function(resolve, reject) {
          // Block#: +V?T$4x6j)7U==o$IAwq
          LibVars.statisticslibrary.minValue = list[0];
          // Block#: zBWWS2.+K4798[s{vTst
          var index_end3 = list.length - 1;
          var index_inc3 = 1;
          if(0 > index_end3) {
            index_inc3 = -index_inc3;
          }
          for(index = 0; index_inc3 >= 0 ? index <= index_end3 : index >= index_end3; index += index_inc3) {
            // Block#: U@DcT2*CxD$fj[hF7MlI
            if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(list[index], "LT", LibVars.statisticslibrary.minValue)) {
              // Block#: Lf4C|.03!L7[u{z]_IU@
              LibVars.statisticslibrary.minValue = list[index];
            }
          }
          // Block#: RrO:2RyR]fsF5g2`xM,6
          resolve({
            name: "value",
            data: LibVars.statisticslibrary.minValue
          });
        });
      }
    };
    var statisticslibrary = new StatisticsLibrary();
    LibVars.healthdashboardlibrary.prePregnancyWeight = null;
    LibVars.healthdashboardlibrary.weightChange = null;
    LibVars.healthdashboardlibrary.weightreadings = null;
    LibVars.healthdashboardlibrary.bpsystolicreadings = null;
    LibVars.healthdashboardlibrary.bpdiastolicreadings = null;
    LibVars.healthdashboardlibrary.stepsreadings = null;
    LibVars.healthdashboardlibrary.stepsduration = null;
    LibVars.healthdashboardlibrary.endDate = null;
    LibVars.healthdashboardlibrary.startDate = null;
    LibVars.healthdashboardlibrary.stepsdays = null;
    LibVars.healthdashboardlibrary.stepsplot = null;
    LibVars.healthdashboardlibrary.stepslist = null;
    LibVars.healthdashboardlibrary.bpdaysclean = null;
    LibVars.healthdashboardlibrary.bysystoliclistclean = null;
    LibVars.healthdashboardlibrary.bpdiastoliclistclean = null;
    LibVars.healthdashboardlibrary.bpsystolicdays = null;
    LibVars.healthdashboardlibrary.bpsystoliclist = null;
    LibVars.healthdashboardlibrary.bpdiastolicdays = null;
    LibVars.healthdashboardlibrary.bpdiastoliclist = null;
    LibVars.healthdashboardlibrary.tempString = null;
    LibVars.healthdashboardlibrary.bpsystolicplot = null;
    LibVars.healthdashboardlibrary.bpdiastolicplot = null;
    LibVars.healthdashboardlibrary.avgsystolic = null;
    LibVars.healthdashboardlibrary.maxsystolic = null;
    LibVars.healthdashboardlibrary.minsystolic = null;
    LibVars.healthdashboardlibrary.weightdays = null;
    LibVars.healthdashboardlibrary.weightlist = null;
    LibVars.healthdashboardlibrary.weightplot = null;
    LibVars.healthdashboardlibrary.snapusername = null;
    LibVars.healthdashboardlibrary.snapclinicalmeasurements = null;
    LibVars.healthdashboardlibrary.lenofmeasurements = null;
    LibVars.healthdashboardlibrary.weightreadingsdict = null;
    LibVars.healthdashboardlibrary.bpsystolicreadingsdict = null;
    LibVars.healthdashboardlibrary.bpdiatolicreadingsdict = null;
    LibVars.healthdashboardlibrary.stepsreadingdict = null;
    LibVars.healthdashboardlibrary.entryDict = null;
    LibVars.healthdashboardlibrary.tempDict = null;
    LibVars.healthdashboardlibrary.tempVal = null;
    LibVars.healthdashboardlibrary.timestamplist = null;
    LibVars.healthdashboardlibrary.timestamplistString = null;
    LibVars.healthdashboardlibrary.tempList = null;
    /**
     * Describe this function...
     */
    this.initData = initData;

    function initData() {
      return new Promise(function(resolve, reject) {
        // Block#: j6B~)8?)o:6[KEvp2GIf
        LibVars.healthdashboardlibrary.prePregnancyWeight = 0;
        // Block#: K,GvYj^ZUrlnI5N@i]{(
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("InitialWeightLabel", 'Initial Weight'); // Block#: )dZIMhrT9_uT12fiQFHF
        LibVars.healthdashboardlibrary.weightChange = 0;
        // Block#: 7l|A$ge-_AAMr,n?063K
        LibVars.healthdashboardlibrary.weightreadings = [];
        // Block#: $-9[$yBF/c~D8b(ezpSN
        LibVars.healthdashboardlibrary.bpsystolicreadings = [];
        // Block#: ~Vw(G::jGT2f(I_`lW~L
        LibVars.healthdashboardlibrary.bpdiastolicreadings = [];
        // Block#: #V`5r1WFaLI~XW=X*v,s
        LibVars.healthdashboardlibrary.stepsreadings = [];
        // Block#: 1-UbiJT,K)x+6o$gD#^V
        LibVars.healthdashboardlibrary.stepsduration = 1;
        // Block#: 1527UY%EHxD]36B|W5rQ
        com.fc.JavaScriptDistLib.Button.setProperty["Background color"]("1W", '#cccccc');
      });
    }
    /**
     * Describe this function...
     */
    this.displayDashboard = displayDashboard;

    function displayDashboard() {
      return new Promise(function(resolve, reject) {
        // Block#: LroLFFFJG|e;tf$-9rD|
        initData().then(response => {;
        });
        // Block#: )P$K7$A?t]U%7Rsq+6Cw
        $('[obj-name="footer"]').hide(); // Block#: U6BBe_oX!P=C4uT2a_dG
        com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("HealthDashboardScreen", true); // Block#: $Z[};5%+Cib;3m[N``.j
        estimateTime().then(response => {;
        });
        // Block#: $vo?s?F?F$#3vkZQY@ct
        fetchMeasurements().then(response => {;
        });
        // Block#: _)P]B/I}7{Pyv=y/~-=n
        $('[obj-name="footer"]').show(); // Block#: 5BRoOFAE.$VteAz8U|7M
        com.fc.JavaScriptDistLib.PageView.refresh('StatsPageView') // Block#: P3~$otDLd5*da|x@g0!G
        if(com.fc.JavaScriptDistLib.HealthKit.isAvailable()) {
          // Block#: 4$u_rhK_-SJ#y,t[DG1N
          if((com.fc.JavaScriptDistLib.Storage.getValue('isHealthKitAuthorized')) != null) {
            // Block#: YplCZ?=!J5u8,ZLo#U`A
            if(com.fc.JavaScriptDistLib.Storage.getValue('isHealthKitAuthorized')) {
              // Block#: h.{:;(Sr+Gg;gXG;c-1V
              $('[obj-name="connectButton"]').hide();
            }
          } else {
            // Block#: M`sxiVhNexjqA+x6FOdT
            $('[obj-name="connectButton"]').show();
          }
        } else {
          // Block#: eK*AcCf8E8IwF7JAJ1?O
          if(com.fc.JavaScriptDistLib.GoogleFit.isAuthorized()) {
            // Block#: 31b:{I,t6pLe[-Y:9NDc
            $('[obj-name="connectButton"]').hide();
          } else {
            // Block#: V!$Em?)nK!7K;ToBec9R
            $('[obj-name="connectButton"]').show();
          }
        }
      });
    }
    /**
     * Describe this function...
     */
    this.handleBackButton = handleBackButton;

    function handleBackButton() {
      return new Promise(function(resolve, reject) {
        com.fc.JavaScriptDistLib.EventListeners.invoke("handleBackButton", "zh5hyj7jnk", []);
      });
    }
    /**
     * Describe this function...
     */
    this.isGoogleFitAuthorized = isGoogleFitAuthorized;

    function isGoogleFitAuthorized() {
      return com.fc.JavaScriptDistLib.GoogleFit.isAuthorized();
    }
    /**
     * Describe this function...
     */
    this.authorizationStarted = authorizationStarted;

    function authorizationStarted() {
      return new Promise(function(resolve, reject) {
        com.fc.JavaScriptDistLib.EventListeners.invoke("authorizationStarted", "zh5hyj7jnk", []);
      });
    }
    /**
     * Describe this function...
     */
    this.estimateTime = estimateTime;

    function estimateTime() {
      return new Promise(function(resolve, reject) {
        // Block#: 3%q]^K?C^xm{ax(ZEt%X
        LibVars.healthdashboardlibrary.endDate = (com.fc.JavaScriptDistLib.MomentLibrary());
        // Block#: l0jLiBP:d6M+XZ./mmIJ
        if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(LibVars.healthdashboardlibrary.stepsduration, "EQ", 1)) {
          // Block#: [(Egp(@Lrk[?XJpBxC:/
          LibVars.healthdashboardlibrary.startDate = (LibVars.healthdashboardlibrary.endDate.clone().subtract(7, 'days'));
        } else if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(LibVars.healthdashboardlibrary.stepsduration, "EQ", 2)) {
          // Block#: l);P6Ni$5X??#dfD5Re?
          LibVars.healthdashboardlibrary.startDate = (LibVars.healthdashboardlibrary.endDate.clone().subtract(30, 'days'));
        } else if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(LibVars.healthdashboardlibrary.stepsduration, "EQ", 3)) {
          // Block#: hl%)pC)NTsF0V}jLz!|%
          LibVars.healthdashboardlibrary.startDate = (LibVars.healthdashboardlibrary.endDate.clone().subtract(3, 'months'));
        } else if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(LibVars.healthdashboardlibrary.stepsduration, "EQ", 4)) {
          // Block#: 7}.83k(WoVVEj^%Rp3BB
          LibVars.healthdashboardlibrary.startDate = (LibVars.healthdashboardlibrary.endDate.clone().subtract(6, 'months'));
        } else if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(LibVars.healthdashboardlibrary.stepsduration, "EQ", 5)) {
          // Block#: 1uKH]w=C)`)![zF}cSDT
          LibVars.healthdashboardlibrary.startDate = (LibVars.healthdashboardlibrary.endDate.clone().subtract(9, 'months'));
        } else if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(LibVars.healthdashboardlibrary.stepsduration, "EQ", 6)) {
          // Block#: #!^nrm)9S3C7)^04fR/a
          LibVars.healthdashboardlibrary.startDate = (LibVars.healthdashboardlibrary.endDate.clone().subtract(1, 'years'));
        }
      });
    }
    /**
     * Describe this function...
     */
    this.authorize = authorize;

    function authorize(dataTypesList) {
      return new Promise(function(resolve, reject) {
        // Block#: Jkc]WZm,~Zw/F{=y-4Zr
        if(com.fc.JavaScriptDistLib.HealthKit.isAvailable()) {
          // Block#: `0czE}}0?qNE0sspXlSR
          com.fc.JavaScriptDistLib.HealthKit.authorize(dataTypesList,
            function() {
              // Block#: =|O^V2%Wo3bVPc-]{1TP
              com.fc.JavaScriptDistLib.Storage.add('isHealthKitAuthorized', true) // Block#: AbP-r}z-=XRnI-V5q@to
              resolve({
                name: "success",
                data: null
              });
            },
            function(error_data) {
              // Block#: 6]{wnIJ^^eBlKdC~vVDA
              resolve({
                name: "Error",
                data: error_data
              });
            });
        } else {
          // Block#: f`X[VjpT+I0_yi_-R$,K
          authorizationStarted().then(response => {;
          });
          // Block#: Vy_*vczm(c:zCrbZRd+j
          com.fc.JavaScriptDistLib.GoogleFit.authorize(dataTypesList, '1008513698691-ukj5353eo4297dfhuemfhbe2p2qd7u04.apps.googleusercontent.com', 'KwPL79bP19z-H1OSzg5cpq49', 'https://powermomapp.scripps.edu',
            function() {
              // Block#: Vz1bLljI}l*6]B:RRyQ:
              com.fc.JavaScriptDistLib.Storage.add('isHealthKitAuthorized', false) // Block#: Th#)1IN#h4hlNK@!Rtyy
              resolve({
                name: "success",
                data: null
              });
            },
            function(error_data) {
              // Block#: x]OP7?QIYDEkx4)gcK7W
              resolve({
                name: "Error",
                data: error_data
              });
            });
        }
      });
    }
    /**
     * Describe this function...
     */
    this.handleShareButton = handleShareButton;

    function handleShareButton() {
      return new Promise(function(resolve, reject) {
        com.fc.JavaScriptDistLib.EventListeners.invoke("handleShareButton", "zh5hyj7jnk", []);
      });
    }
    /**
     * Describe this function...
     */
    this.displaySteps = displaySteps;

    function displaySteps() {
      return new Promise(function(resolve, reject) {
        // Block#: B,qq`,~OVvg#c-GWE7[7
        if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(LibVars.healthdashboardlibrary.stepsreadings.length, "GT", 0)) {
          // Block#: v#HF8u0uTsJ!-QN]X=@)
          LibVars.healthdashboardlibrary.stepsdays = (com.fc.JavaScriptDistLib.JSON.parseJSONDataForPath(LibVars.healthdashboardlibrary.stepsreadings, String('$.[*].') + String('timestamp')));
          // Block#: HO!ATUQs?IRd:67/H{M-
          var index_end = LibVars.healthdashboardlibrary.stepsdays.length - 1;
          var index_inc = 1;
          if(0 > index_end) {
            index_inc = -index_inc;
          }
          for(index = 0; index_inc >= 0 ? index <= index_end : index >= index_end; index += index_inc) {
            // Block#: _XF{k5Rs=g`+Im2JFT]R
            LibVars.healthdashboardlibrary.stepsdays[index] = com.fc.JavaScriptDistLib.TextLib.textSubstring(LibVars.healthdashboardlibrary.stepsdays[index], 0, 5);
          }
          // Block#: .jxxFlA`|31hgauMuQnc
          LibVars.healthdashboardlibrary.stepslist = (com.fc.JavaScriptDistLib.JSON.parseJSONDataForPath(LibVars.healthdashboardlibrary.stepsreadings, String('$.[*].') + String('value')));
          // Block#: ?_686riHrl,J_Sok_LKJ
          var index_end2 = LibVars.healthdashboardlibrary.stepslist.length - 1;
          var index_inc2 = 1;
          if(0 > index_end2) {
            index_inc2 = -index_inc2;
          }
          for(index = 0; index_inc2 >= 0 ? index <= index_end2 : index >= index_end2; index += index_inc2) {
            // Block#: T/?l3$ekmLo,iP@q!*so
            LibVars.healthdashboardlibrary.stepslist[index] = LibVars.healthdashboardlibrary.stepslist[index];
          }
        }
        // Block#: ZP/P|aEzY/[H,A:=.3Z4
        LibVars.healthdashboardlibrary.stepsplot = (com.fc.JavaScriptDistLib.GraphContainer.createChartWithList('stepsgraph', LibVars.healthdashboardlibrary.stepsdays, LibVars.healthdashboardlibrary.stepslist, 'steps'));
        // Block#: zF{R|{NqrQ;Gg?[9WOWb
        LibVars.healthdashboardlibrary.stepsplot // Block#: sX)]$@ZIfpFhN(#yB`N0
        com.fc.JavaScriptDistLib.GraphContainer.addChartTransition('stepsgraph', 500, 500); // Imported from Lib: StatisticsLibrary
        // Block#: `_7m:2p:(uHq+rFEk!KB
        statisticslibrary.average(LibVars.healthdashboardlibrary.stepslist).then(response => {;
          if(response.name === "value") {
            // Block#: trib41L=?l.)`$9n:P6O
            com.fc.JavaScriptDistLib.Label.setProperty["Text"]("avgreadingvalue", (com.fc.JavaScriptDistLib.TextLib.convertToText(Math.round(response.data))));
          }
        });
        // Imported from Lib: StatisticsLibrary
        // Block#: ~%`FT4/eIWo.otCDUp**
        statisticslibrary.max(LibVars.healthdashboardlibrary.stepslist).then(response => {;
          if(response.name === "value") {
            // Block#: AILb/OO?!o{po8FMUJPa
            com.fc.JavaScriptDistLib.Label.setProperty["Text"]("maxreadingvalue", (com.fc.JavaScriptDistLib.TextLib.convertToText(Math.round(response.data))));
          }
        });
        // Imported from Lib: StatisticsLibrary
        // Block#: ?^V+2RdZuOi[}#Un*;Tn
        statisticslibrary.min(LibVars.healthdashboardlibrary.stepslist).then(response => {;
          if(response.name === "value") {
            // Block#: XTu19-qu=f|5F{?yxxLC
            com.fc.JavaScriptDistLib.Label.setProperty["Text"]("minreadingvalue", (com.fc.JavaScriptDistLib.TextLib.convertToText(Math.round(response.data))));
          }
        });
      });
    }
    /**
     * Describe this function...
     */
    this.displayBP = displayBP;

    function displayBP() {
      return new Promise(function(resolve, reject) {
        // Block#: ,y(dE=.opXJ,~xVw=1{|
        if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(LibVars.healthdashboardlibrary.bpsystolicreadings.length, "GT", 0)) {
          // Block#: 2WVX%X9}S@MJ!%{lz0M(
          LibVars.healthdashboardlibrary.bpdaysclean = [];
          // Block#: oo%p!cBUPC%jA|19HB+4
          LibVars.healthdashboardlibrary.bysystoliclistclean = [];
          // Block#: x}K^v7IIKaD^jnX)4U^L
          LibVars.healthdashboardlibrary.bpdiastoliclistclean = [];
          // Block#: ;:pL)u`KOYJ0_z$q[Dt3
          LibVars.healthdashboardlibrary.bpsystolicdays = (com.fc.JavaScriptDistLib.JSON.parseJSONDataForPath(LibVars.healthdashboardlibrary.bpsystolicreadings, String('$.[*].') + String('timestamp')));
          // Block#: +z[Hv/]}wEfPdvf=li=N
          LibVars.healthdashboardlibrary.bpsystoliclist = (com.fc.JavaScriptDistLib.JSON.parseJSONDataForPath(LibVars.healthdashboardlibrary.bpsystolicreadings, String('$.[*].') + String('value')));
          // Block#: AL_S*7{(9mZeJ9DF%K1n
          LibVars.healthdashboardlibrary.bpdiastolicdays = (com.fc.JavaScriptDistLib.JSON.parseJSONDataForPath(LibVars.healthdashboardlibrary.bpdiastolicreadings, String('$.[*].') + String('timestamp')));
          // Block#: 9mroWq-7G!)lGIaGA@Q/
          LibVars.healthdashboardlibrary.bpdiastoliclist = (com.fc.JavaScriptDistLib.JSON.parseJSONDataForPath(LibVars.healthdashboardlibrary.bpdiastolicreadings, String('$.[*].') + String('value')));
          // Block#: iS#pXY=P!lwiaUsd#2}Q
          var index_end3 = LibVars.healthdashboardlibrary.bpdiastolicdays.length - 1;
          var index_inc3 = 1;
          if(0 > index_end3) {
            index_inc3 = -index_inc3;
          }
          for(index = 0; index_inc3 >= 0 ? index <= index_end3 : index >= index_end3; index += index_inc3) {
            // Block#: z@d%pHYEF=,R:Su3[0:6
            LibVars.healthdashboardlibrary.tempString = LibVars.healthdashboardlibrary.bpdiastolicdays[index];
            // Block#: BQ8bAdrv~,qw5orf4znU
            if(com.fc.JavaScriptDistLib.ListLibrary.listContains(LibVars.healthdashboardlibrary.bpsystolicdays, LibVars.healthdashboardlibrary.tempString)) {
              // Block#: rHGmHB}g*834+K.TYn7F
              com.fc.JavaScriptDistLib.ListLibrary.listAdd(LibVars.healthdashboardlibrary.bpdaysclean, com.fc.JavaScriptDistLib.TextLib.textSubstring(LibVars.healthdashboardlibrary.tempString, 0, 5))
              // Block#: ti$D8wSZ!.*2)p-MYN[/
              com.fc.JavaScriptDistLib.ListLibrary.listAdd(LibVars.healthdashboardlibrary.bpdiastoliclistclean, LibVars.healthdashboardlibrary.bpdiastoliclist[index])
            }
          }
          // Block#: a-}5]WnX~N!u9YV)A,C{
          var index_end4 = LibVars.healthdashboardlibrary.bpsystolicdays.length - 1;
          var index_inc4 = 1;
          if(0 > index_end4) {
            index_inc4 = -index_inc4;
          }
          for(index = 0; index_inc4 >= 0 ? index <= index_end4 : index >= index_end4; index += index_inc4) {
            // Block#: mkJ!)5Ug4t%O-Tv8b3@n
            LibVars.healthdashboardlibrary.tempString = LibVars.healthdashboardlibrary.bpsystolicdays[index];
            // Block#: 8%i3I=ni5V|+Mlvs*Qf%
            if(com.fc.JavaScriptDistLib.ListLibrary.listContains(LibVars.healthdashboardlibrary.bpdaysclean, com.fc.JavaScriptDistLib.TextLib.textSubstring(LibVars.healthdashboardlibrary.tempString, 0, 5))) {
              // Block#: Zl?V`Fl1ia!U#;?OqJ[U
              com.fc.JavaScriptDistLib.ListLibrary.listAdd(LibVars.healthdashboardlibrary.bysystoliclistclean, LibVars.healthdashboardlibrary.bpsystoliclist[index])
            }
          }
          // Block#: =|e-NG6`Uy!6?As}l2I#
          LibVars.healthdashboardlibrary.bpsystolicplot = (com.fc.JavaScriptDistLib.GraphContainer.createChartWithList('bpgraph', LibVars.healthdashboardlibrary.bpdaysclean, LibVars.healthdashboardlibrary.bysystoliclistclean, 'bpsystolic'));
          // Block#: `S[XD#btT1E~Sj;TiOt:
          LibVars.healthdashboardlibrary.bpdiastolicplot = (com.fc.JavaScriptDistLib.GraphContainer.createChartWithList('bpgraph', LibVars.healthdashboardlibrary.bpdaysclean, LibVars.healthdashboardlibrary.bpdiastoliclistclean, 'bpdiastolic'));
          // Block#: T/+-6{Dp=ytQ1D[o7Z3k
          console.log(com.fc.JavaScriptDistLib.TextLib.convertToText(LibVars.healthdashboardlibrary.bpdaysclean));
          if(LibVars.healthdashboardlibrary.debugService && LibVars.healthdashboardlibrary.debugService.active) {
            LibVars.healthdashboardlibrary.debugService.traces.push(com.fc.JavaScriptDistLib.TextLib.convertToText(LibVars.healthdashboardlibrary.bpdaysclean));
            LibVars.healthdashboardlibrary.debugService.printLog();
          }
          // Block#: ~!OB`8i`JC-y=GYsSqo3
          console.log(com.fc.JavaScriptDistLib.TextLib.convertToText(LibVars.healthdashboardlibrary.bysystoliclistclean));
          if(LibVars.healthdashboardlibrary.debugService && LibVars.healthdashboardlibrary.debugService.active) {
            LibVars.healthdashboardlibrary.debugService.traces.push(com.fc.JavaScriptDistLib.TextLib.convertToText(LibVars.healthdashboardlibrary.bysystoliclistclean));
            LibVars.healthdashboardlibrary.debugService.printLog();
          }
          // Block#: _=a?h)r.#bNp:;$^UTu^
          console.log(com.fc.JavaScriptDistLib.TextLib.convertToText(LibVars.healthdashboardlibrary.bpdiastoliclistclean));
          if(LibVars.healthdashboardlibrary.debugService && LibVars.healthdashboardlibrary.debugService.active) {
            LibVars.healthdashboardlibrary.debugService.traces.push(com.fc.JavaScriptDistLib.TextLib.convertToText(LibVars.healthdashboardlibrary.bpdiastoliclistclean));
            LibVars.healthdashboardlibrary.debugService.printLog();
          }
          // Block#: ]$V.4e$f}HsxnXRMOh{Z
          LibVars.healthdashboardlibrary.bpsystolicplot // Block#: Bnu;Y|`:_taj~ePIkkH3
          LibVars.healthdashboardlibrary.bpdiastolicplot // Block#: 3=qw*9RwkW{lSu3l3e{;
          com.fc.JavaScriptDistLib.GraphContainer.addChartTransition('bpgraph', 500, 500); // Block#: aBPalcYHEml7mfibV3uY
          computeStatsForBP().then(response => {;
          });
        }
      });
    }
    /**
     * Describe this function...
     */
    this.computeStatsForBP = computeStatsForBP;

    function computeStatsForBP() {
      return new Promise(function(resolve, reject) {
        // Imported from Lib: StatisticsLibrary
        // Block#: UgplTZ@{hA8;@E5{ud6,
        statisticslibrary.average(LibVars.healthdashboardlibrary.bpsystoliclist).then(response => {;
          if(response.name === "value") {
            // Block#: e-zvvS5.2w(sc8MPv#Eb
            LibVars.healthdashboardlibrary.avgsystolic = (com.fc.JavaScriptDistLib.TextLib.convertToText(Math.round(response.data)));
            // Imported from Lib: StatisticsLibrary
            // Block#: z*_qw|C{;J6gF!/^0nXr
            statisticslibrary.average(LibVars.healthdashboardlibrary.bpdiastoliclist).then(response => {;
              if(response.name === "value") {
                // Block#: r;1X~{C=rS)ly(_yV0G:
                com.fc.JavaScriptDistLib.Label.setProperty["Text"]("avgbpvalue", ([LibVars.healthdashboardlibrary.avgsystolic, '/', (com.fc.JavaScriptDistLib.TextLib.convertToText(Math.round(response.data)))].join('')));
              }
            });
          }
        });
        // Imported from Lib: StatisticsLibrary
        // Block#: A!|++60kiPjBW?EyALI^
        statisticslibrary.max(LibVars.healthdashboardlibrary.bpsystoliclist).then(response => {;
          if(response.name === "value") {
            // Block#: xJzo6u5Lgv?h4Fb@{m@`
            LibVars.healthdashboardlibrary.maxsystolic = (com.fc.JavaScriptDistLib.TextLib.convertToText(Math.round(response.data)));
            // Imported from Lib: StatisticsLibrary
            // Block#: %wteB4W01fF|C$|QNG6n
            statisticslibrary.max(LibVars.healthdashboardlibrary.bpdiastoliclist).then(response => {;
              if(response.name === "value") {
                // Block#: ?{5THS`CyRxTxd-Nwm%Q
                com.fc.JavaScriptDistLib.Label.setProperty["Text"]("maxbpvalue", ([LibVars.healthdashboardlibrary.maxsystolic, '/', (com.fc.JavaScriptDistLib.TextLib.convertToText(Math.round(response.data)))].join('')));
              }
            });
          }
        });
        // Imported from Lib: StatisticsLibrary
        // Block#: pW;dTiL16-TxRse[=`2=
        statisticslibrary.min(LibVars.healthdashboardlibrary.bpsystoliclist).then(response => {;
          if(response.name === "value") {
            // Block#: [])#ppE8*k1w`PKyJ:*8
            LibVars.healthdashboardlibrary.minsystolic = (com.fc.JavaScriptDistLib.TextLib.convertToText(Math.round(response.data)));
            // Imported from Lib: StatisticsLibrary
            // Block#: IGG/8Gp(UG_eE)C?$m3a
            statisticslibrary.min(LibVars.healthdashboardlibrary.bpdiastoliclist).then(response => {;
              if(response.name === "value") {
                // Block#: XNxn+9gjCLW`|a]-LX2U
                com.fc.JavaScriptDistLib.Label.setProperty["Text"]("minbpvalue", ([LibVars.healthdashboardlibrary.minsystolic, '/', (com.fc.JavaScriptDistLib.TextLib.convertToText(Math.round(response.data)))].join('')));
              }
            });
          }
        });
      });
    }
    /**
     * Describe this function...
     */
    this.displayWeight = displayWeight;

    function displayWeight() {
      return new Promise(function(resolve, reject) {
        // Block#: ZsWm;3%tTgW~E#t2+A!r
        if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(LibVars.healthdashboardlibrary.weightreadings.length, "GT", 0)) {
          // Block#: -n~{ez`gLZ6I/%rQ~+pT
          LibVars.healthdashboardlibrary.weightdays = (com.fc.JavaScriptDistLib.JSON.parseJSONDataForPath(LibVars.healthdashboardlibrary.weightreadings, String('$.[*].') + String('timestamp')));
          // Block#: 0rEwsY3Qja749GCr;!Fa
          var index_end5 = LibVars.healthdashboardlibrary.weightdays.length - 1;
          var index_inc5 = 1;
          if(0 > index_end5) {
            index_inc5 = -index_inc5;
          }
          for(index = 0; index_inc5 >= 0 ? index <= index_end5 : index >= index_end5; index += index_inc5) {
            // Block#: {Y_:L6;.248_i,3GTm!@
            LibVars.healthdashboardlibrary.weightdays[index] = com.fc.JavaScriptDistLib.TextLib.textSubstring(LibVars.healthdashboardlibrary.weightdays[index], 0, 5);
          }
          // Block#: v]57!C)Z[cOHcWskU9KO
          LibVars.healthdashboardlibrary.weightlist = (com.fc.JavaScriptDistLib.JSON.parseJSONDataForPath(LibVars.healthdashboardlibrary.weightreadings, String('$.[*].') + String('value')));
          // Block#: aSu7.CirWmI2=z[wJjN`
          var index_end6 = LibVars.healthdashboardlibrary.weightlist.length - 1;
          var index_inc6 = 1;
          if(0 > index_end6) {
            index_inc6 = -index_inc6;
          }
          for(index = 0; index_inc6 >= 0 ? index <= index_end6 : index >= index_end6; index += index_inc6) {
            // Block#: tyS?~:izOX`K7)y.fa7!
            LibVars.healthdashboardlibrary.weightlist[index] = toPounds(LibVars.healthdashboardlibrary.weightlist[index]);
          }
          // Block#: bja7W`cBq)S=f%,(i=6A
          LibVars.healthdashboardlibrary.weightplot = (com.fc.JavaScriptDistLib.GraphContainer.createChartWithList('weightgraph', LibVars.healthdashboardlibrary.weightdays, LibVars.healthdashboardlibrary.weightlist, 'weight'));
          // Block#: |{a]ugL!,fZ:-.]yM:J+
          if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(LibVars.healthdashboardlibrary.prePregnancyWeight, "GT", 0)) {
            // Block#: _R0bKTx.~q+Ul}*P}Ij7
            com.fc.JavaScriptDistLib.Label.setProperty["Text"]("InitialWeightLabel", 'Pre Pregnancy Weight'); // Block#: UYYncaJ8s;:sqB(]9?Oa
            com.fc.JavaScriptDistLib.Label.setProperty["Text"]("InitialWeightValue", (com.fc.JavaScriptDistLib.TextLib.convertToText(LibVars.healthdashboardlibrary.prePregnancyWeight)));
          } else {
            // Block#: azlL*e/{/V?=LUCyqpD0
            com.fc.JavaScriptDistLib.Label.setProperty["Text"]("InitialWeightLabel", 'Initial Weight'); // Block#: cP/`,q,_FdU%^?Z2:,9h
            com.fc.JavaScriptDistLib.Label.setProperty["Text"]("InitialWeightValue", (com.fc.JavaScriptDistLib.TextLib.convertToText(Math.round(LibVars.healthdashboardlibrary.weightlist[0]))));
          }
          // Block#: D:OxEy1,:-g.9hf_2g5J
          com.fc.JavaScriptDistLib.Label.setProperty["Text"]("CurrentWeightValue", (com.fc.JavaScriptDistLib.TextLib.convertToText(Math.round(LibVars.healthdashboardlibrary.weightlist.slice(-1)[0])))); // Block#: c4;=hw(HKPfc$qU3J]Dx
          LibVars.healthdashboardlibrary.weightChange = Math.round((com.fc.JavaScriptDistLib.MathLibrary.toNumber(com.fc.JavaScriptDistLib.Label.getProperty["Text"]("CurrentWeightValue"))) - (com.fc.JavaScriptDistLib.MathLibrary.toNumber(com.fc.JavaScriptDistLib.Label.getProperty["Text"]("InitialWeightValue"))));
          // Block#: X0^?b^.5$4nY7Cf7nXw!
          if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(LibVars.healthdashboardlibrary.weightChange, "GT", 0)) {
            // Block#: QlF1C[e4O0K9i}4-Xm.g
            com.fc.JavaScriptDistLib.Label.setProperty["Text"]("weightChangeValue", (com.fc.JavaScriptDistLib.TextLib.convertToText(LibVars.healthdashboardlibrary.weightChange))); // Block#: w8OV~kdvf!skO0`[%|a=
            com.fc.JavaScriptDistLib.Label.setProperty["Text"]("weightChangeSign", '+');
          } else if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(LibVars.healthdashboardlibrary.weightChange, "LT", 0)) {
            // Block#: bg}i443)EChH!Qy4mcob
            com.fc.JavaScriptDistLib.Label.setProperty["Text"]("weightChangeValue", (com.fc.JavaScriptDistLib.TextLib.convertToText(LibVars.healthdashboardlibrary.weightChange * -1))); // Block#: -4EnK9vau`XDDeM!H+dg
            com.fc.JavaScriptDistLib.Label.setProperty["Text"]("weightChangeSign", '-');
          } else {
            // Block#: eu~*,X=Fn,s?K4~cxuHv
            com.fc.JavaScriptDistLib.Label.setProperty["Text"]("weightChangeValue", (com.fc.JavaScriptDistLib.TextLib.convertToText(LibVars.healthdashboardlibrary.weightChange))); // Block#: Vg79J2~PmMIe_o^,4.n-
            com.fc.JavaScriptDistLib.Label.setProperty["Text"]("weightChangeSign", '');
          }
          // Block#: Ogj:Oyq-Q,a@dUK#=6v-
          LibVars.healthdashboardlibrary.weightplot // Block#: _=6966qK/.Eh[ohyY_Ue
          com.fc.JavaScriptDistLib.GraphContainer.addChartTransition('weightgraph', 500, 500);
        }
      });
    }
    /**
     * Describe this function...
     */
    this.setPrePregnancyWeight = setPrePregnancyWeight;

    function setPrePregnancyWeight(weight) {
      return new Promise(function(resolve, reject) {
        // Block#: Xx1,k.3h.v{QXjC1LSj-
        LibVars.healthdashboardlibrary.prePregnancyWeight = weight;
        // Block#: 3)s*V@bu|NR~Nj`9/^4n
        com.fc.JavaScriptDistLib.PageView.refresh('StatsPageView') // Block#: 2ZC*dWI]kIMT$t^xi}f(
        console.log(String('Pre-Pregnancy Weight: ') + String(LibVars.healthdashboardlibrary.prePregnancyWeight));
        if(LibVars.healthdashboardlibrary.debugService && LibVars.healthdashboardlibrary.debugService.active) {
          LibVars.healthdashboardlibrary.debugService.traces.push(String('Pre-Pregnancy Weight: ') + String(LibVars.healthdashboardlibrary.prePregnancyWeight));
          LibVars.healthdashboardlibrary.debugService.printLog();
        }
      });
    }
    /**
     * Describe this function...
     */
    this.fetchMeasurements = fetchMeasurements;

    function fetchMeasurements() {
      return new Promise(function(resolve, reject) {
        // Block#: yW-bRs?-ko]pNM)b!n*4
        com.fc.JavaScriptDistLib.SnapClinical.fetch('/snap-api/user/search/whoAmI', "GET", JSON.stringify(),
          function(data) {
            // Block#: Lfxq*dzx8A*cU@TluHo?
            LibVars.healthdashboardlibrary.snapusername = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(data, 'username'));
            // Block#: yUOd1$G/_:BPT3}Uo`{%
            console.log(String('Snapclinical whoAmI response is ') + String(LibVars.healthdashboardlibrary.snapusername));
            if(LibVars.healthdashboardlibrary.debugService && LibVars.healthdashboardlibrary.debugService.active) {
              LibVars.healthdashboardlibrary.debugService.traces.push(String('Snapclinical whoAmI response is ') + String(LibVars.healthdashboardlibrary.snapusername));
              LibVars.healthdashboardlibrary.debugService.printLog();
            }
            // Block#: @q$0!$-rtcYHHWpn+!`j
            com.fc.JavaScriptDistLib.SnapClinical.fetch((['/snap-api/measurements/search/listByTimeAndUsername?username=', LibVars.healthdashboardlibrary.snapusername, '&from=', (LibVars.healthdashboardlibrary.startDate.tz(('UTC')).format(('YYYY[-]MM[-]DD[T]HH[:]mm[:]ss[.]SSS[Z]'))), '&to=', (LibVars.healthdashboardlibrary.endDate.tz(('UTC')).format(('YYYY[-]MM[-]DD[T]HH[:]mm[:]ss[.]SSS[Z]')))].join('')), "GET", JSON.stringify(),
              function(data) {
                // Block#: [bhg-$/I?,x$]#7Wx$/Z
                console.log('measurement success');
                if(LibVars.healthdashboardlibrary.debugService && LibVars.healthdashboardlibrary.debugService.active) {
                  LibVars.healthdashboardlibrary.debugService.traces.push('measurement success');
                  LibVars.healthdashboardlibrary.debugService.printLog();
                }
                // Block#: EIn:F|VuWbvzLNrFjoeP
                console.log(data);
                if(LibVars.healthdashboardlibrary.debugService && LibVars.healthdashboardlibrary.debugService.active) {
                  LibVars.healthdashboardlibrary.debugService.traces.push(data);
                  LibVars.healthdashboardlibrary.debugService.printLog();
                }
                // Block#: {!Jd3aXgt7--Su.bJpzC
                console.log(com.fc.JavaScriptDistLib.JSON.parseJSONDataForPath(data, '$._embedded.measurements[*]'));
                if(LibVars.healthdashboardlibrary.debugService && LibVars.healthdashboardlibrary.debugService.active) {
                  LibVars.healthdashboardlibrary.debugService.traces.push(com.fc.JavaScriptDistLib.JSON.parseJSONDataForPath(data, '$._embedded.measurements[*]'));
                  LibVars.healthdashboardlibrary.debugService.printLog();
                }
                // Block#: iWh5,H,?-`9A5*]V8gJI
                LibVars.healthdashboardlibrary.snapclinicalmeasurements = (com.fc.JavaScriptDistLib.JSON.parseJSONDataForPath(data, '$._embedded.measurements[*]'));
                // Block#: Y_BqJlgsc2k?UsrK##Hz
                if(!(LibVars.healthdashboardlibrary.snapclinicalmeasurements == null)) {
                  // Block#: #]k[VvW+k+,]^jmPwO|m
                  if(!!LibVars.healthdashboardlibrary.snapclinicalmeasurements.length) {
                    // Block#: 0~z!DxO%Gl#$Ke:?hY#x
                    parseMeasurements().then(response => {;
                    });
                  } else {
                    // Block#: `dxR/)i0$_W[%#I3qd[d
                    com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("HealthDashboardScreen", false);
                  }
                } else {
                  // Block#: Pu=^To]~8o(29$If:9#V
                  com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("HealthDashboardScreen", false);
                }
              },
              function(error) {
                // Block#: O(_abefMN)deiu(GGAZB
                console.log(error);
                if(LibVars.healthdashboardlibrary.debugService && LibVars.healthdashboardlibrary.debugService.active) {
                  LibVars.healthdashboardlibrary.debugService.traces.push(error);
                  LibVars.healthdashboardlibrary.debugService.printLog();
                }
                // Block#: /?S?A5UUj=yzG_hY.e4T
                com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("HealthDashboardScreen", false);
              });
          },
          function(error) {
            // Block#: 9XD8*3FmZY}?3`vgUg?5
            console.log(error);
            if(LibVars.healthdashboardlibrary.debugService && LibVars.healthdashboardlibrary.debugService.active) {
              LibVars.healthdashboardlibrary.debugService.traces.push(error);
              LibVars.healthdashboardlibrary.debugService.printLog();
            }
            // Block#: vK(|A.!N]K`t!HZDS(X`
            com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("HealthDashboardScreen", false);
          });
      });
    }
    /**
     * Describe this function...
     */
    this.parseMeasurements = parseMeasurements;

    function parseMeasurements() {
      return new Promise(function(resolve, reject) {
        // Block#: :|U2@[bErv[n=L#c5CR*
        LibVars.healthdashboardlibrary.lenofmeasurements = LibVars.healthdashboardlibrary.snapclinicalmeasurements.length;
        // Block#: @aTCiU2%(FO=Q;dZvGq]
        LibVars.healthdashboardlibrary.weightreadings = [];
        // Block#: myHZgldUNh/Wmj4VN1#k
        LibVars.healthdashboardlibrary.bpsystolicreadings = [];
        // Block#: D(|`p]5%xR(D/GwCc`!D
        LibVars.healthdashboardlibrary.bpdiastolicreadings = [];
        // Block#: p`=aYXZg`@gfii=ne)H*
        LibVars.healthdashboardlibrary.stepsreadings = [];
        // Block#: Xp6[hSx6MiKgw|4H.~$`
        LibVars.healthdashboardlibrary.weightreadingsdict = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();
        // Block#: 0pMk.ND[Q]V:e]l;8wa_
        LibVars.healthdashboardlibrary.bpsystolicreadingsdict = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();
        // Block#: tm_.;(GJuRMfXpaVRX,[
        LibVars.healthdashboardlibrary.bpdiatolicreadingsdict = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();
        // Block#: Xm%rgIO,*N8fZEge19]L
        LibVars.healthdashboardlibrary.stepsreadingdict = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();
        // Block#: SQzu$iqtV8gqX83)*Oty
        var index_end7 = LibVars.healthdashboardlibrary.lenofmeasurements - 1;
        var index_inc7 = 1;
        if(0 > index_end7) {
          index_inc7 = -index_inc7;
        }
        for(index = 0; index_inc7 >= 0 ? index <= index_end7 : index >= index_end7; index += index_inc7) {
          // Block#: y)jXfuH)YNz1V*r0_%+N
          if(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(LibVars.healthdashboardlibrary.snapclinicalmeasurements[index], 'unitDescr')) {
            // Block#: ;~):upU4ZGVx,KTwKhi|
            LibVars.healthdashboardlibrary.entryDict = com.fc.JavaScriptDistLib.Dictionary.createDictionary(['timestamp', 'value'], [getFormattedTime((com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.healthdashboardlibrary.snapclinicalmeasurements[index], 'timestamp'))), (com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.healthdashboardlibrary.snapclinicalmeasurements[index], 'value'))]);
            // Block#: 9C$LUq|^1Ea,PAvy1)_?
            if(com.fc.JavaScriptDistLib.TextLib.textContains(com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.healthdashboardlibrary.snapclinicalmeasurements[index], 'unitDescr'), 'Body weight')) {
              // Block#: z!8$K:?~lOrhw$pT(N`n
              appendReadings(LibVars.healthdashboardlibrary.weightreadingsdict).then(response => {;
              });
              // Block#: ]lTa=#y*0+.6$px-wdBH
              com.fc.JavaScriptDistLib.ListLibrary.listAdd(LibVars.healthdashboardlibrary.weightreadings, LibVars.healthdashboardlibrary.entryDict)
            } else if(com.fc.JavaScriptDistLib.TextLib.textContains(com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.healthdashboardlibrary.snapclinicalmeasurements[index], 'unitDescr'), 'Systolic blood pressure')) {
              // Block#: S.21:Nv_WexLU=Gko7D`
              appendReadings(LibVars.healthdashboardlibrary.bpsystolicreadingsdict).then(response => {;
              });
              // Block#: BS*/tff^F$l)tr5+5a^_
              com.fc.JavaScriptDistLib.ListLibrary.listAdd(LibVars.healthdashboardlibrary.bpsystolicreadings, LibVars.healthdashboardlibrary.entryDict)
            } else if(com.fc.JavaScriptDistLib.TextLib.textContains(com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.healthdashboardlibrary.snapclinicalmeasurements[index], 'unitDescr'), 'Diastolic blood pressure')) {
              // Block#: !56Mgl$4v6RnJ_k]]kj3
              appendReadings(LibVars.healthdashboardlibrary.bpdiatolicreadingsdict).then(response => {;
              });
              // Block#: =uvt5za+]rsrf8Q2@Tk/
              com.fc.JavaScriptDistLib.ListLibrary.listAdd(LibVars.healthdashboardlibrary.bpdiastolicreadings, LibVars.healthdashboardlibrary.entryDict)
            } else if(com.fc.JavaScriptDistLib.TextLib.textContains(com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.healthdashboardlibrary.snapclinicalmeasurements[index], 'unitDescr'), 'Steps per day')) {
              // Block#: ~KZ^y*;P!mPNTYHm,NZq
              appendReadings(LibVars.healthdashboardlibrary.stepsreadingdict).then(response => {;
              });
              // Block#: v6*:+2y!By(#_GCw(u[v
              com.fc.JavaScriptDistLib.ListLibrary.listAdd(LibVars.healthdashboardlibrary.stepsreadings, LibVars.healthdashboardlibrary.entryDict)
            }
          }
        }
        // Block#: s$O5}l)7$9uXX_MfEH=/
        sortReadingsWeight(LibVars.healthdashboardlibrary.weightreadingsdict, LibVars.healthdashboardlibrary.weightreadings).then(response => {;
        });
        // Block#: e|t8o,#+N}LU/2fHlBgX
        sortReadingsBP(LibVars.healthdashboardlibrary.bpsystolicreadingsdict, LibVars.healthdashboardlibrary.bpsystolicreadings).then(response => {;
        });
        // Block#: (oHXt/]r7o^2OZ)k`UQM
        sortReadingsBP(LibVars.healthdashboardlibrary.bpdiatolicreadingsdict, LibVars.healthdashboardlibrary.bpdiastolicreadings).then(response => {;
        });
        // Block#: 1ek_`KA]TqD2fSKtt#/^
        sortReadingsBP(LibVars.healthdashboardlibrary.bpdiatolicreadingsdict, LibVars.healthdashboardlibrary.bpdiastolicreadings).then(response => {;
        });
        // Block#: ;q+c.m{T_WjF97!IjLeO
        sortReadingsSteps(LibVars.healthdashboardlibrary.stepsreadingdict, LibVars.healthdashboardlibrary.stepsreadings).then(response => {;
        });
        // Block#: TH:[]sFv3!%bH]yX.3ek
        displayBP().then(response => {;
        });
        // Block#: cd9Fl8k{w%a}c,GRwP%|
        displayWeight().then(response => {;
        });
        // Block#: /,2koL%fsKlL1h~$*+pS
        displaySteps().then(response => {;
        });
        // Block#: cf0giTo^}9:8-:uwCVt)
        com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("HealthDashboardScreen", false); // Block#: :7o?UnH+m4VN.SW{:HR_
        com.fc.JavaScriptDistLib.PageView.refresh('StatsPageView')
      });
    }
    /**
     * Describe this function...
     */
    this.appendReadings = appendReadings;

    function appendReadings(datareadingsdict) {
      return new Promise(function(resolve, reject) {
        // Block#: qMM(jMi6],4$[PVcam!#
        if(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(datareadingsdict, com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.healthdashboardlibrary.entryDict, 'timestamp'))) {
          // Block#: nk[:-V!KBTj:Al@l|D87
          LibVars.healthdashboardlibrary.tempDict = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(datareadingsdict, com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.healthdashboardlibrary.entryDict, 'timestamp')));
          // Block#: B3=@sNd{2z#WHlyX8P|P
          LibVars.healthdashboardlibrary.tempVal = ((com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.healthdashboardlibrary.entryDict, 'value')) + (com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.healthdashboardlibrary.tempDict, 'value'))) / 2;
          // Block#: ;Vq?OAJkNy`/TeHFMQ(x
          com.fc.JavaScriptDistLib.Dictionary.setDictValue(LibVars.healthdashboardlibrary.tempDict, 'value', LibVars.healthdashboardlibrary.tempVal);
          // Block#: zs:AOj!PB[-%F5f:e,z=
          com.fc.JavaScriptDistLib.Dictionary.setDictValue(datareadingsdict, com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.healthdashboardlibrary.entryDict, 'timestamp'), LibVars.healthdashboardlibrary.tempDict);
        } else {
          // Block#: Zrwe]VMg2R5Br5eT)duw
          LibVars.healthdashboardlibrary.tempDict = LibVars.healthdashboardlibrary.entryDict;
        }
        // Block#: kH{_W@Wsyn6@uB#+1PS)
        com.fc.JavaScriptDistLib.Dictionary.setDictValue(datareadingsdict, com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.healthdashboardlibrary.entryDict, 'timestamp'), LibVars.healthdashboardlibrary.tempDict);
      });
    }
    /**
     * Describe this function...
     */
    this.sortReadingsBP = sortReadingsBP;

    function sortReadingsBP(datareadingsdict, datareadingslist) {
      return new Promise(function(resolve, reject) {
        // Block#: er[B)YP/$=$.f^i/dv:7
        LibVars.healthdashboardlibrary.timestamplist = [];
        // Block#: /Xt6KW)LQ?fC]K|]A*hZ
        LibVars.healthdashboardlibrary.timestamplistString = (com.fc.JavaScriptDistLib.Dictionary.getKeys(datareadingsdict));
        // Block#: ,xv4z;[IFKRB4u=qz[@_
        LibVars.healthdashboardlibrary.tempDict = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();
        // Block#: {-3}iIQ5_t%#@^O!bc)=
        if(!!LibVars.healthdashboardlibrary.timestamplistString.length) {
          // Block#: c7Wq[j{5KvMX~8@9X(~p
          var index_end8 = LibVars.healthdashboardlibrary.timestamplistString.length - 1;
          var index_inc8 = 1;
          if(0 > index_end8) {
            index_inc8 = -index_inc8;
          }
          for(index = 0; index_inc8 >= 0 ? index <= index_end8 : index >= index_end8; index += index_inc8) {
            // Block#: O:(S{HGXg9PqPL+3nr%%
            com.fc.JavaScriptDistLib.ListLibrary.listAdd(LibVars.healthdashboardlibrary.timestamplist, (com.fc.JavaScriptDistLib.TimeLibrary.createTimestampFromTime((com.fc.JavaScriptDistLib.TimeLibrary.createTime((LibVars.healthdashboardlibrary.timestamplistString[index]))))))
            // Block#: gD`ZeBo_HbJl92kDa!hR
            com.fc.JavaScriptDistLib.Dictionary.setDictValue(LibVars.healthdashboardlibrary.tempDict, com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.TimeLibrary.createTimestampFromTime((com.fc.JavaScriptDistLib.TimeLibrary.createTime((LibVars.healthdashboardlibrary.timestamplistString[index]))))), LibVars.healthdashboardlibrary.timestamplistString[index]);
          }
          // Block#: S/Xn?PBC`ql]b:;P{+-C
          com.fc.JavaScriptDistLib.ListLibrary.listOrder(LibVars.healthdashboardlibrary.timestamplist, 'ASCENDING')
          // Block#: H|1(Ll%gcK1]utx3fG4/
          var index_end9 = LibVars.healthdashboardlibrary.timestamplist.length - 1;
          var index_inc9 = 1;
          if(0 > index_end9) {
            index_inc9 = -index_inc9;
          }
          for(index = 0; index_inc9 >= 0 ? index <= index_end9 : index >= index_end9; index += index_inc9) {
            // Block#: o~uezMgH17FK9P6HHtzg
            LibVars.healthdashboardlibrary.tempString = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.healthdashboardlibrary.tempDict, com.fc.JavaScriptDistLib.TextLib.convertToText(LibVars.healthdashboardlibrary.timestamplist[index])));
            // Block#: Lr$bvNR!CLKm=8qlYxI2
            com.fc.JavaScriptDistLib.ListLibrary.listAdd(datareadingslist, (com.fc.JavaScriptDistLib.Dictionary.getDictValue(datareadingsdict, LibVars.healthdashboardlibrary.tempString)))
          }
        }
      });
    }
    /**
     * Describe this function...
     */
    this.sortReadingsSteps = sortReadingsSteps;

    function sortReadingsSteps(datareadingsdict, datareadingslist) {
      return new Promise(function(resolve, reject) {
        // Block#: wVj!A%v8~Pn#V2/bKmbw
        LibVars.healthdashboardlibrary.timestamplist = [];
        // Block#: W(@agpe]}:%gyvoKUsKW
        LibVars.healthdashboardlibrary.timestamplistString = (com.fc.JavaScriptDistLib.Dictionary.getKeys(datareadingsdict));
        // Block#: ZSX#|R3nKo{)][~J(2GX
        LibVars.healthdashboardlibrary.tempDict = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();
        // Block#: 07c*E6/@F6rV+6}r9=7n
        if(!!LibVars.healthdashboardlibrary.timestamplistString.length) {
          // Block#: Cna;$F!#]6ECR}lz]a,;
          var index_end10 = LibVars.healthdashboardlibrary.timestamplistString.length - 1;
          var index_inc10 = 1;
          if(0 > index_end10) {
            index_inc10 = -index_inc10;
          }
          for(index = 0; index_inc10 >= 0 ? index <= index_end10 : index >= index_end10; index += index_inc10) {
            // Block#: X);$GgbT4%3i|u|Y@@qk
            com.fc.JavaScriptDistLib.ListLibrary.listAdd(LibVars.healthdashboardlibrary.timestamplist, (com.fc.JavaScriptDistLib.TimeLibrary.createTimestampFromTime((com.fc.JavaScriptDistLib.TimeLibrary.createTime((LibVars.healthdashboardlibrary.timestamplistString[index]))))))
            // Block#: wf.$|}?kc1u)@@Upkxp$
            com.fc.JavaScriptDistLib.Dictionary.setDictValue(LibVars.healthdashboardlibrary.tempDict, com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.TimeLibrary.createTimestampFromTime((com.fc.JavaScriptDistLib.TimeLibrary.createTime((LibVars.healthdashboardlibrary.timestamplistString[index]))))), LibVars.healthdashboardlibrary.timestamplistString[index]);
          }
          // Block#: *7:`tZ+JQPcw7plD?Nul
          com.fc.JavaScriptDistLib.ListLibrary.listOrder(LibVars.healthdashboardlibrary.timestamplist, 'ASCENDING')
          // Block#: wuahk%B2[}-sad^YF$s^
          var index_end11 = LibVars.healthdashboardlibrary.timestamplist.length - 1;
          var index_inc11 = 1;
          if(0 > index_end11) {
            index_inc11 = -index_inc11;
          }
          for(index = 0; index_inc11 >= 0 ? index <= index_end11 : index >= index_end11; index += index_inc11) {
            // Block#: nO3hUa{|2DwuciySQe*P
            LibVars.healthdashboardlibrary.tempString = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.healthdashboardlibrary.tempDict, com.fc.JavaScriptDistLib.TextLib.convertToText(LibVars.healthdashboardlibrary.timestamplist[index])));
            // Block#: YkX=pqIL)N`IkZU+s%CF
            com.fc.JavaScriptDistLib.ListLibrary.listAdd(datareadingslist, (com.fc.JavaScriptDistLib.Dictionary.getDictValue(datareadingsdict, LibVars.healthdashboardlibrary.tempString)))
          }
        }
      });
    }
    /**
     * Describe this function...
     */
    this.sortReadingsWeight = sortReadingsWeight;

    function sortReadingsWeight(datareadingsdict, datareadingslist) {
      return new Promise(function(resolve, reject) {
        // Block#: vlY-Smac?r?)-,bT11%f
        LibVars.healthdashboardlibrary.timestamplist = [];
        // Block#: k~UA}kxj!`AB;H.V(*wj
        LibVars.healthdashboardlibrary.timestamplistString = (com.fc.JavaScriptDistLib.Dictionary.getKeys(datareadingsdict));
        // Block#: `uWcb#z%?`%I@:n)DbDf
        LibVars.healthdashboardlibrary.tempDict = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();
        // Block#: xgrDp{TDkM0kIm9Zfx}K
        if(!!LibVars.healthdashboardlibrary.timestamplistString.length) {
          // Block#: ~j8REup4VQb=.OXY!@+{
          var index_end12 = LibVars.healthdashboardlibrary.timestamplistString.length - 1;
          var index_inc12 = 1;
          if(0 > index_end12) {
            index_inc12 = -index_inc12;
          }
          for(index = 0; index_inc12 >= 0 ? index <= index_end12 : index >= index_end12; index += index_inc12) {
            // Block#: 4O5$p`Jc=YoW[{yUjcv5
            com.fc.JavaScriptDistLib.ListLibrary.listAdd(LibVars.healthdashboardlibrary.timestamplist, (com.fc.JavaScriptDistLib.TimeLibrary.createTimestampFromTime((com.fc.JavaScriptDistLib.TimeLibrary.createTime((LibVars.healthdashboardlibrary.timestamplistString[index]))))))
            // Block#: )77KV7.XI(iR4b.Xr.,2
            com.fc.JavaScriptDistLib.Dictionary.setDictValue(LibVars.healthdashboardlibrary.tempDict, com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.TimeLibrary.createTimestampFromTime((com.fc.JavaScriptDistLib.TimeLibrary.createTime((LibVars.healthdashboardlibrary.timestamplistString[index]))))), LibVars.healthdashboardlibrary.timestamplistString[index]);
          }
          // Block#: FR3T|R*DM2QSd+d%,P1=
          com.fc.JavaScriptDistLib.ListLibrary.listOrder(LibVars.healthdashboardlibrary.timestamplist, 'ASCENDING')
          // Block#: A(SZscvB098y(=Mu*T}a
          var index_end13 = LibVars.healthdashboardlibrary.timestamplist.length - 1;
          var index_inc13 = 1;
          if(0 > index_end13) {
            index_inc13 = -index_inc13;
          }
          for(index = 0; index_inc13 >= 0 ? index <= index_end13 : index >= index_end13; index += index_inc13) {
            // Block#: Cy#!{Vr|DTroXBJ7luyT
            LibVars.healthdashboardlibrary.tempString = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.healthdashboardlibrary.tempDict, com.fc.JavaScriptDistLib.TextLib.convertToText(LibVars.healthdashboardlibrary.timestamplist[index])));
            // Block#: p2rF8]$D#E=TIl,edF|7
            com.fc.JavaScriptDistLib.ListLibrary.listAdd(datareadingslist, (com.fc.JavaScriptDistLib.Dictionary.getDictValue(datareadingsdict, LibVars.healthdashboardlibrary.tempString)))
          }
        }
      });
    }
    /**
     * Describe this function...
     */
    this.getFormattedTime = getFormattedTime;

    function getFormattedTime(timestring) {
      // Block#: p2_GRWjJu2npj*:OE%h%
      LibVars.healthdashboardlibrary.tempList = com.fc.JavaScriptDistLib.TextLib.textSplitWith(timestring, 'T')[0];
      // Block#: ]?aSm~KF_#|Lfpj1DKj%
      LibVars.healthdashboardlibrary.tempList = com.fc.JavaScriptDistLib.TextLib.textSplitWith(LibVars.healthdashboardlibrary.tempList, '-');
      return [LibVars.healthdashboardlibrary.tempList[1], '/', LibVars.healthdashboardlibrary.tempList.slice(-1)[0], '/', LibVars.healthdashboardlibrary.tempList[0]].join('');
    }
    /**
     * Describe this function...
     */
    this.toPounds = toPounds;

    function toPounds(weightKg) {
      return weightKg * 2.20462;
    }
    // Block#: R/C60WJCh4mX=^_ASID)
    function on_screen_showHealthDashboardScreen() {
      try {
        // Block#: RnjRUK[]7Gz;j1TZcpAp
        console.log('health dashboard display');
        if(LibVars.healthdashboardlibrary.debugService && LibVars.healthdashboardlibrary.debugService.active) {
          LibVars.healthdashboardlibrary.debugService.traces.push('health dashboard display');
          LibVars.healthdashboardlibrary.debugService.printLog();
        }
        // Block#: 6pUpwV,MI{w@?N,xT~_T
        displayDashboard().then(response => {;
        });
      } catch(e) {
        com.fc.JavaScriptDistLib.handleExceptionNative(e);
      }
    };
    $('[obj-name="HealthDashboardScreen"]').on('show', on_screen_showHealthDashboardScreen);
    com.fc.JavaScriptDistLib.Screen.screenDict['showHealthDashboardScreen'] = on_screen_showHealthDashboardScreen;
    // Block#: fl^=9GUo3@.+Ag2Qj:JV
    function on_backbutton_click(e) {
      try {
        // Block#: y@$?`|WneTMVJ*UU,?IH
        $('[obj-name="connectButton"]').hide(); // Block#: 9cH+Un~ngIThO0^OZH}r
        handleBackButton().then(response => {;
        });
        e.stopPropagation();
      } catch(e) {
        com.fc.JavaScriptDistLib.handleExceptionNative(e);
      }
    };
    $('[obj-name="backbutton"]').on('click', on_backbutton_click);
    // Block#: 65n_?8nw)!#jF$_jmfL]
    let on_screen_back_button_pressHealthDashboardScreen = function() {
      try {
        // Block#: wfzjb%l7FI?y{:l[-Nh@
        $('[obj-name="connectButton"]').hide(); // Block#: i49{fuV(AAesy%vi(G_u
        handleBackButton().then(response => {;
        });
      } catch(e) {
        com.fc.JavaScriptDistLib.handleExceptionNative(e);
      }
    };
    com.fc.JavaScriptDistLib.Screen.screenDict['backHealthDashboardScreen'] = on_screen_back_button_pressHealthDashboardScreen;
    // Block#: F`Bu|koVW}-{hxGrmvj#
    com.fc.JavaScriptDistLib.PageView.onPageChange('StatsPageView', function(page_number) {
      // Block#: RK)076Z;H(bSBn]goVN.
      if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(page_number, "EQ", 0)) {
        // Block#: }U;]mjL5Orvevch|SPuD
        displayBP().then(response => {;
        });
      } else if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(page_number, "EQ", 1)) {
        // Block#: EtjSM|7vzZa}ly)b+DW;
        displayWeight().then(response => {;
        });
      } else if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(page_number, "EQ", 2)) {
        // Block#: F]%N@A`aJuc~Yw)mg$9,
        displaySteps().then(response => {;
        });
      }
    });
    // Block#: WP~VF?!#A^zV9a_AmHT0
    function on_3M_click(e) {
      try {
        // Block#: }KtQuK|8rx,blxfelhR6
        LibVars.healthdashboardlibrary.stepsduration = 3;
        // Block#: ee1Fw*2VL^o+~az,*ttP
        estimateTime().then(response => {;
        });
        // Block#: /tbAFg-2a8lGHgVW$Fb@
        com.fc.JavaScriptDistLib.Button.setProperty["Background color"]("3M", '#cccccc'); // Block#: h[NZ6B]4K7A`os0)nC$-
        com.fc.JavaScriptDistLib.Button.setProperty["Background color"]("1M", '#ffffff'); // Block#: .yb`BJ1Mj9^u6]3,]-;@
        com.fc.JavaScriptDistLib.Button.setProperty["Background color"]("1W", '#ffffff'); // Block#: rxzu6B.:OP#w$eYrjmF1
        com.fc.JavaScriptDistLib.Button.setProperty["Background color"]("1Y", '#ffffff'); // Block#: ,q/s#BFGbnjpr1Q)Y-5d
        com.fc.JavaScriptDistLib.Button.setProperty["Background color"]("6M", '#ffffff'); // Block#: H~UFU;Rb5qgHX9%9W2Mx
        com.fc.JavaScriptDistLib.Button.setProperty["Background color"]("9M", '#ffffff'); // Block#: d`KT+xwTMIdOtugNM_=R
        fetchMeasurements().then(response => {;
        });
        e.stopPropagation();
      } catch(e) {
        com.fc.JavaScriptDistLib.handleExceptionNative(e);
      }
    };
    $('[obj-name="3M"]').on('click', on_3M_click);
    // Block#: uny:woRUP}2u-rk8*=B(
    function on_6M_click(e) {
      try {
        // Block#: hLXZT81G5UiQBe1-2b-$
        LibVars.healthdashboardlibrary.stepsduration = 4;
        // Block#: !,o_ECiltRT(Y^98T/nh
        estimateTime().then(response => {;
        });
        // Block#: W8AS.3#*oX#moi;[|7+S
        com.fc.JavaScriptDistLib.Button.setProperty["Background color"]("6M", '#cccccc'); // Block#: !kGT+A}D!#h[MVeLNWS6
        com.fc.JavaScriptDistLib.Button.setProperty["Background color"]("1M", '#ffffff'); // Block#: 8u^VSGG0_-4[ba$O6D7N
        com.fc.JavaScriptDistLib.Button.setProperty["Background color"]("1W", '#ffffff'); // Block#: [M`YMZO%]~~Vy|cm8H3g
        com.fc.JavaScriptDistLib.Button.setProperty["Background color"]("1Y", '#ffffff'); // Block#: ]WzI/:@J`XU{t?f~4{HV
        com.fc.JavaScriptDistLib.Button.setProperty["Background color"]("3M", '#ffffff'); // Block#: 0U%qtlPlVw:h}7-B+aM4
        com.fc.JavaScriptDistLib.Button.setProperty["Background color"]("9M", '#ffffff'); // Block#: +QWL-W:rr{we;nN,Vuwz
        fetchMeasurements().then(response => {;
        });
        e.stopPropagation();
      } catch(e) {
        com.fc.JavaScriptDistLib.handleExceptionNative(e);
      }
    };
    $('[obj-name="6M"]').on('click', on_6M_click);
    // Block#: !,bskL$l[^?1C(W2^-YL
    function on_1M_click(e) {
      try {
        // Block#: k_G9y-OGqk!Vqkog1=L^
        LibVars.healthdashboardlibrary.stepsduration = 2;
        // Block#: WXfe3[W$/cBI1F/jIojC
        estimateTime().then(response => {;
        });
        // Block#: IHiUlNOx{F#?%Jg-Q~V8
        com.fc.JavaScriptDistLib.Button.setProperty["Background color"]("1M", '#cccccc'); // Block#: %]WrJHN@^~:jOxP8e6z8
        com.fc.JavaScriptDistLib.Button.setProperty["Background color"]("1W", '#ffffff'); // Block#: S5nEMPCeQd5]0O_xm7L_
        com.fc.JavaScriptDistLib.Button.setProperty["Background color"]("1Y", '#ffffff'); // Block#: |di!7O4(UdbvIYBnr9ik
        com.fc.JavaScriptDistLib.Button.setProperty["Background color"]("3M", '#ffffff'); // Block#: 0Z6S7fI?-P6zFSk@VRkD
        com.fc.JavaScriptDistLib.Button.setProperty["Background color"]("6M", '#ffffff'); // Block#: g%$TlEKXqr{N]tDvc`)0
        com.fc.JavaScriptDistLib.Button.setProperty["Background color"]("9M", '#ffffff'); // Block#: @giEffGE#u0BoC{prkf=
        fetchMeasurements().then(response => {;
        });
        e.stopPropagation();
      } catch(e) {
        com.fc.JavaScriptDistLib.handleExceptionNative(e);
      }
    };
    $('[obj-name="1M"]').on('click', on_1M_click);
    // Block#: sv65=d$cMPWb,qq1_0al
    function on_1W_click(e) {
      try {
        // Block#: +)k!~$^m-FTB$m|.sdgc
        LibVars.healthdashboardlibrary.stepsduration = 1;
        // Block#: Vt*Ls},f)b1y[{HT-xst
        estimateTime().then(response => {;
        });
        // Block#: cw#$z:z=6pqc%}2{i}2A
        com.fc.JavaScriptDistLib.Button.setProperty["Background color"]("1W", '#cccccc'); // Block#: mBqH1.`T*r?1]a,eU-Yl
        com.fc.JavaScriptDistLib.Button.setProperty["Background color"]("1M", '#ffffff'); // Block#: |?^#}W1Y7?0K1^k*w~Hf
        com.fc.JavaScriptDistLib.Button.setProperty["Background color"]("1Y", '#ffffff'); // Block#: e!3ll+SK:{b|~#M3:@b@
        com.fc.JavaScriptDistLib.Button.setProperty["Background color"]("3M", '#ffffff'); // Block#: ;V:/YQloa+7pXDdz]`Y$
        com.fc.JavaScriptDistLib.Button.setProperty["Background color"]("6M", '#ffffff'); // Block#: _aK@o_lc84_oiP7**r^D
        com.fc.JavaScriptDistLib.Button.setProperty["Background color"]("9M", '#ffffff'); // Block#: N8_Yeh!fDsNoyWK|6$8k
        fetchMeasurements().then(response => {;
        });
        e.stopPropagation();
      } catch(e) {
        com.fc.JavaScriptDistLib.handleExceptionNative(e);
      }
    };
    $('[obj-name="1W"]').on('click', on_1W_click);
    // Block#: es^i0mjnjF3B0!p5^CpQ
    function on_9M_click(e) {
      try {
        // Block#: $WZpRgs$hd%z%!vz|4xf
        LibVars.healthdashboardlibrary.stepsduration = 5;
        // Block#: EQ4#ws0kLu4l1r#0(VfY
        estimateTime().then(response => {;
        });
        // Block#: NG?R}#oq6`yyk`FHjCF:
        com.fc.JavaScriptDistLib.Button.setProperty["Background color"]("9M", '#cccccc'); // Block#: .;PN?;KvYrez?#.!Y@OW
        com.fc.JavaScriptDistLib.Button.setProperty["Background color"]("1M", '#ffffff'); // Block#: 6|,fJE*1I*sdW,WrqV0,
        com.fc.JavaScriptDistLib.Button.setProperty["Background color"]("1W", '#ffffff'); // Block#: O*/#nTS^CF}l%ZdM@vbe
        com.fc.JavaScriptDistLib.Button.setProperty["Background color"]("1Y", '#ffffff'); // Block#: #lT1/?H*P*Ei_*96_Gv4
        com.fc.JavaScriptDistLib.Button.setProperty["Background color"]("3M", '#ffffff'); // Block#: O,UamhWc[7]j,H8dx~=W
        com.fc.JavaScriptDistLib.Button.setProperty["Background color"]("6M", '#ffffff'); // Block#: O*Y(aI)0qE?i`PGEt;{$
        fetchMeasurements().then(response => {;
        });
        e.stopPropagation();
      } catch(e) {
        com.fc.JavaScriptDistLib.handleExceptionNative(e);
      }
    };
    $('[obj-name="9M"]').on('click', on_9M_click);
    // Block#: )cc2t/q!`62vas1{tY)u
    function on_1Y_click(e) {
      try {
        // Block#: kBS4[b`S(Em_+D^md?|0
        LibVars.healthdashboardlibrary.stepsduration = 6;
        // Block#: lfY[v922KX(61(8eOGd6
        estimateTime().then(response => {;
        });
        // Block#: 2ve(Zu2rqHiT_0fH}wrv
        com.fc.JavaScriptDistLib.Button.setProperty["Background color"]("1Y", '#cccccc'); // Block#: ~fsLn3?{59K%fN9}%U|_
        com.fc.JavaScriptDistLib.Button.setProperty["Background color"]("1M", '#ffffff'); // Block#: ERmuN5BV1/NZpT#WNiN;
        com.fc.JavaScriptDistLib.Button.setProperty["Background color"]("1W", '#ffffff'); // Block#: l)B7poUKDez%QB[.R]m8
        com.fc.JavaScriptDistLib.Button.setProperty["Background color"]("3M", '#ffffff'); // Block#: q~lpjIvi*Q3AMRk45-tZ
        com.fc.JavaScriptDistLib.Button.setProperty["Background color"]("6M", '#ffffff'); // Block#: %3{CcYT]PdE4yBBb|2%o
        com.fc.JavaScriptDistLib.Button.setProperty["Background color"]("9M", '#ffffff'); // Block#: /m{w0/e]RtvZAnu1jRhJ
        fetchMeasurements().then(response => {;
        });
        e.stopPropagation();
      } catch(e) {
        com.fc.JavaScriptDistLib.handleExceptionNative(e);
      }
    };
    $('[obj-name="1Y"]').on('click', on_1Y_click);
    // Block#: S=JWkT1lq,]b:ozY_i42
    function on_connectButton_click(e) {
      try {
        // Block#: IA^bZlneZ$sVtM9._6dk
        handleShareButton().then(response => {;
        });
        e.stopPropagation();
      } catch(e) {
        com.fc.JavaScriptDistLib.handleExceptionNative(e);
      }
    };
    $('[obj-name="connectButton"]').on('click', on_connectButton_click);
    var onGoogleFitAuthLost;
    com.fc.JavaScriptDistLib.GoogleFit.configureAuth(onGoogleFitAuthLost);
  };
  var healthdashboardlibrary = new HealthDashboardLibrary();

  function HealthDataUploadLibrary() {
    lib_instance = "mqe306hcyr";
    com.fc.JavaScriptDistLib.EventListeners.mapLib("HealthDataUploadLibrary", "mqe306hcyr");
    LibVars.healthdatauploadlibrary = LibVars.healthdatauploadlibrary || {};
    LibVars.healthdatauploadlibrary._debugService = null;
    LibVars.healthdatauploadlibrary.measurements = null;
    LibVars.healthdatauploadlibrary.dataTypes = null;
    LibVars.healthdatauploadlibrary.startDateField = null;
    LibVars.healthdatauploadlibrary.currentTask = null;
    LibVars.healthdatauploadlibrary.savedMeasurements = null;
    LibVars.healthdatauploadlibrary.measurementTimestamps = null;
    LibVars.healthdatauploadlibrary.endDate = null;
    LibVars.healthdatauploadlibrary.fetchMore = null;
    LibVars.healthdatauploadlibrary.localFormData = null;
    LibVars.healthdatauploadlibrary.localFormFields = null;
    LibVars.healthdatauploadlibrary.localVar1 = null;
    /**
     * Describe this function...
     */
    this.initHealthDataUploadLibrary = initHealthDataUploadLibrary;

    function initHealthDataUploadLibrary() {
      return new Promise(function(resolve, reject) {
        // Block#: S/P|L/#ST6oF~hxNl!8#
        LibVars.healthdatauploadlibrary.measurements = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();
        // Block#: ~x4!M*pmi]5%EyfZvI}Y
        if(com.fc.JavaScriptDistLib.HealthKit.isAvailable()) {
          // Block#: @ApEwQxAR71$3m.:o?rA
          LibVars.healthdatauploadlibrary.dataTypes = [('com.apple.step_count.delta'), ('com.apple.weight'), ('com.apple.heart_rate.bpm'), ('com.apple.blood_pressure')];
          // Block#: Q`(PEroGUn?t;kE#P3S-
          LibVars.healthdatauploadlibrary.startDateField = ('startdate');
        } else {
          // Block#: 8UaL0k|zE]IQTB$|#tl)
          LibVars.healthdatauploadlibrary.dataTypes = [('com.google.step_count.delta'), ('com.google.weight'), ('com.google.heart_rate.bpm'), ('com.google.blood_pressure')];
          // Block#: tcMevRI6k.@8{C_Fjgl?
          LibVars.healthdatauploadlibrary.startDateField = ('startdate');
        }
      });
    }
    /**
     * Describe this function...
     */
    this.startUploadProcess = startUploadProcess;

    function startUploadProcess() {
      return new Promise(function(resolve, reject) {
        // Block#: WxgyFuWrlTw;^w1t!]^+
        com.fc.JavaScriptDistLib.SnapClinical.startProcess(Object.assign(Object.assign({
            "forceStartNewInstance": false
          }, com.fc.JavaScriptDistLib.Dictionary.createDictionary(['forceStartNewInstance'], [true])), {
            "processDefinitionKey": 'PMUploadMeasurements'
          }),
          function(process_data) {
            // Block#: aa)vdRhuPB?zB5#ZUbe+
            LibVars.healthdatauploadlibrary.currentTask = (com.fc.JavaScriptDistLib.JSON.parseJSONDataForPath(process_data, '$.tasks[0]'))[0];
            // Block#: v#Ts]//xCXbE@_@ejiN,
            console.log(LibVars.healthdatauploadlibrary.currentTask);
            if(LibVars.healthdatauploadlibrary.debugService && LibVars.healthdatauploadlibrary.debugService.active) {
              LibVars.healthdatauploadlibrary.debugService.traces.push(LibVars.healthdatauploadlibrary.currentTask);
              LibVars.healthdatauploadlibrary.debugService.printLog();
            }
            // Block#: ql*}.:*HUZD`4//cXD`q
            LibVars.healthdatauploadlibrary.savedMeasurements = (com.fc.JavaScriptDistLib.JSON.parseJSONDataForPath(LibVars.healthdatauploadlibrary.currentTask, '$.processVariables[?(@.name == "measurements")].value'))[0];
            // Block#: 2Bmn*0#MtFi7w;ZEi%N+
            console.log(LibVars.healthdatauploadlibrary.savedMeasurements);
            if(LibVars.healthdatauploadlibrary.debugService && LibVars.healthdatauploadlibrary.debugService.active) {
              LibVars.healthdatauploadlibrary.debugService.traces.push(LibVars.healthdatauploadlibrary.savedMeasurements);
              LibVars.healthdatauploadlibrary.debugService.printLog();
            }
            // Block#: {:`]MNd(V:J]GZ-dR5d)
            console.log(findLatestUploadTime());
            if(LibVars.healthdatauploadlibrary.debugService && LibVars.healthdatauploadlibrary.debugService.active) {
              LibVars.healthdatauploadlibrary.debugService.traces.push(findLatestUploadTime());
              LibVars.healthdatauploadlibrary.debugService.printLog();
            }
            // Block#: Ki[U^eZgXWtjl*b]3?.~
            fetchMeasurements(findLatestUploadTime()).then(response => {;
              if(response.name === "then") {
                // Block#: K`H)%J9-K6_)}kwz6q$Z
                console.log(LibVars.healthdatauploadlibrary.measurements);
                if(LibVars.healthdatauploadlibrary.debugService && LibVars.healthdatauploadlibrary.debugService.active) {
                  LibVars.healthdatauploadlibrary.debugService.traces.push(LibVars.healthdatauploadlibrary.measurements);
                  LibVars.healthdatauploadlibrary.debugService.printLog();
                }
                // Block#: ^jV%bc~(1c#Cp:mW#EI]
                LibVars.healthdatauploadlibrary.measurementTimestamps = getOrderedTimestamps(LibVars.healthdatauploadlibrary.measurements);
                // Block#: }8T5N|6Su1kE$eWm4dgF
                if(!!LibVars.healthdatauploadlibrary.measurementTimestamps.length) {
                  // Block#: Rr+8V`W}HA?G!K$42}5(
                  uploadDataByTimestamp(0).then(response => {;
                    if(response.name === "then") {
                      // Block#: `Y#/U.+bEfNc38#XX=rW
                      console.log('all uploads complete');
                      if(LibVars.healthdatauploadlibrary.debugService && LibVars.healthdatauploadlibrary.debugService.active) {
                        LibVars.healthdatauploadlibrary.debugService.traces.push('all uploads complete');
                        LibVars.healthdatauploadlibrary.debugService.printLog();
                      }
                    }
                  });
                } else {
                  // Block#: C@mw[)f-f-ST|hSujz`%
                  com.fc.JavaScriptDistLib.SnapClinical.setOutcomeByName(LibVars.healthdatauploadlibrary.currentTask, 'Finish');
                  // Block#: Y(^(;ig)#J~gld*4ulx3
                  com.fc.JavaScriptDistLib.SnapClinical.completeTaskAndGetNext(LibVars.healthdatauploadlibrary.currentTask,
                    function(process_data) {
                    },
                    function(error_data) {
                      // Block#: ]C.YxU,9kH9CbRi?{`TM
                      console.log(error_data);
                      if(LibVars.healthdatauploadlibrary.debugService && LibVars.healthdatauploadlibrary.debugService.active) {
                        LibVars.healthdatauploadlibrary.debugService.traces.push(error_data);
                        LibVars.healthdatauploadlibrary.debugService.printLog();
                      }
                    });
                  // Block#: Zum%OtyEx*^/Dmot[x2A
                  console.log('all uploads complete');
                  if(LibVars.healthdatauploadlibrary.debugService && LibVars.healthdatauploadlibrary.debugService.active) {
                    LibVars.healthdatauploadlibrary.debugService.traces.push('all uploads complete');
                    LibVars.healthdatauploadlibrary.debugService.printLog();
                  }
                }
              }
            });
          },
          function(error_data) {
            // Block#: E%{[:R{9_TBDU|,WFF7X
            console.log(error_data);
            if(LibVars.healthdatauploadlibrary.debugService && LibVars.healthdatauploadlibrary.debugService.active) {
              LibVars.healthdatauploadlibrary.debugService.traces.push(error_data);
              LibVars.healthdatauploadlibrary.debugService.printLog();
            }
          });
      });
    }
    /**
     * Describe this function...
     */
    this.fetchMeasurements = fetchMeasurements;

    function fetchMeasurements(startDate) {
      return new Promise(function(resolve, reject) {
        // Block#: .UL8gWov,m(1?D9j6uVx
        if(com.fc.JavaScriptDistLib.HealthKit.isAvailable()) {
          // Block#: d^Yv+Zru:ajlIYvU$^Rp
          let _startDate = startDate,
            _endDate = com.fc.JavaScriptDistLib.MomentLibrary();
          if(!(_startDate instanceof Date)) _startDate = _startDate.toDate();
          if(!(_endDate instanceof Date)) _endDate = _endDate.toDate();
          com.fc.JavaScriptDistLib.HealthKit.readHistoricalData(_startDate, _endDate, LibVars.healthdatauploadlibrary.dataTypes,
            function(data) {
              // Block#: `f]D!x4YJKl8i_OKW$_@
              LibVars.healthdatauploadlibrary.measurements = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();
              // Block#: Zh)%2|-!1[A*=)tY3W1i
              console.log(data);
              if(LibVars.healthdatauploadlibrary.debugService && LibVars.healthdatauploadlibrary.debugService.active) {
                LibVars.healthdatauploadlibrary.debugService.traces.push(data);
                LibVars.healthdatauploadlibrary.debugService.printLog();
              }
              // Block#: `[fE-%/s]ME:Z+U={*h2
              for(var item_index in data) {
                item = data[item_index];
                // Block#: U09Ku1/TV/.)F*@@%:-|
                com.fc.JavaScriptDistLib.Dictionary.setDictValue(LibVars.healthdatauploadlibrary.measurements, com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'startdate')), item);
                // Block#: *M-u=@7Vj(aPGP(_s:e!
                com.fc.JavaScriptDistLib.Dictionary.removeDictKey(com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.healthdatauploadlibrary.measurements, com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'startdate'))), 'startdate');
              }
              // Block#: q2uIEY@qWV7%~0]4x8D6
              console.log(LibVars.healthdatauploadlibrary.measurements);
              if(LibVars.healthdatauploadlibrary.debugService && LibVars.healthdatauploadlibrary.debugService.active) {
                LibVars.healthdatauploadlibrary.debugService.traces.push(LibVars.healthdatauploadlibrary.measurements);
                LibVars.healthdatauploadlibrary.debugService.printLog();
              }
              // Block#: BtDHgLvG#6s3_O:)L]{/
              resolve({
                name: "then",
                data: LibVars.healthdatauploadlibrary.measurements
              });
            },
            function(error_data) {
            });
        } else {
          // Block#: t6zVJu_9@DS;;/l0n4P#
          fetchGoogleFitData(startDate).then(response => {;
            if(response.name === "then") {
              // Block#: BOSN$,4S-B$ntW06P69h
              resolve({
                name: "then",
                data: LibVars.healthdatauploadlibrary.measurements
              });
            }
          });
        }
      });
    }
    /**
     * Describe this function...
     */
    this.fetchGoogleFitData = fetchGoogleFitData;

    function fetchGoogleFitData(startDate) {
      return new Promise(function(resolve, reject) {
        // Block#: g4rdVpgxy7e482J[mmAW
        LibVars.healthdatauploadlibrary.endDate = (com.fc.JavaScriptDistLib.MomentLibrary());
        // Block#: KLc-@qFuhUpF$nn}(z24
        LibVars.healthdatauploadlibrary.fetchMore = false;
        // Block#: d=dR2~=I]?B{mXN?g:`Q
        if(startDate.isBefore(((com.fc.JavaScriptDistLib.MomentLibrary()).clone().subtract(75, 'days')))) {
          // Block#: ,/`c9i!.4i[nxx*^-hl2
          LibVars.healthdatauploadlibrary.endDate = (startDate.clone().add(75, 'days'));
          // Block#: ;p{#lH4Ulo,4Q!tWG)Ql
          LibVars.healthdatauploadlibrary.fetchMore = true;
        }
        // Block#: mK?C=_H9GlV(g,~+mLpZ
        let _startDate = startDate,
          _endDate = LibVars.healthdatauploadlibrary.endDate;
        if(!(_startDate instanceof Date)) _startDate = _startDate.toDate();
        if(!(_endDate instanceof Date)) _endDate = _endDate.toDate();
        com.fc.JavaScriptDistLib.GoogleFit.readHistoricalData(_startDate, _endDate, LibVars.healthdatauploadlibrary.dataTypes,
          function(data) {
            // Block#: kp`}$]wcDe~SoPrd:K*r
            for(var item_index2 in data) {
              item = data[item_index2];
              // Block#: p@x(|W?Me1G5?%jNx9g%
              var fieldType_list = [('steps'), ('weight_average'), ('hr_average'), ('bp_systolic')];
              for(var fieldType_index in fieldType_list) {
                fieldType = fieldType_list[fieldType_index];
                // Block#: pHlQJb/9Q2BVRJR9!(.j
                if((com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, fieldType)) != null) {
                  // Block#: 4@0NoHk-.WUKS|})lhX.
                  if(!(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(LibVars.healthdatauploadlibrary.measurements, com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, LibVars.healthdatauploadlibrary.startDateField)))) {
                    // Block#: p9z?D9Tk@((|w,E3(N%j
                    com.fc.JavaScriptDistLib.Dictionary.setDictValue(LibVars.healthdatauploadlibrary.measurements, com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, LibVars.healthdatauploadlibrary.startDateField)), com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary());
                  }
                  // Block#: Gt`?KD!*8aaYz!V#$-/$
                  com.fc.JavaScriptDistLib.Dictionary.setDictValue(com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.healthdatauploadlibrary.measurements, com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, LibVars.healthdatauploadlibrary.startDateField))), fieldType, com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, fieldType));
                }
              }
            }
            // Block#: pchK-]FE)zMa=;#WnEoU
            if(LibVars.healthdatauploadlibrary.fetchMore) {
              // Block#: w0{(1:Rib%=aw=rDZ}C5
              fetchGoogleFitData((LibVars.healthdatauploadlibrary.endDate.clone().add(1, 'days'))).then(response => {;
                if(response.name === "then") {
                  // Block#: ;wP;g/Y=O#cF{{mF{ZwL
                  resolve({
                    name: "then",
                    data: ''
                  });
                }
              });
            } else {
              // Block#: Hn]p3~FLqpF3Y@RfpcbM
              resolve({
                name: "then",
                data: ''
              });
            }
          },
          function(error_data) {
            // Block#: v5oZcVjVQx/+gMP$llHa
            console.log('fetch google fit data failed');
            if(LibVars.healthdatauploadlibrary.debugService && LibVars.healthdatauploadlibrary.debugService.active) {
              LibVars.healthdatauploadlibrary.debugService.traces.push('fetch google fit data failed');
              LibVars.healthdatauploadlibrary.debugService.printLog();
            }
            // Block#: %/4?ZvGYk~M;9S$dv%{3
            if((com.fc.JavaScriptDistLib.JSON.parseJSONDataForPath(error_data, '$.code'))[0]) {
              // Block#: NDbwtl)48N[(qI#I|Ubq
              if(com.fc.JavaScriptDistLib.GoogleFit.isAuthorized()) {
                // Block#: bAst:!H2T+DM1glHT|3~
                com.fc.JavaScriptDistLib.GoogleFit.deAuthorize();
                // Block#: Pe2Q[rf@oz*Bo6)[VeHs
                com.fc.JavaScriptDistLib.Storage.add('showFitDialog', true)
              }
            }
            // Block#: 8X?Vwvvxe{#j~:kp4^sq
            resolve({
              name: "then",
              data: null
            });
          });
      });
    }
    /**
     * Describe this function...
     */
    this.uploadDataByTimestamp = uploadDataByTimestamp;

    function uploadDataByTimestamp(index) {
      let timestamp = null;
      let data = null;
      return new Promise(function(resolve, reject) {
        // Block#: DGD^:8iaOu4R*bli,kOC
        timestamp = (LibVars.healthdatauploadlibrary.measurementTimestamps[index]);
        // Block#: gN77~0$#^U$kRXnyid[~
        data = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.healthdatauploadlibrary.measurements, timestamp));
        // Block#: r*[Zzey;|mp601ZITM]x
        setFormFieldById('timestamp', 'value', LibVars.healthdatauploadlibrary.measurementTimestamps[index]).then(response => {;
        });
        // Block#: W1h^9orCj))L0UY94`1k
        setFormFieldById('steps', 'value', (com.fc.JavaScriptDistLib.Dictionary.getDictValue(data, 'steps'))).then(response => {;
        });
        // Block#: ytcvGX]Y@+GDE-gSa4x2
        setFormFieldById('weight', 'value', (com.fc.JavaScriptDistLib.Dictionary.getDictValue(data, 'weight'))).then(response => {;
        });
        // Block#: [;$p}oBmHM3g[#q:C*La
        setFormFieldById('heart-rate', 'value', (com.fc.JavaScriptDistLib.Dictionary.getDictValue(data, 'heart-rate'))).then(response => {;
        });
        // Block#: ]r(fb5V:h-Kk[cE:6iPG
        setFormFieldById('bp-systolic', 'value', (com.fc.JavaScriptDistLib.Dictionary.getDictValue(data, 'bp-systolic'))).then(response => {;
        });
        // Block#: x;z0tRyms;2N,yh.dX#R
        setFormFieldById('bp-diastolic', 'value', (com.fc.JavaScriptDistLib.Dictionary.getDictValue(data, 'bp-diastolic'))).then(response => {;
        });
        // Block#: IwW}B}IfeW9rt,wH9|=[
        setFormFieldById('sleep', 'value', null).then(response => {;
        });
        // Block#: nE$]*lU6)+C)4@gPYsvT
        com.fc.JavaScriptDistLib.SnapClinical.setOutcomeByName(LibVars.healthdatauploadlibrary.currentTask, 'Send');
        // Block#: ~8.0~k-.#;2m-gn?UU-d
        com.fc.JavaScriptDistLib.SnapClinical.completeTaskAndGetNext(LibVars.healthdatauploadlibrary.currentTask,
          function(process_data) {
            // Block#: hL1**9v(o)RDq#@-$8x/
            LibVars.healthdatauploadlibrary.currentTask = (com.fc.JavaScriptDistLib.JSON.parseJSONDataForPath(process_data, '$.tasks[0]'))[0];
            // Block#: e4#gYu;#HSTWdYD$;[R|
            console.log(String(LibVars.healthdatauploadlibrary.measurementTimestamps[index]) + String(' data sent'));
            if(LibVars.healthdatauploadlibrary.debugService && LibVars.healthdatauploadlibrary.debugService.active) {
              LibVars.healthdatauploadlibrary.debugService.traces.push(String(LibVars.healthdatauploadlibrary.measurementTimestamps[index]) + String(' data sent'));
              LibVars.healthdatauploadlibrary.debugService.printLog();
            }
            // Block#: ao;4Hz2eEFJJDR%;:iU;
            if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(index, "LT", LibVars.healthdatauploadlibrary.measurementTimestamps.length - 1)) {
              // Block#: JPw#sZ[B-r3KL|^.[|!E
              uploadDataByTimestamp(index + 1).then(response => {;
                if(response.name === "then") {
                  // Block#: y^Q;JpRyciTx{|v5fk%H
                  resolve({
                    name: "then",
                    data: ''
                  });
                }
              });
            } else {
              // Block#: {(,/*JZ),~Va;hp46=[P
              com.fc.JavaScriptDistLib.SnapClinical.setOutcomeByName(LibVars.healthdatauploadlibrary.currentTask, 'Finish');
              // Block#: _1mEB$,nCLNfZ7AAbXsr
              com.fc.JavaScriptDistLib.SnapClinical.completeTaskAndGetNext(LibVars.healthdatauploadlibrary.currentTask,
                function(process_data) {
                  // Block#: 4=dDcvN*~CT#{L@3|O(_
                  resolve({
                    name: "then",
                    data: ''
                  });
                },
                function(error_data) {
                  // Block#: `F#]^nHeC?I/m/E{BVz;
                  console.log(error_data);
                  if(LibVars.healthdatauploadlibrary.debugService && LibVars.healthdatauploadlibrary.debugService.active) {
                    LibVars.healthdatauploadlibrary.debugService.traces.push(error_data);
                    LibVars.healthdatauploadlibrary.debugService.printLog();
                  }
                  // Block#: cY3-kAUWBHz;_1m[N(9F
                  resolve({
                    name: "then",
                    data: ''
                  });
                });
            }
          },
          function(error_data) {
            // Block#: Vh;-gr}07Z|YLf51rz19
            console.log(error_data);
            if(LibVars.healthdatauploadlibrary.debugService && LibVars.healthdatauploadlibrary.debugService.active) {
              LibVars.healthdatauploadlibrary.debugService.traces.push(error_data);
              LibVars.healthdatauploadlibrary.debugService.printLog();
            }
            // Block#: P_1r{Z3Oha^0;ytvWE?%
            resolve({
              name: "then",
              data: ''
            });
          });
      });
    }
    /**
     * Describe this function...
     */
    this.findLatestUploadTime = findLatestUploadTime;

    function findLatestUploadTime() {
      let measurementDates = null;
      let maxDate = null;
      let date = null;
      // Block#: 1~#B4qnoJzn9d(1FCIy=
      measurementDates = (com.fc.JavaScriptDistLib.JSON.parseJSONDataForPath(com.fc.JavaScriptDistLib.JSON.parseJSONData(LibVars.healthdatauploadlibrary.savedMeasurements), '$.[*].timestamp'));
      // Block#: ^K9*-@-Qs02JDvz|e#(_
      if(measurementDates == null) {
        // Block#: $(hyOvEdS9#yzLne7=N?
        measurementDates = [];
      }
      // Block#: DXx,)Cb%Kv0_oU/,+!i[
      maxDate = ((com.fc.JavaScriptDistLib.MomentLibrary()).clone().subtract(1, 'years'));
      // Block#: m7WK{d+#mhXB]e5b@4P1
      for(var item_index3 in measurementDates) {
        item = measurementDates[item_index3];
        // Block#: iK%,GpT4qCQ6XN+O,s8{
        date = (com.fc.JavaScriptDistLib.MomentLibrary(com.fc.JavaScriptDistLib.TextLib.textReplace(' ', 'T', item), 'YYYY-MM-DDTHH:mm:ss.SSS'));
        // Block#: 8)uysArAQ!%_tSZgJ;p5
        if(date.isAfter(maxDate)) {
          // Block#: lA{;Y+Nss!|auQ*|8`x:
          maxDate = date;
        }
      }
      return maxDate;
    }
    /**
     * Describe this function...
     */
    this.getOrderedTimestamps = getOrderedTimestamps;

    function getOrderedTimestamps(measurements) {
      let keys = null;
      // Block#: apmy1SA[a;7xrZ7cEjF+
      keys = (com.fc.JavaScriptDistLib.Dictionary.getKeys(measurements));
      // Block#: qY*;DIowI5;{y``#t-HG
      com.fc.JavaScriptDistLib.ListLibrary.listOrder(keys, 'ASCENDING')
      return keys;
    }
    /**
     * Describe this function...
     */
    this.setFormFieldById = setFormFieldById;

    function setFormFieldById(id, property, value) {
      return new Promise(function(resolve, reject) {
        // Block#: Eh2gp%^B+o:7[)p4*1/w
        LibVars.healthdatauploadlibrary.localFormData = (com.fc.JavaScriptDistLib.JSON.parseJSONDataForPath(LibVars.healthdatauploadlibrary.currentTask, '$.formData'))[0];
        // Block#: TVzSbhy;wS%%QBn1h$0e
        LibVars.healthdatauploadlibrary.localFormFields = (com.fc.JavaScriptDistLib.JSON.parseJSONDataForPath(LibVars.healthdatauploadlibrary.currentTask, '$.formData.fields[*]'));
        // Block#: 2+,U~4U5]IxcAts6Q_`r
        var index_end = LibVars.healthdatauploadlibrary.localFormFields.length - 1;
        var index_inc = 1;
        if(0 > index_end) {
          index_inc = -index_inc;
        }
        for(index = 0; index_inc >= 0 ? index <= index_end : index >= index_end; index += index_inc) {
          // Block#: URK%a;(;=7hnsgX2OqT}
          LibVars.healthdatauploadlibrary.localVar1 = LibVars.healthdatauploadlibrary.localFormFields[index];
          // Block#: E35p|cgd@4}XcuL-#Obo
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.healthdatauploadlibrary.localVar1, 'id'), "EQUAL", id)) {
            // Block#: Nk,F4-~+*ZPt.fEik8VH
            com.fc.JavaScriptDistLib.Dictionary.setDictValue(LibVars.healthdatauploadlibrary.localVar1, property, value);
            // Block#: N1~fJGlpp:-oGg(2/JVG
            LibVars.healthdatauploadlibrary.localFormFields[index] = LibVars.healthdatauploadlibrary.localVar1;
          }
        }
        // Block#: 4WOUz|tJqlLAUHepW(4(
        com.fc.JavaScriptDistLib.Dictionary.setDictValue(LibVars.healthdatauploadlibrary.localFormData, 'fields', LibVars.healthdatauploadlibrary.localFormFields);
        // Block#: Fy_}/r]qy~8=5%DP;|)Y
        com.fc.JavaScriptDistLib.Dictionary.setDictValue(LibVars.healthdatauploadlibrary.currentTask, 'formData', LibVars.healthdatauploadlibrary.localFormData);
      });
    }
    var onGoogleFitAuthLost;
    com.fc.JavaScriptDistLib.GoogleFit.configureAuth(onGoogleFitAuthLost);
  };
  var healthdatauploadlibrary = new HealthDataUploadLibrary();

  function MedicationListLib() {
    lib_instance = "2i7ud0chu5";
    com.fc.JavaScriptDistLib.EventListeners.mapLib("MedicationListLib", "2i7ud0chu5");
    LibVars.medicationlistlib = LibVars.medicationlistlib || {};
    LibVars.medicationlistlib._debugService = null;
    LibVars.medicationlistlib.selectedMedicationList = null;
    LibVars.medicationlistlib.medicationList = null;
    LibVars.medicationlistlib.alphabet = null;
    LibVars.medicationlistlib.cancelDialogTitle = null;
    LibVars.medicationlistlib.cancelDialogMsg = null;
    LibVars.medicationlistlib.cancelDialog = null;
    LibVars.medicationlistlib.letterSelected = null;
    LibVars.medicationlistlib.medDict = null;
    LibVars.medicationlistlib.tempDict = null;
    LibVars.medicationlistlib.medicationSearch = null;
    LibVars.medicationlistlib.minYVal = null;
    LibVars.medicationlistlib.maxYVal = null;
    LibVars.medicationlistlib.index = null;
    /**
     * Initializes Variables
     */
    this.initVariables = initVariables;

    function initVariables() {
      return new Promise(function(resolve, reject) {
        // Block#: ae{yT,c+1fT`nGq=pH}l
        LibVars.medicationlistlib.selectedMedicationList = [];
        // Block#: O_{:rylSg;jH19,G/$6/
        LibVars.medicationlistlib.medicationList = [];
        // Block#: 7WD(*/2DM7/jwk%gF1nJ
        LibVars.medicationlistlib.alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '#'];
        // Block#: :p;o{N;x8J8mnN`n/1ww
        LibVars.medicationlistlib.cancelDialogTitle = 'Confirm';
        // Block#: h{QE_b2dI7.sko{q7:^A
        LibVars.medicationlistlib.cancelDialogMsg = 'If you exit you will lose any selected medications. Do you sill want to continue this action?';
      });
    }
    /**
     * Sets defaults and initializes UI components
     */
    this.setSetScreen = setSetScreen;

    function setSetScreen() {
      return new Promise(function(resolve, reject) {
        // Block#: 3*0}H#:Cj1d|lou+49aq
        LibVars.medicationlistlib.letterSelected = 'A';
        // Block#: c@n%$W}4/GW):wJhrUV%
        moveMarkerToLetter(LibVars.medicationlistlib.letterSelected).then(response => {;
        });
        // Block#: zPg;,]g7$;=_Tap}|KwS
        com.fc.JavaScriptDistLib.Textbox.setProperty["Text"]("MedicationEntered", LibVars.medicationlistlib.letterSelected); // Block#: Yz.;+uhL(R{~UVGZKf38
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("LetterSelected", LibVars.medicationlistlib.letterSelected); // Block#: /S,G|LZ9};H.|HmdvEb;
        LibVars.medicationlistlib.medicationList = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.medicationlistlib.medDict, LibVars.medicationlistlib.letterSelected));
        // Block#: D;c=@ztZp=t-fRf-,SRS
        com.fc.JavaScriptDistLib.ListView.saveTemplateCell('MedicationList');
        com.fc.JavaScriptDistLib.ListView.removeAllCells('MedicationList');
        on_listview_length_configured_MedicationList();
      });
    }
    /**
     * Compiles all medication options into one dictionary.
     */
    this.initDictionary = initDictionary;

    function initDictionary() {
      return new Promise(function(resolve, reject) {
        // Block#: djME-mHJsK/$=+yA$mcw
        LibVars.medicationlistlib.medDict = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();
        // Block#: m90$fwRXk^Z9VW[g,00.
        LibVars.medicationlistlib.tempDict = (com.fc.JavaScriptDistLib.JSON.parseJSONData('["A+D DIAPER RASH","A+D ORIGINAL","A-200 LICE CONTROL","A-25","A-CILLIN","A-COF DH","A-FIL","A-G TUSSIN","A-HYDROCORT","A-METHAPRED","A-PHEDRIN","A-SPAS","A-SPAS SL","A.E.R. WITCH HAZEL","A.P.L.","A.R.M. ALLERGY RELIEF","A.T.O. EPINEPHRINE LIDOCAINE COMBINATION","A.T.O. MEPIVACAINE","AA&C","AB OTIC","ABBO-PAC 100 TABLET PACK","ABBOKINASE","ABBOKINASE OPEN-CATH","ABELCET","ABILIFY","ABLETEX PSE","ABRAXANE","ABREVA","ABSORBINE","ABSORBINE ATHLETES FOOT","ABSORBINE JOCK ITCH","ABSORBINE JR.","ABSORBINE JR. ANTIFUNGAL","ABSORICA","ABSTRAL","ACAM2000","ACANYA","ACCLEAN","ACCOLATE","ACCU FLURO","ACCUHIST","ACCUHIST DM PEDIATRIC","ACCUHIST DM PEDIATRIC DROPS","ACCUHIST DROPS REFORMULATED FEB 2010","ACCUHIST DROPS REFORMULATED SEP 2008","ACCUHIST PC","ACCUHIST PDX","ACCUHIST PDX DROPS REFORMULATED FEB 2008","ACCUHIST PDX DROPS REFORMULATED FEB 2010","ACCUHIST PEDIATRIC","ACCUNEB","ACCUPRIL","ACCURETIC","ACCUZYME","ACEL-IMUNE","ACEON","ACEPHEN","ACEROLA","ACEROLA C","ACETA","ACETA-GESIC","ACETADOTE","ACETADRINK","ACETADRYL","ACETAMINOPHEN CHILD","ACETAMINOPHEN JR","ACETAMINOPHEN PM","ACETAMINOPHEN QUICKMELT","ACETASOL","ACETASOL HC","ACETOCOT","ACHROMYCIN","ACHROMYCIN V","ACI-JEL","ACID GONE","ACID GONE ANTACID","ACID JELLY","ACID PHOS FLUOR RINSE","ACID RELIEF","ACIDIC VAGINAL JELLY","ACIPHEX","ACLARO","ACLOVATE","ACNE TREATMENT","ACNE TREATMENT PACK","ACNE-10","ACNE-5","ACNE-CLEAR","ACNEVIR","ACNIGEL","ACNOMEL","ACNOTEX","ACOVA","ACT FLUORIDE RINSE","ACTACIN","ACTAGEN","ACTAHIST","ACTAMIN","ACTAMINE","ACTEDRIL","ACTEMRA","ACTH GEL","ACTH-40 HP","ACTH-80","ACTHAR","ACTHAR GEL","ACTHIB","ACTHREL","ACTIBINE","ACTICIN","ACTICLATE","ACTICON","ACTICORT 100","ACTIDOSE","ACTIDOSE PLUS SORBITOL","ACTIDOSE-AQUA","ACTIFED","ACTIFED ALLERGY DAYNIGHT","ACTIFED COLD & ALLERGY","ACTIFED COLD & SINUS","ACTIFED PLUS","ACTIFED WITH CODEINE","ACTIGALL","ACTIMMUNE","ACTINEX","ACTIQ","ACTIVASE","ACTIVE Q","ACTIVELLA","ACTIVELLA 0.50.1 28 DAY","ACTIVELLA 0.51 DAY","ACTIVELLA 10.5 28 DAY","ACTIVELLA 28 0.10.5 DAY","ACTIVON ARTHRITIS","ACTIVON JOINT & MUSCLE","ACTONEL","ACTONEL 35","ACTONEL 35 12-WEEK","ACTONEL 35 4-WEEK","ACTONEL 75","ACTONEL WITH CALCIUM","ACTONEL WITH CALCIUM 28 DAY THERAPY","ACTOPLUS MET","ACTOPLUS MET 151000","ACTOPLUS MET 15500","ACTOPLUS MET 15850","ACTOPLUS MET 301000","ACTOS","ACTRON","ACUFLEX","ACULAR","ACUPRIN 81","ACUTRIM 16 HOUR","ACUTRIM II","ACUTRIM LATE DAY","ACUTUSS DM PEDIATRIC","ACUVAIL","ACYLOVIR","ACYS-5","ACZONE","ADACEL","ADAGEN","ADALAT","ADANDAMET 2500","ADAPIN","ADASUVE","ADBEON","ADCETRIS","ADCIRCA","ADDAPRIN","ADDERALL","ADDERALL-XR","ADDYI","ADEMPAS","ADENO-JEC","ADENOCARD","ADENOSCAN","ADGAN","ADIDAS","ADIPEX-P","ADIPOST","ADLONE-40","ADLONE-80","ADLYXIN","ADLYXIN STARTER KIT","ADMELOG","ADOXA","ADOXA PAK 1100","ADOXA PAK 1150","ADOXA PAK 1150 MG","ADOXA PAK 1150MG","ADOXA PAK 175","ADOXA PAK 2100","ADOXA PAK 2150","ADPRIN B","ADRENACLICK","ADRENALIN","ADRIAMYCIN","ADRIAMYCIN PFS","ADRIAMYCIN RDF","ADRUCIL","ADSORBOCARPINE","ADSORBONAC","ADULT PAIN","ADULT STRENGTH","ADVAIR","ADVAIR 10050","ADVAIR 11521","ADVAIR 23021","ADVAIR 25050","ADVAIR 4521","ADVAIR 50050","ADVAIR DISKUS","ADVAIR DISKUS 10050","ADVAIR DISKUS 25050","ADVAIR DISKUS 50050","ADVAIR HFA","ADVANCED EYE RELIEF NIGHT TIME","ADVANCED EYE RELIEF REDNESS INSTANT RELIEF","ADVANCED FORMULA DI-GEL","ADVANCED PAIN RELIEF","ADVANTAGE 24 CONTRACEPTIVE","ADVANTAGE-S","ADVATE","ADVICOR","ADVICOR 100020","ADVICOR 100040","ADVICOR 50020","ADVICOR 75020","ADVIL","ADVIL ALLERGY & CONGESTION RELIEF","ADVIL ALLERGY SINUS","ADVIL CHILDREN\'S COLD","ADVIL CHILDRENS","ADVIL COLD AND SINUS","ADVIL CONGESTION RELIEF","ADVIL JUNIOR STRENGTH","ADVIL LIQUIGEL","ADVIL MIGRAINE","ADVIL MULTI-SYMPTOM COLD","ADVIL PEDIATRIC","ADVIL PM","ADVIL PM LIQUI GELS","ADVIL SINUS CONGESTION AND PAIN","ADYNOVATE","ADZENYS","AERO OTIC HC","AEROAID","AEROBID","AERODINE","AEROHIST","AEROHIST PLUS","AEROKID","AEROLATE","AEROLATE III","AEROLATE JR","AEROLATE SR.","AEROSEB-DEX","AEROSEB-HC","AEROSPAN","AEROZOIN","AFEDITAB CR","AFINITOR","AFINITOR 10","AFINITOR 5","AFIRMELLE 28 DAY","AFISH OIL","AFLAXEN","AFLURIA 2008-2009 FORMULA","AFLURIA 2009-2010 FORMULA","AFLURIA 2010-2011 FORMULA","AFLURIA 2011-2012 FORMULA","AFLURIA 2012-2013 FORMULA","AFLURIA 2013-2014 FORMULA","AFLURIA 2014-2015 FORMULA","AFLURIA 2015-2016","AFLURIA 2016-2017","AFLURIA 2017-2018","AFLURIA QUADRIVALENT 2016-2017 FORMULA","AFLURIA QUADRIVALENT 2017-2018","AFREZZA","AFREZZA 180 - 90 (4 UNT), 90 (8 UNT)","AFREZZA 180 TITRATION PACK- 60 (4 UNT), 60 (8 UNT), 60 (12 UNT)","AFREZZA 90 - 30 (4 UNT), 60 (8 UNT)","AFREZZA 90 - 60 (4 UNT), 30 (8 UNT)","AFREZZA 90 - 60 (8 UNT), 30 (12 UNT)","AFREZZA TITRATION PACK","AFRIN","AFRIN 4 HOUR EXTRA MOISTURIZING","AFRIN NASAL","AFRIN NASAL SINUS","AFRINOL","AFSTYLA","AFTATE","AFTATE FOR ATHLETES FOOT","AFTATE FOR JOCK ITCH","AFTERA","AGENERASE","AGGRASTAT","AGGRENOX","AGORAL","AGORAL PLAIN","AGRIFLU 2009-2010 FORMULA","AGRIFLU 2010-2011 FORMULA","AGRIFLU 2012-2013 FORMULA","AGRYLIN","AH-CHEW","AH-CHEW D","AH-CHEW II","AH-CHEW ULTRA TANNATE","AHIST","AHIST ANTIHISTAMINE","AID TO SLEEP","AIMOVIG","AIR SALONPAS","AIRACOF","AIRDUO","AIRET","AK-BETA","AK-CHLOR","AK-CIDE","AK-CON","AK-CON-A","AK-DEX","AK-DILATE","AK-FLUOR","AK-NACL","AK-NEFRIN","AK-NEO-DEX","AK-PENTOLATE","AK-POLY-BAC","AK-PRED","AK-PRO","AK-SPORE HC","AK-SPORE HC OINTMENT","AK-SULF","AK-T-CAINE","AK-TAINE","AK-TRACIN","AK-TROL","AKARPINE","AKINETON","AKNEMYCIN","AKOVAZ","AKTEN","AKTIPAK","AKURZA","AKWA TEARS","AKWA TEARS SOLUTION","AKYNZEO","ALA SEB","ALA SEB T","ALA-CORT","ALA-HIST","ALA-HIST AC","ALA-HIST D","ALA-HIST DM","ALA-HIST IR","ALA-HIST LQ","ALA-HIST PE","ALA-QUIN","ALA-SCALP","ALA-SCALP HP","ALA-TET","ALACOL","ALACOL DM","ALAGESIC","ALAHIST AC","ALAHIST DM","ALAMAG","ALAMAG PLUS","ALAMAG PLUS REFORMULATED MAR 2010","ALAMAST","ALAVERT","ALAVERT D","ALAWAY","ALBALON","ALBAMYCIN","ALBATUSSIN NN","ALBATUSSIN PEDIATRIC","ALBENZA","ALBUKED","ALBUMARC","ALBUMIN-ALPINE","ALBUMINAR","ALBUMINAR-20","ALBUMINAR-25","ALBUMINAR-5","ALBUNEX","ALBURX","ALBUTEIN","ALCAINE","ALCARE","ALCOH-GLOVE","ALCOH-WIPE","ALCONEFRIN-12","ALCONEFRIN-25","ALCORTIN","ALCORTIN A","ALDACTAZIDE","ALDACTONE","ALDARA","ALDEX","ALDEX AN","ALDEX CT","ALDEX D","ALDEX DM","ALDEX GS","ALDEX GS DM","ALDOCLOR-150","ALDOCLOR-250","ALDOMET","ALDOMET ESTER","ALDORIL","ALDROXICON","ALDROXICON II","ALDURAZYME","ALECENSA","ALENAZE-D","ALENIC ALKA","ALENIC ALKA CHEWABLE TABLET","ALER-DRYL","ALER-TAB","ALERA","ALERTNESS AL","ALESSE","ALESSE 28 DAY","ALEVAZOL","ALEVE","ALEVE CAPLET","ALEVE COLD AND SINUS","ALEVE GELCAP","ALEVE PM","ALEVE SINUS & HEADACHE","ALEVE-D","ALFENTA","ALFERON N","ALGAL-900","ALGINIC COMPOUND","ALGIOTIC","ALI FLEX","ALICLEN","ALIDRIN","ALIGN","ALIMTA","ALINIA","ALIQOPA","ALKA-MINTS","ALKA-SELTZER","ALKA-SELTZER ANTI-GAS","ALKA-SELTZER COLD AND SINUS","ALKA-SELTZER FRUIT CHEWS","ALKA-SELTZER GOLD","ALKA-SELTZER HEARTBURN PLUS GAS RELIEF","ALKA-SELTZER HEARTBURN RELIEF","ALKA-SELTZER MORNING RELIEF","ALKA-SELTZER PLUS ALLERGY","ALKA-SELTZER PLUS COLD","ALKA-SELTZER PLUS COLD AND COUGH","ALKA-SELTZER PLUS COLD AND COUGH EFFERVESCENT","ALKA-SELTZER PLUS COLD AND COUGH REFORMULATED MAR 2007","ALKA-SELTZER PLUS COLD AND SINUS","ALKA-SELTZER PLUS COLD LIQUIGEL","ALKA-SELTZER PLUS COLD MEDICINE","ALKA-SELTZER PLUS COLD NON-DROWSY","ALKA-SELTZER PLUS COLD REFORMULATED OCT 2009","ALKA-SELTZER PLUS COUGH AND COLD LIQUIGEL","ALKA-SELTZER PLUS COUGH AND COLD LIQUIGEL REFORMULATED AUG 2011","ALKA-SELTZER PLUS D MULTI-SYMPTOM SINUS & COLD","ALKA-SELTZER PLUS DAY AND NIGHT MULTI-SYMPTOM COLD AND FLU","ALKA-SELTZER PLUS DAY COLD AND FLU","ALKA-SELTZER PLUS DAY SEVERE COLD, COUGH AND FLU","ALKA-SELTZER PLUS FLU","ALKA-SELTZER PLUS FLU LIQUIGELS","ALKA-SELTZER PLUS FLU REFORMULATED JAN 2011","ALKA-SELTZER PLUS MUCUS AND CONGESTION","ALKA-SELTZER PLUS NIGHT COLD","ALKA-SELTZER PLUS NIGHT COLD AND FLU","ALKA-SELTZER PLUS NIGHT SEVERE COLD, COUGH AND FLU","ALKA-SELTZER PLUS NIGHT TIME","ALKA-SELTZER PLUS NIGHT TIME COLD","ALKA-SELTZER PLUS NIGHT TIME COLD LIQUIGEL","ALKA-SELTZER PLUS NIGHT TIME EFFERVESCENT","ALKA-SELTZER PLUS NIGHT TIME REFORMULATED DEC 2006","ALKA-SELTZER PLUS SEVERE SINUS CONGESTION AND COUGH","ALKA-SELTZER PM","ALKABEL","ALKERAN","ALKERAN I.V.","ALKETS","ALKUMS","ALL CLEAR","ALL DAY ALLERGY CHILDREN\'S","ALL DAY C CR","ALL-NITE COLD","ALLAN TANNATE PEDIATRIC","ALLANDERM","ALLANENZYME","ALLANFIL","ALLANFILLENZYME","ALLANHIST","ALLANHIST PDX","ALLANZYME","ALLAY","ALLEGRA","ALLEGRA COOLING RELIEF ANTI-ITCH","ALLEGRA-D","ALLEGRA-D 12 HOUR","ALLEGRA-D 24 HOUR","ALLENT","ALLEPAK DOSE PACK 10","ALLER-CHLOR","ALLER-CHLOR DECONGESTANT","ALLER-DRYL TOPICAL","ALLER-FLO","ALLER-TEC","ALLER-TEC D","ALLERCLEAR","ALLERCON","ALLERDUR","ALLEREST","ALLEREST 12 HOUR","ALLEREST 12 HOUR NASAL SPRAY","ALLEREST EYE DROPS","ALLEREST HEADACHE STRENGTH","ALLEREST MAXIMUM STRENGTH","ALLEREST NO DROWSINESS","ALLEREST PE","ALLEREST SINUS","ALLERFRIM","ALLERFRIN WITH CODEINE","ALLERGEN EAR","ALLERGIA-C","ALLERGY COLD LA","ALLERGY DN PE","ALLERGY MEDICINE ANTIHISTAMINE","ALLERGY PLUS CONGESTION","ALLERGY RELIEF","ALLERGY SINUS","ALLERGYCOLD","ALLERHIST-1","ALLERHIST-D","ALLERLIEF","ALLERMAX","ALLERNAZE","ALLEROFF","ALLERPHED","ALLERSOL","ALLERSOL A","ALLERSOL-A","ALLERTAN","ALLERX","ALLERX 30 DOSE PACK","ALLERX AM","ALLERX DF AM","ALLERX DF DOSE PACK 10","ALLERX DF DOSE PACK 30","ALLERX DF PM","ALLERX DF SAMPLE","ALLERX DOSE PACK 10","ALLERX DOSE PACK 10 REFORMULATED APR 2008","ALLERX DOSE PACK 30","ALLERX DOSE PACK 30 REFORMULATED APR 2008","ALLERX DOSE PACK DF 10","ALLERX DOSE PACK DF 30","ALLERX DOSE PACK PE 10","ALLERX DOSE PACK PE 30","ALLERX PE AM","ALLERX PE DOSE PACK 10","ALLERX PE DOSE PACK 30","ALLERX PE PM","ALLERX PE SAMPLE","ALLERX PM","ALLERX PM REFORMULATED APR 2008","ALLERX REFORMULATED OCT 2008","ALLERX SAMPLE","ALLERX SUSPENSION","ALLERX SUSPENSION REFORMULATED JUL 2007","ALLERX-D","ALLFEN","ALLFEN C","ALLFEN CD","ALLFEN CDX","ALLFEN CX","ALLFEN DM","ALLFEN DM REFORMULATED JUL 2008","ALLFEN JR","ALLFEN REFORMULATED MAR 2007","ALLI","ALLRES D","ALLRES DS","ALLRES G","ALLRES PD","ALMACONE","ALMORA","ALOCANE","ALOCANE PLUS","ALOCRIL","ALODOX","ALOE CORT","ALOE VESTA","ALOE VESTA 2 IN 1 ANTIFUNGAL","ALOE VESTA ANTIFUNGAL","ALOE VESTA DAILY MOISTURIZER","ALOE VESTA PROTECTIVE BARRIER","ALOE VESTA SKIN CONDITIONER","ALOH-GEL","ALOMIDE","ALOPHEN","ALOPHEN PILLS-CHOCOLATE","ALOPHEN REFORMULATED JAN 2008","ALOPRIM","ALOQUIN","ALOR 5500","ALORA","ALOXI","ALPAIN","ALPHA E","ALPHAGAN","ALPHAGAN-P","ALPHANATE","ALPHANINE","ALPHANINE SD","ALPHAQUIN HP","ALPHATREX","ALPHEN","ALPHEN EXPECTORANT","ALPRAZALAM","ALPRAZOLAM INTENSOL","ALPROLIX","ALPROZOLAM","ALRAMUCIL","ALREX","ALSUMA","ALTABAX","ALTACAINE","ALTACE","ALTAFED","ALTAFLOR","ALTAFLUOR","ALTAFRIN","ALTALUBE","ALTAMIST","ALTARUSSIN CF","ALTARUSSIN PE","ALTARYL","ALTATAPP","ALTAVERA 28 DAY","ALTAZINE","ALTERNAGEL","ALTEX LIQUID","ALTINAC","ALTOCOR","ALTOPREV","ALTORANT","ALU-CAP","ALU-TAB","ALUMADRINE","ALUMINA AND MAGNESIA","ALUMINAMAGNESIASIMETHICONE","ALUNBRIG","ALUNBRIG INITIATION PACK","ALUPENT","ALUSTRA","ALUVEA","ALVESCO","ALYACEN 135","ALYACEN 777","AMABELZ 0.50.1 28 DAY","AMABELZ 10.5 28 DAY","AMARYL","AMBENYL","AMBENYL-D","AMBI 10005","AMBI 10PEH400GFN","AMBI 1200","AMBI 40100060","AMBI 515100","AMBI EVEN & CLEAR","AMBIEN","AMBIFED CD","AMBIFED CDX","AMBIFED DM","AMBIFED G DM REFORMULATED JUL 2008","AMBIFED REFORMULATED JUL 2008","AMBIFED-G","AMBIFED-G CD","AMBIFED-G CDX","AMBISOME","AMBOPHEN","AMCORT","AMELUZ","AMEN","AMERGE","AMERICAINE","AMERICAINE ANESTHETIC LUBRICANT","AMERICAINE HEMORRHOIDAL","AMERICAINE OTIC","AMERICET","AMERIFED","AMERIFED DM","AMERITUSS AD","AMETHIA 91 DAY","AMETHIA LO 91 DAY","AMETHYST 28 DAY","AMEVIVE","AMI-RAX","AMI-TEX","AMI-TEX LA","AMIBID DM","AMIBID LA","AMICAR","AMIDATE","AMIGESIC","AMIKIN","AMIKIN PEDIATRIC","AMILAC","AMILON","AMINO ACID-UREA CREAM","AMINO-CERV","AMINO-OPTI-E","AMINOSYN","AMINOSYN 10","AMINOSYN 10%, SULFITE-FREE","AMINOSYN 3.5","AMINOSYN 3.5 % M, SULFITE FREE","AMINOSYN 3.5%, SULFITE-FREE","AMINOSYN 5","AMINOSYN 5%, SULFITE-FREE","AMINOSYN 7","AMINOSYN 7 % WITH ELECTROLYTES, SULFITE-FREE","AMINOSYN 7 SULFITE FREE","AMINOSYN 7%, SULFITE-FREE","AMINOSYN 8.5","AMINOSYN 8.5 % WITH ELECTROLYTES, SULFITE-FREE","AMINOSYN 8.5%, SULFITE-FREE","AMINOSYN II","AMINOSYN II 10 %","AMINOSYN II 15%","AMINOSYN II 3.5 % IN 25 % DEXTROSE","AMINOSYN II 3.5 % M IN 5 % DEXTROSE","AMINOSYN II 3.5 % WITH ELECTROLYTES IN 25 % DEXTROSE WITH CALCIUM","AMINOSYN II 3.5 WITH ELECTROLYTES","AMINOSYN II 3.5% IN 25% DEXTROSE","AMINOSYN II 3.5% IN 5% DEXTROSE","AMINOSYN II 4.25 % WITH ELECTROLYTES IN 25 % DEXTROSE WITH CALCIUM","AMINOSYN II 4.25 WITH ELECTROLYTES","AMINOSYN II 4.25% IN 10% DEXTROSE","AMINOSYN II 4.25% IN 20% DEXTROSE","AMINOSYN II 4.2525","AMINOSYN II 4.5 % M IN 10 % DEXTROSE","AMINOSYN II 5% IN 25% DEXTROSE","AMINOSYN II 525","AMINOSYN II 7 %, SULFITE-FREE","AMINOSYN II 8.5 % WITH ELECTROLYTES, SULFITE-FREE","AMINOSYN II 8.5 %, SULFITE-FREE","AMINOSYN II 8.5 WITH ELECTROLYTES","AMINOSYN PF 7","AMINOSYN-HBC 7 %, SULFITE-FREE","AMINOSYN-HF 8 %","AMINOSYN-PF 10 %, SULFITE-FREE","AMINOSYN-PF 7%","AMINOSYN-RF 5.2 %, SULFITE-FREE","AMITEX LA","AMITIZA","AMITONE","AMLACTIN","AMLACTIN AP","AMMONUL","AMNESTEEM","AMOCLAN","AMOCLAN 200","AMOCLAN 400","AMOCLAN 600","AMOXICOT","AMOXIL","AMOXIL PEDIATRIC DROPS","AMPHADASE","AMPHOJEL","AMPHOTEC","AMPROL 128","AMPYRA","AMRIX","AMTURNIDE","AMTUSSIN","AMVISC","AMYTAL","ANA-GUARD","ANA-LEX","ANA-LEX HC","ANABAR","ANABOLIN LA","ANACAINE","ANACIN","ANACIN ADVANCED HEADACHE FORMULA","ANACIN AF","ANACIN ASPIRIN REGIMEN","ANACIN P.M. ASPIRIN FREE","ANACIN PM ASPIRIN FREE","ANACIN-3 MAXIMUM STRENGTH","ANADROL-50","ANAFLEX","ANAFRANIL","ANALGESIC BALM GRX","ANALGESIC BALM WITH CAPSAICIN","ANALGESIC PAIN RELIEVER","ANALPRAM E KIT WITH 1 PRAX MEDICATED PAD","ANALPRAM E KIT WITH 18 PRAX MEDICATED PADS","ANALPRAM E KIT WITH 6 PRAX MEDICATED PAD","ANALPRAM E TOPICAL CREAM WITH 18 MEDICATED PADS","ANALPRAM E TOPICAL CREAM WITH 6 MEDICATED PADS","ANALPRAM HC","ANALPRAM HC 1%  1%","ANALPRAM HC 2.5%  1%","ANAMANTLE HC","ANAMANTLE HC GEL","ANAMINE","ANAMINE T.D.","ANAPLEX","ANAPLEX DM","ANAPLEX HD","ANAPROX","ANAPROX DS","ANASCORP","ANASEPT","ANASPAZ","ANATUSS","ANATUSS DM","ANATUSS LA","ANBESOL","ANBESOL BABY TEETH","ANBESOL COLD SORE THERAPY","ANBESOL MAXIMUM STRENGTH","ANCEF","ANCOBON","ANDEC","ANDEC-TR","ANDECON PEDIATRIC DROPS","ANDEHIST","ANDEHIST DM","ANDEHIST DM NR","ANDEHIST DM REFORMULATED SEP 2008","ANDEHIST NR","ANDEHIST REFORMULATED SEP 2008","ANDEXXA","ANDRO LA","ANDRO LA 200","ANDRO-CYP 100","ANDRO-CYP 200","ANDRODERM","ANDROGEL","ANDROID","ANDROID-10","ANDROID-25","ANDROLONE-D","ANDROXY","ANDRYL 200","ANECREAM","ANECTINE","ANECTINE FLO-PACK","ANEMAGEN","ANERGAN","ANERGAN 50","ANEST HEMOR","ANESTACAINE","ANESTACON","ANESTAFOAM","ANEXSIA","ANEXTUSS","ANGELIQ 0.250.5 28 DAY","ANGELIQ 0.51 28 DAY","ANGELIQ 28 DAY","ANGIOFLUOR","ANGIOMAX","ANGIOSCEIN","ANIMI-3","ANIMI-3 WITH VITAMIN D","ANIODARONE","ANNAPLEX DMX","ANOLOR","ANOLOR DH5","ANOQUAN","ANOREX","ANOREX-SR","ANORO","ANSAID","ANTABUSE","ANTACID ANTI-GAS","ANTACID DS","ANTACID DS WITH SIMETHICONE","ANTACID I","ANTACID II","ANTACID M","ANTACID M PLUS","ANTACID PLUS","ANTACID WITH SIMETHICONE","ANTACID WITH SIMETHICONE II","ANTAGON","ANTARA","ANTATENS","ANTHIM","ANTHRA-DERM","ANTHRASIL","ANTI-DIARRHEAL","ANTI-GAS","ANTI-GAS-80","ANTI-ITCH HC","ANTI-TUSS","ANTI-TUSS DM","ANTIBIOTIC EAR","ANTIBIOTIC WITH PRAMOXINE","ANTIBIOTIC-CORT EAR","ANTIFLEX","ANTIFUNGAL AGENTS","ANTIHIST","ANTIHIST-1","ANTIHISTAMINE 12 HOUR","ANTIHISTAMINE-DECONGESTANT 12 HOUR","ANTILIRIUM","ANTIMINTH","ANTINAUS 50","ANTISEPT","ANTISPAS","ANTITUSS","ANTITUSS AC","ANTITUSS DM","ANTITUSSIN","ANTITUSSIN DM","ANTIVERT","ANTIZOL","ANTROCOL","ANTUROL","ANUCORT-HC","ANUMED-HC","ANUPREP-HC","ANURX-HC","ANUSERT","ANUSERT HC-1","ANUSERT OINTMENT","ANUSOL","ANUSOL HC","ANUSOL HC-1","ANUTONE-HC","ANUZONE HC","ANX","ANZEMET","APACET","APADAZ","APAGESIC","APAP EXTRA STRENGTH","APAP FRUIT","APAP JUNIOR STRENGTH","APAP SLEEP","APAP-PM","APAPGESIC","APARA","APEXICON","APF GEL","APHEDRID","APHTHASOL","APIDRA","APLENZIN","APLISOL","APOKYN","APPEAREX","APPECON","APRA","APRESAZIDE","APRESOLINE","APRI","APRI 28 DAY","APRIDRA","APRISO","APRODINE","APRODINE WITH CODEINE","APTENSIO","APTIOM","APTIOM TITRATION SAMPLE PACK","APTIVUS","AQUA CARE","AQUA GLYCOLIC","AQUA GLYCOLIC SHAMPOO AND BODY CLEANSER","AQUA-BAN","AQUABID DM","AQUACHLORAL SUPPRETTES","AQUACILLIN","AQUACOT","AQUAFRESH","AQUAFRESH SENSITIVE","AQUAFRESH WHITE AND SHINE","AQUALAX","AQUALAX FORTE","AQUAMEPHYTON","AQUAMIST","AQUANIL HC","AQUAPHILIC WITH UREA","AQUAPHOR","AQUAPHOR DIAPER RASH","AQUAPHYLLIN","AQUASOL A","AQUASOL E","AQUATAB C","AQUATAB C REFORMULATED DEC 2008","AQUATAB C REFORMULATED NOV 2006","AQUATAB C REFORMULATED OCT 2008","AQUATAB D","AQUATAB D DOSE PACK","AQUATAB D REFORMULATED DEC 2008","AQUATAB D REFORMULATED NOV 2006","AQUATAB DM","AQUATAB DM 28835","AQUATENSEN","AQUAVITE-E","AQUAZIDE H","AQUEST","ARALAST","ARALEN HYDROCHLORIDE","ARALEN PHOSPHATE","ARAMINE","ARANELLE 28","ARANESP","ARAVA","ARBINOXA","ARCALYST","ARCAPTA","ARCET","ARCO-LASE","ARDUAN","AREDIA","ARESTIN","ARFONAD","ARGESIC-SA","ARICEPT","ARICIN","ARIDEX","ARIDEX-D","ARIMIDEX","ARIMIDEX 14 DAY","ARISOPRODOL","ARISTADA","ARISTOCORT","ARISTOCORT A","ARISTOCORT FORTE","ARISTOCORT R","ARISTOCORT TOPICAL","ARISTOPAK","ARISTOSPAN","ARIXTRA","ARKALIOX","ARLEX","ARM-A-MED","ARM-A-MED ISOETHARINE HCL","ARMONAIR","ARMOUR THYROID","ARNUITY","AROMASIN","ARRANON","ARRID EXTRA DRY","ARTANE","ARTHRICARE FOR WOMEN MOISTURIZING","ARTHRICARE FOR WOMEN PAIN RELIEVING NIGHTTIME","ARTHRICARE FOR WOMEN ULTRA STRENGTH","ARTHRITEN INFLAMMATORY PAIN","ARTHRITIS FORMULA","ARTHRITIS FOUNDATION","ARTHRITIS FOUNDATION ASPIRIN","ARTHRITIS FOUNDATION IB","ARTHRITIS FOUNDATION MS","ARTHRITIS PAIN","ARTHRITIS PAIN FORMULA","ARTHRITIS PAIN MED","ARTHROPAN","ARTHROTEC","ARTHROTEC 50200","ARTHROTEC 75200","ARTHUR ITIS","ARTICADENT","ARTISS","ARYMO","ARZERRA","ASACOL","ASBRON G","ASCAREL","ASCLERA","ASCOMP","ASCOMP WITH CODEINE","ASCOR","ASCOR L 500","ASCOT","ASCRIPTIN","ASCRIPTIN ENTERIC","ASCRIPTIN MAXIMUM STRENGTH","ASENDIN","ASHLYNA 91 DAY","ASMALIX","ASMALPRED PLUS","ASMANEX","ASPER-FLEX","ASPERCREME","ASPERCREME HEAT PAIN RELIEVING","ASPERCREME MAX","ASPERCREME WITH LIDOCAINE","ASPERDRINK","ASPERGUM","ASPERGUM CHERRY","ASPERGUM ORANGE","ASPI-COR","ASPIDROX","ASPIR-LOW","ASPIR-MOX","ASPIR-MOX IB","ASPIR-TRIN","ASPIRCAF","ASPIRIN CHILD CHEWABLE","ASPIRIN FREE CHILD","ASPIRIN FREE EXTRA STRENGTH","ASPIRIN LOW STRENGTH","ASPIRIN-ANTACID","ASPIRIN-FREE","ASPIRTAB","ASTAGRAF","ASTELIN","ASTEPRO","ASTHMACON","ASTHMAHALER","ASTHMANEFRIN","ASTRAMORPH","ASTRAMORPH PF","ASTRINGYN","ATABEX DHA","ATACAND","ATACAND HCT","ATAMET","ATAPRYL","ATARAX","ATAZINE","ATELVIA","ATGAM","ATIVAN","ATNATIV","ATO MEPIVACAINE V","ATOPICA","ATRAC-TAIN","ATRALIN","ATREZA","ATRIDINE","ATRIDOX","ATRIPLA","ATROFED","ATROGEN","ATROHIST PEDIATRIC","ATROHIST PLUS","ATROMID","ATROPEN","ATROPINE-CARE","ATROSEPT","ATROSULF-1","ATROVENT","ATROVENT NASAL","ATRYN","ATS","ATTI PLEX P","ATUSS 12 DM","ATUSS 12 DX","ATUSS DM","ATUSS DR","ATUSS DS","ATUSS EX","ATUSS EX REFORMULATED FEB 2008","ATUSS G","ATUSS HD","ATUSS HD EXTENDED RELEASE","ATUSS HS","ATUSS HX","ATUSS MR","ATUSS MS","AUBAGIO","AUBRA 28 DAY","AUGMENTIN","AUGMENTIN 125-MG CHEWABLE","AUGMENTIN 200-MG CHEWABLE","AUGMENTIN 250-MG","AUGMENTIN 250-MG CHEWABLE","AUGMENTIN 400-MG CHEWABLE","AUGMENTIN 500-MG","AUGMENTIN 875-MG","AURALGAN","AURAPHENE-B","AUREOMYCIN","AURO EACHE RELIEF","AURO EAR","AURO EAR DROPS","AURO-DRI","AURODEX","AUROGUARD","AUROLATE","AUROVELA 1.530 21 DAY","AUROVELA 120 21 DAY","AUROVELA FE 1.530 28 DAY","AUROVELA FE 120 28 DAY","AUROVELA FE 24 120 28 DAY","AURYXIA","AUSTEDO","AUVI-Q","AVAGARD","AVAGE","AVAILNEX","AVALIDE","AVANDAMET","AVANDAMET 1500","AVANDAMET 21000","AVANDAMET 2500","AVANDAMET 41000","AVANDAMET 4500","AVANDARYL","AVANDIA","AVAPRO","AVAR","AVAR LS","AVASTIN","AVEED","AVEENO ACTIVE NATURALS","AVEENO ACTIVE NATURALS DAILY MOISTURIZING","AVEENO ACTIVE NATURALS NOURISH PLUS DANDRUFF CONTROL","AVEENO ACTIVE NATURALS SKIN RELIEF","AVEENO ANTI-ITCH","AVEENO ANTI-ITCH REFORMULATED JUN 2007","AVEENO BABY","AVEENO BABY CALMING COMFORT","AVEENO BABY DAILY MOISTURE","AVEENO BABY DIAPER RASH CREAM","AVEENO BABY SOOTHING RELIEF DIAPER RASH","AVEENO CLEAR COMPLEXION","AVEENO CLEAR COMPLEXION DAILY CLEANSING","AVEENO HEALING OINTMENT","AVEENO HYDROCORTISONE ANTI-ITCH","AVELOX","AVELOX ABC","AVELOX I.V.","AVENTYL HCL","AVERTEAX OINTMENT","AVIANE","AVIANE 28","AVIDOXY","AVIDOXY PACK","AVINZA","AVITA","AVOCA","AVODART","AVONEX","AVYCAZ","AXERT","AXID","AXID AR","AXID PULVULES","AXIRON","AXOTAL","AXSAIN","AYGESTIN","AYR SALINE NASAL","AYUNA 28 DAY PACK","AZACTAM","AZASAN","AZASITE","AZDONE","AZELEX","AZILECT","AZMACORT","AZO GANTANOL","AZO GANTRISIN","AZO URINARY PAIN RELIEF","AZO URINARY TRACT DEFENSE","AZO-100","AZO-CRANBERRY","AZO-GESIC","AZO-STANDARD","AZO-STANDARD MAX STRENGTH","AZO-TRUXAZOLE","AZOPT","AZOR","AZULFIDINE","AZURETTE 28 DAY"]'));
        // Block#: tvMLjl?F(~O5K%k?wy6|
        com.fc.JavaScriptDistLib.Dictionary.setDictValue(LibVars.medicationlistlib.medDict, 'A', LibVars.medicationlistlib.tempDict);
        // Block#: hakX_oM!I57xTdNKLzD9
        LibVars.medicationlistlib.tempDict = (com.fc.JavaScriptDistLib.JSON.parseJSONData('["B & O SUPPRETTES 15-A","B & O SUPPRETTES 16-A","B-12 RESIN","B-3-50","B-CARO-T","B-D GLUCOSE","B-DONNA","B-FEDRINE","B-FEDRINE PD","B-NATAL","B-TUSS","B-VEX PD","B. C. POWDER","B.C. HEADACHE","B.S.S.","B3-500-GR","BABEE COF","BABY ANTI MONKEY BUTT DIAPER RASH CREAM","BABY ANTI MONKEY BUTT DIAPER RASH POWDER","BABY GAS","BABYBIG","BACI-IM","BACIGUENT","BACITRACIN-NEO-POLY","BACKAID IPF","BACKPRIN","BACTINE","BACTOCILL","BACTOSHIELD","BACTRIM","BACTRIM DS","BACTRIM I.V. INFUSION","BACTRIM PEDIATRIC","BACTROBAN","BAL IN OIL","BALACALL DM","BALACET","BALAMINE DM","BALAMINE DM REFORMULATED APR 2013","BALANCER","BALANTA","BALCOLTRA 28 DAY","BALMEX","BALMEX OINTMENT","BALNETAR","BALOX PLUS","BALTUSSIN","BALTUSSIN HC","BALTUSSSIN HC","BALZIVA","BALZIVA 28","BALZIVA 28 DAY","BANADYNE","BANALG","BANALG MUSCLE PAIN RELIEVER","BANARIL","BANCAP HC","BAND-AID ANTI-ITCH","BAND-AID HURT-FREE","BANEOL CLEANSER","BANEX","BANEX-LA","BANFLEX","BANOPHEN","BANOPHEN ANTI ITCH","BANOPHEN CREAM","BANOPHEN M-S","BANZEL","BAR-TEST","BARACLUDE","BARBIDONNA","BARIDIUM","BARMINE","BAROGAN","BAROPHEN","BARRI-CARE","BASAGLAR","BASALJEL","BASERETIC","BAVENCIO","BAXDELA","BAYCADRON","BAYCOL","BAYER","BAYER ASPIRIN","BAYER ASPIRIN PLUS CALCIUM","BAYER ASPIRIN PM EXTRA STRENGTH","BAYER ASPIRIN PM REFORMULATED NOV 2011","BAYER ASPIRIN WITH CALCIUM","BAYER BACK AND BODY PAIN","BAYER CHILDRENS ASPIRIN","BAYER HEADACHE RELIEF","BAYER LOW STRENGTH","BAYER MIGRAINE","BAYER MUSCLE AND JOINT CREAM","BAYER PLUS","BAYER SELECT","BAYER SELECT BACKACHE PAIN FORMULA","BAYER SELECT DECONGESTANT","BAYER SELECT MAX STRENGTH NIGHT TIME PAIN","BAYER SELECT SINUS PAIN FORMULA","BAYER WOMENS","BAYGAM","BAYHEP B","BAYRAB","BAYRHO-D","BAYTET","BAZA","BAZA ANTIFUNGAL","BAZA CLEANSE AND PROTECT","BAZA CLEAR","BAZA-PROTECT","BC ARTHRITIS","BC HEADACHE","BC ORIGINAL FORMULA","BC POWDER 65033.3195","BD ALCOHOL","BD SALINE FLUSH","BEANO","BEANO DAIRY DEFENSE","BEBULIN","BECLOVENT","BECONASE","BECONASE AQ","BEDSIDE-CARE","BEEGENTLE","BEELITH","BEEPEN-VK","BEKYREE 28 DAY","BEL-PHEN-ERGOT","BEL-TABS","BELBUCA","BELCOMP-PB","BELDIN","BELEODAQ","BELIX","BELLADONNA-PHENOBARBITAL","BELLALPHEN","BELLAMINE S","BELLAMOR","BELLAPHEN-S","BELLASPAS","BELLATAL","BELSOMRA","BELVIQ","BEN-AQUA","BENADRYL","BENADRYL ALLERGY COLD","BENADRYL ALLERGY COLD REFORMULATED JUN 2007","BENADRYL ALLERGY PLUS CONGESTION","BENADRYL ALLERGY SINUS","BENADRYL ALLERGY SINUS HEADACHE","BENADRYL CHILD ALLERGY AND SINUS","BENADRYL CHILDREN\'S ANTI-ITCH","BENADRYL CHILDRENS ALLERGY AND COLD","BENADRYL CREAM (CHILD)","BENADRYL DECONGESTANT ALLERGY","BENADRYL DYE FREE ALLERGY","BENADRYL EXTRA STRENGTH","BENADRYL ITCH STOP GEL MAXIMUM STRENGTH","BENADRYL ITCH STOPPING","BENADRYL MAXIMUM STRENGTH","BENADRYL READYMIST ITCH STOPPING","BENADRYL SEVERE ALLERGY SINUS HEADACHE REFORMULATED JUN 2007","BENADRYL-D ALLERGY AND SINUS","BENADRYL-D FASTMELT ALLERGY AND SINUS","BENAHIST-10","BENAHIST-50","BENAZPEPRIL","BENCORT","BENDEKA","BENEFIBER","BENEFIX","BENEKRAFT-25","BENEMID","BENGAY","BENGAY ARTHRITIS","BENGAY ORIGINAL","BENGAY PRO-COOL","BENGAY ULTRA","BENICAR","BENICAR HCT","BENLYSTA","BENOJECT-50","BENOQUIN","BENOXYL","BENOXYL 10","BENOXYL 5","BENOXYLDOXY 30","BENOXYLDOXY 60","BENSAL","BENSAL HP","BENTYL","BENYLIN","BENYLIN ADULT FORMULA","BENYLIN DM PEDIATRIC","BENYLIN MULTI-SYMPTOM","BENYLIN MULTI-SYMPTOM COUGH","BENYLIN PEDIATRIC","BENZ-ALL","BENZ-O-STHETIC","BENZA","BENZAC","BENZAC AC","BENZAC W","BENZACLIN","BENZACOT","BENZAGEL WASH","BENZAGELWASH","BENZAMYCIN","BENZASHAVE","BENZASHAVE 10","BENZASHAVE 5","BENZEDREX","BENZEFOAM","BENZEPRIL","BENZEPRO","BENZIQ","BENZIQ LS","BENZIQ WASH","BENZO-JEL","BENZODENT","BENZONATE","BENZTROINE","BEPREVE","BERINERT","BERRI-FREEZ","BERRI-FREEZ PLUS","BESIVANCE","BESPONSA","BETA HC","BETA MED","BETA-2","BETA-HC","BETA-VAL","BETADERM","BETADINE","BETADINE ANTIBIOTIC","BETADINE PLUS ANTIBIOTIC AND PAIN RELIEVER","BETADINE SHAMPOO","BETADINE SKIN CLEANSER","BETAGAN","BETAMETHACOT","BETANATE","BETAPACE","BETASAL","BETASEPT","BETASERON","BETATAN","BETATAR GEL","BETAVENT","BETAXON","BETHAPRIM PEDIATRIC","BETHKIS","BETIMOL","BETOPTIC","BETOPTIC PILO","BETOPTIC S","BEVESPI","BEVYXXA","BEXSERO","BEXTRA","BEXXAR DOSIMETRIC PACKAGING","BEXXAR THERAPEUTIC PACKAGING","BEYAZ 28 DAY","BEYONDCLEAR","BI-TANN DP","BIAVAX II","BIAXIN","BIAXIN 10 TABLET BLISTER PACK","BIAXIN XL PAC 14 TABLET PACK","BICARSIM","BICILLIN","BICILLIN C-R","BICILLIN C-R 900300","BICILLIN L-A","BICLORA","BICLORA-D","BICNU","BICOZENE","BIDEX","BIDEX-A","BIDEX-DM","BIDEX-DMI","BIDHIST","BIDHIST D","BIDIL","BIDNASE","BIFERA","BIFERARX","BIKTARVY","BILOPAQUE SODIUM","BILTRICIDE","BINOSTO","BIO-D-MULSION","BIO-STATIN","BIO-THROID","BIO-TROPIN","BIOCEF","BIODEC DM","BIODEC DM 2425","BIOFED-PE","BIOFLEXOR","BIOFREEZE","BIOGAIA","BIOHIST-LA","BIOLLE TEARS","BIOLON","BIOMOX","BION TEARS","BIONECT","BIOTENE DRY MOUTH","BIOTENE DRY MOUTH FLUORIDE","BIOTHRAX","BIOTUSS DM","BIOTUSS PE","BIOTUSS PEDIATRIC","BIOTUSSIN","BIOTUSSIN DAC","BISA-PLEX","BISAC-EVAC","BISCO-LAX","BISMAREX","BISMATROL","BISOLAX","BITEX","BITEX LIQUID","BIVIGAM","BLACK DRAUGHT","BLANEX-A","BLENOXANE","BLEOMYCINE","BLEPH-10","BLEPHAMIDE","BLEPHAMIDE S.O.P.","BLINCYTO","BLINK TEARS","BLIS-TO-SOL","BLIS-TO-SOL POWDER","BLISOVI 21 FE 1.530 28 DAY PACK","BLISOVI 21 FE 120 28 DAY PACK","BLISOVI 24 FE 120 28 DAY","BLISTEX","BLISTEX COLD & ALLERGY LIP SOOTHER","BLISTEX KANKA","BLISTEX KANKA SOFT BRUSH","BLISTEX MEDICATED LIP","BLISTEX ODOR-EATERS POWDER","BLOCADREN","BLOXIVERZ","BLUE GEL","BLUE-EMU PAIN RELIEF","BOCA HIST DM","BOCK-ARATE","BOIL-EASE","BONIKRAFT","BONINE","BONINE FOR KIDS","BONIVA","BONJESTA","BONTRIL","BONTRIL PDM","BONTRIL SLOW-RELEASE","BOOSTRIX","BOROFAIR","BOROFAX","BOROLEUM","BOSULIF","BOTOX","BOTOX COSMETIC","BOUDREAUXS BUTT PASTE","BOUDREAUXS RASH PROTECTOR","BOYOL SALVE","BP 10-WASH","BP ALLERGY DM","BP ALLERGY JR","BP ANA-LEX HC","BP CLEANSING WASH","BP POLY-650","BPM PE HC","BPM PEH","BPO","BRACCO","BRAFTOVI","BRANCHAMIN","BRAVELLE","BREATHE FREE SALINE","BREEZEE MIST","BREEZEE MIST FOOT PWDR","BREO","BREO ELLIPTA","BREONESIN","BRETHAIRE","BRETHINE","BRETYLOL","BREVIBLOC","BREVICON","BREVICON 28 DAY","BREVITAL","BREVITAL SODIUM","BREVOXYL","BREVOXYL CREAMY WASH","BREVOXYL-4 COMPLETE PACK","BREVOXYL-8 COMPLETE PACK","BRICANYL","BRIDION","BRIELLYN 28 DAY","BRILINTA","BRINEURA","BRINTELLIX","BRISDELLE","BRITE LIFE GLUCOSE","BRIVIACT","BRODSPEC","BROFED","BROM TANN","BROMADINE-DM","BROMADRINE PD","BROMADRINE TR","BROMALINE","BROMALINE DM","BROMALINE DM REFORMULATED FEB 2008","BROMALINE PLUS","BROMALINE REFORMULATED JUN 2008","BROMALINE SR","BROMANATE","BROMANATE AF","BROMANATE DC","BROMANATE DC COUGH","BROMANATE DM","BROMANATE DX COUGH","BROMANYL","BROMAPP","BROMAREST DX","BROMATAN","BROMATAN PLUS","BROMATANE DX","BROMATAPP","BROMATAPP SR","BROMATES","BROMATOL","BROMAX","BROMAXEFED DM RF","BROMAXEFED RF","BROMCOMP","BROMDAY","BROMDEC","BROMDEC DM","BROMDEX D","BROMETANE DX","BROMFED","BROMFED DM","BROMFED PD","BROMFED PD REFORMULATED OCT 2008","BROMFED REFORMULATED JUN 2008","BROMFENEX PE","BROMFENEX PE PEDIATRIC","BROMHIST NR","BROMHIST PDX","BROMHIST PDX SYRUP","BROMHIST PEDIATRIC DROPS","BROMHIST-DM","BROMHIST-DM DROPS","BROMHISTINE-P","BROMHISTINE-PD","BROMO SELTZER","BROMOPHED-DX","BROMOPHEN TD","BROMOPLEX DM","BROMOTUSS WITH CODEINE","BROMPH DM","BROMPH HD","BROMPHEN DC","BROMPHEN DC WITH CODEINE","BROMPHEN DX","BROMPHEN PPA DM","BROMPHENEX","BROMPHENEX DM","BROMPHENYL","BROMPLEX DM","BROMPLEX HD","BROMSITE","BROMTAPP","BROMUPHED","BRON-TUSS","BRONCHIAL MIST WITH PUMP","BRONCHO SALINE","BRONCHOLATE","BRONCODUR","BRONCOMAR","BRONCOMAR GG","BRONCOPECTOL SYRUP","BRONCOT","BRONCOTRON","BRONCOTRON D","BRONCOTRON PED","BRONCOTRON-D","BRONCOTRON-D REFORMULATED DEC 2012","BRONCOTRON-P","BRONDELATE","BRONITIN","BRONKAID","BRONKAID MIST","BRONKIDS","BRONKODYL","BRONKOMETER","BRONKOSOL","BRONKOTUSS","BRONTEX","BRONTEX 10100","BRONTUSS","BRONTUSS DX","BROVANA","BROVEX","BROVEX ADT","BROVEX CB","BROVEX CBX","BROVEX D","BROVEX D 1220","BROVEX HC","BROVEX PB","BROVEX PB CX","BROVEX PBC","BROVEX PBCX","BROVEX PBD","BROVEX PD","BROVEX PEB","BROVEX PEB DM","BROVEX PSB","BROVEX PSB DM","BROVEX PSE","BROVEX PSE DM","BROVEX SR","BSS OPHTHALMIC SOLUTION","BUBBLI-PRED","BUCALCIDE","BUCALSEP","BUCET","BUCKLEY\'S BEDTIME FORMULA","BUCKLEY\'S CHEST CONGESTION","BUCKLEY\'S COUGH SUPPRESSANT","BUCKLEY\'S DM COUGH SUPPRESSANT","BUCKLEY\'S DM DECONGESTANT","BUCKLEYS MIXTURE","BUDEPRION","BUFFERIN","BUFFERIN ARTHRITIS STRENGTH","BUFFERIN EXTRA STRENGTH","BUFFEX","BUMEX","BUMINATE","BUNAVAIL","BUPAP","BUPHENYL","BUPRENEX","BUPROBAN","BURN JEL PLUS","BUROW\'S SOLUTION","BUSODIUM","BUSPAR","BUSPAR DIVIDOSE","BUSPRIRONE","BUSULFEX","BUTALBITAL COMPOUND","BUTESIN PICRATE","BUTEX FORTE","BUTIBEL","BUTISOL","BUTISOL SODIUM","BUTRANS","BY ACHE","BYDRAMINE","BYDUREON","BYETTA","BYSTOLIC","BYVALSON"]'));
        // Block#: }2hr{*U]}_ujt;~*@V6^
        com.fc.JavaScriptDistLib.Dictionary.setDictValue(LibVars.medicationlistlib.medDict, 'B', LibVars.medicationlistlib.tempDict);
        // Block#: ie9}9AsBqi~mct_BRl0u
        LibVars.medicationlistlib.tempDict = (com.fc.JavaScriptDistLib.JSON.parseJSONData('["C COMPLEX","C HIST","C TAN D","C THERAPY NIGHT","C TUSSIN","C-500","C-500-GR","C-ACEROLA-ROSE HIPS","C-HIST","C-HIST-SR","C-PHED DM","C-PHED DPD TANN","C-PHEN DM","C-TAN D","C-TANNA 12","C-TIME","C.P. CARBINOXAMINE PSEUDOEPHEDRINE COMBINATION","C.P.M.","CA-REZZ","CABOMETYX","CADUET","CAFATINE","CAFATINE PB","CAFCIT","CAFERGOT","CAFETRATE","CAFFEDRINE","CAFGESIC","CAKNEMYCIN","CAL GEST","CAL-GEST","CAL-QUICK","CALA-GEN","CALACLEAR","CALADRYL","CALADRYL CLEAR","CALADRYL FOR KIDS","CALAFOL RX","CALAGEL","CALAGESIC","CALAMINE PLAIN","CALAN","CALAN SR","CALAZIME","CALAZIME SKIN PROTECTANT","CALCARB","CALCARB WITH D","CALCARB WITH D AND SOY","CALCET","CALCI MIX","CALCI-CHEW","CALCI-MIX","CALCIDOL","CALCIDRINE","CALCIJEX","CALCIMAR","CALCIONATE","CALCIQUID","CALCITAB","CALCITRENE","CALCIUM 600","CALCIUM ANTACID","CALCIUM ANTACID EXTRA STRENGTH","CALCIUM ANTACID ULTRA STRENGTH","CALCIUM CONCENTRATE","CALCIUM DISODIUM VERSENATE","CALCIUM LIQUID SOFTGEL","CALDECORT","CALDEROL","CALDESENE","CALDESENE POWDER","CALDESENE W TALC","CALDOLOR","CALDYPHEN","CALGON VESTA","CALGONATE","CALLERGY","CALLERGY CLEAR","CALM-AID","CALMODROX","CALMOL","CALMOL-4","CALMOSEPTINE","CALMOSEPTINE OINTMENT","CALOMIST","CALPHRON","CALQUENCE","CALTRATE","CALTRATE 600 + IRON & VITAMIN D","CALTRATE 600 + VITAMIN D","CALTRATE 600 PLUS D","CALTRATE 600 WITH D PLUS SOY","CALTRATE COLON HEALTH","CALTRATE GUMMY BITES","CALTRATE PLUS D","CALTRO","CALTRO WITH VITAMIN D","CALUBE","CALVITE P&D","CAMBIA","CAMBRIDGE EPINEPHRINE LIDOCAINE COMBINATION","CAMBRIDGE MEPIVACAINE","CAMILA","CAMILA 28 DAY","CAMPATH","CAMPHO-PHENIQUE","CAMPHO-PHENIQUE MAXIMUM STRENGTH","CAMPHOR ICE","CAMPRAL","CAMPRAL DOSE PAK","CAMPTO","CAMPTOSAR","CAMRESE 91 DAY","CAMRESELO 91 DAY","CANASA","CANCIDAS","CANGES HC","CANGES XP","CANK-OXIDE","CANKAID","CANOXICABS","CANTIL","CAP-PROFEN","CAPACET","CAPASTAT","CAPEX","CAPITAL AND CODEINE","CAPITAL WITH CODEINE","CAPITROL","CAPMIST DM","CAPOTEN","CAPOZIDE","CAPOZIDE 2525","CAPOZIDE 5015","CAPRELSA","CAPSIN","CAPZASIN QUICK RELIEF","CAPZASIN-HP","CAPZASIN-HP ARTHRITIS FORMULA","CAPZASIN-P","CARAC","CARAFATE","CARB PSE 12 DM","CARB PSEUDO-TAN","CARB-O-LAC","CARBA XP","CARBAGLU","CARBAMIDE PEROXIDE OTIC","CARBAPHEN 12","CARBAPHEN CH","CARBAPHEN PED CH","CARBASTAT","CARBATAB","CARBATAB 12","CARBATROL","CARBATUSS SYRUP","CARBATUSS-12","CARBATUSS-CL","CARBAXEF-DM","CARBAXEFED RF","CARBETAPLEX","CARBEX","CARBIC D","CARBINOX","CARBINOX PSEUD AND DM RF","CARBISET","CARBISET TR","CARBOCAINE","CARBOCAINE HCL","CARBOCAINE WITH NEO-COBEFRIN","CARBOCAINE WITH NEOCOBEFRIN","CARBODEC","CARBODEC 0.812","CARBODEC 225","CARBODEC DM","CARBODEC TR","CARBODEC-DM","CARBODEX DM","CARBODEX DM DROPS","CARBOFED","CARBOFED DM","CARBOFED DM DROPS","CARBOFED DM SYRUP","CARBOFED DMC","CARBOGEN","CARBOPTIC","CARBOXINE","CARBOXINE D","CARBOXINE DM","CARBOXINE-PSE","CARDEC","CARDEC DM","CARDEC DM DROPS","CARDEC DM DROPS REFORMULATED MAR 2011","CARDEC DM REFORMULATED JUN 2007","CARDEC DROPS","CARDEC DROPS REFORMULATED JUN 2007","CARDEC S","CARDEC SYRUP","CARDEC TR","CARDENE","CARDENE IV","CARDENE SR","CARDIOQUIN","CARDIOXANE","CARDIZEM","CARDIZEM CD","CARDIZEM LA","CARDIZEM LYO-JECT","CARDIZEM MONOVIAL","CARDIZEM SR","CARDOXIN","CARDURA","CARE-CREME","CARICIA CARE","CARIMUNE","CARIZEM","CARLES","CARLESTA","CARLSON D","CARMEX ORIGINAL BALM","CARMOL","CARMOL 10","CARMOL HC","CARMOL SCALP","CARMOL SCALP TREATMENT KIT","CARMOL-20","CARMOL-40","CARNEXIV","CARNI Q-GEL FORTE","CARNITOR","CAROGUARD","CAROID LAXATIVE","CAROSPIR","CAROZIDE","CARTERS LITTLE PILLS","CARTIA","CARTIA XT","CARTICEL","CARTILADE","CARTROL","CASODEX","CASTELLANI PAINT","CASTELLANI PAINT COLORLESS","CASTIVA COOLING","CASTIVA WARMING","CATAFLAM","CATAPRES","CATAPRES-TTS-1","CATAPRES-TTS-2","CATAPRES-TTS-3","CATARASE","CATHFLO ACTIVASE","CATULAC","CAVERJECT","CAVILON DURABLE BARRIER CREAM","CAVILON EMOLLIENT","CAVILON ONE-STEP","CAVIRINSE","CAYSTON","CAZIANT 28 DAY","CECLOR","CECLOR CD","CECLOR PULVULES","CECON","CEDAX","CEE-500","CEENU","CEFACLOR CD","CEFACLOR ER","CEFADROXIL MONOHYDATE","CEFADYL","CEFAZOLIN SODIUM NOVAPLUS","CEFIZOX","CEFOBID","CEFOTAN","CEFTIN","CEFZIL","CELEBREX","CELESTONE","CELESTONE PHOSPHATE","CELESTONE SOLUSPAN","CELEXA","CELL-U-JEC","CELLCEPT","CELLUGEL","CELONTIN","CEM-UREA","CEMILL 1000","CEMILL 500","CENA K","CENAFED","CENESTIN","CENOLATE","CENTANY","CENTERGY","CENTERGY DM","CENTRUM PRO NUTRIENTS","CENTRUM SINGLES-VITAMIN C","CENTUSSIN","CEO-TWO","CEPACOL","CEPACOL ANTIBACTERIAL MOUTHWASH","CEPACOL DUAL RELIEF","CEPACOL SENSATIONS COOLING","CEPACOL SORE THROAT","CEPACOL SORE THROAT FROM POST NASAL DRIP","CEPACOL SORE THROAT PAIN RELIEF","CEPACOL SORE THROAT PLUS COATING","CEPACOL SORE THROAT PLUS COUGH","CEPACOL SORE THROAT SPRAY","CEPACOL SPRAY","CEPASTAT","CEPASTAT SORE THROAT & COUGH","CEPHADYN","CEPHALEXIM","CEPHULAC","CEPROTIN","CEPTAZ","CERASPORT","CERAXON","CERDELGA","CEREBYX","CEREDASE","CEREFLIN","CEREFOLIN NAC","CEREZYME","CERISA WASH","CERON","CERON-DM","CEROVEL","CERTIVA","CERTUSS","CERTUSS D","CERTUSS-C","CERUMENEX","CERVARIX","CERVICAL AMINO ACID","CERVIDIL","CESAMET","CESIA 28 DAY","CETA PLUS","CETACAINE","CETACORT","CETADERM","CETAFEN","CETAMIDE","CETAPRED","CETAZONE T","CETIRI-D","CETRAXAL","CETROTIDE","CETYLEV","CEVI-BID","CHANTIX","CHANTIX CONTINUING MONTHS OF THERAPY","CHANTIX FIRST MONTH OF THERAPY","CHAR-FLO","CHAR-FLO WITH SORBITOL","CHARCOAID","CHARCOAID 2000","CHARCOAID-G","CHARCOAL PLUS DS","CHARCOCAPS","CHARDONNA-2","CHATEAL 28 DAY","CHEM-SOL","CHEMDAL","CHEMDAL EXPECTORANT","CHEMDAL HD","CHEMDAL HD PLUS","CHEMDEC","CHEMDEC 0.812","CHEMDEC 225","CHEMDEC DM","CHEMET","CHEMTUSSIN HC","CHENODAL","CHERACOL D","CHERACOL D COUGH","CHERACOL PLUS","CHERACOL SORE THROAT","CHERACOL WITH CODEINE","CHERACOL-D","CHERATUSSIN","CHERATUSSIN AC","CHERATUSSIN DAC","CHEW Q","CHIBROXIN","CHILD ALLERGY","CHILD APAP","CHILD NO-ASPIRIN","CHILD NON-ASPIRIN","CHILD PAIN","CHILD PAIN RELIEVER","CHILD TYLENOL COLD MULTI-SYMPTOM PLUS COUGH","CHILDREN\'S MUCINEX MULTI-SYMPTOM COLD AND FEVER","CHILDREN\'S NYQUIL COLD AND COUGH","CHILDRENS ELIXSURE","CHILDRENS FORMULA","CHILDRENS GRAPE ALLERGY","CHILDRENS IBUPROFEN BERRY","CHILDRENS IBUPROFEN COLD","CHILDRENS MULTI-SYMPTOM PLUS COUGH","CHILDRENS NIGHT TIME","CHILDRENS NYQUIL","CHILDRENS PANADOL","CHILDRENS TYLENOL","CHILDRENS TYLENOL ALLERGY-D","CHILDRENS TYLENOL COLD","CHILDRENS TYLENOL COLD MULTI-SYMPTOM","CHILDRENS TYLENOL COLD PLUS COUGH","CHILDRENS TYLENOL FLU","CHILDRENS TYLENOL PLUS COLD & ALLERGY","CHILDRENS TYLENOL PLUS COLD AND ALLERGY","CHIRHOSTIM","CHIROCAINE","CHLO TUSS","CHLO-AMINE","CHLOR TRIMETON ALLERGY DECONGESTANT","CHLOR TRIMETON ALLERGY DECONGESTANT SR","CHLOR TRIMETON NASAL DECONGESTANT","CHLOR-AL REL","CHLOR-MAL","CHLOR-MES D","CHLOR-PHEN","CHLOR-PHENIT","CHLOR-TAN A 12","CHLOR-TRIMETON","CHLOR-TRIMETON ALLERGY SR","CHLOR-TRIMETON NASAL DECONGESTANT","CHLOR-TRIMETON SINUS","CHLORACOL","CHLORAFED","CHLORAFED H.S. TIMECELLES","CHLORAFED TIMECELLES","CHLORAPREP ONE-STEP","CHLORASEPTIC","CHLORASEPTIC LIQUID","CHLORASEPTIC MAX SPRAY","CHLORASEPTIC SORE THROAT","CHLORASEPTIC SORE THROAT + COUGH","CHLORASEPTIC SPRAY","CHLORDEX GP","CHLORDINIUM","CHLORDRINE","CHLORDRINE SR","CHLORESIUM","CHLORESIUM TOPICAL","CHLOREX A","CHLOREX A12","CHLORGEST HD","CHLORNADE","CHLOROMAG","CHLOROMYCETIN","CHLOROMYCETIN OPHTHALMIC","CHLOROMYCETIN OTIC","CHLOROMYCETIN SODIUM SUCCINATE","CHLOROPTIC","CHLOROPTIC S.O.P.","CHLOROSTAT","CHLOROSTAT 4","CHLORPHEDRIN","CHLORPHEDRIN SR","CHLORPHEN","CHLORPHEN HD","CHLORPRAM","CHLORTAN","CHLORTAN D","CHLORTOX","CHOCOLAXED","CHOLAC","CHOLAN","CHOLAN-HMB","CHOLBAM","CHOLEDYL","CHOLEDYL-SA","CHOLESTIN","CHOLOGRAFIN MEGLUMINE","CHOLOXIN","CHOOZ","CHOREX","CHORIGON","CHORON","CHORON-10","CHORPROMAZINE","CHROMA-PAK","CHROMELIN","CHROMIUM GTF","CHRONULAC","CHYMODIACTIN","CIALIS","CICLODAN","CIDAFLEX","CIDALEAZE","CILOXAN","CIMDUO","CIMZIA","CINALOG","CINOBAC","CINOLAR","CINOLONE","CINQAIR","CINRYZE","CINVANTI","CIPRO","CIPRO HC","CIPRO I.V.","CIPRO XR","CIPRODEX","CIPROFLAXACIN","CISPLATINCYCLOPHOSPHAMIDEVINDESINE PROTOCOL","CIT CALCIUM","CITANEST","CITANEST FORTE","CITANEST HCL PLAIN","CITRA PH","CITRACAL","CITRACAL + D","CITRACAL CAPLETS PLUS D","CITRACAL CREAMY BITES","CITRACAL MAXIMUM + D","CITRACAL PETITES","CITRACAL REGULAR + D","CITRANATAL B-CALM KIT","CITRICAL","CITRICAL PLUS D","CITROLITH","CITROMA","CITRUCEL","CITRUS CALCIUM PLUS D","CLADRIBINE NOVAPLUS","CLAFORAN","CLAIRTE","CLARAVIS","CLARIFOAM","CLARIFOAM CLEAR","CLARIFOAM FAST","CLARIFOAM PURE","CLARINE","CLARINEX","CLARINEX-D","CLARIPEL","CLARIS","CLARISPRAY","CLARITIN","CLARITIN EYE","CLARITIN REDITAB","CLARITIN-D","CLARITIN-D 24 HOUR","CLARUS","CLEAN AND CLEAR","CLEAN AND CLEAR ADVANTAGE","CLEAN AND CLEAR ADVANTAGE ACNE","CLEAN AND CLEAR ADVANTAGE ACNE CLEANSER","CLEAN AND CLEAR ADVANTAGE ACNE CONTROL MOISTURIZER","CLEAN AND CLEAR ADVANTAGE MARK ERASING SPOT TREATMENT","CLEAN AND CLEAR ADVANTAGE MARK TREATMENT","CLEAN AND CLEAR ADVANTAGE OIL ABSORBING CLEANSER","CLEAN AND CLEAR ADVANTAGE POPPED PIMPLE RELIEF","CLEAN AND CLEAR BLACKHEAD ERASER","CLEAN AND CLEAR DEEP CLEANING","CLEAN AND CLEAR TRIPLE CLEAR","CLEANSE & TREAT","CLEANSE AND TREAT","CLEANZING!","CLEAR AWAY","CLEAR BY DESIGN","CLEAR EYES","CLEAR EYES ACR","CLEAR EYES COMPLETE","CLEAR EYES COOLING COMFORT","CLEAR EYES COOLING COMFORT REDNESS RELIEF","CLEAR EYES FOR DRY EYES PLUS REDNESS RELIEF","CLEAR EYES MAX ITCHY EYE RELIEF","CLEAR EYES NATURAL TEARS","CLEAR EYES PURE RELIEF MULTI-SYMPTOM","CLEAR EYES REDNESS RELIEF","CLEAR EYES REDNESS RELIEF REFORMULATED NOV 2011","CLEAR EYES TEARS","CLEAR EYES TEARS AND ITCHY EYE RELIEF","CLEAR EYES TEARS PLUS REDNESS RELIEF","CLEAR EYES TRIPLE ACTION RELIEF","CLEAR-ATADINE","CLEAR-ATADINE-D","CLEARASIL","CLEARASIL ACNE CONTROL","CLEARASIL DAILY CLEAR","CLEARASIL DAILY CLEAR ADULT","CLEARASIL DAILY CLEAR CLEAR SKIN","CLEARASIL DAILY CLEAR HYDRATING LOTION","CLEARCANAL","CLEARLAX","CLEARPLEX","CLEARSKIN","CLEARTIME INDOOR & OUTDOOR ALLERGIES","CLEARTUSS DH","CLEERAVUE-M","CLEEVEC","CLENIA","CLENIA EMOLLIENT","CLENIA FOAMING WASH","CLENPIQ","CLENZ-LYTE","CLEOCIN","CLEOCIN HCL","CLEOCIN OVULES","CLEOCIN PEDIATRIC","CLEOCIN T","CLEOCIN VAGINAL","CLEOCIN-T","CLEVIPREX","CLIMARA","CLIMARA PRO","CLINAC","CLINAC BPO","CLINACORT","CLINAGEN LA 40","CLINALOG","CLINDA-DERM","CLINDACIN","CLINDAGEL","CLINDAMAX","CLINDAMYLIN","CLINDAREACH","CLINDESSE","CLINDETS","CLINDEX","CLINIDINE","CLINIMIX 2.755","CLINIMIX 4.2510","CLINIMIX 4.2520","CLINIMIX 4.2525","CLINIMIX 4.255","CLINIMIX 515","CLINIMIX 520","CLINIMIX 525","CLINIMIX E 2.7510","CLINIMIX E 2.755","CLINIMIX E 4.2510","CLINIMIX E 4.2525","CLINIMIX E 4.255","CLINIMIX E 515","CLINIMIX E 520","CLINIMIX E 525","CLINISOL 15","CLINOLIPID","CLINORIL","CLINPRO 5000","CLOBETA PLUS","CLOBETA PLUS OINTMENT","CLOBEVATE","CLOBEX","CLODAN","CLODERM","CLOFERA","CLOLAR","CLOMID","CLONODINE","CLORAZEPAM","CLORFED","CLORFED II","CLOROQUINE","CLOROTEKAL","CLORPACTIN WCS-90","CLORPRES","CLOTRIMAZOLE-3","CLOTRIMAZOLE-7","CLOVERINE","CLOXAPEN","CLOZARIL","CNJ-016","CNL8","CO-APAP","CO-GESIC","CO-HISTINE","CO-HISTINE DH","CO-HISTINE EXPECTORANT","CO-LAV","CO-Q10","CO-TUSS V EXPECTORANT","CO-TUSSIN","COAGADEX","COARTEM","COARTEM 3-DAY TREATMENT","COATED ASPIRIN","COBOLIN-M","COCET","CODAFED","CODAFED PEDIATRIC","CODAFEN","CODAHISTINE","CODAHISTINE DH","CODAHISTINE EXPECTORANT","CODAHISTINE-DH","CODAL DH","CODAL-DH SYRUP","CODAL-DM SYRUP","CODAMINE","CODAMINE PEDIATRIC","CODAR AR","CODAR D","CODAR GF","CODEGEST","CODEGEST EXPECTORANT","CODEHIST DH","CODEPREX","CODICLEAR DH","CODIMAL","CODIMAL A","CODIMAL DH","CODIMAL DH REFORMULATED OCT 2007","CODIMAL DM","CODIMAL PH","CODITUSS DH","CODITUSS DM","CODOTUSS","CODRIX","CODRIX 50015","CODRIX 50030","CODRIX 50060","COFATRIM FORT","COFEX-DM","COGENTIN","COGNEX","COLACE","COLACE GLYCERIN SUPPOSITORIES","COLACE MICRO-ENEMA","COLACE WSENNOSIDES","COLAX","COLAX REFORMULATED MAR 2007","COLAZAL","COLCRYS","COLD & ALLERGY SR","COLD AND ALLERGY","COLD AND ALLERGY DM","COLD AND COUGH","COLD CAPSULES","COLD COUGH PD","COLD RELIEF","COLD SPOT","COLD SYMPTOM RELIEF","COLD-COUGH XP","COLD-EEZE","COLD-GEST","COLDAMINE","COLDCOUGH","COLDCOUGH HC","COLDCOUGH HCM","COLDCOUGH PD","COLDCOUGH XP","COLDEC","COLDEC 460","COLDEC 8120","COLDEC 890","COLDEC D","COLDEC DM","COLDEC DS","COLDEC-TR","COLDEX","COLDLOC","COLDLOC-LA","COLDMIST","COLDMIST DM","COLDMIST JR","COLDMIST S","COLDTUSS DR","COLESTID","COLGATE","COLGATE TOTAL WHITENING","COLIC DROPS","COLICON","COLIDROPS","COLIDROPS PEDIATRIC","COLLYRIUM FRESH","COLOCORT","COLREX","COLY MYCIN M","COLY MYCIN S","COLYTE","COLYTE WITH FLAVOR PACKS","COLYTROL","COMBIFLEX","COMBIFLEX ES","COMBIGAN","COMBIPATCH","COMBIPRES","COMBIPRES 0.115","COMBIPRES 0.215","COMBIPRES 0.315","COMBIVENT","COMBIVENT 20100","COMBIVIR","COMBUNOX","COMETRIQ","COMETRIQ 100 MG DAILY DOSE CARTON","COMETRIQ 140 MG DAILY DOSE CARTON","COMETRIQ 60 MG DAILY DOSE CARTON","COMFORT CAINE","COMFORT GEL","COMFORT SHIELD","COMFORTPAK","COMHIST","COMHIST LA","COMMIT LOZENGE","COMPAZINE","COMPAZINE SPANSULE CAPSULES","COMPLERA","COMPLETE ALLERGY","COMPLETE ALLERGY RELIEF","COMPLETE COLD MEDICINE","COMPLEX B","COMPOUND 347","COMPOZ","COMPOZ NIGHTTIME SLEEP AID","COMPRO","COMPTAN","COMTAN","COMTREX ALLERGY SINUS","COMTREX ALLERGY SINUS MAXIMUM STRENGTH","COMTREX ALLERGY SINUS NIGHT AND DAY","COMTREX COLD AND COUGH DAY NIGHT","COMTREX COLD AND COUGH NIGHTTIME","COMTREX COLD AND COUGH NON DROWSY","COMTREX COLD AND FLU MAXIMUM STRENGTH","COMTREX COLD AND FLU MAXIMUM STRENGTH LIQUID","COMTREX COLD AND FLU MAXIMUM STRENGTH REFORMULATED AUG 2006","COMTREX DEEP CHEST COLD NON DROWSY","COMTREX FLU THERAPY DAY AND NIGHT","COMTREX MAXIMUM STRENGTH COLD RELIEF","COMTREX NIGHTTIME ACUTE HEAD COLD","COMTREX NON DROWSY LIQUIGEL","COMTREX NON-DROWSY","COMTREX SEVERE COLD AND SINUS DAY AND NIGHT","COMTREX SORE THROAT RELIEF","COMTUSSIN HC","COMVAX","CONACETOL","CONAL","CONATE","CONCENTRATED FIBER","CONCENTRATED MILK OF MAGNESIA-CASCARA","CONCENTRATED PHILLIPS\' MILK OF MAGNESIA","CONCEPT OB","CONCEPTROL","CONCERTA","CONDASIN","CONDRIN","CONDYLOX","CONEX","CONEX WITH CODEINE","CONGESPIRIN","CONGESPIRIN ASPIRIN FREE","CONGESS","CONGESS JR.","CONGESS SR","CONGESTA DM","CONGESTAC","CONGESTACLEAR","CONGESTACLEAR COLD & ALLERGY","CONGESTANT","CONGESTANT D","CONPEC DM","CONRAY","CONRAY-30","CONRAY-400","CONRAY-43","CONSENSI","CONSTILAC","CONSTULOSE","CONTAC 12 HOUR","CONTAC 12 HOUR ALLERGY","CONTAC COLD","CONTAC COLD AND FLU COOLING NIGHT","CONTAC COLD AND FLU DAY AND NIGHT","CONTAC COLD AND FLU MAXIMUM STRENGTH","CONTAC COLD AND FLU NON DROWSY MAXIMUM STRENGTH","CONTAC DAY AND NIGHT ALLERGY SINUS","CONTAC SEVERE COLD AND FLU MAXIMUM STENGTH","CONTAC SEVERE COLD AND FLU NON DROWSY","CONTAC SINUS","CONTE-PAK-4","CONTRAGESIC","CONTRAVE","CONTROL RX","CONZIP","COOL BOTTOMS","COPAXONE","COPD PHARMACOLOGIC SUBSTANCE","COPEGUS","COPHENE B","COPHENE-X","COPHENE-X-P","COPHENE-X-P (REVISED)","CORAZ","CORAZ LOTION KIT","CORDARONE","CORDARONE I.V.","CORDON D","CORDON DM","CORDRAN","CORDRAN SP","CORDRON HC","CORDRON NR","CORDRON-12 D","CORDRON-12 DM","CORDRON-D","CORDRON-D NR","CORDRON-DM","CORDRON-DM NR","CORDRON-HC NR","COREG","CORFEN-DM","CORGARD","CORICIDIN","CORICIDIN D","CORICIDIN D COLD","CORICIDIN HBP CHEST CONGESTION","CORICIDIN HBP COLD & FLU","CORICIDIN HBP COUGH AND COLD","CORICIDIN HBP DAY & NIGHT MULTI-SYMPTOM COLD","CORICIDIN HBP FLU MAXIMUM STRENGTH","CORICIDIN HBP NIGHTTIME MULTI-SYMPTOM COLD","CORICIDIN HBP NIGHTTIME MULTI-SYMPTOM COLD REFORMULATED FEB 2013","CORICIDIN NIGHT TIME COLD RELIEF","CORIFACT","CORLANOR","CORLOPAM","CORMAX","CORPHEDRA","CORQUE","CORRECT (NEW FORMULA)","CORRECTIVE","CORRECTOL LAXATIVE","CORRECTOL LAXATIVE REFORMULATED FEB 2008","CORRECTOL SOFTGEL EXTRA GENTLE","CORT-BIOTIC","CORT-DOME","CORT-DOME HIGH POTENCY","CORT-K","CORTAID","CORTAID POISON IVY CARE","CORTALO","CORTAMOX","CORTANE","CORTANE B-OTIC","CORTANE-B","CORTANE-B AQUEOUS","CORTASTAT","CORTASTAT 10","CORTASTAT LA","CORTATRIGEN","CORTEF","CORTENEMA","CORTIC","CORTIC-ND","CORTICAINE","CORTICOOL","CORTICREME","CORTIFOAM","CORTILONE","CORTINIDE","CORTISPORIN","CORTISPORIN OINTMENT","CORTISPORIN-TC","CORTIZONE","CORTIZONE-10","CORTIZONE-10 ANAL ITCH CREAM","CORTIZONE-5","CORTOMYCIN","CORTOMYCIN OINTMENT","CORTONE ACETATE","CORTRATIGEN","CORTROSYN","CORVERT","CORZALL","CORZALL PLUS","CORZALL-PE","CORZIDE","COSAMIN","COSAMIN DS","COSENTYX","COSMEGEN","COSOPT","COTAB A","COTAB AX","COTABFLU","COTACORT","COTAZYM-S","COTAZYME","COTELLIC","COTEMPLA","COTOFED","COTOLONE","COTRIM","COTRIM PEDIATRIC","COTUSS-V","COUGH CONTROL","COUGH CONTROL DM","COUGH FORMULA","COUGH FORMULA M MULTI-SYMPTOM","COUGH FORMULA-DM","COUGH SYRUP ORANGE","COUGH-X COUGH RELIEF","COUGHTUSS","COUMADIN","COVACE","COVANGESIC","COVARYX","COVERA","COVERA-HS","COZAAR","CP DEC","CP DEC DM","CP ORAL","CP TANNIC","CP-2","CPM PSEH PD","CR-GTF","CRANTEX","CRANTEX ER","CRANTEX HC","CRANTEX LA","CREO-TERPIN","CREOMULSION","CREOMULSION COUGHCOLDALLERGY","CREOMULSION PEDIATRIC","CREON","CREON 10","CREON 20","CREON 5","CRESEMBA","CREST MOUTHWASH","CRESTOR","CRESYLATE","CRINONE","CRITIC-AID","CRITIC-AID CLEAR","CRITIC-AID CLEAR MOISTURE","CRITIC-AID SKIN","CRIXIVAN","CRM CHROMIUM PICOLINATE","CROFAB","CROLOM","CROSEHIPS TIME RELEASE","CROTAN","CRUEX","CRUEX ANTIFUNGAL","CRUEX POWDER","CRUEX POWDER SPRAY","CRUEX PRESCRIPTION STRENGTH","CRYSELLE","CRYSELLE 28","CRYSTAMINE","CRYSTI-12","CRYSTODIGIN","CRYSVITA","CTD ASPIRIN","CTS","CTX4 GEL","CUBICIN","CULTURELLE","CULTURELLE DIGESTIVE HEALTH","CUPRIMINE","CURALER","CURASORE","CURITY ALCOHOL PREPS","CUROSURF","CURRETAB","CUTAR","CUTEMOL","CUTIVATE","CUVITRU","CUVPOSA","CYANOJECT","CYANOKIT","CYCLAFEM 135 28 DAY","CYCLAFEM 777 28 DAY","CYCLESSA 28 DAY","CYCLIVERT","CYCLOCORT","CYCLOGYL","CYCLOMYDRIL","CYCLOPHOSPHOMIDE","CYCLOSET","CYCLOSPASMOL","CYCOFED","CYCOFED EXPECTORANT","CYCOFED PEDIATRIC EXPECTORANT","CYCRIN","CYDEC","CYDEC-DM","CYDEC-DM DROPS","CYKLOKAPRON","CYLATE","CYLERT","CYMBALTA","CYNDAL","CYNDAL EXPECTORANT","CYNDAL HD","CYNTEX","CYNTEX LIQUID","CYOMIN","CYONANZ 28 DAY","CYOTIC","CYPEX","CYRAMZA","CYRED 28 DAY","CYSTADANE","CYSTAGON","CYSTARAN","CYSTEMMS-V","CYSTEX","CYSTO-CONRAY","CYSTO-CONRAY II","CYSTOGRAFIN","CYSTOGRAFIN-DILUTE","CYSTOSPAZ","CYSTOSPAZ-M","CYTOGAM","CYTOMEL","CYTOTEC","CYTOVENE","CYTOXAN","CYTRA 2","CYTRA-3","CYTRA-K","CYTUSS HC","CYTUSS-HC NR"]'));
        // Block#: jp-!,=XcU0iS2U4uqqL+
        com.fc.JavaScriptDistLib.Dictionary.setDictValue(LibVars.medicationlistlib.medDict, 'C', LibVars.medicationlistlib.tempDict);
        // Block#: @4tI(bxEhsSCU8s/ayl3
        LibVars.medicationlistlib.tempDict = (com.fc.JavaScriptDistLib.JSON.parseJSONData('["D HIST D","D-AMINE-SR","D-CAINE","D-FEDA II","D-G","D-PHEN","D-S CAPS","D-TAL","D-TANN","D-TANN AT","D-TANN CHEWABLE","D-TANN CT","D-TANN DM","D-TANN HC","D-VAL","D-VERT","D-VI-SOL","D.A. II","D3 DOTS","DACABAZINE","DACEX A","DACEX DM","DACEX PE","DACOGEN","DAILYHIST","DAILYHIST-1","DAILYHIST-D","DAIRY EASE","DAIVOBET","DAKIN\'S SOLUTION","DAKLINZA","DALALONE","DALALONE D.P.","DALALONE L.A.","DALGAN","DALIRESP","DALLERGY","DALLERGY DM","DALLERGY DROPS","DALLERGY PSE","DALLERGY REFORMULATED MAR 2014","DALLERGY REFORMULATED NOV 2011","DALLERGY SR","DALLERGY-JR","DALLERGY-JR REFORMULATED FEB 2009","DALMANE","DALVANCE","DAMASON-P","DANDREX","DANDRUFF CONTROL","DANDRUFF F-O","DANDRUFF N-D","DANOCRINE","DANTRIUM","DAPTACEL","DARANIDE","DARAPRIM","DARCALMA","DARPAZ","DARVOCET","DARVOCET A500","DARVOCET-N","DARVON","DARVON COMPOUND 32","DARVON COMPOUND-65","DARVON-N","DARZALEX","DASETTA 135 28 DAY","DASETTA 777 28 DAY","DAUNOXOME","DAWN ANTIBACTERIAL","DAXBIA","DAY TIME MULTI SYMPTOM","DAYHIST-1","DAYHIST-D","DAYPRO","DAYPRO ALTA","DAYQUIL","DAYQUIL & NYQUIL COLD & FLU LIQUICAPS 48 TOTAL","DAYQUIL ALLERGY","DAYQUIL AND NYQUIL SEVERE COLD & FLU","DAYQUIL COLD & FLU","DAYQUIL COLD & FLU RELIEF","DAYQUIL COUGH","DAYQUIL LIQUICAPNYQUIL LIQUID","DAYQUIL LIQUICAPS","DAYQUIL LIQUICAPS REFORMULATED APR 2009","DAYQUIL MUCUS CONTROL DM","DAYQUIL NON-DROWSY","DAYQUIL PRESSURE AND PAIN CAPLET","DAYQUIL SEVERE COLD & FLU","DAYQUIL SINEX","DAYQUIL SINUS","DAYQUIL SINUS PRESSURE AND CONGESTION","DAYQUILNYQUIL LIQUICAPS COMBO","DAYSEE 91 DAY","DAYTIME LIQUICAP","DAYTO-HIMBIN","DAYTRANA","DAZIDOX","DC-240","DDAVP","DDAVP NASAL","DDAVP RHINAL TUBE","DE-CHLOR DR","DE-CHLOR G","DE-CHLOR HC","DE-CHLOR HD","DE-CHLOR MR","DE-CHLOR NX","DE-SONE LA","DEBACTEROL","DEBLITANE 28 DAY","DEBROX","DEC CHLORPHEN","DEC CHLORPHEN DM","DECADRON","DECADRON 5-12","DECADRON DP 12 DAY","DECADRON DP 6 DAY","DECADRON PHOSPHATE","DECADRON WITH XYLOCAINE","DECADRON-LA","DECAHIST-DM","DECAJECT","DECAJECT-L.A.","DECALCITROL","DECAPEPTYL","DECARA","DECAVAC","DECHOLIN","DECLOMYCIN","DECO-D","DECOFED LIQUID","DECOHISTINE DH","DECOHISTINE EXPECTORANT","DECON DM","DECONAMINE","DECONAMINE CX","DECONAMINE SR","DECONEX","DECONEX DM","DECONGESTABS","DECONGESTANT ANTIHISTAMINE","DECONGESTANT COLD FORMULA","DECONGESTANT II","DECONGESTANT SR (GENEVA)","DECONGESTANT-SR","DECONGEX-3","DECONHIST","DECONHIST LA","DECONOMED S.R.","DECONOSAL DM","DECONSAL C","DECONSAL C EXPECTORANT","DECONSAL CT","DECONSAL DM","DECONSAL II","DECONSAL II REFORMULATED MAY 2007","DECONSAL L.A.","DECONSAL PEDIATRIC","DECOTUSS-HD","DEEP SEA","DEFEN-LA","DEFITELIO","DEGAS","DEGEN II","DEGEST","DEGEST 2","DEHISTINE","DEK QUIN","DEL-AQUA","DEL-BETA","DEL-MYCIN","DELATEST","DELATESTADIOL","DELATESTRYL","DELAZINC","DELCORT","DELESTROGEN","DELFEN","DELHISTINE D","DELHISTINE D PEDIATRIC","DELHISTINE D SR","DELHISTINE DM","DELONE","DELONIDE","DELOS","DELSYM","DELSYM ADULT NIGHT TIME MULTI-SYMPTOM","DELSYM CHILDREN\'S NIGHTTIME COUGH AND COLD","DELSYM CHILDREN\'S NIGHTTIME COUGH AND COLD REFORMULATED APR 2013","DELSYM COUGH PLUS CHEST CONGESTION DM","DELSYM COUGH PLUS COLD DAYTIME","DELSYM COUGH PLUS COLD NIGHT TIME","DELSYM COUGH PLUS SOOTHING ACTION","DELSYM COUGH RELIEF PLUS SOOTHING ACTION","DELSYM NIGHT TIME COUGH AND COLD","DELSYM NIGHT TIME COUGH AND COLD REFORMULATED JAN 2012","DELSYM NIGHT TIME MULTI-SYMPTOM","DELTA D3","DELTA TRITEX","DELTA-LUTIN","DELTA-TRITEX","DELTALIN","DELTAPLEX DM","DELTAPLEX HD","DELTASONE","DELYLA 28 DAY","DELZICOL","DEMADEX","DEMADEX I.V.","DEMAZIN","DEMEROL","DEMEROL HCL","DEMI-COF","DEMI-REGROTON","DEMIBID II","DEMSER","DEMULEN","DEMULEN 135 28 DAY","DEMULEN 150 21 DAY","DEMULEN 150 28 DAY","DENAVIR","DENAZE","DENDRACIN NEURODENDRAXCIN","DENDRID","DENOREX","DENOREX DRY SCALP","DENOREX EXTRA STRENGTH","DENOREX EXTRA STRENGTH REFORMULATED AUG 2012","DENOREX MEDICATED SHAMPOO AND CONDITIONER","DENT-O-KAIN","DENTA 5000 PLUS","DENTAGEL","DENTAL OXIDE","DENTAL RESOURCES PERIO MAINTENANCE RINSE","DENTAPAINE","DENTI-RINSE","DENTICARE","DENTICARE DENTI FOAM","DENTICARE DENTI FREEZE GEL","DENTICARE DENTI FREEZE OINTMENT","DENTICARE DENTI GEL","DENTICARE NEUTRAL","DENTICARE PRO GEL","DEP ANDROGYN","DEP GYNOGEN","DEP MEDALONE 80","DEPACON","DEPADE","DEPAKENE","DEPAKOTA","DEPAKOTE","DEPANDRATE","DEPANDRO 100","DEPEN","DEPLETITE","DEPLIN","DEPMEDALONE","DEPO-COBOLIN","DEPO-ESTRADIOL","DEPO-MEDROL","DEPO-PREDATE","DEPO-PROVERA","DEPO-SUBQ PROVERA","DEPO-SUBQ PROVERA 104","DEPO-TESTADIOL","DEPO-TESTOSTERONE","DEPOCYT","DEPODUR","DEPOJECT-80","DEPONIT","DEPOPRED","DEPOTEST","DEPOTESTOGEN","DEPRIZINE","DEPROIST","DEPROIST WITH CODEINE","DERIFIL","DERMA CIDOL","DERMA GRAN","DERMA GRAN SPRAY","DERMA NUMB","DERMA STAT","DERMA-PAX","DERMA-SMOOTHE FS","DERMACIN","DERMACORT","DERMAFIX","DERMAFLEX","DERMAFUNGAL","DERMAGESIC","DERMAGESIC ITCH RELIEF","DERMAGRAN","DERMALZONE","DERMAMYCIN","DERMAMYCIN ERYTHROMYCIN","DERMAPHOR","DERMAREST","DERMAREST ANTI-ITCH","DERMAREST DRICORT","DERMAREST DRICORT CREME PACK","DERMAREST ECZEMA","DERMAREST ECZEMA MEDICATED","DERMAREST ECZEMA MEDICATED MOISTURIZER","DERMAREST INSECT BITE SPRAY","DERMAREST PLUS ANTI-ITCH","DERMAREST POISON IVY","DERMAREST PSORIASIS","DERMAREST SKIN CORRECTING CREAM","DERMASARRA","DERMASEPTIN","DERMASORB AF","DERMASORB HC","DERMASORB TA","DERMASORB XM","DERMATOL 10","DERMATOP","DERMAXX","DERMAZENE","DERMAZINC","DERMOCAINE","DERMOL HC","DERMOLATE","DERMOPLAST","DERMOPLAST ANTIBACTERIAL","DERMOPLAST PAIN","DERMOTIC","DERMTEX HC","DERMUSPRAY","DESAL II","DESCOVY","DESENEX","DESENEX AF PRESCRIPTION STRENGTH","DESENEX CREAM","DESENEX FOOT","DESENEX JOCK ITCH","DESENEX MAX","DESENEX MAXIMUM","DESENEX POWDER","DESENEX PRESCRIPTION STRENGTH","DESENEX SPRAY","DESFERAL","DESIHIST SA","DESITIN","DESITIN CLEAR","DESITIN CREAMY DIAPER RASH OINTMENT","DESOGEN (CONTRACEPTIVE)","DESOGEN 28 DAY","DESONATE","DESONIL","DESOWEN","DESOXIMETASOL","DESOXYN","DESOXYN GRADUMET","DESPEC","DESPEC DM","DESPEC DM REFORMULATED SEP 2008","DESPEC DROPS","DESPEC DROPS GRAPE FLAVOR","DESPEC EDA","DESPEC EXP","DESPEC REFORMULATED JUN 2008","DESPEC REFORMULATED JUN 2015","DESPEC SR","DESPEC SR REFORMULATED SEP 2008","DESPEC TABLET","DESPEC-PDC","DESPEC-SF","DESQUAM","DESQUAM-E","DESQUAM-X","DESQUAM-X 10","DESQUAM-X 5","DESQUAM-X WASH","DESYREL","DESYREL DIVIDOSE","DETANE","DETROL","DETROL LA","DETUSSIN","DETUSSIN EXPECTORANT","DEVROM","DEWEES CARMINATIVE","DEX PC","DEX-TUSS","DEX-TUSS DM","DEX4","DEX4 VERTICAL GLUCOSE","DEXACEN-4","DEXACIDIN","DEXACORT PHOSPHATE IN RESPIHALER","DEXACORT PHOSPHATE IN TURBINAIRE","DEXACORT-LA","DEXACORTEN","DEXALL","DEXALONE","DEXAMETHASONE INTENSOL","DEXASOL","DEXASONE LA","DEXASPORIN","DEXATRIM","DEXATRIM CAFFEINE FREE","DEXATRIM PLUS VITAMIN C","DEXCON DM","DEXEDRINE","DEXEDRINE SPANSULE CAPSULES","DEXFERRUM","DEXILANT","DEXIUM","DEXMETHASONE","DEXODRYL","DEXOL","DEXONE","DEXPAK TAPERPAK 13 DAY","DEXPAK TAPERPAK 6 DAY","DEXPAK TAPERPAK JUNIOR 10 DAY","DEXPHEN M","DEXTROSE 5% AND ELECTROLYTE NO. 48","DEXTROSE AND ELECTROLYTE NO. 48","DEXTROSE AND ELECTROLYTE NO. 75","DEXTROSTAT","DEXYCU","DHE-45","DHS SALICYLIC ACID 3%","DHS TAR SHAMPOO","DHS ZINC","DHT INTENSOL","DI-ATRO","DI-DAK-SOL","DI-DELAMINE","DI-GEL","DI-GEL LEMON","DI-GEL MINT","DI-PHEN","DIABETA","DIABETIC CHOICE","DIABETIC DM","DIABETIC TUS WITH CODEINE","DIABETIC TUSS","DIABETIC TUSS DM MAXIMUM STRENGTH","DIABETIC TUSSIN","DIABETIC TUSSIN C","DIABETIC TUSSIN DM","DIABETIC TUSSIN EX","DIABETIC TUSSIN MUCUS RELIEF","DIABETIC TUSSIN NIGHT TIME FORMULA","DIABETIDERM ANTIFUNGAL","DIABETUSS","DIABINESE","DIADERM","DIAL ANTIBACTERIAL LIQUID","DIALOSE","DIALOSE PLUS","DIALUME","DIALYVITE 800","DIALYVITE 800 WITH IRON","DIALYVITE 800 WITH ZINC","DIALYVITE VITAMIN D3 MAX","DIAMODE","DIAMOX","DIAMOX SEQUELS","DIANEAL LOW CALCIUM 1.5","DIANEAL LOW CALCIUM 2.5","DIANEAL LOW CALCIUM 3.5","DIANEAL LOW CALCIUM 4.25","DIANEAL PD-21.5","DIANEAL PD-22.5","DIANEAL PD-24.25","DIAPER RELIEF","DIAQUA","DIAQUA-2","DIAR-AID","DIARRHEA AND CRAMP","DIASORB","DIASTAT","DIBENT","DIBENZYLINE","DIBROM","DIBROM SR","DIBROMM","DICAL CAPTABS","DICAL-D","DICALPHOS PLUS D","DICARBOSIL","DICEL","DICEL CD","DICEL CHEWABLE","DICEL DM","DICEL DM CHEWABLE","DICLEGIS","DICLOFENAL","DICLOXICILLIN","DICOMAL-DH","DICOMAL-PH","DICOPANOL","DICYCLOCOT","DICYLOMINE","DIDONE","DIDREX","DIDRONEL","DIDRONEL I.V. INFUSION","DIET AID","DIET CAPLETS","DIET X-STRENGTH","DIETRIM ES","DIFFERIN","DIFFUCAPS","DIFICID","DIFIL G","DIFIL G FORTE","DIFLUCAN","DIGEX","DIGIBIND","DIGIFAB","DIGIPEPSIN","DIGITEK","DIGOX","DIHISTINE","DIHISTINE DH","DIHISTINE EXPECTORANT","DIHISTINE EXPECTORANT WITH CODEINE","DIHYDRO-CP","DIHYDRO-GP","DILACOR","DILACOR XR","DILANTIN","DILATRATE","DILATRATE-SR","DILAUDID","DILAUDID COUGH","DILAUDID-HP","DILEX-G","DILITIAZEM","DILOCAINE","DILOR","DILT","DILT-XR","DILTIA","DILTIA XT","DILTZAC","DIMACOL","DIMAPHEN","DIMAPHEN DM","DIMAPHEN REFORMULATED DEC 2006","DIMAPHEN REFORMULATED JUN 2008","DIMAPHEN SR","DIME TIME","DIME TIME EXTENDED RELEASE","DIMETANE","DIMETANE DC","DIMETANE DECONGESTANT","DIMETANE DX","DIMETANE EXTENTAB","DIMETAPP","DIMETAPP ALLERGY LIQUIGEL","DIMETAPP ALLERGY SINUS","DIMETAPP CHILDREN\'S COLD AND ALLERGY","DIMETAPP CHILDREN\'S COLD AND ALLERGY REFORMULATED JAN 2011","DIMETAPP CHILDRENS COLD & FEVER","DIMETAPP CHILDRENS LONG ACTING COUGH PLUS COLD","DIMETAPP COLD","DIMETAPP COLD & COUGH","DIMETAPP COLD AND ALLERGY","DIMETAPP COLD AND CONGESTION","DIMETAPP COLD AND COUGH LIQUIGEL","DIMETAPP COLD AND FEVER","DIMETAPP COLD AND FLU","DIMETAPP COLD DROPS","DIMETAPP DECONGESTANT","DIMETAPP DECONGESTANT AND COUGH","DIMETAPP DM","DIMETAPP DM COLD & COUGH","DIMETAPP DM REFORMULATED FEB 2008","DIMETAPP INFANT DROPS","DIMETAPP LONG ACTING COUGH PLUS COLD","DIMETAPP MAXIMUM STRENGTH","DIMETAPP ND","DIMETAPP NIGHTTIME COLD & CONGESTION","DIMETAPP NIGHTTIME FLU","DIMETAPP NIGHTTIME FLU REFORMULATED SEP 2007","DIMETAPP SINUS","DIMETAPP TODDLER","DIMOTAL","DIOCTO","DIOCTO-C","DIOCTO-K","DIOCTO-K PLUS","DIOCTOCAL","DIOCTOLOSE","DIOCTOSOFTEZ","DIOCTYL","DIOCTYL CAL","DIOCTYL S.S.","DIOCTYN","DIOEZE","DIONEX","DIOVAL 40","DIOVAL XX","DIOVAN","DIOVAN HCT","DIPENTUM","DIPHEDRYL","DIPHEN","DIPHEN AF","DIPHEN COUGH","DIPHENADRYL","DIPHENDRYL","DIPHENHIST","DIPHENHIST CREAM","DIPHENHIST WITH ZINC","DIPHENHIST WITH ZINC ACETATE","DIPHENMAX","DIPHENTANN","DIPHENTANN D","DIPHENYL","DIPHENYLIN","DIPRIVAN","DIPRO","DIPROLENE","DIPROLENE AF","DIPROSONE","DIQUINOL","DISALCID","DISCOVISC","DISKET","DISKETS","DISOBROM","DISOPHROL","DISPAS","DISPERMOX","DITROPAN","DITROPAN XL","DITUSSIN-HC","DIUCARDIN","DIUPRES-250","DIUPRES-500","DIURESE","DIURETIC AP-ES","DIUREX","DIUREX AQUAGELS","DIUREX MAX","DIUREX WATER CAPS","DIURIL","DIURIL SODIUM","DIUTENSEN-R","DIVAPROEX","DIVIGEL","DIXAPHEDRINE","DIXLANTA","DM COLD AND COUGH","DM-PE-CHLOR","DMAX","DMAX DELICIOUS BERRY","DMAX PEDIATRIC","DOAK TAR","DOAK TAR OIL","DOAN\'S","DOANS","DOANS PILLS","DOANS PILLS EXTRA STRENGTH","DOANS PM","DOBUTREX","DOC-Q-LACE","DOC-Q-LAX","DOC-Q-LAX REFORMULATED SEP 2007","DOCAL","DOCEFREZ","DOCTAR","DOCTOR\'S CHOICE","DOCU","DOCU SOFT","DOCU SOFT PLUS","DOCUCAL","DOCUCAL-P","DOCULASE","DOCULAX","DOCULAX PLUS","DOCUSIL","DOCUSOFT S","DOCUSOFT S+","DOCUSOFT-S","DOCUSOL","DOCUSOL PLUS","DOFUS","DOK","DOK PLUS","DOK PLUS REFORMULATED JUL 2010","DOKSAKE","DOKTOSE PLUS","DOLACET","DOLAGESIC","DOLGESIC","DOLGIC","DOLGIC LQ","DOLGIC PLUS","DOLMAR","DOLOBID","DOLOGEN","DOLOGESIC","DOLOGESIC REFORMULATED JUN 2016","DOLONO","DOLONO INFANT","DOLOPHINE","DOLORAC","DOLORACIN","DOLORACIN WITH LIDOCAINE","DOLOREX FORTE","DOLOREX SOLUTION","DOLSED","DOMEBORO","DOMEBORO OTIC","DONATUSS DC","DONATUSS XP","DONATUSSIN","DONATUSSIN DC","DONATUSSIN DM","DONATUSSIN DM DROPS","DONATUSSIN DROPS","DONATUSSIN MAX","DONATUSSIN SYRUP","DONNAGEL","DONNAMAR","DONNAPHEN","DONNAPINE","DONNATAL","DONNATAL EXTENTABS","DONNAZYME","DOPAR","DOPRAM","DOPRAM-V","DOPTELET","DOPTELET 40 MG DAILY DOSE CARTON","DOPTELET 60 MG DAILY DOSE CARTON","DORAL","DORCOL CHILDREN\'S COUGH SYRUP","DORIBAX","DORMIN","DORYX","DOS","DOSAFLEX","DOSS-RELIEF","DOVARIL","DOVONEX","DOXAL","DOXIDAN","DOXIDAN REFORMULATED SEP 2008","DOXIDAN SOFTGEL LAXATIVE PLUS STOOL SOFTENER","DOXIL","DOXY","DOXY LEMMON","DOXY-CAPS","DOXY-D","DOXYCLINE","DOXYCYLINE","DR CALDWELL LAXATIVE","DR RA ECKSTEIN","DR SCHOLL\'S","DR SCHOLL\'S CLEAR AWAY WART REMOVER","DR. SCHOLL\'S","DR. SCHOLL\'S DISCS","DR. SCHOLL\'S POWDER SPRAY","DR. SCHOLL\'S SPORT SPRAY","DR. SCHOLLS","DR. SMITH\'S DIAPER OINTMENT","DR. SMITH\'S DIAPER RASH","DR. SMITH\'S RASH AND SKIN","DR. SMITH\'S RASH-N-ALL","DR.S CREAM","DRAGON","DRAMAMINE","DRAMAMINE II","DRAMAMINE LESS DROWSY","DRAMAMINE NON-DROWSY","DRAMOJECT","DRAWING SALVE","DRC","DREXOPHED","DREXOPHED SR","DRI-EAR","DRIMINATE","DRIMINATE II","DRISDOL","DRISTAN","DRISTAN 12-HOUR NASAL SPRAY","DRISTAN COLD","DRISTAN COLD MAXIMUM STRENGTH","DRISTAN COLD MULTI SYMPTOM","DRISTAN COLD MULTI SYMPTOM FORMULA","DRISTAN COLD NON-DROWSY","DRISTAN SINUS","DRITHO-SCALP","DRITHOCREME","DRITUSS DM","DRITUSS GF","DRITUSS HD","DRIXOMED","DRIXORAL","DRIXORAL COLD AND ALLERGY","DRIXORAL COUGH & CONGESTION LIQUID CAPS","DRIXORAL COUGHSORE THROAT","DRIXORAL NON-DROWSY","DRIXORAL SINUS","DRIZE","DRIZE-R","DROCON-CS","DRONTAL PLUS","DROTIC","DROTUSS CP","DROXIA","DRYPHEN","DRYSEC","DRYSOL","DSMC COMPOUND PLAIN","DSS PLUS","DUAC","DUADACIN","DUAVEE","DUETACT","DUEXIS","DULCOEASE","DULCOGEN","DULCOLAX","DULCOLAX BALANCE","DULCOLAX BOWEL PREP KIT","DULCOLAX STOOL SOFTENER","DULEEK-DP","DULERA","DULERA 1005","DULERA 2005","DUO CYP","DUO FUSION","DUO-CYP","DUO-MEDIHALER","DUO-SPAN","DUO-VIL 2-10","DUO-VIL 2-25","DUO-VIL 4-10","DUOCAINE","DUOCET","DUODOTE","DUOFILM","DUOFILM TRANSDERMAL","DUOGESIC","DUOHIST","DUOMAX","DUOMINE","DUONEB","DUOPA","DUOPLANT","DUOTAN","DUOTAN PD","DUOVISC KIT 0.350.4","DUOVISC KIT 0.50.55","DUOVISC VISCOELASTIC SYSTEM 0.350.4","DUOVISC VISCOELASTIC SYSTEM 0.50.55","DUPHALAC","DUPIVACAINE","DUPIXENT","DUR-TANN DM","DUR-TANN FORTE","DURA RON 0.812","DURA RON 225","DURA RON DM 0.8312","DURA RON DM 2425","DURA-DUMONE","DURA-ESTRIN","DURA-GEST","DURA-RON","DURA-RON DM","DURA-VENTA","DURA-VENTDA","DURABAC","DURABAC FORTE","DURABOLIN","DURABOLIN 50","DURACLON","DURACT","DURAD","DURADAL HD","DURADAL HD PLUS","DURADEX","DURADEX FORTE","DURADRIN","DURADRYL","DURADRYL JR","DURAFED","DURAFLOR","DURAFLU","DURAGAL-S","DURAGANIDIN","DURAGANIDIN NR","DURAGEN","DURAGESIC","DURAGESIS TDS","DURAHIST","DURAHIST D","DURAHISTINE DM","DURALEX","DURALONE","DURALUTIN","DURAMAX","DURAMIST PLUS","DURAMORPH","DURAMORPH PF","DURANEST","DURANEST 1.51:200000","DURANEST 11:200000","DURANEST-MPF","DURANEST-MPF-EPINEPHRINE","DURAPHEN","DURAPHEN 1000","DURAPHEN DM","DURAPHEN FORTE","DURAPHEN II","DURAPREP","DURASAL","DURASAL II","DURATAN DM","DURATAN FORTE","DURATAN PE","DURATEST","DURATESTRIN","DURATEX","DURATHATE","DURATHATE 200","DURATION","DURATUSS","DURATUSS A","DURATUSS AC 12","DURATUSS AMPM","DURATUSS CS","DURATUSS DA","DURATUSS DM","DURATUSS DM 12","DURATUSS G","DURATUSS GP","DURATUSS HD","DURATUSS HD 1002.530","DURATUSS HD 2252.510","DURATUSS PE","DURAVENT DM","DURAVENT PE","DURAXIN","DUREZOL","DURICEF","DURLAZA","DUTOPROL","DUTOPROL 10012.5","DUTOPROL 2512.5","DUTOPROL 5012.5","DUVOID","DUZALLO","DY-G","DYANAVEL","DYAZIDE","DYCILL","DYCLONE","DYFILIN GG","DYFLEX-G","DYGASE","DYLIX","DYLOJECT","DYMELOR","DYMENATE","DYMISTA","DYNA-HEX","DYNABAC","DYNACIN","DYNACIRC","DYNACIRC CR","DYNAFED","DYNAPEN","DYNASHIELD","DYNASHIELD ZO","DYNATUSS","DYNATUSS DF","DYNATUSS HC","DYNAXIN","DYNEX 12","DYNEX HD","DYNEX LA","DYNEX VR","DYPHYL GG","DYPHYLLIN-GG","DYPHYLLINE GG","DYPHYSIN","DYRENIUM","DYSPORT","DYTAN","DYTAN-AT","DYTAN-CD","DYTAN-CS","DYTAN-D","DYTAN-D CHEWABLE","DYTAN-DM","DYTAN-HC","DYTUSS"]'));
        // Block#: eWiEB$sdO6U@:4O2z`bl
        com.fc.JavaScriptDistLib.Dictionary.setDictValue(LibVars.medicationlistlib.medDict, 'D', LibVars.medicationlistlib.tempDict);
        // Block#: 4yzlARF;A54F2|W`](nS
        LibVars.medicationlistlib.tempDict = (com.fc.JavaScriptDistLib.JSON.parseJSONData('["E PHEROL","E-400 CLEAR","E-CAFF P-B","E-GEMS","E-MYCIN","E-PILO-1","E-PILO-2","E-PILO-4","E-PILO-6","E-R-O","E-R-O EAR-DRY","E-SOLVE 2","E.E.S.","E.E.S. 400 FILMTAB","E.E.S. GRANULES","E.E.S.-200","E.E.S.-400","E.N.T.","E.S.P.","EAR DROPS RX","EAR WAX REMOVAL TRADENAME","EAR-EZE","EARSOL-HC","EASPRIN","EASY GEL","ECHOTUSS HC","ECHOTUSS-HC","ECONOCHLOR","ECONOPRED","ECONOPRED PLUS","ECONTRA","ECOTRIN","ECOZA","ECPIRIN","ECZEMIN","ED A-CEPH","ED A-HIST","ED A-HIST DM","ED BRON G","ED CHLORPED","ED CYTE F","ED FLEX","ED SPAZ","ED-APAP","ED-IN-SOL","ED-MYCIN","ED-TLC","ED-TUSS HC","EDARBI","EDARBYCLOR","EDARBYCLOR 8012.5","EDECRIN","EDEX","EDEX REFILL","EDLUAR","EDURANT","EEMT","EEMT HS","EESCULA","EFASIN","EFASIN EXPECTORANT SF","EFASIN-HD","EFASIN-HD PLUS","EFFACLAR DUO","EFFECTIVE STRENGTH COUGH","EFFER-K","EFFEXOR","EFFEXOR XR","EFFEXOR XR STARTER KIT","EFFIENT","EFIDAC","EFIDAC-24 CHLORPHENIRAMINE","EFODINE","EFUDEX","EGRIFTA","ELA-MAX","ELA-MAX 5","ELA-MAX PLUS","ELAPRASE","ELAVIL","ELDEPRYL","ELDERTONIC","ELDOPAQUE","ELDOPAQUE FORTE","ELDOQUIN","ELDOQUIN FORTE","ELELYSO","ELENZA PATCH","ELEPSIA","ELESTAT","ELESTRIN","ELIDEL","ELIGARD","ELIGARD 22.5","ELIGARD 30","ELIGARD 45","ELIGARD 7.5","ELIMITE","ELINEST 28 DAY","ELIPHOS","ELIQUIS","ELIQUIS 30-DAY STARTER PACK","ELITEK","ELIXIOPHYLLIN","ELIXIOPHYLLIN GG","ELIXIRAL","ELIXOPHYLLIN","ELIXOPHYLLIN KI","ELIXOPHYLLIN SR","ELIXOPHYLLIN-GG","ELIXSURE ALLERGY","ELIXSURE COUGH","ELIXSURE DECONGESTANT","ELIXSURE EXPECTORANT","ELIXSURE FEVERPAIN","ELIXSURE IB","ELLA","ELLENCE","ELLIOTTS B","ELLIS TONIC","ELLURA","ELMIRON","ELOCON","ELOCTATE","ELON DUAL DEFENSE","ELOXATIN","ELSPAR","ELTA LITE TAR","ELTA PLUS TAR","ELTA SEAL MOISTURE BARRIER","ELTROXIN","ELUANT","EMADINE","EMAGRIN","EMAGRIN FORTE","EMBEDA","EMBELIN","EMBELINE","EMBELINE E","EMBELINE SCALP APPLICATION","EMCIN CLEAR","EMCYT","EMEND","EMEND INJECTION","EMEND TRI-FOLD PACK","EMERSAL","EMETROL","EMFLAZA","EMGEL","EMKO","EMLA","EMOQUETTE","EMPIRIN","EMPIRIN WITH CODEINE","EMPLICITI","EMPRO","EMSAM","EMTET-500","EMTRIVA","EMULSOIL","EMVERM","ENABLEX","ENBREL","ENCARE","ENCORA","ENCORA AM TABLET","ENCORA CAPSULE","ENCORA PM TABLET","ENCRON 10","ENCRON-10","ENDACOF AC","ENDACOF HC","ENDACOF XP","ENDACOF-C","ENDACOF-DC","ENDACOF-PLUS","ENDACON","ENDACON-DM","ENDAFED","ENDAGEN-HD","ENDAL CD","ENDAL COUGH","ENDAL EXPECTORANT","ENDAL HD","ENDAL HD PLUS","ENDAL-HD","ENDAL-HD REFORMULATED NOV 2007","ENDARI","ENDEP","ENDITUSSIN EXPECTORANT","ENDITUSSIN-HD","ENDOCET","ENDOCET 10325","ENDOCET 10650","ENDOCET 5325","ENDOCET 7.5325","ENDOCET 7.5500","ENDOCODONE","ENDODAN","ENDODAN REFORMULATED MAY 2009","ENDOMETRIN","ENDOSOL EXTRA","ENDOTUSS","ENDOTUSS EXPECTORANT","ENDOTUSS-HD","ENDOXAN","ENDRATE","ENDUR-ACIN","ENDUR-AMIDE","ENDUR-THINE","ENDURONYL","ENDURONYL FORTE","ENEMEEZ","ENEMEEZ PLUS","ENFAMIL GLUCOSE","ENFOLAST-N","ENGERIX-B","ENGERIX-B PEDIATRIC","ENJUVIA","ENKAID","ENLON","ENLON-PLUS","ENOMINE LA","ENOVACHEM BETALIDO KIT","ENOVACHEM DEXLIDO KIT","ENOVACHEM DOUBLEDEX KIT","ENOVACHEM DYURAL 40 KIT","ENOVACHEM DYURAL 80 KIT","ENOVACHEM DYURAL L KIT","ENOVACHEM DYURAL LM KIT","ENOVACHEM KETOROCAINE L KIT","ENOVACHEM LIDOLOG KIT","ENOVACHEM MARBETA 25","ENOVACHEM MARDEX-25 KIT","ENOVACHEM MARLIDO 25 KIT","ENOVACHEM MARLIDO KIT","ENOVACHEM MLK F3 KIT","ENOVACHEM PHYSICIAN EZ USE JOINT, TUNNEL, AND TRIGGER KIT","ENPLUS-HD","ENPRESSE 28 DAY","ENSKYCE 28 DAY","ENSTILAR","ENTAC","ENTAPRIN","ENTERCOTE","ENTEREG","ENTEX","ENTEX ER","ENTEX HC","ENTEX LA CAPSULE","ENTEX LA TABLET REFORMULATED FEB 2008","ENTEX LIQUID","ENTEX LQ","ENTEX PAC","ENTEX PSE","ENTEX S","ENTEX T","ENTOCORT","ENTOCORT EC","ENTRE-B","ENTRE-S","ENTRESTO","ENTROCEL","ENTSOL","ENTUSS","ENTUSS D","ENTUSS EXPECTORANT","ENTUSS-D","ENTUSS-D JR","ENTUSS-D LIQUID","ENTYVIO","ENUCLENE","ENULOSE","ENVARSUS","ENZONE","EOVIST","EPANED","EPANOVA","EPCLUSA","EPERBEL-S","EPHENSIN-LA","EPI-CLENZ","EPICERAM","EPIDRIN","EPIDUO","EPIDURAL SINGLE SHOT WITH LIDOCAINE","EPIFLUR","EPIFOAM","EPIFRIN","EPIKLOR","EPILIM","EPIMIDE 50","EPINAL","EPIPEN","EPIPRAM","EPIQUIN MICRO","EPISNAP","EPITOL","EPIVIR","EPIVIR HBV","EPOGEN","EPPYN","EPZICOM","EQUAGESIC","EQUALACTIN","EQUALIZE GAS RELIEF DROPS","EQUANIL","EQUETRO","EQUI-BRON G","EQUI-CYTE F","EQUI-NADE","EQUIBRON G","EQUILET","EQUIMECTRIN","ERAXIS","ERBITUX","EREX","ERGAMISOL","ERGOCAF-PB","ERGOCOMP-PB","ERGOMAR","ERGOSTAT","ERGOTRATE","ERGOTRATE MALEATE","ERIDIUM","ERIVEDGE","ERLEADA","ERRIN","ERRIN 28 DAY","ERTACZO","ERWINAZE","ERY","ERY-SOL","ERY-TAB","ERYC","ERYCETTE","ERYDERM","ERYGEL","ERYMAX","ERYPED","ERYTHRA-DERM","ERYTHROCIN","ERYTHROCIN LACTOBIONATE","ERYTHROCIN STEARATE","ERYTHROCOT","ERYTROMYCIN","ERYZOLE","ESBRIET","ESCLIM","ESERINE SULFATE OPHTHALMIC","ESGIC","ESKALITH","ESKATA","ESOTERICA","ESPOTABS","ESSIAN","ESSIAN H.S.","ESTAR","ESTARYLLA 28 DAY","ESTINYL","ESTIVIN","ESTIVIN II","ESTRA TESTRIN","ESTRA-C","ESTRA-TESTRIN","ESTRA-V 40","ESTRACE","ESTRACE VAGINAL","ESTRADERM","ESTRAGYN LA 5","ESTRASORB","ESTRATAB","ESTRATEST","ESTRE","ESTRING","ESTRO-A","ESTRO-CYP","ESTROGEL","ESTROGENIC","ESTRONE AQ","ESTROSTEP FE 28 DAY","ETH-OXYDOSE","ETHAMOLIN","ETHAQUIN","ETHATAB","ETHAVEX-100","ETHEDENT","ETHEXDERM BPW 10","ETHEXDERM BPW 5","ETHEZYME","ETHIODOL","ETHMOZINE","ETHRANE","ETHYOL","ETOPLAC","ETOPOPHOS","ETRAFON 2-10","ETRAFON 2-25","ETRAFON 4-10","ETRAFON 4-25","ETRAFON FORTE","ETRAFON-A","EUCERIN CALMING ITCH RELIEF","EUCERIN ECZEMA RELIEF","EUCRISA","EUDAL","EUDAL SR","EUFLEXXA","EULEXIN","EURAX","EUTHENICS","EUTHYROX","EVAC-U-GEN","EVAC-U-GEN REFORMULATED JAN 2008","EVALOSE","EVAMIST","EVARREST","EVEKEO","EVERONE","EVISTA","EVITHROM","EVIVO","EVOCLIN","EVOMELA","EVOTAZ","EVOVIST","EVOXAC","EVZIO","EX DEC","EX-DEC-TR","EX-HISTINE","EX-LAX","EX-LAX CHOCOLATE","EX-LAX CHOCOLATED","EX-LAX GENTLE NATURE","EX-LAX GENTLE STRENGTH","EX-LAX MAXIMUM RELIEF","EX-LAX MAXIMUM RELIEF FORMULA","EX-LAX MILK OF MAGNESIA","EX-LAX REGULAR STRENGTH PILLS","EX-LAX STOOL SOFTENER","EX-LAX ULTRA","EX-LAX UNFLAVORED","EX-PAIN","EX-PAIN RELIEVER","EX-TUSS","EXACTACAIN","EXALGO","EXALL","EXALL-D","EXAPRIN","EXCEDRIN","EXCEDRIN ASPIRIN FREE","EXCEDRIN BACK & BODY","EXCEDRIN MILD HEADACHE","EXCEDRIN PM","EXCEDRIN PM TRIPLE ACTION","EXCEDRIN QUICK TAB","EXCEDRIN SINUS","EXCEDRIN SINUS HEADACHE","EXCEDRIN TENSION HEADACHE","EXCEL","EXCEL PET","EXCOF","EXECLEAR","EXECLEAR-C","EXECOF","EXECOF XP","EXEFEN","EXEFEN DMX","EXELDERM","EXELON","EXETUSS","EXETUSS HC","EXETUSS-GP","EXFORGE","EXFORGE HCT","EXGEST LA","EXIDINE","EXJADE","EXNA","EXO-TUSS","EXOCAINE","EXODERM","EXONDYS","EXOSURF","EXOTIC-HC","EXPAREL","EXPECTA","EXPECTORANT DM","EXPECTORANT PE","EXPECTUSS","EXRATUSS","EXSEL","EXTAVIA","EXTENDRYL","EXTENDRYL CHEWS","EXTENDRYL DM","EXTENDRYL G","EXTENDRYL GCP","EXTENDRYL HC","EXTENDRYL JR","EXTENDRYL PEM","EXTENDRYL PSE","EXTENDRYL SYRUP","EXTINA","EXTRA GENTLE EX-LAX","EXTRA STRENGTH BAYER","EXTRA STRENGTH MYLANTA CALCI TABS","EXTRANEAL","EXTUSS","EXTUSSIVE","EXUBERA","EXUBERA COMBINATION PACK 12","EXUBERA KIT","EYE DROPS EXTRA","EYE STREAM","EYE-SED","EYE-SINE","EYEFLUR","EYEMYCIN","EYLEA","EZ III","EZ-OX","EZE D.S.","EZFE","EZIDE","EZOL"]'));
        // Block#: +zA0:b6d}U5ms=|5*}.h
        com.fc.JavaScriptDistLib.Dictionary.setDictValue(LibVars.medicationlistlib.medDict, 'E', LibVars.medicationlistlib.tempDict);
        // Block#: o}KUjWci[rIlOVNbpkAW
        LibVars.medicationlistlib.tempDict = (com.fc.JavaScriptDistLib.JSON.parseJSONData('["FA-8","FABIOR","FABRAZYME","FACE UP #2","FACE UP #3","FACTIVE","FACTREL","FALLBACK SOLO","FALMINA 28 DAY","FAM-COLSOF","FAM-PERICOLS","FAMILY 12 HOUR ANTIHISTAMINEDECONGESTANT","FAMVIR","FANAPT","FANAPT TITRATION PACK","FANATREX","FANSIDAR","FARESTON","FARXIGA","FARYDAK","FASENRA","FASLODEX","FASPRIN","FAST ACTING MYLANTA","FAST FREEZE","FASTIN","FASTSTAT","FAYOSIM 91 DAY","FAZACLO","FE 50","FE-MAX","FE-STOOL","FE-TINIC","FE-TINIC 150","FE-TINIC 150 REFORMULATED OCT 2008","FEDAHIST","FEDAHIST GYROCAPS","FEDAHIST TIMECAPS","FEEN-A-MINT","FEEN-A-MINT REFORMULATED JAN 2008","FEIBA","FELBATOL","FELDENE","FEM PH","FEMARA","FEMATROL","FEMATROL REFORMULATED MAR 2010","FEMCARE","FEMCET","FEMCON FE","FEMCON FE 28 DAY","FEMHRT","FEMHRT 0.52.5","FEMHRT 0.52.5 28 DAY","FEMHRT 15","FEMHRT 15 28 DAY","FEMILAX","FEMININE LAX","FEMININE LAXATIVE","FEMINTROL","FEMIRON","FEMPATCH","FEMRING","FEMSTAT","FEMSTAT 3","FEMSTAT PREFILL","FEMTRACE","FEMYNOR 28 DAY","FENESIN DM IR","FENESIN IR","FENESIN PE IR","FENEX-DM","FENEX-LA","FENEX-PSE","FENOCHOL","FENOGLIDE","FENORTHO","FENTEX","FENTORA","FENTUSS EXPECTORANT","FEOSOL","FEOSOL CAPLET","FEOSTAT","FER-GEN-SOL","FER-IN-SOL","FER-IN-SOL TR","FERA","FERAHEME","FERATE","FERGON","FERIDEX","FERO-GRAD","FERO-GRADUMET FILMTAB","FEROCON","FEROCYL","FEROSUL","FEROTRIN","FEROTRINSIC","FERRA T.D. CAPS","FERRA-TD","FERRALET","FERRALET 90","FERRALET TD","FERRAPLUS","FERRATAB","FERRETTS IPS","FERREX","FERREX 150 FORTE","FERREX 150 FORTE PLUS","FERREX 150 PLUS","FERREX-150","FERRIMIN","FERRIMIN 150","FERRIPROX","FERRLECIT","FERRO BASIC","FERRO DSS","FERRO-CAPS","FERRO-SEQUELS","FERRO-TIME","FERROCITE","FERROCITE F","FERROCITE PLUS","FERROGELS","FERROGELS FORTE","FERROSPACE","FERROUS DS","FERTINEX","FERUS PIC-150","FETRIN","FETZIMA","FETZIMA PACK","FEVERALL","FEXMID","FEXOFEENADINE","FIASP","FIBER CHOICE","FIBER CHOICE WEIGHT MANAGEMENT","FIBER LAX","FIBER LAXATIVE","FIBER TAB","FIBERALL","FIBERALL TABLETS","FIBERCON","FIBERLAX","FIBERNORM","FIBERTAB","FIBRICOR","FIBRYGA","FINACEA","FINEVIN","FIORICET","FIORICET WITH CODEINE","FIORINAL","FIORINAL WITH CODEINE","FIORMOR","FIORPAP","FIORTAL","FIORTAL WITH CODEINE","FIRAZYR","FIRMAGON","FIRST HYDROCORTISONE","FIRST TESTOSTERONE","FIRST-PROGESTERONE","FIRVANQ","FIV-ASA","FLAC","FLAGYL","FLANAX ANTACID","FLANAX LOZENGES","FLANAX NAPROXEN","FLANDERS","FLAREX","FLATULEX","FLATULEX DROPS","FLEBOGAMMA","FLECTOR","FLEET","FLEET BABYLAX","FLEET BISACODYL","FLEET ENEMA","FLEET GLYCERIN SUPPOSITORIES ADULT","FLEET MINERAL OIL","FLEET PHOSPHO-SODA","FLEET SOF-LAX","FLETCHERS CASTORIA","FLETCHERS CHILD LAXATIVE","FLETCHERS CHILD LAXATIVE CHERRY","FLEX-10","FLEX24 PERFORMANCE","FLEXALL","FLEXALL MAXIMUM STRENGTH","FLEXALL ULTRA PLUS","FLEXBUMIN","FLEXERIL","FLEXOJECT","FLEXON","FLEXTRA","FLEXTRA PLUS","FLEXTRA-DS","FLO-PRED","FLOAM","FLOLAN","FLOLIPID","FLOMAX","FLONASE","FLONASE SENSIMIST","FLORAJEN","FLORAJEN BIFIDOBLEND","FLORAJEN3","FLORASTOR","FLORICAL","FLORIL REDNESS RELIEF","FLORIL TEARS","FLORINEF","FLORONE","FLORONE E","FLOROPRYL","FLOVENT","FLOVENT ROTADISK","FLOWTUSS","FLOXIN","FLOXIN I.V.","FLOXIN OTIC","FLOXURIDIEN","FLOXURIDINE NOVAPLUS","FLU, COLD, AND COUGH","FLUAD 2015-2016","FLUAD 2016-2017","FLUAD 2017-2018","FLUARIX 2008-2009 FORMULA","FLUARIX 2009-2010 FORMULA","FLUARIX 2010-2011 FORMULA","FLUARIX 2011-2012 FORMULA","FLUARIX 2012-2013 FORMULA","FLUARIX 2013-2014 FORMULA","FLUARIX 2014-2015 FORMULA","FLUARIX QUAD 2014-2015 FORMULA","FLUARIX QUADRIVALENT 2015-2016","FLUARIX QUADRIVALENT 2016-2017","FLUARIX QUADRIVALENT 2017-2018","FLUARIX QUADRIVALENT 2018-2019","FLUBHENAZINE","FLUBLOK 2012-2013 FORMULA","FLUBLOK 2013-2014 FORMULA","FLUBLOK 2014-2015 FORMULA","FLUBLOK 2015-2016","FLUBLOK 2016-2017","FLUBLOK 2017-2018","FLUBLOK QUADRIVALENT 2017-2018","FLUCAINE","FLUCELVAX 2012-2013 FORMULA","FLUCELVAX 2013-2014 FORMULA","FLUCELVAX 2014-2015 FORMULA","FLUCELVAX 2015-2016","FLUCELVAX QUADRIVALENT 2016-2017","FLUCELVAX QUADRIVALENT 2017-2018","FLUCONAZALE","FLUDARA","FLUEX","FLULAVAL 2008-2009 FORMULA","FLULAVAL 2009-2010 FORMULA","FLULAVAL 2010-2011 FORMULA","FLULAVAL 2011-2012 FORMULA","FLULAVAL 2013-2014 FORMULA","FLULAVAL 2014-2015 FORMULA","FLULAVAL QUAD 2013-2014 FORMULA","FLULAVAL QUAD 2014-2015 FORMULA","FLULAVAL QUADRIVALENT 2015-2016","FLULAVAL QUADRIVALENT 2016-2017","FLULAVAL QUADRIVALENT 2017-2018","FLULAVAL QUADRIVALENT 2018-2019","FLUMADINE","FLUMIST 2008-2009 FORMULA","FLUMIST 2009-2010 FORMULA","FLUMIST 2011-2012 FORMULA","FLUMIST 2012-2013 FORMULA","FLUMIST 2014-2015 FORMULA","FLUMIST 2015-2016","FLUMIST QUADRIVALENT 2016-2017","FLUMIST QUADRIVALENT 2017-2018","FLUNISIN","FLUONID","FLUOR A DAY","FLUOR A DAY CHEWABLE","FLUOR-OP","FLUORABON","FLUORACAINE","FLUORBENOX","FLUORESCEIN DARK","FLUORESCEIN LITE","FLUORESCITE","FLUORI-METHANE","FLUORIDEX","FLUORIDEX DAILY DEFENSE SENSITIVITY","FLUORIDEX DAILY RENEWAL","FLUORIGARD","FLUORINSE","FLUORISHIELD","FLUORITAB","FLUOROCARE","FLUORODEX","FLUORON","FLUOROPLEX","FLUOROX","FLUOSOL","FLURA-DROPS","FLURA-LOZ","FLURA-TAB","FLURATE","FLURBIDROFEN","FLURESS","FLURO-ETHYL","FLURO-ETHYL REFORMULATED SEP 2008","FLUROSYN","FLUROX","FLUTEX","FLUTICARE","FLUTUSS HC","FLUTUSS XP","FLUVIRIN 2008-2009 FORMULA","FLUVIRIN 2009-2010 FORMULA","FLUVIRIN 2010-2011 FORMULA","FLUVIRIN 2011-2012 FORMULA","FLUVIRIN 2012-2013 FORMULA","FLUVIRIN 2013-2014 FORMULA","FLUVIRIN 2014-2015 FORMULA","FLUVIRIN 2015-2016","FLUVIRIN 2016-2017","FLUVIRIN 2017-2018","FLUXID","FLUZONE","FLUZONE 2008-2009 FORMULA","FLUZONE 2009-2010 FORMULA","FLUZONE 2010-2011 FORMULA","FLUZONE 2011-2012 FORMULA","FLUZONE 2012-2013 FORMULA","FLUZONE 2013-2014 FORMULA","FLUZONE 2014-2015 FORMULA","FLUZONE 2015-2016","FLUZONE 2016-2017","FLUZONE 2017-2018","FLUZONE HIGH-DOSE 2012-2013 FORMULA","FLUZONE HIGH-DOSE 2013-2014 FORMULA","FLUZONE HIGH-DOSE 2014-2015 FORMULA","FLUZONE INTRADERMAL 2012-2013 FORMULA","FLUZONE INTRADERMAL 2013-2014 FORMULA","FLUZONE INTRADERMAL 2014-2015 FORMULA","FLUZONE QUADRIVALENT 2013-2014 FORMULA","FLUZONE QUADRIVALENT 2014-2015 FORMULA","FLUZONE QUADRIVALENT 2015-2016","FLUZONE QUADRIVALENT 2016 SOUTHERN HEMISPHERE","FLUZONE QUADRIVALENT 2016-2017","FLUZONE QUADRIVALENT 2017-2018","FML","FML FORTE LIQUIFILM","FML S.O.P.","FML-S","FOAMICON","FOAMING ANTACID","FOCALIN","FOCALIN XR","FOILLE","FOILLE PLUS","FOLACIN","FOLBALIN","FOLBECAL","FOLBEE","FOLBIC","FOLCAPS","FOLEX PFS","FOLGARD","FOLGARD OS","FOLINATAL PLUS B","FOLITAB","FOLIVANE-F","FOLLISTIM","FOLOTYN","FOLPACE RX","FOLPLEX","FOLTABS","FOLTRATE","FOLTX","FORADIL","FORANE","FORFIVO","FORMA-RAY","FORMADON","FORMALAZ","FORMALYDE-10","FORMULATION R","FORMULATION R OINTMENT","FORTABS","FORTAMET","FORTAZ","FORTEO","FORTESTA","FORTICAL","FORTOVASE","FOSAMAX","FOSAMAX PLUS D","FOSAMAX PLUS D 702800","FOSAMAX PLUS D 705600","FOSCAVIR","FOSRENOL","FOSTEUM","FOSTEX","FOSTEX BAR","FOSTEX BAR 10%","FOSTEX GEL 10%","FOSTEX MEDICATED CLEANING BAR","FOSTEX WASH","FOSTEX WASH 10%","FOSTRIL","FOTOTAR","FOUR-WAY","FRAGMIN","FREAMINE 6.9","FREAMINE III 10","FREAMINE III 3","FREAMINE III 8.5","FREEZ EEZ","FREEZE","FREEZE IT","FREEZONE","FREEZONE CORN REMOVER","FRENADOL","FRESHKOTE","FROVA","FRUITY C","FS SHAMPOO","FULPHILA","FULVICIN PG","FULVICIN-U-F","FULYZAQ","FUMASORB","FUMATINIC","FUNDUSCEIN","FUNGATIN","FUNGI-GUARD","FUNGI-NAIL","FUNGI-NAIL TOE AND FOOT","FUNGICURE","FUNGICURE MAXIMUM STRENGTH","FUNGICURE SOLUTION","FUNGIZONE","FUNGIZONE CREAM","FUNGOID","FUNGOID (CLOTRIMAZOLE)","FUNGOID AF","FUNGOID AND HC","FUNGOID-D","FURACIN","FURADANTIN","FUROXONE","FUSILEV","FUZEON","FYAVOLV","FYCOMPA","FYCOMPA 24 SAMPLE PACK","FYCOMPA 46 SAMPLE PACK"]'));
        // Block#: d,iN3_.KQjLS%V+k_rgt
        com.fc.JavaScriptDistLib.Dictionary.setDictValue(LibVars.medicationlistlib.medDict, 'F', LibVars.medicationlistlib.tempDict);
        // Block#: Gk`R-Q7pQX:x#!_?=)DO
        LibVars.medicationlistlib.tempDict = (com.fc.JavaScriptDistLib.JSON.parseJSONData('["G BID","G-1","G-BID DM","G-MYCIN","G-MYTICIN","G-PHED- PD","G-TAR","G-TUSS","G-ZYNCOF","GABARONE","GABITRIL","GABLOFEN","GALZIN","GAMASTAN","GAMIMUNE N","GAMIMUNE N 10%","GAMIMUNE N 5%","GAMMAGARD","GAMMAGARD SD","GAMMAKED","GAMMAPLEX","GAMMAR","GAMMAR I.V.","GAMMAR-P I.V.","GAMUNEX","GANI-TUSS NR","GANITE","GANTANOL","GANTRISIN","GANTRISIN OPHTHALMIC","GARAMYCIN","GARAMYCIN OPHTHALMIC","GARAMYCIN TOPICAL","GARDASIL","GARDASIL 9","GARLIQUE","GARNIER FRUCTIS ANTIDANDRUFF","GAS AIDE","GAS RELIEF","GAS-X","GAS-X EXTRA STRENGTH","GAS-X LIQUID EXTRA STRENGTH","GAS-X MAXIMUM STRENGTH","GAS-X PREVENTION","GAS-X WITH MAALOX","GASTRINEX","GASTROCROM","GASTROGRAFIN","GASTROMARK","GATTEX","GAVILAX","GAVILYTE-C","GAVILYTE-G","GAVILYTE-H","GAVILYTE-H AND BISACODYL","GAVILYTE-N","GAVISCON","GAVISCON CHEWABLE","GAVISCON CHEWABLE TABLET","GAVISCON REGULAR STRENGTH LIQUID","GAVISCON-2","GAZYVA","GDP EX","GEBAUER\'S ETHYL CHLORIDE","GEL-KAM","GEL-ONE","GEL-SYN","GEL-TIN","GELATO ANESTHETIC","GELATO PERIO RINSE","GELATO SODIUM FLUORIDE","GELATO TOPICAL GEL","GELHIST PEDIATRIC","GELNIQUE","GELPIRIN-CCF","GELRITE","GELUSIL","GEMCOR","GEMZAR","GEN LAX","GEN-ALOX","GEN-LANTA","GEN-LANTA II","GEN-XENE","GENACOL","GENACOL MAXIMUM STRENGTH","GENACOTE","GENAHIST","GENALLERATE","GENAMIN","GENAMIN EXPECTORANT","GENAPAP","GENAPAP C","GENAPAP EXTRA STRENGTH","GENAPAP PM","GENAPAP SINUS","GENAPHED","GENAPHED PLUS","GENASAL","GENASAN","GENASEC","GENASOFT","GENASOFT PLUS","GENASONEALOE","GENASPOR","GENASYME","GENATON","GENATON CHEWABLE","GENATUSS","GENATUSS DM","GENCOFED","GENCOFED EXPECTORANT","GENCOFED PEDIATRIC EXPECTORANT","GENCOLD","GENDECON","GENE PRESS T","GENEBROM DM","GENEBRONCO D","GENEBS","GENECOF HC","GENECOF XP","GENEDEL","GENEDEL GRAPE FLAVOR","GENELAN","GENEPATUSS","GENERESS FE 28","GENERLAC","GENETRON 12","GENETUSS 2","GENEXA","GENEXOTIC HC","GENEXPECT DM","GENEXPECT PE","GENEXPECT SF","GENFIBER","GENGRAF","GENNIN-FC","GENOCIDIN TUSS","GENOPTIC","GENORA","GENORA 150","GENOTROPIN","GENPRIL","GENPRIN","GENTAK","GENTASOL","GENTEAL","GENTEAL GEL DROPS","GENTEAL PM","GENTEAL TEARS","GENTEAL TEARS MILD","GENTEX HC","GENTEX LA","GENTEX LQ","GENTLAX","GENTLAX REFORMULATED JAN 2008","GENTLAX S","GENTLE","GENTLE LAXATIVE","GENTLELAX","GENTRAN 40","GENTRAN 70","GENVISC","GENVOYA","GEOCILLIN","GEODON","GEONE","GEREF","GEREF DIAGNOSTIC","GERI-HYDROLAC","GERICET","GERIDIUM","GERIMAL","GESTERONE","GESTICARE DHA","GESTICARE DHA STARTER PACK","GESTUSS-HC","GETS-IT CORN AND CALLUS REMOVER","GFN 600PHENYLEPHRINE 20","GFN DYP","GFN PEH","GFN PSEH DTMH 00","GFN PSEH DTMH 05","GFN PSEH DTMH 06","GFN PSEH DTMH 07","GFN PSEH DTMH O1","GFN PSEH DTMH TABLETS 11","GG-CEN","GG-DM SR","GG-PPA","GGDM","GIANVI 28-DAY","GIAPREZA","GIAZO","GILDAGIA","GILDESS","GILDESS 1.530 21 DAY","GILDESS 120 21 DAY","GILDESS 24 FE 28 DAY","GILDESS FE 1.530 28 DAY","GILDESS FE 120 28 DAY","GILENYA","GILOTRIF","GILPHEX","GILPHEX TR","GILTUSS","GILTUSS ALLERGY & SINUS","GILTUSS COUGH & CHEST CONGESTION","GILTUSS PED-C","GILTUSS PEDIATRIC","GILTUSS SINUS & CONGESTION","GILTUSS TR","GINGI MED","GINGICAINE","GINSANA","GLADASE-C","GLASSIA","GLATOPA","GLAUCON","GLEEVEC","GLEOSTINE","GLIADEL","GLO-SEL","GLU-K","GLUCAGEN","GLUCOBURST","GLUCOPHAGE","GLUCOPHAGE XR","GLUCOTROL","GLUCOTROL XL","GLUCOVANCE","GLUMETZA","GLUTAMIC-500","GLUTOSE","GLY-CORT","GLY-OXIDE","GLYBURASE","GLYCATE","GLYCERYL T","GLYCOLAX","GLYCOPHOS","GLYCOTUSS-DM","GLYDEINE","GLYDO","GLYGURIDE","GLYNASE","GLYNASE PRES-TAB","GLYOXIDE","GLYQUIN","GLYSET","GLYTONE","GLYTUSS","GLYXAMBI","GOCOVRI","GOLD BOND ANTI-ITCH INTENSIVE RELIEF","GOLD BOND BABY CORNSTARCH PLUS","GOLD BOND BODY POWDER EXTRA STRENGTH","GOLD BOND BODY POWDER ORIGINAL STRENGTH","GOLD BOND FOOT POWDER MAXIMUM STRENGTH","GOLD BOND INTENSIVE HEALING","GOLD BOND LOTION","GOLD BOND MAXIMUM RELIEF","GOLD BOND PAIN RELIEVING FOOT","GOLD BOND ULTIMATE DIABETICS DRY SKIN RELIEF","GOLD BOND ULTIMATE ECZEMA RELIEF","GOLYTELY","GONAK","GONAL F","GONAL-F RFF","GONIC","GONIOSOFT","GONIOSOL","GONIOVISC","GONITRO","GOODY\'S BACK & BODY PAIN RELIEF","GOODY\'S BODY PAIN","GOODY\'S EXTRA STRENGTH","GOODY\'S MIGRAINE RELIEF","GOODY\'S PM","GOPRELTO","GORDOBALM","GORDOCHOM","GORDOFILM","GORDOGESIC","GORDONS UREA","GORMEL","GORMEL 10","GRALISE","GRALISE 30 DAY","GRALISE STARTER PACK","GRANISOL","GRANIX","GRANUL-DERM","GRANULDERM","GRANULEX","GRANUMED","GRASTEK","GRIFULVIN V","GRIS-PEG","GRISACTIN 500","GRISACTIN ULTRA","GRISEOFULICIN","GRISEOFULVIC","GRX HEMORRHOIDAL","GUA HC","GUA PC","GUACOL","GUAI SUDO","GUAI-CAR LA","GUAI-CO","GUAI-DEX","GUAIATUSSIN AC","GUAIATUSSIN DAC","GUAIBID D","GUAIBID D PEDIATRIC","GUAIBID DM","GUAIBID-LA","GUAIDEX","GUAIFED","GUAIFED PD","GUAIFED PD REFORMULATED NOV 2008","GUAIFED SYRUP","GUAIFED-PSE","GUAIFEN AC","GUAIFEN C","GUAIFEN CF","GUAIFEN DAC","GUAIFEN DM","GUAIFEN NR","GUAIFEN-C","GUAIFENESIN LA","GUAIFENEX","GUAIFENEX DM RX","GUAIFENEX GP","GUAIFENEX LA","GUAIFENEX PPA 75","GUAIFENEX PSE 120","GUAIFENEX PSE 80","GUAIFENEX PSE 85","GUAIFENEX RX","GUAIPAX","GUAIPAX PSE","GUAIPHEN PD","GUAITAB","GUAIVENT (ETHEX)","GUAIVENT PD","GUAPHEN FORTE","GUIACOUGH","GUIACOUGH DM","GUIADEX DM","GUIADRINE DM","GUIADRINE G-1200","GUIADRINE II","GUIADRINE II SR","GUIADRINE PSE","GUIADRINE PSE 120","GUIADRINE-GP","GUIAFENE II DM","GUIAPHEN HD","GUIAT CLEAR DM","GUIATEX","GUIATEX II","GUIATEX II SR","GUIATEX LA","GUIATEX PSE","GUIATUSS","GUIATUSS AC","GUIATUSS CF","GUIATUSS CLEAR","GUIATUSS DAC","GUIATUSS DM","GUIATUSS PE","GUIATUSSIN DAC","GUIATUSSIN DM","GUIATUSSIN WITH CODEINE","GUIATUSSIN-CF","GUIAVENT ER","GYBURIDE","GYNAZOLE-1","GYNE-LOTRIMIN","GYNE-LOTRIMIN INSERTS","GYNECORT","GYNODIOL","GYNOGEN LA 20","GYNOL II","GYNOL II GEL"]'));
        // Block#: RP!apXNV7k?OOu)6ck=p
        com.fc.JavaScriptDistLib.Dictionary.setDictValue(LibVars.medicationlistlib.medDict, 'G', LibVars.medicationlistlib.tempDict);
        // Block#: r^e%8Wm5dC3z)|jY1(Bx
        LibVars.medicationlistlib.tempDict = (com.fc.JavaScriptDistLib.JSON.parseJSONData('["H 9600 SR","H C TUSSIVE-NR","H-C TUSSIVE","H-TRAN","H-TUSS-D LIQUID","H2Q","HABITROL","HAEGARDA","HAILEY 1.530 21 DAY","HAILEY 24 FE 28 DAY","HAILEY FE 120 28 DAY","HALAC","HALAVEN","HALCION","HALDOL","HALDOL DECANOATE","HALENOL","HALEY\'S M-O","HALFAN","HALFLYTELY","HALFLYTELY AND BISACODYL BOWEL PREP KIT","HALFLYTELY AND BISACODYL BOWEL PREP REFORMULATED AUG 2010","HALFLYTELY AND BISACODYL BOWEL PREP REFORMULATED OCT 2008","HALFPRIN","HALLS","HALLS DEFENSE","HALLS SUGARFREE HONEY LEMON","HALOG","HALOG-E","HALONATE","HALONATE PAC","HALOTESTIN","HALOTEX","HALOTUSSIN","HALOTUSSIN AC","HALOTUSSIN DAC","HALOTUSSIN DM","HALOTUSSIN DM SUGAR FREE","HALTRAN","HAMPTONS BABY POWDER","HAPONAL","HARMONYL","HARVONI","HAVRIX","HAVRIX PEDIATRIC","HAY FEVER ALLERGY RELIEVER","HAYFEBROL","HAYFEBROL LIQUID","HB-VAX","HB-VAX II","HC DERMA-PAX","HC PRAMOXINE","HC-DERMA-PAX","HC-TUSSIVE-D","HCB BPM PEH","HEAD & SHOULDERS","HEAD & SHOULDERS DRY SCALP","HEAD & SHOULDERS INTENSIVE TREATMENT","HEALON","HEALON5","HEALTH CARE AMERICA GLUCOSE","HEALTHY MAMA","HEALTHYLAX","HEATHER 28 DAY","HECORIA","HECTOROL","HELIDAC THERAPY","HELIXATE","HEMABATE","HEMANGEOL","HEMASPAN","HEMATINIC WITH FOLIC ACID","HEMATOGEN","HEMAVITE F","HEMAX","HEMLIBRA","HEMMOREX","HEMOBAN","HEMOCYTE","HEMOCYTE PLUS","HEMOCYTE-C","HEMOCYTE-F","HEMOCYTE-F ELIXIR","HEMOFIL","HEMORID","HEMORID CREAM","HEMORID MAXIMUM STRENGTH","HEMORID OINTMENT","HEMORR-OXINE","HEMORRHOIDAL HC","HEMORROIDAL OINTMENT","HEMOX A","HEMRIL","HEMRIL-30","HEMRIL-HC UNISERTS","HEP-LOCK","HEP-PAK","HEP-PAK CVC","HEPAGAM B","HEPAGAM B NOVAPLUS","HEPATAMINE 8","HEPATASOL 8","HEPFLUSH","HEPLISAV-B","HEPSERA","HEPTALAC","HERBON REFORMULATED MAR 2010","HERCEPTIN","HERPETROL","HERPLEX","HESPAN","HETLIOZ","HEXABRIX","HEXADROL","HEXADROL PHOSPHATE","HEXALEN","HEXATUSSIN","HEXTEND","HHR","HI TEX PSE","HI-COR","HI-TUSS HC","HIBERIX","HIBICLENS","HIBISTAT","HIBTITER","HIGHLAND DM","HIGHLAND HC","HIPREX","HISDEC","HISMANAL","HIST-HC","HIST-PLUS","HIST-PSE","HISTA-TABS","HISTA-VADRIN","HISTA-VENT DA","HISTA-VENT PSE","HISTACOL BD","HISTACOL DM DROPS","HISTACOL DM PEDIATRIC","HISTADE","HISTADE REFORMULATED FEB 2008","HISTADEC","HISTADEC DM","HISTADECDM","HISTAFED","HISTAFED LA","HISTAJECT","HISTALET","HISTALET FORTE","HISTAMAXD","HISTATAB","HISTATAB PH","HISTATAB PLUS","HISTATAN","HISTATROL","HISTERONE","HISTEX","HISTEX AC","HISTEX CHEWABLE","HISTEX CT","HISTEX DM","HISTEX HC","HISTEX IE","HISTEX PD","HISTEX PD 12","HISTEX PD REFORMULATED MAR 2014","HISTEX PDX","HISTEX PE","HISTEX SR","HISTEX SR TABLET","HISTEX SYRUP","HISTINE D","HISTINE-D","HISTINEX D","HISTINEX DM","HISTINEX HC","HISTINEX PV","HISTOLYN CYL","HISTUSS HC","HISTUSS PD","HISTUSSIN D","HISTUSSIN-HC","HIVID","HIZENTRA","HMS SUSPENSION","HOLD DM","HOMAPIN-10","HOMAPIN-5","HOMATROPAIRE","HONGOS","HORIZANT","HORSEMAN\'S DREAM FUNG-A-WAY","HOT SPOT","HSS","HT TUSS DM","HUMALOG","HUMALOG MIX","HUMALOG MIX 5050","HUMALOG MIX 7525","HUMAN ALBUMIN GRIFOLS","HUMATE-P","HUMATROPE","HUMCO","HUMEGON","HUMIBID","HUMIBID CS","HUMIBID DM","HUMIBID DM PEDIATRIC","HUMIBID DM REFORMULATED FEB 2008","HUMIBID E","HUMIBID GC","HUMIBID L.A. REFORMULATED APR 2009","HUMIBID MAXIMUM STRENGTH","HUMIBID PEDIATRIC","HUMIGEN DM","HUMIGEN LA","HUMIRA","HUMIRA PEDIATRIC CROHN\'S DISEASE STARTER PACKAGE (2 COUNT)","HUMIRA PEDIATRIC CROHN\'S DISEASE STARTER PACKAGE (3 COUNT)","HUMIRA PEDIATRIC CROHN\'S DISEASE STARTER PACKAGE (6 COUNT)","HUMIRA PEN - CROHN\'S DISEASE STARTER PACK","HUMIRA PEN - PSORIASIS STARTER PACK","HUMIRA PEN 40 MG0.4 ML STARTER PACK - CROHN\'S DISEASE","HUMIRA PEN 40 MG0.4 ML STARTER PACK - PSORIASIS","HUMIRA PEN 80 MG0.8 ML - STARTER PACKAGE FOR CROHN\'S DISEASE, ULCERATIVE COLITIS OR HIDRADENITIS SUPPURATIVA","HUMIRA PEN 80 MG0.8 ML AND 40 MG0.4 ML - PSORIASISUVEITIS STARTER PACKAGE","HUMIRA PREFILLED SYRINGE 80 MG0.8 ML STARTER PACK - PEDIATRIC CROHN\'S DISEASE","HUMIST","HUMORSOL","HUMULIN","HUMULIN 5050","HUMULIN 7030","HUMULIN L","HUMULIN N","HUMULIN R","HUMULIN U ULTRALENTE","HURRICAINE","HURRICANE TRADENAME","HURRISEPT","HUSKY 514","HY-KXP","HY-PHEN","HY5","HYALGAN","HYBOLIN DECANOATE","HYBOLIN-IMPROVED","HYBRISIL","HYCAMTIN","HYCET","HYCO ELIXIR","HYCO-DH","HYCO-PAP","HYCODAN","HYCODAN SOLUTION","HYCOFENIX","HYCOMAL DH","HYCOMED","HYCOMINE","HYCOMINE COMPOUND","HYCOMINE PEDIATRIC","HYCOPHEN","HYCOPHEN PEDIATRIC","HYCORT","HYCOSIN EXPECTORANT","HYCOTUSS","HYCOTUSS EXPECTORANT","HYDASE","HYDELTRA-T.B.A.","HYDELTRASOL","HYDEX PD","HYDONE","HYDONE FORMULA LIQUID","HYDRA-ZIDE","HYDRALAZINE PLUS","HYDRAMINE","HYDRAMINE COMPOUND","HYDRAMINE COUGH SYRUP","HYDRAP-ES","HYDRASYN25","HYDRATE","HYDREA","HYDRISALIC","HYDRO 35","HYDRO 40","HYDRO EAR","HYDRO GP","HYDRO PAR","HYDRO PC","HYDRO PRO","HYDRO PRO D","HYDRO PRO DM SR","HYDRO TUSSIN HC","HYDRO-COBEX","HYDRO-DP","HYDRO-PC II","HYDRO-PC II PLUS","HYDRO-RESERP","HYDRO-TUSS DM","HYDRO-TUSS XP","HYDRO-TUSSIN CBX","HYDRO-TUSSIN DHC","HYDRO-TUSSIN EXP","HYDRO-TUSSIN HG","HYDROCET","HYDROCIL","HYDROCOD CP AND PSEUD","HYDROCOD-GF","HYDROCODONE CP","HYDROCODONE HD","HYDROCOF HC","HYDROCOF-HC","HYDROCORT CREAM","HYDROCORTISONE 1% IN ABSORBASE","HYDROCORTISONE AC","HYDROCORTONE","HYDROCORTONE ACETATE","HYDROCORTONE PHOSPHATE","HYDROCOT","HYDRODIURIL","HYDROFED","HYDROGESIC","HYDROMET","HYDROMIDE","HYDRON CP","HYDRON EX","HYDRON KGS","HYDRON PCS","HYDROPANE","HYDROPEL","HYDROPHED","HYDROPHENE DH","HYDROPRAM","HYDROPRES-25","HYDROPRES-50","HYDROQUINONE + SUNSCREEN","HYDROSERP","HYDROSERPINE","HYDROSERPINE #1","HYDROSKIN","HYDROSTAT","HYDROSTAT IR","HYDROTROPINE","HYDROTUSS","HYDROTUSS HC","HYDROTUSSIN HD","HYDROTUSSIN XP","HYDROXY-COBAL","HYFLEX","HYFLEX DS","HYGEL","HYGIENIC EAR","HYGROTON","HYLASE WOUND","HYLENEX","HYLIRA","HYLOREL","HYLUTIN","HYOLEV","HYOMAX","HYOPHEN","HYOSCYAMINE TR","HYOSOL","HYOSOLSL","HYOSOPHEN","HYOSOPHEN SR","HYOSPAZ","HYOSYNE","HYPAM","HYPAMINE","HYPAQUE","HYPAQUE CYSTO","HYPAQUE MEGLUMINE","HYPAQUE SODIUM","HYPER-SAL","HYPER-TET","HYPERAB","HYPERCARE","HYPERHEP B","HYPERRAB","HYPERRHO","HYPERRHO SD","HYPERSED","HYPERSTAT","HYPERTET","HYPERTET SD","HYPHED","HYPHEN-HD","HYPOTEARS","HYQVIA 10 G  100 ML KIT","HYQVIA 2.5 G  25 ML KIT","HYQVIA 20 G  200 ML KIT","HYQVIA 30 G  300 ML KIT","HYQVIA 5 G  50 ML KIT","HYREXIN","HYSEPT","HYSINGLA","HYSKON","HYSONE","HYTAN","HYTINIC","HYTONE","HYTRIN","HYTUSS","HYTUSS 2X","HYTUSSIN","HYTUSSIN EXPECTORANT","HYZAAR","HYZAAR 10012.5","HYZAAR 10025","HYZAAR 5012.5","HYZINE"]'));
        // Block#: pZ(EleKE0kaw/.P]%y3R
        com.fc.JavaScriptDistLib.Dictionary.setDictValue(LibVars.medicationlistlib.medDict, 'H', LibVars.medicationlistlib.tempDict);
        // Block#: ygg;^)[`6;2oF`M3gXo.
        LibVars.medicationlistlib.tempDict = (com.fc.JavaScriptDistLib.JSON.parseJSONData('["I-COOL","I-COOL PLUS D","I.D.A.","IB-STAT","IBIFON 600","IBRANCE","IBREN","IBU","IBU-200","IBU-4","IBU-6","IBU-8","IBU-TAB","IBUDONE","IBUDONE 10200","IBUDONE 5200","IBUPROHM","IC 400 KIT","IC 800 KIT","IC-GREEN","ICAR","ICAR C","ICAR PRENATAL CHEWABLE CALCIUM","ICAR-C PLUS","ICAR-C PLUS SR","ICLEVIA 91 DAY","ICLUSIG","ICY HOT","ICY HOT ARTHRITIS","ICY HOT VAPOR","ICY HOT WITH CAPSAICIN","ICY HOT WITH METHYL SALICYLATE","IDAMYCIN","IDAMYCIN PFS","IDE-CET","IDELVION","IDENAL","IDHIFA","IFEREX","IFEREX 150 FORTE","IFEX","IFEX  MESNEX KIT 10","IFEX  MESNEX KIT 26","IFEX  MESNEX KIT 53","IFEX MESNEX KIT","IFEX MESNEX KIT 26","IFEX MESNEX KIT 53","ILARIS","ILETIN I, LENTE","ILETIN II LENTE PORK","ILETIN II REGULAR PORK","ILETIN NPH","ILETIN REGULAR","ILEVRO","ILEX SKIN","ILOSONE","ILOTYCIN","ILOTYCIN GLUCEPTATE","ILOZYME","ILUVIEN","IMBRUVICA","IMDUR","IMFINZI","IMIPRAMIDE","IMITREX","IMLYGIC","IMODIUM","IMODIUM A-D","IMODIUM A-D NEW FORMULA","IMODIUM ADVANCED","IMODIUM MULTI-SYMPTOM RELIEF","IMOGAM","IMOGAM RABIES-HT","IMOTIL","IMOVAX","IMOVAX RABIES","IMPAVIDO","IMPLANON","IMPOYZ","IMURAN","IMVEXXY","INAPSINE","INCIVEK","INCRELEX","INCRUSE","INDERAL","INDERIDE","INDERIDE 4025","INDERIDE 8025","INDERIDE LA","INDIGO CARMINE TRADE NAME","INDIOMIN","INDOCIN","INDOCIN SR","INFALYTE","INFANRIX","INFANTAIRE","INFANTAIRE GAS RELIEF","INFASURF","INFED","INFERGEN","INFLECTRA","INFUMORPH","INFUVITE","INFUVITE PEDIATRIC","INGREZZA","INJECTAFER","INLYTA","INNOFEM","INNOHEP","INNOPRAN","INNOPRAN XL","INNOVAR","INOCOR I. V.","INOMAX","INOSITECH","INOVA","INOVA 4-1","INOVA 41","INOVA 8-2","INSPRA","INSTA-CHAR","INSTA-GLUCOSE","INSTACORT","INSTANTFOAM","INSTILLAGEL","INSULIN PORK MIX","INTAL","INTAL INHALER","INTEGRA F","INTEGRILIN","INTELENCE","INTERMEZZO","INTESTINEX","INTRALIPID","INTRAROSA","INTRON A","INTROVALE 91 DAY","INTUNIV","INTUNIV KIT 2128","INTUNIV KIT 77","INVANZ","INVEGA","INVERSINE","INVIRASE","INVOKAMET","INVOKANA","INZO","IOBID DM","IODAL HD","IODEX","IODO PLAIN","IODO-HC","IODOFLEX","IODOPEN","IODOSORB","IODROL NR","IOFED PD","IOFEN","IOFEN-NF","IOHIST D","IOHIST DM","IONAMIN","IONAMIN-15","IONAMINE","IONIL PLUS","IONIL SHAMPOO","IONIL T","IONIL T PLUS","IONOSOL-B","IONOSOL-MB","IONOSOL-T","IONSYS","IONTOCAINE","IOPAMIDOL-200","IOPAMIDOL-250","IOPAMIDOL-370","IOPHEN","IOPHEN DM","IOPHEN NR","IOPHEN-C NF","IOPHEN-C NR","IOPIDINE","IOSAL II","IOSAT","IOTEX PSE","IOTUSSIN D LIQUID","IOTUSSIN HC","IPLEX","IPM WOUND","IPOL","IPRIVASK","IPSATOL COUGH FORMULA","IQUIX","IRCON","IRCON-FA","IRENKA","IRESSA","IROFOL DROPS","IRON 300","IRON SOL","IRON SUPPLEMENT","IRONMAR","IROSPAN","IROSPAN 246 KIT","IROSPAN TABLET","ISAGEL","ISENTRESS","ISIBLOOM 28 DAY","ISMO","ISMOTIC PB","ISO-ACETAZONE","ISOCAINE","ISOCAINE WITH LEVONORDEFRIN","ISOCET","ISOCHRON","ISOCOM","ISODETTES","ISODITRATE","ISOLLYL","ISOLYTE H","ISOLYTE H AND DEXTROSE","ISOLYTE M","ISOLYTE P","ISOLYTE S","ISOLYTE S IN 5 % DEXTROSE","ISONARIF","ISOPHEN-DF","ISOPLATE","ISOPTIN","ISOPTIN I.V.","ISOPTIN SR","ISOPTO ALKALINE","ISOPTO ATROPINE","ISOPTO CARBACHOL","ISOPTO CETAMIDE","ISOPTO CETAPRED","ISOPTO FRIN","ISOPTO HOMATROPINE","ISOPTO HYOSCINE","ISOPTOCARPINE","ISORDIL","ISORDIL TEMBIDS","ISORDIL TITRADOSE","ISOVATE","ISOVEX","ISOVUE 370","ISOVUE-128","ISOVUE-250","ISOVUE-300","ISOVUE-M-200","ISTALOL","ISTODAX","ISUPREL","ISUPREL HCL","ISUPREL MISTOMETER","ITCH RELIEF","ITCH-X","ITCH-X MAXIMUM STRENGTH","ITMD LAMICTAL CD","IVAREST","IVAREST MAXIMUM STRENGTH","IVDERM","IVEEGAM","IVEEGAM EN","IVOCORT","IVY BLOCK","IVY DRY SUPER","IVY DRY SUPER CONTINUOUS SPRAY","IVY-DRY CREAM","IVY-DRY KIDS","IXEMPRA","IXIARO","IXINITY"]'));
        // Block#: FxGsR}dtt%$iBKYT%5P~
        com.fc.JavaScriptDistLib.Dictionary.setDictValue(LibVars.medicationlistlib.medDict, 'I', LibVars.medicationlistlib.tempDict);
        // Block#: ,ye;ac:5b?s7IgMVWkL1
        LibVars.medicationlistlib.tempDict = (com.fc.JavaScriptDistLib.JSON.parseJSONData('["J TAN D","J-COF DHC","J-MAX","J-MAX DHC","J-MAX TABLETS","J-TAN D HC","JADENU","JAIMIESS 91 DAY","JAKAFI","JALYN","JANTOVEN","JANUMET","JANUMET 1001000","JANUMET 501000","JANUMET 50500","JANUVIA","JARDIANCE","JAY-PHYL","JAYCOF HC","JAYCOF XP","JAYCOF-HC","JE-VAX","JENAMICIN","JENCYCLA 28 DAY","JENLOGA","JENTADUETO","JET-ALERT","JETREA","JEVANTIQUE","JEVTANA","JINTELI","JOHNSONS NO MORE RASH","JOINTFLEX","JOINTFLEX ICE","JOLESSA 91 DAY","JOLIVETTE","JOLIVETTE 28 DAY","JOY ANTIBACTERIAL","JUBLIA","JULEBER 28 DAY","JULUCA","JUNEL","JUNEL 1.530 21 DAY","JUNEL 120 21 DAY","JUNEL FE","JUNEL FE 1.530 28 DAY","JUNEL FE 120 28 DAY","JUNEL FE 24 120 28 DAY","JUNIOR PAIN RELIEVER","JUNIOR STRENGTH TYLENOL","JUST ONE PER DAY","JUVISYNC","JUXTAPID","JYNARQUE","JYNARQUE 4515 CARTON","JYNARQUE 6030 CARTON","JYNARQUE 9030 CARTON"]'));
        // Block#: tFgJKmt#~,voAB~{Hn2q
        com.fc.JavaScriptDistLib.Dictionary.setDictValue(LibVars.medicationlistlib.medDict, 'J', LibVars.medicationlistlib.tempDict);
        // Block#: IaB)i1C|l`435y?GjAO`
        LibVars.medicationlistlib.tempDict = (com.fc.JavaScriptDistLib.JSON.parseJSONData('["K + POTASSIUM","K EFFERVESCENT","K PLUS CARE","K PLUS CARE ET","K TAN","K TUSSIN DM","K+ CARE ET","K+CARE","K-10","K-8","K-C SUSPENSION","K-DUR","K-DUR 20","K-EFFERVESCENT","K-LOR","K-LYTE","K-LYTE CI","K-LYTE CL","K-PEC","K-PEK","K-PEK II","K-PEK REFORMULATED JUN 2008","K-PHOS","K-PHOS M.F.","K-PHOS NEUTRAL","K-PHOS NO 2","K-SOL","K-SOL PRESERVING MEDIUM","K-TAB","K-VESCENT","K-Y PLUS NONOXYNOL 9","KA-PEC","KA-PEK","KABIKINASE","KADCYLA","KADIAN","KAITLIB FE 28 DAY","KALBITOR","KALETRA","KALLIGA 28 DAY","KALYDECO","KANTREX","KANUMA","KAO-PAVERIN","KAO-PULGITE","KAO-SPEN","KAO-TIN","KAO-TIN CAPSULE","KAO-TIN REFORMULATED FEB 2008","KAOCHLOR","KAOCHLOR S-F","KAODENE NN SUSPENSION","KAON","KAON-CI","KAON-CL","KAON-CL 20%","KAOPECTATE","KAOPECTATE 1-D","KAOPECTATE CHILD","KAOPECTATE EXTRA STRENGTH","KAOPECTATE REFORMULATED AUG 2006","KAOPECTATE STOOL SOFTENER","KAOPEK","KAPECTOLIN","KAPECTOLIN REFORMULATED JUN 2008","KAPIDEX","KAPSPARGO","KAPVAY","KAPVAY DOSE PACK","KARBINAL","KARIDIUM","KARIVA 28 DAY","KASOF","KATO","KAY CIEL","KAYEXALATE","KAZANO","KCENTRA","KCL-40","KEDBUMIN","KEDRAB","KEEP ALERT","KEFLEX","KEFLIN","KEFUROX","KEFZOL","KELNOR","KELNOR 135 28 DAY","KELNOR 150 28 DAY","KEMSTRO","KEN-JEC","KEN-JEC 40","KENAJECT","KENAJECT-40","KENALOG","KENALOG 40","KENALOG-10","KENGREAL","KEPIVANCE","KEPPRA","KERA NAIL","KERA-42","KERAFOAM","KERALAC","KERALYT","KERALYT 5","KERALYT 6 SCALP COMPLETE","KERALYT SCALP","KERASAL","KERASAL AL","KERASAL EXFOLIATING FOOT MOISTURIZER THERAPY","KERATOL","KERATOL 40","KERATOL HC","KERLONE","KEROL","KERYDIN","KESTRONE 5","KETALAR","KETEK","KETOCON PLUS","KETODAN","KEVEYIS","KEVZARA","KEY-PRED","KEY-PRED SP","KEYTRUDA","KG HIST D","KG HIST DM","KG-DAL HD","KG-DAL HD PLUS","KG-FED","KG-FED EXPECTORANT","KG-FED PEDIATRIC EXPECTORANT","KG-HIST D","KG-TUSS HD","KG-TUSSIN","KGS HC","KGS-PE","KHEDEZLA","KID KARE DROPS","KID\'S CHOICE","KIE","KIMIDESS 28 DAY","KINERASE","KINERET","KINEVAC","KINLYTIC","KINRIX","KIONEX","KISQALI","KISQALI 200 MG DAILY DOSE CARTON","KISQALI 400 MG DAILY DOSE CARTON","KISQALI 600 MG DAILY DOSE CARTON","KISQALI FEMARA CO-PACK 200","KISQALI FEMARA CO-PACK 400","KISQALI FEMARA CO-PACK 600","KITA LA TOS","KITABIS","KLARON","KLERIST-D","KLONOPIN","KLONOPIN WAFER","KLOR-CON","KLOR-CON 8","KLOR-CON M15","KLOR-CON M20","KLOR-CON25","KLOR-CONEF","KLORVESS","KLORVESS EFFERVESCENT","KOATE","KOATE DVI","KOGENATE","KOLA-PECTIN","KOLDETS COUGH DROP","KOLEPHRIN","KOLEPHRIN DM","KOLEPHRIN GGDM","KOLORZ","KOMBIGLYZE","KOMBIGLYZE 2.51000","KOMBIGLYZE 51000","KOMBIGLYZE 5500","KONAKION","KONDREMUL PLAIN","KONDREMUL WITH PHENOLPHTALEIN","KONSYL","KONSYL FIBER","KONSYL FOR KIDS","KONSYL ORANGE","KONSYL SENNA PROMPT","KONSYL-D","KOPHANE","KORLYM","KOROMEX","KOROMEX CONTRACEPTIVE","KOROMEX CREAM","KOROMEX CRYSTAL CLEAR GEL","KOVALTRY","KOVANAZE","KOVIA","KRAFTOBESE","KRAFTOBESE GR","KRAFTPLEG","KRAFTSTAT-35","KRISTALOSE","KROGER","KRONOFED-A","KRYSTEXXA","KU-ZYME","KU-ZYME HP","KUDROX","KURIC","KURVELO","KUTKIT STYPS","KUTRASE","KUVAN","KWAI","KWELCOF","KYBELLA","KYLEENA","KYMRIAH","KYNAMRO","KYPROLIS","KYTRIL"]'));
        // Block#: epg6jE=dF#(WAh;J~pO-
        com.fc.JavaScriptDistLib.Dictionary.setDictValue(LibVars.medicationlistlib.medDict, 'K', LibVars.medicationlistlib.tempDict);
        // Block#: /!0JXelO~APX;PE{$.7;
        LibVars.medicationlistlib.tempDict = (com.fc.JavaScriptDistLib.JSON.parseJSONData('["L-ALL 12","L-ALL 12 NF","L-CAINE","L-DROMORAN","L-FORMULA","L-MYCIN","LA NASAL DECONGESTANT","LA-12","LAC-DOSE","LAC-HYDRIN","LAC-HYDRIN FIVE","LAC-HYDRIN TEN","LACLOTION","LACRI-LUBE","LACRI-LUBE S.O.P.","LACRISERT","LACTAID","LACTAID EXTRA STRENGTH","LACTAID ULTRA","LACTASE EXTRA STRENGTH","LACTICARE","LACTICARE-HC","LACTINOL","LACTINOL-E","LACTOCAL","LACTRASE","LADY-LAX","LAGESIC","LAGICAM","LAMICTAL","LAMICTAL BLUE (FOR PATIENTS TAKING VALPROATE)","LAMICTAL GREEN (FOR PATIENTS TAKING CARBAMAZEPINE, PHENYTOIN, PHENOBARBITAL, PRIMIDONE, OR RIFAMPIN AND NOT TAKING VALPROATE)","LAMICTAL ODT BLUE PATIENT TITRATION KIT (FOR PATIENTS TAKING VALPROATE)","LAMICTAL ODT GREEN TITRATION KIT (FOR PATIENTS TAKING ENZYME-INDUCING DRUGS AND NOT TAKING VALPROATE)","LAMICTAL ODT ORANGE PATIENT TITRATION KIT (FOR PATIENTS NOT TAKING ENZYME-INDUCING DRUGS OR VALPROATE)","LAMICTAL ORANGE (FOR PATIENTS NOT TAKING CARBAMAZEPINE, PHENYTOIN, PHENOBARBITAL, PRIMIDONE, OR RIFAMPIN AND NOT TAKING VALPROATE)","LAMICTAL XR BLUE PATIENT TITRATION KIT (FOR PATIENTS TAKING VALPROATE)","LAMICTAL XR GREEN PATIENT TITRATION KIT (FOR PATIENTS TAKING CARBAMAZEPINE, PHENYTOIN, PHENOBARBITAL, OR PRIMIDONE, AND NOT TAKING VALPROATE)","LAMICTAL XR ORANGE PATIENT TITRATION KIT (FOR PATIENTS NOT TAKING CARBAMAZEPINE, PHENYTOIN, PHENOBARBITAL, PRIMIDONE, OR VALPROATE)","LAMISIL","LAMISIL AT","LAMISIL DEFENSE","LAMPRENE","LANABIOTIC","LANACANE","LANAPHILIC WITH UREA","LANIROIF","LANOXICAPS","LANOXIN","LANOZIN","LANSINOH","LANTEX-LA","LANTISEPTIC","LANTISEPTIC MULTI-PURPOSE","LANTISEPTIC NOURISHING SKIN","LANTISEPTIC PROTECTIVE","LANTUS","LAPASE","LARGON","LARIAM","LARIN 1.530","LARIN 120","LARIN 24 FE 120","LARIN FE 1.530","LARIN FE 120","LARISSIA 28 DAY PACK","LARODOPA","LARTRUVO","LARYNG-O-JET","LASIX","LASSARS ZINC","LASTACAFT","LASTOLIC","LATISSE","LATRIX","LATUDA","LAVACOL","LAVIV","LAVOCLEN","LAX PREPARE","LAX-EASE","LAX-EASE MAXIMUM STRENGTH","LAX-PILLS","LAX-SOFTENER","LAXA BASIC","LAXADAN","LAXATIV PLUS","LAXATIV PLUS (PHENOLPHTHALEIN)","LAXATIVE (CASANTHROL-DOCUSATE)","LAXATIVE (DOCUSATE-PHENOLPHTHALEIN)","LAXATIVE (PHENOLPHTHALEIN)","LAXATIVE GENTLE SUPPOSITORIES","LAXATIVE NATURAL","LAXATIVE PLUS","LAXINATE","LAXMAR","LAYOLIS FE 28","LAZANDA","LAZER CREME","LAZERFORMALYDE","LAZERSPORIN-C","LEADER","LEADER ACID REDUCER","LEADER ALLERGY RELIEF D","LEADER NAPROXEN","LEADER NICOTINE POLACRILEX","LECITHIN NATURAL","LECITHIN-SOFTGELS","LEDERCILLIN VK","LEENA 28 DAY","LEG EASE PM","LEG-GESIC","LEGATRIN PM","LEMTRADA","LENVIMA","LENVIMA 10","LENVIMA 14","LENVIMA 18","LENVIMA 20","LENVIMA 24","LENVIMA 8","LENZAGEL","LENZAPATCH","LESCOL","LESSINA","LESSINA 21 DAY","LESSINA 28 DAY","LETAIRIS","LEUKERAN","LEUKINE","LEUSTATIN","LEVACET","LEVALL","LEVALL 2","LEVALL 5.0","LEVALL G","LEVALL REFORMULATED FEB 2008","LEVALL-12","LEVAQUIN","LEVAQUIN LEVA PACK","LEVATOL","LEVBID","LEVEMIR","LEVITRA","LEVLEN","LEVLEN 21 DAY","LEVLEN 28 DAY","LEVLITE 28 DAY","LEVO-T","LEVONEST 28 DAY","LEVOPHED","LEVOPROME","LEVORA","LEVORA 0.1530 21 DAY","LEVORA 0.1530 28 DAY","LEVOTABS","LEVOTHROID","LEVOXY","LEVOXYL","LEVSIN","LEVSIN WITH PHENOBARBITAL","LEVSINEX","LEVSINSL TABLETS","LEVULAN","LEXAPRO","LEXIFEN","LEXINAL","LEXISCAN","LEXIVA","LEXXEL","LEXXEL 52.5","LIALDA","LIBRAX","LIBRAX REFORMULATED AUG 2006","LIBRITABS","LIBRIUM","LICE KILLING","LICE MD","LICE TREATMENT MAXIMUM STRENGTH","LICE-X LIQUID","LICON","LIDA MANTLE","LIDAMANTLE","LIDAMANTLE HC","LIDAZONE HC","LIDEX","LIDEX-E","LIDOCARE","LIDOCORT","LIDOCREAM","LIDODAN","LIDODERM","LIDOJECT","LIDOJECT 1","LIDOJECT 2","LIDOMAR","LIDOOCAINE","LIDOPATCH","LIDOPEN","LIDOPRO","LIDOPRO PATCH","LIDOSENSE","LIDOSITE","LIDOTHOL","LIDOTRAL","LIDOVIR","LIDOWORX","LIDOZEN","LIF-O-GEN","LIFE-O-GEN","LIGNOSPAN","LIGNOSPAN WITH EPINEPHRINE","LILETTA","LILLOW 28 DAY","LIMBITROL","LIMBITROL DS","LIMBREL","LINCOCIN","LINCOREX","LINDE","LINHIST-L.A.","LINZESS","LIORESAL","LIORESAL INTRATHECAL","LIPITOR","LIPODOX","LIPOFEN","LIPOFLAVOVIT","LIPOSYN II","LIPOSYN III","LIPRAM","LIPRAM CR20","LIPRAM CR5","LIPRAM UL 18","LIPRAM UL12","LIPRAM-CR","LIPRAM-CR 20","LIPRAM-CR5","LIPRAM-PN","LIPRAM-UL 12","LIPRAM-UL 20","LIPTRUZET","LIQ-10","LIQSORB","LIQUADD","LIQUI HISTINE D","LIQUI-ALLERGY","LIQUI-CHAR","LIQUI-CHAR WITH SORBITOL","LIQUI-DUALCITRA","LIQUI-FLUR","LIQUI-HISTINE","LIQUI-HISTINE-D","LIQUI-MINIC INFANT","LIQUI-SOOTH","LIQUI-TUSS HD","LIQUIBID","LIQUIBID DR","LIQUIBID PDR","LIQUIBID-D","LIQUIBID-PD","LIQUICET","LIQUICOUGH DM","LIQUICOUGH HC","LIQUID CO-Q10","LIQUID PEDVAXHIB","LIQUID PRED","LIQUIDBID 1200","LIQUIDBID LA","LIQUIHISTINE CS","LIQUIHISTINE DM","LIQUIMAT","LIQUIMAT LIGHT","LIQUIMAT MEDIUM","LIQUIPHED DM","LIQUIPRIN","LIQUITEX","LIQUITUSS ELIXIR","LIQUITUSS HD","LIQUITUSS R-DM","LIQUITUSSIN HC","LIQUITUSSIN HC SYRUP","LISPRO PRC","LISTERINE","LISTERINE ANTISEPTIC","LISTERINE ESSENTIAL CARE TARTAR CONTROL","LITECOAT ASPIRIN","LITHANE","LITHOBID","LITHOSTAT","LITHOTABS","LITTLE BOTTOMS DIAPER RASH","LITTLE COLDS","LITTLE FEVERS","LITTLE NOSES","LITTLE NOSES DECONGESTANT","LITTLE OUCHIES","LITTLE REMEDIES FOR COLDS DECONGESTANT PLUS COUGH","LITTLE TUMMYS","LITTLE TUMMYS LAXATIVE DROPS","LIVALO","LIVOSTIN","LMX","LMX 4","LMX 4 WITH TEGADERM","LMX 5","LMX PLUS","LO LOESTRIN FE 28 DAY","LO MINASTRIN FE 28 DAY","LO SIMPESSE 91 DAY","LO-AQUA","LO-ZUMANDIMINE 28 DAY","LOBAC","LOCHOLEST","LOCHOLEST LIGHT","LOCOID","LOCOID LIPOCREAM","LODINE","LODINE XL","LODOCORT","LODOCORTISONE","LODOSYN","LODRANE","LODRANE 12D","LODRANE 24D","LODRANE D","LODRANE LD","LODRANE LIQUID","LOESTRIN 1.530 21 DAY","LOESTRIN 120 21 DAY","LOESTRIN 24 FE 28 DAY","LOESTRIN FE 1.530 28 DAY","LOESTRIN FE 120 28 DAY","LOFIBRA","LOHIST 12D","LOHIST D","LOK-PAK","LOKARA","LOKELMA","LOLLICAINE","LOMAIRA","LOMEDIA 24 FE","LOMOCOT","LOMOTIL","LONG ACTING NASAL","LONG LASTING NASAL","LONGS GLUCOSE","LONHALA","LONITEN","LONOX","LONSURF","LOOPERAMIDE","LOOVRAL","LOOVRAL 21 DAY","LOOVRAL 28 DAY","LOPID","LOPREEZA 0.50.1 28 DAY","LOPREEZA 10.5 28 DAY","LOPRESSOR","LOPRESSOR HCT","LOPROX","LOPROX TS","LOPURIN","LOQUA","LORABID","LORABID PULVULES","LORADAMED","LORAZEPAM INTENSOL","LORCET","LORCET 10650","LORCET HD","LORCET PLUS","LORELCO","LOROXIDE","LORTAB","LORTAB 0.533.3","LORTAB 10500","LORTAB 2.5500","LORTAB 5500","LORTAB 7.5500","LORTAB ASA","LORTUSS DM","LORTUSS DM REFORMULATED APR 2011","LORTUSS EX","LORTUSS HC","LORTUSS LQ","LORYNA 28 DAY","LORZONE","LOSEASONIQUE","LOSO PREP BOWEL CLEANSING SYSTEM","LOSOSPAN","LOSOSPAN PLUS","LOTEMAX","LOTENSIN","LOTENSIN HCT","LOTREL","LOTREL 1020","LOTREL 1040","LOTREL 2.510","LOTREL 510","LOTREL 520","LOTREL 540","LOTRIMIN","LOTRIMIN AF","LOTRIMIN JOCK ITCH POWDER","LOTRIMIN ULTRA","LOTRISONE","LOTRONEX","LOTUSSIN","LOTUSSIN DM","LOVAZA","LOVENOX","LOVING LOTION","LOW DOSE ASA","LOW SODIUM PLUS","LOW-OGESTREL 21 DAY","LOW-OGESTREL 28 DAY","LOWSIUM","LOWSIUM PLUS","LOXITANE","LOXITANE C","LOXITANE IM","LOZI-FLUR","LOZOL","LTA","LTA 360","LTA PED","LUBRIFRESH P.M.","LUCEMYRA","LUCENTIS","LUCIDEX","LUCONAZOLE","LUDEN\'S","LUDEN\'S DROPS","LUDENT","LUFYLLIN","LUFYLLIN-EPG","LUFYLLIN-GG","LUGOLS STRONG IODINE","LUMICAIN","LUMIGAN","LUMINAL","LUMIZYME","LUNELLE","LUNESTA","LUPANETA PACK 1-MONTH","LUPANETA PACK 3-MONTH","LUPRON","LURIDE","LURLINE PMS","LUSAIR","LUSEDRA","LUSONAL","LUSONAL REFORMULATED OCT 2008","LUSONEX","LUSONEX PLUS","LUSTRA","LUTATHERA","LUTERA","LUTERA 28 DAY","LUTREPULSE","LUVENA FEMININE WIPES","LUVERIS","LUVOX","LUXIQ","LUXTURNA","LUZU","LYDIA E. PINKHAM","LYMERIX","LYMPHAZURIN","LYNOX 10300","LYNOX 2.5300","LYNOX 5300","LYNOX 7.5300","LYNPARZA","LYPHOCIN","LYRICA","LYSODREN","LYSTEDA","LYZA"]'));
        // Block#: -bID7paf7}},0axAjss:
        com.fc.JavaScriptDistLib.Dictionary.setDictValue(LibVars.medicationlistlib.medDict, 'L', LibVars.medicationlistlib.tempDict);
        // Block#: (6=/l0?Ty165GSe%*;O^
        LibVars.medicationlistlib.tempDict = (com.fc.JavaScriptDistLib.JSON.parseJSONData('["M CLEAR JR REFORMULATED OCT 2007","M-CAPS","M-CLEAR","M-CLEAR REFORMULATED OCT 2007","M-CLEAR WC","M-END","M-END DM","M-END DMX","M-END LIQUID","M-END MAX","M-END MAX D","M-END PE","M-END REFORMULATED OCT 2008","M-END WC","M-HIST T.D.","M-M-R II","M-PHEN","M-PREDNISOLONE","M-R-VAX II","M.A.H.","M.T.E.-4","M.T.E.-4 CONCENTRATED","M.T.E.-5","M.T.E.-6","M.T.E.-7","MAALOX","MAALOX ANTACID BARRIER","MAALOX ANTI-DIARRHEAL","MAALOX ANTI-GAS","MAALOX ANTI-GAS EXTRA STRENGTH","MAALOX CHILDREN\'S","MAALOX DAILY FIBER THERAPY","MAALOX HRF","MAALOX JUNIOR PLUS ANTIGAS","MAALOX MAX","MAALOX MAX QUICK DISSOLVE","MAALOX PLUS","MAALOX PLUS EXTRA STRENGTH","MAALOX QUICK DISSOLVE","MAALOX QUICK DISSOLVE MAXIMUM STRENGTH","MAALOX T.C.","MAALOX TOTAL STOMACH RELIEF","MACROBID","MACRODANTIN","MACRODEX","MACUGEN","MACUVITE","MACUVITE WITH LUTEIN","MAG 64","MAG-200","MAG-DELAY","MAG-G","MAG-OX 400","MAG-SR","MAG-TAB SR","MAGAANT","MAGAGEL","MAGAGEL PLUS","MAGALDRATE PLUS","MAGALOX PLUS","MAGAN","MAGDELAY","MAGGEL","MAGINEX","MAGINEX DS","MAGNACET","MAGNACET 10400","MAGNACET 2.5400","MAGNACET 5400","MAGNACET 7.5400","MAGNALOX","MAGNAPRIN","MAGNEBIND","MAGNEBIND 250300","MAGNEBIND 400 RX","MAGNEBIND 400200","MAGNEVIST","MAGONATE","MAGONATE REFORMULATED DEC 2013","MAGTRATE","MAJOR-CIN","MAJOR-CON","MAJORCON","MAKENA","MALARONE","MALARONE PEDIATRIC","MALATAL","MALDEC","MALDEC DM","MALDEC-DM","MALDEMAR","MALDROXAL","MALDROXAL PLUS","MALLAZINE","MALLISOL","MALLOPRESS","MALLOTUSS","MALTSUPEX","MANDELAMINE","MANDELAY","MANDOL","MANE N\' TAIL MINERAL ICE","MANTADIL","MAOLATE","MAOSON","MAPAP","MAPAP CHILDRENS COLD","MAPAP COLD","MAPAP COLD CHILDRENS","MAPAP COLD FORMULA","MAPAP JUNIOR STRENGTH","MAPAP PM","MAPAP SINUS","MAPAP SINUS CONGESTION AND PAIN","MAR-COF BP","MAR-COF CG","MAR-ZINC","MARAX","MARAX DF","MARBLEN","MARCAINE","MARCAINE HCL","MARCAINE HCL WITH EPINEPHRINE","MARCAINE SPINAL","MARCAINE WITH EPINEPHRINE","MARCAINE WITH EPINEPHRINE 0.751:200000","MARCILLIN","MARCOF EXPECTORANT","MARDOL","MAREZINE","MARFARIN","MARGESIC","MARGESIC #3","MARGESIC-H","MARINE MIST","MARINOL","MARKET BASKET","MARLEXATE","MARLISSA 28 DAY","MARPLAN","MARPRES","MARQIBO","MARTEN-TAB","MARTHRITIC","MASANTI","MASANTI DS","MASANTI II","MASOPHEN","MASOPHEN PM","MASPORIN","MASPORIN OTIC","MASSENGILL","MASSENGILL MEDICATED DOUCHE","MASTUSSIN","MASTUSSIN DM","MASTUSSIN PE","MATMATE","MATULANE","MATZIM","MAVIK","MAVYRET","MAX HC","MAX-FREEZE","MAXAIR","MAXAIR AUTOHALER","MAXALT","MAXALT-MLT","MAXAQUIN","MAXCOSIN LA","MAXI TUSS HCG","MAXI-TUSS DM","MAXI-TUSS HC","MAXI-TUSS HCX","MAXI-TUSS SA","MAXICHLOR","MAXICHLOR PEH","MAXICHLOR PEH DM","MAXICHLOR PSE","MAXICHLOR PSE DM","MAXIDEX","MAXIDONE","MAXIFED","MAXIFED CD","MAXIFED CDX","MAXIFED DM","MAXIFED DM REFORMULATED JUL 2008","MAXIFED DMX","MAXIFED DMX REFORMULATED JUL 2008","MAXIFED REFORMULATED JUL 2008","MAXIFED-G","MAXIFED-G CD","MAXIFED-G CDX","MAXIFED-G REFORMULATED JUL 2008","MAXIFLOR","MAXIFLU","MAXIFLU CD","MAXIFLU CDX","MAXIFLU DM","MAXIMUM ACETAMINOPHEN","MAXIMUM ALLERGY RELIEF","MAXIMUM D3","MAXIMUM STRENGTH MYLANTA GAS","MAXIMUM STRENGTH WART REMOVER","MAXIPHEN","MAXIPHEN ADT","MAXIPHEN CD","MAXIPHEN CDX","MAXIPHEN DM REFORMULATED JUL 2008","MAXIPHEN REFORMULATED JUL 2008","MAXIPHEN-G","MAXIPHEN-G DM","MAXIPIME","MAXITROL","MAXIVISION LUTEIN FORMULA","MAXZIDE","MAZANOR","MB-TAB","MD HYDROCORTISONE","MD-76","MD-GASTROVIEW","MEBARAL","MECHOLYL","MECLAN","MECLICOT","MECLOMEN","MECTALYTE","MED ASPIRIN","MED-HIST","MED-HIST EXPECTORANT","MED-HIST-HC","MED-JEC-40","MED-RX","MED-RX DM","MEDA CAP","MEDASULF","MEDCODIN","MEDENT","MEDENT C","MEDENT DM","MEDENT LD","MEDENT LDI","MEDENT-PE","MEDENT-PEI","MEDEREK","MEDERMA ADVANCED SCAR","MEDERMA PM","MEDERMA STRETCH MARK THERAPY","MEDEX-LA","MEDI-DERM","MEDI-DERM WITH LIDOCAINE","MEDI-LYTE","MEDI-PAD","MEDI-PASTE","MEDI-QUIK","MEDI-QUIK SPRAY","MEDICAINE","MEDICAINE STING","MEDICATED BLUE","MEDICONE","MEDICONE HEMORRHOIDAL","MEDICORT","MEDIDEX","MEDIDEX LA","MEDIDIOL 10","MEDIGESIC","MEDIHALER-EPI","MEDIHALER-ERGOTAMINE","MEDIHALER-ISO","MEDILAX","MEDIPAIN 5","MEDIPLAST","MEDIPRED","MEDISPAZ","MEDITEST","MEDIVERT","MEDRALONE 40","MEDRALONE 80","MEDROL","MEDROL DOSE PACK 21","MEDROL DOSEPAK","MEDROX","MEDTUSS HD","MEFOXIN","MEGA C ACID PLUS","MEGA-CA PLUS","MEGA-TRIM","MEGACE","MEGACE ES","MEKINIST","MEKTOVI","MELAMIN","MELAMIX","MELANEX","MELANOL","MELATONEX","MELFIAT","MELLARIL","MELLARIL-S","MELODETTA 24 FE CHEWABLE 28 DAY","MELPAQUE HP","MELQUIN HP","MELQUIN-3","MEMBRANEBLUE","MEN-PHOR","MENACTRA","MENADOL","MENAVAL-20","MENEST","MENHIBRIX","MENI-D","MENOGEN","MENOGEN HS","MENOMUNE ACYW-135","MENOPUR","MENOSTAR","MENTAX","MENTHAC ARTHRITIS CREAM WITH CAPSAICIN","MENTHOLATUM","MENTHOLATUM PAIN RELIEF","MENVEO","MEPERGAN","MEPERGAN FORTIS","MEPERITAB","MEPHYTON","MEPRON","MEPROZINE","MEPSEVII","MERCUROCLEAR","MERIDIA","MERREM","MERSOL","MERUVAX II","MESANTOIN","MESNEX","MESTINON","METADATE","METADATE CD","METADATE ER","METAGLIP","METAGLIP 2.5 MG250 MG","METAGLIP 2.5 MG500 MG","METAGLIP 5 MG500 MG","METAHISTINE D","METAHYDRIN","METAMUCIL","METAMUCIL CLEAR & NATURAL","METANX","METAPREL","METATENSIN #2","METATENSIN #4","METAXALL","METED","METFORMING","METHACORT 40","METHACORT 80","METHADEX","METHADOSE","METHAGUAL","METHERGINE","METHITEST","METHYLCOTOL","METHYLIN","METHYLIN ER","METHYLONE 80","METHYLPRED","METICORTEN","METIMYD","METOPIRONE","METOZOLV","METROCREAM","METRODIN","METROGEL","METROGEL-VAGINAL","METROLOTION","METRONIDALE","METROPROLOL","METRYL","METUBINE IODIDE","METVIXIA","MEVACOR","MEXAR","MEXITIL","MEXSANA","MEZLIN","MG 217","MG 217 PSORIASIS","MG PLUS PROTEIN","MG217 PSORIASIS COAL TAR","MG217 PSORIASIS SALICYLIC ACID","MHP-A","MI-ACID","MI-ACID DOUBLE STRENGTH","MI-ACID GAS RELIEF","MI-OMEGA","MIACALCIN","MIBELAS 24 FE CHEWABLE 28 DAY","MICADERM","MICANOL","MICARDIS","MICARDIS-HCT","MICATIN","MICATIN FOOT POWDER","MICATIN FOOT POWDER DEODORANT","MICATIN JOCK ITCH","MICATIN LIQUID FOOT","MICOMP-PB","MICON 7","MICON-80","MICONAZOLE 7","MICORT-HC","MICRAININ","MICRHOGAM","MICRO-GUARD","MICRO-K","MICRO-K LS","MICROGESTIN","MICROGESTIN 1.530 21 DAY","MICROGESTIN 120 21 DAY","MICROGESTIN 24 FE 28 DAY","MICROGESTIN FE 1.530 28 DAY","MICROGESTIN FE 120 28 DAY","MICROLIPID","MICRONASE","MICRONEFRIN","MICRONOR","MICROZIDE","MIDAMOR","MIDCHLOR","MIDOL COMPLETE","MIDOL CRAMPS & BODYACHES","MIDOL EXTENDED RELIEF","MIDOL IB","MIDOL LONG LASTING RELIEF","MIDOL MAXIMUM STRENGTH CRAMP FORMULA","MIDOL MAXIMUM STRENGTH MENSTRUAL","MIDOL PM","MIDOL PM REFORMULATED APR 2011","MIDOL PMS MAXIMUM STRENGTH","MIDOL TEEN","MIDRIN","MIFEPREX","MIGERGOT","MIGQUIN","MIGRACET-PB","MIGRAN-A","MIGRANAL","MIGRATEN","MIGRATINE","MILANTEX","MILI 28 DAY","MILK OF MAGNESIA","MILKINOL","MILLIPRED","MILLIPRED DP 12 DAY","MILLIPRED DP 6 DAY","MILONTIN","MILTOWN","MIMVEY","MIMVEY LO 28 DAY","MINASTRIN 24 FE 28 DAY","MINASTRIN 24 FE CHEWABLE 28 DAY","MINDAL DM","MINERAL ICE","MINIDROPS","MINIDYNE","MINIPRESS","MINIPRIN","MINIRIN","MINITABS","MINITRAN","MINIVELLE","MINIZIDE","MINOCIN","MINOLIRA","MINOTAL","MINT SORE THROAT","MINTAB DM","MINTEX","MINTEX DM","MINTEX HC","MINTEX PD","MINTEX PSE","MINTEZOL","MINTOX","MINTOX PLUS","MINTUSS DM","MINTUSS DR","MINTUSS EX","MINTUSS G","MINTUSS HC","MINTUSS HC REFORMULATED FEB 2009","MINTUSS MR","MINTUSS MS","MINTUSS NX","MIO-REL","MIOCHOL","MIOCHOL PLUS","MIOCHOL-E","MIOSTAT","MIRACLE FOOT REPAIR","MIRADON","MIRALAX","MIRANEL","MIRANEL AF","MIRAPEX","MIRAPHEN LA","MIRAPHEN PE","MIRCERA","MIRCETTE 28 DAY","MIRENA","MIRTAZDINE","MIRVASO","MITIGARE","MITOSOL","MITRAN","MITRAZOL","MITRIDE","MITROLAN","MIVACRON","MOBAN","MOBIC","MOBIDIN","MOBIGESIC","MOBISYL","MOCTANIN","MODANE","MODANE BULK","MODANE PLUS","MODANE REFORMULATED SEP 2008","MODANE SOFT","MODERIBA","MODERIBA 1000 DOSE PACK","MODERIBA 1200 DOSE PACK","MODERIBA 600 DOSE PACK","MODERIBA 800 DOSE PACK","MODICON","MODICON 28 DAY","MODURETIC 5-50","MOISTURE EYES PM","MOISTURE-EYES","MOISTUREL","MOISTUREL THERAPEUTIC","MOL-IRON","MOLLIFENE","MOLYPEN","MOMENTUM TRADENAME","MOMEXIN","MOMEXIN KIT","MONAFED DM","MONARC-M","MONDOXYNE","MONISTAT","MONISTAT 1 DAY OVULE COMBINATION PACK","MONISTAT 1 DAY WITH SUPPOSITORIES","MONISTAT 1 WITH SUPPOSITORIES","MONISTAT 3","MONISTAT 3 COMBINATION PACK","MONISTAT 3 DAY OVULE COMBINATION PACK","MONISTAT 3 DAY WITH SUPPOSITORIES","MONISTAT 3 VAGINAL CREAM COMBINATION PACK","MONISTAT 3 VAGINAL CREAM COMBINATION PACK WITH PREFILLED APPLICATORS","MONISTAT 3 WITH SUPPOSITORIES","MONISTAT 5","MONISTAT 7","MONISTAT 7 COMBINATION PACK","MONISTAT 7 DAY WITH SUPPOSITORIES","MONISTAT 7 VAGINAL CREAM COMBINATION PACK","MONISTAT 7 VAGINAL CREAM COMBINATION PACK WITH PREFILLED APPLICATORS","MONISTAT 7 VAGINAL CREAM COMBINATION PACK WITH VAGINAL CREAMS","MONISTAT 7 WITH SUPPOSITORIES","MONISTAT I.V.","MONISTAT ITCH RELIEF","MONISTAT SIMPLE THERAPY","MONISTAT SOOTHING CARE","MONISTAT-1","MONISTAT-DERM","MONO-LINYAH 28 DAY","MONOCAL","MONOCETE","MONOCID","MONOCLATE","MONOCLATE-P","MONODOX","MONOJEL","MONOKET","MONONESSA","MONONESSA 28 DAY","MONONINE","MONOPRIL","MONOPRIL HCT","MONOVISC","MONTE-G HC","MONTECOUGH","MONTEFLU HC","MONUROL","MOOREDEC","MOORETAN S PEDIATRIC","MORGIDOX","MORNING AFTER","MORPHABOND","MOSCO CORN & CALLUS REMOVER","MOSCO NAIL A CAIN","MOSCO ONE STEP CORN REMOVER","MOSCO-CAIN","MOTION-AID","MOTOFEN","MOTRIN","MOTRIN CHILDRENS","MOTRIN COLD AND FLU","MOTRIN COLD CHILDRENS","MOTRIN IB SINUS","MOTRIN JUNIOR STRENGTH","MOTRIN MIGRAINE PAIN","MOTRIN PM","MOTRIN SINUS HEADACHE","MOVANTIK","MOVIPREP","MOXATAG","MOXEZA","MOXILIN","MOZOBIL","MPM ANTI-FUNGAL","MPM RADIAPLEX","MS CONTIN","MSIR","MSP-BLU","MSS","MST 600","MTX SUPPORT","MUCINEX","MUCINEX CHILDREN\'S COUGH","MUCINEX CHILDREN\'S MULTI-SYMPTOM COLD","MUCINEX CHILDREN\'S NIGHT TIME MULTI-SYMPTOM COLD","MUCINEX COLD","MUCINEX COUGH","MUCINEX D","MUCINEX DM","MUCINEX FAST-MAX COLD & FLU NIGHTTIME","MUCINEX FAST-MAX COLD AND SINUS","MUCINEX FAST-MAX COLD, FLU AND SORE THROAT","MUCINEX FAST-MAX DAY TIME SEVERE COLD AND NIGHT TIME COLD AND FLU MAXIMUM STRENGTH","MUCINEX FAST-MAX NIGHT TIME COLD AND FLU","MUCINEX FAST-MAX SEVERE COLD","MUCINEX FAST-MAX SEVERE CONGESTION AND COUGH","MUCINEX NASAL SPRAY","MUCINEX NON-DROWSY ALLERGY","MUCINEX SINUS-MAX DAY","MUCINEX SINUS-MAX DAY & NIGHT","MUCINEX SINUS-MAX NIGHT","MUCINEX SINUS-MAX PRESSURE AND PAIN","MUCINEX SINUS-MAX SEVERE CONGESTION RELIEF","MUCINEX STUFFY NOSE & COLD","MUCO-FEN","MUCO-FEN 1000 DM","MUCO-FEN 1200","MUCO-FEN 600 DM","MUCO-FEN 800","MUCO-FEN 800 DM","MUCO-FEN DM","MUCO-FEN LA","MUCOBID DM","MUCOBID-L.A.","MUCOMYST","MUCUS RELIEF","MUCUS RELIEF DM","MUDRANE","MUDRANE GG","MUDRANE GG-2","MULTAQ","MULTE-PAK-4","MULTE-PAK-5","MULTI SYMPTOM COUGH AND COLD","MULTI-DELYN","MULTI-HIST DM","MULTI-SYMPTOM COLD RELIEF","MULTIGEN","MULTIGEN PLUS","MULTIHANCE","MULTIHIST D","MULTIHIST D SR","MULTIHISTAMINE-D","MULTIHISTAMINE-D PED","MULTIPLE TRACE ELEMENT","MULTIPLE TRACE ELEMENT NEONATAL","MULTIPLE TRACE ELEMENT PEDIATRIC","MULTITRACE-4","MULTITRACE-4 CONCENTRATE","MULTITRACE-4 NEONATAL","MULTITRACE-4 PEDIATRIC","MULTITRACE-5","MUMPSVAX","MURINE DRY EYES","MURINE EAR","MURINE EAR DROPS","MURINE TEARS PLUS","MURO 128","MURO EYE OINTMENT","MUROCEL","MUROCOLL 2","MUSE","MUSTARGEN","MUTAMYCIN","MVASI","MVC-FLUORIDE","MVI PEDIATRIC","MY CHOICE","MY WAY","MY-E","MY-O-DEN","MYALEPT","MYAMBUTOL","MYCAMINE","MYCASONE","MYCELEX","MYCELEX OTC","MYCELEX TROCHES","MYCELEX-3","MYCELEX-7","MYCI","MYCIFRADIN","MYCIGUENT","MYCINAIRE","MYCINETTE SORE THROAT SPRAY","MYCITRACIN PLUS PAIN RELIEVER","MYCITRACIN TRIPLE ANTIBIOTIC","MYCO BIOTIC","MYCO BIOTIC II","MYCO TRIACET II","MYCO-TRIACET","MYCOBUTIN","MYCOCIDE NS","MYCOGEN","MYCOGEN II","MYCOLOG","MYCOLOG II","MYCOMAR","MYCOSTATIN","MYCOSTATIN TOPICAL","MYDAYIS","MYDEX","MYDFRIN","MYDOCS","MYDRAL","MYDRIACYL","MYELO-KIT","MYFEDRINE","MYFORTIC","MYGEL","MYGEL II","MYGRACET","MYGREX","MYHIST DM","MYKIDZ IRON","MYKROX","MYLAGEL","MYLAGEL II","MYLAGEN","MYLAGEN-II","MYLANTA","MYLANTA AR","MYLANTA CHILD","MYLANTA DS FAST ACTING","MYLANTA GAS","MYLANTA GAS RELIEF GELTAB","MYLANTA GELCAP","MYLANTA SUPREME","MYLANTA TONIGHT","MYLANTA ULTIMATE","MYLANTA ULTRA","MYLAVAL","MYLERAN","MYLICON","MYLOCAINE","MYLOTARG","MYOBLOC","MYOCHRYSINE","MYOCIDIN","MYOFLEX","MYOLIN","MYOPHEN","MYORISAN","MYOXIN","MYOZYME","MYPHETANE DC","MYPHETANE DX","MYPHETAPP","MYRAC","MYRBETRIQ","MYSOLINE","MYTAB GAS","MYTELASE","MYTESI","MYTEX","MYTREX","MYTUSSIN","MYTUSSIN AC","MYTUSSIN DAC","MYTUSSIN DM","MYTUSSIN PE","MYZILRA 28 DAY","MZM"]'));
        // Block#: Y|G1kkf%#hAUv74aUXjC
        com.fc.JavaScriptDistLib.Dictionary.setDictValue(LibVars.medicationlistlib.medDict, 'M', LibVars.medicationlistlib.tempDict);
        // Block#: U_JcdT=+vgIX9rp#X}QL
        LibVars.medicationlistlib.tempDict = (com.fc.JavaScriptDistLib.JSON.parseJSONData('["N ICE WITH VITAMIN C","N\'ICE","N.T.A.","NA-ZONE","NABI-HB","NACON","NAFAZAIR","NAFRINSE","NAFTIN","NAGLAZYME","NAIL-EX","NALACET","NALDA-RELIEF PEDIATRIC","NALDECON","NALDECON CX","NALDECON DX LIQUIGEL","NALDECON PEDIATRIC","NALDECON SENIOR DX","NALDECON-CX ADULT","NALDECON-DX ADULT","NALDECON-DX CHILDRENS","NALDECON-DX PEDIATRIC","NALDECON-EX PEDIATRIC","NALDECON-EX SENIOR","NALDELATE","NALDELATE DX CHILDRENS","NALDELATE DX PEDIATRIC","NALDELATE PEDIATRIC","NALEX AC","NALEX DH","NALEX EXPECTORANT","NALEX-A","NALEX-A 12","NALFED","NALFED PD","NALFON","NALGESTIC PEDIATRIC","NALLPEN","NALOCET","NALPHEN DX CHILDRENS","NALPHEN DX PEDIATRIC","NALPHEN PEDIATRIC","NALSPAN","NALSPAN PEDIATRIC","NALSPAN SENIOR DX","NAMENDA","NAMENDA 28 TITRATION PACK","NAMENDA 49 TITRATION PACK","NAMENDA TRITRATION PAK","NAMZARIC","NAMZARIC TITRATION PACK","NAPEOXEN","NAPHCON","NAPHCON A","NAPHCON FORTE","NAPRELAN","NAPRELAN DOSE CARD","NAPROSYN","NAPROSYN EC","NAPROXRN","NAQUA","NARCAN","NARCOF","NARDIL","NARFARIN","NARIZ","NARIZ HC","NAROPIN","NARVOX","NASABID","NASABID 25090","NASABID 60090","NASABID SR","NASACORT","NASACORT AQ","NASADROPS","NASAHIST B","NASAHIST LA","NASAL DECONGESTANT-ANTIHISTAMINE","NASAL LA","NASAL MOIST","NASAL RELIEF","NASAL TABLET","NASALCROM","NASALCROM CHILD","NASALIDE","NASAREL","NASATUSS","NASCOBAL","NASEX","NASIN","NASIN NASAL","NASOFED","NASOFLOW","NASOHIST","NASOHIST-DM","NASONEX","NASOP","NASOP SUSPENSION","NASOPEN","NASOPEN PE","NASOPEN-CH","NASOTUSS","NATACYN","NATAFORT","NATAZIA 28 DAY","NATELLE","NATESTO","NATPARA","NATRECOR","NATROBA","NATURAL FIBER THERAPY","NATURAL THYROID","NATURAL VEGETABLE","NATURAL VEGETABLE LAXATIVE","NATURE FUSION COLD & FLU","NATURE FUSION COUGH","NATURE\'S TEARS","NATURE-THROID","NATURES REMEDY","NATURETIN-10","NATURETIN-5","NAUSEA CONTROL","NAUZENE","NAVA-SC","NAVANE","NAVELBINE","NAVOGAN","NAVSTEL","NAZARIN","NAZARIN HC","ND STAT","NEBCIN","NEBCIN PEDIATRIC","NEBU-SOL","NEBUPENT","NEBUSAL","NECON","NECON 0.535 21 DAY","NECON 0.535 28 DAY","NECON 1011 28 DAY","NECON 135 21 DAY","NECON 135 28 DAY","NECON 150","NECON 150 21 DAY","NECON 150 28 DAY","NECON 777 28 DAY","NEGGRAM","NEILFED","NELOVA","NELOVA 150 M","NEMBUTAL","NEMBUTAL SODIUM","NEO AC","NEO DM","NEO DM DROPS","NEO DM SYRUP","NEO POLY HC","NEO-CALGLUCON","NEO-CORTEF","NEO-DECADRON","NEO-DECADRON CREAM","NEO-DEX","NEO-DEXAIR","NEO-FRADIN","NEO-HC","NEO-MEDROL ACETATE","NEO-POLYCIN","NEO-POLYCIN HC","NEO-SYNALAR","NEO-SYNEPHRINE","NEO-SYNEPHRINE 12 HOUR","NEO-SYNEPHRINE OPHTHALMIC","NEO-TAB","NEOBENZ MICRO","NEOBENZ MICRO CREAM PLUS PACK","NEOBENZ MICRO PACK","NEOBENZ MICRO SD","NEOBENZ MICRO WASH","NEOBENZ MICRO WASH PLUS PACK","NEOCIDIN","NEOCIDIN OINTMENT","NEOCIDIN SOLUTION","NEOCIN","NEOCIN PG","NEOFRIN","NEOLOID","NEOPAP SUPPRETTES","NEOPOLYDEX","NEOPROFEN","NEOQ10","NEORAL","NEOSAR","NEOSOL","NEOSPORIN","NEOSPORIN AF","NEOSPORIN ECZEMA","NEOSPORIN ESSENTIALS TRIAL PACK","NEOSPORIN G. U. IRRIGANT","NEOSPORIN LIP HEALTH OVERNIGHT RENEWAL THERAPY","NEOSPORIN LT LIP TREATMENT","NEOSPORIN MOISTURIZING","NEOSPORIN NEO TO GO","NEOSPORIN NEO TO GO!","NEOSPORIN OINTMENT","NEOSPORIN PLUS MAXIMUM STRENGTH","NEOSPORIN PLUS MAXIMUM STRENGTH CREAM","NEOSPORIN PLUS MAXIUM STRENGTH OINTMENT","NEOSPORIN SOLUTION","NEOSPORIN WOUND CLEANSER","NEOTERIC DIABETIC","NEOTHYLLINE","NEOTIC","NEOTRACE-4","NEOTRICIN HC","NEOTUSS","NEOTUSS D","NEOTUSS IMPROVED","NEOTUSS PLUS","NEOVA COMPLEX HQ PLUS","NEPHRAMINE","NEPHRO CALCI","NEPHRO-FER","NEPHRO-FER RX","NEPHROCAPS","NEPHROCAPS QT","NEPHROX","NEPTAZANE","NERAPAMIL","NERLYNX","NERVINE","NERVOCAINE","NESACAINE","NESACAINE MPF","NESCON PD","NESINA","NETROMYCIN","NEUAC","NEULASTA","NEUMEGA","NEUPOGEN","NEUPRO","NEUPRO KIT","NEUROFORTE-R","NEURONTIN","NEUTRA CAINE","NEUTRA MAXX","NEUTRA-PHOS","NEUTRACARE","NEUTRAGARD","NEUTRAHIST","NEUTRAHIST DROPS","NEUTRAHIST PDX","NEUTRAMAXX","NEUTRAPHOR","NEUTRAPHORUS REX SKIN PROTECTANT","NEUTREXIN","NEUTROGENA ACNE MASK","NEUTROGENA ACNE WASH OIL FREE","NEUTROGENA HEALTHY SCALP DANDRUFF SHAMPOO","NEUTROGENA ON SPOT ACNE TREATMENT","NEUTROGENA RAPID CLEAR GEL","NEUTROGENA T-SCALP","NEUTROGENA TDERM","NEUTROGENA TGEL DAILY CONTROL","NEUTROGENA TGEL EXTRA STRENGTH","NEUTROGENA TSAL","NEVANAC","NEW-SKIN LIQUID BANDAGE","NEW-SKIN POISON IVY","NEW-SKIN SCAR FADE","NEXA SELECT","NEXA SELECT REFORMULATED FEB 2013","NEXAFED","NEXAFED SINUS AND PAIN","NEXAVAR","NEXAVIR","NEXESTA FE 28 DAY","NEXICLON","NEXIUM","NEXPHEN PD","NEXPLANON","NEXT CHOICE","NEXT CHOICE ONE DOSE","NEXTERONE","NIACOR","NIACOR B3","NIASPAN","NICAZEL","NICLOCIDE","NICO-400","NICOBID TEMPULES","NICODERM C-Q","NICOLAR","NICOMIDE","NICOMIDE-T","NICORELIEF","NICORETTE","NICOSYN","NICOTINEX","NICOTROL","NICOTROL INHALER","NICOTROL NS","NICOTROL REFILL","NIFEDIAC","NIFEDIAC CC","NIFEDICAL","NIFEDPINE","NIFEREX","NIFEREX-150","NIGHT TIME COLD MEDICINE","NIGHT TIME PAIN MEDICINE EXTRA STRENGTH","NIGHT TIME SLEEP-AID","NIGHTIME COLD MEDICINE","NIKKI 28 DAY","NIKZON","NILANDRON","NILSTAT","NIMBEX","NIMOTOP","NINJACOF","NINJACOF A","NINJACOF XG","NINLARO","NIPENT","NIPRIDE","NIRAVAM","NITE TIME COLD","NITETIME","NITHIODOTE","NITREK","NITRO MACRO","NITRO TD PATCH-A","NITRO-BID","NITRO-BID IV","NITRO-DUR","NITRO-PAR","NITRO-TIME","NITRODISC","NITROFURANTIN","NITROGARD","NITROL","NITROLINGUAL","NITROMIST","NITRONAL","NITRONG","NITROPRESS","NITROQUICK","NITROSTAT","NITYR","NIVA-FOL","NIX CREAM RINSE","NIZORAL","NO 7 STAY PERFECT","NO DOZ","NO DOZ MAXIMUM STRENGTH","NOCDURNA","NOCTIVA","NODOLOR","NOGENIC HC","NOHIST","NOHIST A","NOHIST DM","NOHIST DMX","NOHIST-PLUS","NOLAHIST","NOLAMINE","NOLIX","NOLVADEX","NOMUC-PE","NON ASPIRIN EXTRA STRENGTH","NON ASPIRIN FLU","NON-ASPIRIN","NON-ASPIRIN CHILDREN\'S PAIN RELIEVER","NON-ASPIRIN CHILDRENS COLD","NON-ASPIRIN PAIN RELIEVER","NON-ASPIRIN PM","NON-ASPIRIN SINUS","NON-DROWSY SINUS MAXIMUM STRENGTH","NONBAC","NOR-QD","NOR-QD 28 DAY","NORA-BE 28 DAY","NORCO","NORCO 10325","NORCO 5325","NORCO 7.5325","NORCURON","NORDETTE","NORDETTE 28 DAY","NORDITROPIN","NORDITROPIN CARTRIDGE","NOREL","NOREL AD","NOREL CS","NOREL DM","NOREL EX","NOREL LA","NOREL SD","NOREL SR","NORETHIN 150 M","NORFLEX","NORGESIC","NORGESIC FORTE","NORINYL","NORINYL 1+35 21 DAY","NORINYL 1+50 28 DAY","NORINYL 1-50","NORINYL 135 28 DAY","NORISC","NORISODRINE WITH CALCIUM IODINE","NORITATE","NORLYDA 28 DAY","NORLYROC","NORLYROC 28 DAY","NORMIFLO","NORMLSHIELD","NORMODYNE","NORMOSOL-M","NORMOSOL-R","NORMOSOL-R IN 5 % DEXTROSE","NOROXIN","NORPACE","NORPACE CR","NORPLANT","NORPRAMIN","NORTEMP","NORTHERA","NORTHYX","NORTREL","NORTREL 0.535 28 DAY","NORTREL 135 21 DAY","NORTREL 135 28 DAY","NORTREL 777 21 DAY","NORTREL 777 28 DAY","NORTUSS-NX","NORVASC","NORVAXS","NORVIR","NORWICH ASPIRIN","NOSTRILLA","NOTRIPTYLINE","NOTUSS","NOTUSS AC","NOTUSS DC","NOTUSS PD","NOTUSS PE","NOTUSS-FORTE","NOTUSS-NX","NOTUSS-NXD","NOVACET","NOVACORT","NOVADYNE DH","NOVADYNE EXPECTORANT","NOVAFERRUM","NOVAFERRUM 125","NOVAFERRUM D","NOVAFERRUM IRON","NOVAFERRUM REFORMULATED OCT 2010","NOVAGESIC","NOVAGEST","NOVAGEST WITH CODEINE","NOVAHISTINE DH","NOVAHISTINE DH REFORMULATED OCT 2008","NOVAHISTINE DMX","NOVAHISTINE ELIXIR","NOVAHISTINE EXPECTORANT","NOVAMINE","NOVAMINE 15%","NOVANTRONE","NOVAREL","NOVASAL","NOVASUS","NOVOCAINE","NOVOEIGHT","NOVOLIN","NOVOLIN 7030","NOVOLIN 7030 PENFILL","NOVOLIN L","NOVOLIN N","NOVOLIN N PENFILL","NOVOLIN R","NOVOLOG","NOVOLOG MIX","NOVOLOG MIX 7030","NOVOLOG MIX 70:30","NOVOSEVEN","NOVOTHYROX","NOXAFIL","NP THYROID","NP-27","NPLATE","NRS NASAL","NTZ LONG ACTING NASAL","NU-IRON","NU-IRON 150","NU-MED","NUBAIN","NUCALA","NUCO-TUSS EXPECTORANT","NUCO-TUSS PEDIATRIC EXPECTORANT","NUCOCHEM","NUCOCHEM EXPECTORANT","NUCOCHEM PEDIATRIC EXPECTORANT","NUCODINE","NUCODINE EXPECTORANT","NUCODINE PEDIATRIC","NUCOFED","NUCOFED EXPECTORANT","NUCOFED PEDIATRIC EXPECTORANT","NUCORT","NUCOTUSS","NUCOTUSS EXPECTORANT","NUCOTUSS PEDIATRIC EXPECTORANT","NUCYNTA","NUDAL HD","NUEDEXTA","NUFOL","NULECIT","NULEV","NULLO","NULOJIX","NULYTELY","NUMOBID DX","NUMONYL","NUMORPHAN HCL","NUMOTIZINE","NUOX","NUPERCAINAL","NUPERCAINAL HC 1%","NUPERCAINAL SUPPOSITORIES","NUPLAZID","NUPRIN","NUPRIN BACKACHE","NUPRO","NUPRO CHLORHEXIDINE","NUQUIN HP","NUROMAX","NUTR-E-SOL","NUTRACORT","NUTRADROPS","NUTRALOX","NUTRAPLUS","NUTRESTORE","NUTRILIPID","NUTRILYTE","NUTRILYTE II","NUTRISOURCE","NUTROPIN","NUTROPIN AQ","NUTROPIN AQ NUSPIN 5","NUTROPIN DEPOT","NUVARING","NUVESSA","NUVIGIL","NUWIQ","NUZOLE","NUZON","NY-TANNIC","NYAMYC","NYATA","NYDAMAX","NYDRAZID","NYLIA 135 28 DAY","NYLIA 777 28 DAY","NYMALIZE","NYQUIL ALCHOHOL FREE","NYQUIL ALCOHOL FREE","NYQUIL CHILD COUGH AND COLD","NYQUIL COLD & FLU","NYQUIL COLD & FLU RELIEF","NYQUIL COLD MEDICINE","NYQUIL COUGH","NYQUIL D","NYQUIL MULTI-SYMPTOM","NYQUIL SEVERE COLD & FLU","NYQUIL SINEX","NYST-OLONE","NYST-OLONE II","NYSTEX","NYSTOP","NYTOL","NYTOL CAPLET"]'));
        // Block#: 1169@Q#a;xh$qwxZ-UXK
        com.fc.JavaScriptDistLib.Dictionary.setDictValue(LibVars.medicationlistlib.medDict, 'N', LibVars.medicationlistlib.tempDict);
        // Block#: ^z2::5M2AS=;`U4N;M|N
        LibVars.medicationlistlib.tempDict = (com.fc.JavaScriptDistLib.JSON.parseJSONData('["OAKLIDE","OASIS TEARS","OBAGI","OBAGI NU DERM","OBAGI NU-DERM SUNFADER","OBENIX","OBEPHEN","OBEZINE","OBIZUR","OBREDON","OBY-CAP","OBY-TRIM","OC 8 ADULT ACNE","OCALIVA","OCCLUSAL-HP","OCEAN BLUE NUTRITIONALS OMEGA-3 1450","OCEAN BLUE NUTRITIONALS VITAMIN B PLUS OMEGA-3 1450","OCELLA 28 DAY","OCREVUS","OCTAGAM","OCTOCAINE","OCTOCAINE WITH EPINEPHRINE","OCTYCINE","OCTYCINE-100","OCTYCINE-250","OCU-CAINE","OCU-CARPINE","OCU-CHLOR","OCU-CORT","OCU-DEX","OCU-FLUR 10","OCU-MYCIN","OCU-PENTOLATE","OCU-PHRIN","OCU-PRED","OCU-PRED FORTE","OCU-PRED-A","OCU-SPORE-B","OCU-SPORE-G","OCU-SUL","OCU-SUL 10","OCU-SUL 15","OCU-SUL 30","OCU-TRACIN","OCU-TROL","OCU-TROPIC","OCU-TROPINE","OCU-ZOLINE","OCUCLEAR","OCUDOX","OCUFEN","OCUFLOX","OCUFRESH","OCUHIST","OCUMYCIN","OCUPRESS","OCUSOFT","OCUSULF-10","OCUTRICIN HC","OCUVITE","OCUVITE LUTEIN","ODACTRA","ODEFSEY","ODOMZO","ODORLESS PAIN","OFEV","OFF-EAZY","OFIRMEV","OGEN","OGESTREL 28 DAY","OHM ALLERGY RELIEF","OKEBO","OLEPTRO","OLUMIANT","OLUX","OLYSIO","OMECLAMOX","OMEDIA","OMIDRIA","OMNARIS","OMNI GEL","OMNI-MED","OMNICEF","OMNICEF OMNI-PAC","OMNIHIB","OMNIHIST","OMNIHIST II L.A.","OMNII","OMNIPAQUE","OMNIPEN","OMNIPEN-N","OMNIPRED","OMNISCAN","OMNISCAN SAFEPAK","OMNITROPE","OMONTYS","OMTRYG","ONCASPAR","ONCET","ONCOVIN","ONDANESTRON","ONDANSETRON NOVAPLUS","ONE STEP PINWORM TREATMENT","ONE TOUCH","ONE TOUCH REFORMULATED APR 2009","ONETAB COLD AND FLU","ONEXTON","ONFI","ONGLYZA","ONIVYDE","ONMEL","ONSET FORTE","ONSOLIS","ONTAK","ONXOL","ONY-CLEAR","ONZETRA","OPANA","OPCICON ONE-STEP","OPCON-A","OPDIVO","OPHTHAINE","OPHTHETIC","OPHTHOCORT","OPIUM DEODORIZED","OPSUMIT","OPTASE","OPTICAINE","OPTICROM","OPTICYL","OPTIFLEX-C","OPTIFLEX-G","OPTIGENE","OPTIMARK","OPTIMINE","OPTIMYD","OPTION 2","OPTIPRANOLOL","OPTIRAY 160","OPTIRAY 240","OPTIRAY 300","OPTIRAY 320","OPTIRAY 350","OPTIVAR","ORA RELIEF","ORABASE","ORABASE BABY TEETHING GEL","ORABASE GEL-B","ORABASE LIP HEALER","ORABASE WITH BENZOCAINE","ORABLOC","ORACEA","ORACIT","ORADENT","ORAGESIC","ORAGRAFIN SODIUM","ORAJEL","ORAJEL BABY","ORAJEL BABY NIGHTTIME","ORAJEL BABY TOOTH AND GUM CLEANER","ORAJEL BLEEDING GUM RINSE","ORAJEL D","ORAJEL DENTURE","ORAJEL DENTURE PLUS","ORAJEL DRY MOUTH","ORAJEL MAXIMUM STRENGTH","ORAJEL MAXIMUM STRENGTH PM","ORAJEL MAXIMUM STRENGTH TOOTHACHE","ORAJEL MOUTH SORE MEDICINE","ORAJEL MOUTH SORE RINSE","ORAJEL MOUTH-AID","ORAJEL MOUTH-AID LIQUID","ORAJEL PERIOSEPTIC MAXIMUM STRENGTH","ORAJEL ULTRA","ORAJEL ULTRA MOUTH SORE MEDICINE","ORAL B ANTI-CAVITY","ORAL B FLUORINSE","ORAL-B MINUTE-FOAM","ORAL-B NEUTRA","ORAL-B RINSE","ORALAIR 100","ORALAIR 300","ORALAIR CHILDREN AND ADOLESCENTS SAMPLE KIT","ORALONE","ORAMAGIC PLUS","ORAMORPH","ORAMORPH SR","ORANGE C","ORAP","ORAPRED","ORAQIX","ORASEP","ORASEP REFORMULATED DEC 2013","ORASONE","ORASTAT","ORATUSS","ORAVERSE","ORAVIG","ORAXYL","ORAZINC","ORAZINC 110","ORAZINC 220","ORBACTIV","ORBEC","ORBEXA","ORBIVAN","ORBIVAN CF","ORDRINE AT","ORENCIA","ORENITRAM","ORETIC","ORETICYL 25","ORETICYL 50","ORETICYL FORTE","ORETON METHYL","ORFADIN","ORFRO","ORGADIN","ORGADIN-TUSS DM","ORGAN-1 NR","ORGANIDIN NR","ORGARAN","ORILISSA","ORINASE","ORINASE DIAGNOSTIC","ORIS","ORKAMBI","ORLAAM","ORLENTA","ORMAZINE","ORNEX","ORO CLENSE","ORPHENATE","ORPHENGESIC","ORPHENGESIC FORTE","ORSYTHIA 28 DAY","ORTHO CYCLEN","ORTHO DIENESTROL","ORTHO EVRA","ORTHO MICRONOR 28 DAY","ORTHO NOVUM","ORTHO TRI-CYCLEN 28 DAY","ORTHO TRI-CYCLEN LO 28 DAY","ORTHO-CEPT","ORTHO-CEPT 21 DAY","ORTHO-CEPT 28 DAY","ORTHO-CYCLEN 21 DAY","ORTHO-CYCLEN 28 DAY","ORTHO-GYNOL CONTRACEPTIVE","ORTHO-NESIC","ORTHO-NOVUM 1011 28 DAY","ORTHO-NOVUM 135 28 DAY","ORTHO-NOVUM 777 21 DAY","ORTHO-NOVUM 777 28 DAY","ORTHO-PREFEST 30 DAY","ORTHOCLONE OKT3","ORTHOVISC","ORTHOWASH","ORUDIS","ORUDIS KT","ORUVAIL","ORVATEN","OS CAL 500 WITH D","OS-CAL 500 WITH D","OS-CAL WITH D","OSCAL 500","OSCIMIN","OSCION","OSENI","OSMITROL","OSMOGLYN","OSMOLEX","OSMOPREP","OSPHENA","OSTEO BI-FLEX","OSTEO-PORETICAL","OSTERCAL-D","OTEZLA","OTEZLA 28-DAY STARTER PACK","OTEZLA STARTER PACK","OTI-MED","OTI-SONE","OTIC EAR CARE","OTIC EDGE","OTIC TRIDESILON","OTICAINE","OTICIN","OTICIN HC","OTICIN HC EAR DROPS","OTICOT HC","OTIGESIC","OTIMAR","OTIPRIO","OTO-END","OTOCAIN","OTOCIDIN","OTOCORT","OTOCORT STERILE SUSPENSION","OTOMAR HC","OTOMAX HC","OTOVEL","OTOZIN","OTOZONE","OTREXUP","OTRIVIN","OUTGRO PAIN RELIEF","OVABAN","OVACE","OVACE WASH","OVCON","OVCON 35 28 DAY","OVCON 35 FE 28 DAY","OVCON 50 28 DAY","OVIDE","OVIDREL","OVRAL 21 DAY","OVRAL 28 DAY","OVRETTE","OXANDRIN","OXAYDO","OXECTA","OXILAN","OXIPOR VHC","OXISTAT","OXSORALEN","OXTELLAR","OXY 10","OXY 10 BALANCE","OXY BALANCE","OXY BALANCE CLEANSING","OXY CLEAN","OXY CLEAN MEDICATED","OXY DAILY WASH","OXY FACE SCRUB","OXY IR","OXY MAXIMUM ACTION TREATMENT PAD","OXY NIGHTWATCH MAXIMUM STRENGTH","OXY ORAL","OXY VANISHING GEL","OXY-OTIC","OXYCONTIN","OXYFAST","OXYFRIN","OXYIR","OXYMETA-12","OXYTROL","OYSCO 500","OYSCO 500 WITH D","OYSCO D","OYSCO D WITH CALCIUM","OYSCO-500 WITH D","OYST CAL","OYST CAL 500","OYST CAL D","OYST CALCIUM","OYST-CAL-D","OYSTER CAL","OYSTER CALCIUM","OYSTER SHELL","OYSTER SHELL CALCIUM 500","OYSTER SHELL CALCIUM WITH VITAMIN D","OYSTER SHELLD","OYSTER-D","OYSTERCAL-D","OZEMPIC","OZURDEX"]'));
        // Block#: +(5Us%nu8vzM7Fx}xv7L
        com.fc.JavaScriptDistLib.Dictionary.setDictValue(LibVars.medicationlistlib.medDict, 'O', LibVars.medicationlistlib.tempDict);
        // Block#: vQb4Yfy9VJ%itXoz!:s^
        LibVars.medicationlistlib.tempDict = (com.fc.JavaScriptDistLib.JSON.parseJSONData('["P & S","P CHLOR GG","P TUSS","P TUSS D","P TUSS DM","P-1000","P-A-C ANALGESIC","P-HIST","P-HIST DM","P-TANN","P-TANN D","P-TEX","P-V-TUSSIN","P-V-TUSSIN SYRUP","P.T.E.-4","P.T.E.-5","P1E1","P2E1","P3E1","P4E1","P6E1","PACAPS","PACERONE","PACNEX","PAIN RELIEF (EFFERVESCENT)","PAIN RELIEF PM","PAIN RELIEF PM ADDED STRENGTH","PAIN RELIEF WITH ASPIRIN","PAIN RELIEVER ADDED STRENGTH","PAIN RELIEVER PM","PAIN-A-LAY GARGLE","PAIN-GESIC","PAINZONE","PALCAPS 10","PALCAPS 20","PALGIC","PALGIC D","PALGIC DS 0.45","PALGIC DS 0.46","PALGIC-DC","PALGIC-DS","PALIPASE","PALIPASE MT 16","PALIPASE MT 20","PALLADONE","PALOXIN","PALPEON DR 10","PALPEON DR 20","PALS CHLOROPHYLL COPPER COMPLEX","PALYNZIQ","PAMELOR","PAMINE","PAMINE FORTE DOSE PACK 60","PAMPRIN CRAMP FORMULA","PAMPRIN ES MULTI-SYMPTOM RELIEF FORMULA","PAMPRIN MAX FORMULA","PAMPRIN MAXIMUM PAIN","PAMPRIN MULTI-SYMPTOM","PAN-MIST LA","PANACET","PANADOL","PANADOL JR.","PANAFIL","PANAFIL WHITE","PANALGESIC GOLD","PANALGESIC GOLD LIQUID","PANASAL 5500","PANASE","PANATUSS DX","PANATUSS DXP","PANATUSS DXP PEDIATRIC","PANATUSS DXP PEDIATRIC REFORMULATED JUN 2012","PANATUSS PED","PANCOF","PANCOF EXP","PANCOF HC","PANCOF HC REFORMULATED FEB 2008","PANCOF XP","PANCOF XP REFORMULATED FEB 2008","PANCOF-PD","PANCREASE","PANCREASE MT 10","PANCREASE MT 16","PANCREASE MT 20","PANCREASE MT 4","PANCREATIC EC","PANCREATIC EC 4","PANCREATIL-UL 12","PANCREATIN 4X","PANCREAZE","PANCRECARB MS","PANCRECARB MS 16","PANCRECARB MS-4","PANCRECARB MS-8","PANCRELIPASE 16 MU","PANCRELIPASE 16000","PANCRELIPASE 20000","PANCRELIPASE DR","PANCRELIPASE EC","PANCRELIPASE MT 16","PANCRELIPASE SR","PANCRON 10","PANCRON 20","PANCRON DR","PANDEL","PANEX","PANEX 500","PANFIL","PANFIL G","PANGESTYME CN 10","PANGESTYME CN 20","PANGESTYME EC","PANGESTYME MT 16","PANGESTYME UL 12","PANGESTYME UL 18","PANGESTYME UL 20","PANHEMATIN","PANIXINE DISPERDOSE","PANLOR","PANLOR DC REFORMULATED JAN 2008","PANLOR REFORMULATED JAN 2018","PANLOR SS","PANMIST DM","PANMIST DM SR","PANMIST LA","PANMIST-S","PANMYCIN","PANNAZ","PANNAZ REFORMULATED SEP 2008","PANNAZ S","PANOCAPS","PANOCAPS MT 16","PANOCAPS MT 20","PANOKASE 16","PANOXYL","PANOXYL 10","PANOXYL 5","PANOXYL AQ","PANRETIN","PANRITIS FORTE","PANSCOL","PANSHAPE M","PANTHODERM","PAP-UREA","PAPACON","PAPFYLL","PARA-TIME S. R.","PARADIONE","PARAFLEX","PARAFON FORTE DSC","PARAL","PARAMOL","PARAPLATIN","PARCAINE","PARCOPA","PARDRYL","PAREMYD","PAREPECTOLIN","PARLODEL","PARNATE","PAROEX","PAROMYCIN","PARSABIV","PARTUSS-LA","PASER DR","PATADAY","PATANASE","PATANOL","PAVABID PLATEAU","PAVACOT","PAVAGEN","PAVULON","PAXAREL","PAXIDORM","PAXIL","PAXIL CR","PAXIPAM","PAZEO","PAZOL XS","PB HYOS","PB-ERGO-BELL","PBM ALLERGY SYRUP","PBZ","PBZ-SR","PC PEN VK","PC-10","PC-CAP","PCE","PCM-LA","PCXX NEUTRAL FOAM","PCXX NEUTRAL RINSE","PD COF","PD HIS D","PDM GG","PE-GUAI","PEDAMETH","PEDI-CORT V","PEDI-DRI","PEDI-PRO","PEDI-PRO (BENZALKONIUM)","PEDIA RELIEF","PEDIA RELIEF COUGH & COLD","PEDIA RELIEF DROPS","PEDIA-LAX","PEDIA-LAX CHEWABLE","PEDIA-LAX LIQUID","PEDIA-LAX LIQUID GLYCERIN SUPPOSITORIES","PEDIA-LAX PROBIOTIC","PEDIA-POP PALSICLES","PEDIACARE","PEDIACARE CHILDREN\'S 24-HR ALLERGY","PEDIACARE CHILDREN\'S ALLERGY","PEDIACARE CHILDREN\'S ALLERGY & COLD","PEDIACARE CHILDREN\'S COUGH AND CONGESTION","PEDIACARE CHILDREN\'S FEVER REDUCER PAIN RELIEVER","PEDIACARE CHILDREN\'S FLU PLUS APAP","PEDIACARE CHILDREN\'S MULTI-SYMPTOM COLD","PEDIACARE CHILDREN\'S MULTI-SYMPTOM COLD PLUS APAP","PEDIACARE CHILDREN\'S NIGHTREST MULTI-SYMPTOM COLD","PEDIACARE CHILDREN\'S PAIN & FEVER W IBUPROFEN","PEDIACARE CHILDREN\'S PLUS COUGH AND RUNNY NOSE","PEDIACARE COUGH & SORE THROAT PLUS APAP","PEDIACARE COUGH AND COLD","PEDIACARE COUGH AND COLD CHEWABLE","PEDIACARE COUGH AND COLD REFORMULATED FEB 2012","PEDIACARE COUGH PLUS COLD","PEDIACARE DECONGESTANT","PEDIACARE DROPS","PEDIACARE FEVER","PEDIACARE GAS RELIEF","PEDIACARE INFANT DECONGESTANT & COUGH","PEDIACARE INFANT DECONGESTANT & COUGH REFORMULATED OCT 2008","PEDIACARE INFANT FEVER PAIN RELIEVER","PEDIACARE INFANT FEVER REDUCER","PEDIACARE INFANT GAS RELIEF","PEDIACARE INFANTS COUGH","PEDIACARE INFANTS DECONGESTANT","PEDIACARE LONG ACTING","PEDIACARE LONG ACTING REFORMULATED FEB 2010","PEDIACARE MULTI SYMPTOM COLD","PEDIACARE NIGHTREST","PEDIACARE NIGHTTIME COUGH","PEDIACARE NIGHTTIME MULTI-SYMPTOM COLD","PEDIACOF","PEDIACON DX","PEDIADERM AF","PEDIADERM HC","PEDIADERM TA","PEDIAFLOR DROPS","PEDIAHIST DM","PEDIAHIST DM DROPS","PEDIALYTE","PEDIAMIST","PEDIAPAP","PEDIAPHEN","PEDIAPRED","PEDIARIX","PEDIATAN","PEDIATAN D","PEDIATEX","PEDIATEX 12","PEDIATEX 12 DM","PEDIATEX 12D","PEDIATEX CT","PEDIATEX D","PEDIATEX D 0.43.5","PEDIATEX DM","PEDIATEX HC","PEDIATEX TD","PEDIATEX TDM","PEDIATRIC APAP","PEDIATRIC COUGH AND COLD","PEDIATRIC RELIEF","PEDIAZOLE","PEDIOTIC","PEDIOX","PEDIOX CHEWABLE","PEDIOX-S","PEDIPIROX-4","PEDITEX","PEDITUSS","PEDTE-PAK-4","PEDTRACE-4","PEDURAL","PEDVAX HIB","PEDVAXHIB","PEG-INTRON","PEGANONE","PEGASYS","PEGINTRON","PEGYLAX","PELEVERUS","PEN-G MAX","PEN-V","PEN-VEE K","PENDEX","PENECORT","PENEDERM","PENETREX","PENLAC NAIL LACQUER","PENNSAID","PENTACARINAT","PENTACEL","PENTAM","PENTAM 300","PENTASA","PENTASPAN","PENTAZINE","PENTAZINE VC","PENTAZINE WITH CODEINE","PENTHRANE","PENTOSTAM","PENTOTHAL","PENTOXIL","PENTOXYL","PENTRAX","PENTRAX GOLD","PEP-BACK","PEPCID","PEPCID AC","PEPCID COMPLETE","PEPTAVLON","PEPTIC RELIEF","PEPTO BISMOL MAXIMUM STRENGTH","PEPTO DIARRHEA CONTROL","PEPTO-BISMOL","PEPTO-BISMOL CHILDREN\'S","PEPTO-BISMOL INSTACOOL PACK","PEPTO-BISMOL TO-GO COMBO PACK","PERANEX","PERCHLORACAP","PERCOCET","PERCOCET 10325","PERCOCET 10650","PERCOCET 2.5325","PERCOCET 5325","PERCOCET 7.5325","PERCOCET 7.5500","PERCODAN REFORMULATED MAY 2009","PERCODAN-DEMI","PERCOGESIC","PERCOGESIC BACKACHE","PERCOGESIC EXTRA STRENGTH","PERCOGESIC REFORMULATED JAN 2011","PERCOLONE","PERCY MEDICINE","PERDIEM","PERDIEM FIBER","PERDIEM FIBER CAPLET","PERDIEM OVERNIGHT","PERESTAN","PERFECT CHOICE","PERFECT CHOICE ONE MINUTE","PERFORM","PERFOROMIST","PERGONAL","PERI-COLACE","PERI-COLACE REFORMULATED FEB 2008","PERI-D.O.S.","PERI-DS","PERIACTIN","PERIDEX","PERIGIENE","PERIGUARD","PERIMAX PERIO RINSE","PERIO MED","PERIO PLUS","PERIOCHIP","PERIOGARD","PERIOSEP","PERIOSTAT","PERISINE","PERISOL","PERJETA","PERLOXX","PERLOXX 10300","PERLOXX 2.5300","PERLOXX 5300","PERLOXX 7.5300","PERMAPEN","PERMAX","PERMITIL","PERNOX","PERNOX LEMON","PERNOX LOTION","PERNOX REGULAR","PERNOX SCRUB CLEANSER","PERODERM","PEROX-A-MINT","PEROXIN A","PEROXIN A 10","PEROXYL","PERSA-GEL","PERSA-GEL W","PERSANTINE","PERT PLUS DANDRUFF","PERTOFRANE","PERTUSSIN CS CHILDRENS","PERTUSSIN ES","PERTZYE","PETROLA","PEXEVA","PFIZERPEN","PHARBETOL","PHARMADINE","PHARMADRINE","PHARMAGESIC","PHAZYME","PHAZYME-125 SOFTGELS MAXIMUM STRENGTH","PHEN TUSS DM","PHEN-LAX","PHEN-TUSS AD","PHENA-HC","PHENA-PLUS","PHENA-S","PHENABID","PHENABID DM","PHENADEX","PHENADOZ","PHENAMETH VC","PHENAPAP","PHENAPAP SINUS IMPROVED","PHENAPHEN WITH CODEINE","PHENAPHEN WITH CODEINE #3","PHENAPHEN WITH CODEINE #4","PHENASEP","PHENASEP CHERRY","PHENASEPTIC","PHENAVENT","PHENAVENT D","PHENAVENT LA","PHENAVENT PED","PHENAZINE","PHENAZINE 50","PHENAZO","PHENCARB GG","PHENCHLOR S.H.A.","PHENCHLOR TANNATE PEDIATRIC","PHENCLOR TANNATE","PHENCLOR TANNATE PEDIATRIC","PHENCO-CARE","PHENDACOF","PHENDACOF HC","PHENDAL HD","PHENDAL-HD","PHENDIET","PHENDIET 105","PHENDIET-105","PHENDRY","PHENEEN","PHENERBEL-S","PHENERGAN","PHENERGAN FORTIS","PHENERGAN VC","PHENERGAN VC WITH CODEINE","PHENERGAN WITH CODEINE","PHENERGAN WITH DEXTROMETHORPHAN","PHENERZINE","PHENFLU","PHENFLU CD","PHENFLU CDX","PHENFLU DM","PHENHIST","PHENHIST DH","PHENHIST DH WITH CODEINE","PHENHIST EXPECTORANT","PHENOBEL","PHENOHYTRO","PHENOJECT","PHENOJECT-50","PHENOL EZ","PHENOLAX","PHENOPTIC","PHENTERCOT","PHENTEX","PHENTRIDE","PHENURONE","PHENYDRYL","PHENYLDRINE","PHENYLEPHRINE HD","PHENYLEPHRINE, CHLORPHENIRAMINE, AND METHSCOPOLAMINE","PHENYLFENESIN","PHENYLFENESIN LA","PHENYLGESIC","PHENYLHISTINE","PHENYLHISTINE DH","PHENYLHISTINE DH EXPECTORANT","PHENYLHISTINE EXPECTORANT","PHENYTEK","PHENZENE","PHICON","PHILITH 28 DAY","PHILLIPS GEL","PHILLIPS M-O","PHILLIPS MILK OF MAGNESIA","PHILLIPS STOOL SOFTENER","PHILLIPS\' CRAMP-FREE","PHISOHEX","PHLEMEX","PHLEMEX FORTE","PHLEMEX-PE","PHLEMGESIC","PHOS FLUR RINSE","PHOS-FLUR","PHOSLO","PHOSLYRA","PHOSPHA 250 NEUTRAL","PHOSPHASAL","PHOSPHATE FLUORIDE","PHOSPHOLINE IODIDE","PHOTOFRIN","PHOTREXA","PHRENILIN","PHRENILIN FORTE","PHRENILIN WITH CAFFEINE AND CODEINE","PHYLLOCONTIN","PHYSIOLYTE","PHYSIOSOL","PICATO","PILAGAN","PILAGAN WITH C CAP","PILOCAR","PILOPINE","PILOPINE-HS","PILOPTIC","PILOPTIC-1","PILOPTIC-12","PILOPTIC-2","PILOPTIC-3","PILOPTIC-4","PILOPTIC-6","PILOSTAT","PIMTREA PACK","PIN-X","PINK BISMOL","PINK BISMUTH","PINWORM MEDICINE","PIPRACIL","PIRMELLA 135 28 DAY","PIRMELLA 777 28 DAY","PITOCIN","PITRESSIN","PLACIDYL","PLAN B","PLAN B ONE-STEP","PLAQUENIL","PLASBUMIN","PLASBUMIN-20","PLASBUMIN-25","PLASBUMIN-5","PLASMA-LYTE 148","PLASMA-LYTE 148 IN 5 % DEXTROSE","PLASMA-LYTE 56","PLASMA-LYTE 56 IN 5 % DEXTROSE","PLASMA-LYTE M IN 5 % DEXTROSE","PLASMA-LYTE R","PLASMA-LYTE R IN 5 % DEXTROSE","PLASMA-LYTE R IN 5% DEXTROSE","PLASMA-PLEX","PLASMALYTE A","PLASMANATE","PLASMATEIN","PLATINOL","PLATINOL-AQ","PLAVIX","PLEDGACLIN","PLEGINE","PLEGRIDY","PLEGRIDY PEN STARTER PACK","PLEGRIDY STARTER PACK","PLEMEX","PLENAMINE","PLENAXIS","PLENDIL","PLENVU","PLETAL","PLEXION","PLEXION CLEANSER","PLEXION SCT","PLIAGLIS","PLURATUSS","PMB","PNEUMOMIST","PNEUMOTUSSIN","PNEUMOVAX 23","PODACTIN","PODOCON","PODOCON-25","PODOFIN","POINT RELIEF","POLAR FREEZE","POLAR FROST","POLARAMINE","POLARAMINE EXPECTORANT","POLARAMINE REPETABS TABLETS","POLOCAINE","POLOCAINE WITH LEVONORDEFRIN","POLOCAINE-MPF","POLY CS","POLY D","POLY D SR","POLY DM","POLY HIST CB","POLY HIST DHC","POLY HIST DM","POLY HIST FORTE","POLY HIST FORTE REFORMULATED FEB 2008","POLY HIST FORTE REFORMULATED NOV 2013","POLY HIST FORTE REFORMULATED OCT 2010","POLY HIST HC","POLY HIST NC","POLY HIST PD","POLY HISTINE D","POLY HISTINE DM","POLY IRON","POLY IRON 150 FORTE","POLY PRED","POLY TAN D","POLY TUSSIN DM","POLY TUSSIN EX","POLY TUSSIN XP","POLY-D","POLY-DEX","POLY-HISTINE","POLY-HISTINE CS","POLY-HISTINE-D","POLY-HISTINE-D PED","POLY-TUSSIN","POLY-TUSSIN AC","POLY-VENT","POLY-VENT DM","POLY-VENT IR","POLY-VENT JR","POLY-VENT PLUS","POLY-VI-SOL","POLY-VI-SOL WITH IRON","POLYCARB","POLYCILLIN","POLYCIN","POLYCITRA","POLYCITRA-K","POLYCITRA-LC","POLYDINE","POLYGAM SD","POLYGESIC","POLYSPORIN","POLYTAN","POLYTAN D","POLYTAR","POLYTINE CS","POLYTINE D","POLYTINE DM","POLYTRACIN","POLYTRIM","POMALYST","PONDIMIN","PONSTEL","PONTOCAINE","PONTOCAINE HCL","PONTOCAINE OPHTHALMIC","PORTIA 21 DAY","PORTIA 28 DAY","PORTRAZZA","POSICOR","POSIFLUSH","POSTURE-D HP","POTABA","POTIGA","POVIDEX","POVIDEX PERI","POVIDINE","POXI","PP-CAP","PPA-GG CR","PRADAXA","PRALUENT","PRAMCORT","PRAMEGEL","PRAMEGEL REFORMULATED APR 2012","PRAMOSONE","PRAMOTIC","PRAMOX","PRANDIMET","PRANDIMET 1500","PRANDIMET 2500","PRANDIN","PRASCION","PRASCION CLEANSER","PRASCION RA","PRAVACHOL","PRAVIGARD 32520","PRAVIGARD 32540","PRAVIGARD 32580","PRAVIGARD 8120","PRAVIGARD 8140","PRAVIGARD 8180","PRAX","PRAXBIND","PRECEDEX","PRECISE","PRECOSE","PRED FORTE","PRED MILD","PRED-G","PRED-G S.O.P.","PRED-JECT-50","PREDACORT 50","PREDACORTEN","PREDAJECT-50","PREDALONE 50","PREDATE-50","PREDCOR","PREDICORT RP","PREDICORT-50","PREDNICEN-M","PREDNICOT","PREDNISOL","PREDNISONE INTENSOL","PREDONE","PREDSULFAIR","PREFEST 30 DAY","PREFRIN","PREGNITUDE","PREGNYL","PREHIST D","PRELIEF","PRELONE","PRELU-2","PREMARIN","PREMARIN WITH METHYLTESTOSTERONE","PREMASOL","PREMESIS RX","PREMESYN PMS","PREMPHASE","PREMPHASE 28 DAY","PREMPRO","PREMPRO 0.31.5 28 DAY","PREMPRO 0.451.5 28 DAY","PREMPRO 0.6252.5 28 DAY","PREMPRO 0.6255 28 DAY","PREMSYN PMS","PRENEXA","PRENEXA PREMIER","PREP-HEM","PREPARATION H","PREPARATION H COOLING GEL","PREPARATION H CREAM","PREPARATION H HYDROCORTISONE","PREPARATION H MEDICATED WIPES","PREPARATION H RAPID RELIEF","PREPARATION H REFORMULATED JUN 2013","PREPARATION H SUPPOSITORIES","PREPARATION H SUPPOSITORIES REFORMULATED OCT 2013","PREPIDIL","PREPOPIK","PRESERVISION","PRESERVISION 2","PRESERVISION WITH LUTEIN","PRESGEN","PRESTALIA","PRETZ","PRETZ IRRIGATION SOLUTION","PRETZ NASAL","PRETZ-D","PREVACID","PREVACID NAPRAPAC 250","PREVACID NAPRAPAC 375","PREVACID NAPRAPAC 500","PREVACID SOLUTAB","PREVALITE","PREVEN EMERGENCY CONTRACEPTIVE KIT","PREVENAR","PREVIDENT","PREVIDENT 500 PLUS BOOST","PREVIDENT 5000 BOOSTER","PREVIDENT 5000 PLUS","PREVIDENT 5000 SENSITIVE","PREVIDENT DENTAL RINSE","PREVIFEM","PREVIFEM 28 DAY","PREVNAR","PREVNAR 13","PREVPAC","PREVYMIS","PREZCOBIX","PREZISTA","PRIALT","PRIFTIN","PRILOSEC","PRIMACOR","PRIMACOR I.V.","PRIMALEV","PRIMALEV 30010","PRIMALEV 3002.5","PRIMALEV 3005","PRIMALEV 3007.5","PRIMATENE","PRIMATENE DUAL ACTION","PRIMATENE MIST INHALER","PRIMATENE MIST SUSPENSION","PRIMATUSS 4","PRIMAXIN","PRIMAXIN IM","PRIMAXIN IV","PRIMLEV","PRIMLEV 30010","PRIMLEV 3005","PRIMLEV 3007.5","PRIMOR 120","PRIMOR 1200","PRIMOR 240","PRIMOR 600","PRIMSOL","PRINCIPEN","PRINIVIL","PRINIZE","PRINZIDE","PRISTIQ","PRIVIGEN","PRIVINE","PRO 12","PRO 12 MOUSSE","PRO CLEAR","PRO CLEAR AC","PRO PET DR. JEFF","PRO PET LIQUID","PRO PET SKIN RELIEF","PRO RED","PRO TUSS","PRO-AIR ALBUTEROL","PRO-FAST HS","PRO-FAST SA","PRO-FAST SR","PRO-HYO","PRO-MED","PRO1TEK","PROACTIV SHEER FINISH","PROACTIV TONER","PROACTIVE CLEANING BAR","PROAIR","PROAIR HFA","PROAMATINE","PROANTHO PLUS","PROBANTHINE","PROBAX","PROBUPHINE","PROCALAMINE 3","PROCAN","PROCANBID","PROCARDIA","PROCENTRA","PROCET","PROCHIEVE","PROCOF","PROCOF D","PROCOMYCIN","PROCORT","PROCORT 1.851.15","PROCOT","PROCRIT","PROCTO-KIT","PROCTO-MED","PROCTO-PAK","PROCTOCORT","PROCTOCREAM","PROCTOFOAM","PROCTOFOAM-HC","PROCTOSERT HC","PROCTOSOL","PROCTOSOL HCR","PROCTOSOL-HC","PROCTOZONE HC","PROCTOZONE-H","PROCTOZONE-P","PROCYSBI","PRODENRX RINSE","PRODERM","PRODIUM","PRODRIN","PRODROX","PRODROXY","PROFASI","PROFEN","PROFEN FORTE","PROFEN FORTE DM","PROFEN II","PROFEN II DM","PROFEN II DM REFORMULATED FEB 2008","PROFEN LA","PROFENAL","PROFENO","PROFERRIN","PROFERRIN-FORTE","PROFILNINE","PROFILNINE SD","PROFLOXACIN","PROGAN","PROGEST","PROGLYCEM","PROGRAF","PROHANCE","PROHIBIT","PROHIST","PROHIST CD","PROHIST CF","PROHIST DM","PROHIST LQ","PROHIST-8","PROHISTINE D","PROHISTINE DM","PROHISTINE-D","PROLASTIN","PROLENSA","PROLEUKIN","PROLEX D","PROLEX DH","PROLEX DM","PROLEX DMX","PROLEX PD","PROLIA","PROLIXIN","PROLIXIN DECANOATE","PROLIXIN ENANTHATE","PROLOPRIM","PROMACET","PROMACOT","PROMACTA","PROMETH VC","PROMETH VC WITH CODEINE","PROMETH WITH CODEINE","PROMETH WITH DEXTROMETHORPHAN","PROMETHAZINE VC","PROMETHAZINE VC WITH CODEINE","PROMETHEGAN","PROMETRIUM","PROMINOL","PROMOLAXIN","PROMPT","PROMPT RELIEF","PRONESTYL","PRONESTYL-SR","PRONOL","PRONTO","PRONTO PLUS","PRONTO PLUS COMPLETE LICE REMOVER SYSTEM","PRONTO PLUS LICE EGG REMOVER","PRONTO PLUS PINWORM","PRONTO SHAMPOO & CREAM RINSE","PRONTO SPRAY","PROP-A-HIST","PROP-A-TANE","PROPA P.H.","PROPA P.H. ACNE MASK","PROPA P.H. FOAMING FACE WASH","PROPA P.H. SKIN CLEANSER NORMALSENSITIVE","PROPACET","PROPACET 100","PROPAGEST","PROPAN","PROPATUSS EXPECTORANT","PROPECIA","PROPEL","PROPINE","PROPOVEN","PROPOXYPHENE COMPOUND 65","PROPRINAL","PROPYLHIOURACIL","PROQUAD","PROQUIN","PROREX","PROSCAR","PROSED","PROSED DS","PROSED EC","PROSEDDS","PROSOL","PROSOM","PROSTIGMIN","PROSTIGMIN BROMIDE","PROSTIN E2","PROSTIN VR","PROTAC","PROTECTOL","PROTEX","PROTEX D","PROTID","PROTILASE","PROTILASE MT-16","PROTONIX","PROTONIX IV","PROTOPAM","PROTOPIC","PROTOSTAT","PROTROPIN","PROTUSS","PROTUSS D","PROTUSS TABLET","PROVAYBLUE","PROVENGE","PROVENTIL","PROVENTIL REPETABS TABLETS","PROVERA","PROVIGIL","PROVISC","PROVOCHOLINE","PROXACOL","PROXIGEL","PROZAC","PRUDOXIN","PRULET","PSE ALLERGY","PSE ALLERGY DM","PSE BROM DM","PSE CARB DM","PSE SINUS","PSE-GG CR","PSE-GG TR","PSEUBROM","PSEUCLOR","PSEUCLOR-SR","PSEUDACARB","PSEUDATEX HC","PSEUDO CARB","PSEUDO CARB DM","PSEUDO COUGH","PSEUDO-G","PSEUDO-PLUS","PSEUDOBROM DM","PSEUDOCOT","PSEUDOCOT-C","PSEUDOCOT-G","PSEUDOCOT-T","PSEUDODINE C","PSEUDOEPHEDRINE GG","PSEUDOEPHEDRINE SINUS","PSEUDOFED","PSEUDOFEN","PSEUDOFEN PD","PSEUDOGEST-DM","PSEUDOTABS","PSEUDOVAL","PSEUDOVENT","PSEUDOVENT DM","PSEUDOVENT PED","PSEUDOX M","PSORCON","PSORENT","PSORIASIN","PSORIASIN WASH","PSORIATEC","PSORIGEL","PUBLIX GLUCOSE","PULERE","PULEXN DM","PULMARI-GP","PULMICORT","PULMOSAL","PULMOZYME","PURALUBE","PURELAX","PURELL","PURGE","PURINETHOL","PURIXAN","PUROXCIN","PYCNOGENOL","PYLERA","PYREGESIC-C","PYRELLE","PYRELLE HB","PYRIDIUM","PYRIDIUM PLUS","PYRIDOSTISMINE","PYRIL D","PYRIL DM","PYRILAFEN TANNATE 12","PYRINYL II","PYRINYL LIQUID SHAMPOO","PYRLEX","PYRLEX CB","PYRLEX PD","PYRROXATE","PYRROXATE COLD & CONGESTION"]'));
        // Block#: Wnw8~iPM+2@%T@`j$b7t
        com.fc.JavaScriptDistLib.Dictionary.setDictValue(LibVars.medicationlistlib.medDict, 'P', LibVars.medicationlistlib.tempDict);
        // Block#: K@43U+AN|e_0:gkYN%Pv
        LibVars.medicationlistlib.tempDict = (com.fc.JavaScriptDistLib.JSON.parseJSONData('["Q HIST LA","Q-ACIN","Q-B","Q-BID","Q-DRYL","Q-DRYL TOPICAL","Q-FED","Q-GEL","Q-GEL WITH LIPOIC ACID","Q-GESIC","Q-HIST LA","Q-LAX","Q-NAFTATE","Q-NOL","Q-PAP","Q-PROFEN","Q-SORB CO Q-10","Q-TAPP","Q-TAPP DM","Q-TAPP REFORMULATED FEB 2008","Q-TAPP SR","Q-TUSS","Q-TUSS WITH HYDROCODONE","Q-TUSSIN CF","Q-TUSSIN CF REFORMULATED OCT 2007","Q-TUSSIN PE","Q-UP","Q-V TUSSIN","QBRELIS","QDALL","QDALL AR","QFLEX","QLEARQUIL ALLERGY RELIEF","QLEARQUIL DAYTIME SINUS & CONGESTION","QLEARQUIL NASAL DECONGESTANT","QLEARQUIL NIGHTTIME","QLEARQUIL NIGHTTIME ALLERGY RELIEF","QM-260","QNASL","QSYMIA","QSYMIA 11.2569","QSYMIA 1592","QSYMIA 3.7523","QSYMIA 7.546","QTERN","QUAD TANN","QUADRA-HIST D","QUADRA-HIST D REFORMULATED FEB 2008","QUADRA-HIST-D PED","QUADRA-HIST-D PED REFORMULATED MAR 2009","QUADRACEL","QUADRAHIST D","QUADRAHIST PEDIATRIC","QUADRAMET","QUAL TUSSIN","QUAL-TUSSIN DC","QUALA CET","QUALA HC","QUALAQUIN","QUALITEST","QUALITEST HEMORRHOIDAL SUPPOSITORY","QUARTETTE 91 DAY PACK","QUARTUSS","QUARZAN","QUASENSE 91 DAY","QUDEXY","QUELICIN","QUELICIN CHLORIDE","QUENALIN","QUESTRAN","QUESTRAN LIGHT","QUFLORA","QUIBRON","QUIBRON 300","QUIBRON T-SR","QUIBRON-T","QUICK CURE","QUILLICHEW","QUILLIVANT","QUIN-G","QUIN-RELEASE","QUIN-TAB","QUINADURE","QUINAGLUTE DURA-TABS","QUINAMM","QUINARETIC","QUINARETIC 1012.5","QUINARETIC 12.510","QUINARETIC 12.520","QUINARETIC 2012.5","QUINARETIC 2025","QUINARETIC 2520","QUINDAL 1010012.5","QUINDAL 1020012.5","QUINDAL EXPECTORANT","QUINDAL HD","QUINDAL HD PLUS","QUINEPROX","QUINIDEX EXTENTABS","QUINJA","QUINORA","QUINTEX HS","QUINZYME","QUIXIN","QUTENZA","QV ALLERGY","QVAR"]'));
        // Block#: 6Z?eK?W*84Lq_@`n#ov}
        com.fc.JavaScriptDistLib.Dictionary.setDictValue(LibVars.medicationlistlib.medDict, 'Q', LibVars.medicationlistlib.tempDict);
        // Block#: _|s8t4#y5zSO28Y5E`$j
        LibVars.medicationlistlib.tempDict = (com.fc.JavaScriptDistLib.JSON.parseJSONData('["R & C","R A ACNE","R-GENE 10","R-TANNA","R-TANNA 12","R-TANNAMINE","R-TANNAMINE PLUS","R-TANNATE","R-TANNATE PEDIATRIC","R-TANNIC-S AD","RABAVERT","RADIAGUARD","RADICAVA","RADIOGARDASE","RADIOGRADASE","RADTUE","RAGWITEK","RAJANI 28 DAY","RALIX","RAMSES CRYSTAL CLEAR","RAMSES PERSONAL","RANEXA","RANICLOR","RAPAFLO","RAPAMUNE","RAPDONE","RAPHON","RAPHTRE","RAPIFLUX","RAPIVAB","RAPLIXA","RAPLON","RAPTIVA","RASH RELIEF ANTIBACTERIAL","RASH RELIEF ANTIFUNGAL","RASH RELIEF CLEAR","RASH RELIEF WITH ZINC OXIDE","RASUVO","RAUWOLFEMMS","RAUZIDE","RAVICTI","RAXAR","RAYALDEE","RAYOS","RAZADYNE","RE KAR CE PLUS","RE TANN","RE-10 WASH","RE-AZO","RE-DRYLEX","RE-U40","REA LO 39","REA-LO","REA-LO LOTION","REACT","REBETOL","REBETRON COMBINATION PACKAGE FOR PATIENTS < = 75 KG, INTRON A 15,000,000 UNTML MULTI-DOSE PEN  70 REBETOL CAPSULES","REBETRON COMBINATION PACKAGE FOR PATIENTS < = 75 KG, INTRON A 6,000,000 UNTML MULTI-DOSE VIAL  70 REBETOL CAPSULES","REBETRON COMBINATION PACKAGE FOR PATIENTS < = 75 KG, INTRON A 6,000,000 UNTML SINGLE DOSE VIALS  70 REBETOL CAPSULES","REBETRON COMBINATION PACKAGE FOR PATIENTS > = 75 KG, INTRON A 15,000,000 UNTML MULTI-DOSE PEN  84 REBETOL CAPSULES","REBETRON COMBINATION PACKAGE FOR PATIENTS > = 75 KG, INTRON A 6,000,000 UNTML MULTI-DOSE VIAL  84 REBETOL CAPSULES","REBETRON COMBINATION PACKAGE FOR PATIENTS > = 75 KG, INTRON A 6,000,000 UNTML SINGLE DOSE VIALS  84 REBETOL CAPSULES","REBETRON COMBINATION PACKAGE FOR REBETOL DOSE REDUCTION, INTRON A 15,000,000 UNTML MULTI-DOSE PEN  42 REBETOL CAPSULES","REBETRON COMBINATION PACKAGE FOR REBETOL DOSE REDUCTION, INTRON A 6,000,000 UNTML MULTI-DOSE VIAL  42 REBETOL CAPSULES","REBETRON COMBINATION PACKAGE FOR REBETOL DOSE REDUCTION, INTRON A 6,000,000 UNTML SINGLE DOSE VIALS  42 REBETOL CAPSULES","REBIF","REBIF REBIDOSE","REBIF TITRATION","REBINYN","RECEDE","RECLAST","RECLIPSEN","RECLIPSEN 28 DAY","RECOFEN D","RECOMBINATE","RECOMBIVAX","RECOMBIVAX HB","RECORT PLUS","RECOTHROM","RECTACAINE","RECTACORT-HC","RECTACREME HC","RECTAGEL","RECTAGEL HC","RECTASOL","RECTASOL-HC","RECTICARE","RECTICARE WIPES","RECTIV","RECTOCORT HC","RED CROSS CANKER SORE","REDERM","REDNESS EYES PLUS","REDNESS RELIEF","REDUTEMP","REDUX","REFACTO","REFENESEN","REFENESEN CHEST CONGESTION & PAIN RELIEF","REFENESEN CHEST CONGESTION & PAIN RELIEF PE","REFENESEN PE","REFISSA","REFLUDAN","REFRESH DROPS","REFRESH DRY EYE THERAPY","REFRESH EYE ITCH RELIEF","REFRESH LACRI-LUBE","REFRESH LIQUIGEL","REFRESH LUBRICANT","REFRESH OPTIVE","REFRESH OPTIVE ADVANCED","REFRESH OPTIVE EXTENDED THERAPY","REFRESH OPTIVE MEGA-3","REFRESH PLUS","REFRESH PM","REFRESH REDNESS RELIEF","REFRESH TEARS","REGENCARE","REGENECARE","REGIMEX","REGITINE","REGLAN","REGONOL","REGRANEX","REGROTON","REGULAX SS","REGULOID","REHYDRALYTE","RELACON LAX","RELACON-HC","RELACON-HC NR","RELADOR","RELAFEN","RELAGARD","RELAGESIC","RELAHIST-DM","RELASIN HC","RELASIN-HCX","RELAXAZONE","RELCOF","RELCOF C","RELCOF DN PE","RELCOF PE","RELENZA","RELHIST","RELIABLE GENTLE","RELION GLUCOSE","RELION RNOVOLIN","RELIONNOVOLIN 7030","RELIONNOVOLIN N","RELISTOR","RELPAX","RELURI","REMBRANDT","REME-T","REMEDY 4-IN-1","REMEDY 4-IN-1 BODY CLEANSER","REMEDY 4-IN-1 CLEANSING LOTION","REMEDY ANTIFUNGAL","REMEDY ZINC SKIN PROTECTANT","REMERGENT HQ","REMERON","REMERON SOLTAB","REMEVEN","REMICADE","REMINYL","REMODULIN","REMULAR","REMULAR-S","RENA-VITE","RENACIDIN","RENACIDIN IRRGIATION","RENAF","RENAGEL","RENAMIN 6.5","RENESE","RENESE-R","RENFLEXIS","RENITEC","RENO M-DIP","RENO-30","RENO-DIP","RENO-M-30","RENO-M-60","RENOCAL","RENOGRAFIN","RENOVA","RENOVIST","RENOVUE-65","RENOVUE-DIP","RENTAMINE","RENVELA","REOPRO","REPAN","REPATHA","REPHRESH PRO-B","REPLESTA","REPLESTA NX","REPREXAIN","REPREXAIN 10200","REPREXAIN 2.5200","REPREXAIN 5200","REPREXAIN 7.5200","REPRONEX","REQUIP","REQUIP 2-WEEK STARTER KIT","RESCON","RESCON JR","RESCON JR REFORMULATED FEB 2010","RESCON LIQUID","RESCON REFORMULATED JUL 2010","RESCON REFORMULATED JUN 2008","RESCON TABLETS","RESCON-DM","RESCON-GG","RESCON-MX","RESCON-MX REFORMULATED FEB 2009","RESCON-MX REFORMULATED JAN 2010","RESCON-MX REFORMULATED OCT 2006","RESCRIPTOR","RESCUDOSE","RESECTISOL","RESINOL","RESPA","RESPA 1ST","RESPA AR","RESPA C&C","RESPA DM","RESPA PE","RESPA-1ST","RESPA-A.R.M.","RESPA-BR","RESPA-GF","RESPAHIST","RESPAHIST II","RESPAIRE","RESPAIRE 120","RESPAIRE 30","RESPAIRE 60","RESPAIRE-120 SR","RESPAIRE-30","RESPAIRE-60 SR","RESPBID","RESPERAL","RESPERAL-DM DROPS","RESPI-TANN","RESPI-TANN G","RESPI-TANN PD","RESPIGAM","RESPIRAM","RESPIVENT","RESPIVENT DF DOSEPACK 10","RESPIVENT-D","REST SIMPLY","RESTALL","RESTASIS","RESTONE","RESTORIL","RETACRIT","RETAINE","RETAINE HPMC","RETAINE MGD","RETAINE PM","RETAVASE","RETIN A MICRO GEL","RETIN-A","RETISERT","RETRE-GEL","RETROVIR","REVATIO","REVERSOL","REVEX","REVIA","REVINA","REVITADERM WOUND CARE","REVIVE PLUS","REVLIMID","REVONTO","REXAVITE","REXOLATE","REXULTI","REYATAZ","REZAMID","REZINE","REZIRA","REZYST PROBIOTIC","RHEABAN MAXIMUM STRENGTH","RHEOMACRODEX","RHEUMATREX","RHEUMATREX DOSE PACK 12","RHEUMATREX DOSE PACK 16","RHEUMATREX DOSE PACK 2","RHEUMATREX DOSE PACK 20","RHEUMATREX DOSE PACK 24","RHEUMATREX DOSE PACK 28","RHEUMATREX DOSE PACK 3","RHEUMATREX DOSE PACK 32","RHEUMATREX DOSE PACK 4","RHEUMATREX DOSE PACK 5","RHEUMATREX DOSE PACK 6","RHEUMATREX DOSE PACK 7","RHEUMATREX DOSE PACK 8","RHINABID PD","RHINACLEAR DOSE PACK 10","RHINACON A","RHINACON DH","RHINAHIST","RHINALL","RHINARIS","RHINATATE","RHINOCAPS","RHINOCORT","RHINOCORT AQUA","RHINOFLEX","RHINOGESIC","RHINOLAR","RHINOSYN-DM","RHINOSYN-DMX","RHINOSYN-X","RHOFADE","RHOGAM","RHOPHYLAC","RHOPRESSA","RI-GEL II","RI-MAG","RI-MAG PLUS","RI-MOX","RI-MOX PLUS","RIASTAP","RIAX","RIBAPAK 1000MGDAY","RIBAPAK 1200MGDAY","RIBAPAK 800MGDAY","RIBASPHERE","RIBASPHERE RIBAPAK 1000","RIBASPHERE RIBAPAK 1200","RIBASPHERE RIBAPAK 600","RIBASPHERE RIBAPAK 800","RIBATAB","RIBATAB 1000 MGDAY COMPLIANCE PACK","RIBATAB COMPLIANCE PACK","RICOBID","RICOLA","RID","RID-A-PAIN","RIDACTATE","RIDAFED","RIDAURA","RIDENOL","RIDIFED","RIDIPRIN","RIDRAMIN","RIFADIN","RIFAMATE","RIFATER","RIGHTSTEP","RIGINIC","RILUTEK","RIMACTANE","RIMANTIDINE","RIMSO-50","RINATE","RINDAL HD PLUS","RINDAL HPD","RINDAL-HD","RIOMET","RIOPAN","RIOPAN PLUS","RIOPAN PLUS DOUBLE STRENGTH","RISAMINE","RISAQUAD","RISPAS","RISPERDAL","RISPERDAL M-TAB","RITALIN","RITALIN LA","RITALIN-SR","RITIFED","RITUXAN","RITUXAN HYCELA","RIVELSA 91 DAY","RIXUBIS","RMS","ROBAFEN","ROBAFEN AC","ROBAFEN CF","ROBAFEN CF REFORMULATED FEB 2008","ROBAFEN COUGH","ROBAFEN DM","ROBAFEN PE","ROBAFEN PEDIATRIC COUGH & COLD","ROBALOG","ROBAXIN","ROBAXIN-750","ROBAXISAL","ROBICHEM","ROBICHEM AC","ROBICHEM DM","ROBICHEM PE","ROBIMYCIN","ROBINUL","ROBITET 500","ROBITUSSIN","ROBITUSSIN 12 HOUR COUGH RELIEF","ROBITUSSIN AC","ROBITUSSIN ALLERGY & COUGH","ROBITUSSIN CHEST CONGESTION","ROBITUSSIN CHILDREN\'S COUGH & COLD CF","ROBITUSSIN CHILDREN\'S NIGHTTIME COUGH LONG-ACTING DM","ROBITUSSIN COLD AND COUGH","ROBITUSSIN COLD COUGH AND FLU","ROBITUSSIN COUGH & COLD CF","ROBITUSSIN COUGH & COLD CF MAX","ROBITUSSIN COUGH & COLD CF TO GO","ROBITUSSIN COUGH & COLD D","ROBITUSSIN COUGH & CONGESTION","ROBITUSSIN COUGH & CONGESTION DM MAX","ROBITUSSIN COUGH AND COLD LONG-ACTING","ROBITUSSIN COUGH CALMERS","ROBITUSSIN COUGH DROP","ROBITUSSIN COUGH GELS","ROBITUSSIN DAC","ROBITUSSIN DM","ROBITUSSIN DM INFANT DROPS","ROBITUSSIN DM TO GO","ROBITUSSIN HEAD & CHEST CONGESTION","ROBITUSSIN HONEY COUGH","ROBITUSSIN HONEY FLU NIGHTTIME","ROBITUSSIN HONEY FLU NON-DROWSY","ROBITUSSIN LINGERING COLD LONG-ACTING COUGH","ROBITUSSIN MAXIMUM STRENGTH","ROBITUSSIN MAXIMUM STRENGTH COUGH & COLD","ROBITUSSIN MAXIMUM STRENGTH COUGH PLUS CHEST CONGESTION DM","ROBITUSSIN MEDI-SOOTHERS","ROBITUSSIN MULTI-SYMPTOM","ROBITUSSIN NIGHT COLD","ROBITUSSIN NIGHT RELIEF","ROBITUSSIN NIGHT TIME","ROBITUSSIN NIGHT TIME COUGH & CHEST CONGESTIO","ROBITUSSIN NIGHT TIME COUGH & CHEST CONGESTION","ROBITUSSIN NIGHT TIME COUGH AND COLD","ROBITUSSIN NIGHT TIME COUGH, COLD & FLU","ROBITUSSIN NIGHTTIME COUGH DM","ROBITUSSIN PEAK COLD DAYTIME COLD PLUS FLU","ROBITUSSIN PEAK COLD MAXIMUM STRENGTH COUGH PLUS CHEST CONGESTION DM","ROBITUSSIN PEAK COLD MAXIMUM STRENGTH MULTI-SYMPTOM COLD","ROBITUSSIN PEAK COLD MULTI-SYMPTOM COLD","ROBITUSSIN PEAK COLD NASAL","ROBITUSSIN PEAK COLD NIGHTTIME COLD PLUS FLU","ROBITUSSIN PEAK COLD NIGHTTIME MULTI-SYMPTOM COLD","ROBITUSSIN PEAK COLD NIGHTTIME NASAL RELIEF","ROBITUSSIN PEDIATRIC","ROBITUSSIN PEDIATRIC COUGH & COLD","ROBITUSSIN PEDIATRIC COUGH & COLD LA","ROBITUSSIN PEDIATRIC COUGH & COLD NIGHTTIME","ROBITUSSIN PEDIATRIC COUGH AND DECONGESTANT","ROBITUSSIN PEDIATRIC COUGH SUPPRESSANT","ROBITUSSIN PEDIATRIC NIGHT RELIEF","ROBITUSSIN PM","ROBITUSSIN PM COUGH & COLD","ROBITUSSIN SEVERE CONGESTION","ROBITUSSIN-AC","ROBITUSSIN-CF","ROBITUSSIN-CF REFORMULATED FEB 2008","ROBITUSSIN-DAC","ROBITUSSIN-DM","ROBITUSSIN-PE","ROBITUSSIN-SF","ROCALTROL","ROCCAL","ROCEPHIN","ROFERON-A","ROGAINE","ROGAINE EXTRA STRENGTH","ROHIST","ROLAIDS","ROLAIDS ADVANCED","ROLAIDS MULTI-SYMPTOM","ROLAIDS PLUS GAS RELIEF","ROLAIDS REFORMULATED AUG 2006","ROLAIDS SODIUM FREE","ROLAIDS SOFTCHEWS","ROLAIDS ULTRA STRENGTH","ROLATUSS","ROLATUSS WITH HYDROCODONE","ROLATUSS-SR","ROMAZICON","ROMILAR AC","ROMYCIN","RON ACID","RONDAMETH","RONDAMINE","RONDAMINE DM","RONDAMINE TR","RONDEC","RONDEC DM","RONDEC DM DROPS","RONDEC DROPS","RONDEC REFORMULATED FEB 2009","RONDEC-DM REFORMULATED FEB 2009","RONDEC-TR","RONDEX","RONDEX-DM","RONOXIDIL","ROSAC","ROSADAN","ROSADERM","ROSADERM CLEANSER","ROSANIL","ROSANIL CLEANSER","ROSE HIPS C","ROSULA","ROSULA CLEANSER","ROSULA NS","ROTARIX","ROTASHIELD","ROTATEQ","ROWASA","ROWEEPRA","ROXANOL","ROXANOL UD","ROXANOL-T","ROXICET","ROXICET 5325","ROXICET 5500","ROXICODONE","ROXILOX","ROXIPRIN","ROXYBOND","ROYMICIN","ROZEREM","ROZEX","RT CAPSIN","RU HIST D","RU HIST FORTE","RU TUSS DE","RU TUSS-DM","RU-TAB","RU-TUSS","RU-TUSS EXPECTORANT","RU-TUSS REFORMULATED AUG 2007","RU-TUSS WITH HYDROCODONE","RU-VERT-M","RUBRACA","RUBRAMIN PC","RUCONEST","RUFEN","RULOX","RULOX #1","RULOX #2","RULOX PLUS","RUM-K","RUTUSS","RUTUSS WITH HYDROCODONE","RX TRIAMCINOLONE","RX-ACT ALL DAY PAIN RELIEF","RX-ACT IBUPROFEN","RX-OTIC","RY-TANN","RY-TUSS","RYANODEX","RYBIX","RYDAPT","RYMED","RYMED-D","RYMED-TR","RYNA C","RYNA CX","RYNA LIQUID","RYNA-12","RYNA-12X","RYNA-C","RYNA-CX","RYNATAN","RYNATAN PEDIATRIC","RYNATAN PEDIATRIC CHEWABLE","RYNATAN PEDIATRIC REFORMULATED FEB 2008","RYNATAN-S PEDIATRIC","RYNATUSS","RYNESSA","RYNEX-DM","RYNEZE","RYTARY","RYTHMOL","RYTHMOL SR","RYVENT","RYZODEG","RYZOLT"]'));
        // Block#: qLq#a;#3P%CnWGf|:jQ+
        com.fc.JavaScriptDistLib.Dictionary.setDictValue(LibVars.medicationlistlib.medDict, 'R', LibVars.medicationlistlib.tempDict);
        // Block#: ^vy.kB7]c^^s7JM_~U.P
        LibVars.medicationlistlib.tempDict = (com.fc.JavaScriptDistLib.JSON.parseJSONData('["S-2","S-PACK","S-PACK DM","S-PAK DM","S-T FEBROL","S-T FORTE","S-T FORTE 2","S.O.S.S.","SABRIL","SAFE TUSSIN 30","SAFEGUARD ANTIBACTERIAL LIQUID","SAFETUSSIN CD","SAFETUSSIN DM","SAFETUSSIN PM","SAFYRAL 28 DAY","SAIZEN","SAL-ACID PLASTERS","SAL-PLANT GEL","SAL-TROPINE","SALAC","SALACTIC FILM","SALACYN","SALAGEN","SALAZOPYRIN","SALETO","SALETO-200","SALETO-400","SALETO-600","SALETO-800","SALETO-D","SALEX","SALFLEX","SALINEX","SALINOCAINE","SALITOP","SALIVASURE","SALJET","SALKERA","SALONPAS","SALONPAS DEEP RELIEVING","SALONPAS GEL-PATCH","SALONPAS MASSAGE FOAM","SALONPAS PAIN RELIEF PATCH","SALONPAS PAIN RELIEVING PATCH","SALONPAS SPRAY","SALONSIP AQUA-PATCH","SALSITAB","SALTAIRE","SALURON","SALUTENSIN","SALUTENSIN-DEMI","SALVAX","SALVAX DUO","SALVAX DUO PLUS","SAMSCA","SAMSON 8","SANAFITIL","SANAFITIL ANTIFUNGAL","SANCTURA","SANCUSO","SANDIMMUNE","SANDOGLOBULIN","SANDOSTATIN","SANDOSTATIN LAR DEPOT","SANI-CLENS","SANI-SUPP","SANISUDS F-7250","SANO LOG","SANOREX","SANSERT","SANTYL","SAPHRIS","SARAFEM","SARAPIN","SARNA","SARNA SENSITIVE","SARNA ULTRA","SARNOL-HC","SASTID SOAP","SAVAYSA","SAVELLA","SAVELLA 4-WEEK TITRATION","SAXENDA","SAYMAN SALVE","SCALACORT","SCALACORT DK","SCALP-AID","SCALP-CORT","SCALPICIN ITCH RELIEF","SCALPICIN SCALP RELIEF","SCANDONEST","SCANDONEST L","SCHIFF","SCHIFF MOVE FREE","SCLAVO TEST-PPD","SCLERO SEAL","SCLEROMATE","SCLEROSOL","SCLROMATE","SCOPACE","SCOPOHIST-PE","SCOT TUSSIN ORIGINAL","SCOT-TUSSIN","SCOT-TUSSIN ALLERGY","SCOT-TUSSIN ALLERGY RELIEF FORMULA","SCOT-TUSSIN DIABETIC","SCOT-TUSSIN DIABETIC CF","SCOT-TUSSIN DM","SCOT-TUSSIN DM COUGH CHASERS","SCOT-TUSSIN SUGAR FREE DM","SCYTERA","SEA MIST","SEA SOFT","SEA-OMEGA","SEA-OMEGA 30","SEASONALE","SEASONALE 91 DAY","SEASONIQUE","SEB-PREV","SEB-PREV WASH","SEBA-GEL","SEBASORB","SEBEX","SEBIZON","SEBUCARE","SEBULEX","SEBULEX SHAMPOO","SEBULEX SHAMPOO WITH CONDITIONERS","SEBULON","SEBUTONE","SECONAL SODIUM","SECREFLO","SECRETIN-FERRING","SECTRAL","SECURA","SEDAPAP","SEEBRI","SEGLUROMET","SEL-PEN BLUE","SELDANE-D","SELE-PAK","SELEGILENE","SELEPEN","SELESTOJECT","SELFEMRA","SELRX","SELSEB","SELSUN","SELSUN BLUE","SELSUN BLUE 2 IN 1","SELSUN BLUE BALANCED TREATMENT","SELSUN BLUE MOISTURIZING TREATMENT","SELSUN BLUE NATURALS","SELSUN BLUE SENSITIVE SCALP","SELZENTRY","SEMICID CONTRACEPTIVE SUPPOSITORIES","SEMPREX-D","SENATEC","SENATEC HC","SENEXON","SENEXON S","SENIOR MOMENT","SENIORTOPIX HEALIX","SENNA LAX","SENNA PLUS","SENNA S","SENNA SOFT","SENNA-GEN","SENNA-RELIEF CHILDS","SENNA-TIME","SENNALAX","SENNALAX S","SENOKOT","SENOKOT CHILD","SENOKOT EXTRA","SENOKOT-S","SENOKOTXTRA","SENOLAX","SENORMIN","SENOSOL","SENOSOL-SS","SENOX","SENSI-CARE BODY","SENSI-CARE PROTECTIVE BARRIER","SENSIPAK","SENSIPAR","SENSITIVE EYES REDNESS RELIEVER","SENSODYNE","SENSODYNE ISO-ACTIVE","SENSORCAINE","SENSORCAINE WITH EPINEPHRINE","SENSORCAINE-MPF","SENSORCAINE-MPF WITH EPINEPHRINE","SENTRY HC HOTSPOT","SEPASOOTHE","SEPASOOTHE REFORMULATED APR 2011","SEPTA","SEPTI-SOFT","SEPTISOL","SEPTISOL FOAM","SEPTISOL NPD","SEPTOCAINE","SEPTRA","SEPTRA DS","SEPTRA I.V. INFUSION","SER-AP-ES","SERADEX","SERADEX LA","SERATHIDE","SERAX","SERENTIL","SEREVENT","SEREVENT DISKUS","SERNIVO","SEROMYCIN","SEROPHENE","SEROQUEL","SEROQUEL XR 14-DAY SAMPLE KIT","SEROSTIM","SERPAZIDE","SERPEX","SERUTAN","SERVIRA","SERZONE","SERZONE STARTER PACK","SETLAKIN 91 DAY","SEUDOTABS","SEVOFLUORANE SOUJOURN","SF 5000 PLUS","SHAROBEL 28 DAY","SHEER DESENZ","SHELLCAP","SHELLCAP PD","SHELLGEL","SHERI-B-12","SHINGRIX","SHUR-SEAL GEL","SIGNIFOR","SIKLOS","SIL TEX","SILACE","SILADRYL","SILADRYL DAS","SILADYL","SILADYL SA","SILAFED","SILAMINIC EXPECTORANT","SILAPAP","SILDEC","SILDEC DM","SILDEC DM REFORMULATED SEP 2007","SILDEC DROPS","SILDEC PE","SILDEC-PE DM SYRUP","SILENOR","SILFEDRINE","SILIQ","SILKA CREAM","SILPHEN","SILPHEN COUGH","SILPHEN DM","SILTANE","SILTUSS DAS","SILTUSSIN","SILTUSSIN DM","SILTUSSIN-DM","SILVADENE","SILVERA","SIMAAL GEL","SIMBRINZA","SIMCOR","SIMCOR 100020","SIMCOR 100040","SIMCOR 50020","SIMCOR 50040","SIMCOR 75020","SIMLIYA 28 DAY","SIMPESSE 91 DAY","SIMPLET","SIMPLY SALINE","SIMPLY SLEEP","SIMPONI","SIMRON","SIMUC","SIMUC-DM","SIMUC-HD","SIMULECT","SIN-U-SPAN","SINA-12X","SINAPAP","SINAPILS","SINAREST","SINAREST EXTRA STRENGTH","SINAREST NASAL","SINAREST SINUS","SINE-AID","SINE-AID IB","SINE-OFF COLD AND COUGH","SINE-OFF MAXIMUM STRENGTH","SINE-OFF MAXIMUM STRENGTH REFORMULATED SEP 2008","SINE-OFF SINUS AND COLD","SINEMET","SINEMET CR","SINEQUAN","SINEX","SINEX LONG-ACTING","SINEX NASAL SPRAY","SINEX ULTRA FINE MIST","SINGULAIR","SINODEC","SINOGRAFIN","SINUCON","SINUCON PEDIATRIC","SINUCOT","SINUFED","SINUFED TIMECELLES","SINUHIST","SINULIN","SINUMIST","SINUPAN","SINUS AID","SINUS MAXIMUM STRENGTH","SINUS RELIEF","SINUSON","SINUSON II","SINUSTAB","SINUTAB","SINUTAB EX-STRENGTH","SINUTAB MAXIMUM STRENGTH","SINUTAB NON DRYING","SINUTAB REGULAR STRENGTH","SINUTAB SINUS","SINUTUSS DM","SINUTUSS DM REFORMULATED FEB 2008","SINUVA","SINUVENT","SINUVENT PE","SIRTURO","SITAVIG","SITREX","SITREX REFORMULATED AUG 2007","SIVEXTRO","SKELAXIN","SKELEX","SKELID","SKLICE","SKYLA","SLEDGEHAMMER","SLEEP AID (DIPHENHYDRAMINE)","SLEEP AID (DOXYLAMINE)","SLEEP AID WITH APAP","SLEEP TAB II","SLEEP-ETTES","SLEEP-EZE","SLEEP-EZE-3","SLEEPINAL","SLO-BID GYROCAPS","SLO-NIACIN","SLO-PHYLLIN","SLO-PHYLLIN 250","SLO-PHYLLIN 80","SLO-PHYLLIN GG","SLO-PHYLLIN GYROCAPS","SLOAN\'S LINIMENT","SLOPRIN","SLOW FE WITH FOLIC ACID","SLOW-FE","SLOW-MAG","SLOW-MAG REFORMULATED FEB 2012","SLT","SMART SAN","SOAP SENSATIONS","SOCHLOR","SODIPHLUOR","SODIUM SULAMYD","SOJOURN","SOLAGE","SOLAQUIN FORTE","SOLARAZE","SOLARCAINE","SOLARCAINE AEROSOL","SOLARCAINE ALOE EXTRA BURN RELIEF","SOLARCAINE PLUS ALOE","SOLATENE","SOLESTA","SOLFOTON","SOLGANOL","SOLIA","SOLIA 28 DAY","SOLIQUA","SOLIRIS","SOLODYN","SOLOSEC","SOLOSTAR","SOLOTUSS","SOLOXIDE","SOLTAMOX","SOLU-CORTEF","SOLU-MEDROL","SOLU-PHYLLIN GG","SOLUCLENZ","SOLUREX","SOLUREX LA","SOMA","SOMA COMPOUND","SOMA COMPOUND WITH CODEINE","SOMATULINE","SOMAVERT","SOMBRA WARM PAIN RELIEVING GEL","SOMINEX","SOMINEX MAXIMUM STRENGTH","SOMINEX PAIN RELIEF FORMULA","SOMNICAPS","SOMNICIN","SOMNOTE","SONAHIST","SONAHIST DM","SONATA","SONIAZIO","SONORX","SOOLANTRA","SOOTHE & COOL MOISTURE BARRIER","SOOTHE & COOL POWDER","SOOTHE & COOL SKIN PASTE","SOOTHE CAPLETS","SOOTHE CHEWABLE","SOOTHE MAXIMUM STRENGTH","SOOTHE MINERAL OIL","SOOTHE NIGHT TIME","SOOTHE REGULAR STRENGTH","SOOTHE-IT PLUS","SORBET","SORBITRATE","SORBUTUSS","SORE THROAT SPRAY-CHERRY","SORE THROAT SPRAY-MENTHOL","SORIATANE","SORILUX","SORINE","SOTRADECOL","SOTRET","SOTYLIZE","SOVALDI","SP RX 228","SPACOL","SPACOL TABLET","SPACOL TS","SPANTUSS HD","SPARINE","SPASDEL","SPASMOLIN","SPASQUID","SPASTOLATE","SPASTRIN","SPEC-T","SPEC-T SORE THROATCOUGH SUPPRESSANT","SPEC-T SORE THROATDECONGESTANT","SPECIAL C","SPECTAZOLE","SPECTRACEF","SPECTROCIN PLUS","SPECTRUM-4","SPHERULIN","SPHERUSOL","SPINRAZA","SPIRIVA","SPIRONO","SPIRONOLACTONE PLUS","SPORANOX","SPORANOX PULSEPAK","SPORANOX-PULSE","SPORTS PAIN RELIEF RUB","SPORTSCREME","SPRAYZOIN","SPRINTEC","SPRINTEC 28 DAY","SPRITAM","SPRIX","SPRYCEL","SPS","SRC EXPECTORANT","SRONYX","SRONYX 28 DAY","SSD","SSD AF","SSD RP","ST-37","ST. JOSEPH ADULT CHEWABLE ASPIRIN","ST. JOSEPH ASPIRIN","ST. JOSEPH ASPIRIN ADULT EC","ST. JOSEPH ASPIRIN-FREE","ST. JOSEPH COUGH SUPPRESSANT","STABEC","STADOL","STAFLEX","STAGESIC","STAGESIC 10250","STAGESIC-10","STAHIST","STAHIST AD","STAHIST AD LIQUID","STAHIST REFORMULATED APR 2013","STALEVO","STAMARIL","STAMOIST E","STAMOIST E 60045","STAMOIST LA","STANBACK HEADACHE POWDER","STANBACK HEADACHE POWDER REFORMULATED JAN 2011","STANGARD","STANIMAX GEL","STANIMAX PERIO RINSE","STANLEY-LINCTUS","STANLEY-SYRUP","STAPHASEPTIC","STAPHCILLIN","STAR-OTIC","STARLIX","STATICIN","STATOBEX","STATROL","STATUSS","STATUSS DM","STATUSS GREEN","STATUSS GREEN REFORMULATED JAN 2012","STAVZOR","STAXYN","STAY ALERT","STAY AWAKE","STEGLATRO","STEGLUJAN","STELARA","STELAZINE","STENDRA","STERAPRED","STERAPRED 5 MG 12 DAY UNI-PAK","STERAPRED 5 MG UNI-PAK","STERAPRED DS","STERAPRED DS 12 DAY UNI-PAK","STERAPRED DS UNI-PAK","STERAPRED DS UNI-PAK 12 DAY","STERAPRED DS UNI-PAK 6 DAY","STERAPRED UNI-PAK 12 DAY","STERAPRED UNI-PAK 6 DAY","STERIL-EYES","STERILUBE","STERITALC","STEROFORM","STILPHOSTROL","STIMATE","STING-KILL","STINGEZE FOR KIDS","STINGEZE W CAMPHOR","STIOLTO","STIVARGA","STOMACH RELIEF","STOMACH RELIEF EXTRA STRENGTH","STOMAX","STOOL SOFTENER PLUS","STOOL-LAX","STOP LICE MAXIMUM STRENGTH","STOPAIN","STOPAIN EXTRA STRENGTH","STRATTERA","STRATTERA 10182540 KIT","STRATTERA 18254060 KIT","STRATTERA 25406080 KIT","STRAWBERRY C","STRENSIQ","STREPTASE","STRESS BISMUTH SUBSALICYLATE","STRESS LIQUID","STRESS MAXIMUM STRENGTH","STRI-DEX","STRI-DEX CLEAR GEL","STRI-DEX FACE WASH","STRIANT","STRIBILD","STRIDEX","STRIDEX ESSENTIAL","STRIFON FORT","STRIVERDI","STRIX","STROMECTOL","STRONG CAPS","STYE","STYPTOCAINE","STYPTSTIX","SU-TUSS HD","SU-TUSS HD ELIXIR","SUAVE MEN 2 IN 1","SUBLIMAZE","SUBLOCADE","SUBOXONE","SUBOXONE 20.5","SUBOXONE 82","SUBSYS","SUBSYS 1200 MCG","SUBSYS 1600 MCG","SUBUTEX","SUBVENITE","SUBVENITE BLUE (FOR PATIENTS TAKING VALPROATE)","SUBVENITE GREEN (FOR PATIENTS TAKING CARBAMAZEPINE, PHENYTOIN, PHENOBARBITAL, OR PRIMIDONE AND NOT TAKING VALPROATE)","SUBVENITE ORANGE (FOR PATIENTS NOT TAKING CARBAMAZEPINE, PHENYTOIN, PHENOBARBITAL, PRIMIDONE, OR VALPROATE)","SUCLEAR","SUCLOR","SUCRAID","SUCRETS","SUCRETS DM","SUCRETS ORIGINAL","SUDA-TUSSIN DM","SUDAFED","SUDAFED 12-HOUR","SUDAFED CHILD COLD & COUGH","SUDAFED CHILD NASAL DECONGESTANT","SUDAFED COLD AND COUGH LIQUICAPS","SUDAFED COLD AND SINUS","SUDAFED COUGH","SUDAFED COUGH SYRUP","SUDAFED NON DRYING SINUS","SUDAFED OM","SUDAFED PE","SUDAFED PE CHILDREN\'S COLD & COUGH","SUDAFED PE CHILDREN\'S NASAL DECONGESTANT","SUDAFED PE COLD & COUGH","SUDAFED PE DAY & NIGHT COLD","SUDAFED PE DAY & NIGHT TABLET","SUDAFED PE DAY PLUS NIGHT SINUS CONGESTION KIT","SUDAFED PE NIGHTTIME COLD","SUDAFED PE NIGHTTIME DECONGESTANT","SUDAFED PE NON-DRYING SINUS","SUDAFED PE PRESSURE PLUS PAIN PLUS COUGH","SUDAFED PE PRESSURE PLUS PAIN PLUS MUCUS","SUDAFED PE PRESSURE, PAIN & COLD","SUDAFED PE SEVERE COLD","SUDAFED PE SINUS & ALLERGY","SUDAFED PE SINUS CONGESTION PLUS ALLERGY","SUDAFED PE SINUS HEADACHE","SUDAFED PE TRIPLE ACTION","SUDAFED PLUS","SUDAFED SEVERE COLD","SUDAFED SINUS","SUDAFED SINUS & ALLERGY","SUDAFED SINUS & PAIN","SUDAFED SINUS HEADACHE","SUDAFED SINUS NIGHTTIME","SUDAFED SINUS NIGHTTIME PLUS PAIN RELIEF","SUDAFED TRIPLE ACTION","SUDAHIST","SUDAL 12","SUDAL 120600","SUDAL 60500","SUDAL DM","SUDAL SR","SUDATEX","SUDATUSS 2 DF","SUDATUSS DM","SUDATUSS SF","SUDEX","SUDO-TAB","SUDODRIN","SUDOGEST","SUDOGEST PE","SUDOGEST PLUS","SUDOGEST SINUS & ALLERGY","SUDOGEST SINUS MAXIMUM STRENGTH","SUDRINE","SUFENTA","SULAR","SULF-10","SULF-15","SULFAC","SULFAC 10%","SULFACET SODIUM","SULFACET-R","SULFALAX CALCIUM","SULFAMAG","SULFAMYLON","SULFATOL","SULFATRIM","SULFAZIN","SULFAZINE","SULFIMYCIN","SULFIX CLEANSER","SULFO-LO","SULFOAM","SULFORCIN","SULFOXYL","SULMASQUE","SULPHO-LAC","SULSTER","SULTRIN TRIPLE SULFA","SULZEE","SUMADAN WASH","SUMAVEL","SUMAVEL DOSEPRO","SUMAXIN","SUMMER\'S EVE MEDICATED","SUMMERS EVE ANTI-ITCH","SUMTAN","SUMYCIN","SUNBALANCE","SUNDROPS 77","SUNKIST VITAMIN C","SUNMARK ANTI-ITCH","SUP PAIN MED","SUPAC","SUPARTZ","SUPER C-500","SUPER CALCIUM","SUPER DOPHILUS","SUPERDENT","SUPERDENT HEMAL","SUPERFED","SUPHEDRIN","SUPHEDRIN SINUS","SUPHEDRINE","SUPHEDRINE PLUS","SUPHENAMINE","SUPHENAMINE-SR","SUPHERA","SUPPRELIN","SUPRAMINE","SUPRANE","SUPRAX","SUPRED","SUPRENZA","SUPREP BOWEL PREP KIT","SUR-Q-LAX","SURE COMFORT","SURELAC","SURFAK STOOL SOFTENER","SURFAXIN","SURMONTIL","SURPASS","SURPASS EXTRA STRENGTH","SURVANTA","SURVANTA INTRATRACHEAL","SUS-PHRINE INJECTION","SUSPEN","SUSTAIRE","SUSTIVA","SUSTOL","SUTAN DM","SUTAN SUSPENSION","SUTAN-DM","SUTENT","SUTTAR","SUTTAR 2","SWAN (PHARMACOLOGIC SUBSTANCE)","SWEET-EASE","SWIM EAR","SWISS KRISS","SYEDA 28 DAY","SYLATRON","SYLLACT","SYLLAMALT","SYLVANT","SYMADINE","SYMAX","SYMAX SL","SYMAX SR","SYMBICORT","SYMBICORT 1604.5","SYMBICORT 804.5","SYMBIOFLOR","SYMBIOFLOR I","SYMBYAX","SYMDEKO 4-WEEK","SYMFI","SYMFI LO","SYMJEPI","SYMLIN","SYMLINPEN","SYMMETREL","SYMMETRY","SYMPAK","SYMPAK DM","SYMPAK II","SYMPAK PDX","SYMPROIC","SYMTAN","SYMTAN A","SYMTUZA","SYN-RX","SYN-RX DM","SYNAGIS","SYNALAR","SYNALGOS-DC","SYNAPRYN","SYNAREL","SYNDROS","SYNERA","SYNERCID","SYNJARDY","SYNOVACIN","SYNRIBO","SYNTHROID","SYNTOCINON","SYNVISC","SYNVISC-ONE","SYPRINE","SYREX","SYSTANE","SYSTANE BALANCE","SYSTANE COMPLETE","SYSTANE NIGHTTIME","SYSTANE OVERNIGHT THERAPY","SYSTANE ULTRA","SYTOBEX"]'));
        // Block#: z?o0o.kVv.hB:xx8.@-I
        com.fc.JavaScriptDistLib.Dictionary.setDictValue(LibVars.medicationlistlib.medDict, 'S', LibVars.medicationlistlib.tempDict);
        // Block#: zxXq1B6u98s6@UNvk(hK
        LibVars.medicationlistlib.tempDict = (com.fc.JavaScriptDistLib.JSON.parseJSONData('["T KOFF","T TANNA DM","T- KOFF","T-ATHLETE","T-DIET","T-GESIC","T-PAINOL","T-PAINOL EXTRA STRENGTH","T-PANOL","T-STAT","T-TUSSIN","T-TUSSIN DM","T-TUSSIN PE","TAB-PROFEN","TABLOID","TAC","TAC 3","TACARYL","TACE","TACE (BRAND NAME)","TACHOSIL","TACLONEX","TACTINAL","TAFINLAR","TAGAMET","TAGAMET HB","TAGRISSO","TAKE ACTION","TALACEN","TALADINE","TALTZ","TALWIN","TALWIN COMPOUND","TALWIN LACTATE","TALWIN NX","TAMBOCOR","TAMIFLU","TANABID DA","TANAC LIQUID","TANAC REFORMULATED DEC 2010","TANACOF DM","TANACOF XR","TANAFED","TANAFED DM","TANAFED DMX","TANAFED DP","TANAHIST-D","TANAHIST-PD","TANAMINE","TANDEM","TANDEM F","TANDEM OB","TANDEM PLUS","TANDUR DM","TANNATE 12 S","TANNATE DMP-DEX","TANNATE-12 SUSP","TANNI-HIST 12","TANNI-HIST 12 RF","TANNIC-12","TANNIC-12 S","TANORAL","TANZEUM","TAPAZOLE","TAPERDEX 12 DAY TAPER","TAPERDEX 6 DAY TAPER","TARA-8","TARABINE PFS","TARCEVA","TARGADOX","TARGINIQ","TARGRETIN","TARGRETIN TOPICAL","TARINA FE 120 28 DAY","TARKA","TARKA 1240","TARKA 2180","TARKA 2240","TARKA 4240","TARSUM","TARSUM REFORMULATED","TASIGNA","TASMAR","TAVALISSE","TAVIST","TAVIST ALLERGY","TAVIST ALLERGYSINUSHEADACHE","TAVIST NIGHTTIME ALLERGY","TAVIST NON-SEDATING","TAVIST SINUS","TAVIST-1","TAVIST-D","TAVIST-DA","TAXADONE","TAXOTERE","TAYTULLA 28 DAY","TAZICEF","TAZORAC","TAZTIA","TDS FORTE","TE ANATOXAL BERNA","TEARGEN","TEARGEN II","TEARISOL","TEARS AGAIN","TEARS AGAIN EYE DROPS","TEARS AGAIN HYDRATE","TEARS AGAIN MC EYE DROPS","TEARS AGAIN OINTMENT","TEARS NATURALE","TEARS NATURALE FORTE","TEARS NATURALE PM","TEARS RENEWED","TEBAMIDE","TEBAMIDE PEDIATRIC","TECENTRIQ","TECFIDERA","TECFIDERA 30-DAY STARTER PACK","TECHNIVIE","TECNU FIRST AID","TECZEM","TEDRIGEN","TEFLARO","TEGISON","TEGOPEN","TEGRETOL","TEGRETOL XR","TEGRIN MEDICATED","TEGRIN-LT LICE SPRAY","TEGRIN-LT SHAMPOO","TEKAMLO","TEKRAL","TEKTURNA","TEKTURNA HCT","TEKTURNA HCT 15012.5","TEKTURNA HCT 15025","TEKTURNA HCT 30012.5","TEKTURNA HCT 30025","TELADAR","TELDRIN","TELDRIN HBP","TEMARIL","TEMODAR","TEMOVATE","TEMPRA","TEMPRA 1","TEMPRA 2","TEMPRA 3","TEMPRA QUICKLETS","TEN-K","TENAR DM","TENAR PSE","TENCET","TENCON","TENEX","TENIVAC","TENORETIC","TENORMIN","TENUATE","TENUATE DOSPAN","TEPADINA","TEPANIL","TEQUIN","TEQUIN TEQPAQ","TERA GEL","TERAMINE","TERAMINE ER","TERAZOL 3","TERAZOL 7","TERBINEX","TERMENE","TEROCIN","TERRA-CORTRIL","TERRAMYCIN","TERRAMYCIN IM","TERRAMYCIN WITH POLYMYXIN B SULFATE","TERRELL","TERSI FOAM","TESSALON","TESSALON PERLES","TESTA SPAN","TESTAMONE-100","TESTIM","TESTODERM","TESTOLIN","TESTOMAR","TESTOPEL","TESTRADIOL","TESTRED","TESTRO","TESTRO AQ","TESTRO-L.A.","TETCAINE","TETRA 500","TETRA-IDE","TETRA-MAG","TETRACAP","TETRACON","TETRASINE","TETRASINE EX","TETRAVISC","TETTERINE","TEV TROPIN","TEVA-CC","TEVETEN","TEVETEN HCT","TEXACORT","TGEL","TGEL CONDITIONER","THALITONE","THALOMID","THE ITCH ERASER SENSITIVE","THE MAGIC BULLET","THEO G","THEO-24","THEO-DUR SPRINKLE","THEO-SAV","THEO-TIME","THEO-X","THEOBID","THEOCAP","THEOCHRON","THEOCLEAR","THEOCLEAR-80","THEOCON","THEOCON ELIXIR","THEODRINE","THEODUR","THEOLAIR","THEOLATE","THEOMAR G.G.","THEOMAX","THEOMAX DF","THEOPHYLL-GG","THEOSOL-80","THEOSPAN","THEOSPECT","THEOVENT","THERA TEARS","THERA-D","THERA-FLUR-N","THERA-GESIC","THERA-GESIC PLUS","THERA-SAL","THERACRAN","THERACYS","THERAFLU","THERAFLU COLD & COUGH","THERAFLU COLD & COUGH STRIP","THERAFLU COLD & SORE THROAT","THERAFLU COLD & SORE THROAT REFORMULATED SEP 2008","THERAFLU DAYTIME SEVERE COLD","THERAFLU DAYTIME SEVERE COLD & COUGH","THERAFLU FLU & CHEST CONGESTION","THERAFLU FLU & SORE THROAT","THERAFLU FLU & SORE THROAT REFORMULATED SEP 2008","THERAFLU FLU AND COLD MEDICINE POWDER","THERAFLU MAX-D","THERAFLU MULTI SYMPTOM","THERAFLU NIGHT COUGH AND COLD AND FLU","THERAFLU NIGHTIME MAXIMUM STRENGTH","THERAFLU NIGHTTIME MAXIMUM STRENGTH","THERAFLU NIGHTTIME SEVERE COLD","THERAFLU NIGHTTIME SEVERE COLD & COUGH","THERAFLU NIGHTTIME SEVERE COLD CAPSULE","THERAFLU NIGHTTIME SEVERE COLD TABLET","THERAFLU NO DROWSINESS MAXIMUM STRENGTH","THERAFLU SEVERE COLD & CONGESTION NON-DROWSY","THERAFLU SEVERE COLD & COUGH DAYTIME NIGHTTIME POWDER","THERAFLU SEVERE COLD NIGHTTIME","THERAFLU SINUS","THERAFLU SORE THROAT MAXIMUM STRENGTH","THERAFLU VAPOR STICK","THERAFLU WARMING COLD & CHEST CONGESTION","THERAFLU WARMING RELIEF","THERAFLU WARMING SEVERE COLD","THERAFLU WARMING SEVERE COLD NIGHTTIME","THERAFLU, FLU, COLD, AND COUGH","THERAHIST","THERAMYCIN","THERAMYCIN Z","THERAPLEX T","THERAPLEX Z","THERASEAL HAND PROTECTION","THERASTAT","THERATEARS","THERATEARS NUTRITION","THEREVAC PLUS","THEREVAC-SB","THERMAZENE","THERMOTABS","THEROXIDE","THIOLA","THIOPLEX","THIOSULFIL FORTE","THORACOL","THORAZINE","THORAZINE SPANSULE CAPSULES","THREAMINE DM","THREOSTAT","THRIVE","THROAT SPRAY-CHERRY","THROMBATE","THROMBATE III","THROMBIN-JMI","THROMBINAR","THROMBOGEN","THROMBOSTAT","THYBINE","THYMOGLOBULIN","THYROGEN","THYROLAR","THYROSAFE","THYROSHIELD","THYROX","TI-PLEX","TIADYLT","TIAMATE","TIAZAC","TIBSOVO","TICAR","TICE BCG","TICLID","TICON","TIGAN","TIGAN ADULT","TIGAN PEDIATRIC","TIGER BALM","TIGER BALM LINIMENT","TIGER BALM MUSCLE RUB","TIGER BALM PAIN RELIEVING","TIJA","TIKOSYN","TILADE","TILIA FE","TIME HIST QD","TIMENTIN","TIMOLIDE","TIMOPTIC","TIMOPTIC IN OCUDOSE","TIMOPTIC-XE","TIN-BEN","TINACTIN","TINACTIN JOCK ITCH","TINADERM","TINASPORE","TINDAMAX","TINEACIDE ANTIFUNGAL","TINEACIDE ANTIFUNGAL REFORMULATED JUN 2013","TING","TING AF","TIROSINT","TIROSINT 0.013","TIROSINT 0.025","TIROSINT 0.05","TIROSINT 0.075","TIROSINT 0.088","TIROSINT 0.1","TIROSINT 0.112","TIROSINT 0.125","TIROSINT 0.137","TIROSINT 0.15","TIS-U-SOL","TISSEEL","TISSEEL VH","TITRALAC","TITRALAC PLUS","TITRALAC PLUS LIQUID","TIVICAY","TIVORBEX","TL GARD RX","TL-DEX DM","TL-HIST CD","TL-HIST CM","TL-HIST DM","TNKASE","TOBI","TOBI PODHALER DAILY KIT","TOBI PODHALER KIT","TOBI PODHALER WEEKLY KIT","TOBRADEX","TOBRAFLEX","TOBRALCON","TOBRASOL","TOBREX","TOFRANIL","TOFRANIL-PM","TOL-TAB","TOLAK","TOLECTIN","TOLINASE","TOLNATE","TOLU-SED DM","TOMYCINE","TONOCARD","TOOTSWEET","TOPAMAX","TOPAMAX SPRINKLE","TOPEX","TOPICAINE","TOPICAL HEMO-STAT","TOPICALE","TOPICALE GEL","TOPICALE XTRA","TOPICORT","TOPICORT LP","TOPICYCLINE","TOPIRAGEN","TOPISULF","TOPOSAR","TOPROL","TOPROL-XL","TORADOL","TORECAN","TORISEL","TORNALATE","TOTACILLIN","TOTACILLIN-N","TOTAL ALLERGY","TOTECT","TOUJEO","TOURO ALLERGY","TOURO CC","TOURO DM","TOURO EX","TOURO HC","TOURO LA","TOURO LA 525120","TOVIAZ","TPN ELECTROLYTES","TRAC TABS 2X","TRACLEER","TRACRIUM","TRADJENTA","TRAHIST","TRAMACORT","TRAMACORT-D","TRAMALGIN","TRANCOPAL","TRANCOT","TRANDATE","TRANQUIL NIGHTTIME SLEEP AID","TRANS-VER-SAL","TRANSANOSIL","TRANSDERM NITRO","TRANSDERM SCOP","TRANSIDERM-NITRO","TRANXENE","TRANXENE-SD","TRANZAREL","TRASYLOL","TRAVASE","TRAVASOL 10","TRAVASOL 5.5","TRAVATAN","TRAVEL-EASE","TRAVEL-EZE","TRAVEL-WISE","TREAGAN","TREANDA","TRECATOR","TRECATOR-SC","TRELEGY","TRELSTAR","TRELSTAR DEPOT","TRELSTAR LA","TREMFYA","TRENTAL","TRESIBA","TRETIN X","TRETTEN","TREXALL","TREXBROM","TREXBROM REFORMULATED JUN 2011","TREXIMA","TREXIMET","TREZIX","TRI BIOZENE","TRI FED X","TRI FEMYNOR 28 DAY","TRI LEVLEN","TRI VENT DM","TRI VENT DPC","TRI VENT HC","TRI-BUFFERED ASPIRIN","TRI-CHLOR","TRI-DEC","TRI-ESTARYLLA 28 DAY","TRI-HIST PEDIATRIC","TRI-HYDROSERPINE","TRI-K","TRI-KORT","TRI-LEGEST 28","TRI-LEGEST 28 DAY","TRI-LEVLEN 28 DAY","TRI-LINYAH","TRI-LO- ESTARYLLA 28 DAY","TRI-LO-MARZIA 28-DAY","TRI-LO-MILI","TRI-LO-SPRINTEC 28 DAY","TRI-LUMA","TRI-MED","TRI-MILI 28 DAY","TRI-NASAL","TRI-NEFRIN","TRI-NORINYL 28 DAY","TRI-OTIC","TRI-P ORAL INFANT DROPS","TRI-PAK","TRI-PASE","TRI-PHEN-CHLOR","TRI-PHEN-CHLOR PEDIATRIC","TRI-PHEN-MINE","TRI-PHEN-MINE PEDIATRIC","TRI-PREVIFEM 28 DAY","TRI-PSEUDO","TRI-SPRINTEC 28 DAY","TRI-STATIN","TRI-STATIN II","TRI-SUDO","TRI-TANNATE","TRI-TANNATE PEDIATRIC","TRI-TANNATE PLUS","TRI-VI-SOL","TRI-VI-SOL WITH IRON","TRI-VYLIBRA 28 DAY","TRI-ZEL","TRIAC COLD & COUGH","TRIAC EXPECTORANT","TRIACET","TRIACIN","TRIACIN C","TRIACTIN","TRIACTIN DM","TRIACTIN EXPECTORANT","TRIACTIN SYRUP","TRIACTING","TRIAD","TRIAFED","TRIAFED & CODEINE","TRIALL","TRIAM","TRIAM-A","TRIAM-FORTE","TRIAMCOT","TRIAMINIC","TRIAMINIC A.M.","TRIAMINIC A.M. COUGH AND DECONGESTANT","TRIAMINIC ALLERCHEWS","TRIAMINIC ALLERGY","TRIAMINIC ALLERGY CONGESTION","TRIAMINIC AM","TRIAMINIC CHEST & NASAL CONGESTION","TRIAMINIC CHEST CONGESTION","TRIAMINIC CHEST CONGESTION REFORMULATED NOV 2006","TRIAMINIC CHILDREN\'S MULTI-SYMPTOM FEVER COLD","TRIAMINIC COLD AND ALLERGY","TRIAMINIC COLD AND ALLERGY REFORMULATED JAN 2014","TRIAMINIC COLD AND ALLERGY REFORMULATED MAR 2007","TRIAMINIC COLD AND COUGH","TRIAMINIC COLD AND FEVER","TRIAMINIC COLD SYRUP","TRIAMINIC COUGH","TRIAMINIC COUGH & RUNNY NOSE","TRIAMINIC COUGH & RUNNY NOSE SOFTCHEWS","TRIAMINIC COUGH & SORE THROAT","TRIAMINIC COUGH & SORE THROAT REFORMULATED JUL 2007","TRIAMINIC COUGH AND CONGESTION","TRIAMINIC DAY TIME COLD & COUGH","TRIAMINIC DECONGESTANT","TRIAMINIC DM","TRIAMINIC EXPECTORANT","TRIAMINIC EXPECTORANT DH","TRIAMINIC EXPECTORANT WITH CODEINE","TRIAMINIC FEVER & PAIN","TRIAMINIC INFANT DROPS","TRIAMINIC INFANT DROPS REFORMULATED NOV 2010","TRIAMINIC LONG ACTING COUGH","TRIAMINIC LONG-ACTING COUGH & COLD","TRIAMINIC MULTI-SYMPTOM FEVER","TRIAMINIC MULTI-SYMPTON","TRIAMINIC NIGHT TIME","TRIAMINIC NIGHT TIME COLD & COUGH","TRIAMINIC SOFTCHEW","TRIAMINIC SOFTCHEW COLD AND ALLERGY","TRIAMINIC SOFTCHEW COLD AND COUGH","TRIAMINIC SOFTCHEWS ALLERGY CONGESTION","TRIAMINIC SOFTCHEWS ALLERGY SINUS","TRIAMINIC SOFTCHEWS CHEST CONGESTION","TRIAMINIC SOFTCHEWS COUGH & SORE THROAT","TRIAMINIC SOFTCHEWS COUGH & SORE THROAT REFORMULATED JUL 2007","TRIAMINIC SORE THROAT","TRIAMINIC SORE THROAT FORMULA","TRIAMINIC THIN STRIPS COLD","TRIAMINIC THIN STRIPS COUGH","TRIAMINIC-D MULTI-SYMPTOM COLD","TRIAMINICIN","TRIAMINICIN REFORMULATED SEP 2008","TRIAMINICOL MULTI SYMPTOM COUGH AND COLD","TRIAMONIDE","TRIAMONIDE 40","TRIANEX","TRIANT-HC","TRIAVIL","TRIAVIL 102","TRIAVIL 104","TRIAVIL 252","TRIAVIL 254","TRIAVIL 504","TRIAZ","TRIAZ CLEANSER","TRIBAN","TRIBENZOR","TRIBIOTIC PLUS","TRIBLIDE","TRICHLOR FRESH PAK","TRICODENE FORTE","TRICODENE NN","TRICODENE PEDIATRIC","TRICODENE SUGAR FREE","TRICOLD","TRICOR","TRICOSAL","TRIDERM","TRIDESILON","TRIDIONE","TRIDRANE","TRIESENCE","TRIFED C","TRIFERIC","TRIGLIDE","TRIHEXANE","TRIHIBIT","TRIHIST CS","TRIHIST D","TRIHIST DM","TRIHIST-CS","TRIHIST-D","TRIKOF D","TRIKOF D REFORMULATED SEP 2008","TRILAFON","TRILEPTAL","TRILIPIX","TRILISATE","TRILOCORT","TRILOG","TRILONE","TRILYTE","TRIMAL DH","TRIMAZIDE","TRIMO SAN","TRIMO-SAN","TRIMOX","TRIMPEX","TRINALIN REPETABS TABLETS","TRINESSA 28 DAY","TRINESSA LO 28 DAY","TRINTELLIX","TRINTEX","TRIOFED","TRIONATE","TRIOSTAT","TRIOTANN","TRIOTANN PEDIATRIC","TRIOTANN-S","TRIOTANN-S PEDIATRIC","TRIOXIN","TRIPEDIA","TRIPHASIL 21 DAY","TRIPHASIL 28 DAY","TRIPHED","TRIPHENICOL","TRIPLE ANTIBIOTIC","TRIPLE ANTIBIOTIC PLUS","TRIPLE ANTIBIOTIC PLUS LIDOCAINE","TRIPLE ANTIBIOTIC PLUS PRAMOXINE","TRIPLE CARE ANTIFUNGAL","TRIPLE PASTE","TRIPLE PASTE AF","TRIPLE TANNATE PEDIATRIC","TRIPLE X PEDICULICIDE","TRIPLEFLEX","TRIPLEX AD","TRIPOHIST","TRIPOHIST D","TRIPOSED","TRIPTIFED","TRIPTODUR","TRIPTONE","TRISENOX","TRISOFED","TRISORALEN","TRISPEC DEX","TRISTOJECT","TRISUDRINE","TRITAL","TRITAL DM","TRITAL SR","TRITAN","TRITEC","TRITUSS","TRITUSS A","TRITUSS ER","TRIUMEQ","TRIVARIS","TRIVEEN","TRIVORA 28 DAY","TRIXAICIN","TRIXAICIN HP","TRIXENOX","TRIZIVIR","TROBICIN","TROCAINE","TROGARZO","TROKENDI","TRONOLANE","TRONOLANE ANESTHETIC","TRONOLANE SUPPOSITORIES","TRONOTHANE","TROPHAMINE","TROPHAMINE 10 %","TROPHAMINE 6 %","TROVAN","TROVAN IV","TROVANZITHROMAX COMPLIANCE PAK","TROXYCA","TRU-MICIN","TRUEPLUS GLUCOSE","TRUEPLUS GLUCOSE SHOT","TRULANCE","TRULICITY","TRUMENBA","TRUPHYLLINE","TRUSOPT","TRUVADA","TRUX-ADRYL","TRUXACAINE","TRUXADRYL","TRUXAZOLE","TRUXCILLIN-VK","TRUXICILLIN","TRUXOPHYLLIN","TRYSUL","TUBERSOL","TUBIZID","TUCKS","TUCKS CLEAR GEL","TUCKS FAST RELIEF","TUCKS HC","TUCKS HEMORRHOIDAL","TUCKS MEDICATED PADS","TUCKS SUPPOSITORIES","TUDORZA","TUINAL","TULANA","TUMS","TUMS 500","TUMS CHEWY DELIGHTS","TUMS DUAL ACTION","TUMS E-X","TUMS ULTRA","TUMS WITH GAS RELIEF","TUSAL","TUSANA D","TUSDEC HC","TUSGEN","TUSGEN PED BUBBLE GUM FLAVOR","TUSICOF","TUSNEL","TUSNEL C","TUSNEL CAPS","TUSNEL DIABETIC","TUSNEL DM PEDIATRIC","TUSNEL HC","TUSNEL PEDIATRIC","TUSNEL PEDIATRIC COUGH","TUSNEL REFORMULATED APR 2011","TUSS AX","TUSS DA","TUSS DM","TUSS HC","TUSS MINE DM","TUSS PD","TUSS S","TUSS TAN","TUSS-DS","TUSS-LA","TUSSADUR-HD","TUSSAFED","TUSSAFED EX","TUSSAFED-EX DROPS","TUSSAFED-HC","TUSSAFED-HCG","TUSSAFIN","TUSSAFIN LIQUID","TUSSALL","TUSSALL ER","TUSSAMINIC","TUSSANIL","TUSSAR","TUSSAR DM","TUSSAR SF","TUSSAR-2","TUSSBID","TUSSCIDIN","TUSSCIDIN DM","TUSSCIDIN PE","TUSSCOUGH DHC","TUSSEND","TUSSEND EXPECTORANT","TUSSEX","TUSSGEN","TUSSGEN EXPECTORANT","TUSSHISTINE CS","TUSSI ORGANIDIN 10100","TUSSI ORGANIDIN 10300","TUSSI ORGANIDIN DM 10100","TUSSI ORGANIDIN DM 10300","TUSSI PRES B","TUSSI PRES B REFORMULATED AUG 2011","TUSSI PRESS","TUSSI-12","TUSSI-12 SUSPENSION","TUSSI-12 TABLET","TUSSI-12D","TUSSI-12D S","TUSSI-BID","TUSSI-ORGANIDIN DM NR","TUSSI-ORGANIDIN DM-S NR","TUSSI-ORGANIDIN NR","TUSSI-ORGANIDIN-S NR","TUSSI-PRES","TUSSI-PRES PE","TUSSICAPS","TUSSICARE DH","TUSSICLEAR DH","TUSSIDEN C","TUSSIDEN DM","TUSSIDIN DM","TUSSIGON","TUSSIN","TUSSIN CF","TUSSIN CF COLD","TUSSIN CF COUGH","TUSSIN COUGH AND COLD","TUSSIN COUGH AND COLD MAXIMUM STRENGTH","TUSSIN DM","TUSSIN EXPECTORANT","TUSSIN PE","TUSSIN PEDIATRIC","TUSSIN PEDIATRIC COLD AND COUGH","TUSSIN V","TUSSINATE","TUSSIONEX","TUSSIONEX PENNKINETIC","TUSSIONEX PENNKINETIC ER","TUSSIPHEN DM","TUSSIREX","TUSSIREX SUGAR FREE","TUSSITAB","TUSSIVE HC","TUSSIZONE-12 RF","TUSSO C","TUSSO DF","TUSSO DM","TUSSO HC","TUSSO ZMR","TUSSO-C","TUSSO-DM","TUSSO-DMR","TUSSO-XR","TUSSO-ZR","TUSSPLEX","TUSSPLEX DM","TUSSTAT","TUSTAN","TUZISTRA","TWILITE","TWIN-K","TWINJECT","TWINRIX","TWO-DYNE","TWYNSTA","TYBOST","TYCOLENE","TYDEMY 28 DAY","TYGACIL","TYKERB","TYLAGESIC 3","TYLENOL","TYLENOL ALLERGY","TYLENOL ALLERGY COMPLETE MULTI-SYMPTOM DAY AND NIGHT","TYLENOL ALLERGY MULTI-SYMPTOM","TYLENOL ALLERGY MULTI-SYMPTOM NIGHTTIME","TYLENOL ALLERGY SINUS","TYLENOL ALLERGY SINUS CAPLET","TYLENOL ALLERGY SINUS NIGHTTIME","TYLENOL CHEST CONGESTION","TYLENOL CHILDREN\'S MULTI-SYMPTOM COLD PLUS","TYLENOL CHILDREN\'S PLUS COLD","TYLENOL CHILDREN\'S PLUS COLD & COUGH","TYLENOL CHILDREN\'S PLUS COLD REFORMULATED MAR 2013","TYLENOL CHILDREN\'S PLUS FLU","TYLENOL CHILDRENS PLUS COUGH & RUNNY NOSE","TYLENOL CHILDRENS PLUS COUGH & SORE THROAT","TYLENOL COLD","TYLENOL COLD & FLU SEVERE DAY TIME","TYLENOL COLD & FLU SEVERE NIGHTTIME","TYLENOL COLD AND FLU","TYLENOL COLD AND FLU NO DROWSINESS","TYLENOL COLD COMPLETE FORMULA","TYLENOL COLD DAY AND NIGHT CONVENIENCE PACK","TYLENOL COLD HEAD CONGESTION SEVERE","TYLENOL COLD INFANTS","TYLENOL COLD INFANTS REFORMULATED JUN 2007","TYLENOL COLD MULTI-SYMPTOM DAY AND NIGHT","TYLENOL COLD MULTI-SYMPTOM DAY AND NIGHT 1212","TYLENOL COLD MULTI-SYMPTOM DAY AND NIGHT 128","TYLENOL COLD MULTI-SYMPTOM DAY AND NIGHT 3624","TYLENOL COLD MULTI-SYMPTOM DAYTIME","TYLENOL COLD MULTI-SYMPTOM NIGHTTIME","TYLENOL COLD MULTI-SYMPTOM NIGHTTIME LIQUID","TYLENOL COLD MULTI-SYMPTOM SEVERE","TYLENOL COLD MULTI-SYMPTOM SEVERE DAYTIME","TYLENOL COLD NO DROWSINESS","TYLENOL COLD PLUS COUGH PLUS SORE THROAT","TYLENOL COLD RELIEF","TYLENOL COLD RELIEF NIGHTTIME","TYLENOL COLD SEVERE CONGESTION","TYLENOL COLD SEVERE CONGESTION NON-DROWSY","TYLENOL COUGH","TYLENOL COUGH & SORE THROAT NIGHT TIME","TYLENOL COUGH AND SORE THROAT DAYTIME","TYLENOL COUGH LIQUID WITH DECONGESTANT","TYLENOL EXTRA STRENGTH DAY AND NIGHT PACK","TYLENOL EXTRA STRENGTH DAY AND NIGHT VALUE PACK","TYLENOL EXTRA STRENGTH P.M.","TYLENOL FLU DAY AND NIGHT CONVENIENCE PACK GELCAP","TYLENOL FLU MAXIMUM STRENGTH","TYLENOL FLU MAXIMUM STRENGTH NIGHTTIME","TYLENOL FLU NIGHTTIME","TYLENOL INFANT","TYLENOL INFANTS COLD PLUS COUGH","TYLENOL INFANTS COLD PLUS COUGH REFORMULATED SEP 2008","TYLENOL NIGHTIME FLU GELCAP MAXIMUM STRENGTH","TYLENOL PM","TYLENOL PM EXTRA STRENGTH","TYLENOL SEVERE ALLERGY","TYLENOL SIMPLY COUGH","TYLENOL SIMPLY STUFFY","TYLENOL SINUS","TYLENOL SINUS CHILDRENS","TYLENOL SINUS CONGESTION & PAIN NIGHTTIME","TYLENOL SINUS CONGESTION AND PAIN DAY AND NIGHT","TYLENOL SINUS CONGESTION AND PAIN DAYTIME","TYLENOL SINUS CONGESTION AND PAIN SEVERE","TYLENOL SINUS CONGESTION DAYTIME","TYLENOL SINUS CONGESTION NIGHTTIME","TYLENOL SINUS DAY AND NIGHT CONVENIENCE PACK","TYLENOL SINUS DAY AND NIGHT CONVENIENCE PACK CAPLET","TYLENOL SINUS MAXIMUM STRENGTH","TYLENOL SINUS NIGHTTIME","TYLENOL SINUS SEVERE CONGESTION","TYLENOL SORE THROAT NIGHTTIME","TYLENOL WARMING COUGH & SORE THROAT NIGHTIME","TYLENOL WITH CODEINE","TYLENOL WITH CODEINE #2","TYLENOL WITH CODEINE #3","TYLENOL WITH CODEINE #4","TYLOPHEN","TYLOX","TYMLOS","TYPHIM VI","TYRODONE EXPECTORANT","TYSABRI","TYVASO","TYZEKA","TYZINE","TYZINE NASAL"]'));
        // Block#: ]%K!jkbM6VqGl0u::#(3
        com.fc.JavaScriptDistLib.Dictionary.setDictValue(LibVars.medicationlistlib.medDict, 'T', LibVars.medicationlistlib.tempDict);
        // Block#: =CMAkAUI_!=530R}h60v
        LibVars.medicationlistlib.tempDict = (com.fc.JavaScriptDistLib.JSON.parseJSONData('["U-CORT","U-KERA","U-LACTIN","U-TRI-LONE","UAA","UAD","UAD CAINE","UCERIS","UGESIC","ULCEREASE","ULESFIA","ULORIC","ULR-LA","ULTACAN","ULTANE","ULTIVA","ULTRA FRESH","ULTRA FRESH P.M.","ULTRA MIDE","ULTRA MYLANTA CALCI TABS","ULTRA TEARS","ULTRABALANCE","ULTRABROM","ULTRABROM PD","ULTRACAPS MT 20","ULTRACEF","ULTRACET","ULTRALYTIC","ULTRALYTIC 2","ULTRAM","ULTRAPRIN","ULTRASAL","ULTRASE","ULTRASE MT 12","ULTRASE MT 18","ULTRASE MT 20","ULTRAVATE","ULTRAVATE PAC","ULTRAVATE PAC CREAM","ULTRAVATE X CREAM","ULTRAVATE X OINTMENT","ULTRAVIST","ULTRESA","UMECTA","UMECTA PD","UNASYN","UNDELENIC","UNGUENTINE","UNGUENTINE MAXIMUM STRENGTH","UNGUENTINE PLUS","UNI ALL 12","UNI BRONCHIAL","UNI DECON","UNI HIST PDX","UNI MULTIHIST DM","UNI SALVE","UNI SERP","UNI TUSS DM","UNI TUSS HC","UNI TUSSIN CF","UNI TUSSIN PE","UNI-ACE","UNI-ACE CHILD","UNI-ANN","UNI-ANTACID","UNI-BUFF","UNI-CAL 500","UNI-CALM","UNI-CASE","UNI-CENNA","UNI-COF","UNI-COF EXPECTORANT","UNI-CORTROM","UNI-DUR","UNI-EASE","UNI-EASE PLUS","UNI-FED","UNI-FEMLAX","UNI-GUAIFEN 600300","UNI-HIST","UNI-HIST DM PEDIATRIC","UNI-HIST DM PEDIATRIC DROPS","UNI-HIST PDX DROPS","UNI-LAN","UNI-LAN II","UNI-LAXATIVE","UNI-LEV 5.0","UNI-MINT","UNI-MULTIHIST","UNI-MULTIHIST CS","UNI-MULTIHIST D","UNI-MULTIHIST D PED","UNI-MULTIHIST D SR","UNI-OTIC","UNI-PERR","UNI-PRO","UNI-SED","UNI-SED PLUS","UNI-SPORT","UNI-TANN","UNI-TANN CS","UNI-TANN D","UNI-TEX","UNI-TREN","UNI-TRICOF HC","UNI-TRIS","UNI-TUSSIN","UNI-TUSSIN DM","UNIFED","UNIFIBER","UNILAX","UNIPEN","UNIPHYL","UNIPRES","UNIRETIC","UNIRETIC 1512.5","UNIRETIC 1525","UNIRETIC 7.512.5","UNISERTS","UNISOM","UNISOM SLEEP","UNISOM SLEEPGELS MAXIMUM STRENGTH","UNISOM SLEEPMELTS","UNISOM WITH PAIN RELIEF","UNIT-HIST DROPS","UNIT-TEX","UNITHROID","UNITUXIN","UNIVASC","UPTRAVI","UPTRAVI TITRATION PACK","URALGIC","URAMAXIN","URAMIT","URAPINE","URBAN DS","URBAN TRADENAME","UREACIN-10","UREACIN-20","UREALAC","UREAPHIL","URECHOLINE","URELIEF","URELIEF PLUS","URELLE","URETRON","URETRON DS","UREX","URI-SEP SC","URIBEL","URICALM","URICALM INTENSIVE","URIDON MODIFIED","URIMAR REFORMULATED OCT 2013","URIMAR T","URIMAX","URIN DS","URINARY ANALGESIC","URISED","URISEDAMINE","URISPAS","URISTAT","URITACT","URITACT DS","URITACT-EC","URITIN","URL-TANNATE","URO BLUE","URO-BLUE","URO-JECT","URO-KP","URO-KP-NEUTRAL","URO-MAG","URO-PHOSPHATE","UROBIOTIC","UROBIOTIC-250","UROCIT-K","URODOL","UROGESIC","UROGESIC BLUE","UROGESIC BLUE REFORMULATED APR 2012","UROLENE BLUE","UROLET","UROLOGIC G","UROPHEN","UROPLUS","UROPLUS DS","UROQID-ACID NO.2","UROTROL","UROXATRAL","URSINUS","URSO","URSO FORTE","USEPT","USTELL","UTA CAPSULE","UTA CAPSULE REFORMULATED FEB 2016","UTAC","UTI RELIEF","UTIBRON","UTICAP","UTICORT","UTIRA","UTIRA-C","UTOPIC","UTRONA-C","UVADEX"]'));
        // Block#: RVuUS8`-sGV78riH+P@+
        com.fc.JavaScriptDistLib.Dictionary.setDictValue(LibVars.medicationlistlib.medDict, 'U', LibVars.medicationlistlib.tempDict);
        // Block#: Kk,[UM;pIhVhYn8$qMp=
        LibVars.medicationlistlib.tempDict = (com.fc.JavaScriptDistLib.JSON.parseJSONData('["V-CIL-K","V-CILLIN K","V-COF","V-GAN","V-GAN-25","V-GAN-50","V-HIST","V-LAX","V-TAN DM","V-TANN","V-TANN SUSPENSION","V.V.S.","VA DISCLOSING","VA-ZONE","VABOMERE","VAGI-GARD DOUCHE","VAGIFEM","VAGISIL MAXINUM STRENGTH","VAGISIL ORIGINAL FORMULA","VAGISIL WIPES","VAGISTAT","VAGISTAT 3 COMBINATION PACK","VAGISTAT 3 DAY COMBINATION PACK","VAGISTAT-1","VAGISTAT-3 COMBINATION PACK","VALCHLOR","VALCYTE","VALERGEN","VALERTEST","VALERTEST NO. 1","VALISONE","VALIUM","VALOMAG","VALORIN EXTRA","VALRELEASE","VALSTAR","VALTREX","VALTURNA","VALU-DRYL","VALU-DRYL TOPICAL","VALU-FOAM","VALU-TAPP SR","VALUMAG PLUS","VALUPHED","VALUPHED WITH ACTAMINE","VANACET","VANACHOL","VANACLEAR","VANACOF","VANACOF AC","VANACOF APE","VANACOF CDP","VANACOF DM","VANACOF DX","VANACOF G","VANACOF GPE","VANACOF-8","VANACOF-PE","VANACON","VANADOM","VANAHIST PD","VANAMIDE","VANAMINE","VANATAB","VANATAB AC","VANATAB DM","VANATOL","VANATRIP","VANCENASE","VANCENASE AQ","VANCENASE AQ DS","VANCERIL","VANCERIL DS","VANCOCIN","VANCOLED","VANCOMYCIN HYDROCHLORIDE NOVAPLUS","VANDAZOLE","VANEX","VANEX EXPECTORANT","VANEX FORTE","VANEX FORTE-D","VANEX FORTE-R","VANEX GRAPE","VANEX-HD","VANEX-LA","VANICREAM DIAPER RASH","VANIPLY","VANIQA","VANOS","VANOXIDE","VANOXIDE-HC","VANQUISH","VANSIL","VANSPAR","VANTAS","VANTIN","VAPOREX","VAPORUB","VAPORX BALM","VAPRISOL","VAQTA","VAQTA PEDIATRIC","VARITHENA","VARIVAX","VARIZIG","VARUBI","VASCEPA","VASCOR","VASELINE","VASERETIC","VASERETIC 10-25","VASERETIC 5-12.5","VASO DOSE PACK 10","VASO DOSE PACK 30","VASOCIDIN","VASOCLEAR","VASOCLEAR A","VASOCON","VASOCON-A","VASODILAN","VASOFLEX D1","VASOFLEX HD","VASOLEX","VASOSTRICT","VASOSULF","VASOTEC","VASOXYL","VAXCHORA","VAYACOG","VAYARIN","VAYAROL","VAZCULEP","VAZOBID","VAZOBID-PD","VAZOL","VAZOL D","VAZOTAB","VAZOTAB REFORMULATED DEC 2013","VAZOTAN","VAZOTUSS HC","VCF CONTRACEPTIVE","VECAMYL","VECTIBIX","VECTICAL","VECTRIN","VEETIDS","VELBAN","VELCADE","VELETRI","VELIVET 28 DAY","VELOSEF","VELOSULIN","VELPHORO","VELTASSA","VELTIN","VEMLIDY","VENASTAT","VENBID TR","VENCLEXTA","VENCLEXTA STARTING PACK","VENDONE","VENELEX","VENOFER","VENTAVIS","VENTOLIN","VENTOLIN HFA","VENTOLIN NEBULES","VENTOLIN ROTACAPS","VENTUSS","VERACOLATE","VERAMYST","VERAZINC","VERDESO","VERDROCET","VEREGEN","VERELAN","VERELAN PM","VERIPRED","VERMOX","VERSACLOZ","VERSED","VERSICLEAR","VERTICALM","VERV","VERZENIO","VESANOLD","VESICARE","VESPRIN","VESTURA","VETUSS HC SYRUP","VEXA","VEXOL","VFEND","VI Q TUSS","VI-ATRO","VI-SUDO","VIABECLINE","VIACTIV CALCIUM PLUS D","VIACTIV CALCIUM SOFT CHEWS","VIADUR","VIAGRA","VIBAL","VIBATIV","VIBERZI","VIBRA-TABS","VIBRAMYCIN","VIBRAMYCIN CALCIUM","VIBRAMYCIN MONOHYDRATE","VICKS 44 COLD & COUGH LIQUICAPS","VICKS 44 COLD, FLU AND COUGH","VICKS 44 COUGH MEDICINE","VICKS 44 COUGH RELIEF","VICKS 44D","VICKS 44D COUGH & HEAD CONGESTION","VICKS 44D PEDIATRIC","VICKS 44E","VICKS 44M PEDIATRIC","VICKS DAYQUIL MUCUS CONTROL","VICKS DAYQUILNYQUIL COLD & FLU RELIEF COMBO PACK","VICKS FORMULA 44","VICKS FORMULA 44 CUSTOM CARE CHESTY COUGH","VICKS FORMULA 44 CUSTOM CARE COUGH & COLD PM","VICKS FORMULA 44M","VICKS NATURE FUSION COLD AND FLU NIGHT","VICKS NATURE FUSION COUGH AND CHEST CONGESTION","VICKS NATURE FUSION COUGH AND FLU NIGHT","VICKS NYQUIL COUGH","VICKS PEDIATRIC FORMULA 44M","VICKS VAPODROPS","VICKS VAPORUB","VICKS VAPOSTEAM","VICKS VITAMIN C DROPS","VICOCLEAR","VICOCLEAR DH","VICODIN","VICODIN ES","VICODIN HP","VICODIN TUSS","VICOPROFEN","VICOTUSS","VICTOZA","VICTRELIS","VIDAZA","VIDEN","VIDEX","VIDEX EC","VIDONE","VIEKIRA PAK","VIEKIRA XR PAK","VIENVA 28 DAY","VIGADRONE","VIGAMOX","VIIBRYD","VIIBRYD 102040 30 DAY PACK","VIIBRYD STARTER PACK 1020 30 DAY PACK","VILOFANE","VIMIZIM","VIMOVO","VIMOVO 37520","VIMOVO 50020","VIMPAT","VIMPAT 2 WEEK STARTER KIT","VINCASAR","VINCASAR PFS","VIO-MOORE","VIO-TEX-HC","VIOKACE","VIOKASE","VIORELE 28 DAY","VIOXX","VIQUIN FORTE","VIRACEPT","VIRACTIN","VIRAMUNE","VIRASAL","VIRAVAN S","VIRAVAN-P","VIRAVAN-PDM","VIRAZOLE","VIREAD","VIRIDIUM","VIROPTIC","VIRORMONE INJECTION","VISCO-3","VISCOAT","VISICOL","VISICOL 3981102","VISINE","VISINE AC","VISINE ADVANCED RELIEF","VISINE DRY EYE RELIEF","VISINE L.R.","VISINE LONG LASTING","VISINE MAXIMUM REDNESS RELIEF","VISINE PURE TEARS","VISINE TEARS LONG LASTING DRY EYE","VISINE TIRED EYE RELIEF","VISINE TOTALITY","VISINE-A","VISION BLUE","VISION CLEAR","VISION EYE","VISIPAQUE","VISKEN","VISQID","VISQID AA","VISTACON","VISTACOT","VISTAJECT-50","VISTARIL","VISTAZINE","VISTIDE","VISTOGARD","VISTRA","VISTUSS","VISUDYNE","VISVEX HC","VITA #12","VITA NUMONYL","VITA-PLUS E NATURAL","VITA-RESPA","VITABEE 12","VITABEE WITH C","VITADYE","VITAFOL-ONE","VITAMIN C TR","VITAPAP","VITAZOL","VITEKTA","VITELLE IROSPAN","VITELLE NESTREX","VITRASE","VITRASERT","VITRAVENE","VITRAX","VITRON-C","VITRON-C REFORMULATED JUL 2016","VITUSSIN","VITUSSIN EXPECTORANT","VITUZ","VIVA-DROPS","VIVA-DROPS LUBRICATING EYE DROPS","VIVACAINE","VIVACTIL","VIVAGLOBIN","VIVARIN","VIVELLE","VIVELLE-DOT","VIVITROL","VIVLODEX","VIVOTIF","VOGELXO","VOLNEA 28 DAY","VOLTAREN","VOLTAREN OPHTHALMIC","VOLTAROL","VOLUVEN","VONTROL","VONVENDI","VOPAC","VORAXAZE","VOSEVI","VOSOL","VOSOL HC","VOSPIRE","VOTRIENT","VPRIV","VRAYLAR","VRAYLAR 1.53 MIXED PACK","VUSION","VYFEMLA 28 DAY","VYLIBRA 28 DAY","VYTONE","VYTORIN","VYVANSE","VYXEOS","VYZULTA"]'));
        // Block#: FQ%Om-5POP`8D03.TkR0
        com.fc.JavaScriptDistLib.Dictionary.setDictValue(LibVars.medicationlistlib.medDict, 'V', LibVars.medicationlistlib.tempDict);
        // Block#: soD!P05?:@}LrifGsYC]
        LibVars.medicationlistlib.tempDict = (com.fc.JavaScriptDistLib.JSON.parseJSONData('["WAKESPAN","WAL ZYR 24 HOUR ALLERGY","WAL ZYR D","WAL-ACT","WAL-DRAM","WAL-DRAM 2","WAL-DRYL","WAL-DRYL ALLERGY","WAL-DRYL CHILDRENS","WAL-DRYL PE","WAL-DRYL SEVERE ALLERGY & SINUS","WAL-DRYL-D","WAL-DRYL-D ALLERGY","WAL-FEX","WAL-FEX D","WAL-FINATE","WAL-FINATE-D","WAL-FLU COLD AND SORE THROAT","WAL-FLU DAYTIME SEVERE COLD AND COUGH","WAL-FLU NIGHTTIME SEVERE COLD","WAL-FLU SEVERE COLD","WAL-FLU SEVERE COLD AND COUGH","WAL-FLU SEVERE COLD NIGHTTIME","WAL-FOUR","WAL-HIST 12 HR RELIEF","WAL-ITIN","WAL-ITIN D","WAL-MUCIL","WAL-PHED","WAL-PHED COLD & COUGH","WAL-PHED PE","WAL-PHED PE COLD & COUGH MULTI-SYMPTOM DAYTIME","WAL-PHED PE COLD MULTI-SYMPTOM NIGHTTIME","WAL-PHED PE COMBO PACK","WAL-PHED PE SEVERE COLD","WAL-PHED PE SINUS & ALLERGY","WAL-PHED PE SINUS HEADACHE","WAL-PHED PE TRIPLE RELIEF","WAL-PHED SINUS & ALLERGY","WAL-PROFEN","WAL-PROFEN COLD AND SINUS","WAL-PROFEN CONGESTION RELIEF AND PAIN","WAL-PROXEN","WAL-SLEEP Z","WAL-SOM","WAL-SOM (DOXYLAMINE)","WAL-SOM MAXIMUM STRENGTH","WAL-TAP CHILDREN\'S COLD & ALLERGY","WAL-TAP DM","WAL-TUSSIN CF","WAL-TUSSIN CHEST CONGESTION","WAL-TUSSIN CHILDREN\'S COUGH RELIEF","WAL-TUSSIN COLD & CONGESTION CAPSULE","WAL-TUSSIN COLD & FLU CAPSULE","WAL-TUSSIN COLD SEVERE CONGESTION CAPSULE","WAL-TUSSIN COUGH","WAL-TUSSIN COUGH & COLD","WAL-TUSSIN DM","WAL-TUSSIN DM MAX","WAL-VERT","WAL-ZAN","WAL-ZYR","WAL-ZYR ITCHY EYE","WALGREENS TARTAR CONTROL WHITENING","WARFAREN","WARFARING","WARFIN","WART AWAY","WART REMOVER","WART-OFF TREATMENT","WAYKUP","WE ALLERGY","WE MIST II LA","WE MIST LA","WEBCOL","WEHAMINE","WEHDRYL","WEHGEN V","WEHLESS","WEHLESS SR","WEIGHT LOSS SUBSTANCE","WELCHOL","WELLBUTRIN","WELLTUSS EXP","WELLTUSS HC","WERA 28 DAY","WESORBIDE","WEST-DECON","WEST-DECON M","WESTCORT","WESTHROID","WESTRIM","WESTRIM LA","WHISKCARE 357","WHITFIELD\'S OINTMENT","WIGRAINE","WILATE","WINRHO","WINRHO SDF","WOMANS LAX","WOMENS GENTLE LAXATIVE","WOMENS LAXATIVE","WOMENS TYLENOL MENSTRUAL RELIEF","WP THYROID","WYAMINE SULFATE INJECTION","WYCILLIN","WYDASE","WYGESIC","WYMOX","WYMZYA FE 28 DAY","WYTENSIN"]'));
        // Block#: 3t[=IQO#B!)Wsdq$%i{N
        com.fc.JavaScriptDistLib.Dictionary.setDictValue(LibVars.medicationlistlib.medDict, 'W', LibVars.medicationlistlib.tempDict);
        // Block#: 5Gghit68W/?*Qr65RgO)
        LibVars.medicationlistlib.tempDict = (com.fc.JavaScriptDistLib.JSON.parseJSONData('["X HIST","X HIST DM","X-HIST","X-HIST DM","X-PAIN RELIEF","X-PREP","X-SEB","X-SEB PLUS","X-SEB T PEARL","X-SEB T PLUS","X-VIATE","X-WAX","X-WAX EARWAX","XADAGO","XALATAN","XALIX","XALKORI","XANAX","XARELTO","XARELTO KIT","XARTEMIS","XATMEP","XEBCORT","XEDEC","XELJANZ","XELODA","XENADERM","XENAZINE","XENICAL","XEOMIN","XEPI","XERAC AC","XERESE","XERMELO","XGEVA","XHANCE","XIAFLEX","XIBROM","XIFAXAN","XIGDUO","XIGRIS","XIIDRA","XIMINO","XIRAHIST","XIRAHIST DM","XIRAHISTDM","XIRAL","XIRATUSS","XODOL","XOFIGO","XOLAIR","XOLEGEL","XOLEGEL COREPAK","XOLEGEL DUO","XOLEGEL DUO REFORMULATED OCT 2008","XOLEX","XOLIDO","XOLOX","XOPENEX","XOTEN","XOTEN-C","XPECT","XPECT HC","XPECT PE","XPECT-AT","XS NO ASPIRIN PR","XS PAIN RELIEVER","XTAMPZA","XTANDI","XTORO","XTRA-LAX","XULANE","XULTOPHY","XURIDEN","XYLAREX","XYLO-PFAN","XYLOCAINE","XYLOCAINE 10% ORAL","XYLOCAINE HCL","XYLOCAINE HCL FOR SPINAL","XYLOCAINE HCL WITH EPINEPHRINE","XYLOCAINE JELLY","XYLOCAINE TOPICAL","XYLOCAINE VISCOUS","XYLOCAINE WITH EPINEPHRINE","XYLOCAINE WITH EPINEPHRINE DENTAL CARTRIDGES","XYLOCAINE-MPF","XYLOCAINE-MPF-EPINEPHRINE","XYLOCARD","XYLON","XYNTHA","XYRALID","XYRALID RC KIT","XYREM","XYZAL"]'));
        // Block#: r)G`FW-RZc$uZY3c]DUq
        com.fc.JavaScriptDistLib.Dictionary.setDictValue(LibVars.medicationlistlib.medDict, 'X', LibVars.medicationlistlib.tempDict);
        // Block#: h^gcK2|?W^M#-x5XwS[K
        LibVars.medicationlistlib.tempDict = (com.fc.JavaScriptDistLib.JSON.parseJSONData('["Y-COF DM","YASMIN","YASMIN 28 DAY","YAZ","YAZ 28 DAY","YEAST-X EXTERNAL","YEAST-X INT","YERVOY","YESCARTA","YF-VAX","YIERO-GOTA","YIERONIA","YOCON","YODOXIN","YOHIMAR","YOHIMEX","YOMAN","YONDELIS","YONSA","YOSPRALA","YOVITAL","YSP ASPIRIN","YUVAFEM"]'));
        // Block#: @XRnqvBTJznr{#s@XVCk
        com.fc.JavaScriptDistLib.Dictionary.setDictValue(LibVars.medicationlistlib.medDict, 'Y', LibVars.medicationlistlib.tempDict);
        // Block#: Q(3d{Yk`;h]+*#DKk6+!
        LibVars.medicationlistlib.tempDict = (com.fc.JavaScriptDistLib.JSON.parseJSONData('["Z COF","Z TUSS","Z TUSS AC","Z TUSS DM","Z-BUM","Z-COF","Z-COF DM","Z-COF HC","Z-COF HCX","Z-DEX","Z-PAK","Z-PAK SAMPLE","Z-PRAM","Z-SLEEP","Z-TUSS AC","Z-TUSS E","Z-XTRA","ZACARE 40.2","ZACARE 80.2","ZACLIR","ZADITOR","ZAGAM","ZAGAM RESPIPAC","ZALTRAP","ZAMICET","ZANAFLEX","ZANOSAR","ZANTAC","ZANTAC 150","ZANTAC 300","ZANTAC 300 GELDOSE","ZANTAC 75","ZANTAC EFFERDOSE","ZANTAC GELDOSE","ZANTRYL","ZAP BENZOCAINE TETRACAINE COMBINATION","ZAP TOPICAL SOLUTION","ZAPTEC","ZAPTEC PSE","ZAPZYT ACNE WASH","ZARAH","ZARONTIN","ZAROXOLYN","ZARTAN","ZARXIO","ZAVESCA","ZAZOLE","ZEASORB","ZEASORB-AF","ZEASORB-AF LOTIONPOWDER","ZEBETA","ZEBUTAL","ZECUITY","ZEFAZONE","ZEFAZONE I.V.","ZEGERID REFORMULATED AUG 2006","ZEGERID WITH MAGNESIUM HYDROXIDE","ZEJULA","ZELAPAR","ZELBORAF","ZELNORM","ZEMA PAK 10 DAY","ZEMA PAK 13 DAY","ZEMA PAK 6 DAY","ZEMAIRA","ZEMBRACE","ZEMDRI","ZEMPLAR","ZEMURON","ZENATANE","ZENCHENT","ZENCHENT 28 DAY","ZENCHENT FE 28 DAY","ZENCIA WASH","ZENPEP","ZENTRIP","ZENZEDI","ZEOSA 28 DAY","ZEPATIER","ZEPHIRAN","ZEPHIRAN CHLORIDE","ZEPHREX","ZEPHREX-D","ZEPRIME TAR EMULSION","ZERBAXA","ZERIT","ZERLOR","ZERO-ORDER RELEASE","ZEROXIN","ZERVALX","ZESTORETIC","ZESTRIL","ZETACET","ZETACET WASH","ZETAR","ZETIA","ZETONNA","ZETRAN","ZFLEX","ZGESIC","ZHIST","ZIAC","ZIAC 106.25","ZIAC 2.56.25","ZIAC 56.25","ZIAGEN","ZIANA","ZICAM COUGH","ZICAM COUGH PLUS D","ZICAM EXTREME CONGESTION RELIEF","ZICAM FLU NIGHTTIME","ZICAM SINUS RELIEF","ZIKS PAIN RELIEF","ZILACTIN","ZILACTIN B","ZILACTIN COLD SORE","ZILACTIN-L","ZILACTIN-L COLD SORE LIQUID","ZILRETTA","ZIMECTERIN","ZINACEF","ZINBRYTA","ZINC GLUCONATE QUICK MELT","ZINCA-PAK","ZINCATE","ZINCFRIN","ZINCON","ZINECARD","ZINGO","ZINOTIC","ZINOTIC ES","ZINPLAVA","ZINX","ZINX ALLERGY KIT","ZINX CHLOR-D","ZINX COLD KIT","ZINX CONGESTION","ZINX CONGESTION KIT","ZINX D-TUSS","ZINX KIDS SNEEZE KIT","ZINX PCM","ZIOPTAN","ZIOX","ZIPSOR","ZIRGAN","ZITHRANOL","ZITHRANOL-RR","ZITHROMAX","ZMAX","ZNP","ZNP BAR","ZOCOR","ZODERM","ZODERM 4.5","ZODERM 4.510","ZODERM 5.75","ZODERM 5.7510","ZODERM 6.5","ZODERM 6.510","ZODERM 8.5","ZODERM 8.510","ZODEX 12 DAY TAPER","ZODEX 6 DAY TAPER","ZODRYL","ZODRYL AC","ZODRYL AC 25","ZODRYL AC 30","ZODRYL AC 35","ZODRYL AC 40","ZODRYL AC 50","ZODRYL AC 60","ZODRYL AC 80","ZODRYL DAC","ZODRYL DAC 25","ZODRYL DAC 30","ZODRYL DAC 35","ZODRYL DAC 40","ZODRYL DAC 50","ZODRYL DAC 60","ZODRYL DAC 80","ZODRYL DEC","ZODRYL DEC 25","ZODRYL DEC 30","ZODRYL DEC 35","ZODRYL DEC 40","ZODRYL DEC 50","ZODRYL DEC 60","ZODRYL DEC 80","ZOFRAN","ZOFRAN ODT","ZOHYDRO","ZOLADEX","ZOLINZA","ZOLOFT","ZOLPIMIST","ZOLVIT","ZOMACTON","ZOMETA","ZOMIG","ZOMIG-ZMT","ZONALON","ZONATUSS","ZONE-A","ZONE-A FORTE","ZONEGRAN","ZONTIVITY","ZOOBY FLUORIDE FOAM","ZORBTIVE","ZORCAINE","ZORPRIN","ZORTRESS","ZORVOLEX","ZOSTAVAX","ZOSTRIX","ZOSTRIX COLD THERAPY","ZOSTRIX DIABETIC JOINT & ARTHRITIS PAIN RELIEF","ZOSTRIX HOT AND COLD THERAPY SYSTEM","ZOSTRIX JOINT & ARTHRITIS PAIN RELIEF","ZOSTRIX SPORTS","ZOSTRIX-HP","ZOSYN","ZOTEX","ZOTEX C","ZOTEX DM","ZOTEX DMX","ZOTEX EX","ZOTEX GPX","ZOTEX HC","ZOTEX LA","ZOTEX LAX","ZOTEX PE","ZOTEX-12","ZOTEX-12D","ZOTEX-C","ZOTEX-D","ZOTEX-GP","ZOTO-HC","ZOTO-HC DROPS","ZOVIA 135","ZOVIA 135E 28 DAY","ZOVIA 150","ZOVIA 150E 28 DAY","ZOVIRAX","ZOVIRAX COLD SORE","ZTLIDO","ZTUSS","ZUBSOLV","ZUMANDIMINE 28 DAY","ZUPLENZ","ZURAMPIC","ZUTRIPRO","ZYBAN","ZYBAN ADVANTAGE PACK","ZYBAN SR","ZYCLARA","ZYDELIG","ZYDONE","ZYDONE 10400","ZYDONE 5400","ZYDONE 5500","ZYDONE 7.5400","ZYFLO","ZYFREL","ZYKADIA","ZYLET","ZYLOPRIM","ZYMAR","ZYMASE","ZYMAXID","ZYMECOT","ZYMINE","ZYMINE D","ZYMINE DXR","ZYMINE HC","ZYMINE XR","ZYPITAMAG","ZYPRAM","ZYPREXA","ZYPREXA ZYDIS","ZYRPHEN","ZYRTEC","ZYRTEC ITCHY EYE","ZYRTEC-D","ZYTIGA","ZYTOPIC","ZYVOX","ZZZQUIL"]'));
        // Block#: !,qU~c~4t?(@^~3P:{QU
        com.fc.JavaScriptDistLib.Dictionary.setDictValue(LibVars.medicationlistlib.medDict, 'Z', LibVars.medicationlistlib.tempDict);
        // Block#: oY!UJH[*`TPW6B{0B5Pq
        LibVars.medicationlistlib.tempDict = (com.fc.JavaScriptDistLib.JSON.parseJSONData('["1 PLUS 1 F","10 BENZAGEL","12 HOUR COLD","12 HOUR NASAL TABLET","3M AVAGARD","4 FACE UP","4-WAY","4-WAY FAST ACTING","4-WAY FAST ACTING NASAL SPRAY","4-WAY MOISTURIZING","40 WINKS","5 BENZAGEL","5 FACE UP","60 SECOND TASTE","666 COLD PREPARATION","8-MOP"]'));
        // Block#: d)bV:lebO~UO/,}c-^90
        com.fc.JavaScriptDistLib.Dictionary.setDictValue(LibVars.medicationlistlib.medDict, '#', LibVars.medicationlistlib.tempDict);
      });
    }
    /**
     * Sets medicationList to only those medications containing the passed
     * string. If no matches are found, medicationList will be an empty list
     */
    this.searchMedication = searchMedication;

    function searchMedication(searchString) {
      return new Promise(function(resolve, reject) {
        // Block#: *e1?Rggm.w+5f3B|MGx{
        LibVars.medicationlistlib.medicationList = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.medicationlistlib.medDict, LibVars.medicationlistlib.letterSelected));
        // Block#: rQ)JyOO6}Fn0bS0du[d~
        LibVars.medicationlistlib.medicationSearch = [];
        // Block#: :sX!T7Fu=|VQkZFnKs?I
        var item_list = LibVars.medicationlistlib.medicationList;
        for(var item_index in item_list) {
          item = item_list[item_index];
          // Block#: tL`|}^ZpoO_RnJ/BkTF)
          if(com.fc.JavaScriptDistLib.TextLib.textContains(item, com.fc.JavaScriptDistLib.TextLib.textChangeCase(searchString, "UPPERCASE"))) {
            // Block#: m2_,VPx=+CwVP)X*DtEa
            com.fc.JavaScriptDistLib.ListLibrary.listAdd(LibVars.medicationlistlib.medicationSearch, item)
          }
        }
        // Block#: 6oCXtZAC*_~2!Wz$0tCa
        LibVars.medicationlistlib.medicationList = LibVars.medicationlistlib.medicationSearch;
      });
    }
    /**
     * Enables gestures on slider and sets Y min/max limits.
     */
    this.initSlider = initSlider;

    function initSlider() {
      return new Promise(function(resolve, reject) {
        // Block#: LhC#4edAOH;ID3ONZ]?G
        $('[obj-name= "SliderBackground"]').unbind('touchmove mousemove touchstart mousedown');
        $('[obj-name= "SliderBackground"]').bind('touchmove mousemove touchstart mousedown', on_Image_SliderBackground_TOUCHMOVE); // Block#: MHu|w!ss{uh[gwlK]bi:
        $('[obj-name= "SliderBackground"]').unbind('touchend mouseup');
        $('[obj-name= "SliderBackground"]').bind('touchend mouseup', on_Image_SliderBackground_TOUCHEND); // Block#: L!Cq~Qk*qZhTrKGl3C-w
        $('[obj-name= "Marker"]').unbind('touchmove mousemove touchstart mousedown');
        $('[obj-name= "Marker"]').bind('touchmove mousemove touchstart mousedown', on_Label_Marker_TOUCHMOVE); // Block#: $d*{2CK[%+=gBZ0DJ8My
        $('[obj-name= "Marker"]').unbind('touchend mouseup');
        $('[obj-name= "Marker"]').bind('touchend mouseup', on_Label_Marker_TOUCHEND); // Block#: ,[bNe_@jUEY-~,eBddPl
        LibVars.medicationlistlib.minYVal = com.fc.JavaScriptDistLib.Container.getProperty["y"]("Slider");
        // Block#: Wzg$DdjoT^_*:W7cLqz7
        LibVars.medicationlistlib.maxYVal = com.fc.JavaScriptDistLib.Container.getProperty["y"]("Slider") + com.fc.JavaScriptDistLib.Image.getProperty["height"]("SliderBackground");
      });
    }
    /**
     * Moves the marker to given Y coordinates and
     * updates the values of requires variables
     */
    this.moveSlider = moveSlider;

    function moveSlider(y) {
      return new Promise(function(resolve, reject) {
        // Block#: wn7JqgI})vJb*,K1=,m!
        if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(y, "GT", LibVars.medicationlistlib.minYVal) &&
          com.fc.JavaScriptDistLib.MathLibrary.mathCompare(y, "LT", LibVars.medicationlistlib.maxYVal)
        ) {
          // Block#: z0):+)]Iyk~F04@6e)w*
          if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(Math.round((y - com.fc.JavaScriptDistLib.Container.getProperty["y"]("Slider")) * (27 / com.fc.JavaScriptDistLib.Image.getProperty["height"]("SliderBackground"))), "GT", -1) &&
            com.fc.JavaScriptDistLib.MathLibrary.mathCompare(Math.round((y - com.fc.JavaScriptDistLib.Container.getProperty["y"]("Slider")) * (27 / com.fc.JavaScriptDistLib.Image.getProperty["height"]("SliderBackground"))), "LT", LibVars.medicationlistlib.alphabet.length)
          ) {
            // Block#: (3e?h8~dUSn,/A3zZfFW
            LibVars.medicationlistlib.letterSelected = com.fc.JavaScriptDistLib.TextLib.textChangeCase(LibVars.medicationlistlib.alphabet[Math.floor((y - com.fc.JavaScriptDistLib.Container.getProperty["y"]("Slider")) * (27 / com.fc.JavaScriptDistLib.Image.getProperty["height"]("SliderBackground")))], "UPPERCASE");
            // Block#: `rs[G97RGc(da9ACUYgD
            moveMarkerToLetter(LibVars.medicationlistlib.letterSelected).then(response => {;
            });
            // Block#: 4ZxF!NiJ[;Xf|3sHU|{#
            com.fc.JavaScriptDistLib.Label.setProperty["Text"]("LetterSelected", LibVars.medicationlistlib.letterSelected); // Block#: wC9qTfR{h;fwIy0}rgFU
            com.fc.JavaScriptDistLib.Textbox.setProperty["Text"]("MedicationEntered", LibVars.medicationlistlib.letterSelected); // Block#: _i*s4JQ@;G)v(d+o$6f_
            LibVars.medicationlistlib.medicationList = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.medicationlistlib.medDict, LibVars.medicationlistlib.letterSelected));
          }
        }
      });
    }
    /**
     * Describe this function...
     */
    this.moveMarkerToLetter = moveMarkerToLetter;

    function moveMarkerToLetter(letter) {
      return new Promise(function(resolve, reject) {
        // Block#: b#]?*m@iy3+X-:gFm01K
        LibVars.medicationlistlib.index = LibVars.medicationlistlib.alphabet.indexOf(com.fc.JavaScriptDistLib.TextLib.textChangeCase(letter, "LOWERCASE"));
        // Block#: ]n~xfg]Y:/PkoKBo:^V/
        if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(LibVars.medicationlistlib.index, "GT", -1)) {
          // Block#: Ekrhxrp3A[I`neI-nS)t
          com.fc.JavaScriptDistLib.Container.setProperty["y"]("MarkerContainer", (LibVars.medicationlistlib.index / (27 / com.fc.JavaScriptDistLib.Image.getProperty["height"]("SliderBackground"))));
        }
      });
    }
    /**
     * Returns an array containing all selected medicines.
     */
    this.getSelectedMeds = getSelectedMeds;

    function getSelectedMeds() {
      return LibVars.medicationlistlib.selectedMedicationList;
    }
    /**
     * Describe this function...
     */
    this.handleDoneButton = handleDoneButton;

    function handleDoneButton() {
      return new Promise(function(resolve, reject) {
        com.fc.JavaScriptDistLib.EventListeners.invoke("handleDoneButton", "2i7ud0chu5", []);
      });
    }
    /**
     * Describe this function...
     */
    this.handleCancelButton = handleCancelButton;

    function handleCancelButton() {
      return new Promise(function(resolve, reject) {
        com.fc.JavaScriptDistLib.EventListeners.invoke("handleCancelButton", "2i7ud0chu5", []);
      });
    }
    /**
     * Initialization of library. SelectedMedications must be a list of medications.
     */
    this.initializeScreen = initializeScreen;

    function initializeScreen(selectedMedications) {
      return new Promise(function(resolve, reject) {
        // Block#: +N`s6D/wnPds;gxBLfw$
        initVariables().then(response => {;
        });
        // Block#: nSm?XfEMVKB2?a^HB#$a
        initDictionary().then(response => {;
        });
        // Block#: W3bU(Tl1.nkx=;@|d|ue
        initSlider().then(response => {;
        });
        // Block#: weC:^`=[[3LNhIve$Ck@
        if(!(selectedMedications == null)) {
          // Block#: *=KIQCN{H#|R~COp(ruI
          LibVars.medicationlistlib.selectedMedicationList = selectedMedications;
          // Block#: ElAg;T-i^Usy+QsvWWAi
          if(LibVars.medicationlistlib.selectedMedicationList[0] == 'None') {
            // Block#: 7_SNB#``b{xWQ9y4F#-G
            LibVars.medicationlistlib.selectedMedicationList = [];
          }
        }
        // Block#: .mPh,4G:Jp~F$]{7I,uc
        setSetScreen().then(response => {;
        });
      });
    }
    // Block#: 5549!jjZKRu+))[O`d^I
    let on_screen_back_button_pressMedicationListScreen = function() {
      try {
        // Block#: -aKCLy]@%YOfl8bJ{Us=
        handleDoneButton().then(response => {;
        });
      } catch(e) {
        com.fc.JavaScriptDistLib.handleExceptionNative(e);
      }
    };
    com.fc.JavaScriptDistLib.Screen.screenDict['backMedicationListScreen'] = on_screen_back_button_pressMedicationListScreen;
    // Block#: O9lx|k?D)nL_aaV*~:/?
    function on_screen_showMedicationListScreen() {
      try {
        // Block#: PnfMjRyE*Vz^TUTlSXT0
        initializeScreen(null).then(response => {;
        });
      } catch(e) {
        com.fc.JavaScriptDistLib.handleExceptionNative(e);
      }
    };
    $('[obj-name="MedicationListScreen"]').on('show', on_screen_showMedicationListScreen);
    com.fc.JavaScriptDistLib.Screen.screenDict['showMedicationListScreen'] = on_screen_showMedicationListScreen;
    // Block#: (U}|4]3dHeh,^?RC-^Dr
    function on_Cancel_click(e) {
      try {
        // Block#: lamFD~ZHZ!Bhcc`I[7Et
        LibVars.medicationlistlib.cancelDialog = (com.fc.JavaScriptDistLib.Dialog.create(LibVars.medicationlistlib.cancelDialogTitle, LibVars.medicationlistlib.cancelDialogMsg));
        // Block#: vm-G*Mk.2bJ[E(D{Oea#
        com.fc.JavaScriptDistLib.Dialog.addBtn('Yes', LibVars.medicationlistlib.cancelDialog)
        // Block#: n*8s|DCQ)qTJ@8%Kk^FV
        com.fc.JavaScriptDistLib.Dialog.addCancelBtn('No', LibVars.medicationlistlib.cancelDialog)
        // Block#: ScH,lqDDc!,v:,,C=LX5
        com.fc.JavaScriptDistLib.Dialog.show(LibVars.medicationlistlib.cancelDialog, function(button_title) {
          // Block#: ^$`63_v+E5DXRyJ646e$
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.TextLib.convertToText(button_title), "EQUAL", 'Yes')) {
            // Block#: 4/I8HT!Wh|U_ewyMZjkj
            handleCancelButton().then(response => {;
            });
          }
        })
        e.stopPropagation();
      } catch(e) {
        com.fc.JavaScriptDistLib.handleExceptionNative(e);
      }
    };
    $('[obj-name="Cancel"]').on('click', on_Cancel_click);
    // Block#: 8nMSr5@Sd[pd#P=+9b1/
    function on_Done_click(e) {
      try {
        // Block#: Ti9YJ^J:DAFw#^z.8prl
        handleDoneButton().then(response => {;
        });
        e.stopPropagation();
      } catch(e) {
        com.fc.JavaScriptDistLib.handleExceptionNative(e);
      }
    };
    $('[obj-name="Done"]').on('click', on_Done_click);
    // Block#: tE+kFa|,|ouiL%lQ2I_N
    var elemSelector = '[obj-name="MedicationEntered"]';
    $(elemSelector).find(".textView").on('input', function(e) {
      var oldText = $(this).attr("previousValue");
      var newText = $(this).val();
      $(this).attr("previousValue", newText);
      // Block#: 5IYW1M|=X,OxFKC=s6Yz
      if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(newText.length, "EQ", 1)) {
        // Block#: 5{9Jtx*i%Ed5V#AF9zQ4
        if(com.fc.JavaScriptDistLib.MathLibrary.isNumber(newText)) {
          // Block#: $v.s#q]w##tv-NR]AN$O
          LibVars.medicationlistlib.letterSelected = '#';
          // Block#: |Y_PCD#;dicVF?gF31(v
          searchMedication(newText).then(response => {;
          });
        } else {
          // Block#: R(CgnB!l},g]upj/HqrD
          LibVars.medicationlistlib.letterSelected = com.fc.JavaScriptDistLib.TextLib.textChangeCase(newText, "UPPERCASE");
          // Block#: f~%^iP2qH{/%$xO*h60r
          LibVars.medicationlistlib.medicationList = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(LibVars.medicationlistlib.medDict, LibVars.medicationlistlib.letterSelected));
        }
        // Block#: T?g9FXFd{K?b_1Qy()h`
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("LetterSelected", LibVars.medicationlistlib.letterSelected); // Block#: ~y6+7Ew6Ur3OeQuWPtH~
        moveMarkerToLetter(LibVars.medicationlistlib.letterSelected).then(response => {;
        });
      } else if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(newText.length, "GT", 1)) {
        // Block#: :)8T|_kvPWjPlY`JP(Lr
        searchMedication(newText).then(response => {;
        });
      }
      // Block#: i,it)5k*8Cn947Bc6X6k
      com.fc.JavaScriptDistLib.ListView.saveTemplateCell('MedicationList');
      com.fc.JavaScriptDistLib.ListView.removeAllCells('MedicationList');
      on_listview_length_configured_MedicationList();
    });
    // Block#: m352V,QS.FCt]A;EAbUl
    function on_listview_length_configured_MedicationList() {
      try {
        com.fc.JavaScriptDistLib.ListView.configureCells('MedicationList', LibVars.medicationlistlib.medicationList.length);
        $('[obj-name="MedicationList"]').children().each(function(i) {
          if(i >= 0) {
            com.fc.JavaScriptDistLib.ListView.setContext($(this));
            com.fc.JavaScriptDistLib.ListView.executeConfigCallback('MedicationList', $(this), i);
            com.fc.JavaScriptDistLib.ListView.executeConfigHeightCallback('MedicationList', $(this), i);
            com.fc.JavaScriptDistLib.ListView.resetContext($(this));
          }
        });
      } catch(e) {
        com.fc.JavaScriptDistLib.handleExceptionNative(e);
      }
    };
    // Block#: ZzwY?B/UXOnNEpj@p)qt
    function on_listview_cell_configured_MedicationCell(MedicationCell, number) {
      try {
        // Block#: Ym]Iz5sgX9ku%C5mb8UV
        if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(LibVars.medicationlistlib.medicationList.length, "GT", 0)) {
          // Block#: `eO|`QKxA%9E-pYVG9QA
          com.fc.JavaScriptDistLib.Label.setProperty["Text"]("MedicationName", (LibVars.medicationlistlib.medicationList[number])); // Block#: rfKw@#]Wvzk[^,Px.DLb
          if(com.fc.JavaScriptDistLib.ListLibrary.listContains(LibVars.medicationlistlib.selectedMedicationList, LibVars.medicationlistlib.medicationList[number])) {
            // Block#: ?H)LrO_%eaiCu*rb7M!C
            com.fc.JavaScriptDistLib.Image.setProperty["Image"]("Checkbox", (com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("./img/click.snapp.medicationlistlib/checked.png")));
          } else {
            // Block#: xdU$u`)nAwe+ThT]/~WL
            com.fc.JavaScriptDistLib.Image.setProperty["Image"]("Checkbox", (com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("./img/click.snapp.medicationlistlib/empty.png")));
          }
        }
      } catch(e) {
        com.fc.JavaScriptDistLib.handleExceptionNative(e);
      }
    };
    com.fc.JavaScriptDistLib.ListView.setConfigCallback('MedicationCell', on_listview_cell_configured_MedicationCell);
    // Block#: aB8k+o8-U[k-f6wmDsOX
    function on_listview_cell_clicked_MedicationCell(MedicationCell, number) {
      try {
        // Block#: 2j1=t)I=l0$bHe,x(tjU
        if(com.fc.JavaScriptDistLib.ListLibrary.listContains(LibVars.medicationlistlib.selectedMedicationList, LibVars.medicationlistlib.medicationList[number])) {
          // Block#: %.a8nMMlEJn!mU)5RLkY
          com.fc.JavaScriptDistLib.Image.setProperty["Image"]("Checkbox", (com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("./img/click.snapp.medicationlistlib/empty.png"))); // Block#: gPyEu;9!Ro3gG1*P?SN_
          LibVars.medicationlistlib.selectedMedicationList.splice(LibVars.medicationlistlib.selectedMedicationList.indexOf(LibVars.medicationlistlib.medicationList[number]), 1);
        } else {
          // Block#: dwp$`Y8qKZ9o{=*oT__[
          com.fc.JavaScriptDistLib.Image.setProperty["Image"]("Checkbox", (com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("./img/click.snapp.medicationlistlib/checked.png"))); // Block#: hO9:!NJKw*a0Du%@4m.Z
          com.fc.JavaScriptDistLib.ListLibrary.listAdd(LibVars.medicationlistlib.selectedMedicationList, LibVars.medicationlistlib.medicationList[number])
        }
        // Block#: G*(}+|,m4+rXgsdlHey|
        com.fc.JavaScriptDistLib.ListView.saveTemplateCell('MedicationList');
        com.fc.JavaScriptDistLib.ListView.removeAllCells('MedicationList');
        on_listview_length_configured_MedicationList();
      } catch(e) {
        com.fc.JavaScriptDistLib.handleExceptionNative(e);
      }
    }
    com.fc.JavaScriptDistLib.ListView.setClickCallback('MedicationCell', on_listview_cell_clicked_MedicationCell);
    // Block#: (.D3gb#!]R)_z.z*s=vL
    function on_Label_Marker_TOUCHMOVE(e) {
      if($('[obj-name= "Marker"]:visible') && $('[obj-name= "Marker"]:visible')[0]) {
        var currentElement = $('[obj-name= "Marker"]');
        var currentScreen = $('.fc.Screen:visible');
        currentElement.bind('touchstart mousedown', function(event) {
          currentScreen.bind('touchmove mousemove', function(touchmove) {
            var ose = currentScreen.offset();
            var mousemove = touchmove.type === 'mousedown' || touchmove.type === 'touchstart',
              x = Math.round(mousemove ? touchmove.targetTouches[0].clientX : touchmove.clientX - ose.left),
              y = mousemove ? touchmove.targetTouches[0].clientY : touchmove.clientY - ose.top;
            // Block#: x1hDun?1]z0Y%ElOHMz3
            moveSlider(y).then(response => {;
            });;
            touchmove.stopPropagation();
          });
          event.stopPropagation();
        });
        currentElement.bind('mouseup touchend', function(release) {
          currentScreen.off('mousemove touchmove');
          currentElement.off('mousedown touchstart');
          release.stopPropagation();
        });
      }
    };
    //Call
    on_Label_Marker_TOUCHMOVE();
    // Block#: p{+Nk+5lJ$c!kAf}.K,o
    function on_Image_SliderBackground_TOUCHMOVE(e) {
      if($('[obj-name= "SliderBackground"]:visible') && $('[obj-name= "SliderBackground"]:visible')[0]) {
        var currentElement = $('[obj-name= "SliderBackground"]');
        var currentScreen = $('.fc.Screen:visible');
        currentElement.bind('touchstart mousedown', function(event) {
          currentScreen.bind('touchmove mousemove', function(touchmove) {
            var ose = currentScreen.offset();
            var mousemove = touchmove.type === 'mousedown' || touchmove.type === 'touchstart',
              x = Math.round(mousemove ? touchmove.targetTouches[0].clientX : touchmove.clientX - ose.left),
              y = mousemove ? touchmove.targetTouches[0].clientY : touchmove.clientY - ose.top;
            // Block#: 4X!e[+;Gp*`+%i-v0)$a
            moveSlider(y).then(response => {;
            });;
            touchmove.stopPropagation();
          });
          event.stopPropagation();
        });
        currentElement.bind('mouseup touchend', function(release) {
          currentScreen.off('mousemove touchmove');
          currentElement.off('mousedown touchstart');
          release.stopPropagation();
        });
      }
    };
    //Call
    on_Image_SliderBackground_TOUCHMOVE();
    // Block#: [qbMNxx|#]8Ofkj*Xw7K
    function on_Label_Marker_TOUCHEND(e) {
      try {
        // Block#: LxS2}x`0@d?33[YNps7k
        com.fc.JavaScriptDistLib.ListView.saveTemplateCell('MedicationList');
        com.fc.JavaScriptDistLib.ListView.removeAllCells('MedicationList');
        on_listview_length_configured_MedicationList();
      } catch(e) {
        com.fc.JavaScriptDistLib.handleExceptionNative(e);
      };
    };
    if($('[obj-name= "Marker"]:visible') && $('[obj-name= "Marker"]:visible')[0]) {
      $('[obj-name= "Marker"]').on('touchend mouseup', on_Label_Marker_TOUCHEND);
    }
    // Block#: LVgEWVpp9;7cc:ZjkP2.
    function on_Image_SliderBackground_TOUCHEND(e) {
      try {
        // Block#: 6IS(f)L=k~{K;/dYgL[]
        com.fc.JavaScriptDistLib.ListView.saveTemplateCell('MedicationList');
        com.fc.JavaScriptDistLib.ListView.removeAllCells('MedicationList');
        on_listview_length_configured_MedicationList();
      } catch(e) {
        com.fc.JavaScriptDistLib.handleExceptionNative(e);
      };
    };
    if($('[obj-name= "SliderBackground"]:visible') && $('[obj-name= "SliderBackground"]:visible')[0]) {
      $('[obj-name= "SliderBackground"]').on('touchend mouseup', on_Image_SliderBackground_TOUCHEND);
    }
  };
  var medicationlistlib = new MedicationListLib();
  // PROJECT CODE
  var _that = this;
  _that.nextProcessAfterCompletion = null;
  _that.isLoggingIn = null;
  _that.currentTemplate = null;
  _that.requirePinAt = null;
  _that.applicationInBG = null;
  _that.isoString = null;
  _that.isEmailValid = null;
  _that.localFormData = null;
  _that.pErrorData = null;
  _that.localVar1 = null;
  _that.localFormData2 = null;
  _that.currentProperty = null;
  _that.cleanedVariables = null;
  _that.checkBoxValue = null;
  _that.currentScreen = null;
  _that.dialog = null;
  _that.tempEmail = null;
  _that.selectionMade = null;
  _that.ActiveFlows = null;
  _that.LVC20Height = null;
  _that.numberSelected = null;
  _that.symbols = null;
  _that.nextClicked = null;
  _that.medicationList = null;
  _that.selectedMedsCsv = null;
  _that.optionChosen = null;
  _that.symptomsList = null;
  _that.DOB = null;
  _that.ratio = null;
  _that.editingMedList = null;
  _that.flowImages = null;
  _that.buttonClicked = null;
  _that.localField = null;
  _that.localFormFields = null;
  _that.localFormFields2 = null;
  _that.currentTask = null;
  _that.S12FirstDisplay = null;
  _that.problemDialog = null;
  _that.returnError = null;
  _that.learnList = null;
  _that.overlayAction = null;
  _that.activityList = null;
  _that.checkBoxList = null;
  _that.letterNumber = null;
  _that.selectedMeds = null;
  _that.temp = null;
  _that.today = null;
  _that.ListOptions = null;
  _that.isLoggedIn = null;
  _that.goToActivities = null;
  _that.userID = null;
  _that.S2FirstDisplay = null;
  _that.S3FirstDisplay = null;
  _that.S8FirstDisplay = null;
  _that.S9FirstDisplay = null;
  _that.S11FirstDisplay = null;
  _that.genericDialogTitle = null;
  _that.genericDialogBody = null;
  _that.S14FirstDisplay = null;
  _that.S15FirstDisplay = null;
  _that.validationType = null;
  _that.itemValue = null;
  _that.test = null;
  _that.userPinString = null;
  _that.tempMedList = null;
  _that.graphGroup = null;
  _that.age = null;
  _that.totalNumberOfSubjects = null;
  _that.arcAngle = null;
  _that.dashboardFirstDisplay = null;
  _that.LVcells = null;
  _that.footStepTask = null;
  _that.localVarSteps = null;
  _that.eQualAnswers = null;
  _that.S4FirstDisplay = null;
  _that.S28FirstDisplay = null;
  _that.formDate = null;
  _that.checkBoxElement = null;
  _that.S25FirstDisplay = null;
  _that.groupData = null;
  _that.S10FirstDisplay = null;
  _that.S18FirstDisplay = null;
  _that.S21FirstDisplay = null;
  _that.applicationShouldDisplayAfterBG = null;
  _that.localOptions = null;
  _that.localIndex = null;
  _that.inputType = null;
  _that.graphType = null;
  _that.Xvalues = null;
  _that.pie1 = null;
  _that.startAngle = null;
  _that.keepListChanges = null;
  _that.lastOptionValue = null;
  _that.minInput = null;
  _that.JSON2 = null;
  _that.outcomeGroups = null;
  _that.healthHistoryGroups = null;
  _that.colorLists = null;
  _that.pie2 = null;
  _that.minInput1 = null;
  _that.minInput2 = null;
  _that.outcomeLabels = null;
  _that.healthHistoryLabels = null;
  _that.maxInput1 = null;
  _that.maxInput2 = null;
  _that.Yvalues = null;
  _that.pieChartStyle = null;
  _that.pieChartDivs = null;
  _that.error = null;
  _that.S8AuthorizeList = null;
  _that.ageGroups = null;
  _that.XAxisLabels = null;
  _that.weeklyGroups = null;
  _that.pie3 = null;
  _that.weeklyLabels = null;
  _that.maxInput = null;
  _that.pie4 = null;
  /**
   * Describe this function...
   */
  function S25HideObjects() {
    return new Promise(function(resolve, reject) {
      // Block#: oXPHFddHs*aj1atTWmU`
      $('[obj-name="B25Back"]').hide(); // Block#: 5z/DT,1Wan_^=W+3eig6
      $('[obj-name="B25Cancel"]').hide(); // Block#: T0aRvL?5;iIT8qEEkp[J
      $('[obj-name="B25Next"]').hide(); // Block#: o?q%,*S|;3][b32k!m{}
      $('[obj-name="B25Skip"]').hide(); // Block#: $d[t{v[arp6K^4n*ONdS
      $('[obj-name="L25Title"]').hide();
    });
  }
  /**
   * Describe this function...
   */
  function S3HideObjects() {
    return new Promise(function(resolve, reject) {
      // Block#: i50](EVv*++K[dU!`!1Q
      $('[obj-name="B3Back"]').hide(); // Block#: /)N4o]v^yp$l`JSTFA2b
      $('[obj-name="B3Cancel"]').hide(); // Block#: 0}?[6Of18JZK$KUh)4j+
      $('[obj-name="B3Next"]').hide(); // Block#: Y:a8l.t?|8*%SUmgrCvQ
      $('[obj-name="I3Icon"]').hide(); // Block#: yoh1D@w.F|ts/;JH,vBw
      $('[obj-name="L3Title"]').hide(); // Block#: Dxz{UI[aWkvT9;ZeB=la
      $('[obj-name="L3TextTitle"]').hide(); // Block#: ]WOlt_QSH{1Rhsh4dGX/
      $('[obj-name="L3TextBody"]').hide(); // Block#: L`w1^!h;cTM1V9Y=8ryI
      $('[obj-name="L3LearnMore"]').hide(); // Block#: w4Do~@~yz9s{iR$[dLD}
      $('[obj-name="L3Dialog"]').hide();
    });
  }
  /**
   * Describe this function...
   */
  function S20HideObjects() {
    return new Promise(function(resolve, reject) {
      // Block#: (:at46A~V~29+)O8kwR7
      $('[obj-name="I20TopLine"]').hide(); // Block#: N$u`]F}Y2i(iuqOCHyh_
      $('[obj-name="B20Back"]').hide(); // Block#: sncQ.[E*s9K0ozC`,o@L
      $('[obj-name="B20Cancel"]').hide(); // Block#: ~1}*8lDXCP(I6$Ciy?:J
      $('[obj-name="B20Next"]').hide(); // Block#: tX)GP~IAbahr21{;Sbfn
      $('[obj-name="B20Skip"]').hide(); // Block#: (?7.dD/-p0xeitOYFf{}
      $('[obj-name="L20Title"]').hide(); // Block#: 0!!I^M(nGH|Tr$={yLuu
      $('[obj-name="L20Question"]').hide(); // Block#: 4J8$Pl:^pK7*C@y;LM$Y
      $('[obj-name="T20Text"]').hide(); // Block#: J0=iq%r(gb;8QnH%`xw%
      $('[obj-name="B20Date"]').hide(); // Block#: piB^`J`|[6zl3*SDgI|$
      $('[obj-name="LV20Answers"]').hide(); // Block#: EYqq`k2d{9l:8n_[aeg-
      $('[obj-name="L20Error"]').hide(); // Block#: Z_B0:+6He.4[M16Irjq,
      $('[obj-name="I20TopScrollArrows"]').hide(); // Block#: %|42ext=CUCE6OD-KAK!
      $('[obj-name="I20BottomScrollArrows"]').hide();
    });
  }
  /**
   * Describe this function...
   */
  function S21HideObjects() {
    return new Promise(function(resolve, reject) {
      // Block#: 94:]8ljmJS((6kl-#rNP
      $('[obj-name="L21Error"]').hide(); // Block#: u2ApF,e1pQf1zT:V2]6Z
      $('[obj-name="L21Title"]').hide(); // Block#: v%:SUN4BQ=p[nw;Don5J
      $('[obj-name="B21Back"]').hide(); // Block#: C.Z:.9hVWtMjB4U4o$rn
      $('[obj-name="B21Cancel"]').hide(); // Block#: ba33`=*]n1|-687(wM4l
      $('[obj-name="L21TextTitle"]').hide(); // Block#: 9h9Dtn~ShP.y*TdcJjTX
      $('[obj-name="L21TextBody"]').hide(); // Block#: ~NAs~iDvx`b/_w8[x#v/
      $('[obj-name="L21Error"]').hide(); // Block#: 3|sh{oK8HKK3|x9nIMB@
      $('[obj-name="B21ForgotPin"]').hide();
    });
  }
  /**
   * Describe this function...
   */
  function S23HideObjects() {
    return new Promise(function(resolve, reject) {
      // Block#: @vHHBosWMdlL!x~ZzNr-
      $('[obj-name="B23Back"]').hide(); // Block#: bI:^}4!ecYYU-5CffF)K
      $('[obj-name="B23Cancel"]').hide(); // Block#: C9av)w]z`Cku,c=(Umse
      $('[obj-name="B23Skip"]').hide(); // Block#: 5Q|#)tsV6=!!x_xA(u`}
      $('[obj-name="B23Next"]').hide(); // Block#: !-ToNztoJF)QRX.#3{%=
      $('[obj-name="L23Units"]').hide(); // Block#: e,::f[RWrQ84jG{oh/cT
      $('[obj-name="L23Title"]').hide(); // Block#: g6NE!J=bgv$8OWFf7dTG
      $('[obj-name="L23Error"]').hide(); // Block#: /=$Dz8I2cEMWJS54G^,i
      $('[obj-name="L23Question"]').hide(); // Block#: 5WSB8*e^CZLc9aQ4TAx$
      $('[obj-name="T23Text"]').hide();
    });
  }
  /**
   * Describe this function...
   */
  function S25UpdateScreen() {
    return new Promise(function(resolve, reject) {
      // Block#: XNZ.o/;j|QMQgV;Bx)qX
      S25HideObjects().then(response => {;
      });
      // Block#: WX#eL{;kBAniCxy6zq96
      _that.currentProperty = getOutcomeName('B25BNone');
      // Block#: H7l93EXwC2At(68h:CfA
      if(_that.currentProperty != null) {
        // Block#: -](WQ2+EVol];U|JD?lO
        $('[obj-name="B25None"]').show(); // Block#: .8SQE#D0g!Q$QmgxE-j0
        com.fc.JavaScriptDistLib.Button.setProperty["Text"]("B25None", _that.currentProperty);
      }
      // Block#: gsx|%?X%p3}p+IEfZo4k
      _that.currentProperty = getOutcomeName('B25Back');
      // Block#: O7Q|h5pXVt/I6YebxT|:
      if(_that.currentProperty != null) {
        // Block#: E7rK,ByS0:$A^//+.i4b
        $('[obj-name="B25Back"]').show(); // Block#: v5(^Ba*3-;OQmi)C%*Zs
        com.fc.JavaScriptDistLib.Button.setProperty["Text"]("B25Back", _that.currentProperty);
      }
      // Block#: nVUGbR0-8gtfka{KJPEJ
      _that.currentProperty = getOutcomeName('B25Cancel');
      // Block#: _eUa8Fze^2wt19y=n25_
      if(_that.currentProperty != null) {
        // Block#: vS^-23xc?wBd%G`pZm9V
        $('[obj-name="B25Cancel"]').show(); // Block#: EaJm.4cyrgts6/,cpCx=
        com.fc.JavaScriptDistLib.Button.setProperty["Text"]("B25Cancel", _that.currentProperty);
      }
      // Block#: (GSi(Al@r:vm}ZUg/6Cm
      _that.currentProperty = getOutcomeName('B25Next');
      // Block#: %Qu@pG:`=%-~4cNC:wA?
      if(_that.currentProperty != null) {
        // Block#: 3$-ImdrQYHdbn{`#s}xP
        $('[obj-name="B25Next"]').show(); // Block#: i;@eg##m:^Tye#(~E5V5
        com.fc.JavaScriptDistLib.Button.setProperty["Text"]("B25Next", _that.currentProperty);
      }
      // Block#: rJQ*#tfzw6RdLi5XS[D`
      _that.currentProperty = getOutcomeName('B25Skip');
      // Block#: m,xPuZal+UpY:R]6sPg*
      if(_that.currentProperty != null) {
        // Block#: IFv8|!37sE{ZW_zZn8qH
        $('[obj-name="B25Skip"]').show(); // Block#: y}d_5q8}$}p+jL@WY:^j
        com.fc.JavaScriptDistLib.Button.setProperty["Text"]("B25Skip", _that.currentProperty);
      }
      // Block#: LNUxdmb8FICO3]DPdU1z
      _that.currentProperty = getFormProperty('title');
      // Block#: 3vM|!KQ;a(=uUsW#yLL.
      if(_that.currentProperty != null) {
        // Block#: M2~szhi+C8Nu;1)_jz!0
        $('[obj-name="L25Title"]').show(); // Block#: )g~^ohB^rp$UC)K]WuD`
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("L25Title", _that.currentProperty);
      }
      // Block#: 6.wmGUP+|KxzOtcDqg)o
      if(_that.editingMedList) {
        // Block#: o;%p/P5=el+#_eBH`0Qr
        if(_that.keepListChanges) {
          // Block#: 8f+Vt~AGa!/JM/uwWW(D
          console.log('Getting Selected Meds');
          if(_that.debugService && _that.debugService.active) {
            _that.debugService.traces.push('Getting Selected Meds');
            _that.debugService.printLog();
          }
          // Describe this function...
          // Block#: ;`;d6iQ`d9FeXmcz(CsU
          _that.selectedMeds = medicationlistlib.getSelectedMeds();
          // Block#: M,%*GfA]|,^V/-LGkLYO
          _that.editingMedList = false;
        } else {
          // Block#: .|+]eaS`f|*0d;`Hv$9?
          console.log('Getting TempMeds');
          if(_that.debugService && _that.debugService.active) {
            _that.debugService.traces.push('Getting TempMeds');
            _that.debugService.printLog();
          }
          // Block#: IoMv_~*dhW7MDjDR_nyL
          _that.selectedMeds = _that.tempMedList;
          // Block#: 8^?l9B0DJ2V_i%Zoq;e}
          _that.editingMedList = false;
        }
      } else {
        // Block#: N{UE3#eA%xtbw4oDyu;#
        if(!_that.selectedMeds.length && _that.S25FirstDisplay) {
          // Block#: ipZpUTx`5VPxjkYkyGA)
          _that.currentProperty = getProcessVariable('previousMedications');
          // Block#: =K:*+zI(D?3gSk#]Z_l{
          if(_that.currentProperty != null) {
            // Block#: ap/K:jk]g~s_85Wxbyk`
            _that.selectedMeds = com.fc.JavaScriptDistLib.TextLib.textSplitWith(_that.currentProperty, ',');
          }
        }
      }
      // Block#: m:k,#U1+ceW.R![qDz9h
      if(com.fc.JavaScriptDistLib.ListLibrary.listCheck(_that.selectedMeds)) {
        // Block#: e^7j,%VZr]!F8mYzI||}
        if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(_that.selectedMeds.length, "GT", 0)) {
          // Block#: #Bp?p=n[,`FItxgSn.qE
          if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(_that.selectedMeds.length, "EQ", 1) &&
            com.fc.JavaScriptDistLib.TextLib.textComparison(String(_that.selectedMeds[0]), "EQUAL", 'None')
          ) {
            // Block#: CX5dz]_miN;Z=LGv2`wQ
            com.fc.JavaScriptDistLib.Button.setProperty["Text"]("B25Add", 'Add Medication From List');
          } else {
            // Block#: 50a#$2jA_5Nv*%q]ChoJ
            com.fc.JavaScriptDistLib.Button.setProperty["Text"]("B25Add", 'Add Another Medication From List');
          }
          // Block#: mAuVF!?GVWv8xw9z6qpp
          _that.selectionMade = true;
        } else {
          // Block#: *(@ZkI_!kZCKTgKg;E#l
          com.fc.JavaScriptDistLib.Button.setProperty["Text"]("B25Add", 'Add Medication From List'); // Block#: v{DGYe:iIxv[!JD51d#B
          _that.selectionMade = false;
        }
      }
      // Block#: %[M:(v0jy1^C]v;]3UN8
      com.fc.JavaScriptDistLib.ListView.saveTemplateCell('LV25Medications');
      com.fc.JavaScriptDistLib.ListView.removeAllCells('LV25Medications');
      on_listview_length_configured_LV25Medications();
      // Block#: }jhZ3^v2-|EeV,dEvWtc
      B25NoneUpdate().then(response => {;
      });
      // Block#: b8:.6iSwFKkQ+3q#.e6O
      B25NextUpdate().then(response => {;
      });
    });
  }
  /**
   * Describe this function...
   */
  function completeTask() {
    return new Promise(function(resolve, reject) {
      // Block#: Otr:]%7eSUMAGa;=FA_3
      if(_that.currentTask != null) {
        // Block#: ?$z-PX;Et)nNY;ie?W,j
        console.log(_that.currentTask);
        if(_that.debugService && _that.debugService.active) {
          _that.debugService.traces.push(_that.currentTask);
          _that.debugService.printLog();
        }
        // Block#: 4v2ExD7,,SOY-AUB((xy
        cleanUnusedVariables().then(response => {;
        });
        // Block#: wg*mh25j|b^2NzQtR#^,
        com.fc.JavaScriptDistLib.SnapClinical.completeTaskAndGetNext(_that.currentTask,
          function(process_data) {
            // Block#: VTeSFMbZ-ZOWQ$Gm}lgG
            console.log('Complete Task and next success');
            if(_that.debugService && _that.debugService.active) {
              _that.debugService.traces.push('Complete Task and next success');
              _that.debugService.printLog();
            }
            // Block#: j$B=#1Bi8;[k,seuO~9^
            resolve({
              name: "complete",
              data: 'Complete Task and next success'
            });
          },
          function(error_data) {
            // Block#: QJfpE]cz^dOz5tejZ/e*
            console.log('Complete Task and next Failure');
            if(_that.debugService && _that.debugService.active) {
              _that.debugService.traces.push('Complete Task and next Failure');
              _that.debugService.printLog();
            }
            // Block#: _@NH=1+A[w_b8g[z~5^I
            console.log(error_data);
            if(_that.debugService && _that.debugService.active) {
              _that.debugService.traces.push(error_data);
              _that.debugService.printLog();
            }
            // Block#: #5yy-U4M@k7eE[x,^ZG7
            resolve({
              name: "complete",
              data: 'Complete Task and next Failure'
            });
          });
      }
    });
  }
  /**
   * Describe this function...
   */
  function S3UpdateScreen() {
    return new Promise(function(resolve, reject) {
      // Block#: 8~KRoi;AUG?5mgHS#@4J
      S3HideObjects().then(response => {;
      });
      // Block#: N,u(dv]FErQ{DPGF$n5Y
      _that.currentProperty = getOutcomeName('B3Back');
      // Block#: +aF[7Nocip1%z5D!?@C~
      if(_that.currentProperty != null) {
        // Block#: DUXv}LF_X04o3[%cMO7R
        $('[obj-name="B3Back"]').show();
      }
      // Block#: ]:uC/LkEk,@XlYBW2U1z
      _that.currentProperty = getOutcomeName('B3Cancel');
      // Block#: Ht)f)?4*-#0j[ap0~=Cz
      if(_that.currentProperty != null) {
        // Block#: $fUg;GO.(%-Io48},*P.
        $('[obj-name="B3Cancel"]').show(); // Block#: 2+o@ot[B5@M_35lg`CpH
        com.fc.JavaScriptDistLib.Button.setProperty["Text"]("B3Cancel", _that.currentProperty);
      }
      // Block#: 3{Q^2x0Eb:cdW.tMgg!c
      _that.currentProperty = getOutcomeName('B3LearnMore');
      // Block#: B%S?bs;e.dA2xhVoFhEd
      if(_that.currentProperty != null) {
        // Block#: h4+g-SyRk%.av=M#vkQ+
        $('[obj-name="L3LearnMore"]').show();
      }
      // Block#: IF:]OqkiU+rL`}vXH^y|
      _that.currentProperty = getOutcomeName('B3Next');
      // Block#: ?]2.FhV8lh`Qy~D:w]Qd
      console.log(_that.currentProperty);
      if(_that.debugService && _that.debugService.active) {
        _that.debugService.traces.push(_that.currentProperty);
        _that.debugService.printLog();
      }
      // Block#: zjKsJNge3amBuO^.`2nQ
      if(_that.currentProperty != null) {
        // Block#: YKTW{hRgM.Xy#mVV|h}C
        $('[obj-name="B3Next"]').show(); // Block#: M]J#UrO=gRl`4Ae}i,0u
        com.fc.JavaScriptDistLib.Button.setProperty["Text"]("B3Next", _that.currentProperty);
      }
      // Block#: HPpP9uL[Z+,r,?Ok-TT.
      _that.currentProperty = getFormProperty('icon');
      // Block#: K-Iyy~o8},^[FcHU7xj3
      if(_that.currentProperty != null) {
        // Block#: AxVPY7ztW,O23;b8#cI=
        $('[obj-name="I3Icon"]').show(); // Block#: o.a,mHcCMPl;^ji+2ssA
        if(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(_that.flowImages, _that.currentProperty)) {
          // Block#: x#X,xhl`BSxj*aF:`020
          com.fc.JavaScriptDistLib.Image.setProperty["Image"]("I3Icon", (com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.flowImages, _that.currentProperty)));
        }
      }
      // Block#: hfLUsNu-2$}]QsctsL$b
      _that.currentProperty = getFormProperty('textTitle');
      // Block#: #ISCJ]O72.2p17+!Jp_~
      if(_that.currentProperty != null) {
        // Block#: 3jmizLB[d|6-D[T?DZ!n
        $('[obj-name="L3TextTitle"]').show(); // Block#: Q/H14rxp,w_pInqg9g+`
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("L3TextTitle", _that.currentProperty);
      }
      // Block#: ]Llvl`2-8Z?4Iri5MGZR
      _that.currentProperty = getFormProperty('textBody');
      // Block#: 9$O6js7tLrGX08hBQMWX
      if(_that.currentProperty != null) {
        // Block#: %xZsFvV}oUStAK0YIfVj
        $('[obj-name="L3TextBody"]').show(); // Block#: 6([N@*EW[J1@%+KdU{0t
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("L3TextBody", _that.currentProperty);
      }
      // Block#: S@B1bKyUl6FZmxsU?Rzl
      _that.currentProperty = getFormProperty('title');
      // Block#: IQ*i=jh6{?(ca/8i-d]]
      if(_that.currentProperty != null) {
        // Block#: sQDs]k+IRgdl*]mkJ$9R
        $('[obj-name="L3Title"]').show(); // Block#: V?R*[((W]`_9{=X!aZgE
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("L3Title", _that.currentProperty);
      }
      // Block#: ihb$r{Dvw3RhadLc(X1M
      _that.currentProperty = getFormProperty('dialogButton');
      // Block#: mfED{RL+_A$_EeO;djCD
      if(_that.currentProperty != null) {
        // Block#: J1jrNNJdC|;paljCYvaA
        $('[obj-name="L3Dialog"]').show(); // Block#: )F@ys;Pfw7+3LFwlC]v+
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("L3Dialog", _that.currentProperty); // Block#: #VBrlU:qNwdka_0J:-/q
        _that.problemDialog = (com.fc.JavaScriptDistLib.Dialog.create(getFormProperty('dialogTitle'), getFormProperty('dialogBody')));
        // Block#: B)ea;-6;#,*;x6c00`SQ
        com.fc.JavaScriptDistLib.Dialog.addBtn('Resend', _that.problemDialog)
        // Block#: ^yVx?;};_)H_O.#dmttM
        com.fc.JavaScriptDistLib.Dialog.addBtn('Change Email', _that.problemDialog)
      }
    });
  }
  /**
   * Describe this function...
   */
  function startNewProcessInstance(pProcessDefKey, forceNewInstance) {
    let processData = null;
    return new Promise(function(resolve, reject) {
      // Block#: hDIcV.5QN@w-fa,sWAu3
      processData = com.fc.JavaScriptDistLib.Dictionary.createDictionary(['forceStartNewInstance'], [forceNewInstance]);
      // Block#: `#)f2I-F$e`89JFt=pxh
      if(com.fc.JavaScriptDistLib.TextLib.textComparison(pProcessDefKey, "EQUAL", 'PowerMomHomeProcessV1')) {
        // Block#: l1@G(#e]0hqEYmEWpCXK
        com.fc.JavaScriptDistLib.Dictionary.setDictValue(processData, 'processVariables', [com.fc.JavaScriptDistLib.Dictionary.createDictionary(['name', 'value'], ['timezone', getTimezone()])]);
      } else if(com.fc.JavaScriptDistLib.TextLib.textComparison(pProcessDefKey, "EQUAL", 'PowerMomAccountSetUp')) {
        // Block#: 20fxA4`=ks|gpN9X3a`T
        com.fc.JavaScriptDistLib.Dictionary.setDictValue(processData, 'processVariables', [com.fc.JavaScriptDistLib.Dictionary.createDictionary(['name', 'value'], ['timezone', getTimezone()]), com.fc.JavaScriptDistLib.Dictionary.createDictionary(['name', 'value'], ['platform', ('Web')])]);
      }
      // Block#: ydQ;/0gJAP9b40ZNkOUo
      com.fc.JavaScriptDistLib.SnapClinical.startProcess(Object.assign(Object.assign({
          "forceStartNewInstance": false
        }, processData), {
          "processDefinitionKey": pProcessDefKey
        }),
        function(process_data) {
          // Block#: *341Woe0w9;v-R)C.FCv
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(pProcessDefKey, "EQUAL", 'PowerMomHomeProcessV1')) {
            // Block#: 92`/5Fe783)$PgZ^+9PR
            if(!_that.isLoggedIn) {
              // Block#: or6C]E^;rY~p2HvKWL,(
              PushFirebaseToken().then(response => {;
              });
              // Block#: j:Ug-evM9#u)MFcowDj9
              com.fc.JavaScriptDistLib.Storage.add('email', _that.userID)
            }
            // Block#: bM!Ccur4=~;-Mtzp:jRK
            _that.isLoggedIn = true;
          }
          // Block#: 9l0DU1V7)P$utN21gWRj
          _that.currentTask = (com.fc.JavaScriptDistLib.JSON.parseJSONDataForPath(process_data, '$.tasks[0]'))[0];
          // Block#: .9M%Gky-F_oDDqxD84YH
          console.log('currentTask');
          if(_that.debugService && _that.debugService.active) {
            _that.debugService.traces.push('currentTask');
            _that.debugService.printLog();
          }
          // Block#: z3O^SfY+X=ji7kb7kI*P
          console.log(_that.currentTask);
          if(_that.debugService && _that.debugService.active) {
            _that.debugService.traces.push(_that.currentTask);
            _that.debugService.printLog();
          }
          // Block#: Ez(TJsiIlN1r%?Q3C6g]
          console.log(com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.currentTask, 'processVariables'));
          if(_that.debugService && _that.debugService.active) {
            _that.debugService.traces.push(com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.currentTask, 'processVariables'));
            _that.debugService.printLog();
          }
          // Block#: Me+w;h,w-Mi2J|_HHVsN
          determineNextPageToDisplay().then(response => {;
          });
        },
        function(error_data) {
          // Block#: _!`!-4|hw{U`MtklIwa6
          console.log(error_data);
          if(_that.debugService && _that.debugService.active) {
            _that.debugService.traces.push(error_data);
            _that.debugService.printLog();
          }
          // Block#: KG0!p3@Mi3(+EknIADe!
          _that.pErrorData = error_data;
          // Block#: %I{DSYcK#F(=;qt7movh
          _that.buttonClicked = false;
          // Block#: vNi:%HUluJNCK)KLd%QP
          hideLoaders().then(response => {;
          });
          // Block#: t@V{/pcczF^[;Q@nRArB
          resolve({
            name: "error",
            data: error_data
          });
        });
    });
  }
  /**
   * Describe this function...
   */
  function getRadioButtonOptions() {
    return new Promise(function(resolve, reject) {
      // Block#: HR*v3TI1YNJyvbevfeVb
      console.log('getRadioButtonOptions');
      if(_that.debugService && _that.debugService.active) {
        _that.debugService.traces.push('getRadioButtonOptions');
        _that.debugService.printLog();
      }
      // Block#: vQl=g}j|=XT*^H$dQTPd
      _that.localField = (com.fc.JavaScriptDistLib.JSON.parseJSONDataForPath(_that.currentTask, '$.formData.fields[?(@.fieldType=="OptionFormField")]'));
      // Block#: w-;8(o8(j~PvGItg86G;
      if(_that.localVar1 != null) {
        // Block#: aq2D2V1%Vs!5jGjs(Q*~
        _that.localField = _that.localField[0];
        // Block#: OTT,V/{jL]LMT=NO]lyk
        _that.localOptions = (com.fc.JavaScriptDistLib.JSON.parseJSONDataForPath(_that.currentTask, '$.formData.fields[?(@.fieldType=="OptionFormField")].options[*]'));
        // Block#: n*]d4auE5ZxJ#2G^bg`B
        var itemNo_end = _that.localOptions.length - 1;
        var itemNo_inc = 1;
        if(0 > itemNo_end) {
          itemNo_inc = -itemNo_inc;
        }
        for(itemNo = 0; itemNo_inc >= 0 ? itemNo <= itemNo_end : itemNo >= itemNo_end; itemNo += itemNo_inc) {
          // Block#: OBC(TpR!$~eU.u0xxjP^
          _that.localVar1 = _that.localOptions[itemNo];
          // Block#: d`-Z;$yevfmK~@3_P2m0
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.localField, 'value'), "EQUAL", com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.localVar1, 'name'))) {
            // Block#: {C}sCvdY5dOHS9AesRHt
            _that.checkBoxValue = 'TRUE';
          } else {
            // Block#: uhD/+@zN1[aqqqLHWMqv
            _that.checkBoxValue = 'FALSE';
          }
          // Block#: pg.S/1YA]*G!VCzcQPJY
          _that.checkBoxElement = com.fc.JavaScriptDistLib.Dictionary.createDictionary(['id', 'name', 'value'], [(com.fc.JavaScriptDistLib.TextLib.convertToText(itemNo)), (com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.localVar1, 'name')), _that.checkBoxValue]);
          // Block#: K:7j/z*!~S^mD%qVXV)Q
          com.fc.JavaScriptDistLib.ListLibrary.listAdd(_that.checkBoxList, _that.checkBoxElement)
        }
      }
    });
  }
  /**
   * Describe this function...
   */
  function s28CheckField(input) {
    return new Promise(function(resolve, reject) {
      // Block#: sORv|RO|t5ksp)uv%O~]
      _that.selectionMade = false;
      // Block#: /AbxMfkrv}Un*_Wx#*3a
      if(!!com.fc.JavaScriptDistLib.TextLib.textTrim(input)
        .length) {
        // Block#: ^H,I6v;gw:yytU5wlGnv
        _that.selectionMade = true;
      }
      // Block#: 0}y3Z2ptVz@0ylR3hJev
      b28NextUpdate().then(response => {;
      });
    });
  }
  /**
   * Describe this function...
   */
  function setRadioButtonOptionsValue() {
    return new Promise(function(resolve, reject) {
      // Block#: SH$Nf9^()VG)aRFby6@e
      _that.localFormData = (com.fc.JavaScriptDistLib.JSON.parseJSONDataForPath(_that.currentTask, '$.formData'))[0];
      // Block#: +LaX#)_+2J!rm1jk3kw@
      _that.localFormFields = (com.fc.JavaScriptDistLib.JSON.parseJSONDataForPath(_that.currentTask, '$.formData.fields[*]'));
      // Block#: t.VI{Wve8v]%?(qfr|0D
      var index_end = _that.localFormFields.length - 1;
      var index_inc = 1;
      if(0 > index_end) {
        index_inc = -index_inc;
      }
      for(index = 0; index_inc >= 0 ? index <= index_end : index >= index_end; index += index_inc) {
        // Block#: .,bWuqC:g84}bc^78}SC
        _that.localField = _that.localFormFields[index];
        // Block#: r%Y5K:9_,q0w37efcs#:
        if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.localField, 'fieldType'), "EQUAL", 'OptionFormField')) {
          // Block#: S`}0[,vKJ{`lSb6we)c/
          _that.localVar1 = _that.localFormFields[index];
          // Block#: 6DyposANUX2hZ5z,zxV$
          com.fc.JavaScriptDistLib.Dictionary.setDictValue(_that.localVar1, 'value', _that.lastOptionValue);
          // Block#: jBfVTuIZ{e`D8x+UXE3!
          com.fc.JavaScriptDistLib.Dictionary.setDictValue(_that.localVar1, 'type', 'string');
          // Block#: vi=v,8M|KP(P;S27F*ZB
          _that.localFormFields[index] = _that.localVar1;
        }
      }
      // Block#: f-c`={x|#`bow2OlONP]
      com.fc.JavaScriptDistLib.Dictionary.setDictValue(_that.localFormData, 'fields', _that.localFormFields);
      // Block#: +!Bk(DVH2utb.:F+l?+%
      com.fc.JavaScriptDistLib.Dictionary.setDictValue(_that.currentTask, 'formData', _that.localFormData);
    });
  }
  /**
   * Describe this function...
   */
  function S21UpdatePinProgress(pinLength) {
    return new Promise(function(resolve, reject) {
      // Block#: |=w|#{%*anwI;`|EtvcT
      if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(pinLength, "EQ", 0)) {
        // Block#: $Fm`3i$G@1`agrRj*VKE
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("L21PinProgress", '<style>      .pin-key-empty {      display: block;        border: 1px solid black;          width: 16px;      height: 16px;      border-radius: 100%;      text-align: center;     font-family: "trebuchet ms";       display: block;       float: left;      margin: 1px 10px 0 10px;   }   .pin-key-full {    display: block;      border: 1px solid black;       background: black;        width: 16px;      height: 16px;       border-radius: 100%;       text-align: center;        font-family: "trebuchet ms";      display: block;         float: left;       margin: 1px 10px 0 10px;       }      </style>       <div class="pin-container">        <div class="pin-key-empty"></div>      <div class="pin-key-empty"></div>         <div class="pin-key-empty"></div>     <div class="pin-key-empty"></div>   <div class="pin-key-empty"></div>       <div class="pin-key-empty"></div>    </div>');
      } else if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(pinLength, "EQ", 1)) {
        // Block#: #U[E2yT,XA9d`ZC[5`-F
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("L21PinProgress", '<style>      .pin-key-empty {      display: block;        border: 1px solid black;          width: 16px;      height: 16px;      border-radius: 100%;      text-align: center;     font-family: "trebuchet ms";       display: block;       float: left;      margin: 1px 10px 0 10px;   }   .pin-key-full {    display: block;      border: 1px solid black;       background: black;        width: 16px;      height: 16px;       border-radius: 100%;       text-align: center;        font-family: "trebuchet ms";      display: block;         float: left;       margin: 1px 10px 0 10px;       }      </style>       <div class="pin-container">        <div class="pin-key-full"></div>      <div class="pin-key-empty"></div>         <div class="pin-key-empty"></div>     <div class="pin-key-empty"></div>   <div class="pin-key-empty"></div>       <div class="pin-key-empty"></div>    </div>');
      } else if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(pinLength, "EQ", 2)) {
        // Block#: +EQVQ2]*Ov=T;@_y(xkQ
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("L21PinProgress", '<style>      .pin-key-empty {      display: block;        border: 1px solid black;          width: 16px;      height: 16px;      border-radius: 100%;      text-align: center;     font-family: "trebuchet ms";       display: block;       float: left;      margin: 1px 10px 0 10px;   }   .pin-key-full {    display: block;      border: 1px solid black;       background: black;        width: 16px;      height: 16px;       border-radius: 100%;       text-align: center;        font-family: "trebuchet ms";      display: block;         float: left;       margin: 1px 10px 0 10px;       }      </style>       <div class="pin-container">        <div class="pin-key-full"></div>      <div class="pin-key-full"></div>         <div class="pin-key-empty"></div>     <div class="pin-key-empty"></div>   <div class="pin-key-empty"></div>       <div class="pin-key-empty"></div>    </div>');
      } else if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(pinLength, "EQ", 3)) {
        // Block#: Q0b%-V?N84;R7%Wjs(Ln
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("L21PinProgress", '<style>      .pin-key-empty {      display: block;        border: 1px solid black;          width: 16px;      height: 16px;      border-radius: 100%;      text-align: center;     font-family: "trebuchet ms";       display: block;       float: left;      margin: 1px 10px 0 10px;   }   .pin-key-full {    display: block;      border: 1px solid black;       background: black;        width: 16px;      height: 16px;       border-radius: 100%;       text-align: center;        font-family: "trebuchet ms";      display: block;         float: left;       margin: 1px 10px 0 10px;       }      </style>       <div class="pin-container">        <div class="pin-key-full"></div>      <div class="pin-key-full"></div>         <div class="pin-key-full"></div>     <div class="pin-key-empty"></div>   <div class="pin-key-empty"></div>       <div class="pin-key-empty"></div>    </div>');
      } else if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(pinLength, "EQ", 4)) {
        // Block#: cY[/z6KWcRaYiS_ji*8p
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("L21PinProgress", '<style>      .pin-key-empty {      display: block;        border: 1px solid black;          width: 16px;      height: 16px;      border-radius: 100%;      text-align: center;     font-family: "trebuchet ms";       display: block;       float: left;      margin: 1px 10px 0 10px;   }   .pin-key-full {    display: block;      border: 1px solid black;       background: black;        width: 16px;      height: 16px;       border-radius: 100%;       text-align: center;        font-family: "trebuchet ms";      display: block;         float: left;       margin: 1px 10px 0 10px;       }      </style>       <div class="pin-container">        <div class="pin-key-full"></div>      <div class="pin-key-full"></div>         <div class="pin-key-full"></div>     <div class="pin-key-full"></div>   <div class="pin-key-empty"></div>       <div class="pin-key-empty"></div>    </div>');
      } else if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(pinLength, "EQ", 5)) {
        // Block#: ?CwwhjIkcpNqfSu@DGf~
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("L21PinProgress", '<style>      .pin-key-empty {      display: block;        border: 1px solid black;          width: 16px;      height: 16px;      border-radius: 100%;      text-align: center;     font-family: "trebuchet ms";       display: block;       float: left;      margin: 1px 10px 0 10px;   }   .pin-key-full {    display: block;      border: 1px solid black;       background: black;        width: 16px;      height: 16px;       border-radius: 100%;       text-align: center;        font-family: "trebuchet ms";      display: block;         float: left;       margin: 1px 10px 0 10px;       }      </style>       <div class="pin-container">        <div class="pin-key-full"></div>      <div class="pin-key-full"></div>         <div class="pin-key-full"></div>     <div class="pin-key-full"></div>   <div class="pin-key-full"></div>       <div class="pin-key-empty"></div>    </div>');
      } else if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(pinLength, "EQ", 6)) {
        // Block#: )Rx`fW+XYDC]553YPf.$
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("L21PinProgress", '<style>      .pin-key-empty {      display: block;        border: 1px solid black;          width: 16px;      height: 16px;      border-radius: 100%;      text-align: center;     font-family: "trebuchet ms";       display: block;       float: left;      margin: 1px 10px 0 10px;   }   .pin-key-full {    display: block;      border: 1px solid black;       background: black;        width: 16px;      height: 16px;       border-radius: 100%;       text-align: center;        font-family: "trebuchet ms";      display: block;         float: left;       margin: 1px 10px 0 10px;       }      </style>       <div class="pin-container">        <div class="pin-key-full"></div>      <div class="pin-key-full"></div>         <div class="pin-key-full"></div>     <div class="pin-key-full"></div>   <div class="pin-key-full"></div>       <div class="pin-key-full"></div>    </div>');
      }
    });
  }
  /**
   * Describe this function...
   */
  function saveTaskAndNext(pOutcome) {
    // Block#: /_qYP*Tk9n0uIr+~Y?1c
    _that.pErrorData = '';
    // Block#: ejRwnH5fSJb]D#0rV7k3
    if(!(_that.currentTask == null)) {
      // Block#: $7`sq{@f=y6Q0U~=B{~e
      console.log(_that.currentTask);
      if(_that.debugService && _that.debugService.active) {
        _that.debugService.traces.push(_that.currentTask);
        _that.debugService.printLog();
      }
      // Block#: T-/X=t:jiAuUPSA:lXx~
      com.fc.JavaScriptDistLib.SnapClinical.setOutcomeByName(_that.currentTask, pOutcome);
      // Block#: OPZ)uPPOjlmQVTYtwQuE
      cleanUnusedVariables().then(response => {;
      });
      // Block#: aIUgg~W6KoU7`t4AjrRL
      com.fc.JavaScriptDistLib.SnapClinical.completeTaskAndGetNext(_that.currentTask,
        function(process_data) {
          // Block#: +i6tiZp2gK(Zw9b]CC`O
          console.log('Save Task and next success');
          if(_that.debugService && _that.debugService.active) {
            _that.debugService.traces.push('Save Task and next success');
            _that.debugService.printLog();
          }
          // Block#: :O^!H-j(L^{.z/~U}_.1
          console.log(process_data);
          if(_that.debugService && _that.debugService.active) {
            _that.debugService.traces.push(process_data);
            _that.debugService.printLog();
          }
          // Block#: jD;H7oC`42Niyx*%oHsj
          if((com.fc.JavaScriptDistLib.JSON.parseJSONDataForPath(process_data, '$.tasks')) != null) {
            // Block#: 9z%Ya]j+gt;;h3/:[4t]
            if(!(com.fc.JavaScriptDistLib.JSON.parseJSONDataForPath(process_data, '$.tasks'))[0].length) {
              // Block#: |#$A%4hsU`=P3.4*0^YA
              com.fc.JavaScriptDistLib.Dictionary.setDictValue(_that.currentTask, 'processVariables', _that.cleanedVariables);
              // Block#: _.Xi|#zaUj)Sg2n;;q$P
              _that.currentProperty = getProcessVariable('superProcessInstanceId');
              // Block#: qd!;|U4tyw7FYf}f9kDY
              if(_that.currentProperty != null) {
                // Block#: 2FFA:vz1@:L`^p,2]L#e
                console.log(String('super process instance id: ') + String(_that.currentProperty));
                if(_that.debugService && _that.debugService.active) {
                  _that.debugService.traces.push(String('super process instance id: ') + String(_that.currentProperty));
                  _that.debugService.printLog();
                }
                // Block#: K=}P4S_7Witj=3nD2EAm
                com.fc.JavaScriptDistLib.SnapClinical.getActiveTasks(com.fc.JavaScriptDistLib.Dictionary.createDictionary(['processInstanceId'], [_that.currentProperty]),
                  function(active_tasks) {
                    // Block#: E0orPT[0/6Mp|)7b;%K[
                    console.log('get active tasks success');
                    if(_that.debugService && _that.debugService.active) {
                      _that.debugService.traces.push('get active tasks success');
                      _that.debugService.printLog();
                    }
                    // Block#: nb]7LbXBaga@H9A,~!{;
                    if((com.fc.JavaScriptDistLib.Dictionary.getDictValue(com.fc.JavaScriptDistLib.JSON.parseJSONData(active_tasks), 'tasks')) != null) {
                      // Block#: MGtqaL1)%JnHJXKsP?w9
                      _that.currentTask = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(com.fc.JavaScriptDistLib.JSON.parseJSONData(active_tasks), 'tasks'))[0];
                    } else {
                      // Block#: )2AsIWRZU2JZag}YBN!X
                      _that.currentTask = null;
                    }
                    // Block#: =GP|R3p$ts91+xL@dE({
                    console.log(_that.currentTask);
                    if(_that.debugService && _that.debugService.active) {
                      _that.debugService.traces.push(_that.currentTask);
                      _that.debugService.printLog();
                    }
                    // Block#: xszZ_B0Ui?%_]~@oqyGQ
                    determineNextPageToDisplay().then(response => {;
                    });
                  },
                  function(error_data) {
                    // Block#: ?wTc`_b0?{z@-r//Dqgp
                    console.log('get active tasks failure');
                    if(_that.debugService && _that.debugService.active) {
                      _that.debugService.traces.push('get active tasks failure');
                      _that.debugService.printLog();
                    }
                    // Block#: Kq7,qT+a3b?]]iip(Mr|
                    console.log(error_data);
                    if(_that.debugService && _that.debugService.active) {
                      _that.debugService.traces.push(error_data);
                      _that.debugService.printLog();
                    }
                    // Block#: *T9w6yWZa9y9udScxW]$
                    _that.pErrorData = error_data;
                    // Block#: (f[h}K,D]!95o/Vqus%l
                    _that.error = getError();
                    // Block#: 3?,Aozdd(RH,CsW=s,#m
                    _that.currentTask = null;
                    // Block#: 8?WabtB|.9SWoE~m8?LB
                    determineNextPageToDisplay().then(response => {;
                    });
                  });
              } else {
                // Block#: sanp{$:#hA;#-X@o`:VK
                if(com.fc.JavaScriptDistLib.TextLib.textComparison((com.fc.JavaScriptDistLib.JSON.parseJSONDataForPath(_that.currentTask, '$.processDefinitionKey'))[0], "EQUAL", 'PowerMomHomeProcessV1')) {
                  // Block#: DlJ6eKG~iq3$Mcz[*v_E
                  _that.currentTask = null;
                  // Block#: ],J8Z{AvH/]VeYmaJA@)
                  clearUserData().then(response => {;
                  });
                  // Block#: m7U9R([Jihvb@gg7CfwD
                  let hideScreen = $('.HTML5-deploy-wrapper .Screen:visible');
                  //Close all dialogs
                  com.fc.JavaScriptDistLib.Screen.closeDialogs();
                  hideScreen.hide();
                  let showScreen = $('[obj-name="S1Intro"]');
                  showScreen.show();
                  history.pushState({
                    'view': 'S1Intro'
                  }, 'S1Intro', '?S1Intro');
                  hideScreen.triggerHandler('hide');
                  showScreen.triggerHandler('show');
                } else {
                  // Block#: IT$8v~+I_Oo{axl4d]p5
                  _that.currentTask = null;
                  // Block#: )o,qimR}UX!5ji3SUXZJ
                  console.log(_that.currentTask);
                  if(_that.debugService && _that.debugService.active) {
                    _that.debugService.traces.push(_that.currentTask);
                    _that.debugService.printLog();
                  }
                  // Block#: !?P?akOd*cK5gszwJ}40
                  determineNextPageToDisplay().then(response => {;
                  });
                }
              }
            } else {
              // Block#: ~!CE{:g#ty_h=^!e/C{0
              _that.currentTask = (com.fc.JavaScriptDistLib.JSON.parseJSONDataForPath(process_data, '$.tasks[0]'))[0];
              // Block#: U)=-M8L4PbtUhJ0J^tO-
              console.log(_that.currentTask);
              if(_that.debugService && _that.debugService.active) {
                _that.debugService.traces.push(_that.currentTask);
                _that.debugService.printLog();
              }
              // Block#: if=k#WLea{bQ!`O6g^FS
              determineNextPageToDisplay().then(response => {;
              });
            }
          } else {
            // Block#: GjrkfJ$)!!YUaz[A54PQ
            _that.currentTask = null;
            // Block#: [zhsOQeAR;*k7]I4If!-
            console.log(_that.currentTask);
            if(_that.debugService && _that.debugService.active) {
              _that.debugService.traces.push(_that.currentTask);
              _that.debugService.printLog();
            }
            // Block#: CeCV5fDOPuJzSW!X*]lO
            determineNextPageToDisplay().then(response => {;
            });
          }
        },
        function(error_data) {
          // Block#: b@T]no),(+EMu*WmpX*g
          console.log('Save Task and next Failure');
          if(_that.debugService && _that.debugService.active) {
            _that.debugService.traces.push('Save Task and next Failure');
            _that.debugService.printLog();
          }
          // Block#: vI5UQ0/.[~9ie$vAyR7v
          console.log(error_data);
          if(_that.debugService && _that.debugService.active) {
            _that.debugService.traces.push(error_data);
            _that.debugService.printLog();
          }
          // Block#: fSzoI}rQ*SyB9fW:4/2Q
          _that.pErrorData = error_data;
          // Block#: @o[-Ig5`141?nY+%,pV5
          _that.error = getError();
          // Block#: K1t)O5-]sUm%8#*m~$vU
          _that.buttonClicked = false;
          // Block#: 8;)^fWjC%-qO2iH{G_ey
          hideLoaders().then(response => {;
          });
          // Block#: 17Q,ZDTF?#ftyQ|o/9bu
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(_that.currentTemplate, "EQUAL", 'S23SingleInput')) {
            // Block#: %pE9`Puicev(2_KLWd=S
            if(com.fc.JavaScriptDistLib.TextLib.textComparison(_that.validationType, "EQUAL", '6digits')) {
              // Block#: Nn.AoYzf?d6d9|B9,d4,
              $('[obj-name="L23Error"]').show(); // Block#: H~(9Dt8Ta*j)x:Q@1%uB
              com.fc.JavaScriptDistLib.Label.setProperty["Text"]("L23Error", 'Verification code is incorrect or expired');
            }
          }
        });
    } else {
      // Block#: Ei~,yLWAKaF{.Cz_?$u,
      _that.nextProcessAfterCompletion = '';
      // Block#: L!F/~t`(Z)upphw31a_!
      _that.buttonClicked = false;
      // Block#: a;jDF{tZlxd6Yn0pcP1]
      let hideScreen = $('.HTML5-deploy-wrapper .Screen:visible');
      //Close all dialogs
      com.fc.JavaScriptDistLib.Screen.closeDialogs();
      hideScreen.hide();
      let showScreen = $('[obj-name="S1Intro"]');
      showScreen.show();
      history.pushState({
        'view': 'S1Intro'
      }, 'S1Intro', '?S1Intro');
      hideScreen.triggerHandler('hide');
      showScreen.triggerHandler('show');
    }
    return _that.pErrorData;
  }
  /**
   * Describe this function...
   */
  function S20UpdateScreen() {
    return new Promise(function(resolve, reject) {
      // Block#: G79G~LC`4@t`%K7YQL8V
      S20HideObjects().then(response => {;
      });
      // Block#: CtD1x]}D+uSSvEo)*L#O
      com.fc.JavaScriptDistLib.Button.setProperty["Text"]("B20Date", 'Tap To Enter'); // Block#: H!ysEyhchh}x6%T,L~13
      _that.currentProperty = getOutcomeName('B20Back');
      // Block#: ct3aK4B3?tYUlPONg.jW
      if(_that.currentProperty != null) {
        // Block#: |Sfg5@XU|^/}X0_#9zMM
        $('[obj-name="B20Back"]').show();
      }
      // Block#: zQd!@DWU+6KwoZ@P+kUn
      _that.currentProperty = getOutcomeName('B20Cancel');
      // Block#: 7-,rR2,Z#;lR})Pp65_4
      if(_that.currentProperty != null) {
        // Block#: ^N6PWs,:%k_qrki?(mw#
        $('[obj-name="B20Cancel"]').show(); // Block#: *A)g/#1Eyxq{4-;|WIs4
        com.fc.JavaScriptDistLib.Button.setProperty["Text"]("B20Cancel", _that.currentProperty);
      }
      // Block#: R=7Pwb[_d8SnPbY~+KQ4
      _that.currentProperty = getOutcomeName('B20Next');
      // Block#: jyl(aub+Nq%8!U,@G,Sh
      if(_that.currentProperty != null) {
        // Block#: )cZ7z)Is?D[0YPKBk[U/
        $('[obj-name="B20Next"]').show(); // Block#: HBGXwh`nLMcf_W~3_g|9
        com.fc.JavaScriptDistLib.Button.setProperty["Text"]("B20Next", _that.currentProperty);
      }
      // Block#: G$J49-0Vp7oE},7q=Fk1
      _that.currentProperty = getOutcomeName('B20Skip');
      // Block#: r@)M3kyfMiprbv+v6AT5
      if(_that.currentProperty != null) {
        // Block#: =NZ3jBnkK;5l_8.JhNgR
        $('[obj-name="B20Skip"]').show(); // Block#: pp,kzVi/Jz,;%8(9iCHu
        com.fc.JavaScriptDistLib.Button.setProperty["Text"]("B20Skip", _that.currentProperty);
      }
      // Block#: 5B*B48w2Gp3n$]H-mvrX
      _that.currentProperty = getFormProperty('title');
      // Block#: /2YZ^K4|X/Q;#XscHY*u
      if(_that.currentProperty != null) {
        // Block#: L8OKiqxf+L8g=w|iAy%z
        $('[obj-name="L20Title"]').show(); // Block#: iAMb8v!}ZhqR!+k?DR9Z
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("L20Title", _that.currentProperty);
      }
      // Block#: SfL=Sd^645^!R!g^2G4@
      _that.currentProperty = getProcessVariable('numberOfBabies');
      // Block#: 2FiF+JDVJ_q[(p+j:@d)
      if(_that.currentProperty != null) {
        // Block#: TC{xX-Q!b(q-T.MF5Q+-
        console.log(String('numberOfBabies: ') + String(_that.currentProperty));
        if(_that.debugService && _that.debugService.active) {
          _that.debugService.traces.push(String('numberOfBabies: ') + String(_that.currentProperty));
          _that.debugService.printLog();
        }
      }
      // Block#: $cIn#0)wX77ox1b5Wioy
      _that.inputType = getFormField('answer1', 'type');
      // Block#: HR:4]6`mrZ9hrZGC74)H
      if(_that.inputType != null) {
        // Block#: 1bdp3=Oe0keuot5EdJmV
        if(com.fc.JavaScriptDistLib.TextLib.textComparison(_that.inputType, "EQUAL", 'boolean')) {
          // Block#: lkz1RWRWo2iKsI;%hIOC
          _that.currentProperty = getFormProperty('question');
          // Block#: +RngNTsOkuyJ~$fyV_uU
          if(_that.currentProperty != null) {
            // Block#: pZEp]Hl`dtR6tSy!$BSz
            $('[obj-name="L20Question"]').show(); // Block#: V8Vo5Ms~R=%mEz.wf6w=
            com.fc.JavaScriptDistLib.Label.setProperty["Text"]("L20Question", _that.currentProperty);
          }
          // Block#: _!BD6a.r$*fip-7T46=8
          getCheckboxItems().then(response => {;
          });
          // Block#: n2T?)h1?.44Zyc5|g5CU
          $('[obj-name="I20TopLine"]').show(); // Block#: rrP6bf#n725{/bSgF{/X
          $('[obj-name="LV20Answers"]').show(); // Block#: ld=(DiUMth3):Nha%pQU
          com.fc.JavaScriptDistLib.ListView.saveTemplateCell('LV20Answers');
          com.fc.JavaScriptDistLib.ListView.removeAllCells('LV20Answers');
          on_listview_length_configured_LV20Answers();
          // Block#: Jo}`Py!18CaYgO_y8F?3
          if(!(com.fc.JavaScriptDistLib.ListView.isCellVisible('LV20Answers', 1, 'ListViewCell'))) {
            // Block#: %*kRFgXgphwYtB)K2Ieq
            $('[obj-name="I20TopScrollArrows"]').show();
          } else {
            // Block#: amb!jYn/#mbw!Eb_JAqT
            $('[obj-name="I20TopScrollArrows"]').hide();
          }
          // Block#: Kn[}1u57f,RcjP38zz6N
          if(!(com.fc.JavaScriptDistLib.ListView.isCellVisible('LV20Answers', (_that.checkBoxList.length - 1), 'ListViewCell'))) {
            // Block#: Pr-?^Uv%Y6LmQAwPfF}$
            $('[obj-name="I20BottomScrollArrows"]').show();
          } else {
            // Block#: _ii8D||*sYjJ/7aZ5R4k
            $('[obj-name="I20BottomScrollArrows"]').hide();
          }
        } else {
          // Block#: %kuz#9;MSe-pFPMG95GG
          $('[obj-name="L20Question"]').show(); // Block#: `R~wDQY3_w%[sqD;3.p)
          com.fc.JavaScriptDistLib.Label.setProperty["Text"]("L20Question", (getFormField('answer1', 'name'))); // Block#: QvR?0O-{MWWbJ0K3JOO@
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(_that.inputType, "EQUAL", 'date')) {
            // Block#: B6ZzUe;uQ6r.9^_qM%5D
            _that.selectionMade = false;
            // Block#: .+[(1ue{J8dHKtp2sBEu
            $('[obj-name="B20Date"]').show();
          } else if(com.fc.JavaScriptDistLib.TextLib.textComparison(_that.inputType, "EQUAL", 'radio-buttons')) {
            // Block#: D6*,/pd*MerJOUUE$$+}
            getRadioButtonOptions().then(response => {;
            });
            // Block#: |A1#Q=E;4g-z,Kk1*M@1
            $('[obj-name="I20TopLine"]').show(); // Block#: Zm[mH)dUsyY%Dm9NRMv@
            $('[obj-name="LV20Answers"]').show(); // Block#: 71xSb6ZlO+^_F-W8h9!I
            com.fc.JavaScriptDistLib.ListView.saveTemplateCell('LV20Answers');
            com.fc.JavaScriptDistLib.ListView.removeAllCells('LV20Answers');
            on_listview_length_configured_LV20Answers();
            // Block#: 9p7yNs(0qfe%U9$n[l:j
            if(!(com.fc.JavaScriptDistLib.ListView.isCellVisible('LV20Answers', 1, 'ListViewCell'))) {
              // Block#: 4mLekiF(akc@8,:[L?1T
              $('[obj-name="I20TopScrollArrows"]').show();
            } else {
              // Block#: mfxnuuYQUG:}WYIb?6vD
              $('[obj-name="I20TopScrollArrows"]').hide();
            }
            // Block#: |Tdub5h{c*-4vD+d68XB
            if(!(com.fc.JavaScriptDistLib.ListView.isCellVisible('LV20Answers', (_that.checkBoxList.length - 1), 'ListViewCell'))) {
              // Block#: RK)#Zg4b%OSW3gjR5?=8
              $('[obj-name="I20BottomScrollArrows"]').show();
            } else {
              // Block#: 3F36+fArrf,I7woTw*Y%
              $('[obj-name="I20BottomScrollArrows"]').hide();
            }
          } else if(com.fc.JavaScriptDistLib.TextLib.textComparison(_that.inputType, "EQUAL", 'text') ||
            com.fc.JavaScriptDistLib.TextLib.textComparison(_that.inputType, "EQUAL", 'password')
          ) {
            // Block#: -op(0Z1Tf42DdMW{NF/K
            $('[obj-name="T20Text"]').show(); // Block#: :eu(%Q+D@q(T7kB:F=wR
            com.fc.JavaScriptDistLib.Textbox.setProperty["Text"]("T20Text", ''); // Block#: 9rq1)E~EQ{j7zQ+(;l2U
            com.fc.JavaScriptDistLib.Textbox.setProperty["Input type"]("T20Text", 'plain'); // Block#: 63{0hbMvK}S%wD@1mTDy
            _that.currentProperty = getFormField('answer1', 'placeholder');
            // Block#: 7Vhc%aYg;qM8ygTw}i%M
            if(_that.currentProperty != null) {
              // Block#: KDV=^a.}zf,)]`J`~F@W
              com.fc.JavaScriptDistLib.Textbox.setProperty["Placeholder"]("T20Text", _that.currentProperty);
            }
          } else if(com.fc.JavaScriptDistLib.TextLib.textComparison(_that.inputType, "EQUAL", 'integer')) {
            // Block#: iEri.]`dd$*#*zq.!Jm|
            $('[obj-name="T20Text"]').show(); // Block#: uKYGCDaqSWw2.Y1[q-=*
            com.fc.JavaScriptDistLib.Textbox.setProperty["Input type"]("T20Text", 'numeric'); // Block#: b~NBNWeDFo9yd|`?bM=v
            com.fc.JavaScriptDistLib.Textbox.setProperty["Text"]("T20Text", '');
          }
        }
      }
      // Block#: enWdc[1Y9c!q}2{r~LS?
      _that.currentProperty = getFormProperty('validationType');
      // Block#: s,jV$arfUYG*Y;?PjXK9
      if(_that.currentProperty != null) {
        // Block#: tDiCPQ#xir`c^U2M4Vem
        _that.validationType = _that.currentProperty;
      }
      // Block#: (!iRGZ.C5WBXAI6jV/KR
      if(com.fc.JavaScriptDistLib.TextLib.textComparison(_that.inputType, "EQUAL", 'boolean')) {
        // Block#: %6#(RtcmrUVkA@p!?_kb
        var item_list2 = _that.checkBoxList;
        for(var item_index2 in item_list2) {
          item = item_list2[item_index2];
          // Block#: ~yZ)w[K|kb%U3vGa.`cB
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'value'), "EQUAL", 'TRUE')) {
            // Block#: dqh%Rcgn@bIXlix9{m2;
            _that.selectionMade = true;
          }
        }
      } else if(com.fc.JavaScriptDistLib.TextLib.textComparison(_that.inputType, "EQUAL", 'radio-buttons')) {
        // Block#: @MapKr*%@zG{a|bXf8pC
        var item_list3 = _that.checkBoxList;
        for(var item_index3 in item_list3) {
          item = item_list3[item_index3];
          // Block#: mm[`+:2n*14^#.3XV==%
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'value'), "EQUAL", 'TRUE')) {
            // Block#: fIf8FGKO!.$^:~@54@Tp
            _that.selectionMade = true;
          }
        }
      } else if(com.fc.JavaScriptDistLib.TextLib.textComparison(_that.inputType, "EQUAL", 'text') ||
        com.fc.JavaScriptDistLib.TextLib.textComparison(_that.inputType, "EQUAL", 'integer')
      ) {
        // Block#: 0PF6CAMk!VIo)0:L?P(7
        _that.currentProperty = getFormField('answer1', 'value');
        // Block#: 7px1u`s)LweK#=JpgSBM
        if(!(_that.currentProperty == null) && !com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.TextLib.convertToText(_that.validationType), "EQUAL", 'medication')) {
          // Block#: ?7B4owN[Y3_$r|maGH;9
          com.fc.JavaScriptDistLib.Textbox.setProperty["Text"]("T20Text", _that.currentProperty); // Block#: $v;r/7}o9{e$cXY4x[Fp
          _that.selectionMade = true;
        }
      } else if(com.fc.JavaScriptDistLib.TextLib.textComparison(_that.inputType, "EQUAL", 'date')) {
        // Block#: B9kZX_4CX|4-ynm7P(SZ
        _that.currentProperty = getFormField('answer1', 'value');
        // Block#: N?gQWC1jfLr}F6},~8,t
        console.log(_that.currentProperty);
        if(_that.debugService && _that.debugService.active) {
          _that.debugService.traces.push(_that.currentProperty);
          _that.debugService.printLog();
        }
        // Block#: T#byYtP}*M%+CBgc0#/x
        if(!(_that.currentProperty == null)) {
          // Block#: r.WpViv/}N`TO`_iU[v:
          _that.formDate = com.fc.JavaScriptDistLib.TextLib.textSplitWith(_that.currentProperty, '-');
          // Block#: m=wRoxS|$bc?Cl+!]Xe+
          com.fc.JavaScriptDistLib.Button.setProperty["Text"]("B20Date", (com.fc.JavaScriptDistLib.TimeLibrary.textFromTime((com.fc.JavaScriptDistLib.TimeLibrary.createTime(([_that.formDate[1], '/', _that.formDate.slice(-1)[0], '/', _that.formDate[0]].join('')))), "DATE_US"))); // Block#: ?7cJ2zI*4g#DV:!u~yOo
          _that.selectionMade = true;
        }
      }
      // Block#: #?b`OWD3GcGWGPI;0C^E
      B20NextUpdate().then(response => {;
      });
    });
  }
  /**
   * Describe this function...
   */
  function S26SetScreen() {
    return new Promise(function(resolve, reject) {
      // Block#: 4-q`b%8O%:;d{+PG8{%g
      _that.currentProperty = getOutcomeName('B26Next');
      // Block#: 5bH3ZAS/6e%r-74(wx5t
      if(_that.currentProperty != null) {
        // Block#: [XE^!n@Ai+S^3A#REC-U
        $('[obj-name="B26Next"]').show(); // Block#: Sqmx|5tM8],+/R-43.:O
        com.fc.JavaScriptDistLib.Button.setProperty["Text"]("B26Next", _that.currentProperty);
      }
      // Block#: Sc|^o1BclZO4)~HW//qe
      _that.currentProperty = getOutcomeName('B26Back');
      // Block#: #}bz7;%aB2,9+Y4B1+-3
      if(_that.currentProperty != null) {
        // Block#: eUJ_:sa6|/Y-}f20moD_
        $('[obj-name="B26Back"]').show();
      }
      // Block#: Gk;Y?s/Q__{l,SoT(17~
      _that.currentProperty = getOutcomeName('B26Cancel');
      // Block#: M2}DpEx30n9nDA?)~.]F
      if(_that.currentProperty != null) {
        // Block#: e=a/qA$it9m2@aXoahCY
        $('[obj-name="B26Cancel"]').show(); // Block#: VJK8vt7=$59PeL)K*1Fe
        com.fc.JavaScriptDistLib.Button.setProperty["Text"]("B26Cancel", _that.currentProperty);
      }
      // Block#: `BJMMk?eVqyg.6l=JlB}
      _that.currentProperty = getFormProperty('title');
      // Block#: ~4}AYl0pO`6Lbm*.;PYl
      if(_that.currentProperty != null) {
        // Block#: r?Sx/NAvI^]tu{h_#6(1
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("L26Title", _that.currentProperty);
      }
      // Block#: 8V)6rI9w7s[HtL-G1H==
      _that.currentProperty = getFormProperty('graphGroup');
      // Block#: Z0.eag~(b1*r4MZjOGp1
      if(_that.currentProperty != null) {
        // Block#: %uqAHeId@Q%ItJzsKn?[
        _that.graphGroup = _that.currentProperty;
      }
      // Block#: UoL9Kfn~*=#Z-|`}uv=:
      _that.currentProperty = getFormProperty('graphType');
      // Block#: cK+MSbTx!zBV9:c,ek]8
      if(_that.currentProperty != null) {
        // Block#: f)j+V,sio0x2bL[E,NgD
        _that.graphType = _that.currentProperty;
      }
      // Block#: IxJlvybruX@mGW_*x*~}
      _that.currentProperty = getProcessVariable('data');
      // Block#: fcB;}WkXv0~h?1$$Y]Pg
      if(_that.currentProperty != null) {
        // Block#: q*FH5?|$SjW4?obnm6/q
        _that.JSON2 = (com.fc.JavaScriptDistLib.JSON.parseJSONData(_that.currentProperty));
      }
      // Block#: z.s3D1p1^gqUdeHDn=f7
      if(com.fc.JavaScriptDistLib.TextLib.textComparison(_that.graphType, "EQUAL", 'singleBar')) {
        // Block#: s/L5,ml1a)(1DTD9jD=^
        S26SetSingleBarGraph().then(response => {;
        });
      } else if(com.fc.JavaScriptDistLib.TextLib.textComparison(_that.graphType, "EQUAL", 'doubleBar')) {
        // Block#: 5-pJa7|la@)62kMevNw2
        S26SetDoubleBarGraph().then(response => {;
        });
      } else if(com.fc.JavaScriptDistLib.TextLib.textComparison(_that.graphType, "EQUAL", 'pieChart')) {
        // Block#: _,rt%%rc.t[rT9!/n{LH
        S26SetPieChart().then(response => {;
        });
      }
    });
  }
  /**
   * Describe this function...
   */
  function S2UpdateScreen() {
    return new Promise(function(resolve, reject) {
      // Block#: MJ5tvtz]jbgT=9X9R.Te
      B2NextUpdate().then(response => {;
      });
      // Block#: tkyMk/kpl(nCi|3{%B^B
      $('[obj-name="L2Title"]').hide(); // Block#: znV)jYRuUU(.N}Is6h/P
      com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("S2Qualification", false); // Block#: TUtni$?Co31hVS8(xnO{
      com.fc.JavaScriptDistLib.Button.setProperty["Text color"]("B2Q1Yes", (com.fc.JavaScriptDistLib.ColourLibrary.getColourFromText('#939598'))); // Block#: .vRkkdDTCvdG%_7KBJKb
      com.fc.JavaScriptDistLib.Button.setProperty["Text color"]("B2Q1No", (com.fc.JavaScriptDistLib.ColourLibrary.getColourFromText('#939598'))); // Block#: !~k`HLp6f.00^d;jjN0y
      com.fc.JavaScriptDistLib.Button.setProperty["Text color"]("B2Q2Yes", (com.fc.JavaScriptDistLib.ColourLibrary.getColourFromText('#939598'))); // Block#: WybKEglF_k9AUPc*Mg)q
      com.fc.JavaScriptDistLib.Button.setProperty["Text color"]("B2Q2No", (com.fc.JavaScriptDistLib.ColourLibrary.getColourFromText('#939598'))); // Block#: c$(1KbrANSw{O+7~s`!6
      com.fc.JavaScriptDistLib.Button.setProperty["Text color"]("B2Q3Yes", (com.fc.JavaScriptDistLib.ColourLibrary.getColourFromText('#939598'))); // Block#: SD.OgG7%sNo{_[f-Enab
      com.fc.JavaScriptDistLib.Button.setProperty["Text color"]("B2Q3No", (com.fc.JavaScriptDistLib.ColourLibrary.getColourFromText('#939598'))); // Block#: |tKmi=#q(2L`E+ZNJlYW
      com.fc.JavaScriptDistLib.Button.setProperty["Text color"]("B2Q4Yes", (com.fc.JavaScriptDistLib.ColourLibrary.getColourFromText('#939598'))); // Block#: B7J;L;S/n79*NyTpM}.u
      com.fc.JavaScriptDistLib.Button.setProperty["Text color"]("B2Q4No", (com.fc.JavaScriptDistLib.ColourLibrary.getColourFromText('#939598'))); // Block#: ;!R.U+q:M~@#B{,-=^Sf
      console.log('getFormField');
      if(_that.debugService && _that.debugService.active) {
        _that.debugService.traces.push('getFormField');
        _that.debugService.printLog();
      }
      // Block#: w]L0sW/)V]#l#Z;LHeaw
      console.log(getFormField('C2Question1', 'name'));
      if(_that.debugService && _that.debugService.active) {
        _that.debugService.traces.push(getFormField('C2Question1', 'name'));
        _that.debugService.printLog();
      }
      // Block#: v-XK1?rC8RhI!~Vns%C6
      _that.currentProperty = getFormField('C2Question1', 'name');
      // Block#: =v_HusBL(]qbXw7T@#kx
      if(_that.currentProperty != null) {
        // Block#: V(BA,Yd]bEjQGo:v08o~
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("L2Q1Text", _that.currentProperty);
      }
      // Block#: w1fTgbDlm{a=B1%|/L03
      _that.currentProperty = getFormField('C2Question2', 'name');
      // Block#: @T]S9;n4m|om]iWU+suA
      if(_that.currentProperty != null) {
        // Block#: 5rPa-^p~X@GX%?ZcPKny
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("L2Q2Text", _that.currentProperty);
      }
      // Block#: w*LAVrS4$iW,LxsHE16^
      _that.currentProperty = getFormField('C2Question3', 'name');
      // Block#: DA;b|yQ%8Q/`dl1y2M[j
      if(_that.currentProperty != null) {
        // Block#: %,cloC0]@7q#)2w0b=1+
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("L2Q3Text", _that.currentProperty);
      }
      // Block#: Ox%%J/)DqboZ(,L7:afC
      _that.currentProperty = getFormField('C2Question4', 'name');
      // Block#: k4w_Y)l@.Yr/SQ3l#-)#
      if(_that.currentProperty != null) {
        // Block#: =94D;2g_2+P}r^A]fR,~
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("L2Q4Text", _that.currentProperty);
      }
      // Block#: Hi6ICL%CPBu!S:Bpw7^]
      _that.currentProperty = getFormProperty('title');
      // Block#: ^vG$qq?Kb9*_]|4O{dgW
      if(_that.currentProperty != null) {
        // Block#: ~N+r1;|(MSt|*7}~YQ_8
        $('[obj-name="L2Title"]').show(); // Block#: A^n[5n`_7FAn?Z?Nz%tD
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("L2Title", _that.currentProperty);
      }
    });
  }
  /**
   * Describe this function...
   */
  function S23UpdateScreen() {
    return new Promise(function(resolve, reject) {
      // Block#: do:79G}@IH(vyadbBZ}7
      S23HideObjects().then(response => {;
      });
      // Block#: ){]N)FDTDQZ.g4}@%MYR
      _that.currentProperty = getOutcomeName('B23Back');
      // Block#: rs^YN4R/z;]IIwJUN9h=
      if(_that.currentProperty != null) {
        // Block#: H{[@LDsd8)RT4ylyPZ7~
        $('[obj-name="B23Back"]').show();
      }
      // Block#: 0FX)|[Ah}.J#1BNx-zJC
      _that.currentProperty = getOutcomeName('B23Cancel');
      // Block#: y*(S-2s/$5b[83rHip6N
      if(_that.currentProperty != null) {
        // Block#: N6~hQ7#TQ8Wb5dQSaOvo
        $('[obj-name="B23Cancel"]').show(); // Block#: H/VN*i(~c-W{Y~7N%#N5
        com.fc.JavaScriptDistLib.Button.setProperty["Text"]("B23Cancel", _that.currentProperty);
      }
      // Block#: f:UO#@5;^Z9Ra@tWjh1:
      _that.currentProperty = getOutcomeName('B23Next');
      // Block#: +p{QJUZH9CwS*S1Nr-!H
      if(_that.currentProperty != null) {
        // Block#: 1#3Xa4U9w;#[phAd7gFh
        $('[obj-name="B23Next"]').show(); // Block#: ;~#Zp}PuOyNpg^,Y4Xb=
        com.fc.JavaScriptDistLib.Button.setProperty["Text"]("B23Next", _that.currentProperty);
      }
      // Block#: ZJ3$v1kllLLc}gY|3$F1
      _that.currentProperty = getOutcomeName('B23Skip');
      // Block#: wT$uqEmJ_re2Y/h(!4=#
      if(_that.currentProperty != null) {
        // Block#: [gsa.X0krzmFS:OM9XnY
        $('[obj-name="B23Skip"]').show(); // Block#: {$@;oVXb@FaG-gwhb3Oc
        com.fc.JavaScriptDistLib.Button.setProperty["Text"]("B23Skip", _that.currentProperty);
      }
      // Block#: lNKdRR`zsLC%7Gvbq(,[
      _that.currentProperty = getFormProperty('title');
      // Block#: !h[PrOym#44e~7/HKXlX
      if(_that.currentProperty != null) {
        // Block#: ChZ04w2r3Pp+l2Fa#hL7
        $('[obj-name="L23Title"]').show(); // Block#: #H`[[N--g=D-n0Xp$6{@
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("L23Title", _that.currentProperty);
      }
      // Block#: [5JwiDaJ$Y`lduby:5/p
      _that.currentProperty = getFormProperty('error');
      // Block#: S#A)8%(,l=Vi=VRpj2do
      if(_that.currentProperty != null) {
        // Block#: KmhD,A?og={B!VNC3DBZ
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("L23Error", _that.currentProperty);
      }
      // Block#: eN#AjZc8g:JcJGD-;__{
      _that.currentProperty = getFormProperty('L23Units');
      // Block#: EjkD)~@]q3*Lg!@(0Lv0
      if(_that.currentProperty != null) {
        // Block#: d7a2/JQg$^ZC[:~(MP-o
        $('[obj-name="L23Units"]').show(); // Block#: Lhdt;)bh#e|N]U!GDYJ.
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("L23Units", _that.currentProperty);
      }
      // Block#: bwMH{p.e^/JZGlPEH-LB
      _that.inputType = getFormField('answer1', 'type');
      // Block#: $By8OpH`3hJPrlBw%25K
      console.log(String('Answer Type') + String(_that.inputType));
      if(_that.debugService && _that.debugService.active) {
        _that.debugService.traces.push(String('Answer Type') + String(_that.inputType));
        _that.debugService.printLog();
      }
      // Block#: dhK^)tmg{)Ls)l}zgFX-
      $('[obj-name="L23Question"]').show(); // Block#: r#i}SU%3+O(B{-#h[*VN
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("L23Question", (getFormField('answer1', 'name'))); // Block#: [pOXKX39XV6Vy7UpqnBc
      if(com.fc.JavaScriptDistLib.TextLib.textComparison(_that.inputType, "EQUAL", 'text')) {
        // Block#: UfUs].P4zx-0tuZ:!?Sr
        _that.currentProperty = getFormField('answer1', 'value');
        // Block#: C^;ijXD4l%^D+qc1{hc;
        if(_that.currentProperty != null) {
          // Block#: eUfpWr,I{HZ*u}/paj82
          com.fc.JavaScriptDistLib.Textbox.setProperty["Text"]("T23Text", _that.currentProperty); // Block#: cIHB/~~QJ03=D=tG-l*m
          _that.selectionMade = true;
        }
      }
      // Block#: q$%QztmH*Z2RgZ~8J!$[
      $('[obj-name="T23Text"]').show(); // Block#: bs^xVQx2lHWJ6H}e]tn9
      _that.currentProperty = getFormProperty('validationType');
      // Block#: @Kej8{_mbZ3a}@]3#^$z
      if(_that.currentProperty != null) {
        // Block#: [Iw=*[Q@TJjI$)oaHR@j
        _that.validationType = _that.currentProperty;
        // Block#: {qL{]O!]_8Swx3sx@,7v
        console.log(String('validationType: ') + String(_that.validationType));
        if(_that.debugService && _that.debugService.active) {
          _that.debugService.traces.push(String('validationType: ') + String(_that.validationType));
          _that.debugService.printLog();
        }
        // Block#: I(OQT#;5a:O`xP_+l0n$
        if(com.fc.JavaScriptDistLib.TextLib.textComparison(_that.validationType, "EQUAL", '2digits')) {
          // Block#: 2C*WExQGMh_J#^v+Od=X
          com.fc.JavaScriptDistLib.Textbox.setProperty["Input type"]("T23Text", 'numeric'); // Block#: =%oovL$+JErc#D;ku~9U
          com.fc.JavaScriptDistLib.Textbox.setProperty["Max chars"]("T23Text", 2);
        } else if(com.fc.JavaScriptDistLib.TextLib.textComparison(_that.validationType, "EQUAL", '3digits')) {
          // Block#: *O|adCf/kG9j|O|VVigd
          com.fc.JavaScriptDistLib.Textbox.setProperty["Input type"]("T23Text", 'numeric'); // Block#: S3Nt2nadSgxe!QjmQ9*y
          com.fc.JavaScriptDistLib.Textbox.setProperty["Max chars"]("T23Text", 3);
        } else if(com.fc.JavaScriptDistLib.TextLib.textComparison(_that.validationType, "EQUAL", 'zipcode')) {
          // Block#: w.#)Ld*QNbl~T+KKw6O_
          com.fc.JavaScriptDistLib.Textbox.setProperty["Input type"]("T23Text", 'numeric'); // Block#: 6*(NL3BdAhST#bV(Ur^n
          com.fc.JavaScriptDistLib.Textbox.setProperty["Max chars"]("T23Text", 5);
        } else if(com.fc.JavaScriptDistLib.TextLib.textComparison(_that.validationType, "EQUAL", '6digits')) {
          // Block#: M6.][:KnChOIdRUN%XJ[
          com.fc.JavaScriptDistLib.Textbox.setProperty["Input type"]("T23Text", 'numeric'); // Block#: SJYb=S*lXaT(92:o8U)Z
          com.fc.JavaScriptDistLib.Textbox.setProperty["Max chars"]("T23Text", 6);
        }
      }
      // Block#: .//RYi.]%QlBg[y(uI_,
      _that.currentProperty = getFormProperty('maxInput');
      // Block#: ui|;@|e-vnWL]RruV67O
      if(_that.currentProperty != null) {
        // Block#: W3$K^muwx(fWI+J4!]F|
        _that.maxInput = _that.currentProperty;
        // Block#: +%w(zV:@Ay%!(lmTp8,#
        console.log(String('maxInput: ') + String(_that.maxInput));
        if(_that.debugService && _that.debugService.active) {
          _that.debugService.traces.push(String('maxInput: ') + String(_that.maxInput));
          _that.debugService.printLog();
        }
      }
      // Block#: -0zXGYCBi^Sh{|yA{)Iz
      _that.currentProperty = getFormProperty('minInput');
      // Block#: UfPgrw7iQI#un]rzwx?(
      if(_that.currentProperty != null) {
        // Block#: 0YWsJt|Rhl)i?`=G.av=
        _that.minInput = _that.currentProperty;
        // Block#: -vQu7D}(3a[Gb@n*Do)D
        console.log(String('minInput: ') + String(_that.minInput));
        if(_that.debugService && _that.debugService.active) {
          _that.debugService.traces.push(String('minInput: ') + String(_that.minInput));
          _that.debugService.printLog();
        }
      }
      // Block#: ^%#V#[a/FKhTo[xGY/]=
      B23NextUpdate().then(response => {;
      });
    });
  }
  /**
   * Describe this function...
   */
  function determineNextPageToDisplay() {
    return new Promise(function(resolve, reject) {
      // Block#: ~mNf:A_D5HT{or4rLxtn
      if(_that.currentTask == null) {
        // Block#: wo+^S%BO^Znj.pu2iA4o
        if(!com.fc.JavaScriptDistLib.TextLib.textComparison(_that.nextProcessAfterCompletion, "EQUAL", '')) {
          // Block#: bT0_i7pjxhg7Q1w~AT%S
          startNewProcessInstance(_that.nextProcessAfterCompletion, true).then(response => {;
            if(response.name === "error") {
              // Block#: TQ6W~sVr_nDacJ)3S!m_
              console.log(response.data);
              if(_that.debugService && _that.debugService.active) {
                _that.debugService.traces.push(response.data);
                _that.debugService.printLog();
              }
              // Block#: G/=G|$TX+JO$va0er|4B
              _that.buttonClicked = false;
              // Block#: R-:{h;,#$H}aj6m=ft@n
              let hideScreen = $('.HTML5-deploy-wrapper .Screen:visible');
              //Close all dialogs
              com.fc.JavaScriptDistLib.Screen.closeDialogs();
              hideScreen.hide();
              let showScreen = $('[obj-name="S1Intro"]');
              showScreen.show();
              history.pushState({
                'view': 'S1Intro'
              }, 'S1Intro', '?S1Intro');
              hideScreen.triggerHandler('hide');
              showScreen.triggerHandler('show'); // Block#: A%7vPEd7[*OrPpU)6,_-
              clearUserData().then(response => {;
              });
            }
          });
          // Block#: JFI:%$)Mvur*Wp|{E*ES
          _that.nextProcessAfterCompletion = '';
        } else if(_that.isLoggedIn) {
          // Block#: L|A`?L#M4^D._Fe:K(oT
          startNewProcessInstance('PowerMomHomeProcessV1', false).then(response => {;
            if(response.name === "error") {
              // Block#: Bj`hD(Qp(5T!EF}}B{hq
              console.log(response.data);
              if(_that.debugService && _that.debugService.active) {
                _that.debugService.traces.push(response.data);
                _that.debugService.printLog();
              }
              // Block#: =dLthyM/5!$A?FMyErEc
              let hideScreen = $('.HTML5-deploy-wrapper .Screen:visible');
              //Close all dialogs
              com.fc.JavaScriptDistLib.Screen.closeDialogs();
              hideScreen.hide();
              let showScreen = $('[obj-name="S1Intro"]');
              showScreen.show();
              history.pushState({
                'view': 'S1Intro'
              }, 'S1Intro', '?S1Intro');
              hideScreen.triggerHandler('hide');
              showScreen.triggerHandler('show'); // Block#: kh@.ZZIU|`pgwExaqb50
              clearUserData().then(response => {;
              });
              // Block#: DpG?}:nmcBiImv%=I|Ch
              _that.buttonClicked = false;
            }
          });
        } else {
          // Block#: h0~[%A=zm_Q`#tX4Hz/t
          let hideScreen = $('.HTML5-deploy-wrapper .Screen:visible');
          //Close all dialogs
          com.fc.JavaScriptDistLib.Screen.closeDialogs();
          hideScreen.hide();
          let showScreen = $('[obj-name="S1Intro"]');
          showScreen.show();
          history.pushState({
            'view': 'S1Intro'
          }, 'S1Intro', '?S1Intro');
          hideScreen.triggerHandler('hide');
          showScreen.triggerHandler('show'); // Block#: W=?S#8s,$w#c)5nl])Gg
          clearUserData().then(response => {;
          });
          // Block#: =gb_a?@n.qi2;~:KnHJ^
          com.fc.JavaScriptDistLib.Storage.remove('resumeSignUpProcess') // Block#: 03dm`CLfV:qYZYN?-boH
          _that.buttonClicked = false;
        }
      } else {
        // Block#: @[B5(dH!#e,z3[f2(yjT
        console.log('switchToProcess');
        if(_that.debugService && _that.debugService.active) {
          _that.debugService.traces.push('switchToProcess');
          _that.debugService.printLog();
        }
        // Block#: N@||{M74I8aHO~ux%iwW
        _that.currentProperty = getProcessVariable('switchToProcess');
        // Block#: Jz(6f!|G;m-u~00lKo{D
        if(_that.currentProperty != null) {
          // Block#: )m$hC}cJI_b$,d3o7j}h
          _that.nextProcessAfterCompletion = (com.fc.JavaScriptDistLib.TextLib.convertToText(_that.currentProperty));
          // Block#: /k*vaNu:q%0V]#k/;-~c
          console.log(_that.nextProcessAfterCompletion);
          if(_that.debugService && _that.debugService.active) {
            _that.debugService.traces.push(_that.nextProcessAfterCompletion);
            _that.debugService.printLog();
          }
        }
        // Block#: hC:Am_Dx%yA)h{,()Ytc
        _that.currentProperty = getProcessVariable('setCredentials');
        // Block#: wf#H9y*IW]/6T:H^?PD#
        if(_that.currentProperty != null) {
          // Block#: JDRL8im^jzwuGWiVqc`o
          _that.userID = getProcessVariable('email');
          // Block#: HV_rK4;,Bv#tdbF2t19c
          com.fc.JavaScriptDistLib.Storage.add('email', getProcessVariable('email')) // Block#: #,Ew@][;*z/HU.nf9H,v
          com.fc.JavaScriptDistLib.SnapClinical.configureAuthentication('{"api":{"url":"https://powermomstaging.snapclinical.net","username":"","password":"","userid":"","authentication":"Token Based Auth","lazyDeveloper":false,"frontEndKey":"mobileApp"}}');
          com.fc.JavaScriptDistLib.SnapClinical.snapClinicalConfigure((getProcessVariable('email')), (getProcessVariable('pin')), (getProcessVariable('email')), "mobileApp", "https://powermomstaging.snapclinical.net");
          // Block#: eVkzaUv`hHHa^@6=]Sqy
          com.fc.JavaScriptDistLib.Storage.remove('resumeSignUpProcess')
        }
        // Block#: LA#.IEN0y4TP9bD!qtRK
        if(_that.applicationInBG) {
          // Block#: (X[R5X)xCz{%s?,]pXU@
          _that.applicationShouldDisplayAfterBG = true;
          // Block#: +Wlf.0Jhm(ph^cyTG[Yi
          _that.buttonClicked = false;
        } else {
          // Block#: MUGNIpILuLsS}]4r-T--
          displayPageEngine().then(response => {;
          });
        }
      }
    });
  }
  /**
   * Describe this function...
   */
  function displayPageEngine() {
    return new Promise(function(resolve, reject) {
      // Block#: `cacEs{{22uhu_.x1W/:
      _that.currentTemplate = getFormProperty('templateType');
      // Block#: OCp8l~h8xD8e-$?k{nrG
      console.log(_that.currentTemplate);
      if(_that.debugService && _that.debugService.active) {
        _that.debugService.traces.push(_that.currentTemplate);
        _that.debugService.printLog();
      }
      // Block#: BWJx@FDjF6v!DXJ#ia?G
      _that.buttonClicked = false;
      // Block#: /IArBoAeas6]GcH}5@#W
      if(com.fc.JavaScriptDistLib.TextLib.textComparison(_that.currentTemplate, "EQUAL", 'S2Qualification')) {
        // Block#: T9AagUHq1Tme)uBg*jKl
        _that.S2FirstDisplay = true;
        // Block#: c^$-I}0.7Qc5huv$)?x?
        let hideScreen = $('.HTML5-deploy-wrapper .Screen:visible');
        //Close all dialogs
        com.fc.JavaScriptDistLib.Screen.closeDialogs();
        hideScreen.hide();
        let showScreen = $('[obj-name="S2Qualification"]');
        showScreen.show();
        history.pushState({
          'view': 'S2Qualification'
        }, 'S2Qualification', '?S2Qualification');
        hideScreen.triggerHandler('hide');
        showScreen.triggerHandler('show');
      } else if(com.fc.JavaScriptDistLib.TextLib.textComparison(_that.currentTemplate, "EQUAL", 'S3BasicOrange')) {
        // Block#: DCDsxd{mgX41VB1zjrIc
        _that.S3FirstDisplay = true;
        // Block#: 8D9qi%|+.[Ikrp5Q!v7W
        let hideScreen = $('.HTML5-deploy-wrapper .Screen:visible');
        //Close all dialogs
        com.fc.JavaScriptDistLib.Screen.closeDialogs();
        hideScreen.hide();
        let showScreen = $('[obj-name="S3BasicOrange"]');
        showScreen.show();
        history.pushState({
          'view': 'S3BasicOrange'
        }, 'S3BasicOrange', '?S3BasicOrange');
        hideScreen.triggerHandler('hide');
        showScreen.triggerHandler('show');
      } else if(com.fc.JavaScriptDistLib.TextLib.textComparison(_that.currentTemplate, "EQUAL", 'S4BasicPurple')) {
        // Block#: aH+rs%Co0R4vR=U{fH_L
        _that.S4FirstDisplay = true;
        // Block#: NA:(n[;6Ci0F3ado)REa
        let hideScreen = $('.HTML5-deploy-wrapper .Screen:visible');
        //Close all dialogs
        com.fc.JavaScriptDistLib.Screen.closeDialogs();
        hideScreen.hide();
        let showScreen = $('[obj-name="S4BasicPurple"]');
        showScreen.show();
        history.pushState({
          'view': 'S4BasicPurple'
        }, 'S4BasicPurple', '?S4BasicPurple');
        hideScreen.triggerHandler('hide');
        showScreen.triggerHandler('show');
      } else if(com.fc.JavaScriptDistLib.TextLib.textComparison(_that.currentTemplate, "EQUAL", 'S8Sharing')) {
        // Block#: gDHBt(#X?cOf70u=h!%7
        _that.S8FirstDisplay = true;
        // Block#: 0YBN(2`mc6EeJxAdg`U7
        let hideScreen = $('.HTML5-deploy-wrapper .Screen:visible');
        //Close all dialogs
        com.fc.JavaScriptDistLib.Screen.closeDialogs();
        hideScreen.hide();
        let showScreen = $('[obj-name="S8Sharing"]');
        showScreen.show();
        history.pushState({
          'view': 'S8Sharing'
        }, 'S8Sharing', '?S8Sharing');
        hideScreen.triggerHandler('hide');
        showScreen.triggerHandler('show');
      } else if(com.fc.JavaScriptDistLib.TextLib.textComparison(_that.currentTemplate, "EQUAL", 'S9Html')) {
        // Block#: .Ip$1RU16;2zdxiUv?BM
        _that.S9FirstDisplay = true;
        // Block#: /[n(J,*eBF{exko!4][4
        let hideScreen = $('.HTML5-deploy-wrapper .Screen:visible');
        //Close all dialogs
        com.fc.JavaScriptDistLib.Screen.closeDialogs();
        hideScreen.hide();
        let showScreen = $('[obj-name="S9Html"]');
        showScreen.show();
        history.pushState({
          'view': 'S9Html'
        }, 'S9Html', '?S9Html');
        hideScreen.triggerHandler('hide');
        showScreen.triggerHandler('show');
      } else if(com.fc.JavaScriptDistLib.TextLib.textComparison(_that.currentTemplate, "EQUAL", 'S10NameInput')) {
        // Block#: |,hRQI47v:zPONQr!M]j
        _that.S10FirstDisplay = true;
        // Block#: EM^2EVtUkkOF|yJfriVu
        let hideScreen = $('.HTML5-deploy-wrapper .Screen:visible');
        //Close all dialogs
        com.fc.JavaScriptDistLib.Screen.closeDialogs();
        hideScreen.hide();
        let showScreen = $('[obj-name="S10NameInput"]');
        showScreen.show();
        history.pushState({
          'view': 'S10NameInput'
        }, 'S10NameInput', '?S10NameInput');
        hideScreen.triggerHandler('hide');
        showScreen.triggerHandler('show');
      } else if(com.fc.JavaScriptDistLib.TextLib.textComparison(_that.currentTemplate, "EQUAL", 'S11Signature')) {
        // Block#: ahC!BJ_Ri;(O$.8bjuF3
        _that.S11FirstDisplay = true;
        // Block#: %=^^E$eajb=p/4O/q)tI
        let hideScreen = $('.HTML5-deploy-wrapper .Screen:visible');
        //Close all dialogs
        com.fc.JavaScriptDistLib.Screen.closeDialogs();
        hideScreen.hide();
        let showScreen = $('[obj-name="S11Signature"]');
        showScreen.show();
        history.pushState({
          'view': 'S11Signature'
        }, 'S11Signature', '?S11Signature');
        hideScreen.triggerHandler('hide');
        showScreen.triggerHandler('show');
      } else if(com.fc.JavaScriptDistLib.TextLib.textComparison(_that.currentTemplate, "EQUAL", 'S18LearnMore')) {
        // Block#: F@[=RCl-E^RZMzDmqF(7
        _that.S18FirstDisplay = true;
      } else if(com.fc.JavaScriptDistLib.TextLib.textComparison(_that.currentTemplate, "EQUAL", 'S20BasicInput')) {
        // Block#: K:zGD7ESY-KLtebssGsP
        _that.S28FirstDisplay = true;
        // Block#: SA.@.v0@dy:.NDVPf)zT
        let hideScreen = $('.HTML5-deploy-wrapper .Screen:visible');
        //Close all dialogs
        com.fc.JavaScriptDistLib.Screen.closeDialogs();
        hideScreen.hide();
        let showScreen = $('[obj-name="S20BasicInput"]');
        showScreen.show();
        history.pushState({
          'view': 'S20BasicInput'
        }, 'S20BasicInput', '?S20BasicInput');
        hideScreen.triggerHandler('hide');
        showScreen.triggerHandler('show');
      } else if(com.fc.JavaScriptDistLib.TextLib.textComparison(_that.currentTemplate, "EQUAL", 'S21Pin')) {
        // Block#: _Qxvw@+}4=uzksuwO=5@
        _that.S21FirstDisplay = true;
        // Block#: jLn#Iny{5T=VJIzQj:k2
        let hideScreen = $('.HTML5-deploy-wrapper .Screen:visible');
        //Close all dialogs
        com.fc.JavaScriptDistLib.Screen.closeDialogs();
        hideScreen.hide();
        let showScreen = $('[obj-name="S21Pin"]');
        showScreen.show();
        history.pushState({
          'view': 'S21Pin'
        }, 'S21Pin', '?S21Pin');
        hideScreen.triggerHandler('hide');
        showScreen.triggerHandler('show');
      } else if(com.fc.JavaScriptDistLib.TextLib.textComparison(_that.currentTemplate, "EQUAL", 'S13Home')) {
        // Block#: L`Geb5jBvU#`YF$?Vc`X
        let hideScreen = $('.HTML5-deploy-wrapper .Screen:visible');
        //Close all dialogs
        com.fc.JavaScriptDistLib.Screen.closeDialogs();
        hideScreen.hide();
        let showScreen = $('[obj-name="S13Home"]');
        showScreen.show();
        history.pushState({
          'view': 'S13Home'
        }, 'S13Home', '?S13Home');
        hideScreen.triggerHandler('hide');
        showScreen.triggerHandler('show');
      } else if(com.fc.JavaScriptDistLib.TextLib.textComparison(_that.currentTemplate, "EQUAL", 'S19Activities')) {
        // Block#: wg_SdT8W42`kh#%c^/N%
        let hideScreen = $('.HTML5-deploy-wrapper .Screen:visible');
        //Close all dialogs
        com.fc.JavaScriptDistLib.Screen.closeDialogs();
        hideScreen.hide();
        let showScreen = $('[obj-name="S19Activities"]');
        showScreen.show();
        history.pushState({
          'view': 'S19Activities'
        }, 'S19Activities', '?S19Activities');
        hideScreen.triggerHandler('hide');
        showScreen.triggerHandler('show');
      } else if(com.fc.JavaScriptDistLib.TextLib.textComparison(_that.currentTemplate, "EQUAL", 'S16Dashboard')) {
        // Block#: ,i|F6=n.-ai+=ki3FHmy
        _that.dashboardFirstDisplay = true;
        // Block#: %`VEv2qj}/dyWNhW:o`d
        let hideScreen = $('.HTML5-deploy-wrapper .Screen:visible');
        //Close all dialogs
        com.fc.JavaScriptDistLib.Screen.closeDialogs();
        hideScreen.hide();
        let showScreen = $('[obj-name="HealthDashboardScreen"]');
        showScreen.show();
        history.pushState({
          'view': 'HealthDashboardScreen'
        }, 'HealthDashboardScreen', '?HealthDashboardScreen');
        hideScreen.triggerHandler('hide');
        showScreen.triggerHandler('show');
      } else if(com.fc.JavaScriptDistLib.TextLib.textComparison(_that.currentTemplate, "EQUAL", 'S17Profile')) {
        // Block#: E@IDo1sqBHwMMjdBKet/
        let hideScreen = $('.HTML5-deploy-wrapper .Screen:visible');
        //Close all dialogs
        com.fc.JavaScriptDistLib.Screen.closeDialogs();
        hideScreen.hide();
        let showScreen = $('[obj-name="S17Profile"]');
        showScreen.show();
        history.pushState({
          'view': 'S17Profile'
        }, 'S17Profile', '?S17Profile');
        hideScreen.triggerHandler('hide');
        showScreen.triggerHandler('show');
      } else if(com.fc.JavaScriptDistLib.TextLib.textComparison(_that.currentTemplate, "EQUAL", 'S12Email')) {
        // Block#: mr[6c6ALOXg9yAujUg_q
        _that.S12FirstDisplay = true;
        // Block#: t$+^`2Pyz9ko5$I(_]So
        let hideScreen = $('.HTML5-deploy-wrapper .Screen:visible');
        //Close all dialogs
        com.fc.JavaScriptDistLib.Screen.closeDialogs();
        hideScreen.hide();
        let showScreen = $('[obj-name="S12Email"]');
        showScreen.show();
        history.pushState({
          'view': 'S12Email'
        }, 'S12Email', '?S12Email');
        hideScreen.triggerHandler('hide');
        showScreen.triggerHandler('show');
      } else if(com.fc.JavaScriptDistLib.TextLib.textComparison(_that.currentTemplate, "EQUAL", 'S22DualInput')) {
        // Block#: }Xe|^Cuqq/LyE`^rz=*E
        _that.S12FirstDisplay = true;
        // Block#: 4gKB`Ga,tQ$a!r+2NVPb
        let hideScreen = $('.HTML5-deploy-wrapper .Screen:visible');
        //Close all dialogs
        com.fc.JavaScriptDistLib.Screen.closeDialogs();
        hideScreen.hide();
        let showScreen = $('[obj-name="S22DualInput"]');
        showScreen.show();
        history.pushState({
          'view': 'S22DualInput'
        }, 'S22DualInput', '?S22DualInput');
        hideScreen.triggerHandler('hide');
        showScreen.triggerHandler('show');
      } else if(com.fc.JavaScriptDistLib.TextLib.textComparison(_that.currentTemplate, "EQUAL", 'S23SingleInput')) {
        // Block#: ef$qW|_Lke}83ccqJS,`
        let hideScreen = $('.HTML5-deploy-wrapper .Screen:visible');
        //Close all dialogs
        com.fc.JavaScriptDistLib.Screen.closeDialogs();
        hideScreen.hide();
        let showScreen = $('[obj-name="S23SingleInput"]');
        showScreen.show();
        history.pushState({
          'view': 'S23SingleInput'
        }, 'S23SingleInput', '?S23SingleInput');
        hideScreen.triggerHandler('hide');
        showScreen.triggerHandler('show');
      } else if(com.fc.JavaScriptDistLib.TextLib.textComparison(_that.currentTemplate, "EQUAL", 'MedicationListScreen')) {
        // Block#: NJn{QqR|~trHokzQgYuc
        let hideScreen = $('.HTML5-deploy-wrapper .Screen:visible');
        //Close all dialogs
        com.fc.JavaScriptDistLib.Screen.closeDialogs();
        hideScreen.hide();
        let showScreen = $('[obj-name="MedicationListScreen"]');
        showScreen.show();
        history.pushState({
          'view': 'MedicationListScreen'
        }, 'MedicationListScreen', '?MedicationListScreen');
        hideScreen.triggerHandler('hide');
        showScreen.triggerHandler('show');
      } else if(com.fc.JavaScriptDistLib.TextLib.textComparison(_that.currentTemplate, "EQUAL", 'S25AddMedication')) {
        // Block#: %[xOmMGw][js8tU7I:ZK
        _that.S25FirstDisplay = true;
        // Block#: y=+C/n??POpf^W%AH3J-
        let hideScreen = $('.HTML5-deploy-wrapper .Screen:visible');
        //Close all dialogs
        com.fc.JavaScriptDistLib.Screen.closeDialogs();
        hideScreen.hide();
        let showScreen = $('[obj-name="S25AddMedication"]');
        showScreen.show();
        history.pushState({
          'view': 'S25AddMedication'
        }, 'S25AddMedication', '?S25AddMedication');
        hideScreen.triggerHandler('hide');
        showScreen.triggerHandler('show');
      } else if(com.fc.JavaScriptDistLib.TextLib.textComparison(_that.currentTemplate, "EQUAL", 'S14Learn')) {
        // Block#: :KSk=h||PHx{b8`g-CnL
        _that.S14FirstDisplay = true;
        // Block#: W6m4nAPQ]gq!iWFed+aR
        let hideScreen = $('.HTML5-deploy-wrapper .Screen:visible');
        //Close all dialogs
        com.fc.JavaScriptDistLib.Screen.closeDialogs();
        hideScreen.hide();
        let showScreen = $('[obj-name="S14Learn"]');
        showScreen.show();
        history.pushState({
          'view': 'S14Learn'
        }, 'S14Learn', '?S14Learn');
        hideScreen.triggerHandler('hide');
        showScreen.triggerHandler('show');
      } else if(com.fc.JavaScriptDistLib.TextLib.textComparison(_that.currentTemplate, "EQUAL", 'S15Webview')) {
        // Block#: ~gOX9RcvzGcWR@7tA0vS
        _that.S15FirstDisplay = true;
        // Block#: 9E?]!#-v/@R.jqmiuBKS
        let hideScreen = $('.HTML5-deploy-wrapper .Screen:visible');
        //Close all dialogs
        com.fc.JavaScriptDistLib.Screen.closeDialogs();
        hideScreen.hide();
        let showScreen = $('[obj-name="S15Webview"]');
        showScreen.show();
        history.pushState({
          'view': 'S15Webview'
        }, 'S15Webview', '?S15Webview');
        hideScreen.triggerHandler('hide');
        showScreen.triggerHandler('show');
      } else if(com.fc.JavaScriptDistLib.TextLib.textComparison(_that.currentTemplate, "EQUAL", 'S26PieGraphs')) {
        // Block#: .7=upx2lH!l!c.oA-0-K
        let hideScreen = $('.HTML5-deploy-wrapper .Screen:visible');
        //Close all dialogs
        com.fc.JavaScriptDistLib.Screen.closeDialogs();
        hideScreen.hide();
        let showScreen = $('[obj-name="S26GraphDisplay"]');
        showScreen.show();
        history.pushState({
          'view': 'S26GraphDisplay'
        }, 'S26GraphDisplay', '?S26GraphDisplay');
        hideScreen.triggerHandler('hide');
        showScreen.triggerHandler('show');
      } else if(com.fc.JavaScriptDistLib.TextLib.textComparison(_that.currentTemplate, "EQUAL", 'S19Activities')) {
        // Block#: %lEvjsLc=Hs({R;`rN.V
        let hideScreen = $('.HTML5-deploy-wrapper .Screen:visible');
        //Close all dialogs
        com.fc.JavaScriptDistLib.Screen.closeDialogs();
        hideScreen.hide();
        let showScreen = $('[obj-name="S19Activities"]');
        showScreen.show();
        history.pushState({
          'view': 'S19Activities'
        }, 'S19Activities', '?S19Activities');
        hideScreen.triggerHandler('hide');
        showScreen.triggerHandler('show');
      } else if(com.fc.JavaScriptDistLib.TextLib.textComparison(_that.currentTemplate, "EQUAL", 'S28TextAreaInput')) {
        // Block#: ^oyG[;Piu5#V$hRq+0}x
        let hideScreen = $('.HTML5-deploy-wrapper .Screen:visible');
        //Close all dialogs
        com.fc.JavaScriptDistLib.Screen.closeDialogs();
        hideScreen.hide();
        let showScreen = $('[obj-name="S28TextAreaInput"]');
        showScreen.show();
        history.pushState({
          'view': 'S28TextAreaInput'
        }, 'S28TextAreaInput', '?S28TextAreaInput');
        hideScreen.triggerHandler('hide');
        showScreen.triggerHandler('show');
      }
    });
  }
  /**
   * Describe this function...
   */
  function s26HideObjects() {
    return new Promise(function(resolve, reject) {
      // Block#: .,GyK(@l5G-YqvJVWZ@I
      $('[obj-name="S26SingleGraphContainer"]').hide(); // Block#: DAe/(N[ZcnXcf8_rm@DQ
      $('[obj-name="S26DoubleGraphContainer"]').hide(); // Block#: IJne0_=+lH+YCxXq`2^i
      $('[obj-name="S26PieGraphContainer"]').hide(); // Block#: 1SRq_p;#%9mmg9E8A[=P
      $('[obj-name="SingleGraphXAxisLabel"]').hide(); // Block#: 3(]#TLsPg7-$E9EHP!Su
      $('[obj-name="SingleGraphYAxisLabel"]').hide(); // Block#: %nY#E,8n0!c,]i2MKZyd
      $('[obj-name="TopGraphXAxisLabel"]').hide(); // Block#: +@L2j2Pi!Gc;pNFL~-j~
      $('[obj-name="TopGraphYAxisLabel"]').hide(); // Block#: _2u)^3Kl!nkl~#D{L+Gc
      $('[obj-name="BottomGraphXAxisLabel"]').hide(); // Block#: -38n_nJmiHE7{n0Tt#b`
      $('[obj-name="BottomGraphYAxisLabel"]').hide(); // Block#: ^1@Eeo6zBy(z3tv?;ZNL
      $('[obj-name="B26Cancel"]').hide(); // Block#: C5Gn`0T+D~2+.Wze%3e(
      $('[obj-name="B26Back"]').hide(); // Block#: od)BZ9jyN^(es+VG!(Zj
      $('[obj-name="B26Next"]').hide();
    });
  }
  /**
   * Describe this function...
   */
  function S8HideObjects() {
    return new Promise(function(resolve, reject) {
      // Block#: cez}#HaQFd69:,=~|:iD
      $('[obj-name="B8Back"]').hide(); // Block#: 0v`4)|pwN5K!qICp9JX2
      $('[obj-name="B8Cancel"]').hide(); // Block#: =VA_aaH~4;:L@}V=A!XD
      $('[obj-name="B8Next"]').hide(); // Block#: z~!-:u5v3XKKQD.z:,ja
      $('[obj-name="C8Option1"]').hide(); // Block#: 6APG{=~-IBer8Gg8L-G?
      $('[obj-name="C8Option2"]').hide(); // Block#: _U8W9+6;25.Yroy=Qyir
      $('[obj-name="L8Title"]').hide(); // Block#: =.Pfq(vl+w),PZg-A,a=
      $('[obj-name="L8TextTitle"]').hide(); // Block#: b^8/++L;7A?m}x[SCHlC
      $('[obj-name="L8TextBody"]').hide(); // Block#: {E1A7P;8.)WwLsS^*6[E
      $('[obj-name="L8LearnMore"]').hide(); // Block#: GdnuJa42Dcm|q)tpp8S8
      $('[obj-name="I8Selected1"]').hide(); // Block#: LGC5UE*H5GU4w.aU/:[5
      $('[obj-name="I8Selected2"]').hide();
    });
  }
  /**
   * Describe this function...
   */
  function S4HideObjects() {
    return new Promise(function(resolve, reject) {
      // Block#: d-e6YX*g0M%CSF[nGDEf
      $('[obj-name="B4Back"]').hide(); // Block#: EjXYYfTVmvQ:{YW1ON0H
      $('[obj-name="B4Cancel"]').hide(); // Block#: `,ne;xJad}^xG0=l|h/R
      $('[obj-name="B4Next"]').hide(); // Block#: 5#:eBl:Y;ASpE@yv!X0U
      $('[obj-name="I4Icon"]').hide(); // Block#: Pw]-i{YIDl+EB$7oC]h,
      $('[obj-name="L4Title"]').hide(); // Block#: nGur#%Aix73TVwLe(JJc
      $('[obj-name="L4TextTitle"]').hide(); // Block#: qo`;TH^P]vJlaK:Ia9p!
      $('[obj-name="L4TextBody"]').hide(); // Block#: @Ro?2li5gYfvkE/7J[Z,
      $('[obj-name="L4LearnMore"]').hide();
    });
  }
  /**
   * Describe this function...
   */
  function S17EnableGestures() {
    return new Promise(function(resolve, reject) {
      // Block#: [uIkh$9%i@17z=KIbcT(
      $('[obj-name= "C17DueDate"]').unbind('click');
      $('[obj-name= "C17DueDate"]').bind('click', on_Container_C17DueDate_CLICK); // Block#: _jOI!{_5bV-hW.LUQ4o~
      $('[obj-name= "C17Babies"]').unbind('click');
      $('[obj-name= "C17Babies"]').bind('click', on_Container_C17Babies_CLICK); // Block#: *^wrPcwu74g:h1OVDMq3
      $('[obj-name= "C17Privacy"]').unbind('click');
      $('[obj-name= "C17Privacy"]').bind('click', on_Container_C17Privacy_CLICK); // Block#: 0Cf]C$HEZmyd6V3_{rDV
      $('[obj-name= "C17Consent"]').unbind('click');
      $('[obj-name= "C17Consent"]').bind('click', on_Container_C17Consent_CLICK); // Block#: G;TXR?A2oI-Fqd+9RT.]
      $('[obj-name= "C17Withdraw"]').unbind('click');
      $('[obj-name= "C17Withdraw"]').bind('click', on_Container_C17Withdraw_CLICK); // Block#: b*x{Xw4#d9MQ~S|?8iVz
      $('[obj-name= "C17Download"]').unbind('click');
      $('[obj-name= "C17Download"]').bind('click', on_Container_C17Download_CLICK);
    });
  }
  /**
   * Describe this function...
   */
  function setLanguage(languageCode) {}
  /**
   * Describe this function...
   */
  function S12HideObjects() {
    return new Promise(function(resolve, reject) {
      // Block#: dl1t*?QLaqUtQkCiOPyP
      $('[obj-name="L12Error"]').hide(); // Block#: gPJhVW`$:`lKuR5:a.FM
      $('[obj-name="L12Title"]').hide(); // Block#: F;%w$20_gQr|K.NuHRaE
      $('[obj-name="L12TextTitle"]').hide(); // Block#: FhMo/@a7e$;X.$YJOz@+
      $('[obj-name="L12TextBody"]').hide(); // Block#: M[Ur5JPhuz][kP@~6iQd
      $('[obj-name="B12Cancel"]').hide(); // Block#: ]+~pZbSSm1EoV|aWww(;
      $('[obj-name="B12Back"]').hide(); // Block#: ,[{m6|y$%|jm=V[~6!)#
      $('[obj-name="B12Next"]').hide(); // Block#: ^.G|H/ccr*]`-v^?PA8F
      $('[obj-name="C12Email"]').hide();
    });
  }
  /**
   * Describe this function...
   */
  function S13EnableGestures() {
    return new Promise(function(resolve, reject) {
      // Block#: aW{HlW~w)L+T,mlGKFS]
      $('[obj-name= "C13Activities"]').unbind('click');
      $('[obj-name= "C13Activities"]').bind('click', on_Container_C13Activities_CLICK); // Block#: @v/^rpXJ5R`1?uGTmR2k
      $('[obj-name= "C13Dashboard"]').unbind('click');
      $('[obj-name= "C13Dashboard"]').bind('click', on_Container_C13Dashboard_CLICK); // Block#: QiI10cg(idD~Ts*I0Mk8
      $('[obj-name= "C13Learn"]').unbind('click');
      $('[obj-name= "C13Learn"]').bind('click', on_Container_C13Learn_CLICK); // Block#: /~Ip5M-24Mw?($^,o77B
      $('[obj-name= "C13Profile"]').unbind('click');
      $('[obj-name= "C13Profile"]').bind('click', on_Container_C13Profile_CLICK); // Block#: Cw?Ae,{t]/l2ep4FKmGp
      $('[obj-name= "C13Blog"]').unbind('click');
      $('[obj-name= "C13Blog"]').bind('click', on_Container_C13Blog_CLICK);
    });
  }
  /**
   * Describe this function...
   */
  function PushFirebaseToken() {
    return new Promise(function(resolve, reject) {
      // Block#: gEMGa?3^O*:n7S,8Nyjl
      com.fc.JavaScriptDistLib.SnapClinical.startProcess(Object.assign(Object.assign({
          "forceStartNewInstance": false
        }, com.fc.JavaScriptDistLib.Dictionary.createDictionary(['processVariables'], [
          [com.fc.JavaScriptDistLib.Dictionary.createDictionary(['name', 'value'], ['deviceID', (com.fc.JavaScriptDistLib.FireBase.getUniqueDeviceId())]), com.fc.JavaScriptDistLib.Dictionary.createDictionary(['name', 'value'], ['token', (com.fc.JavaScriptDistLib.FireBase.getRefreshedToken())])]
        ])), {
          "processDefinitionKey": 'PowerMomPushFirebaseToken'
        }),
        function(process_data) {
          // Block#: QrK?Mjsdd$BC]abR+O2^
          console.log('Token Sent');
          if(_that.debugService && _that.debugService.active) {
            _that.debugService.traces.push('Token Sent');
            _that.debugService.printLog();
          }
        },
        function(error_data) {
          // Block#: {I{))9=yBcL|xqJsodQO
          console.log('Token Failed to Send');
          if(_that.debugService && _that.debugService.active) {
            _that.debugService.traces.push('Token Failed to Send');
            _that.debugService.printLog();
          }
        });
    });
  }
  /**
   * Describe this function...
   */
  function s28HideObjects() {
    return new Promise(function(resolve, reject) {
      // Block#: 7`^[S:E[z*O_FP9-[Pu;
      $('[obj-name="TA28Textarea"]').hide(); // Block#: xdKKYR1KeYf4Fz|Nlc:R
      $('[obj-name="B28Back"]').hide(); // Block#: 3]zPg)JUhS{c$(wb)ugJ
      $('[obj-name="B28Cancel"]').hide(); // Block#: a2O*RJG?T-;Q=-Af4AU3
      $('[obj-name="B28Next"]').hide(); // Block#: q.-KLIw=77xizK1bGt`J
      $('[obj-name="B28Skip"]').hide(); // Block#: bc1`J?F|@AHcPzPb6YvF
      $('[obj-name="L28Question"]').hide(); // Block#: XA_%Mc`:aXJ]E{)_`wr6
      $('[obj-name="L28Error"]').hide(); // Block#: caCF8i^E@p#i`@Z*Lx5f
      $('[obj-name="L28Title"]').hide();
    });
  }
  /**
   * Describe this function...
   */
  function findActiveFlows() {
    return new Promise(function(resolve, reject) {
      // Block#: rjN6L,uzg7BB}gbI8PN0
      _that.ActiveFlows = 0;
      // Block#: J^jV*.OmUiKMjxSfgni$
      if(com.fc.JavaScriptDistLib.TextLib.textComparison('intake', "EQUAL", getFormPropertyValue('phase'))) {
        // Block#: :^:|i+GEU2cV}s/kKb:v
        getActiveFlow('PowerMomHealthHistorySurvey').then(response => {;
          if(response.name === "data") {
            // Block#: h]`tk}[TNKDDY^Zv{L/-
            console.log('activeWeeklyForm');
            if(_that.debugService && _that.debugService.active) {
              _that.debugService.traces.push('activeWeeklyForm');
              _that.debugService.printLog();
            }
            // Block#: yffj3?5;w3_[bYcUU+|F
            console.log(response.data);
            if(_that.debugService && _that.debugService.active) {
              _that.debugService.traces.push(response.data);
              _that.debugService.printLog();
            }
            // Block#: {Uw{(W_kJU#y`,5C[nhl
            if(!!(com.fc.JavaScriptDistLib.TextLib.convertToText(response.data)).length) {
              // Block#: /zjJA.nQ8/;p#Dd?Y413
              _that.ActiveFlows = _that.ActiveFlows + 1;
              // Block#: |g.:ON$l;vecE_d*crby
              S13UpdateScreen().then(response => {;
              });
            }
          }
        });
        // Block#: BvwQ44~0JxgKX1vDG^mh
        getActiveFlow('PowerMomIntakeSurvey').then(response => {;
          if(response.name === "data") {
            // Block#: _Y*vv]B:-40.XZ)mL%n$
            console.log('activeWeeklyForm');
            if(_that.debugService && _that.debugService.active) {
              _that.debugService.traces.push('activeWeeklyForm');
              _that.debugService.printLog();
            }
            // Block#: BjPYXl2Nfanz$mP2lF/Y
            console.log(response.data);
            if(_that.debugService && _that.debugService.active) {
              _that.debugService.traces.push(response.data);
              _that.debugService.printLog();
            }
            // Block#: trh.3/Wx%zU(=FuU}3]7
            if(!!(com.fc.JavaScriptDistLib.TextLib.convertToText(response.data)).length) {
              // Block#: s:N~lnr3M3n}-A4Zd?3g
              _that.ActiveFlows = _that.ActiveFlows + 1;
              // Block#: {`EVNrlg~r}e~$]efTC9
              S13UpdateScreen().then(response => {;
              });
            }
          }
        });
      } else if(com.fc.JavaScriptDistLib.TextLib.textComparison('weekly', "EQUAL", getFormPropertyValue('phase'))) {
        // Block#: kiz}/}=|h35,|.F34/K)
        getActiveFlow('PowerMomWeeklySurvey').then(response => {;
          if(response.name === "data") {
            // Block#: @!@8Dc;+dt}me)kjUAN1
            console.log('activeWeeklyForm');
            if(_that.debugService && _that.debugService.active) {
              _that.debugService.traces.push('activeWeeklyForm');
              _that.debugService.printLog();
            }
            // Block#: IO3u6.i)l!+|a9gX}k#U
            console.log(response.data);
            if(_that.debugService && _that.debugService.active) {
              _that.debugService.traces.push(response.data);
              _that.debugService.printLog();
            }
            // Block#: ;Mp@zO0%lu_y8m43HiNt
            if(!!(com.fc.JavaScriptDistLib.TextLib.convertToText(response.data)).length) {
              // Block#: +o(z+=2_5w=w%zY.7@OM
              _that.ActiveFlows = _that.ActiveFlows + 1;
              // Block#: 50?4VeFjo.c1dx-UYrr9
              S13UpdateScreen().then(response => {;
              });
            }
          }
        });
      } else if(com.fc.JavaScriptDistLib.TextLib.textComparison('outcome', "EQUAL", getFormPropertyValue('phase'))) {
        // Block#: J9[:DKcoF%!G2fKxR_wP
        getActiveFlow('PowerMomOutcomeSurvey').then(response => {;
          if(response.name === "data") {
            // Block#: }vPj-Y{|3$9`61xCGk62
            console.log('activeWeeklyForm');
            if(_that.debugService && _that.debugService.active) {
              _that.debugService.traces.push('activeWeeklyForm');
              _that.debugService.printLog();
            }
            // Block#: Y,qvOWP|_@;/pcph$4tn
            console.log(response.data);
            if(_that.debugService && _that.debugService.active) {
              _that.debugService.traces.push(response.data);
              _that.debugService.printLog();
            }
            // Block#: 6pn57Y+|K.UC|n@y}($N
            if(!!(com.fc.JavaScriptDistLib.TextLib.convertToText(response.data)).length) {
              // Block#: n!.q9!]M?g2e_n3jXua+
              _that.ActiveFlows = _that.ActiveFlows + 1;
              // Block#: o,S-z.)/si6q_bLN~QNJ
              S13UpdateScreen().then(response => {;
              });
            }
          }
        });
      }
      // Block#: HU}Gmp1-WzyT^OOYOcPR
      S13UpdateScreen().then(response => {;
      });
    });
  }
  /**
   * Describe this function...
   */
  function getActiveFlow(processDefKey) {
    return new Promise(function(resolve, reject) {
      // Block#: _CSK`hMGnOu:h-Cik77`
      com.fc.JavaScriptDistLib.SnapClinical.fetch('/flow-api/process-api/query/historic-process-instances', "POST", JSON.stringify(com.fc.JavaScriptDistLib.Dictionary.createDictionary(['processDefinitionKey', 'finished', 'involvedUser'], [processDefKey, false, getProcessVariable('initiator')])),
        function(data) {
          // Block#: dh].12sufdbHSE?c`wEf
          if(!!(com.fc.JavaScriptDistLib.Dictionary.getDictValue(data, 'data')).length) {
            // Block#: DnzM?=K55+zcD4$eSPV$
            resolve({
              name: "data",
              data: com.fc.JavaScriptDistLib.Dictionary.createDictionary(['processInstanceId', 'processDefinitionId'], [(com.fc.JavaScriptDistLib.Dictionary.getDictValue((com.fc.JavaScriptDistLib.Dictionary.getDictValue(data, 'data'))[0], 'id')), (com.fc.JavaScriptDistLib.Dictionary.getDictValue((com.fc.JavaScriptDistLib.Dictionary.getDictValue(data, 'data'))[0], 'processDefinitionId'))])
            });
          } else {
            // Block#: x]TL5i(,h!:1SFa5]t3y
            resolve({
              name: "data",
              data: ''
            });
          }
        },
        function(error) {
        });
    });
  }
  /**
   * Describe this function...
   */
  function findActiveInstances() {
    return new Promise(function(resolve, reject) {
      // Block#: [0C~W6;Mpd961{fO}=)~
      com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("S19Activities", true); // Block#: uPD|mu6#jO;k6gZ[Cwg,
      _that.activityList = [];
      // Block#: dr`=[yUx^NroJ=$l%t%*
      com.fc.JavaScriptDistLib.ListView.saveTemplateCell('LV19Activities');
      com.fc.JavaScriptDistLib.ListView.removeAllCells('LV19Activities');
      on_listview_length_configured_LV19Activities();
      // Block#: Pu3T,JUCC2ne#8r:bsGu
      if(com.fc.JavaScriptDistLib.TextLib.textComparison('intake', "EQUAL", getFormPropertyValue('phase'))) {
        // Block#: /.d!E{*DmIu{T%+p~_|D
        getActiveFlow('PowerMomIntakeSurvey').then(response => {;
          if(response.name === "data") {
            // Block#: hXWWnsF=!L,-9[n7@VHu
            console.log('activeWeeklyForm');
            if(_that.debugService && _that.debugService.active) {
              _that.debugService.traces.push('activeWeeklyForm');
              _that.debugService.printLog();
            }
            // Block#: 3VtWfLNOuf]`GzFkL`M{
            console.log(response.data);
            if(_that.debugService && _that.debugService.active) {
              _that.debugService.traces.push(response.data);
              _that.debugService.printLog();
            }
            // Block#: Wh5RdFx.#C^5k99X^1vi
            if(!!(com.fc.JavaScriptDistLib.TextLib.convertToText(response.data)).length) {
              // Block#: =MuRJgocggY`qgU8T(Z?
              com.fc.JavaScriptDistLib.ListLibrary.listAdd(_that.activityList, com.fc.JavaScriptDistLib.Dictionary.createDictionary(['name', 'Active', 'label', 'body'], ['Intake Survey', true, 'Now', response.data]))
            } else {
              // Block#: :O:lRVBixP.(Lm-~9/=;
              com.fc.JavaScriptDistLib.ListLibrary.listAdd(_that.activityList, com.fc.JavaScriptDistLib.Dictionary.createDictionary(['name', 'Active', 'label'], ['Intake Survey', false, 'Completed']))
            }
            // Block#: Z}Y.7p([[`nu-5CL#uH*
            getActiveFlow('PowerMomHealthHistorySurvey').then(response => {;
              if(response.name === "data") {
                // Block#: ^QnbsnfS}bmtQd0Sz^K_
                console.log('activeWeeklyForm');
                if(_that.debugService && _that.debugService.active) {
                  _that.debugService.traces.push('activeWeeklyForm');
                  _that.debugService.printLog();
                }
                // Block#: R/?HaRh#X4a5u-k{RNi:
                console.log(response.data);
                if(_that.debugService && _that.debugService.active) {
                  _that.debugService.traces.push(response.data);
                  _that.debugService.printLog();
                }
                // Block#: mlGyUs9isF*a#Jq)1M|c
                if(!!(com.fc.JavaScriptDistLib.TextLib.convertToText(response.data)).length) {
                  // Block#: ;0mSS/9-v3k}%9cG%i5N
                  com.fc.JavaScriptDistLib.ListLibrary.listAdd(_that.activityList, com.fc.JavaScriptDistLib.Dictionary.createDictionary(['name', 'Active', 'label', 'body'], ['Health History', true, 'Now', response.data]))
                } else {
                  // Block#: Zb;+*muvh9m`PuWwXKTo
                  com.fc.JavaScriptDistLib.ListLibrary.listAdd(_that.activityList, com.fc.JavaScriptDistLib.Dictionary.createDictionary(['name', 'Active', 'label'], ['Health History', false, 'Completed']))
                }
                // Block#: 825u^(eW%edzV[#9FWgh
                com.fc.JavaScriptDistLib.ListView.saveTemplateCell('LV19Activities');
                com.fc.JavaScriptDistLib.ListView.removeAllCells('LV19Activities');
                on_listview_length_configured_LV19Activities();
                // Block#: $sv8$zSX_G!6~~8U2rd1
                com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("S19Activities", false);
              }
            });
          }
        });
      } else if(com.fc.JavaScriptDistLib.TextLib.textComparison('weekly', "EQUAL", getFormPropertyValue('phase'))) {
        // Block#: VSmWWsJX1WS4mGzBi)Ov
        getActiveFlow('PowerMomWeeklySurvey').then(response => {;
          if(response.name === "data") {
            // Block#: D8l)FTFst6r`|X(@x@WF
            console.log('activeWeeklyForm');
            if(_that.debugService && _that.debugService.active) {
              _that.debugService.traces.push('activeWeeklyForm');
              _that.debugService.printLog();
            }
            // Block#: Xq6^:y10Ya05+%kTPX4I
            console.log(response.data);
            if(_that.debugService && _that.debugService.active) {
              _that.debugService.traces.push(response.data);
              _that.debugService.printLog();
            }
            // Block#: $|kzCB;tEtQ`a,ROW3Et
            if(!!(com.fc.JavaScriptDistLib.TextLib.convertToText(response.data)).length) {
              // Block#: nfEkfqR5G3]Sylw|}:9I
              com.fc.JavaScriptDistLib.ListLibrary.listAdd(_that.activityList, com.fc.JavaScriptDistLib.Dictionary.createDictionary(['name', 'Active', 'label', 'body'], [String('Weekly Survey Week ') + String(getProcessVariable('pregnancyWeek')), true, 'Now', response.data]))
            } else {
              // Block#: n*BmlRG]CeRB%.?zfZ`n
              com.fc.JavaScriptDistLib.ListLibrary.listAdd(_that.activityList, com.fc.JavaScriptDistLib.Dictionary.createDictionary(['name', 'Active', 'label'], [String('Weekly Survey Week ') + String(getProcessVariable('pregnancyWeek')), false, 'Completed']))
            }
            // Block#: 57SUo$:T_nGDm7/Z1YHn
            com.fc.JavaScriptDistLib.ListView.saveTemplateCell('LV19Activities');
            com.fc.JavaScriptDistLib.ListView.removeAllCells('LV19Activities');
            on_listview_length_configured_LV19Activities();
            // Block#: F`u{ScPB(TVD|3Z-Iztd
            com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("S19Activities", false);
          }
        });
      } else if(com.fc.JavaScriptDistLib.TextLib.textComparison('outcome', "EQUAL", getFormPropertyValue('phase'))) {
        // Block#: sr93Q#PGve(dOiZ7kxDX
        getActiveFlow('PowerMomOutcomeSurvey').then(response => {;
          if(response.name === "data") {
            // Block#: RL`c7sLO,*VQ^uA~cm)j
            console.log('activeWeeklyForm');
            if(_that.debugService && _that.debugService.active) {
              _that.debugService.traces.push('activeWeeklyForm');
              _that.debugService.printLog();
            }
            // Block#: 3r`gr9{/KqOz0)h?N~8w
            console.log(response.data);
            if(_that.debugService && _that.debugService.active) {
              _that.debugService.traces.push(response.data);
              _that.debugService.printLog();
            }
            // Block#: umh.CI4:b%EL/@V8ES=p
            if(!!(com.fc.JavaScriptDistLib.TextLib.convertToText(response.data)).length) {
              // Block#: %,X!Q}+aviUSa7wLC~!}
              com.fc.JavaScriptDistLib.ListLibrary.listAdd(_that.activityList, com.fc.JavaScriptDistLib.Dictionary.createDictionary(['name', 'Active', 'label', 'body'], ['Outcomes', true, 'Now', response.data]))
            }
            // Block#: f%CM+e0(DwO(;+39TT2T
            com.fc.JavaScriptDistLib.ListView.saveTemplateCell('LV19Activities');
            com.fc.JavaScriptDistLib.ListView.removeAllCells('LV19Activities');
            on_listview_length_configured_LV19Activities();
            // Block#: HOLLaIUs#?@QIN3cLfuZ
            com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("S19Activities", false);
          }
        });
      } else {
        // Block#: 86DILLr!/XFCw/ivY)!l
        com.fc.JavaScriptDistLib.ListView.saveTemplateCell('LV19Activities');
        com.fc.JavaScriptDistLib.ListView.removeAllCells('LV19Activities');
        on_listview_length_configured_LV19Activities();
        // Block#: Dijj6!A!=EoM4q:zVn.M
        com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("S19Activities", false);
      }
    });
  }
  /**
   * Describe this function...
   */
  function saveProfileLanguage(languageCode) {}
  /**
   * Describe this function...
   */
  function S17UpdateScreen() {
    return new Promise(function(resolve, reject) {
      // Block#: jC!NFP=L]*w]G{-N|d_F
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("L17NameValue", (getProcessVariable('name'))); // Block#: [lZ7qaKW6bCD7V91tgsB
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("L17EmailValue", (getProcessVariable('email'))); // Block#: qfY]66`XzA~QWAJeqlXL
      if(!com.fc.JavaScriptDistLib.TextLib.textComparison(getProcessVariable('numberOfBabies'), "EQUAL", 'null')) {
        // Block#: %sm@FLCUdDF?37*|*EUa
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("L17BabiesValue", (getProcessVariable('numberOfBabies')));
      }
      // Block#: G*w{1jv_C#K{Cw0qy|ox
      if(!com.fc.JavaScriptDistLib.TextLib.textComparison(getProcessVariable('dueDate'), "EQUAL", 'null')) {
        // Block#: Kz!$7|cd^@ikW0jN6hV.
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("L17DueDateValue", ([com.fc.JavaScriptDistLib.TextLib.textSubstring(com.fc.JavaScriptDistLib.TextLib.convertToText(getProcessVariable('dueDate')), 5, 2), '/', com.fc.JavaScriptDistLib.TextLib.textSubstring(com.fc.JavaScriptDistLib.TextLib.convertToText(getProcessVariable('dueDate')), 8, 2), '/', com.fc.JavaScriptDistLib.TextLib.textSubstring(com.fc.JavaScriptDistLib.TextLib.convertToText(getProcessVariable('dueDate')), 0, 4)].join('')));
      }
    });
  }
  com.fc.JavaScriptDistLib.EventListeners.register("handleDoneButton", "MedicationListLib",
    /**
     * Describe this function...
     */
    function handleDoneButton() {
      return new Promise(function(resolve, reject) {
        // Block#: VQ[e(U|?:tcBgwesWrDQ
        if(!_that.buttonClicked) {
          // Block#: tV5d4Pr,[Z^Tr|69,(X_
          if(getOutcomeName('Done') != null) {
            // Block#: `(t;/|L_r9NFdxV|E1Gc
            _that.buttonClicked = true;
            // Block#: B~Q0,/ECJ;q+Kc4?XA+R
            com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("S24Medication", true); // Block#: de^WG]y`7R3pR8_NQO,}
            _that.keepListChanges = true;
            // Block#: cs,B5VIcQ|rQ(s2}d2iI
            _that.returnError = saveTaskAndNext(getOutcomeName('Done'));
          }
        }
      });
    }
  );
  /**
   * Describe this function...
   */
  function S4UpdateScreen() {
    return new Promise(function(resolve, reject) {
      // Block#: VxiCZH/avTGhzmC`L`3c
      S4HideObjects().then(response => {;
      });
      // Block#: 4i5mVC6^Asy5``h%rW.h
      _that.currentProperty = getOutcomeName('B4Back');
      // Block#: llmiE{tHe[3b),1~1GLU
      if(_that.currentProperty != null) {
        // Block#: JR8rI6Y3_QxF-ZDCd/(F
        $('[obj-name="B4Back"]').show();
      }
      // Block#: Rlj;O-ZkF~n.~Ics!0%R
      _that.currentProperty = getOutcomeName('L4LearnMore');
      // Block#: {@OOvJel!@yfJbyH`fs=
      if(_that.currentProperty != null) {
        // Block#: Q{_Fd=S)nQ+k]jr{5J9d
        $('[obj-name="L4LearnMore"]').show(); // Block#: VGi}E|X]^xtgjJ8F*Ci+
        $('[obj-name= "L4LearnMore"]').unbind('click');
        $('[obj-name= "L4LearnMore"]').bind('click', on_Label_L4LearnMore_CLICK);
      }
      // Block#: iM3Dk6,R*0FZujJ$WzNI
      _that.currentProperty = getOutcomeName('B4Cancel');
      // Block#: 2Vpm$~R6k!S/i=Pi3(!@
      if(_that.currentProperty != null) {
        // Block#: -A=trR,y`!34fl^ff5T:
        $('[obj-name="B4Cancel"]').show(); // Block#: 2t![zwWgsye]+r1fIPZ+
        com.fc.JavaScriptDistLib.Button.setProperty["Text"]("B4Cancel", _that.currentProperty);
      }
      // Block#: %*_,]PD5m?Fw#i@)eF5U
      _that.currentProperty = getOutcomeName('B4Next');
      // Block#: {Hg,5g]7cq7d.pmk^gCA
      if(_that.currentProperty != null) {
        // Block#: 2[3^4GrMlIDN_:5;sn$o
        $('[obj-name="B4Next"]').show(); // Block#: YI)?;X@D3-SYn7_ZHhGI
        com.fc.JavaScriptDistLib.Button.setProperty["Text"]("B4Next", _that.currentProperty);
      }
      // Block#: {=Zpn}*DQdDg4T=LP!:Q
      _that.currentProperty = getFormProperty('icon');
      // Block#: WWoBvu_8RM`.AN%wmjjY
      if(_that.currentProperty != null) {
        // Block#: 4]Jp85R7(z]O%LiNZvll
        $('[obj-name="I4Icon"]').show(); // Block#: YCp{P6sVBD[rz;(1uQAO
        if(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(_that.flowImages, _that.currentProperty)) {
          // Block#: [KS=Nk6)8G|Y;PE8eGUU
          com.fc.JavaScriptDistLib.Image.setProperty["Image"]("I4Icon", (com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.flowImages, _that.currentProperty)));
        }
      }
      // Block#: dcEi*Qz$^pJ[rmnvI0Ob
      _that.currentProperty = getFormProperty('textTitle');
      // Block#: N4OU^Th#!nd-~/bL(GHL
      if(_that.currentProperty != null) {
        // Block#: pRQ@hRnLYi-z/X}N/F#O
        $('[obj-name="L4TextTitle"]').show(); // Block#: FFimKtj7^qnR)SLxK9!~
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("L4TextTitle", _that.currentProperty);
      }
      // Block#: Lm;kCRLApASDAToI7*kH
      _that.currentProperty = getFormProperty('textBody');
      // Block#: ;|P5GnfW]V._{JQ{44w_
      if(_that.currentProperty != null) {
        // Block#: [@H/6$I_Kq~1`u0]]jLo
        $('[obj-name="L4TextBody"]').show(); // Block#: a{oh%8DaS-jT`sHKt03l
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("L4TextBody", _that.currentProperty);
      }
      // Block#: A)r~-B@]d2;p4a?F^Eg#
      _that.currentProperty = getFormProperty('title');
      // Block#: -{zRO.6fEa5IL(GSsqjf
      if(_that.currentProperty != null) {
        // Block#: lym)WtJtvK]_GXBy6Fx/
        $('[obj-name="L4Title"]').show(); // Block#: NLb?v^e,+%fg:%=jvs/h
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("L4Title", _that.currentProperty);
      }
    });
  }
  /**
   * Describe this function...
   */
  function S22HideObjects() {
    return new Promise(function(resolve, reject) {
      // Block#: wDAmh[nV)|vwX9/oJ46/
      $('[obj-name="B22Next"]').hide(); // Block#: s}:,_(n~7+my}V%ZSV9;
      $('[obj-name="B22Back"]').hide(); // Block#: 9#,#Qgh5C~D(U=u$(Qmp
      $('[obj-name="B22Cancel"]').hide(); // Block#: S#y#+it`Q^5w_p!i`L)2
      $('[obj-name="B22Skip"]').hide(); // Block#: $pxQ9$X4x:~khe(3:h25
      $('[obj-name="L22Question"]').hide(); // Block#: r9Vaob=QB!1YyAWRGyZy
      $('[obj-name="L22Error"]').hide(); // Block#: Dlc(jSkNrgEMcxTbB|wi
      $('[obj-name="L22Title"]').hide(); // Block#: gk,Qm|sNsd|VQ#g8k+*z
      $('[obj-name="T22Text2"]').hide(); // Block#: B]A[PRXy).*,R|@CO[0e
      $('[obj-name="T22Text1"]').hide();
    });
  }
  com.fc.JavaScriptDistLib.EventListeners.register("handleCancelButton", "MedicationListLib",
    /**
     * Describe this function...
     */
    function handleCancelButton() {
      return new Promise(function(resolve, reject) {
        // Block#: H$?,|y~w).~JK.*qRjq,
        if(!_that.buttonClicked) {
          // Block#: G`2*E9WDLnEjE6^l_JE[
          if(getOutcomeName('Cancel') != null) {
            // Block#: 3m|z|Vh%DS@R,KD4K*6p
            _that.buttonClicked = true;
            // Block#: 5DCVLA_{PS,_L5^sF7Eo
            com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("S24Medication", true); // Block#: 27}cxL?W9+[j^-wY%Je)
            _that.keepListChanges = false;
            // Block#: ivZCoFjd4sDSk~4({$,@
            _that.returnError = saveTaskAndNext(getOutcomeName('Cancel'));
          }
        }
      });
    }
  );
  /**
   * Describe this function...
   */
  function S13UpdateScreen() {
    return new Promise(function(resolve, reject) {
      // Block#: j402F~8?h%k!C0;_r=hI
      if(com.fc.JavaScriptDistLib.TextLib.textComparison(_that.currentScreen, "EQUAL", 'S13Home')) {
        // Block#: E,+/huMnPXyaxlt8_PDO
        _that.currentProperty = getFormProperty('icon');
        // Block#: GHASI4;8~D?Uzx3^%ie?
        if(_that.currentProperty != null) {
          // Block#: 8?2gi]lsvSeCT|m!]2k^
          if(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(_that.flowImages, _that.currentProperty)) {
            // Block#: gr0!`99:~vq*[oxA}^ny
            $('[obj-name="I13Icon"]').show(); // Block#: A[7=kML%d.kx|tj(iB}L
            com.fc.JavaScriptDistLib.Image.setProperty["Image"]("I13Icon", (com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.flowImages, _that.currentProperty)));
          }
        }
        // Block#: gWj8INHl=YL70?{h6m];
        _that.currentProperty = getFormProperty('title');
        // Block#: tA~{yz;78S,b%K$;;N#t
        if(_that.currentProperty != null) {
          // Block#: F5^e,iWimJ][NdePF8@f
          com.fc.JavaScriptDistLib.Label.setProperty["Text"]("L13Title", _that.currentProperty);
        }
        // Block#: 0f8T]0U-oo:b1$-Y;Lju
        if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(_that.ActiveFlows, "GT", 0)) {
          // Block#: p[T4!^v0D[v;yd/fieXD
          com.fc.JavaScriptDistLib.Label.setProperty["Text"]("L13SurveyNum", (com.fc.JavaScriptDistLib.TextLib.convertToText(_that.ActiveFlows))); // Block#: kzQKL:Yz]0Hu#}Ye*3.|
          $('[obj-name="L13SurveyNum"]').show(); // Block#: Lu1e{2Yz!0^XhlHL12t4
          $('[obj-name="I13SurveyNum"]').show();
        } else {
          // Block#: pEX!6vAsjru[5%zEtC6N
          $('[obj-name="L13SurveyNum"]').hide(); // Block#: a?]IImURNUkn^1FpByw1
          $('[obj-name="I13SurveyNum"]').hide();
        }
      }
    });
  }
  /**
   * Describe this function...
   */
  function S8UpdateScreen() {
    return new Promise(function(resolve, reject) {
      // Block#: |gdo:FrV%7sOlr~3-DrB
      S8HideObjects().then(response => {;
      });
      // Block#: L{Q3kva{Fwp`F*!8#_7C
      com.fc.JavaScriptDistLib.Container.setProperty["Background color"]("C8Option1", (com.fc.JavaScriptDistLib.ColourLibrary.getColourFromText('#FFFFFF'))); // Block#: =D*6ZoAyn{mVu!TImGva
      com.fc.JavaScriptDistLib.Container.setProperty["Background color"]("C8Option2", (com.fc.JavaScriptDistLib.ColourLibrary.getColourFromText('#FFFFFF'))); // Block#: a~.IhNFm4Da_um`Y)sku
      $('[obj-name= "C8Option1"]').unbind('click');
      $('[obj-name= "C8Option1"]').bind('click', on_Container_C8Option1_CLICK); // Block#: ;z`h[`yTcjS9Cr$pvsB9
      $('[obj-name= "C8Option2"]').unbind('click');
      $('[obj-name= "C8Option2"]').bind('click', on_Container_C8Option2_CLICK); // Block#: 0W)3%2c|F.(2jHa8:O6Q
      com.fc.JavaScriptDistLib.Button.setProperty["Alpha"]("B8Next", 20); // Block#: Zkf!JZDQ{l5P{Z8`WBT}
      _that.currentProperty = getOutcomeName('B8Back');
      // Block#: p(Mp0o5!;^)V1re-@Qy1
      if(_that.currentProperty != null) {
        // Block#: owE=#`q3^:{aobfu^;4V
        $('[obj-name="B8Back"]').show();
      }
      // Block#: BK)2lXDF%CD~awOSByY|
      _that.currentProperty = getOutcomeName('B8Cancel');
      // Block#: w@V-`@WR0N*8,X{$%9c1
      if(_that.currentProperty != null) {
        // Block#: hL~7vkfw(^E:]UW:W4T*
        $('[obj-name="B8Cancel"]').show(); // Block#: %Wvy=yv7n*(ILUpoHovB
        com.fc.JavaScriptDistLib.Button.setProperty["Text"]("B8Cancel", _that.currentProperty);
      }
      // Block#: :b9N]JJrBOk3E85ae;JZ
      _that.currentProperty = getOutcomeName('B8LearnMore');
      // Block#: r_d)WjHz/P}yg,C0YY3#
      console.log(String('B8LearnMore: ') + String(_that.currentProperty));
      if(_that.debugService && _that.debugService.active) {
        _that.debugService.traces.push(String('B8LearnMore: ') + String(_that.currentProperty));
        _that.debugService.printLog();
      }
      // Block#: uOo}9uoT1LID+uO,uWz{
      if(_that.currentProperty != null) {
        // Block#: WOB/!d5:o#txl-$tCX0b
        $('[obj-name="L8LearnMore"]').show(); // Block#: T#Z$EO91B3(C0g{=r{vn
        com.fc.JavaScriptDistLib.Label.setProperty["Alpha"]("L8LearnMore", 100); // Block#: mmL3i4PJm1mUA)NVts60
        $('[obj-name= "L8LearnMore"]').unbind('click');
        $('[obj-name= "L8LearnMore"]').bind('click', on_Label_L8LearnMore_CLICK);
      }
      // Block#: =*%n@.U)qAUBU@U/TCbl
      _that.currentProperty = getOutcomeName('B8Next');
      // Block#: :U5@YD5LmFhSiviKV|u!
      if(_that.currentProperty != null) {
        // Block#: aC|n`GTq#XkKOz`SN0jj
        $('[obj-name="B8Next"]').show(); // Block#: E57vDPR}9sbQav1+_)pF
        com.fc.JavaScriptDistLib.Button.setProperty["Text"]("B8Next", _that.currentProperty);
      }
      // Block#: N#558dx.|8CZ=gt(ZZAz
      _that.currentProperty = getFormProperty('title');
      // Block#: /NZkuL%~L1mn^*r`4Kwk
      if(_that.currentProperty != null) {
        // Block#: ,bz*yWe6EZl4aDaCyu5,
        $('[obj-name="L8Title"]').show(); // Block#: Rb/w^J%!JuA_pA5x#rkW
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("L8Title", _that.currentProperty);
      }
      // Block#: u?}n|Fe|4oz$$Z{hwepl
      _that.currentProperty = getFormProperty('textTitle');
      // Block#: P,VDto,me8N][|X@(YqR
      if(_that.currentProperty != null) {
        // Block#: 9a#C$KzL!hYSVh,u#0l1
        $('[obj-name="L8TextTitle"]').show(); // Block#: l,I14WbuqN6IH9EZ}DKt
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("L8TextTitle", _that.currentProperty);
      }
      // Block#: ?78s9-CA8Nlg/PGJpKL)
      _that.currentProperty = getFormPropertyValue('textBody');
      // Block#: 3;S=[b[+Gi^vjSQmz`(^
      if(_that.currentProperty == null) {
        // Block#: 5cAKC1AZ611IY{g$%Vo+
        _that.currentProperty = getFormProperty('textBody');
      }
      // Block#: i5c6Wdsj-IB?szdC#i-*
      if(_that.currentProperty != null) {
        // Block#: m7*sS1RWCBi^ftDmW%b2
        $('[obj-name="L8TextBody"]').show(); // Block#: Da4[Y^j{v[s3F`YND(};
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("L8TextBody", _that.currentProperty);
      }
      // Block#: {#1B/[*b}(pGqJDvd?/D
      getRadioButtonOptions().then(response => {;
      });
      // Block#: h(:_[#qfmbR#Vl4~p97/
      if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(_that.checkBoxList.length, "EQ", 2)) {
        // Block#: wFC%iF%vo/NLGrjGoI%n
        $('[obj-name="C8Option1"]').show(); // Block#: Qym.k_Bxt0f8$?s}1CJ4
        $('[obj-name="C8Option2"]').show(); // Block#: OOtL[(SJ3K8@!I;~g[gV
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("L8Option1", (com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.checkBoxList[0], 'name'))); // Block#: _bxHz#HDO}$zX3qWrjKn
        $('[obj-name="I8Selected1"]').show(); // Block#: [MR!djDRFV4Ffr2EI7^3
        com.fc.JavaScriptDistLib.Image.setProperty["Image"]("I8Selected1", (com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("./img/empty.png"))); // Block#: ;qe~4~exV5q{idrBg/^f
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("L8Option2", (com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.checkBoxList.slice(-1)[0], 'name'))); // Block#: ?yj~!*4C-fx25H`:=UI;
        $('[obj-name="I8Selected2"]').show(); // Block#: [.Up[x=ysk[Y2HeDk2[G
        com.fc.JavaScriptDistLib.Image.setProperty["Image"]("I8Selected2", (com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("./img/empty.png")));
      }
    });
  }
  /**
   * Describe this function...
   */
  function S12UpdateScreen() {
    return new Promise(function(resolve, reject) {
      // Block#: S`@{_lhE^0O]G/Qk_4+o
      S12HideObjects().then(response => {;
      });
      // Block#: 5-%KPBAouq.n:yzpA+SA
      if(_that.isLoggingIn) {
        // Block#: eI^;8:;ZGz:`CrG)fI-@
        $('[obj-name="B12Cancel"]').show(); // Block#: J5ua8(9$XJ^PT-DJ$-Qn
        $('[obj-name="B12Next"]').show(); // Block#: JV/?ISF0Jf~,2D5jfTBl
        com.fc.JavaScriptDistLib.Button.setProperty["Text"]("B12Next", 'Next'); // Block#: 2a;Z*M)%8p@7Z}gRId:b
        $('[obj-name="L12TextTitle"]').show(); // Block#: vhC!gpv]kefYef$/}iN+
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("L12TextTitle", 'Sign In'); // Block#: GH-^![SWJN0*}sxCY~w8
        $('[obj-name="L12TextBody"]').show(); // Block#: m!.ikSf?Y6]iuiqRuUWa
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("L12TextBody", 'Please enter the email address you signed up with.'); // Block#: e|~uDf/@#RgE:EuEctM=
        $('[obj-name="C12Email"]').show();
      } else {
        // Block#: WTe`o0T2Uq}0m$i#R4bf
        _that.currentProperty = getOutcomeName('B12Back');
        // Block#: =CrTcmg_p$A}{8$LqH~E
        if(_that.currentProperty != null) {
          // Block#: X%E0ity-j4s=f@LhERN=
          $('[obj-name="B12Back"]').show();
        }
        // Block#: Xtbo,kKehJAL/}A=QE`m
        _that.currentProperty = getOutcomeName('B12Cancel');
        // Block#: g^]W4D*npGodaa$~3(MD
        if(_that.currentProperty != null) {
          // Block#: LgU^:A=Ztw@f++F@l}Hz
          $('[obj-name="B12Cancel"]').show(); // Block#: 4{wbf)9TR[[EbjmPS[zG
          com.fc.JavaScriptDistLib.Button.setProperty["Text"]("B12Cancel", _that.currentProperty);
        }
        // Block#: xQ#,o{Z%mg4yPgx:CBj.
        _that.currentProperty = getOutcomeName('B12Next');
        // Block#: =$l9}s%{gapb5VX3br/e
        if(_that.currentProperty != null) {
          // Block#: WE$8b4Qe[K=2ST/ZeU`]
          $('[obj-name="B12Next"]').show(); // Block#: ?)h1R_o2^ZCbWOWzQgjK
          com.fc.JavaScriptDistLib.Button.setProperty["Text"]("B12Next", _that.currentProperty);
        }
        // Block#: }{{t%sXv%10|3}}g3oIw
        _that.currentProperty = getFormProperty('textTitle');
        // Block#: w,EE@X}bCW0K+Picb.{i
        if(_that.currentProperty != null) {
          // Block#: jDa!P5~j(VS[V4l/uBAL
          $('[obj-name="L12TextTitle"]').show(); // Block#: yv8o^ybwYd~H_FT[6%yI
          com.fc.JavaScriptDistLib.Label.setProperty["Text"]("L12TextTitle", _that.currentProperty);
        }
        // Block#: 2flBKpWJ|3B^pJB]YXW_
        _that.currentProperty = getFormProperty('textBody');
        // Block#: ,v026u/U]Gw[%6guWJx_
        if(_that.currentProperty != null) {
          // Block#: BY;W`Z|u/:-U[oj#wFtD
          $('[obj-name="L12TextBody"]').show(); // Block#: Qk3pz^}3g^f[TTZgm)#1
          com.fc.JavaScriptDistLib.Label.setProperty["Text"]("L12TextBody", _that.currentProperty);
        }
        // Block#: E2yo1In2lrEub`8I)b=g
        _that.currentProperty = getFormProperty('title');
        // Block#: ~4Ywim*lQ.U5tEThs?9[
        if(_that.currentProperty != null) {
          // Block#: ?c-{GCea~`ngVML997sQ
          $('[obj-name="L12Title"]').show(); // Block#: 5HQM*m[JG!ax(/-pQx~#
          com.fc.JavaScriptDistLib.Label.setProperty["Text"]("L12Title", _that.currentProperty);
        }
        // Block#: eaUT_~X01m$ty=@aq!DN
        if(doesFieldExistInMap('C12Email')) {
          // Block#: Yo)+1QVrA)pI^D@;0lWz
          $('[obj-name="C12Email"]').show();
        }
        // Block#: pyb$$3le,p;IPYMRi8@1
        _that.currentProperty = getProcessVariable('showError');
        // Block#: +N@E|X#hUpNRrFT@l+TP
        if(_that.currentProperty != null) {
          // Block#: 1_aM}^!aIiz4R4__~NQJ
          if(_that.currentProperty) {
            // Block#: 2C;}8{H4AcKS64|S[_@7
            $('[obj-name="L12Error"]').show(); // Block#: KO=k-B,?Ae0}gL]B@L.T
            com.fc.JavaScriptDistLib.Label.setProperty["Text"]("L12Error", 'Email already taken'); // Block#: vD^D.WDknz-gLV}6T/1P
            com.fc.JavaScriptDistLib.Textbox.setProperty["Text"]("T12Email", (getFormField('C12Email', 'value')));
          }
        }
      }
      // Block#: 1=oAJ8P%D-f3,vZUQ,c5
      _that.checkBoxValue = false;
      // Block#: *oIY3kj(k;fqxF3$9Bx2
      B12NextUpdate().then(response => {;
      });
    });
  }
  /**
   * Describe this function...
   */
  function updateWrongLogInAttempts() {}
  /**
   * Describe this function...
   */
  function B11NextUpdate() {
    return new Promise(function(resolve, reject) {
      // Block#: lUDT.L4vu9ynv@JZVPV}
      if(_that.selectionMade) {
        // Block#: z/dx#iIK+.0$uRFT0gPl
        com.fc.JavaScriptDistLib.Button.setProperty["Background color"]("B11Next", (com.fc.JavaScriptDistLib.ColourLibrary.getColourFromText('#dd198e'))); // Block#: N3Eli,Q=+(A$V[^/~I7]
        com.fc.JavaScriptDistLib.Button.setProperty["Border color"]("B11Next", (com.fc.JavaScriptDistLib.ColourLibrary.getColourFromText('#dd198e')));
      } else {
        // Block#: JK{}^mtWyw0BBGP#OM=n
        com.fc.JavaScriptDistLib.Button.setProperty["Background color"]("B11Next", (com.fc.JavaScriptDistLib.ColourLibrary.getColourFromText('#f4badd'))); // Block#: q5V4:V|/G/U|,5FG_!Z[
        com.fc.JavaScriptDistLib.Button.setProperty["Border color"]("B11Next", (com.fc.JavaScriptDistLib.ColourLibrary.getColourFromText('#f4badd')));
      }
    });
  }
  /**
   * Describe this function...
   */
  function s28UpdateScreen() {
    return new Promise(function(resolve, reject) {
      // Block#: I%!uls.f4qj|e;2xkk#!
      s28HideObjects().then(response => {;
      });
      // Block#: W*Eo[`KQ(L#_C9L$]8V6
      _that.currentProperty = getOutcomeName('B28Back');
      // Block#: Y!L*Y$)52))_WGA,Aos/
      if(_that.currentProperty != null) {
        // Block#: u-0n4Da0:!rq,:b-d.~3
        $('[obj-name="B28Back"]').show();
      }
      // Block#: Y:wg|*d^4DSPtCp,+S1|
      _that.currentProperty = getOutcomeName('B28Cancel');
      // Block#: ;ESGwux(`$=XN?aqMA;X
      if(_that.currentProperty != null) {
        // Block#: 2+*RuA,3_u/i=/86;U0(
        $('[obj-name="B28Cancel"]').show(); // Block#: dS{0*8QXIJ{8/?MC5rr9
        com.fc.JavaScriptDistLib.Button.setProperty["Text"]("B28Cancel", _that.currentProperty);
      }
      // Block#: _b7564c5~o}`OhRM;+}3
      _that.currentProperty = getOutcomeName('B28Next');
      // Block#: )Do+1EC35t?lc4I`SvzS
      if(_that.currentProperty != null) {
        // Block#: Sm|J3en_C3Z]k^,jNU*_
        $('[obj-name="B28Next"]').show(); // Block#: FG#NVf.#+[9P2Bx6Cu{6
        com.fc.JavaScriptDistLib.Button.setProperty["Text"]("B28Next", _that.currentProperty);
      }
      // Block#: W-(2#~p_T5`qA0Fsm{cu
      _that.currentProperty = getOutcomeName('B28Skip');
      // Block#: ,n3EhK.YEAcHAj8]O)7g
      if(_that.currentProperty != null) {
        // Block#: :!lK`@]9xhP.^0tOSY4F
        $('[obj-name="B28Skip"]').show(); // Block#: oD2jLFNlCP#8HzH.xVc.
        com.fc.JavaScriptDistLib.Button.setProperty["Text"]("B28Skip", _that.currentProperty);
      }
      // Block#: _F];n[um3#l%PIXPGw9b
      _that.currentProperty = getFormProperty('title');
      // Block#: 6)^,yN).wjkb[ciY?m;e
      if(_that.currentProperty != null) {
        // Block#: C(SW@djXm|RZjEDO]SQg
        $('[obj-name="L28Title"]').show(); // Block#: #Xq#X`T2ygbp-[g_W+C4
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("L28Title", _that.currentProperty);
      }
      // Block#: !x7`*XS`fccCwG2$QZwY
      _that.inputType = getFormField('answer1', 'type');
      // Block#: lw{.%)x-#QRwP!)}w.Ug
      if(_that.inputType != null) {
        // Block#: TdT~1OfNT35eHj/H]xu:
        if(com.fc.JavaScriptDistLib.TextLib.textComparison(_that.inputType, "EQUAL", 'boolean')) {
          // Block#: wA{x=c{M_Fd7i~f!y?cq
          _that.currentProperty = getFormProperty('question');
          // Block#: `A,.zLl:Z1q%O(Wz3(z~
          if(_that.currentProperty != null) {
            // Block#: z9:dr!h^UFOBFv10zpaX
            $('[obj-name="L28Question"]').show(); // Block#: m{ly7VCzSf8lTh=)%El$
            com.fc.JavaScriptDistLib.Label.setProperty["Text"]("L28Question", _that.currentProperty);
          }
        } else {
          // Block#: @+/k-M|AHo#TWTt{ggr8
          $('[obj-name="L28Question"]').show(); // Block#: #IZzG~!!f,Xq,e6:XM$i
          com.fc.JavaScriptDistLib.Label.setProperty["Text"]("L28Question", (getFormField('answer1', 'name'))); // Block#: ]|p8xC{SfO47w4.uT*B_
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(_that.inputType, "EQUAL", 'text') ||
            com.fc.JavaScriptDistLib.TextLib.textComparison(_that.inputType, "EQUAL", 'password')
          ) {
            // Block#: yDE$Q__Hl$o}7(5yx#F]
            $('[obj-name="TA28Textarea"]').show(); // Block#: y#iNK,P`lFNKGnrRl1yt
            com.fc.JavaScriptDistLib.Textarea.setProperty["Text"]("TA28Textarea", ''); // Block#: TDa$^A!p_3Ef*1U_Ae^S
            _that.selectionMade = false;
          }
        }
      }
      // Block#: phVo]}R,;ieXCXcDb,@_
      if(com.fc.JavaScriptDistLib.TextLib.textComparison(_that.inputType, "EQUAL", 'text') ||
        com.fc.JavaScriptDistLib.TextLib.textComparison(_that.inputType, "EQUAL", 'integer')
      ) {
        // Block#: -at5x#5@%,BAp~*7e-b:
        _that.currentProperty = getFormField('answer1', 'value');
        // Block#: Y.+vM)QknU[c,r/+GY_r
        if(!(_that.currentProperty == null)) {
          // Block#: @c+MdOO*$tdkGkyIwx~s
          $('[obj-name="TA28Textarea"]').show(); // Block#: uxJ(zQH)eWTpW@-yayaW
          com.fc.JavaScriptDistLib.Textarea.setProperty["Text"]("TA28Textarea", _that.currentProperty); // Block#: r6W/CupLICirFb4eH.my
          _that.selectionMade = true;
        }
      }
      // Block#: x_wiH(Nu*}RiH4ki^.,t
      b28NextUpdate().then(response => {;
      });
    });
  }
  /**
   * Describe this function...
   */
  function setCheckboxValues() {
    return new Promise(function(resolve, reject) {
      // Block#: ~VQssIP=3=lSozrBvUzC
      _that.localFormData = (com.fc.JavaScriptDistLib.JSON.parseJSONDataForPath(_that.currentTask, '$.formData'))[0];
      // Block#: d4Pir(10:?,.qM#gj6XR
      _that.localFormFields = (com.fc.JavaScriptDistLib.JSON.parseJSONDataForPath(_that.currentTask, '$.formData.fields[*]'));
      // Block#: bj/I7MK=YufeyuTu#!Nv
      var item_list4 = _that.checkBoxList;
      for(var item_index4 in item_list4) {
        item = item_list4[item_index4];
        // Block#: YP*D89U;ved_5#9D1I!1
        if(com.fc.JavaScriptDistLib.TextLib.textComparison('TRUE', "EQUAL", com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'value'))) {
          // Block#: NbmpUoWdk@F.Di.]j+$2
          _that.localVar1 = true;
        } else {
          // Block#: `%:OzZepYa!1S`$-Znny
          _that.localVar1 = false;
        }
        // Block#: }ut?@{NP{r=uz;`x[z_J
        setFormFieldById((com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'id')), 'value', _that.localVar1).then(response => {;
        });
      }
      // Block#: Y2~L@rJcBHa*:z}T`}la
      com.fc.JavaScriptDistLib.Dictionary.setDictValue(_that.localFormData, 'fields', _that.localFormFields);
      // Block#: rAeD,AmzwG6mx-=z}k6h
      com.fc.JavaScriptDistLib.Dictionary.setDictValue(_that.currentTask, 'formData', _that.localFormData);
    });
  }
  /**
   * Describe this function...
   */
  function DisplayLogIn() {
    return new Promise(function(resolve, reject) {
      // Block#: u|;o-%Dn]Rm0@%lJ,mM}
      _that.isLoggingIn = true;
      // Block#: zP3}*mY`V4Y*eo^6=`df
      _that.S12FirstDisplay = true;
      // Block#: ~E%ImPUL?ue[Q5.x0iQh
      let hideScreen = $('.HTML5-deploy-wrapper .Screen:visible');
      //Close all dialogs
      com.fc.JavaScriptDistLib.Screen.closeDialogs();
      hideScreen.hide();
      let showScreen = $('[obj-name="S12Email"]');
      showScreen.show();
      history.pushState({
        'view': 'S12Email'
      }, 'S12Email', '?S12Email');
      hideScreen.triggerHandler('hide');
      showScreen.triggerHandler('show');
    });
  }
  /**
   * Describe this function...
   */
  function hideLoaders() {
    return new Promise(function(resolve, reject) {
      // Block#: h-[NYhghWAasvamb;sY|
      if(com.fc.JavaScriptDistLib.TextLib.textComparison(_that.currentTemplate, "EQUAL", 'S2Qualification')) {
        // Block#: J3=a7JpKcB:$Xizch%n9
        com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("S2Qualification", false);
      } else if(com.fc.JavaScriptDistLib.TextLib.textComparison(_that.currentTemplate, "EQUAL", 'S4BasicPurple')) {
        // Block#: lGjcuS9RA1p2%G|X1%fc
        com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("S4BasicPurple", false);
      } else if(com.fc.JavaScriptDistLib.TextLib.textComparison(_that.currentTemplate, "EQUAL", 'S12Email')) {
        // Block#: nZZ:%),QguoX~ba7+#TU
        com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("S12Email", false);
      } else if(com.fc.JavaScriptDistLib.TextLib.textComparison(_that.currentTemplate, "EQUAL", 'S13Home')) {
        // Block#: dA:[f?$?:,Ur[Ya.H1ro
        com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("S13Home", false);
      } else if(com.fc.JavaScriptDistLib.TextLib.textComparison(_that.currentTemplate, "EQUAL", 'S21Pin')) {
        // Block#: @MC4IMMce7~)E/3Y9|9S
        com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("S21Pin", false);
      } else if(com.fc.JavaScriptDistLib.TextLib.textComparison(_that.currentTemplate, "EQUAL", 'S24Medication')) {
        // Block#: rEE8u(n,taIXUyb^{YW(
        com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("S24Medication", false);
      } else if(com.fc.JavaScriptDistLib.TextLib.textComparison(_that.currentTemplate, "EQUAL", 'S25AddMedication')) {
        // Block#: {LVCsv@EU.C4b[ohVP8~
        com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("S25AddMedication", false);
      }
    });
  }
  /**
   * Describe this function...
   */
  function S9HideObjects() {
    return new Promise(function(resolve, reject) {
      // Block#: V1oEPK}yM9m=}z/4,@[i
      $('[obj-name="B9Link"]').hide(); // Block#: 9$(Kjsc:[tR2%ctg$5!f
      $('[obj-name="B9Back"]').hide(); // Block#: N)p]Q.%@%Q3)Gk]a^(#S
      $('[obj-name="B9Cancel"]').hide(); // Block#: ^zu^H40~pMCknr2jKgY+
      $('[obj-name="C9FooterButtons"]').hide(); // Block#: |Dvg1a:KJD~9EKz3O_Vw
      $('[obj-name="L9Title"]').hide(); // Block#: WgBUhQ=OxywFpuvlU*=w
      $('[obj-name="L9InfoText"]').hide();
    });
  }
  /**
   * Describe this function...
   */
  function S22UpdateScreen() {
    return new Promise(function(resolve, reject) {
      // Block#: `oX?q2YRs`/EZ%%nQwb5
      S22HideObjects().then(response => {;
      });
      // Block#: Y1OEDN!a;(ify;geEmro
      _that.currentProperty = getOutcomeName('B22Back');
      // Block#: .|BBzh~b!?L;xQ(qSE{w
      if(_that.currentProperty != null) {
        // Block#: c`@i;GuIA.SVoyU1.9YI
        $('[obj-name="B22Back"]').show();
      }
      // Block#: I_VDc[x`)f)k)YmT]]BK
      _that.currentProperty = getOutcomeName('B22Cancel');
      // Block#: Ssz$P$j%Cg!ZH,,nF/;h
      if(_that.currentProperty != null) {
        // Block#: kQ:g8_wnfAXe.~V?.5/[
        $('[obj-name="B22Cancel"]').show(); // Block#: C@HElqnenOKKzNU0r{Rw
        com.fc.JavaScriptDistLib.Button.setProperty["Text"]("B22Cancel", _that.currentProperty);
      }
      // Block#: ~tW%%[LgOG!SZUOATi3I
      _that.currentProperty = getOutcomeName('B22Next');
      // Block#: w#}65ud/91D0)Mt_.9U[
      if(_that.currentProperty != null) {
        // Block#: j7E/2=LQYUf!*u6^GwMD
        $('[obj-name="B22Next"]').show(); // Block#: yZHq=n/K8[]F6?=Ka5*O
        com.fc.JavaScriptDistLib.Button.setProperty["Text"]("B22Next", _that.currentProperty);
      }
      // Block#: EFhX/#Oij{t5n;o[66l^
      _that.currentProperty = getOutcomeName('B22Skip');
      // Block#: t!XS6ac={k12IWp2rt}7
      if(_that.currentProperty != null) {
        // Block#: V%;r]x^JMlUwuQh`(mCI
        $('[obj-name="B22Skip"]').show(); // Block#: +@~vuBl~OUly$v(}lXeI
        com.fc.JavaScriptDistLib.Button.setProperty["Text"]("B22Skip", _that.currentProperty);
      }
      // Block#: /tdVfmY3=n.SCwy:z{N.
      _that.currentProperty = getFormProperty('title');
      // Block#: V6ds?hR`YX7]YfSpE3V%
      if(_that.currentProperty != null) {
        // Block#: rjz1_{~gaiw6Z|W9Hnku
        $('[obj-name="L22Title"]').show(); // Block#: EXp$@TuA!Dvcg+X*!#{)
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("L22Title", _that.currentProperty);
      }
      // Block#: A7bZv-O,.r_:F3Dy]NNR
      _that.currentProperty = getFormProperty('error');
      // Block#: 8V$L;l:VX^[[W#j}8)iT
      if(_that.currentProperty != null) {
        // Block#: -3bagOU/qb@CTVpQ.;*r
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("L22Error", _that.currentProperty);
      }
      // Block#: ?H)oAJ8yRS64=qb9F!zX
      _that.currentProperty = getFormProperty('L22Units1');
      // Block#: FQe[QUB#!6):[f6a~U{]
      if(_that.currentProperty != null) {
        // Block#: il67Jqj60ek+Is1rBeCE
        $('[obj-name="L22Units1"]').show(); // Block#: Pf8l.sMvQt|@rX=*kL_Q
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("L22Units1", _that.currentProperty);
      }
      // Block#: $b!;syrF+vlf+N1/A;s0
      _that.currentProperty = getFormProperty('L22Units2');
      // Block#: JZN=V(gs*OW*++nc=zVm
      if(_that.currentProperty != null) {
        // Block#: -:|ngRQnSj}Y#k.:PF1M
        $('[obj-name="L22Units2"]').show(); // Block#: Tn,Hi:OB^^+}ubK(,qz`
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("L22Units2", _that.currentProperty);
      }
      // Block#: Y=6@4df|tRWqqty_8.Sh
      $('[obj-name="L22Question"]').show(); // Block#: KAS1Dew8owoEZd|=1HY,
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("L22Question", (getFormField('answer1', 'name'))); // Block#: NAT/X,kT{TTo}W4_H#C`
      _that.inputType = getFormField('answer1', 'type');
      // Block#: v]5-Z44.)82NcWhVjPC7
      if(com.fc.JavaScriptDistLib.TextLib.textComparison(_that.inputType, "EQUAL", 'text')) {
        // Block#: ed/ZpYh8bUzA?cc9;(}6
        _that.currentProperty = getFormField('answer1', 'value');
        // Block#: .7j`.F^:Xd@@3A|i4R*{
        if(_that.currentProperty != null) {
          // Block#: AtvQznf[;|q9Rqq_4DS8
          com.fc.JavaScriptDistLib.Textbox.setProperty["Text"]("T22Text1", _that.currentProperty); // Block#: czJ13jVtK|]4gUFH$6Ya
          _that.selectionMade = false;
        }
        // Block#: XjcJ:Ocq+~cC`=fHOw6.
        $('[obj-name="T22Text1"]').show(); // Block#: _U+.u[-w~CXX*n$=-ug1
        _that.currentProperty = getFormField('answer2', 'value');
        // Block#: DE2NSxk4(NfDCMt;#HUY
        if(_that.currentProperty != null) {
          // Block#: r}X;okXS.?nRUKIf!`-j
          com.fc.JavaScriptDistLib.Textbox.setProperty["Text"]("T22Text2", _that.currentProperty); // Block#: wTam|UUD1ipI1!k9h,j3
          _that.selectionMade = true;
        }
        // Block#: Mqv4FUcU-AT.W_i12RQ]
        $('[obj-name="T22Text2"]').show();
      }
      // Block#: tyYAA;5Ezu-U?yg}Z0b2
      _that.currentProperty = getFormProperty('validationType');
      // Block#: (+|4I;A;Qb9fWTQe=!u=
      if(_that.currentProperty != null) {
        // Block#: *@CMY#,Gn}]T7L`O*nQY
        _that.validationType = _that.currentProperty;
        // Block#: H4iszt%`?:5F9C@|W^GE
        console.log(String('validationType: ') + String(_that.validationType));
        if(_that.debugService && _that.debugService.active) {
          _that.debugService.traces.push(String('validationType: ') + String(_that.validationType));
          _that.debugService.printLog();
        }
        // Block#: m+Xu!`veo#(;gm8[W}pM
        if(com.fc.JavaScriptDistLib.TextLib.textComparison(_that.validationType, "EQUAL", 'adultHeight')) {
          // Block#: j./Z;X2q8,(ZTPymAjjv
          com.fc.JavaScriptDistLib.Textbox.setProperty["Input type"]("T22Text1", 'numeric'); // Block#: P%i_+MJ]@}JqyVqYjTm?
          com.fc.JavaScriptDistLib.Textbox.setProperty["Max chars"]("T22Text1", 1); // Block#: =Ljo%s$l0lhS)3L?z62a
          com.fc.JavaScriptDistLib.Textbox.setProperty["Input type"]("T22Text2", 'numeric'); // Block#: EeLC-2(L{03)DRq@z}fR
          com.fc.JavaScriptDistLib.Textbox.setProperty["Max chars"]("T22Text2", 2);
        } else if(com.fc.JavaScriptDistLib.TextLib.textComparison(_that.validationType, "EQUAL", 'babyWeight')) {
          // Block#: #YZR|?6Zm[s#en^GQF1u
          com.fc.JavaScriptDistLib.Textbox.setProperty["Input type"]("T22Text1", 'numeric'); // Block#: ~4^~3t_t,BR9]r$-dunK
          com.fc.JavaScriptDistLib.Textbox.setProperty["Max chars"]("T22Text1", 2); // Block#: QJ8NgiAK|g^QF.lZ7v%f
          com.fc.JavaScriptDistLib.Textbox.setProperty["Input type"]("T22Text2", 'numeric'); // Block#: ^xj2axD0PA%Edz0evZvO
          com.fc.JavaScriptDistLib.Textbox.setProperty["Max chars"]("T22Text2", 2);
        } else if(com.fc.JavaScriptDistLib.TextLib.textComparison(_that.validationType, "EQUAL", '3digits')) {
          // Block#: RB5B.2hmajUu5Rnz{T@w
          com.fc.JavaScriptDistLib.Textbox.setProperty["Input type"]("T22Text1", 'numeric'); // Block#: K/WLg`d/e).*?.#rP;iN
          com.fc.JavaScriptDistLib.Textbox.setProperty["Max chars"]("T22Text1", 3); // Block#: (;DoSK._1X*m1YljY-UR
          com.fc.JavaScriptDistLib.Textbox.setProperty["Input type"]("T22Text2", 'numeric'); // Block#: bA3#8x)OoI9Xct?-I~](
          com.fc.JavaScriptDistLib.Textbox.setProperty["Max chars"]("T22Text2", 3);
        }
      }
      // Block#: pm@!1{ck7ZCislkdKhdX
      _that.currentProperty = getFormProperty('maxInput1');
      // Block#: y2-a/ui4]cXna)|Z#902
      if(_that.currentProperty != null) {
        // Block#: h.(u!IWD{_R:.Wis2O_$
        _that.maxInput1 = _that.currentProperty;
        // Block#: VgT@8[bAj[8^Gxg5#4*u
        console.log(String('maxInput1: ') + String(_that.maxInput1));
        if(_that.debugService && _that.debugService.active) {
          _that.debugService.traces.push(String('maxInput1: ') + String(_that.maxInput1));
          _that.debugService.printLog();
        }
      }
      // Block#: %JLPn,-jZ|cJ,oV5j8Y`
      _that.currentProperty = getFormProperty('maxInput2');
      // Block#: _k[GP]AUv/5xa@.VYn8(
      if(_that.currentProperty != null) {
        // Block#: *^N0;Ne:K@F(qUYK(0+:
        _that.maxInput2 = _that.currentProperty;
        // Block#: t^OSaWU%@)5hBKiW5.;t
        console.log(String('maxInput2: ') + String(_that.maxInput2));
        if(_that.debugService && _that.debugService.active) {
          _that.debugService.traces.push(String('maxInput2: ') + String(_that.maxInput2));
          _that.debugService.printLog();
        }
      }
      // Block#: $.Fqo:hqPcy4^]jc93%.
      _that.currentProperty = getFormProperty('minInput1');
      // Block#: mcJrFo0-_{g7D!L}R]m~
      if(_that.currentProperty != null) {
        // Block#: PT)F3J-^-qlZ$Bbqd|bl
        _that.minInput1 = _that.currentProperty;
        // Block#: *1+P`+]O)J/$k?[10+RQ
        console.log(String('minInput1: ') + String(_that.minInput1));
        if(_that.debugService && _that.debugService.active) {
          _that.debugService.traces.push(String('minInput1: ') + String(_that.minInput1));
          _that.debugService.printLog();
        }
      }
      // Block#: Y4o$U46,_EKV*%bVPQyg
      _that.currentProperty = getFormProperty('minInput2');
      // Block#: K/v_?q]V?+ctBdr7R_1h
      if(_that.currentProperty != null) {
        // Block#: ,3a?gOCV[wWJc_QxvlUm
        _that.minInput2 = _that.currentProperty;
        // Block#: S{SPlMrs[Lp^]kJ4`qAr
        console.log(String('minInput2: ') + String(_that.minInput2));
        if(_that.debugService && _that.debugService.active) {
          _that.debugService.traces.push(String('minInput2: ') + String(_that.minInput2));
          _that.debugService.printLog();
        }
      }
      // Block#: Dt@!F@5pTO^*+J5ZM$|p
      B22NextUpdate().then(response => {;
      });
    });
  }
  /**
   * helper
   */
  function isMedNameSelected(name2) {
    // Block#: PK3ua9$)v[FBe)00]b^,
    var item_list5 = _that.selectedMeds;
    for(var item_index5 in item_list5) {
      item = item_list5[item_index5];
      // Block#: }ql9o$KE78B,nZ[2%=/(
      if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.TextLib.textChangeCase(item, "LOWERCASE"), "EQUAL", com.fc.JavaScriptDistLib.TextLib.textChangeCase(name2, "LOWERCASE"))) {
        return true;
      }
    }
    return false;
  }
  /**
   * Describe this function...
   */
  function createAccount() {
    return new Promise(function(resolve, reject) {
      // Block#: _,uF=B8c{vMnzTX(7QpF
      com.fc.JavaScriptDistLib.SnapClinical.configureAuthentication('{"api":{"url":"https://powermomstaging.snapclinical.net","username":"","password":"","userid":"","authentication":"Token Based Auth","lazyDeveloper":false,"frontEndKey":"mobileApp"}}');
      com.fc.JavaScriptDistLib.SnapClinical.snapClinicalConfigure('guest@snapiot.com', '201810', 'guest@snapiot.com', "mobileApp", "https://powermomstaging.snapclinical.net");
      // Block#: Kt}e2$1-!dOS*m;TV^xu
      com.fc.JavaScriptDistLib.SnapClinical.startProcess(Object.assign(Object.assign({
          "forceStartNewInstance": false
        }, com.fc.JavaScriptDistLib.Dictionary.createDictionary(['forceStartNewInstance', 'processVariables'], [true, [com.fc.JavaScriptDistLib.Dictionary.createDictionary(['name', 'value', 'type'], ['deviceid', (com.fc.JavaScriptDistLib.FireBase.getUniqueDeviceId()), 'string'])]])), {
          "processDefinitionKey": 'PowerMomSignUp'
        }),
        function(process_data) {
          // Block#: GM*/Dh+{ty_yz$9~J#~-
          startSignUp().then(response => {;
          });
        },
        function(error_data) {
          // Block#: svv`~_-.N`PMh03$Q)[R
          console.log(error_data);
          if(_that.debugService && _that.debugService.active) {
            _that.debugService.traces.push(error_data);
            _that.debugService.printLog();
          }
          // Block#: tG;]X.q6afR.Zu8P^(4/
          _that.pErrorData = error_data;
          // Block#: b`rZnmj@uth/v_v}`(6`
          _that.buttonClicked = false;
        });
    });
  }
  /**
   * Describe this function...
   */
  function getCheckboxItems() {
    return new Promise(function(resolve, reject) {
      // Block#: b*c)_-d=O^9W!G.RJ2@J
      _that.localVar1 = (com.fc.JavaScriptDistLib.JSON.parseJSONDataForPath(_that.currentTask, '$.formData.fields[?(@.type=="boolean")]'));
      // Block#: ss/~$dsYkZmv:lZe^h.1
      if(_that.localVar1 != null) {
        // Block#: b@4`@:uX2PfXtLk3N-O5
        var item_list6 = _that.localVar1;
        for(var item_index6 in item_list6) {
          item = item_list6[item_index6];
          // Block#: G8|S?aMDuC^?(BsChnMm
          if(!((com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'value')) == true)) {
            // Block#: ,F;[@9aA8@Rx_C/9AkJO
            _that.checkBoxValue = 'FALSE';
          } else {
            // Block#: Eo4oZ)DF{HOUCA+#:~4e
            _that.checkBoxValue = 'TRUE';
          }
          // Block#: 2)B-,K+sC,)lu2mRk!`_
          _that.checkBoxElement = com.fc.JavaScriptDistLib.Dictionary.createDictionary(['id', 'name', 'value'], [(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'id')), (com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'name')), _that.checkBoxValue]);
          // Block#: ;]C,jRvRIH`GuHcMT,u?
          com.fc.JavaScriptDistLib.ListLibrary.listAdd(_that.checkBoxList, _that.checkBoxElement)
        }
      }
    });
  }
  /**
   * Describe this function...
   */
  function getTimezone() {
    // Block#: 6!CbM4J5kZr]B$M,t,l9
    _that.isoString = (com.fc.JavaScriptDistLib.TimeLibrary.textFromTime((com.fc.JavaScriptDistLib.MomentLibrary()), "ISO_1"));
    // Block#: ZDuVT?W1I%qi4|JQUZgy
    if(com.fc.JavaScriptDistLib.TextLib.textContains(_that.isoString, 'Z')) {
      return '+0000';
    }
    return com.fc.JavaScriptDistLib.TextLib.textSubstring(_that.isoString, _that.isoString.length - 5, 5);
  }
  /**
   * Describe this function...
   */
  function S9UpdateScreen() {
    return new Promise(function(resolve, reject) {
      // Block#: Ee|%M~}dFb0MgU/[#Y5p
      S9HideObjects().then(response => {;
      });
      // Block#: V}/#wFX]gZ8]:s:,S^Qg
      _that.currentProperty = getOutcomeName('B9Back');
      // Block#: z2*9]+!xv4VTEp|9C{B:
      if(_that.currentProperty != null) {
        // Block#: Ge7[SmC-BId%!_{yG!vW
        $('[obj-name="B9Back"]').show();
      }
      // Block#: Gx:i*/vOZnqt@,O@eaJo
      _that.currentProperty = getOutcomeName('B9Link');
      // Block#: ($a:2Z0ZK)YhTv;CTST%
      if(_that.currentProperty != null) {
        // Block#: %M$yUWs(WHQ}{rKT8Yj7
        $('[obj-name="B9Link"]').show();
      }
      // Block#: ]ze!aJpgN$6xsuTQfy=1
      _that.currentProperty = getOutcomeName('B9Cancel');
      // Block#: .75}DzGa=*%/7s?__A0;
      if(_that.currentProperty != null) {
        // Block#: d-Jtu1SZ50VS1LSL3Y@U
        $('[obj-name="B9Cancel"]').show(); // Block#: sl#xyEk(EY|c}fM8$3a.
        com.fc.JavaScriptDistLib.Button.setProperty["Text"]("B9Cancel", _that.currentProperty);
      }
      // Block#: w9Jlgrx_Yqn$(3kb*9J`
      if(getOutcomeName('B9Agree') != null && getOutcomeName('B9Disagree') != null) {
        // Block#: Tm0gUwu*zGBk13aMHT`s
        $('[obj-name="C9FooterButtons"]').show(); // Block#: Zm3Lk`*lsCO_($zS$]+i
        com.fc.JavaScriptDistLib.Button.setProperty["Text"]("B9Disagree", (getOutcomeName('B9Disagree'))); // Block#: NCF#r+3HG^!%f7D;]A(+
        com.fc.JavaScriptDistLib.Button.setProperty["Text"]("B9Agree", (getOutcomeName('B9Agree')));
      }
      // Block#: #XXSXm(vn-R2yrVca/;t
      _that.currentProperty = getFormProperty('title');
      // Block#: f.BZpuautn4}G,W$w-6a
      if(_that.currentProperty != null) {
        // Block#: :*$Fu$6=:C[}Qwe4RXA(
        $('[obj-name="L9Title"]').show(); // Block#: GU^)irrGC!MGcz/=!hmD
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("L9Title", _that.currentProperty);
      }
      // Block#: GfOy77177JU4?TK$N(!0
      _that.currentProperty = getFormProperty('infoText');
      // Block#: ,M$a-5OW-d-K[`T$=f.h
      if(_that.currentProperty != null) {
        // Block#: ZqOwFy?xY4Ljql[VRbg|
        $('[obj-name="L9InfoText"]').show(); // Block#: Rum)p=d0WnC)3us5rU[F
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("L9InfoText", _that.currentProperty); // Block#: ySUdox-Bxk}{2|c#/t=Q
        com.fc.JavaScriptDistLib.Label.setProperty["Font family"]("L9InfoText", 'century gothic');
      }
    });
  }
  /**
   * Describe this function...
   */
  function S21UpdateScreen() {
    return new Promise(function(resolve, reject) {
      // Block#: s_nOt-j;M;h/Z:=xn;HR
      if(_that.isLoggingIn || _that.isLoggedIn) {
        // Block#: 0@O2i%c9lHezx%#/Y7qe
        $('[obj-name="B21ForgotPin"]').show(); // Block#: 5BG:}g_$_FNpL.ollIuY
        $('[obj-name="L21TextTitle"]').show(); // Block#: pOnH.RFSKe,Bp@s9PCc9
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("L21TextTitle", 'Enter Passcode');
      } else {
        // Block#: v?,MSaANuz4,~nww*fWd
        _that.currentProperty = getOutcomeName('B21Back');
        // Block#: 8HvghGF0CPqnlGFNlSc]
        if(_that.currentProperty != null) {
          // Block#: B(m2M*8gUzfQYQJ3,b!5
          $('[obj-name="B21Back"]').show();
        }
        // Block#: {s*)FyCb?akcBJ#`}9$^
        _that.currentProperty = getOutcomeName('B21Cancel');
        // Block#: ~A.7EmyBUTm$.(2z/WXI
        if(_that.currentProperty != null) {
          // Block#: kGZEG~w:2DSs8x^o)7;e
          $('[obj-name="B21Cancel"]').show(); // Block#: tL9Pte3CkFpZwSWLq*h`
          com.fc.JavaScriptDistLib.Button.setProperty["Text"]("B21Cancel", _that.currentProperty);
        }
        // Block#: B2@!pHC{`7xU.%8HYT!u
        _that.currentProperty = getFormProperty('title');
        // Block#: MrA_l2!{kNW:oVz)$z!;
        if(_that.currentProperty != null) {
          // Block#: QNL`A2yE3gZP[Q)btS?s
          $('[obj-name="L21Title"]').show(); // Block#: ,`Wj3Xl3,ZhfYKl}}Upq
          com.fc.JavaScriptDistLib.Label.setProperty["Text"]("L21Title", _that.currentProperty);
        }
        // Block#: j,7RX^qfEN;n7hJ-E)C{
        _that.currentProperty = getFormProperty('textTitle');
        // Block#: U_zmN(m1*oU9*%2;kkJb
        if(_that.currentProperty != null) {
          // Block#: 8s5g^!.D42|qpl,YyaBX
          $('[obj-name="L21TextTitle"]').show(); // Block#: L?{:vC4(F(oHKO~,sjCU
          com.fc.JavaScriptDistLib.Label.setProperty["Text"]("L21TextTitle", _that.currentProperty);
        }
        // Block#: lVqYKs|2fY_K5lazzPtz
        _that.currentProperty = getFormProperty('textBody');
        // Block#: 9NAf(=Rs}MU9V/`m_Q$w
        if(_that.currentProperty != null) {
          // Block#: EW0VA9)P1z-qT[/(1NnT
          $('[obj-name="L21TextBody"]').show(); // Block#: AYhdZ$-VgF^i:wGzXn}8
          com.fc.JavaScriptDistLib.Label.setProperty["Text"]("L21TextBody", _that.currentProperty);
        }
        // Block#: *9CXlb-l8T@jh]7a.v).
        _that.currentProperty = getProcessVariable('showError');
        // Block#: XV;VeuS1;_l)JV1/tkp?
        if(_that.currentProperty != null) {
          // Block#: J4jmEV-9HyIXDV4hZd}b
          if(_that.currentProperty) {
            // Block#: %-;%J9:#_nNyS/;]G)R:
            com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("S21Pin", false); // Block#: =b7w6tTq[~~7s3Ridy*%
            $('[obj-name="L21Error"]').show(); // Block#: 4[E!V0dCV3ps(QpX.=_r
            com.fc.JavaScriptDistLib.Label.setProperty["Text"]("L21Error", 'Pin Mismatch');
          }
        }
      }
      // Block#: umTF6%)wy}ak*.qtr84|
      if(!($('[obj-name="L21TextBody"]').is(':visible')) && !(com.fc.JavaScriptDistLib.ListLibrary.listContains((com.fc.JavaScriptDistLib.Storage.getAllKeys()), 'email')) && com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Label.getProperty["Text"]("L21TextTitle"), "EQUAL", 'Enter Passcode') &&
        !_that.isLoggedIn) {
        // Block#: MPHYDCm.FM#u1(/P;m{s
        $('[obj-name="B21Back"]').show();
      }
    });
  }
  /**
   * Describe this function...
   */
  function S26SetSingleBarGraph() {
    return new Promise(function(resolve, reject) {
      // Block#: Vj8qPi-7^cw%G6x$61Qd
      _that.currentProperty = getFormProperty('singleGraphXAxisName');
      // Block#: dTzg5_#yWe:TR6Vf-81m
      if(_that.currentProperty != null) {
        // Block#: :!nk^h!@=c2f@XiyLf).
        $('[obj-name="SingleGraphXAxisLabel"]').show(); // Block#: kD7NC?ekg$6UfeJgMco;
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("SingleGraphXAxisLabel", _that.currentProperty); // Block#: o[w_gJ~1LUFexl?lH=0]
        console.log(String('singleGraphXAxisName: ') + String(_that.currentProperty));
        if(_that.debugService && _that.debugService.active) {
          _that.debugService.traces.push(String('singleGraphXAxisName: ') + String(_that.currentProperty));
          _that.debugService.printLog();
        }
      }
      // Block#: aDgAsv_L;W%$8wl+[[m[
      _that.currentProperty = getFormProperty('singleGraphYAxisName');
      // Block#: -4HS82uE];z?KS=f7~r,
      if(_that.currentProperty != null) {
        // Block#: =!0I6vr;0:o%+M)vQ8*^
        $('[obj-name="SingleGraphYAxisLabel"]').show(); // Block#: K8xiUn02XgwMlZvmM=]P
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("SingleGraphYAxisLabel", _that.currentProperty); // Block#: 9d[:K~_)P/*EH;$LQ[LD
        console.log(String('singleGraphYAxisName: ') + String(_that.currentProperty));
        if(_that.debugService && _that.debugService.active) {
          _that.debugService.traces.push(String('singleGraphYAxisName: ') + String(_that.currentProperty));
          _that.debugService.printLog();
        }
      }
      // Block#: K^!!pyJ6}i%4zCko6llD
      _that.currentProperty = getFormProperty('graphTitle1');
      // Block#: .pzau?v:?0S@P3M35iaK
      if(_that.currentProperty != null) {
        // Block#: rFXMXIoOt{u})5[bL9N@
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("L26SingleGraphTitle", _that.currentProperty); // Block#: psU0{e[`Ll4i763KHjK[
        console.log(String('graphTitle1: ') + String(_that.currentProperty));
        if(_that.debugService && _that.debugService.active) {
          _that.debugService.traces.push(String('graphTitle1: ') + String(_that.currentProperty));
          _that.debugService.printLog();
        }
      }
      // Block#: 9S4LgRrf.@=oXuet-^o)
      if(com.fc.JavaScriptDistLib.TextLib.textComparison(_that.graphGroup, "EQUAL", 'weekly')) {
        // Block#: #,v^!][Xeeat|RhNnsI^
        _that.currentProperty = getProcessVariable('week');
        // Block#: W71V1(t%7qUeF$8G%K:t
        if(_that.currentProperty != null) {
          // Block#: )oyVYbs7SM?XCP3wa5;j
          com.fc.JavaScriptDistLib.Label.setProperty["Text"]("L26SingleGraphTitle", ([com.fc.JavaScriptDistLib.Label.getProperty["Text"]("L26SingleGraphTitle"), ' ', _that.currentProperty, ' Symptoms'].join('')));
        }
      }
      // Block#: :1CtHA`4i.^M7#rl7IpS
      if(com.fc.JavaScriptDistLib.TextLib.textComparison(_that.graphGroup, "EQUAL", 'ageGroup')) {
        // Block#: ]sdFr:yMJ=uOnFb6WI^~
        _that.groupData = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(com.fc.JavaScriptDistLib.JSON.parseJSONData(_that.JSON2), 'ageGroup'));
        // Block#: !u|J:Pd0Tn5jOEYh4(?J
        _that.Xvalues = _that.ageGroups;
        // Block#: Me/)s?55)nGqP8G]Ps(H
        _that.XAxisLabels = _that.ageGroups;
      } else if(com.fc.JavaScriptDistLib.TextLib.textComparison(_that.graphGroup, "EQUAL", 'mentalHealth')) {
        // Block#: IzTeCAJ4*^~?+Ht,c7!_
        _that.groupData = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(com.fc.JavaScriptDistLib.JSON.parseJSONData(_that.JSON2), 'mentalHealth'));
        // Block#: LnwmV{mT5^_YugK%+5np
        _that.Xvalues = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.healthHistoryGroups, 'mentalHealth'));
        // Block#: WhM0rwf;2P8DQ_N2My32
        _that.XAxisLabels = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.healthHistoryLabels, 'mentalHealth'));
      } else if(com.fc.JavaScriptDistLib.TextLib.textComparison(_that.graphGroup, "EQUAL", 'weekly')) {
        // Block#: oK!;Izt^n$_K{x7VlHYG
        _that.groupData = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(com.fc.JavaScriptDistLib.JSON.parseJSONData(_that.JSON2), 'symptoms'));
        // Block#: ,i~Rjj?;CejIMa3/nDf(
        _that.Xvalues = _that.weeklyGroups;
        // Block#: JYrlPd]Iw8%(5BB|0cXJ
        _that.XAxisLabels = _that.weeklyLabels;
      } else if(com.fc.JavaScriptDistLib.TextLib.textComparison(_that.graphGroup, "EQUAL", 'weight')) {} else if(com.fc.JavaScriptDistLib.TextLib.textComparison(_that.graphGroup, "EQUAL", 'length')) {}
      // Block#: KK^~5%xx7GBQnkZ(F*6H
      _that.Yvalues = [];
      // Block#: ZC35s4KuBTNmr.%a($;c
      _that.totalNumberOfSubjects = 0;
      // Block#: ~Ub-u@,P*:01:8LK.K!0
      var item_list7 = _that.Xvalues;
      for(var item_index7 in item_list7) {
        item = item_list7[item_index7];
        // Block#: E#c1,WtQq]rCD^9vD4v*
        _that.totalNumberOfSubjects = _that.totalNumberOfSubjects + (com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.groupData, item));
      }
      // Block#: 1CH+B)JUa*wtw.L6*+Pu
      var item_list8 = _that.Xvalues;
      for(var item_index8 in item_list8) {
        item = item_list8[item_index8];
        // Block#: m6XMmhkG]W9qmv^m_w.a
        if(!com.fc.JavaScriptDistLib.TextLib.textComparison(item, "EQUAL", 'No')) {
          // Block#: ZnO9V,irxjLMN/Kl`Amk
          com.fc.JavaScriptDistLib.ListLibrary.listAdd(_that.Yvalues, Math.round(((com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.groupData, item)) / _that.totalNumberOfSubjects) * 100))
        }
      }
      // Block#: eJAvHS9;FO`LBp]1`06t
      com.fc.JavaScriptDistLib.GraphContainer.createChartWithList('GC26SingleGraph', _that.XAxisLabels, _that.Yvalues, '%') // Block#: G5X_4S7u-6auPxFuspCq
      com.fc.JavaScriptDistLib.GraphContainer.addChartTransition('GC26SingleGraph', 500, 500); // Block#: z*jW`.QfNYJ@,Z3kESMa
      $('[obj-name="S26SingleGraphContainer"]').show();
    });
  }
  /**
   * Describe this function...
   */
  function B2NextUpdate() {
    return new Promise(function(resolve, reject) {
      // Block#: k`oWbCEV$^gK~!}nHk~Y
      if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare((com.fc.JavaScriptDistLib.Dictionary.getKeys(_that.eQualAnswers)).length, "EQ", 4)) {
        // Block#: ave6Ro`^MUO|-6tgVvj{
        com.fc.JavaScriptDistLib.Button.setProperty["Background color"]("B2Next", (com.fc.JavaScriptDistLib.ColourLibrary.getColourFromText('#dd198e'))); // Block#: ={1^!FZDyBN=B|2#{|0/
        com.fc.JavaScriptDistLib.Button.setProperty["Border color"]("B2Next", (com.fc.JavaScriptDistLib.ColourLibrary.getColourFromText('#dd198e')));
      } else {
        // Block#: %PJ@o2:%(13vHySw$Lb?
        com.fc.JavaScriptDistLib.Button.setProperty["Background color"]("B2Next", (com.fc.JavaScriptDistLib.ColourLibrary.getColourFromText('#f4badd'))); // Block#: y+VY=)#.I!*++{)~E2n9
        com.fc.JavaScriptDistLib.Button.setProperty["Border color"]("B2Next", (com.fc.JavaScriptDistLib.ColourLibrary.getColourFromText('#f4badd')));
      }
    });
  }
  com.fc.JavaScriptDistLib.EventListeners.register("handleShareButton", "HealthDashboardLibrary",
    /**
     * Describe this function...
     */
    function handleShareButton() {
      return new Promise(function(resolve, reject) {
        // Block#: 5C*{g6@X=fA_Q;tD#]6;
        if(!_that.buttonClicked) {
          // Block#: yPvio2qIuZ[^y6s=B?EN
          _that.buttonClicked = true;
          // Block#: Wk)T{b,yHQ)pv96rYS$a
          _that.returnError = saveTaskAndNext(getOutcomeName('sharedata'));
        }
      });
    }
  );
  /**
   * Describe this function...
   */
  function setMedicationList() {
    return new Promise(function(resolve, reject) {
      // Block#: djME-mHJsK/$=+yA$mcw
      _that.medicationList = [com.fc.JavaScriptDistLib.TextLib.textSplitWith('A+D DIAPER RASH\\nA+D ORIGINAL\\nA-200 LICE CONTROL\\nA-25\\nA-CILLIN\\nA-COF DH\\nA-FIL\\nA-G TUSSIN\\nA-HYDROCORT\\nA-METHAPRED\\nA-PHEDRIN\\nA-SPAS\\nA-SPAS SL\\nA.E.R. WITCH HAZEL\\nA.P.L.\\nA.R.M. ALLERGY RELIEF\\nA.T.O. EPINEPHRINE LIDOCAINE COMBINATION\\nA.T.O. MEPIVACAINE\\nAA&C\\nAB OTIC\\nABBO-PAC 100 TABLET PACK\\nABBOKINASE\\nABBOKINASE OPEN-CATH\\nABELCET\\nABILIFY\\nABLETEX PSE\\nABRAXANE\\nABREVA\\nABSORBINE\\nABSORBINE ATHLETES FOOT\\nABSORBINE JOCK ITCH\\nABSORBINE JR.\\nABSORBINE JR. ANTIFUNGAL\\nABSORICA\\nABSTRAL\\nACAM2000\\nACANYA\\nACCLEAN\\nACCOLATE\\nACCU FLURO\\nACCUHIST\\nACCUHIST DM PEDIATRIC\\nACCUHIST DM PEDIATRIC DROPS\\nACCUHIST DROPS REFORMULATED FEB 2010\\nACCUHIST DROPS REFORMULATED SEP 2008\\nACCUHIST PC\\nACCUHIST PDX\\nACCUHIST PDX DROPS REFORMULATED FEB 2008\\nACCUHIST PDX DROPS REFORMULATED FEB 2010\\nACCUHIST PEDIATRIC\\nACCUNEB\\nACCUPRIL\\nACCURETIC\\nACCUZYME\\nACEL-IMUNE\\nACEON\\nACEPHEN\\nACEROLA\\nACEROLA C\\nACETA\\nACETA-GESIC\\nACETADOTE\\nACETADRINK\\nACETADRYL\\nACETAMINOPHEN CHILD\\nACETAMINOPHEN JR\\nACETAMINOPHEN PM\\nACETAMINOPHEN QUICKMELT\\nACETASOL\\nACETASOL HC\\nACETOCOT\\nACHROMYCIN\\nACHROMYCIN V\\nACI-JEL\\nACID GONE\\nACID GONE ANTACID\\nACID JELLY\\nACID PHOS FLUOR RINSE\\nACID RELIEF\\nACIDIC VAGINAL JELLY\\nACIPHEX\\nACLARO\\nACLOVATE\\nACNE TREATMENT\\nACNE TREATMENT PACK\\nACNE-10\\nACNE-5\\nACNE-CLEAR\\nACNEVIR\\nACNIGEL\\nACNOMEL\\nACNOTEX\\nACOVA\\nACT FLUORIDE RINSE\\nACTACIN\\nACTAGEN\\nACTAHIST\\nACTAMIN\\nACTAMINE\\nACTEDRIL\\nACTEMRA\\nACTH GEL\\nACTH-40 HP\\nACTH-80\\nACTHAR\\nACTHAR GEL\\nACTHIB\\nACTHREL\\nACTIBINE\\nACTICIN\\nACTICLATE\\nACTICON\\nACTICORT 100\\nACTIDOSE\\nACTIDOSE PLUS SORBITOL\\nACTIDOSE-AQUA\\nACTIFED\\nACTIFED ALLERGY DAYNIGHT\\nACTIFED COLD & ALLERGY\\nACTIFED COLD & SINUS\\nACTIFED PLUS\\nACTIFED WITH CODEINE\\nACTIGALL\\nACTIMMUNE\\nACTINEX\\nACTIQ\\nACTIVASE\\nACTIVE Q\\nACTIVELLA\\nACTIVELLA 0.50.1 28 DAY\\nACTIVELLA 0.51 DAY\\nACTIVELLA 10.5 28 DAY\\nACTIVELLA 28 0.10.5 DAY\\nACTIVON ARTHRITIS\\nACTIVON JOINT & MUSCLE\\nACTONEL\\nACTONEL 35\\nACTONEL 35 12-WEEK\\nACTONEL 35 4-WEEK\\nACTONEL 75\\nACTONEL WITH CALCIUM\\nACTONEL WITH CALCIUM 28 DAY THERAPY\\nACTOPLUS MET\\nACTOPLUS MET 151000\\nACTOPLUS MET 15500\\nACTOPLUS MET 15850\\nACTOPLUS MET 301000\\nACTOS\\nACTRON\\nACUFLEX\\nACULAR\\nACUPRIN 81\\nACUTRIM 16 HOUR\\nACUTRIM II\\nACUTRIM LATE DAY\\nACUTUSS DM PEDIATRIC\\nACUVAIL\\nACYLOVIR\\nACYS-5\\nACZONE\\nADACEL\\nADAGEN\\nADALAT\\nADANDAMET 2500\\nADAPIN\\nADASUVE\\nADBEON\\nADCETRIS\\nADCIRCA\\nADDAPRIN\\nADDERALL\\nADDERALL-XR\\nADDYI\\nADEMPAS\\nADENO-JEC\\nADENOCARD\\nADENOSCAN\\nADGAN\\nADIDAS\\nADIPEX-P\\nADIPOST\\nADLONE-40\\nADLONE-80\\nADLYXIN\\nADLYXIN STARTER KIT\\nADMELOG\\nADOXA\\nADOXA PAK 1100\\nADOXA PAK 1150\\nADOXA PAK 1150 MG\\nADOXA PAK 1150MG\\nADOXA PAK 175\\nADOXA PAK 2100\\nADOXA PAK 2150\\nADPRIN B\\nADRENACLICK\\nADRENALIN\\nADRIAMYCIN\\nADRIAMYCIN PFS\\nADRIAMYCIN RDF\\nADRUCIL\\nADSORBOCARPINE\\nADSORBONAC\\nADULT PAIN\\nADULT STRENGTH\\nADVAIR\\nADVAIR 10050\\nADVAIR 11521\\nADVAIR 23021\\nADVAIR 25050\\nADVAIR 4521\\nADVAIR 50050\\nADVAIR DISKUS\\nADVAIR DISKUS 10050\\nADVAIR DISKUS 25050\\nADVAIR DISKUS 50050\\nADVAIR HFA\\nADVANCED EYE RELIEF NIGHT TIME\\nADVANCED EYE RELIEF REDNESS INSTANT RELIEF\\nADVANCED FORMULA DI-GEL\\nADVANCED PAIN RELIEF\\nADVANTAGE 24 CONTRACEPTIVE\\nADVANTAGE-S\\nADVATE\\nADVICOR\\nADVICOR 100020\\nADVICOR 100040\\nADVICOR 50020\\nADVICOR 75020\\nADVIL\\nADVIL ALLERGY & CONGESTION RELIEF\\nADVIL ALLERGY SINUS\\nADVIL CHILDREN\'S COLD\\nADVIL CHILDRENS\\nADVIL COLD AND SINUS\\nADVIL CONGESTION RELIEF\\nADVIL JUNIOR STRENGTH\\nADVIL LIQUIGEL\\nADVIL MIGRAINE\\nADVIL MULTI-SYMPTOM COLD\\nADVIL PEDIATRIC\\nADVIL PM\\nADVIL PM LIQUI GELS\\nADVIL SINUS CONGESTION AND PAIN\\nADYNOVATE\\nADZENYS\\nAERO OTIC HC\\nAEROAID\\nAEROBID\\nAERODINE\\nAEROHIST\\nAEROHIST PLUS\\nAEROKID\\nAEROLATE\\nAEROLATE III\\nAEROLATE JR\\nAEROLATE SR.\\nAEROSEB-DEX\\nAEROSEB-HC\\nAEROSPAN\\nAEROZOIN\\nAFEDITAB CR\\nAFINITOR\\nAFINITOR 10\\nAFINITOR 5\\nAFIRMELLE 28 DAY\\nAFISH OIL\\nAFLAXEN\\nAFLURIA 2008-2009 FORMULA\\nAFLURIA 2009-2010 FORMULA\\nAFLURIA 2010-2011 FORMULA\\nAFLURIA 2011-2012 FORMULA\\nAFLURIA 2012-2013 FORMULA\\nAFLURIA 2013-2014 FORMULA\\nAFLURIA 2014-2015 FORMULA\\nAFLURIA 2015-2016\\nAFLURIA 2016-2017\\nAFLURIA 2017-2018\\nAFLURIA QUADRIVALENT 2016-2017 FORMULA\\nAFLURIA QUADRIVALENT 2017-2018\\nAFREZZA\\nAFREZZA 180 - 90 (4 UNT), 90 (8 UNT)\\nAFREZZA 180 TITRATION PACK- 60 (4 UNT), 60 (8 UNT), 60 (12 UNT)\\nAFREZZA 90 - 30 (4 UNT), 60 (8 UNT)\\nAFREZZA 90 - 60 (4 UNT), 30 (8 UNT)\\nAFREZZA 90 - 60 (8 UNT), 30 (12 UNT)\\nAFREZZA TITRATION PACK\\nAFRIN\\nAFRIN 4 HOUR EXTRA MOISTURIZING\\nAFRIN NASAL\\nAFRIN NASAL SINUS\\nAFRINOL\\nAFSTYLA\\nAFTATE\\nAFTATE FOR ATHLETES FOOT\\nAFTATE FOR JOCK ITCH\\nAFTERA\\nAGENERASE\\nAGGRASTAT\\nAGGRENOX\\nAGORAL\\nAGORAL PLAIN\\nAGRIFLU 2009-2010 FORMULA\\nAGRIFLU 2010-2011 FORMULA\\nAGRIFLU 2012-2013 FORMULA\\nAGRYLIN\\nAH-CHEW\\nAH-CHEW D\\nAH-CHEW II\\nAH-CHEW ULTRA TANNATE\\nAHIST\\nAHIST ANTIHISTAMINE\\nAID TO SLEEP\\nAIMOVIG\\nAIR SALONPAS\\nAIRACOF\\nAIRDUO\\nAIRET\\nAK-BETA\\nAK-CHLOR\\nAK-CIDE\\nAK-CON\\nAK-CON-A\\nAK-DEX\\nAK-DILATE\\nAK-FLUOR\\nAK-NACL\\nAK-NEFRIN\\nAK-NEO-DEX\\nAK-PENTOLATE\\nAK-POLY-BAC\\nAK-PRED\\nAK-PRO\\nAK-SPORE HC\\nAK-SPORE HC OINTMENT\\nAK-SULF\\nAK-T-CAINE\\nAK-TAINE\\nAK-TRACIN\\nAK-TROL\\nAKARPINE\\nAKINETON\\nAKNEMYCIN\\nAKOVAZ\\nAKTEN\\nAKTIPAK\\nAKURZA\\nAKWA TEARS\\nAKWA TEARS SOLUTION\\nAKYNZEO\\nALA SEB\\nALA SEB T\\nALA-CORT\\nALA-HIST\\nALA-HIST AC\\nALA-HIST D\\nALA-HIST DM\\nALA-HIST IR\\nALA-HIST LQ\\nALA-HIST PE\\nALA-QUIN\\nALA-SCALP\\nALA-SCALP HP\\nALA-TET\\nALACOL\\nALACOL DM\\nALAGESIC\\nALAHIST AC\\nALAHIST DM\\nALAMAG\\nALAMAG PLUS\\nALAMAG PLUS REFORMULATED MAR 2010\\nALAMAST\\nALAVERT\\nALAVERT D\\nALAWAY\\nALBALON\\nALBAMYCIN\\nALBATUSSIN NN\\nALBATUSSIN PEDIATRIC\\nALBENZA\\nALBUKED\\nALBUMARC\\nALBUMIN-ALPINE\\nALBUMINAR\\nALBUMINAR-20\\nALBUMINAR-25\\nALBUMINAR-5\\nALBUNEX\\nALBURX\\nALBUTEIN\\nALCAINE\\nALCARE\\nALCOH-GLOVE\\nALCOH-WIPE\\nALCONEFRIN-12\\nALCONEFRIN-25\\nALCORTIN\\nALCORTIN A\\nALDACTAZIDE\\nALDACTONE\\nALDARA\\nALDEX\\nALDEX AN\\nALDEX CT\\nALDEX D\\nALDEX DM\\nALDEX GS\\nALDEX GS DM\\nALDOCLOR-150\\nALDOCLOR-250\\nALDOMET\\nALDOMET ESTER\\nALDORIL\\nALDROXICON\\nALDROXICON II\\nALDURAZYME\\nALECENSA\\nALENAZE-D\\nALENIC ALKA\\nALENIC ALKA CHEWABLE TABLET\\nALER-DRYL\\nALER-TAB\\nALERA\\nALERTNESS AL\\nALESSE\\nALESSE 28 DAY\\nALEVAZOL\\nALEVE\\nALEVE CAPLET\\nALEVE COLD AND SINUS\\nALEVE GELCAP\\nALEVE PM\\nALEVE SINUS & HEADACHE\\nALEVE-D\\nALFENTA\\nALFERON N\\nALGAL-900\\nALGINIC COMPOUND\\nALGIOTIC\\nALI FLEX\\nALICLEN\\nALIDRIN\\nALIGN\\nALIMTA\\nALINIA\\nALIQOPA\\nALKA-MINTS\\nALKA-SELTZER\\nALKA-SELTZER ANTI-GAS\\nALKA-SELTZER COLD AND SINUS\\nALKA-SELTZER FRUIT CHEWS\\nALKA-SELTZER GOLD\\nALKA-SELTZER HEARTBURN PLUS GAS RELIEF\\nALKA-SELTZER HEARTBURN RELIEF\\nALKA-SELTZER MORNING RELIEF\\nALKA-SELTZER PLUS ALLERGY\\nALKA-SELTZER PLUS COLD\\nALKA-SELTZER PLUS COLD AND COUGH\\nALKA-SELTZER PLUS COLD AND COUGH EFFERVESCENT\\nALKA-SELTZER PLUS COLD AND COUGH REFORMULATED MAR 2007\\nALKA-SELTZER PLUS COLD AND SINUS\\nALKA-SELTZER PLUS COLD LIQUIGEL\\nALKA-SELTZER PLUS COLD MEDICINE\\nALKA-SELTZER PLUS COLD NON-DROWSY\\nALKA-SELTZER PLUS COLD REFORMULATED OCT 2009\\nALKA-SELTZER PLUS COUGH AND COLD LIQUIGEL\\nALKA-SELTZER PLUS COUGH AND COLD LIQUIGEL REFORMULATED AUG 2011\\nALKA-SELTZER PLUS D MULTI-SYMPTOM SINUS & COLD\\nALKA-SELTZER PLUS DAY AND NIGHT MULTI-SYMPTOM COLD AND FLU\\nALKA-SELTZER PLUS DAY COLD AND FLU\\nALKA-SELTZER PLUS DAY SEVERE COLD, COUGH AND FLU\\nALKA-SELTZER PLUS FLU\\nALKA-SELTZER PLUS FLU LIQUIGELS\\nALKA-SELTZER PLUS FLU REFORMULATED JAN 2011\\nALKA-SELTZER PLUS MUCUS AND CONGESTION\\nALKA-SELTZER PLUS NIGHT COLD\\nALKA-SELTZER PLUS NIGHT COLD AND FLU\\nALKA-SELTZER PLUS NIGHT SEVERE COLD, COUGH AND FLU\\nALKA-SELTZER PLUS NIGHT TIME\\nALKA-SELTZER PLUS NIGHT TIME COLD\\nALKA-SELTZER PLUS NIGHT TIME COLD LIQUIGEL\\nALKA-SELTZER PLUS NIGHT TIME EFFERVESCENT\\nALKA-SELTZER PLUS NIGHT TIME REFORMULATED DEC 2006\\nALKA-SELTZER PLUS SEVERE SINUS CONGESTION AND COUGH\\nALKA-SELTZER PM\\nALKABEL\\nALKERAN\\nALKERAN I.V.\\nALKETS\\nALKUMS\\nALL CLEAR\\nALL DAY ALLERGY CHILDREN\'S\\nALL DAY C CR\\nALL-NITE COLD\\nALLAN TANNATE PEDIATRIC\\nALLANDERM\\nALLANENZYME\\nALLANFIL\\nALLANFILLENZYME\\nALLANHIST\\nALLANHIST PDX\\nALLANZYME\\nALLAY\\nALLEGRA\\nALLEGRA COOLING RELIEF ANTI-ITCH\\nALLEGRA-D\\nALLEGRA-D 12 HOUR\\nALLEGRA-D 24 HOUR\\nALLENT\\nALLEPAK DOSE PACK 10\\nALLER-CHLOR\\nALLER-CHLOR DECONGESTANT\\nALLER-DRYL TOPICAL\\nALLER-FLO\\nALLER-TEC\\nALLER-TEC D\\nALLERCLEAR\\nALLERCON\\nALLERDUR\\nALLEREST\\nALLEREST 12 HOUR\\nALLEREST 12 HOUR NASAL SPRAY\\nALLEREST EYE DROPS\\nALLEREST HEADACHE STRENGTH\\nALLEREST MAXIMUM STRENGTH\\nALLEREST NO DROWSINESS\\nALLEREST PE\\nALLEREST SINUS\\nALLERFRIM\\nALLERFRIN WITH CODEINE\\nALLERGEN EAR\\nALLERGIA-C\\nALLERGY COLD LA\\nALLERGY DN PE\\nALLERGY MEDICINE ANTIHISTAMINE\\nALLERGY PLUS CONGESTION\\nALLERGY RELIEF\\nALLERGY SINUS\\nALLERGYCOLD\\nALLERHIST-1\\nALLERHIST-D\\nALLERLIEF\\nALLERMAX\\nALLERNAZE\\nALLEROFF\\nALLERPHED\\nALLERSOL\\nALLERSOL A\\nALLERSOL-A\\nALLERTAN\\nALLERX\\nALLERX 30 DOSE PACK\\nALLERX AM\\nALLERX DF AM\\nALLERX DF DOSE PACK 10\\nALLERX DF DOSE PACK 30\\nALLERX DF PM\\nALLERX DF SAMPLE\\nALLERX DOSE PACK 10\\nALLERX DOSE PACK 10 REFORMULATED APR 2008\\nALLERX DOSE PACK 30\\nALLERX DOSE PACK 30 REFORMULATED APR 2008\\nALLERX DOSE PACK DF 10\\nALLERX DOSE PACK DF 30\\nALLERX DOSE PACK PE 10\\nALLERX DOSE PACK PE 30\\nALLERX PE AM\\nALLERX PE DOSE PACK 10\\nALLERX PE DOSE PACK 30\\nALLERX PE PM\\nALLERX PE SAMPLE\\nALLERX PM\\nALLERX PM REFORMULATED APR 2008\\nALLERX REFORMULATED OCT 2008\\nALLERX SAMPLE\\nALLERX SUSPENSION\\nALLERX SUSPENSION REFORMULATED JUL 2007\\nALLERX-D\\nALLFEN\\nALLFEN C\\nALLFEN CD\\nALLFEN CDX\\nALLFEN CX\\nALLFEN DM\\nALLFEN DM REFORMULATED JUL 2008\\nALLFEN JR\\nALLFEN REFORMULATED MAR 2007\\nALLI\\nALLRES D\\nALLRES DS\\nALLRES G\\nALLRES PD\\nALMACONE\\nALMORA\\nALOCANE\\nALOCANE PLUS\\nALOCRIL\\nALODOX\\nALOE CORT\\nALOE VESTA\\nALOE VESTA 2 IN 1 ANTIFUNGAL\\nALOE VESTA ANTIFUNGAL\\nALOE VESTA DAILY MOISTURIZER\\nALOE VESTA PROTECTIVE BARRIER\\nALOE VESTA SKIN CONDITIONER\\nALOH-GEL\\nALOMIDE\\nALOPHEN\\nALOPHEN PILLS-CHOCOLATE\\nALOPHEN REFORMULATED JAN 2008\\nALOPRIM\\nALOQUIN\\nALOR 5500\\nALORA\\nALOXI\\nALPAIN\\nALPHA E\\nALPHAGAN\\nALPHAGAN-P\\nALPHANATE\\nALPHANINE\\nALPHANINE SD\\nALPHAQUIN HP\\nALPHATREX\\nALPHEN\\nALPHEN EXPECTORANT\\nALPRAZALAM\\nALPRAZOLAM INTENSOL\\nALPROLIX\\nALPROZOLAM\\nALRAMUCIL\\nALREX\\nALSUMA\\nALTABAX\\nALTACAINE\\nALTACE\\nALTAFED\\nALTAFLOR\\nALTAFLUOR\\nALTAFRIN\\nALTALUBE\\nALTAMIST\\nALTARUSSIN CF\\nALTARUSSIN PE\\nALTARYL\\nALTATAPP\\nALTAVERA 28 DAY\\nALTAZINE\\nALTERNAGEL\\nALTEX LIQUID\\nALTINAC\\nALTOCOR\\nALTOPREV\\nALTORANT\\nALU-CAP\\nALU-TAB\\nALUMADRINE\\nALUMINA AND MAGNESIA\\nALUMINAMAGNESIASIMETHICONE\\nALUNBRIG\\nALUNBRIG INITIATION PACK\\nALUPENT\\nALUSTRA\\nALUVEA\\nALVESCO\\nALYACEN 135\\nALYACEN 777\\nAMABELZ 0.50.1 28 DAY\\nAMABELZ 10.5 28 DAY\\nAMARYL\\nAMBENYL\\nAMBENYL-D\\nAMBI 10005\\nAMBI 10PEH400GFN\\nAMBI 1200\\nAMBI 40100060\\nAMBI 515100\\nAMBI EVEN & CLEAR\\nAMBIEN\\nAMBIFED CD\\nAMBIFED CDX\\nAMBIFED DM\\nAMBIFED G DM REFORMULATED JUL 2008\\nAMBIFED REFORMULATED JUL 2008\\nAMBIFED-G\\nAMBIFED-G CD\\nAMBIFED-G CDX\\nAMBISOME\\nAMBOPHEN\\nAMCORT\\nAMELUZ\\nAMEN\\nAMERGE\\nAMERICAINE\\nAMERICAINE ANESTHETIC LUBRICANT\\nAMERICAINE HEMORRHOIDAL\\nAMERICAINE OTIC\\nAMERICET\\nAMERIFED\\nAMERIFED DM\\nAMERITUSS AD\\nAMETHIA 91 DAY\\nAMETHIA LO 91 DAY\\nAMETHYST 28 DAY\\nAMEVIVE\\nAMI-RAX\\nAMI-TEX\\nAMI-TEX LA\\nAMIBID DM\\nAMIBID LA\\nAMICAR\\nAMIDATE\\nAMIGESIC\\nAMIKIN\\nAMIKIN PEDIATRIC\\nAMILAC\\nAMILON\\nAMINO ACID-UREA CREAM\\nAMINO-CERV\\nAMINO-OPTI-E\\nAMINOSYN\\nAMINOSYN 10\\nAMINOSYN 10%, SULFITE-FREE\\nAMINOSYN 3.5\\nAMINOSYN 3.5 % M, SULFITE FREE\\nAMINOSYN 3.5%, SULFITE-FREE\\nAMINOSYN 5\\nAMINOSYN 5%, SULFITE-FREE\\nAMINOSYN 7\\nAMINOSYN 7 % WITH ELECTROLYTES, SULFITE-FREE\\nAMINOSYN 7 SULFITE FREE\\nAMINOSYN 7%, SULFITE-FREE\\nAMINOSYN 8.5\\nAMINOSYN 8.5 % WITH ELECTROLYTES, SULFITE-FREE\\nAMINOSYN 8.5%, SULFITE-FREE\\nAMINOSYN II\\nAMINOSYN II 10 %\\nAMINOSYN II 15%\\nAMINOSYN II 3.5 % IN 25 % DEXTROSE\\nAMINOSYN II 3.5 % M IN 5 % DEXTROSE\\nAMINOSYN II 3.5 % WITH ELECTROLYTES IN 25 % DEXTROSE WITH CALCIUM\\nAMINOSYN II 3.5 WITH ELECTROLYTES\\nAMINOSYN II 3.5% IN 25% DEXTROSE\\nAMINOSYN II 3.5% IN 5% DEXTROSE\\nAMINOSYN II 4.25 % WITH ELECTROLYTES IN 25 % DEXTROSE WITH CALCIUM\\nAMINOSYN II 4.25 WITH ELECTROLYTES\\nAMINOSYN II 4.25% IN 10% DEXTROSE\\nAMINOSYN II 4.25% IN 20% DEXTROSE\\nAMINOSYN II 4.2525\\nAMINOSYN II 4.5 % M IN 10 % DEXTROSE\\nAMINOSYN II 5% IN 25% DEXTROSE\\nAMINOSYN II 525\\nAMINOSYN II 7 %, SULFITE-FREE\\nAMINOSYN II 8.5 % WITH ELECTROLYTES, SULFITE-FREE\\nAMINOSYN II 8.5 %, SULFITE-FREE\\nAMINOSYN II 8.5 WITH ELECTROLYTES\\nAMINOSYN PF 7\\nAMINOSYN-HBC 7 %, SULFITE-FREE\\nAMINOSYN-HF 8 %\\nAMINOSYN-PF 10 %, SULFITE-FREE\\nAMINOSYN-PF 7%\\nAMINOSYN-RF 5.2 %, SULFITE-FREE\\nAMITEX LA\\nAMITIZA\\nAMITONE\\nAMLACTIN\\nAMLACTIN AP\\nAMMONUL\\nAMNESTEEM\\nAMOCLAN\\nAMOCLAN 200\\nAMOCLAN 400\\nAMOCLAN 600\\nAMOXICOT\\nAMOXIL\\nAMOXIL PEDIATRIC DROPS\\nAMPHADASE\\nAMPHOJEL\\nAMPHOTEC\\nAMPROL 128\\nAMPYRA\\nAMRIX\\nAMTURNIDE\\nAMTUSSIN\\nAMVISC\\nAMYTAL\\nANA-GUARD\\nANA-LEX\\nANA-LEX HC\\nANABAR\\nANABOLIN LA\\nANACAINE\\nANACIN\\nANACIN ADVANCED HEADACHE FORMULA\\nANACIN AF\\nANACIN ASPIRIN REGIMEN\\nANACIN P.M. ASPIRIN FREE\\nANACIN PM ASPIRIN FREE\\nANACIN-3 MAXIMUM STRENGTH\\nANADROL-50\\nANAFLEX\\nANAFRANIL\\nANALGESIC BALM GRX\\nANALGESIC BALM WITH CAPSAICIN\\nANALGESIC PAIN RELIEVER\\nANALPRAM E KIT WITH 1 PRAX MEDICATED PAD\\nANALPRAM E KIT WITH 18 PRAX MEDICATED PADS\\nANALPRAM E KIT WITH 6 PRAX MEDICATED PAD\\nANALPRAM E TOPICAL CREAM WITH 18 MEDICATED PADS\\nANALPRAM E TOPICAL CREAM WITH 6 MEDICATED PADS\\nANALPRAM HC\\nANALPRAM HC 1%  1%\\nANALPRAM HC 2.5%  1%\\nANAMANTLE HC\\nANAMANTLE HC GEL\\nANAMINE\\nANAMINE T.D.\\nANAPLEX\\nANAPLEX DM\\nANAPLEX HD\\nANAPROX\\nANAPROX DS\\nANASCORP\\nANASEPT\\nANASPAZ\\nANATUSS\\nANATUSS DM\\nANATUSS LA\\nANBESOL\\nANBESOL BABY TEETH\\nANBESOL COLD SORE THERAPY\\nANBESOL MAXIMUM STRENGTH\\nANCEF\\nANCOBON\\nANDEC\\nANDEC-TR\\nANDECON PEDIATRIC DROPS\\nANDEHIST\\nANDEHIST DM\\nANDEHIST DM NR\\nANDEHIST DM REFORMULATED SEP 2008\\nANDEHIST NR\\nANDEHIST REFORMULATED SEP 2008\\nANDEXXA\\nANDRO LA\\nANDRO LA 200\\nANDRO-CYP 100\\nANDRO-CYP 200\\nANDRODERM\\nANDROGEL\\nANDROID\\nANDROID-10\\nANDROID-25\\nANDROLONE-D\\nANDROXY\\nANDRYL 200\\nANECREAM\\nANECTINE\\nANECTINE FLO-PACK\\nANEMAGEN\\nANERGAN\\nANERGAN 50\\nANEST HEMOR\\nANESTACAINE\\nANESTACON\\nANESTAFOAM\\nANEXSIA\\nANEXTUSS\\nANGELIQ 0.250.5 28 DAY\\nANGELIQ 0.51 28 DAY\\nANGELIQ 28 DAY\\nANGIOFLUOR\\nANGIOMAX\\nANGIOSCEIN\\nANIMI-3\\nANIMI-3 WITH VITAMIN D\\nANIODARONE\\nANNAPLEX DMX\\nANOLOR\\nANOLOR DH5\\nANOQUAN\\nANOREX\\nANOREX-SR\\nANORO\\nANSAID\\nANTABUSE\\nANTACID ANTI-GAS\\nANTACID DS\\nANTACID DS WITH SIMETHICONE\\nANTACID I\\nANTACID II\\nANTACID M\\nANTACID M PLUS\\nANTACID PLUS\\nANTACID WITH SIMETHICONE\\nANTACID WITH SIMETHICONE II\\nANTAGON\\nANTARA\\nANTATENS\\nANTHIM\\nANTHRA-DERM\\nANTHRASIL\\nANTI-DIARRHEAL\\nANTI-GAS\\nANTI-GAS-80\\nANTI-ITCH HC\\nANTI-TUSS\\nANTI-TUSS DM\\nANTIBIOTIC EAR\\nANTIBIOTIC WITH PRAMOXINE\\nANTIBIOTIC-CORT EAR\\nANTIFLEX\\nANTIFUNGAL AGENTS\\nANTIHIST\\nANTIHIST-1\\nANTIHISTAMINE 12 HOUR\\nANTIHISTAMINE-DECONGESTANT 12 HOUR\\nANTILIRIUM\\nANTIMINTH\\nANTINAUS 50\\nANTISEPT\\nANTISPAS\\nANTITUSS\\nANTITUSS AC\\nANTITUSS DM\\nANTITUSSIN\\nANTITUSSIN DM\\nANTIVERT\\nANTIZOL\\nANTROCOL\\nANTUROL\\nANUCORT-HC\\nANUMED-HC\\nANUPREP-HC\\nANURX-HC\\nANUSERT\\nANUSERT HC-1\\nANUSERT OINTMENT\\nANUSOL\\nANUSOL HC\\nANUSOL HC-1\\nANUTONE-HC\\nANUZONE HC\\nANX\\nANZEMET\\nAPACET\\nAPADAZ\\nAPAGESIC\\nAPAP EXTRA STRENGTH\\nAPAP FRUIT\\nAPAP JUNIOR STRENGTH\\nAPAP SLEEP\\nAPAP-PM\\nAPAPGESIC\\nAPARA\\nAPEXICON\\nAPF GEL\\nAPHEDRID\\nAPHTHASOL\\nAPIDRA\\nAPLENZIN\\nAPLISOL\\nAPOKYN\\nAPPEAREX\\nAPPECON\\nAPRA\\nAPRESAZIDE\\nAPRESOLINE\\nAPRI\\nAPRI 28 DAY\\nAPRIDRA\\nAPRISO\\nAPRODINE\\nAPRODINE WITH CODEINE\\nAPTENSIO\\nAPTIOM\\nAPTIOM TITRATION SAMPLE PACK\\nAPTIVUS\\nAQUA CARE\\nAQUA GLYCOLIC\\nAQUA GLYCOLIC SHAMPOO AND BODY CLEANSER\\nAQUA-BAN\\nAQUABID DM\\nAQUACHLORAL SUPPRETTES\\nAQUACILLIN\\nAQUACOT\\nAQUAFRESH\\nAQUAFRESH SENSITIVE\\nAQUAFRESH WHITE AND SHINE\\nAQUALAX\\nAQUALAX FORTE\\nAQUAMEPHYTON\\nAQUAMIST\\nAQUANIL HC\\nAQUAPHILIC WITH UREA\\nAQUAPHOR\\nAQUAPHOR DIAPER RASH\\nAQUAPHYLLIN\\nAQUASOL A\\nAQUASOL E\\nAQUATAB C\\nAQUATAB C REFORMULATED DEC 2008\\nAQUATAB C REFORMULATED NOV 2006\\nAQUATAB C REFORMULATED OCT 2008\\nAQUATAB D\\nAQUATAB D DOSE PACK\\nAQUATAB D REFORMULATED DEC 2008\\nAQUATAB D REFORMULATED NOV 2006\\nAQUATAB DM\\nAQUATAB DM 28835\\nAQUATENSEN\\nAQUAVITE-E\\nAQUAZIDE H\\nAQUEST\\nARALAST\\nARALEN HYDROCHLORIDE\\nARALEN PHOSPHATE\\nARAMINE\\nARANELLE 28\\nARANESP\\nARAVA\\nARBINOXA\\nARCALYST\\nARCAPTA\\nARCET\\nARCO-LASE\\nARDUAN\\nAREDIA\\nARESTIN\\nARFONAD\\nARGESIC-SA\\nARICEPT\\nARICIN\\nARIDEX\\nARIDEX-D\\nARIMIDEX\\nARIMIDEX 14 DAY\\nARISOPRODOL\\nARISTADA\\nARISTOCORT\\nARISTOCORT A\\nARISTOCORT FORTE\\nARISTOCORT R\\nARISTOCORT TOPICAL\\nARISTOPAK\\nARISTOSPAN\\nARIXTRA\\nARKALIOX\\nARLEX\\nARM-A-MED\\nARM-A-MED ISOETHARINE HCL\\nARMONAIR\\nARMOUR THYROID\\nARNUITY\\nAROMASIN\\nARRANON\\nARRID EXTRA DRY\\nARTANE\\nARTHRICARE FOR WOMEN MOISTURIZING\\nARTHRICARE FOR WOMEN PAIN RELIEVING NIGHTTIME\\nARTHRICARE FOR WOMEN ULTRA STRENGTH\\nARTHRITEN INFLAMMATORY PAIN\\nARTHRITIS FORMULA\\nARTHRITIS FOUNDATION\\nARTHRITIS FOUNDATION ASPIRIN\\nARTHRITIS FOUNDATION IB\\nARTHRITIS FOUNDATION MS\\nARTHRITIS PAIN\\nARTHRITIS PAIN FORMULA\\nARTHRITIS PAIN MED\\nARTHROPAN\\nARTHROTEC\\nARTHROTEC 50200\\nARTHROTEC 75200\\nARTHUR ITIS\\nARTICADENT\\nARTISS\\nARYMO\\nARZERRA\\nASACOL\\nASBRON G\\nASCAREL\\nASCLERA\\nASCOMP\\nASCOMP WITH CODEINE\\nASCOR\\nASCOR L 500\\nASCOT\\nASCRIPTIN\\nASCRIPTIN ENTERIC\\nASCRIPTIN MAXIMUM STRENGTH\\nASENDIN\\nASHLYNA 91 DAY\\nASMALIX\\nASMALPRED PLUS\\nASMANEX\\nASPER-FLEX\\nASPERCREME\\nASPERCREME HEAT PAIN RELIEVING\\nASPERCREME MAX\\nASPERCREME WITH LIDOCAINE\\nASPERDRINK\\nASPERGUM\\nASPERGUM CHERRY\\nASPERGUM ORANGE\\nASPI-COR\\nASPIDROX\\nASPIR-LOW\\nASPIR-MOX\\nASPIR-MOX IB\\nASPIR-TRIN\\nASPIRCAF\\nASPIRIN CHILD CHEWABLE\\nASPIRIN FREE CHILD\\nASPIRIN FREE EXTRA STRENGTH\\nASPIRIN LOW STRENGTH\\nASPIRIN-ANTACID\\nASPIRIN-FREE\\nASPIRTAB\\nASTAGRAF\\nASTELIN\\nASTEPRO\\nASTHMACON\\nASTHMAHALER\\nASTHMANEFRIN\\nASTRAMORPH\\nASTRAMORPH PF\\nASTRINGYN\\nATABEX DHA\\nATACAND\\nATACAND HCT\\nATAMET\\nATAPRYL\\nATARAX\\nATAZINE\\nATELVIA\\nATGAM\\nATIVAN\\nATNATIV\\nATO MEPIVACAINE V\\nATOPICA\\nATRAC-TAIN\\nATRALIN\\nATREZA\\nATRIDINE\\nATRIDOX\\nATRIPLA\\nATROFED\\nATROGEN\\nATROHIST PEDIATRIC\\nATROHIST PLUS\\nATROMID\\nATROPEN\\nATROPINE-CARE\\nATROSEPT\\nATROSULF-1\\nATROVENT\\nATROVENT NASAL\\nATRYN\\nATS\\nATTI PLEX P\\nATUSS 12 DM\\nATUSS 12 DX\\nATUSS DM\\nATUSS DR\\nATUSS DS\\nATUSS EX\\nATUSS EX REFORMULATED FEB 2008\\nATUSS G\\nATUSS HD\\nATUSS HD EXTENDED RELEASE\\nATUSS HS\\nATUSS HX\\nATUSS MR\\nATUSS MS\\nAUBAGIO\\nAUBRA 28 DAY\\nAUGMENTIN\\nAUGMENTIN 125-MG CHEWABLE\\nAUGMENTIN 200-MG CHEWABLE\\nAUGMENTIN 250-MG\\nAUGMENTIN 250-MG CHEWABLE\\nAUGMENTIN 400-MG CHEWABLE\\nAUGMENTIN 500-MG\\nAUGMENTIN 875-MG\\nAURALGAN\\nAURAPHENE-B\\nAUREOMYCIN\\nAURO EACHE RELIEF\\nAURO EAR\\nAURO EAR DROPS\\nAURO-DRI\\nAURODEX\\nAUROGUARD\\nAUROLATE\\nAUROVELA 1.530 21 DAY\\nAUROVELA 120 21 DAY\\nAUROVELA FE 1.530 28 DAY\\nAUROVELA FE 120 28 DAY\\nAUROVELA FE 24 120 28 DAY\\nAURYXIA\\nAUSTEDO\\nAUVI-Q\\nAVAGARD\\nAVAGE\\nAVAILNEX\\nAVALIDE\\nAVANDAMET\\nAVANDAMET 1500\\nAVANDAMET 21000\\nAVANDAMET 2500\\nAVANDAMET 41000\\nAVANDAMET 4500\\nAVANDARYL\\nAVANDIA\\nAVAPRO\\nAVAR\\nAVAR LS\\nAVASTIN\\nAVEED\\nAVEENO ACTIVE NATURALS\\nAVEENO ACTIVE NATURALS DAILY MOISTURIZING\\nAVEENO ACTIVE NATURALS NOURISH PLUS DANDRUFF CONTROL\\nAVEENO ACTIVE NATURALS SKIN RELIEF\\nAVEENO ANTI-ITCH\\nAVEENO ANTI-ITCH REFORMULATED JUN 2007\\nAVEENO BABY\\nAVEENO BABY CALMING COMFORT\\nAVEENO BABY DAILY MOISTURE\\nAVEENO BABY DIAPER RASH CREAM\\nAVEENO BABY SOOTHING RELIEF DIAPER RASH\\nAVEENO CLEAR COMPLEXION\\nAVEENO CLEAR COMPLEXION DAILY CLEANSING\\nAVEENO HEALING OINTMENT\\nAVEENO HYDROCORTISONE ANTI-ITCH\\nAVELOX\\nAVELOX ABC\\nAVELOX I.V.\\nAVENTYL HCL\\nAVERTEAX OINTMENT\\nAVIANE\\nAVIANE 28\\nAVIDOXY\\nAVIDOXY PACK\\nAVINZA\\nAVITA\\nAVOCA\\nAVODART\\nAVONEX\\nAVYCAZ\\nAXERT\\nAXID\\nAXID AR\\nAXID PULVULES\\nAXIRON\\nAXOTAL\\nAXSAIN\\nAYGESTIN\\nAYR SALINE NASAL\\nAYUNA 28 DAY PACK\\nAZACTAM\\nAZASAN\\nAZASITE\\nAZDONE\\nAZELEX\\nAZILECT\\nAZMACORT\\nAZO GANTANOL\\nAZO GANTRISIN\\nAZO URINARY PAIN RELIEF\\nAZO URINARY TRACT DEFENSE\\nAZO-100\\nAZO-CRANBERRY\\nAZO-GESIC\\nAZO-STANDARD\\nAZO-STANDARD MAX STRENGTH\\nAZO-TRUXAZOLE\\nAZOPT\\nAZOR\\nAZULFIDINE\\nAZURETTE 28 DAY', '\\n'), com.fc.JavaScriptDistLib.TextLib.textSplitWith('B & O SUPPRETTES 15-A\\nB & O SUPPRETTES 16-A\\nB-12 RESIN\\nB-3-50\\nB-CARO-T\\nB-D GLUCOSE\\nB-DONNA\\nB-FEDRINE\\nB-FEDRINE PD\\nB-NATAL\\nB-TUSS\\nB-VEX PD\\nB. C. POWDER\\nB.C. HEADACHE\\nB.S.S.\\nB3-500-GR\\nBABEE COF\\nBABY ANTI MONKEY BUTT DIAPER RASH CREAM\\nBABY ANTI MONKEY BUTT DIAPER RASH POWDER\\nBABY GAS\\nBABYBIG\\nBACI-IM\\nBACIGUENT\\nBACITRACIN-NEO-POLY\\nBACKAID IPF\\nBACKPRIN\\nBACTINE\\nBACTOCILL\\nBACTOSHIELD\\nBACTRIM\\nBACTRIM DS\\nBACTRIM I.V. INFUSION\\nBACTRIM PEDIATRIC\\nBACTROBAN\\nBAL IN OIL\\nBALACALL DM\\nBALACET\\nBALAMINE DM\\nBALAMINE DM REFORMULATED APR 2013\\nBALANCER\\nBALANTA\\nBALCOLTRA 28 DAY\\nBALMEX\\nBALMEX OINTMENT\\nBALNETAR\\nBALOX PLUS\\nBALTUSSIN\\nBALTUSSIN HC\\nBALTUSSSIN HC\\nBALZIVA\\nBALZIVA 28\\nBALZIVA 28 DAY\\nBANADYNE\\nBANALG\\nBANALG MUSCLE PAIN RELIEVER\\nBANARIL\\nBANCAP HC\\nBAND-AID ANTI-ITCH\\nBAND-AID HURT-FREE\\nBANEOL CLEANSER\\nBANEX\\nBANEX-LA\\nBANFLEX\\nBANOPHEN\\nBANOPHEN ANTI ITCH\\nBANOPHEN CREAM\\nBANOPHEN M-S\\nBANZEL\\nBAR-TEST\\nBARACLUDE\\nBARBIDONNA\\nBARIDIUM\\nBARMINE\\nBAROGAN\\nBAROPHEN\\nBARRI-CARE\\nBASAGLAR\\nBASALJEL\\nBASERETIC\\nBAVENCIO\\nBAXDELA\\nBAYCADRON\\nBAYCOL\\nBAYER\\nBAYER ASPIRIN\\nBAYER ASPIRIN PLUS CALCIUM\\nBAYER ASPIRIN PM EXTRA STRENGTH\\nBAYER ASPIRIN PM REFORMULATED NOV 2011\\nBAYER ASPIRIN WITH CALCIUM\\nBAYER BACK AND BODY PAIN\\nBAYER CHILDRENS ASPIRIN\\nBAYER HEADACHE RELIEF\\nBAYER LOW STRENGTH\\nBAYER MIGRAINE\\nBAYER MUSCLE AND JOINT CREAM\\nBAYER PLUS\\nBAYER SELECT\\nBAYER SELECT BACKACHE PAIN FORMULA\\nBAYER SELECT DECONGESTANT\\nBAYER SELECT MAX STRENGTH NIGHT TIME PAIN\\nBAYER SELECT SINUS PAIN FORMULA\\nBAYER WOMENS\\nBAYGAM\\nBAYHEP B\\nBAYRAB\\nBAYRHO-D\\nBAYTET\\nBAZA\\nBAZA ANTIFUNGAL\\nBAZA CLEANSE AND PROTECT\\nBAZA CLEAR\\nBAZA-PROTECT\\nBC ARTHRITIS\\nBC HEADACHE\\nBC ORIGINAL FORMULA\\nBC POWDER 65033.3195\\nBD ALCOHOL\\nBD SALINE FLUSH\\nBEANO\\nBEANO DAIRY DEFENSE\\nBEBULIN\\nBECLOVENT\\nBECONASE\\nBECONASE AQ\\nBEDSIDE-CARE\\nBEEGENTLE\\nBEELITH\\nBEEPEN-VK\\nBEKYREE 28 DAY\\nBEL-PHEN-ERGOT\\nBEL-TABS\\nBELBUCA\\nBELCOMP-PB\\nBELDIN\\nBELEODAQ\\nBELIX\\nBELLADONNA-PHENOBARBITAL\\nBELLALPHEN\\nBELLAMINE S\\nBELLAMOR\\nBELLAPHEN-S\\nBELLASPAS\\nBELLATAL\\nBELSOMRA\\nBELVIQ\\nBEN-AQUA\\nBENADRYL\\nBENADRYL ALLERGY COLD\\nBENADRYL ALLERGY COLD REFORMULATED JUN 2007\\nBENADRYL ALLERGY PLUS CONGESTION\\nBENADRYL ALLERGY SINUS\\nBENADRYL ALLERGY SINUS HEADACHE\\nBENADRYL CHILD ALLERGY AND SINUS\\nBENADRYL CHILDREN\'S ANTI-ITCH\\nBENADRYL CHILDRENS ALLERGY AND COLD\\nBENADRYL CREAM (CHILD)\\nBENADRYL DECONGESTANT ALLERGY\\nBENADRYL DYE FREE ALLERGY\\nBENADRYL EXTRA STRENGTH\\nBENADRYL ITCH STOP GEL MAXIMUM STRENGTH\\nBENADRYL ITCH STOPPING\\nBENADRYL MAXIMUM STRENGTH\\nBENADRYL READYMIST ITCH STOPPING\\nBENADRYL SEVERE ALLERGY SINUS HEADACHE REFORMULATED JUN 2007\\nBENADRYL-D ALLERGY AND SINUS\\nBENADRYL-D FASTMELT ALLERGY AND SINUS\\nBENAHIST-10\\nBENAHIST-50\\nBENAZPEPRIL\\nBENCORT\\nBENDEKA\\nBENEFIBER\\nBENEFIX\\nBENEKRAFT-25\\nBENEMID\\nBENGAY\\nBENGAY ARTHRITIS\\nBENGAY ORIGINAL\\nBENGAY PRO-COOL\\nBENGAY ULTRA\\nBENICAR\\nBENICAR HCT\\nBENLYSTA\\nBENOJECT-50\\nBENOQUIN\\nBENOXYL\\nBENOXYL 10\\nBENOXYL 5\\nBENOXYLDOXY 30\\nBENOXYLDOXY 60\\nBENSAL\\nBENSAL HP\\nBENTYL\\nBENYLIN\\nBENYLIN ADULT FORMULA\\nBENYLIN DM PEDIATRIC\\nBENYLIN MULTI-SYMPTOM\\nBENYLIN MULTI-SYMPTOM COUGH\\nBENYLIN PEDIATRIC\\nBENZ-ALL\\nBENZ-O-STHETIC\\nBENZA\\nBENZAC\\nBENZAC AC\\nBENZAC W\\nBENZACLIN\\nBENZACOT\\nBENZAGEL WASH\\nBENZAGELWASH\\nBENZAMYCIN\\nBENZASHAVE\\nBENZASHAVE 10\\nBENZASHAVE 5\\nBENZEDREX\\nBENZEFOAM\\nBENZEPRIL\\nBENZEPRO\\nBENZIQ\\nBENZIQ LS\\nBENZIQ WASH\\nBENZO-JEL\\nBENZODENT\\nBENZONATE\\nBENZTROINE\\nBEPREVE\\nBERINERT\\nBERRI-FREEZ\\nBERRI-FREEZ PLUS\\nBESIVANCE\\nBESPONSA\\nBETA HC\\nBETA MED\\nBETA-2\\nBETA-HC\\nBETA-VAL\\nBETADERM\\nBETADINE\\nBETADINE ANTIBIOTIC\\nBETADINE PLUS ANTIBIOTIC AND PAIN RELIEVER\\nBETADINE SHAMPOO\\nBETADINE SKIN CLEANSER\\nBETAGAN\\nBETAMETHACOT\\nBETANATE\\nBETAPACE\\nBETASAL\\nBETASEPT\\nBETASERON\\nBETATAN\\nBETATAR GEL\\nBETAVENT\\nBETAXON\\nBETHAPRIM PEDIATRIC\\nBETHKIS\\nBETIMOL\\nBETOPTIC\\nBETOPTIC PILO\\nBETOPTIC S\\nBEVESPI\\nBEVYXXA\\nBEXSERO\\nBEXTRA\\nBEXXAR DOSIMETRIC PACKAGING\\nBEXXAR THERAPEUTIC PACKAGING\\nBEYAZ 28 DAY\\nBEYONDCLEAR\\nBI-TANN DP\\nBIAVAX II\\nBIAXIN\\nBIAXIN 10 TABLET BLISTER PACK\\nBIAXIN XL PAC 14 TABLET PACK\\nBICARSIM\\nBICILLIN\\nBICILLIN C-R\\nBICILLIN C-R 900300\\nBICILLIN L-A\\nBICLORA\\nBICLORA-D\\nBICNU\\nBICOZENE\\nBIDEX\\nBIDEX-A\\nBIDEX-DM\\nBIDEX-DMI\\nBIDHIST\\nBIDHIST D\\nBIDIL\\nBIDNASE\\nBIFERA\\nBIFERARX\\nBIKTARVY\\nBILOPAQUE SODIUM\\nBILTRICIDE\\nBINOSTO\\nBIO-D-MULSION\\nBIO-STATIN\\nBIO-THROID\\nBIO-TROPIN\\nBIOCEF\\nBIODEC DM\\nBIODEC DM 2425\\nBIOFED-PE\\nBIOFLEXOR\\nBIOFREEZE\\nBIOGAIA\\nBIOHIST-LA\\nBIOLLE TEARS\\nBIOLON\\nBIOMOX\\nBION TEARS\\nBIONECT\\nBIOTENE DRY MOUTH\\nBIOTENE DRY MOUTH FLUORIDE\\nBIOTHRAX\\nBIOTUSS DM\\nBIOTUSS PE\\nBIOTUSS PEDIATRIC\\nBIOTUSSIN\\nBIOTUSSIN DAC\\nBISA-PLEX\\nBISAC-EVAC\\nBISCO-LAX\\nBISMAREX\\nBISMATROL\\nBISOLAX\\nBITEX\\nBITEX LIQUID\\nBIVIGAM\\nBLACK DRAUGHT\\nBLANEX-A\\nBLENOXANE\\nBLEOMYCINE\\nBLEPH-10\\nBLEPHAMIDE\\nBLEPHAMIDE S.O.P.\\nBLINCYTO\\nBLINK TEARS\\nBLIS-TO-SOL\\nBLIS-TO-SOL POWDER\\nBLISOVI 21 FE 1.530 28 DAY PACK\\nBLISOVI 21 FE 120 28 DAY PACK\\nBLISOVI 24 FE 120 28 DAY\\nBLISTEX\\nBLISTEX COLD & ALLERGY LIP SOOTHER\\nBLISTEX KANKA\\nBLISTEX KANKA SOFT BRUSH\\nBLISTEX MEDICATED LIP\\nBLISTEX ODOR-EATERS POWDER\\nBLOCADREN\\nBLOXIVERZ\\nBLUE GEL\\nBLUE-EMU PAIN RELIEF\\nBOCA HIST DM\\nBOCK-ARATE\\nBOIL-EASE\\nBONIKRAFT\\nBONINE\\nBONINE FOR KIDS\\nBONIVA\\nBONJESTA\\nBONTRIL\\nBONTRIL PDM\\nBONTRIL SLOW-RELEASE\\nBOOSTRIX\\nBOROFAIR\\nBOROFAX\\nBOROLEUM\\nBOSULIF\\nBOTOX\\nBOTOX COSMETIC\\nBOUDREAUXS BUTT PASTE\\nBOUDREAUXS RASH PROTECTOR\\nBOYOL SALVE\\nBP 10-WASH\\nBP ALLERGY DM\\nBP ALLERGY JR\\nBP ANA-LEX HC\\nBP CLEANSING WASH\\nBP POLY-650\\nBPM PE HC\\nBPM PEH\\nBPO\\nBRACCO\\nBRAFTOVI\\nBRANCHAMIN\\nBRAVELLE\\nBREATHE FREE SALINE\\nBREEZEE MIST\\nBREEZEE MIST FOOT PWDR\\nBREO\\nBREO ELLIPTA\\nBREONESIN\\nBRETHAIRE\\nBRETHINE\\nBRETYLOL\\nBREVIBLOC\\nBREVICON\\nBREVICON 28 DAY\\nBREVITAL\\nBREVITAL SODIUM\\nBREVOXYL\\nBREVOXYL CREAMY WASH\\nBREVOXYL-4 COMPLETE PACK\\nBREVOXYL-8 COMPLETE PACK\\nBRICANYL\\nBRIDION\\nBRIELLYN 28 DAY\\nBRILINTA\\nBRINEURA\\nBRINTELLIX\\nBRISDELLE\\nBRITE LIFE GLUCOSE\\nBRIVIACT\\nBRODSPEC\\nBROFED\\nBROM TANN\\nBROMADINE-DM\\nBROMADRINE PD\\nBROMADRINE TR\\nBROMALINE\\nBROMALINE DM\\nBROMALINE DM REFORMULATED FEB 2008\\nBROMALINE PLUS\\nBROMALINE REFORMULATED JUN 2008\\nBROMALINE SR\\nBROMANATE\\nBROMANATE AF\\nBROMANATE DC\\nBROMANATE DC COUGH\\nBROMANATE DM\\nBROMANATE DX COUGH\\nBROMANYL\\nBROMAPP\\nBROMAREST DX\\nBROMATAN\\nBROMATAN PLUS\\nBROMATANE DX\\nBROMATAPP\\nBROMATAPP SR\\nBROMATES\\nBROMATOL\\nBROMAX\\nBROMAXEFED DM RF\\nBROMAXEFED RF\\nBROMCOMP\\nBROMDAY\\nBROMDEC\\nBROMDEC DM\\nBROMDEX D\\nBROMETANE DX\\nBROMFED\\nBROMFED DM\\nBROMFED PD\\nBROMFED PD REFORMULATED OCT 2008\\nBROMFED REFORMULATED JUN 2008\\nBROMFENEX PE\\nBROMFENEX PE PEDIATRIC\\nBROMHIST NR\\nBROMHIST PDX\\nBROMHIST PDX SYRUP\\nBROMHIST PEDIATRIC DROPS\\nBROMHIST-DM\\nBROMHIST-DM DROPS\\nBROMHISTINE-P\\nBROMHISTINE-PD\\nBROMO SELTZER\\nBROMOPHED-DX\\nBROMOPHEN TD\\nBROMOPLEX DM\\nBROMOTUSS WITH CODEINE\\nBROMPH DM\\nBROMPH HD\\nBROMPHEN DC\\nBROMPHEN DC WITH CODEINE\\nBROMPHEN DX\\nBROMPHEN PPA DM\\nBROMPHENEX\\nBROMPHENEX DM\\nBROMPHENYL\\nBROMPLEX DM\\nBROMPLEX HD\\nBROMSITE\\nBROMTAPP\\nBROMUPHED\\nBRON-TUSS\\nBRONCHIAL MIST WITH PUMP\\nBRONCHO SALINE\\nBRONCHOLATE\\nBRONCODUR\\nBRONCOMAR\\nBRONCOMAR GG\\nBRONCOPECTOL SYRUP\\nBRONCOT\\nBRONCOTRON\\nBRONCOTRON D\\nBRONCOTRON PED\\nBRONCOTRON-D\\nBRONCOTRON-D REFORMULATED DEC 2012\\nBRONCOTRON-P\\nBRONDELATE\\nBRONITIN\\nBRONKAID\\nBRONKAID MIST\\nBRONKIDS\\nBRONKODYL\\nBRONKOMETER\\nBRONKOSOL\\nBRONKOTUSS\\nBRONTEX\\nBRONTEX 10100\\nBRONTUSS\\nBRONTUSS DX\\nBROVANA\\nBROVEX\\nBROVEX ADT\\nBROVEX CB\\nBROVEX CBX\\nBROVEX D\\nBROVEX D 1220\\nBROVEX HC\\nBROVEX PB\\nBROVEX PB CX\\nBROVEX PBC\\nBROVEX PBCX\\nBROVEX PBD\\nBROVEX PD\\nBROVEX PEB\\nBROVEX PEB DM\\nBROVEX PSB\\nBROVEX PSB DM\\nBROVEX PSE\\nBROVEX PSE DM\\nBROVEX SR\\nBSS OPHTHALMIC SOLUTION\\nBUBBLI-PRED\\nBUCALCIDE\\nBUCALSEP\\nBUCET\\nBUCKLEY\'S BEDTIME FORMULA\\nBUCKLEY\'S CHEST CONGESTION\\nBUCKLEY\'S COUGH SUPPRESSANT\\nBUCKLEY\'S DM COUGH SUPPRESSANT\\nBUCKLEY\'S DM DECONGESTANT\\nBUCKLEYS MIXTURE\\nBUDEPRION\\nBUFFERIN\\nBUFFERIN ARTHRITIS STRENGTH\\nBUFFERIN EXTRA STRENGTH\\nBUFFEX\\nBUMEX\\nBUMINATE\\nBUNAVAIL\\nBUPAP\\nBUPHENYL\\nBUPRENEX\\nBUPROBAN\\nBURN JEL PLUS\\nBUROW\'S SOLUTION\\nBUSODIUM\\nBUSPAR\\nBUSPAR DIVIDOSE\\nBUSPRIRONE\\nBUSULFEX\\nBUTALBITAL COMPOUND\\nBUTESIN PICRATE\\nBUTEX FORTE\\nBUTIBEL\\nBUTISOL\\nBUTISOL SODIUM\\nBUTRANS\\nBY ACHE\\nBYDRAMINE\\nBYDUREON\\nBYETTA\\nBYSTOLIC\\nBYVALSON', '\\n'), com.fc.JavaScriptDistLib.TextLib.textSplitWith('C COMPLEX\\nC HIST\\nC TAN D\\nC THERAPY NIGHT\\nC TUSSIN\\nC-500\\nC-500-GR\\nC-ACEROLA-ROSE HIPS\\nC-HIST\\nC-HIST-SR\\nC-PHED DM\\nC-PHED DPD TANN\\nC-PHEN DM\\nC-TAN D\\nC-TANNA 12\\nC-TIME\\nC.P. CARBINOXAMINE PSEUDOEPHEDRINE COMBINATION\\nC.P.M.\\nCA-REZZ\\nCABOMETYX\\nCADUET\\nCAFATINE\\nCAFATINE PB\\nCAFCIT\\nCAFERGOT\\nCAFETRATE\\nCAFFEDRINE\\nCAFGESIC\\nCAKNEMYCIN\\nCAL GEST\\nCAL-GEST\\nCAL-QUICK\\nCALA-GEN\\nCALACLEAR\\nCALADRYL\\nCALADRYL CLEAR\\nCALADRYL FOR KIDS\\nCALAFOL RX\\nCALAGEL\\nCALAGESIC\\nCALAMINE PLAIN\\nCALAN\\nCALAN SR\\nCALAZIME\\nCALAZIME SKIN PROTECTANT\\nCALCARB\\nCALCARB WITH D\\nCALCARB WITH D AND SOY\\nCALCET\\nCALCI MIX\\nCALCI-CHEW\\nCALCI-MIX\\nCALCIDOL\\nCALCIDRINE\\nCALCIJEX\\nCALCIMAR\\nCALCIONATE\\nCALCIQUID\\nCALCITAB\\nCALCITRENE\\nCALCIUM 600\\nCALCIUM ANTACID\\nCALCIUM ANTACID EXTRA STRENGTH\\nCALCIUM ANTACID ULTRA STRENGTH\\nCALCIUM CONCENTRATE\\nCALCIUM DISODIUM VERSENATE\\nCALCIUM LIQUID SOFTGEL\\nCALDECORT\\nCALDEROL\\nCALDESENE\\nCALDESENE POWDER\\nCALDESENE W TALC\\nCALDOLOR\\nCALDYPHEN\\nCALGON VESTA\\nCALGONATE\\nCALLERGY\\nCALLERGY CLEAR\\nCALM-AID\\nCALMODROX\\nCALMOL\\nCALMOL-4\\nCALMOSEPTINE\\nCALMOSEPTINE OINTMENT\\nCALOMIST\\nCALPHRON\\nCALQUENCE\\nCALTRATE\\nCALTRATE 600 + IRON & VITAMIN D\\nCALTRATE 600 + VITAMIN D\\nCALTRATE 600 PLUS D\\nCALTRATE 600 WITH D PLUS SOY\\nCALTRATE COLON HEALTH\\nCALTRATE GUMMY BITES\\nCALTRATE PLUS D\\nCALTRO\\nCALTRO WITH VITAMIN D\\nCALUBE\\nCALVITE P&D\\nCAMBIA\\nCAMBRIDGE EPINEPHRINE LIDOCAINE COMBINATION\\nCAMBRIDGE MEPIVACAINE\\nCAMILA\\nCAMILA 28 DAY\\nCAMPATH\\nCAMPHO-PHENIQUE\\nCAMPHO-PHENIQUE MAXIMUM STRENGTH\\nCAMPHOR ICE\\nCAMPRAL\\nCAMPRAL DOSE PAK\\nCAMPTO\\nCAMPTOSAR\\nCAMRESE 91 DAY\\nCAMRESELO 91 DAY\\nCANASA\\nCANCIDAS\\nCANGES HC\\nCANGES XP\\nCANK-OXIDE\\nCANKAID\\nCANOXICABS\\nCANTIL\\nCAP-PROFEN\\nCAPACET\\nCAPASTAT\\nCAPEX\\nCAPITAL AND CODEINE\\nCAPITAL WITH CODEINE\\nCAPITROL\\nCAPMIST DM\\nCAPOTEN\\nCAPOZIDE\\nCAPOZIDE 2525\\nCAPOZIDE 5015\\nCAPRELSA\\nCAPSIN\\nCAPZASIN QUICK RELIEF\\nCAPZASIN-HP\\nCAPZASIN-HP ARTHRITIS FORMULA\\nCAPZASIN-P\\nCARAC\\nCARAFATE\\nCARB PSE 12 DM\\nCARB PSEUDO-TAN\\nCARB-O-LAC\\nCARBA XP\\nCARBAGLU\\nCARBAMIDE PEROXIDE OTIC\\nCARBAPHEN 12\\nCARBAPHEN CH\\nCARBAPHEN PED CH\\nCARBASTAT\\nCARBATAB\\nCARBATAB 12\\nCARBATROL\\nCARBATUSS SYRUP\\nCARBATUSS-12\\nCARBATUSS-CL\\nCARBAXEF-DM\\nCARBAXEFED RF\\nCARBETAPLEX\\nCARBEX\\nCARBIC D\\nCARBINOX\\nCARBINOX PSEUD AND DM RF\\nCARBISET\\nCARBISET TR\\nCARBOCAINE\\nCARBOCAINE HCL\\nCARBOCAINE WITH NEO-COBEFRIN\\nCARBOCAINE WITH NEOCOBEFRIN\\nCARBODEC\\nCARBODEC 0.812\\nCARBODEC 225\\nCARBODEC DM\\nCARBODEC TR\\nCARBODEC-DM\\nCARBODEX DM\\nCARBODEX DM DROPS\\nCARBOFED\\nCARBOFED DM\\nCARBOFED DM DROPS\\nCARBOFED DM SYRUP\\nCARBOFED DMC\\nCARBOGEN\\nCARBOPTIC\\nCARBOXINE\\nCARBOXINE D\\nCARBOXINE DM\\nCARBOXINE-PSE\\nCARDEC\\nCARDEC DM\\nCARDEC DM DROPS\\nCARDEC DM DROPS REFORMULATED MAR 2011\\nCARDEC DM REFORMULATED JUN 2007\\nCARDEC DROPS\\nCARDEC DROPS REFORMULATED JUN 2007\\nCARDEC S\\nCARDEC SYRUP\\nCARDEC TR\\nCARDENE\\nCARDENE IV\\nCARDENE SR\\nCARDIOQUIN\\nCARDIOXANE\\nCARDIZEM\\nCARDIZEM CD\\nCARDIZEM LA\\nCARDIZEM LYO-JECT\\nCARDIZEM MONOVIAL\\nCARDIZEM SR\\nCARDOXIN\\nCARDURA\\nCARE-CREME\\nCARICIA CARE\\nCARIMUNE\\nCARIZEM\\nCARLES\\nCARLESTA\\nCARLSON D\\nCARMEX ORIGINAL BALM\\nCARMOL\\nCARMOL 10\\nCARMOL HC\\nCARMOL SCALP\\nCARMOL SCALP TREATMENT KIT\\nCARMOL-20\\nCARMOL-40\\nCARNEXIV\\nCARNI Q-GEL FORTE\\nCARNITOR\\nCAROGUARD\\nCAROID LAXATIVE\\nCAROSPIR\\nCAROZIDE\\nCARTERS LITTLE PILLS\\nCARTIA\\nCARTIA XT\\nCARTICEL\\nCARTILADE\\nCARTROL\\nCASODEX\\nCASTELLANI PAINT\\nCASTELLANI PAINT COLORLESS\\nCASTIVA COOLING\\nCASTIVA WARMING\\nCATAFLAM\\nCATAPRES\\nCATAPRES-TTS-1\\nCATAPRES-TTS-2\\nCATAPRES-TTS-3\\nCATARASE\\nCATHFLO ACTIVASE\\nCATULAC\\nCAVERJECT\\nCAVILON DURABLE BARRIER CREAM\\nCAVILON EMOLLIENT\\nCAVILON ONE-STEP\\nCAVIRINSE\\nCAYSTON\\nCAZIANT 28 DAY\\nCECLOR\\nCECLOR CD\\nCECLOR PULVULES\\nCECON\\nCEDAX\\nCEE-500\\nCEENU\\nCEFACLOR CD\\nCEFACLOR ER\\nCEFADROXIL MONOHYDATE\\nCEFADYL\\nCEFAZOLIN SODIUM NOVAPLUS\\nCEFIZOX\\nCEFOBID\\nCEFOTAN\\nCEFTIN\\nCEFZIL\\nCELEBREX\\nCELESTONE\\nCELESTONE PHOSPHATE\\nCELESTONE SOLUSPAN\\nCELEXA\\nCELL-U-JEC\\nCELLCEPT\\nCELLUGEL\\nCELONTIN\\nCEM-UREA\\nCEMILL 1000\\nCEMILL 500\\nCENA K\\nCENAFED\\nCENESTIN\\nCENOLATE\\nCENTANY\\nCENTERGY\\nCENTERGY DM\\nCENTRUM PRO NUTRIENTS\\nCENTRUM SINGLES-VITAMIN C\\nCENTUSSIN\\nCEO-TWO\\nCEPACOL\\nCEPACOL ANTIBACTERIAL MOUTHWASH\\nCEPACOL DUAL RELIEF\\nCEPACOL SENSATIONS COOLING\\nCEPACOL SORE THROAT\\nCEPACOL SORE THROAT FROM POST NASAL DRIP\\nCEPACOL SORE THROAT PAIN RELIEF\\nCEPACOL SORE THROAT PLUS COATING\\nCEPACOL SORE THROAT PLUS COUGH\\nCEPACOL SORE THROAT SPRAY\\nCEPACOL SPRAY\\nCEPASTAT\\nCEPASTAT SORE THROAT & COUGH\\nCEPHADYN\\nCEPHALEXIM\\nCEPHULAC\\nCEPROTIN\\nCEPTAZ\\nCERASPORT\\nCERAXON\\nCERDELGA\\nCEREBYX\\nCEREDASE\\nCEREFLIN\\nCEREFOLIN NAC\\nCEREZYME\\nCERISA WASH\\nCERON\\nCERON-DM\\nCEROVEL\\nCERTIVA\\nCERTUSS\\nCERTUSS D\\nCERTUSS-C\\nCERUMENEX\\nCERVARIX\\nCERVICAL AMINO ACID\\nCERVIDIL\\nCESAMET\\nCESIA 28 DAY\\nCETA PLUS\\nCETACAINE\\nCETACORT\\nCETADERM\\nCETAFEN\\nCETAMIDE\\nCETAPRED\\nCETAZONE T\\nCETIRI-D\\nCETRAXAL\\nCETROTIDE\\nCETYLEV\\nCEVI-BID\\nCHANTIX\\nCHANTIX CONTINUING MONTHS OF THERAPY\\nCHANTIX FIRST MONTH OF THERAPY\\nCHAR-FLO\\nCHAR-FLO WITH SORBITOL\\nCHARCOAID\\nCHARCOAID 2000\\nCHARCOAID-G\\nCHARCOAL PLUS DS\\nCHARCOCAPS\\nCHARDONNA-2\\nCHATEAL 28 DAY\\nCHEM-SOL\\nCHEMDAL\\nCHEMDAL EXPECTORANT\\nCHEMDAL HD\\nCHEMDAL HD PLUS\\nCHEMDEC\\nCHEMDEC 0.812\\nCHEMDEC 225\\nCHEMDEC DM\\nCHEMET\\nCHEMTUSSIN HC\\nCHENODAL\\nCHERACOL D\\nCHERACOL D COUGH\\nCHERACOL PLUS\\nCHERACOL SORE THROAT\\nCHERACOL WITH CODEINE\\nCHERACOL-D\\nCHERATUSSIN\\nCHERATUSSIN AC\\nCHERATUSSIN DAC\\nCHEW Q\\nCHIBROXIN\\nCHILD ALLERGY\\nCHILD APAP\\nCHILD NO-ASPIRIN\\nCHILD NON-ASPIRIN\\nCHILD PAIN\\nCHILD PAIN RELIEVER\\nCHILD TYLENOL COLD MULTI-SYMPTOM PLUS COUGH\\nCHILDREN\'S MUCINEX MULTI-SYMPTOM COLD AND FEVER\\nCHILDREN\'S NYQUIL COLD AND COUGH\\nCHILDRENS ELIXSURE\\nCHILDRENS FORMULA\\nCHILDRENS GRAPE ALLERGY\\nCHILDRENS IBUPROFEN BERRY\\nCHILDRENS IBUPROFEN COLD\\nCHILDRENS MULTI-SYMPTOM PLUS COUGH\\nCHILDRENS NIGHT TIME\\nCHILDRENS NYQUIL\\nCHILDRENS PANADOL\\nCHILDRENS TYLENOL\\nCHILDRENS TYLENOL ALLERGY-D\\nCHILDRENS TYLENOL COLD\\nCHILDRENS TYLENOL COLD MULTI-SYMPTOM\\nCHILDRENS TYLENOL COLD PLUS COUGH\\nCHILDRENS TYLENOL FLU\\nCHILDRENS TYLENOL PLUS COLD & ALLERGY\\nCHILDRENS TYLENOL PLUS COLD AND ALLERGY\\nCHIRHOSTIM\\nCHIROCAINE\\nCHLO TUSS\\nCHLO-AMINE\\nCHLOR TRIMETON ALLERGY DECONGESTANT\\nCHLOR TRIMETON ALLERGY DECONGESTANT SR\\nCHLOR TRIMETON NASAL DECONGESTANT\\nCHLOR-AL REL\\nCHLOR-MAL\\nCHLOR-MES D\\nCHLOR-PHEN\\nCHLOR-PHENIT\\nCHLOR-TAN A 12\\nCHLOR-TRIMETON\\nCHLOR-TRIMETON ALLERGY SR\\nCHLOR-TRIMETON NASAL DECONGESTANT\\nCHLOR-TRIMETON SINUS\\nCHLORACOL\\nCHLORAFED\\nCHLORAFED H.S. TIMECELLES\\nCHLORAFED TIMECELLES\\nCHLORAPREP ONE-STEP\\nCHLORASEPTIC\\nCHLORASEPTIC LIQUID\\nCHLORASEPTIC MAX SPRAY\\nCHLORASEPTIC SORE THROAT\\nCHLORASEPTIC SORE THROAT + COUGH\\nCHLORASEPTIC SPRAY\\nCHLORDEX GP\\nCHLORDINIUM\\nCHLORDRINE\\nCHLORDRINE SR\\nCHLORESIUM\\nCHLORESIUM TOPICAL\\nCHLOREX A\\nCHLOREX A12\\nCHLORGEST HD\\nCHLORNADE\\nCHLOROMAG\\nCHLOROMYCETIN\\nCHLOROMYCETIN OPHTHALMIC\\nCHLOROMYCETIN OTIC\\nCHLOROMYCETIN SODIUM SUCCINATE\\nCHLOROPTIC\\nCHLOROPTIC S.O.P.\\nCHLOROSTAT\\nCHLOROSTAT 4\\nCHLORPHEDRIN\\nCHLORPHEDRIN SR\\nCHLORPHEN\\nCHLORPHEN HD\\nCHLORPRAM\\nCHLORTAN\\nCHLORTAN D\\nCHLORTOX\\nCHOCOLAXED\\nCHOLAC\\nCHOLAN\\nCHOLAN-HMB\\nCHOLBAM\\nCHOLEDYL\\nCHOLEDYL-SA\\nCHOLESTIN\\nCHOLOGRAFIN MEGLUMINE\\nCHOLOXIN\\nCHOOZ\\nCHOREX\\nCHORIGON\\nCHORON\\nCHORON-10\\nCHORPROMAZINE\\nCHROMA-PAK\\nCHROMELIN\\nCHROMIUM GTF\\nCHRONULAC\\nCHYMODIACTIN\\nCIALIS\\nCICLODAN\\nCIDAFLEX\\nCIDALEAZE\\nCILOXAN\\nCIMDUO\\nCIMZIA\\nCINALOG\\nCINOBAC\\nCINOLAR\\nCINOLONE\\nCINQAIR\\nCINRYZE\\nCINVANTI\\nCIPRO\\nCIPRO HC\\nCIPRO I.V.\\nCIPRO XR\\nCIPRODEX\\nCIPROFLAXACIN\\nCISPLATINCYCLOPHOSPHAMIDEVINDESINE PROTOCOL\\nCIT CALCIUM\\nCITANEST\\nCITANEST FORTE\\nCITANEST HCL PLAIN\\nCITRA PH\\nCITRACAL\\nCITRACAL + D\\nCITRACAL CAPLETS PLUS D\\nCITRACAL CREAMY BITES\\nCITRACAL MAXIMUM + D\\nCITRACAL PETITES\\nCITRACAL REGULAR + D\\nCITRANATAL B-CALM KIT\\nCITRICAL\\nCITRICAL PLUS D\\nCITROLITH\\nCITROMA\\nCITRUCEL\\nCITRUS CALCIUM PLUS D\\nCLADRIBINE NOVAPLUS\\nCLAFORAN\\nCLAIRTE\\nCLARAVIS\\nCLARIFOAM\\nCLARIFOAM CLEAR\\nCLARIFOAM FAST\\nCLARIFOAM PURE\\nCLARINE\\nCLARINEX\\nCLARINEX-D\\nCLARIPEL\\nCLARIS\\nCLARISPRAY\\nCLARITIN\\nCLARITIN EYE\\nCLARITIN REDITAB\\nCLARITIN-D\\nCLARITIN-D 24 HOUR\\nCLARUS\\nCLEAN AND CLEAR\\nCLEAN AND CLEAR ADVANTAGE\\nCLEAN AND CLEAR ADVANTAGE ACNE\\nCLEAN AND CLEAR ADVANTAGE ACNE CLEANSER\\nCLEAN AND CLEAR ADVANTAGE ACNE CONTROL MOISTURIZER\\nCLEAN AND CLEAR ADVANTAGE MARK ERASING SPOT TREATMENT\\nCLEAN AND CLEAR ADVANTAGE MARK TREATMENT\\nCLEAN AND CLEAR ADVANTAGE OIL ABSORBING CLEANSER\\nCLEAN AND CLEAR ADVANTAGE POPPED PIMPLE RELIEF\\nCLEAN AND CLEAR BLACKHEAD ERASER\\nCLEAN AND CLEAR DEEP CLEANING\\nCLEAN AND CLEAR TRIPLE CLEAR\\nCLEANSE & TREAT\\nCLEANSE AND TREAT\\nCLEANZING!\\nCLEAR AWAY\\nCLEAR BY DESIGN\\nCLEAR EYES\\nCLEAR EYES ACR\\nCLEAR EYES COMPLETE\\nCLEAR EYES COOLING COMFORT\\nCLEAR EYES COOLING COMFORT REDNESS RELIEF\\nCLEAR EYES FOR DRY EYES PLUS REDNESS RELIEF\\nCLEAR EYES MAX ITCHY EYE RELIEF\\nCLEAR EYES NATURAL TEARS\\nCLEAR EYES PURE RELIEF MULTI-SYMPTOM\\nCLEAR EYES REDNESS RELIEF\\nCLEAR EYES REDNESS RELIEF REFORMULATED NOV 2011\\nCLEAR EYES TEARS\\nCLEAR EYES TEARS AND ITCHY EYE RELIEF\\nCLEAR EYES TEARS PLUS REDNESS RELIEF\\nCLEAR EYES TRIPLE ACTION RELIEF\\nCLEAR-ATADINE\\nCLEAR-ATADINE-D\\nCLEARASIL\\nCLEARASIL ACNE CONTROL\\nCLEARASIL DAILY CLEAR\\nCLEARASIL DAILY CLEAR ADULT\\nCLEARASIL DAILY CLEAR CLEAR SKIN\\nCLEARASIL DAILY CLEAR HYDRATING LOTION\\nCLEARCANAL\\nCLEARLAX\\nCLEARPLEX\\nCLEARSKIN\\nCLEARTIME INDOOR & OUTDOOR ALLERGIES\\nCLEARTUSS DH\\nCLEERAVUE-M\\nCLEEVEC\\nCLENIA\\nCLENIA EMOLLIENT\\nCLENIA FOAMING WASH\\nCLENPIQ\\nCLENZ-LYTE\\nCLEOCIN\\nCLEOCIN HCL\\nCLEOCIN OVULES\\nCLEOCIN PEDIATRIC\\nCLEOCIN T\\nCLEOCIN VAGINAL\\nCLEOCIN-T\\nCLEVIPREX\\nCLIMARA\\nCLIMARA PRO\\nCLINAC\\nCLINAC BPO\\nCLINACORT\\nCLINAGEN LA 40\\nCLINALOG\\nCLINDA-DERM\\nCLINDACIN\\nCLINDAGEL\\nCLINDAMAX\\nCLINDAMYLIN\\nCLINDAREACH\\nCLINDESSE\\nCLINDETS\\nCLINDEX\\nCLINIDINE\\nCLINIMIX 2.755\\nCLINIMIX 4.2510\\nCLINIMIX 4.2520\\nCLINIMIX 4.2525\\nCLINIMIX 4.255\\nCLINIMIX 515\\nCLINIMIX 520\\nCLINIMIX 525\\nCLINIMIX E 2.7510\\nCLINIMIX E 2.755\\nCLINIMIX E 4.2510\\nCLINIMIX E 4.2525\\nCLINIMIX E 4.255\\nCLINIMIX E 515\\nCLINIMIX E 520\\nCLINIMIX E 525\\nCLINISOL 15\\nCLINOLIPID\\nCLINORIL\\nCLINPRO 5000\\nCLOBETA PLUS\\nCLOBETA PLUS OINTMENT\\nCLOBEVATE\\nCLOBEX\\nCLODAN\\nCLODERM\\nCLOFERA\\nCLOLAR\\nCLOMID\\nCLONODINE\\nCLORAZEPAM\\nCLORFED\\nCLORFED II\\nCLOROQUINE\\nCLOROTEKAL\\nCLORPACTIN WCS-90\\nCLORPRES\\nCLOTRIMAZOLE-3\\nCLOTRIMAZOLE-7\\nCLOVERINE\\nCLOXAPEN\\nCLOZARIL\\nCNJ-016\\nCNL8\\nCO-APAP\\nCO-GESIC\\nCO-HISTINE\\nCO-HISTINE DH\\nCO-HISTINE EXPECTORANT\\nCO-LAV\\nCO-Q10\\nCO-TUSS V EXPECTORANT\\nCO-TUSSIN\\nCOAGADEX\\nCOARTEM\\nCOARTEM 3-DAY TREATMENT\\nCOATED ASPIRIN\\nCOBOLIN-M\\nCOCET\\nCODAFED\\nCODAFED PEDIATRIC\\nCODAFEN\\nCODAHISTINE\\nCODAHISTINE DH\\nCODAHISTINE EXPECTORANT\\nCODAHISTINE-DH\\nCODAL DH\\nCODAL-DH SYRUP\\nCODAL-DM SYRUP\\nCODAMINE\\nCODAMINE PEDIATRIC\\nCODAR AR\\nCODAR D\\nCODAR GF\\nCODEGEST\\nCODEGEST EXPECTORANT\\nCODEHIST DH\\nCODEPREX\\nCODICLEAR DH\\nCODIMAL\\nCODIMAL A\\nCODIMAL DH\\nCODIMAL DH REFORMULATED OCT 2007\\nCODIMAL DM\\nCODIMAL PH\\nCODITUSS DH\\nCODITUSS DM\\nCODOTUSS\\nCODRIX\\nCODRIX 50015\\nCODRIX 50030\\nCODRIX 50060\\nCOFATRIM FORT\\nCOFEX-DM\\nCOGENTIN\\nCOGNEX\\nCOLACE\\nCOLACE GLYCERIN SUPPOSITORIES\\nCOLACE MICRO-ENEMA\\nCOLACE WSENNOSIDES\\nCOLAX\\nCOLAX REFORMULATED MAR 2007\\nCOLAZAL\\nCOLCRYS\\nCOLD & ALLERGY SR\\nCOLD AND ALLERGY\\nCOLD AND ALLERGY DM\\nCOLD AND COUGH\\nCOLD CAPSULES\\nCOLD COUGH PD\\nCOLD RELIEF\\nCOLD SPOT\\nCOLD SYMPTOM RELIEF\\nCOLD-COUGH XP\\nCOLD-EEZE\\nCOLD-GEST\\nCOLDAMINE\\nCOLDCOUGH\\nCOLDCOUGH HC\\nCOLDCOUGH HCM\\nCOLDCOUGH PD\\nCOLDCOUGH XP\\nCOLDEC\\nCOLDEC 460\\nCOLDEC 8120\\nCOLDEC 890\\nCOLDEC D\\nCOLDEC DM\\nCOLDEC DS\\nCOLDEC-TR\\nCOLDEX\\nCOLDLOC\\nCOLDLOC-LA\\nCOLDMIST\\nCOLDMIST DM\\nCOLDMIST JR\\nCOLDMIST S\\nCOLDTUSS DR\\nCOLESTID\\nCOLGATE\\nCOLGATE TOTAL WHITENING\\nCOLIC DROPS\\nCOLICON\\nCOLIDROPS\\nCOLIDROPS PEDIATRIC\\nCOLLYRIUM FRESH\\nCOLOCORT\\nCOLREX\\nCOLY MYCIN M\\nCOLY MYCIN S\\nCOLYTE\\nCOLYTE WITH FLAVOR PACKS\\nCOLYTROL\\nCOMBIFLEX\\nCOMBIFLEX ES\\nCOMBIGAN\\nCOMBIPATCH\\nCOMBIPRES\\nCOMBIPRES 0.115\\nCOMBIPRES 0.215\\nCOMBIPRES 0.315\\nCOMBIVENT\\nCOMBIVENT 20100\\nCOMBIVIR\\nCOMBUNOX\\nCOMETRIQ\\nCOMETRIQ 100 MG DAILY DOSE CARTON\\nCOMETRIQ 140 MG DAILY DOSE CARTON\\nCOMETRIQ 60 MG DAILY DOSE CARTON\\nCOMFORT CAINE\\nCOMFORT GEL\\nCOMFORT SHIELD\\nCOMFORTPAK\\nCOMHIST\\nCOMHIST LA\\nCOMMIT LOZENGE\\nCOMPAZINE\\nCOMPAZINE SPANSULE CAPSULES\\nCOMPLERA\\nCOMPLETE ALLERGY\\nCOMPLETE ALLERGY RELIEF\\nCOMPLETE COLD MEDICINE\\nCOMPLEX B\\nCOMPOUND 347\\nCOMPOZ\\nCOMPOZ NIGHTTIME SLEEP AID\\nCOMPRO\\nCOMPTAN\\nCOMTAN\\nCOMTREX ALLERGY SINUS\\nCOMTREX ALLERGY SINUS MAXIMUM STRENGTH\\nCOMTREX ALLERGY SINUS NIGHT AND DAY\\nCOMTREX COLD AND COUGH DAY NIGHT\\nCOMTREX COLD AND COUGH NIGHTTIME\\nCOMTREX COLD AND COUGH NON DROWSY\\nCOMTREX COLD AND FLU MAXIMUM STRENGTH\\nCOMTREX COLD AND FLU MAXIMUM STRENGTH LIQUID\\nCOMTREX COLD AND FLU MAXIMUM STRENGTH REFORMULATED AUG 2006\\nCOMTREX DEEP CHEST COLD NON DROWSY\\nCOMTREX FLU THERAPY DAY AND NIGHT\\nCOMTREX MAXIMUM STRENGTH COLD RELIEF\\nCOMTREX NIGHTTIME ACUTE HEAD COLD\\nCOMTREX NON DROWSY LIQUIGEL\\nCOMTREX NON-DROWSY\\nCOMTREX SEVERE COLD AND SINUS DAY AND NIGHT\\nCOMTREX SORE THROAT RELIEF\\nCOMTUSSIN HC\\nCOMVAX\\nCONACETOL\\nCONAL\\nCONATE\\nCONCENTRATED FIBER\\nCONCENTRATED MILK OF MAGNESIA-CASCARA\\nCONCENTRATED PHILLIPS\' MILK OF MAGNESIA\\nCONCEPT OB\\nCONCEPTROL\\nCONCERTA\\nCONDASIN\\nCONDRIN\\nCONDYLOX\\nCONEX\\nCONEX WITH CODEINE\\nCONGESPIRIN\\nCONGESPIRIN ASPIRIN FREE\\nCONGESS\\nCONGESS JR.\\nCONGESS SR\\nCONGESTA DM\\nCONGESTAC\\nCONGESTACLEAR\\nCONGESTACLEAR COLD & ALLERGY\\nCONGESTANT\\nCONGESTANT D\\nCONPEC DM\\nCONRAY\\nCONRAY-30\\nCONRAY-400\\nCONRAY-43\\nCONSENSI\\nCONSTILAC\\nCONSTULOSE\\nCONTAC 12 HOUR\\nCONTAC 12 HOUR ALLERGY\\nCONTAC COLD\\nCONTAC COLD AND FLU COOLING NIGHT\\nCONTAC COLD AND FLU DAY AND NIGHT\\nCONTAC COLD AND FLU MAXIMUM STRENGTH\\nCONTAC COLD AND FLU NON DROWSY MAXIMUM STRENGTH\\nCONTAC DAY AND NIGHT ALLERGY SINUS\\nCONTAC SEVERE COLD AND FLU MAXIMUM STENGTH\\nCONTAC SEVERE COLD AND FLU NON DROWSY\\nCONTAC SINUS\\nCONTE-PAK-4\\nCONTRAGESIC\\nCONTRAVE\\nCONTROL RX\\nCONZIP\\nCOOL BOTTOMS\\nCOPAXONE\\nCOPD PHARMACOLOGIC SUBSTANCE\\nCOPEGUS\\nCOPHENE B\\nCOPHENE-X\\nCOPHENE-X-P\\nCOPHENE-X-P (REVISED)\\nCORAZ\\nCORAZ LOTION KIT\\nCORDARONE\\nCORDARONE I.V.\\nCORDON D\\nCORDON DM\\nCORDRAN\\nCORDRAN SP\\nCORDRON HC\\nCORDRON NR\\nCORDRON-12 D\\nCORDRON-12 DM\\nCORDRON-D\\nCORDRON-D NR\\nCORDRON-DM\\nCORDRON-DM NR\\nCORDRON-HC NR\\nCOREG\\nCORFEN-DM\\nCORGARD\\nCORICIDIN\\nCORICIDIN D\\nCORICIDIN D COLD\\nCORICIDIN HBP CHEST CONGESTION\\nCORICIDIN HBP COLD & FLU\\nCORICIDIN HBP COUGH AND COLD\\nCORICIDIN HBP DAY & NIGHT MULTI-SYMPTOM COLD\\nCORICIDIN HBP FLU MAXIMUM STRENGTH\\nCORICIDIN HBP NIGHTTIME MULTI-SYMPTOM COLD\\nCORICIDIN HBP NIGHTTIME MULTI-SYMPTOM COLD REFORMULATED FEB 2013\\nCORICIDIN NIGHT TIME COLD RELIEF\\nCORIFACT\\nCORLANOR\\nCORLOPAM\\nCORMAX\\nCORPHEDRA\\nCORQUE\\nCORRECT (NEW FORMULA)\\nCORRECTIVE\\nCORRECTOL LAXATIVE\\nCORRECTOL LAXATIVE REFORMULATED FEB 2008\\nCORRECTOL SOFTGEL EXTRA GENTLE\\nCORT-BIOTIC\\nCORT-DOME\\nCORT-DOME HIGH POTENCY\\nCORT-K\\nCORTAID\\nCORTAID POISON IVY CARE\\nCORTALO\\nCORTAMOX\\nCORTANE\\nCORTANE B-OTIC\\nCORTANE-B\\nCORTANE-B AQUEOUS\\nCORTASTAT\\nCORTASTAT 10\\nCORTASTAT LA\\nCORTATRIGEN\\nCORTEF\\nCORTENEMA\\nCORTIC\\nCORTIC-ND\\nCORTICAINE\\nCORTICOOL\\nCORTICREME\\nCORTIFOAM\\nCORTILONE\\nCORTINIDE\\nCORTISPORIN\\nCORTISPORIN OINTMENT\\nCORTISPORIN-TC\\nCORTIZONE\\nCORTIZONE-10\\nCORTIZONE-10 ANAL ITCH CREAM\\nCORTIZONE-5\\nCORTOMYCIN\\nCORTOMYCIN OINTMENT\\nCORTONE ACETATE\\nCORTRATIGEN\\nCORTROSYN\\nCORVERT\\nCORZALL\\nCORZALL PLUS\\nCORZALL-PE\\nCORZIDE\\nCOSAMIN\\nCOSAMIN DS\\nCOSENTYX\\nCOSMEGEN\\nCOSOPT\\nCOTAB A\\nCOTAB AX\\nCOTABFLU\\nCOTACORT\\nCOTAZYM-S\\nCOTAZYME\\nCOTELLIC\\nCOTEMPLA\\nCOTOFED\\nCOTOLONE\\nCOTRIM\\nCOTRIM PEDIATRIC\\nCOTUSS-V\\nCOUGH CONTROL\\nCOUGH CONTROL DM\\nCOUGH FORMULA\\nCOUGH FORMULA M MULTI-SYMPTOM\\nCOUGH FORMULA-DM\\nCOUGH SYRUP ORANGE\\nCOUGH-X COUGH RELIEF\\nCOUGHTUSS\\nCOUMADIN\\nCOVACE\\nCOVANGESIC\\nCOVARYX\\nCOVERA\\nCOVERA-HS\\nCOZAAR\\nCP DEC\\nCP DEC DM\\nCP ORAL\\nCP TANNIC\\nCP-2\\nCPM PSEH PD\\nCR-GTF\\nCRANTEX\\nCRANTEX ER\\nCRANTEX HC\\nCRANTEX LA\\nCREO-TERPIN\\nCREOMULSION\\nCREOMULSION COUGHCOLDALLERGY\\nCREOMULSION PEDIATRIC\\nCREON\\nCREON 10\\nCREON 20\\nCREON 5\\nCRESEMBA\\nCREST MOUTHWASH\\nCRESTOR\\nCRESYLATE\\nCRINONE\\nCRITIC-AID\\nCRITIC-AID CLEAR\\nCRITIC-AID CLEAR MOISTURE\\nCRITIC-AID SKIN\\nCRIXIVAN\\nCRM CHROMIUM PICOLINATE\\nCROFAB\\nCROLOM\\nCROSEHIPS TIME RELEASE\\nCROTAN\\nCRUEX\\nCRUEX ANTIFUNGAL\\nCRUEX POWDER\\nCRUEX POWDER SPRAY\\nCRUEX PRESCRIPTION STRENGTH\\nCRYSELLE\\nCRYSELLE 28\\nCRYSTAMINE\\nCRYSTI-12\\nCRYSTODIGIN\\nCRYSVITA\\nCTD ASPIRIN\\nCTS\\nCTX4 GEL\\nCUBICIN\\nCULTURELLE\\nCULTURELLE DIGESTIVE HEALTH\\nCUPRIMINE\\nCURALER\\nCURASORE\\nCURITY ALCOHOL PREPS\\nCUROSURF\\nCURRETAB\\nCUTAR\\nCUTEMOL\\nCUTIVATE\\nCUVITRU\\nCUVPOSA\\nCYANOJECT\\nCYANOKIT\\nCYCLAFEM 135 28 DAY\\nCYCLAFEM 777 28 DAY\\nCYCLESSA 28 DAY\\nCYCLIVERT\\nCYCLOCORT\\nCYCLOGYL\\nCYCLOMYDRIL\\nCYCLOPHOSPHOMIDE\\nCYCLOSET\\nCYCLOSPASMOL\\nCYCOFED\\nCYCOFED EXPECTORANT\\nCYCOFED PEDIATRIC EXPECTORANT\\nCYCRIN\\nCYDEC\\nCYDEC-DM\\nCYDEC-DM DROPS\\nCYKLOKAPRON\\nCYLATE\\nCYLERT\\nCYMBALTA\\nCYNDAL\\nCYNDAL EXPECTORANT\\nCYNDAL HD\\nCYNTEX\\nCYNTEX LIQUID\\nCYOMIN\\nCYONANZ 28 DAY\\nCYOTIC\\nCYPEX\\nCYRAMZA\\nCYRED 28 DAY\\nCYSTADANE\\nCYSTAGON\\nCYSTARAN\\nCYSTEMMS-V\\nCYSTEX\\nCYSTO-CONRAY\\nCYSTO-CONRAY II\\nCYSTOGRAFIN\\nCYSTOGRAFIN-DILUTE\\nCYSTOSPAZ\\nCYSTOSPAZ-M\\nCYTOGAM\\nCYTOMEL\\nCYTOTEC\\nCYTOVENE\\nCYTOXAN\\nCYTRA 2\\nCYTRA-3\\nCYTRA-K\\nCYTUSS HC\\nCYTUSS-HC NR', '\\n'), com.fc.JavaScriptDistLib.TextLib.textSplitWith('D HIST D\\nD-AMINE-SR\\nD-CAINE\\nD-FEDA II\\nD-G\\nD-PHEN\\nD-S CAPS\\nD-TAL\\nD-TANN\\nD-TANN AT\\nD-TANN CHEWABLE\\nD-TANN CT\\nD-TANN DM\\nD-TANN HC\\nD-VAL\\nD-VERT\\nD-VI-SOL\\nD.A. II\\nD3 DOTS\\nDACABAZINE\\nDACEX A\\nDACEX DM\\nDACEX PE\\nDACOGEN\\nDAILYHIST\\nDAILYHIST-1\\nDAILYHIST-D\\nDAIRY EASE\\nDAIVOBET\\nDAKIN\'S SOLUTION\\nDAKLINZA\\nDALALONE\\nDALALONE D.P.\\nDALALONE L.A.\\nDALGAN\\nDALIRESP\\nDALLERGY\\nDALLERGY DM\\nDALLERGY DROPS\\nDALLERGY PSE\\nDALLERGY REFORMULATED MAR 2014\\nDALLERGY REFORMULATED NOV 2011\\nDALLERGY SR\\nDALLERGY-JR\\nDALLERGY-JR REFORMULATED FEB 2009\\nDALMANE\\nDALVANCE\\nDAMASON-P\\nDANDREX\\nDANDRUFF CONTROL\\nDANDRUFF F-O\\nDANDRUFF N-D\\nDANOCRINE\\nDANTRIUM\\nDAPTACEL\\nDARANIDE\\nDARAPRIM\\nDARCALMA\\nDARPAZ\\nDARVOCET\\nDARVOCET A500\\nDARVOCET-N\\nDARVON\\nDARVON COMPOUND 32\\nDARVON COMPOUND-65\\nDARVON-N\\nDARZALEX\\nDASETTA 135 28 DAY\\nDASETTA 777 28 DAY\\nDAUNOXOME\\nDAWN ANTIBACTERIAL\\nDAXBIA\\nDAY TIME MULTI SYMPTOM\\nDAYHIST-1\\nDAYHIST-D\\nDAYPRO\\nDAYPRO ALTA\\nDAYQUIL\\nDAYQUIL & NYQUIL COLD & FLU LIQUICAPS 48 TOTAL\\nDAYQUIL ALLERGY\\nDAYQUIL AND NYQUIL SEVERE COLD & FLU\\nDAYQUIL COLD & FLU\\nDAYQUIL COLD & FLU RELIEF\\nDAYQUIL COUGH\\nDAYQUIL LIQUICAPNYQUIL LIQUID\\nDAYQUIL LIQUICAPS\\nDAYQUIL LIQUICAPS REFORMULATED APR 2009\\nDAYQUIL MUCUS CONTROL DM\\nDAYQUIL NON-DROWSY\\nDAYQUIL PRESSURE AND PAIN CAPLET\\nDAYQUIL SEVERE COLD & FLU\\nDAYQUIL SINEX\\nDAYQUIL SINUS\\nDAYQUIL SINUS PRESSURE AND CONGESTION\\nDAYQUILNYQUIL LIQUICAPS COMBO\\nDAYSEE 91 DAY\\nDAYTIME LIQUICAP\\nDAYTO-HIMBIN\\nDAYTRANA\\nDAZIDOX\\nDC-240\\nDDAVP\\nDDAVP NASAL\\nDDAVP RHINAL TUBE\\nDE-CHLOR DR\\nDE-CHLOR G\\nDE-CHLOR HC\\nDE-CHLOR HD\\nDE-CHLOR MR\\nDE-CHLOR NX\\nDE-SONE LA\\nDEBACTEROL\\nDEBLITANE 28 DAY\\nDEBROX\\nDEC CHLORPHEN\\nDEC CHLORPHEN DM\\nDECADRON\\nDECADRON 5-12\\nDECADRON DP 12 DAY\\nDECADRON DP 6 DAY\\nDECADRON PHOSPHATE\\nDECADRON WITH XYLOCAINE\\nDECADRON-LA\\nDECAHIST-DM\\nDECAJECT\\nDECAJECT-L.A.\\nDECALCITROL\\nDECAPEPTYL\\nDECARA\\nDECAVAC\\nDECHOLIN\\nDECLOMYCIN\\nDECO-D\\nDECOFED LIQUID\\nDECOHISTINE DH\\nDECOHISTINE EXPECTORANT\\nDECON DM\\nDECONAMINE\\nDECONAMINE CX\\nDECONAMINE SR\\nDECONEX\\nDECONEX DM\\nDECONGESTABS\\nDECONGESTANT ANTIHISTAMINE\\nDECONGESTANT COLD FORMULA\\nDECONGESTANT II\\nDECONGESTANT SR (GENEVA)\\nDECONGESTANT-SR\\nDECONGEX-3\\nDECONHIST\\nDECONHIST LA\\nDECONOMED S.R.\\nDECONOSAL DM\\nDECONSAL C\\nDECONSAL C EXPECTORANT\\nDECONSAL CT\\nDECONSAL DM\\nDECONSAL II\\nDECONSAL II REFORMULATED MAY 2007\\nDECONSAL L.A.\\nDECONSAL PEDIATRIC\\nDECOTUSS-HD\\nDEEP SEA\\nDEFEN-LA\\nDEFITELIO\\nDEGAS\\nDEGEN II\\nDEGEST\\nDEGEST 2\\nDEHISTINE\\nDEK QUIN\\nDEL-AQUA\\nDEL-BETA\\nDEL-MYCIN\\nDELATEST\\nDELATESTADIOL\\nDELATESTRYL\\nDELAZINC\\nDELCORT\\nDELESTROGEN\\nDELFEN\\nDELHISTINE D\\nDELHISTINE D PEDIATRIC\\nDELHISTINE D SR\\nDELHISTINE DM\\nDELONE\\nDELONIDE\\nDELOS\\nDELSYM\\nDELSYM ADULT NIGHT TIME MULTI-SYMPTOM\\nDELSYM CHILDREN\'S NIGHTTIME COUGH AND COLD\\nDELSYM CHILDREN\'S NIGHTTIME COUGH AND COLD REFORMULATED APR 2013\\nDELSYM COUGH PLUS CHEST CONGESTION DM\\nDELSYM COUGH PLUS COLD DAYTIME\\nDELSYM COUGH PLUS COLD NIGHT TIME\\nDELSYM COUGH PLUS SOOTHING ACTION\\nDELSYM COUGH RELIEF PLUS SOOTHING ACTION\\nDELSYM NIGHT TIME COUGH AND COLD\\nDELSYM NIGHT TIME COUGH AND COLD REFORMULATED JAN 2012\\nDELSYM NIGHT TIME MULTI-SYMPTOM\\nDELTA D3\\nDELTA TRITEX\\nDELTA-LUTIN\\nDELTA-TRITEX\\nDELTALIN\\nDELTAPLEX DM\\nDELTAPLEX HD\\nDELTASONE\\nDELYLA 28 DAY\\nDELZICOL\\nDEMADEX\\nDEMADEX I.V.\\nDEMAZIN\\nDEMEROL\\nDEMEROL HCL\\nDEMI-COF\\nDEMI-REGROTON\\nDEMIBID II\\nDEMSER\\nDEMULEN\\nDEMULEN 135 28 DAY\\nDEMULEN 150 21 DAY\\nDEMULEN 150 28 DAY\\nDENAVIR\\nDENAZE\\nDENDRACIN NEURODENDRAXCIN\\nDENDRID\\nDENOREX\\nDENOREX DRY SCALP\\nDENOREX EXTRA STRENGTH\\nDENOREX EXTRA STRENGTH REFORMULATED AUG 2012\\nDENOREX MEDICATED SHAMPOO AND CONDITIONER\\nDENT-O-KAIN\\nDENTA 5000 PLUS\\nDENTAGEL\\nDENTAL OXIDE\\nDENTAL RESOURCES PERIO MAINTENANCE RINSE\\nDENTAPAINE\\nDENTI-RINSE\\nDENTICARE\\nDENTICARE DENTI FOAM\\nDENTICARE DENTI FREEZE GEL\\nDENTICARE DENTI FREEZE OINTMENT\\nDENTICARE DENTI GEL\\nDENTICARE NEUTRAL\\nDENTICARE PRO GEL\\nDEP ANDROGYN\\nDEP GYNOGEN\\nDEP MEDALONE 80\\nDEPACON\\nDEPADE\\nDEPAKENE\\nDEPAKOTA\\nDEPAKOTE\\nDEPANDRATE\\nDEPANDRO 100\\nDEPEN\\nDEPLETITE\\nDEPLIN\\nDEPMEDALONE\\nDEPO-COBOLIN\\nDEPO-ESTRADIOL\\nDEPO-MEDROL\\nDEPO-PREDATE\\nDEPO-PROVERA\\nDEPO-SUBQ PROVERA\\nDEPO-SUBQ PROVERA 104\\nDEPO-TESTADIOL\\nDEPO-TESTOSTERONE\\nDEPOCYT\\nDEPODUR\\nDEPOJECT-80\\nDEPONIT\\nDEPOPRED\\nDEPOTEST\\nDEPOTESTOGEN\\nDEPRIZINE\\nDEPROIST\\nDEPROIST WITH CODEINE\\nDERIFIL\\nDERMA CIDOL\\nDERMA GRAN\\nDERMA GRAN SPRAY\\nDERMA NUMB\\nDERMA STAT\\nDERMA-PAX\\nDERMA-SMOOTHE FS\\nDERMACIN\\nDERMACORT\\nDERMAFIX\\nDERMAFLEX\\nDERMAFUNGAL\\nDERMAGESIC\\nDERMAGESIC ITCH RELIEF\\nDERMAGRAN\\nDERMALZONE\\nDERMAMYCIN\\nDERMAMYCIN ERYTHROMYCIN\\nDERMAPHOR\\nDERMAREST\\nDERMAREST ANTI-ITCH\\nDERMAREST DRICORT\\nDERMAREST DRICORT CREME PACK\\nDERMAREST ECZEMA\\nDERMAREST ECZEMA MEDICATED\\nDERMAREST ECZEMA MEDICATED MOISTURIZER\\nDERMAREST INSECT BITE SPRAY\\nDERMAREST PLUS ANTI-ITCH\\nDERMAREST POISON IVY\\nDERMAREST PSORIASIS\\nDERMAREST SKIN CORRECTING CREAM\\nDERMASARRA\\nDERMASEPTIN\\nDERMASORB AF\\nDERMASORB HC\\nDERMASORB TA\\nDERMASORB XM\\nDERMATOL 10\\nDERMATOP\\nDERMAXX\\nDERMAZENE\\nDERMAZINC\\nDERMOCAINE\\nDERMOL HC\\nDERMOLATE\\nDERMOPLAST\\nDERMOPLAST ANTIBACTERIAL\\nDERMOPLAST PAIN\\nDERMOTIC\\nDERMTEX HC\\nDERMUSPRAY\\nDESAL II\\nDESCOVY\\nDESENEX\\nDESENEX AF PRESCRIPTION STRENGTH\\nDESENEX CREAM\\nDESENEX FOOT\\nDESENEX JOCK ITCH\\nDESENEX MAX\\nDESENEX MAXIMUM\\nDESENEX POWDER\\nDESENEX PRESCRIPTION STRENGTH\\nDESENEX SPRAY\\nDESFERAL\\nDESIHIST SA\\nDESITIN\\nDESITIN CLEAR\\nDESITIN CREAMY DIAPER RASH OINTMENT\\nDESOGEN (CONTRACEPTIVE)\\nDESOGEN 28 DAY\\nDESONATE\\nDESONIL\\nDESOWEN\\nDESOXIMETASOL\\nDESOXYN\\nDESOXYN GRADUMET\\nDESPEC\\nDESPEC DM\\nDESPEC DM REFORMULATED SEP 2008\\nDESPEC DROPS\\nDESPEC DROPS GRAPE FLAVOR\\nDESPEC EDA\\nDESPEC EXP\\nDESPEC REFORMULATED JUN 2008\\nDESPEC REFORMULATED JUN 2015\\nDESPEC SR\\nDESPEC SR REFORMULATED SEP 2008\\nDESPEC TABLET\\nDESPEC-PDC\\nDESPEC-SF\\nDESQUAM\\nDESQUAM-E\\nDESQUAM-X\\nDESQUAM-X 10\\nDESQUAM-X 5\\nDESQUAM-X WASH\\nDESYREL\\nDESYREL DIVIDOSE\\nDETANE\\nDETROL\\nDETROL LA\\nDETUSSIN\\nDETUSSIN EXPECTORANT\\nDEVROM\\nDEWEES CARMINATIVE\\nDEX PC\\nDEX-TUSS\\nDEX-TUSS DM\\nDEX4\\nDEX4 VERTICAL GLUCOSE\\nDEXACEN-4\\nDEXACIDIN\\nDEXACORT PHOSPHATE IN RESPIHALER\\nDEXACORT PHOSPHATE IN TURBINAIRE\\nDEXACORT-LA\\nDEXACORTEN\\nDEXALL\\nDEXALONE\\nDEXAMETHASONE INTENSOL\\nDEXASOL\\nDEXASONE LA\\nDEXASPORIN\\nDEXATRIM\\nDEXATRIM CAFFEINE FREE\\nDEXATRIM PLUS VITAMIN C\\nDEXCON DM\\nDEXEDRINE\\nDEXEDRINE SPANSULE CAPSULES\\nDEXFERRUM\\nDEXILANT\\nDEXIUM\\nDEXMETHASONE\\nDEXODRYL\\nDEXOL\\nDEXONE\\nDEXPAK TAPERPAK 13 DAY\\nDEXPAK TAPERPAK 6 DAY\\nDEXPAK TAPERPAK JUNIOR 10 DAY\\nDEXPHEN M\\nDEXTROSE 5% AND ELECTROLYTE NO. 48\\nDEXTROSE AND ELECTROLYTE NO. 48\\nDEXTROSE AND ELECTROLYTE NO. 75\\nDEXTROSTAT\\nDEXYCU\\nDHE-45\\nDHS SALICYLIC ACID 3%\\nDHS TAR SHAMPOO\\nDHS ZINC\\nDHT INTENSOL\\nDI-ATRO\\nDI-DAK-SOL\\nDI-DELAMINE\\nDI-GEL\\nDI-GEL LEMON\\nDI-GEL MINT\\nDI-PHEN\\nDIABETA\\nDIABETIC CHOICE\\nDIABETIC DM\\nDIABETIC TUS WITH CODEINE\\nDIABETIC TUSS\\nDIABETIC TUSS DM MAXIMUM STRENGTH\\nDIABETIC TUSSIN\\nDIABETIC TUSSIN C\\nDIABETIC TUSSIN DM\\nDIABETIC TUSSIN EX\\nDIABETIC TUSSIN MUCUS RELIEF\\nDIABETIC TUSSIN NIGHT TIME FORMULA\\nDIABETIDERM ANTIFUNGAL\\nDIABETUSS\\nDIABINESE\\nDIADERM\\nDIAL ANTIBACTERIAL LIQUID\\nDIALOSE\\nDIALOSE PLUS\\nDIALUME\\nDIALYVITE 800\\nDIALYVITE 800 WITH IRON\\nDIALYVITE 800 WITH ZINC\\nDIALYVITE VITAMIN D3 MAX\\nDIAMODE\\nDIAMOX\\nDIAMOX SEQUELS\\nDIANEAL LOW CALCIUM 1.5\\nDIANEAL LOW CALCIUM 2.5\\nDIANEAL LOW CALCIUM 3.5\\nDIANEAL LOW CALCIUM 4.25\\nDIANEAL PD-21.5\\nDIANEAL PD-22.5\\nDIANEAL PD-24.25\\nDIAPER RELIEF\\nDIAQUA\\nDIAQUA-2\\nDIAR-AID\\nDIARRHEA AND CRAMP\\nDIASORB\\nDIASTAT\\nDIBENT\\nDIBENZYLINE\\nDIBROM\\nDIBROM SR\\nDIBROMM\\nDICAL CAPTABS\\nDICAL-D\\nDICALPHOS PLUS D\\nDICARBOSIL\\nDICEL\\nDICEL CD\\nDICEL CHEWABLE\\nDICEL DM\\nDICEL DM CHEWABLE\\nDICLEGIS\\nDICLOFENAL\\nDICLOXICILLIN\\nDICOMAL-DH\\nDICOMAL-PH\\nDICOPANOL\\nDICYCLOCOT\\nDICYLOMINE\\nDIDONE\\nDIDREX\\nDIDRONEL\\nDIDRONEL I.V. INFUSION\\nDIET AID\\nDIET CAPLETS\\nDIET X-STRENGTH\\nDIETRIM ES\\nDIFFERIN\\nDIFFUCAPS\\nDIFICID\\nDIFIL G\\nDIFIL G FORTE\\nDIFLUCAN\\nDIGEX\\nDIGIBIND\\nDIGIFAB\\nDIGIPEPSIN\\nDIGITEK\\nDIGOX\\nDIHISTINE\\nDIHISTINE DH\\nDIHISTINE EXPECTORANT\\nDIHISTINE EXPECTORANT WITH CODEINE\\nDIHYDRO-CP\\nDIHYDRO-GP\\nDILACOR\\nDILACOR XR\\nDILANTIN\\nDILATRATE\\nDILATRATE-SR\\nDILAUDID\\nDILAUDID COUGH\\nDILAUDID-HP\\nDILEX-G\\nDILITIAZEM\\nDILOCAINE\\nDILOR\\nDILT\\nDILT-XR\\nDILTIA\\nDILTIA XT\\nDILTZAC\\nDIMACOL\\nDIMAPHEN\\nDIMAPHEN DM\\nDIMAPHEN REFORMULATED DEC 2006\\nDIMAPHEN REFORMULATED JUN 2008\\nDIMAPHEN SR\\nDIME TIME\\nDIME TIME EXTENDED RELEASE\\nDIMETANE\\nDIMETANE DC\\nDIMETANE DECONGESTANT\\nDIMETANE DX\\nDIMETANE EXTENTAB\\nDIMETAPP\\nDIMETAPP ALLERGY LIQUIGEL\\nDIMETAPP ALLERGY SINUS\\nDIMETAPP CHILDREN\'S COLD AND ALLERGY\\nDIMETAPP CHILDREN\'S COLD AND ALLERGY REFORMULATED JAN 2011\\nDIMETAPP CHILDRENS COLD & FEVER\\nDIMETAPP CHILDRENS LONG ACTING COUGH PLUS COLD\\nDIMETAPP COLD\\nDIMETAPP COLD & COUGH\\nDIMETAPP COLD AND ALLERGY\\nDIMETAPP COLD AND CONGESTION\\nDIMETAPP COLD AND COUGH LIQUIGEL\\nDIMETAPP COLD AND FEVER\\nDIMETAPP COLD AND FLU\\nDIMETAPP COLD DROPS\\nDIMETAPP DECONGESTANT\\nDIMETAPP DECONGESTANT AND COUGH\\nDIMETAPP DM\\nDIMETAPP DM COLD & COUGH\\nDIMETAPP DM REFORMULATED FEB 2008\\nDIMETAPP INFANT DROPS\\nDIMETAPP LONG ACTING COUGH PLUS COLD\\nDIMETAPP MAXIMUM STRENGTH\\nDIMETAPP ND\\nDIMETAPP NIGHTTIME COLD & CONGESTION\\nDIMETAPP NIGHTTIME FLU\\nDIMETAPP NIGHTTIME FLU REFORMULATED SEP 2007\\nDIMETAPP SINUS\\nDIMETAPP TODDLER\\nDIMOTAL\\nDIOCTO\\nDIOCTO-C\\nDIOCTO-K\\nDIOCTO-K PLUS\\nDIOCTOCAL\\nDIOCTOLOSE\\nDIOCTOSOFTEZ\\nDIOCTYL\\nDIOCTYL CAL\\nDIOCTYL S.S.\\nDIOCTYN\\nDIOEZE\\nDIONEX\\nDIOVAL 40\\nDIOVAL XX\\nDIOVAN\\nDIOVAN HCT\\nDIPENTUM\\nDIPHEDRYL\\nDIPHEN\\nDIPHEN AF\\nDIPHEN COUGH\\nDIPHENADRYL\\nDIPHENDRYL\\nDIPHENHIST\\nDIPHENHIST CREAM\\nDIPHENHIST WITH ZINC\\nDIPHENHIST WITH ZINC ACETATE\\nDIPHENMAX\\nDIPHENTANN\\nDIPHENTANN D\\nDIPHENYL\\nDIPHENYLIN\\nDIPRIVAN\\nDIPRO\\nDIPROLENE\\nDIPROLENE AF\\nDIPROSONE\\nDIQUINOL\\nDISALCID\\nDISCOVISC\\nDISKET\\nDISKETS\\nDISOBROM\\nDISOPHROL\\nDISPAS\\nDISPERMOX\\nDITROPAN\\nDITROPAN XL\\nDITUSSIN-HC\\nDIUCARDIN\\nDIUPRES-250\\nDIUPRES-500\\nDIURESE\\nDIURETIC AP-ES\\nDIUREX\\nDIUREX AQUAGELS\\nDIUREX MAX\\nDIUREX WATER CAPS\\nDIURIL\\nDIURIL SODIUM\\nDIUTENSEN-R\\nDIVAPROEX\\nDIVIGEL\\nDIXAPHEDRINE\\nDIXLANTA\\nDM COLD AND COUGH\\nDM-PE-CHLOR\\nDMAX\\nDMAX DELICIOUS BERRY\\nDMAX PEDIATRIC\\nDOAK TAR\\nDOAK TAR OIL\\nDOAN\'S\\nDOANS\\nDOANS PILLS\\nDOANS PILLS EXTRA STRENGTH\\nDOANS PM\\nDOBUTREX\\nDOC-Q-LACE\\nDOC-Q-LAX\\nDOC-Q-LAX REFORMULATED SEP 2007\\nDOCAL\\nDOCEFREZ\\nDOCTAR\\nDOCTOR\'S CHOICE\\nDOCU\\nDOCU SOFT\\nDOCU SOFT PLUS\\nDOCUCAL\\nDOCUCAL-P\\nDOCULASE\\nDOCULAX\\nDOCULAX PLUS\\nDOCUSIL\\nDOCUSOFT S\\nDOCUSOFT S+\\nDOCUSOFT-S\\nDOCUSOL\\nDOCUSOL PLUS\\nDOFUS\\nDOK\\nDOK PLUS\\nDOK PLUS REFORMULATED JUL 2010\\nDOKSAKE\\nDOKTOSE PLUS\\nDOLACET\\nDOLAGESIC\\nDOLGESIC\\nDOLGIC\\nDOLGIC LQ\\nDOLGIC PLUS\\nDOLMAR\\nDOLOBID\\nDOLOGEN\\nDOLOGESIC\\nDOLOGESIC REFORMULATED JUN 2016\\nDOLONO\\nDOLONO INFANT\\nDOLOPHINE\\nDOLORAC\\nDOLORACIN\\nDOLORACIN WITH LIDOCAINE\\nDOLOREX FORTE\\nDOLOREX SOLUTION\\nDOLSED\\nDOMEBORO\\nDOMEBORO OTIC\\nDONATUSS DC\\nDONATUSS XP\\nDONATUSSIN\\nDONATUSSIN DC\\nDONATUSSIN DM\\nDONATUSSIN DM DROPS\\nDONATUSSIN DROPS\\nDONATUSSIN MAX\\nDONATUSSIN SYRUP\\nDONNAGEL\\nDONNAMAR\\nDONNAPHEN\\nDONNAPINE\\nDONNATAL\\nDONNATAL EXTENTABS\\nDONNAZYME\\nDOPAR\\nDOPRAM\\nDOPRAM-V\\nDOPTELET\\nDOPTELET 40 MG DAILY DOSE CARTON\\nDOPTELET 60 MG DAILY DOSE CARTON\\nDORAL\\nDORCOL CHILDREN\'S COUGH SYRUP\\nDORIBAX\\nDORMIN\\nDORYX\\nDOS\\nDOSAFLEX\\nDOSS-RELIEF\\nDOVARIL\\nDOVONEX\\nDOXAL\\nDOXIDAN\\nDOXIDAN REFORMULATED SEP 2008\\nDOXIDAN SOFTGEL LAXATIVE PLUS STOOL SOFTENER\\nDOXIL\\nDOXY\\nDOXY LEMMON\\nDOXY-CAPS\\nDOXY-D\\nDOXYCLINE\\nDOXYCYLINE\\nDR CALDWELL LAXATIVE\\nDR RA ECKSTEIN\\nDR SCHOLL\'S\\nDR SCHOLL\'S CLEAR AWAY WART REMOVER\\nDR. SCHOLL\'S\\nDR. SCHOLL\'S DISCS\\nDR. SCHOLL\'S POWDER SPRAY\\nDR. SCHOLL\'S SPORT SPRAY\\nDR. SCHOLLS\\nDR. SMITH\'S DIAPER OINTMENT\\nDR. SMITH\'S DIAPER RASH\\nDR. SMITH\'S RASH AND SKIN\\nDR. SMITH\'S RASH-N-ALL\\nDR.S CREAM\\nDRAGON\\nDRAMAMINE\\nDRAMAMINE II\\nDRAMAMINE LESS DROWSY\\nDRAMAMINE NON-DROWSY\\nDRAMOJECT\\nDRAWING SALVE\\nDRC\\nDREXOPHED\\nDREXOPHED SR\\nDRI-EAR\\nDRIMINATE\\nDRIMINATE II\\nDRISDOL\\nDRISTAN\\nDRISTAN 12-HOUR NASAL SPRAY\\nDRISTAN COLD\\nDRISTAN COLD MAXIMUM STRENGTH\\nDRISTAN COLD MULTI SYMPTOM\\nDRISTAN COLD MULTI SYMPTOM FORMULA\\nDRISTAN COLD NON-DROWSY\\nDRISTAN SINUS\\nDRITHO-SCALP\\nDRITHOCREME\\nDRITUSS DM\\nDRITUSS GF\\nDRITUSS HD\\nDRIXOMED\\nDRIXORAL\\nDRIXORAL COLD AND ALLERGY\\nDRIXORAL COUGH & CONGESTION LIQUID CAPS\\nDRIXORAL COUGHSORE THROAT\\nDRIXORAL NON-DROWSY\\nDRIXORAL SINUS\\nDRIZE\\nDRIZE-R\\nDROCON-CS\\nDRONTAL PLUS\\nDROTIC\\nDROTUSS CP\\nDROXIA\\nDRYPHEN\\nDRYSEC\\nDRYSOL\\nDSMC COMPOUND PLAIN\\nDSS PLUS\\nDUAC\\nDUADACIN\\nDUAVEE\\nDUETACT\\nDUEXIS\\nDULCOEASE\\nDULCOGEN\\nDULCOLAX\\nDULCOLAX BALANCE\\nDULCOLAX BOWEL PREP KIT\\nDULCOLAX STOOL SOFTENER\\nDULEEK-DP\\nDULERA\\nDULERA 1005\\nDULERA 2005\\nDUO CYP\\nDUO FUSION\\nDUO-CYP\\nDUO-MEDIHALER\\nDUO-SPAN\\nDUO-VIL 2-10\\nDUO-VIL 2-25\\nDUO-VIL 4-10\\nDUOCAINE\\nDUOCET\\nDUODOTE\\nDUOFILM\\nDUOFILM TRANSDERMAL\\nDUOGESIC\\nDUOHIST\\nDUOMAX\\nDUOMINE\\nDUONEB\\nDUOPA\\nDUOPLANT\\nDUOTAN\\nDUOTAN PD\\nDUOVISC KIT 0.350.4\\nDUOVISC KIT 0.50.55\\nDUOVISC VISCOELASTIC SYSTEM 0.350.4\\nDUOVISC VISCOELASTIC SYSTEM 0.50.55\\nDUPHALAC\\nDUPIVACAINE\\nDUPIXENT\\nDUR-TANN DM\\nDUR-TANN FORTE\\nDURA RON 0.812\\nDURA RON 225\\nDURA RON DM 0.8312\\nDURA RON DM 2425\\nDURA-DUMONE\\nDURA-ESTRIN\\nDURA-GEST\\nDURA-RON\\nDURA-RON DM\\nDURA-VENTA\\nDURA-VENTDA\\nDURABAC\\nDURABAC FORTE\\nDURABOLIN\\nDURABOLIN 50\\nDURACLON\\nDURACT\\nDURAD\\nDURADAL HD\\nDURADAL HD PLUS\\nDURADEX\\nDURADEX FORTE\\nDURADRIN\\nDURADRYL\\nDURADRYL JR\\nDURAFED\\nDURAFLOR\\nDURAFLU\\nDURAGAL-S\\nDURAGANIDIN\\nDURAGANIDIN NR\\nDURAGEN\\nDURAGESIC\\nDURAGESIS TDS\\nDURAHIST\\nDURAHIST D\\nDURAHISTINE DM\\nDURALEX\\nDURALONE\\nDURALUTIN\\nDURAMAX\\nDURAMIST PLUS\\nDURAMORPH\\nDURAMORPH PF\\nDURANEST\\nDURANEST 1.51:200000\\nDURANEST 11:200000\\nDURANEST-MPF\\nDURANEST-MPF-EPINEPHRINE\\nDURAPHEN\\nDURAPHEN 1000\\nDURAPHEN DM\\nDURAPHEN FORTE\\nDURAPHEN II\\nDURAPREP\\nDURASAL\\nDURASAL II\\nDURATAN DM\\nDURATAN FORTE\\nDURATAN PE\\nDURATEST\\nDURATESTRIN\\nDURATEX\\nDURATHATE\\nDURATHATE 200\\nDURATION\\nDURATUSS\\nDURATUSS A\\nDURATUSS AC 12\\nDURATUSS AMPM\\nDURATUSS CS\\nDURATUSS DA\\nDURATUSS DM\\nDURATUSS DM 12\\nDURATUSS G\\nDURATUSS GP\\nDURATUSS HD\\nDURATUSS HD 1002.530\\nDURATUSS HD 2252.510\\nDURATUSS PE\\nDURAVENT DM\\nDURAVENT PE\\nDURAXIN\\nDUREZOL\\nDURICEF\\nDURLAZA\\nDUTOPROL\\nDUTOPROL 10012.5\\nDUTOPROL 2512.5\\nDUTOPROL 5012.5\\nDUVOID\\nDUZALLO\\nDY-G\\nDYANAVEL\\nDYAZIDE\\nDYCILL\\nDYCLONE\\nDYFILIN GG\\nDYFLEX-G\\nDYGASE\\nDYLIX\\nDYLOJECT\\nDYMELOR\\nDYMENATE\\nDYMISTA\\nDYNA-HEX\\nDYNABAC\\nDYNACIN\\nDYNACIRC\\nDYNACIRC CR\\nDYNAFED\\nDYNAPEN\\nDYNASHIELD\\nDYNASHIELD ZO\\nDYNATUSS\\nDYNATUSS DF\\nDYNATUSS HC\\nDYNAXIN\\nDYNEX 12\\nDYNEX HD\\nDYNEX LA\\nDYNEX VR\\nDYPHYL GG\\nDYPHYLLIN-GG\\nDYPHYLLINE GG\\nDYPHYSIN\\nDYRENIUM\\nDYSPORT\\nDYTAN\\nDYTAN-AT\\nDYTAN-CD\\nDYTAN-CS\\nDYTAN-D\\nDYTAN-D CHEWABLE\\nDYTAN-DM\\nDYTAN-HC\\nDYTUSS', '\\n'), com.fc.JavaScriptDistLib.TextLib.textSplitWith('E PHEROL\\nE-400 CLEAR\\nE-CAFF P-B\\nE-GEMS\\nE-MYCIN\\nE-PILO-1\\nE-PILO-2\\nE-PILO-4\\nE-PILO-6\\nE-R-O\\nE-R-O EAR-DRY\\nE-SOLVE 2\\nE.E.S.\\nE.E.S. 400 FILMTAB\\nE.E.S. GRANULES\\nE.E.S.-200\\nE.E.S.-400\\nE.N.T.\\nE.S.P.\\nEAR DROPS RX\\nEAR WAX REMOVAL TRADENAME\\nEAR-EZE\\nEARSOL-HC\\nEASPRIN\\nEASY GEL\\nECHOTUSS HC\\nECHOTUSS-HC\\nECONOCHLOR\\nECONOPRED\\nECONOPRED PLUS\\nECONTRA\\nECOTRIN\\nECOZA\\nECPIRIN\\nECZEMIN\\nED A-CEPH\\nED A-HIST\\nED A-HIST DM\\nED BRON G\\nED CHLORPED\\nED CYTE F\\nED FLEX\\nED SPAZ\\nED-APAP\\nED-IN-SOL\\nED-MYCIN\\nED-TLC\\nED-TUSS HC\\nEDARBI\\nEDARBYCLOR\\nEDARBYCLOR 8012.5\\nEDECRIN\\nEDEX\\nEDEX REFILL\\nEDLUAR\\nEDURANT\\nEEMT\\nEEMT HS\\nEESCULA\\nEFASIN\\nEFASIN EXPECTORANT SF\\nEFASIN-HD\\nEFASIN-HD PLUS\\nEFFACLAR DUO\\nEFFECTIVE STRENGTH COUGH\\nEFFER-K\\nEFFEXOR\\nEFFEXOR XR\\nEFFEXOR XR STARTER KIT\\nEFFIENT\\nEFIDAC\\nEFIDAC-24 CHLORPHENIRAMINE\\nEFODINE\\nEFUDEX\\nEGRIFTA\\nELA-MAX\\nELA-MAX 5\\nELA-MAX PLUS\\nELAPRASE\\nELAVIL\\nELDEPRYL\\nELDERTONIC\\nELDOPAQUE\\nELDOPAQUE FORTE\\nELDOQUIN\\nELDOQUIN FORTE\\nELELYSO\\nELENZA PATCH\\nELEPSIA\\nELESTAT\\nELESTRIN\\nELIDEL\\nELIGARD\\nELIGARD 22.5\\nELIGARD 30\\nELIGARD 45\\nELIGARD 7.5\\nELIMITE\\nELINEST 28 DAY\\nELIPHOS\\nELIQUIS\\nELIQUIS 30-DAY STARTER PACK\\nELITEK\\nELIXIOPHYLLIN\\nELIXIOPHYLLIN GG\\nELIXIRAL\\nELIXOPHYLLIN\\nELIXOPHYLLIN KI\\nELIXOPHYLLIN SR\\nELIXOPHYLLIN-GG\\nELIXSURE ALLERGY\\nELIXSURE COUGH\\nELIXSURE DECONGESTANT\\nELIXSURE EXPECTORANT\\nELIXSURE FEVERPAIN\\nELIXSURE IB\\nELLA\\nELLENCE\\nELLIOTTS B\\nELLIS TONIC\\nELLURA\\nELMIRON\\nELOCON\\nELOCTATE\\nELON DUAL DEFENSE\\nELOXATIN\\nELSPAR\\nELTA LITE TAR\\nELTA PLUS TAR\\nELTA SEAL MOISTURE BARRIER\\nELTROXIN\\nELUANT\\nEMADINE\\nEMAGRIN\\nEMAGRIN FORTE\\nEMBEDA\\nEMBELIN\\nEMBELINE\\nEMBELINE E\\nEMBELINE SCALP APPLICATION\\nEMCIN CLEAR\\nEMCYT\\nEMEND\\nEMEND INJECTION\\nEMEND TRI-FOLD PACK\\nEMERSAL\\nEMETROL\\nEMFLAZA\\nEMGEL\\nEMKO\\nEMLA\\nEMOQUETTE\\nEMPIRIN\\nEMPIRIN WITH CODEINE\\nEMPLICITI\\nEMPRO\\nEMSAM\\nEMTET-500\\nEMTRIVA\\nEMULSOIL\\nEMVERM\\nENABLEX\\nENBREL\\nENCARE\\nENCORA\\nENCORA AM TABLET\\nENCORA CAPSULE\\nENCORA PM TABLET\\nENCRON 10\\nENCRON-10\\nENDACOF AC\\nENDACOF HC\\nENDACOF XP\\nENDACOF-C\\nENDACOF-DC\\nENDACOF-PLUS\\nENDACON\\nENDACON-DM\\nENDAFED\\nENDAGEN-HD\\nENDAL CD\\nENDAL COUGH\\nENDAL EXPECTORANT\\nENDAL HD\\nENDAL HD PLUS\\nENDAL-HD\\nENDAL-HD REFORMULATED NOV 2007\\nENDARI\\nENDEP\\nENDITUSSIN EXPECTORANT\\nENDITUSSIN-HD\\nENDOCET\\nENDOCET 10325\\nENDOCET 10650\\nENDOCET 5325\\nENDOCET 7.5325\\nENDOCET 7.5500\\nENDOCODONE\\nENDODAN\\nENDODAN REFORMULATED MAY 2009\\nENDOMETRIN\\nENDOSOL EXTRA\\nENDOTUSS\\nENDOTUSS EXPECTORANT\\nENDOTUSS-HD\\nENDOXAN\\nENDRATE\\nENDUR-ACIN\\nENDUR-AMIDE\\nENDUR-THINE\\nENDURONYL\\nENDURONYL FORTE\\nENEMEEZ\\nENEMEEZ PLUS\\nENFAMIL GLUCOSE\\nENFOLAST-N\\nENGERIX-B\\nENGERIX-B PEDIATRIC\\nENJUVIA\\nENKAID\\nENLON\\nENLON-PLUS\\nENOMINE LA\\nENOVACHEM BETALIDO KIT\\nENOVACHEM DEXLIDO KIT\\nENOVACHEM DOUBLEDEX KIT\\nENOVACHEM DYURAL 40 KIT\\nENOVACHEM DYURAL 80 KIT\\nENOVACHEM DYURAL L KIT\\nENOVACHEM DYURAL LM KIT\\nENOVACHEM KETOROCAINE L KIT\\nENOVACHEM LIDOLOG KIT\\nENOVACHEM MARBETA 25\\nENOVACHEM MARDEX-25 KIT\\nENOVACHEM MARLIDO 25 KIT\\nENOVACHEM MARLIDO KIT\\nENOVACHEM MLK F3 KIT\\nENOVACHEM PHYSICIAN EZ USE JOINT, TUNNEL, AND TRIGGER KIT\\nENPLUS-HD\\nENPRESSE 28 DAY\\nENSKYCE 28 DAY\\nENSTILAR\\nENTAC\\nENTAPRIN\\nENTERCOTE\\nENTEREG\\nENTEX\\nENTEX ER\\nENTEX HC\\nENTEX LA CAPSULE\\nENTEX LA TABLET REFORMULATED FEB 2008\\nENTEX LIQUID\\nENTEX LQ\\nENTEX PAC\\nENTEX PSE\\nENTEX S\\nENTEX T\\nENTOCORT\\nENTOCORT EC\\nENTRE-B\\nENTRE-S\\nENTRESTO\\nENTROCEL\\nENTSOL\\nENTUSS\\nENTUSS D\\nENTUSS EXPECTORANT\\nENTUSS-D\\nENTUSS-D JR\\nENTUSS-D LIQUID\\nENTYVIO\\nENUCLENE\\nENULOSE\\nENVARSUS\\nENZONE\\nEOVIST\\nEPANED\\nEPANOVA\\nEPCLUSA\\nEPERBEL-S\\nEPHENSIN-LA\\nEPI-CLENZ\\nEPICERAM\\nEPIDRIN\\nEPIDUO\\nEPIDURAL SINGLE SHOT WITH LIDOCAINE\\nEPIFLUR\\nEPIFOAM\\nEPIFRIN\\nEPIKLOR\\nEPILIM\\nEPIMIDE 50\\nEPINAL\\nEPIPEN\\nEPIPRAM\\nEPIQUIN MICRO\\nEPISNAP\\nEPITOL\\nEPIVIR\\nEPIVIR HBV\\nEPOGEN\\nEPPYN\\nEPZICOM\\nEQUAGESIC\\nEQUALACTIN\\nEQUALIZE GAS RELIEF DROPS\\nEQUANIL\\nEQUETRO\\nEQUI-BRON G\\nEQUI-CYTE F\\nEQUI-NADE\\nEQUIBRON G\\nEQUILET\\nEQUIMECTRIN\\nERAXIS\\nERBITUX\\nEREX\\nERGAMISOL\\nERGOCAF-PB\\nERGOCOMP-PB\\nERGOMAR\\nERGOSTAT\\nERGOTRATE\\nERGOTRATE MALEATE\\nERIDIUM\\nERIVEDGE\\nERLEADA\\nERRIN\\nERRIN 28 DAY\\nERTACZO\\nERWINAZE\\nERY\\nERY-SOL\\nERY-TAB\\nERYC\\nERYCETTE\\nERYDERM\\nERYGEL\\nERYMAX\\nERYPED\\nERYTHRA-DERM\\nERYTHROCIN\\nERYTHROCIN LACTOBIONATE\\nERYTHROCIN STEARATE\\nERYTHROCOT\\nERYTROMYCIN\\nERYZOLE\\nESBRIET\\nESCLIM\\nESERINE SULFATE OPHTHALMIC\\nESGIC\\nESKALITH\\nESKATA\\nESOTERICA\\nESPOTABS\\nESSIAN\\nESSIAN H.S.\\nESTAR\\nESTARYLLA 28 DAY\\nESTINYL\\nESTIVIN\\nESTIVIN II\\nESTRA TESTRIN\\nESTRA-C\\nESTRA-TESTRIN\\nESTRA-V 40\\nESTRACE\\nESTRACE VAGINAL\\nESTRADERM\\nESTRAGYN LA 5\\nESTRASORB\\nESTRATAB\\nESTRATEST\\nESTRE\\nESTRING\\nESTRO-A\\nESTRO-CYP\\nESTROGEL\\nESTROGENIC\\nESTRONE AQ\\nESTROSTEP FE 28 DAY\\nETH-OXYDOSE\\nETHAMOLIN\\nETHAQUIN\\nETHATAB\\nETHAVEX-100\\nETHEDENT\\nETHEXDERM BPW 10\\nETHEXDERM BPW 5\\nETHEZYME\\nETHIODOL\\nETHMOZINE\\nETHRANE\\nETHYOL\\nETOPLAC\\nETOPOPHOS\\nETRAFON 2-10\\nETRAFON 2-25\\nETRAFON 4-10\\nETRAFON 4-25\\nETRAFON FORTE\\nETRAFON-A\\nEUCERIN CALMING ITCH RELIEF\\nEUCERIN ECZEMA RELIEF\\nEUCRISA\\nEUDAL\\nEUDAL SR\\nEUFLEXXA\\nEULEXIN\\nEURAX\\nEUTHENICS\\nEUTHYROX\\nEVAC-U-GEN\\nEVAC-U-GEN REFORMULATED JAN 2008\\nEVALOSE\\nEVAMIST\\nEVARREST\\nEVEKEO\\nEVERONE\\nEVISTA\\nEVITHROM\\nEVIVO\\nEVOCLIN\\nEVOMELA\\nEVOTAZ\\nEVOVIST\\nEVOXAC\\nEVZIO\\nEX DEC\\nEX-DEC-TR\\nEX-HISTINE\\nEX-LAX\\nEX-LAX CHOCOLATE\\nEX-LAX CHOCOLATED\\nEX-LAX GENTLE NATURE\\nEX-LAX GENTLE STRENGTH\\nEX-LAX MAXIMUM RELIEF\\nEX-LAX MAXIMUM RELIEF FORMULA\\nEX-LAX MILK OF MAGNESIA\\nEX-LAX REGULAR STRENGTH PILLS\\nEX-LAX STOOL SOFTENER\\nEX-LAX ULTRA\\nEX-LAX UNFLAVORED\\nEX-PAIN\\nEX-PAIN RELIEVER\\nEX-TUSS\\nEXACTACAIN\\nEXALGO\\nEXALL\\nEXALL-D\\nEXAPRIN\\nEXCEDRIN\\nEXCEDRIN ASPIRIN FREE\\nEXCEDRIN BACK & BODY\\nEXCEDRIN MILD HEADACHE\\nEXCEDRIN PM\\nEXCEDRIN PM TRIPLE ACTION\\nEXCEDRIN QUICK TAB\\nEXCEDRIN SINUS\\nEXCEDRIN SINUS HEADACHE\\nEXCEDRIN TENSION HEADACHE\\nEXCEL\\nEXCEL PET\\nEXCOF\\nEXECLEAR\\nEXECLEAR-C\\nEXECOF\\nEXECOF XP\\nEXEFEN\\nEXEFEN DMX\\nEXELDERM\\nEXELON\\nEXETUSS\\nEXETUSS HC\\nEXETUSS-GP\\nEXFORGE\\nEXFORGE HCT\\nEXGEST LA\\nEXIDINE\\nEXJADE\\nEXNA\\nEXO-TUSS\\nEXOCAINE\\nEXODERM\\nEXONDYS\\nEXOSURF\\nEXOTIC-HC\\nEXPAREL\\nEXPECTA\\nEXPECTORANT DM\\nEXPECTORANT PE\\nEXPECTUSS\\nEXRATUSS\\nEXSEL\\nEXTAVIA\\nEXTENDRYL\\nEXTENDRYL CHEWS\\nEXTENDRYL DM\\nEXTENDRYL G\\nEXTENDRYL GCP\\nEXTENDRYL HC\\nEXTENDRYL JR\\nEXTENDRYL PEM\\nEXTENDRYL PSE\\nEXTENDRYL SYRUP\\nEXTINA\\nEXTRA GENTLE EX-LAX\\nEXTRA STRENGTH BAYER\\nEXTRA STRENGTH MYLANTA CALCI TABS\\nEXTRANEAL\\nEXTUSS\\nEXTUSSIVE\\nEXUBERA\\nEXUBERA COMBINATION PACK 12\\nEXUBERA KIT\\nEYE DROPS EXTRA\\nEYE STREAM\\nEYE-SED\\nEYE-SINE\\nEYEFLUR\\nEYEMYCIN\\nEYLEA\\nEZ III\\nEZ-OX\\nEZE D.S.\\nEZFE\\nEZIDE\\nEZOL', '\\n'), com.fc.JavaScriptDistLib.TextLib.textSplitWith('FA-8\\nFABIOR\\nFABRAZYME\\nFACE UP #2\\nFACE UP #3\\nFACTIVE\\nFACTREL\\nFALLBACK SOLO\\nFALMINA 28 DAY\\nFAM-COLSOF\\nFAM-PERICOLS\\nFAMILY 12 HOUR ANTIHISTAMINEDECONGESTANT\\nFAMVIR\\nFANAPT\\nFANAPT TITRATION PACK\\nFANATREX\\nFANSIDAR\\nFARESTON\\nFARXIGA\\nFARYDAK\\nFASENRA\\nFASLODEX\\nFASPRIN\\nFAST ACTING MYLANTA\\nFAST FREEZE\\nFASTIN\\nFASTSTAT\\nFAYOSIM 91 DAY\\nFAZACLO\\nFE 50\\nFE-MAX\\nFE-STOOL\\nFE-TINIC\\nFE-TINIC 150\\nFE-TINIC 150 REFORMULATED OCT 2008\\nFEDAHIST\\nFEDAHIST GYROCAPS\\nFEDAHIST TIMECAPS\\nFEEN-A-MINT\\nFEEN-A-MINT REFORMULATED JAN 2008\\nFEIBA\\nFELBATOL\\nFELDENE\\nFEM PH\\nFEMARA\\nFEMATROL\\nFEMATROL REFORMULATED MAR 2010\\nFEMCARE\\nFEMCET\\nFEMCON FE\\nFEMCON FE 28 DAY\\nFEMHRT\\nFEMHRT 0.52.5\\nFEMHRT 0.52.5 28 DAY\\nFEMHRT 15\\nFEMHRT 15 28 DAY\\nFEMILAX\\nFEMININE LAX\\nFEMININE LAXATIVE\\nFEMINTROL\\nFEMIRON\\nFEMPATCH\\nFEMRING\\nFEMSTAT\\nFEMSTAT 3\\nFEMSTAT PREFILL\\nFEMTRACE\\nFEMYNOR 28 DAY\\nFENESIN DM IR\\nFENESIN IR\\nFENESIN PE IR\\nFENEX-DM\\nFENEX-LA\\nFENEX-PSE\\nFENOCHOL\\nFENOGLIDE\\nFENORTHO\\nFENTEX\\nFENTORA\\nFENTUSS EXPECTORANT\\nFEOSOL\\nFEOSOL CAPLET\\nFEOSTAT\\nFER-GEN-SOL\\nFER-IN-SOL\\nFER-IN-SOL TR\\nFERA\\nFERAHEME\\nFERATE\\nFERGON\\nFERIDEX\\nFERO-GRAD\\nFERO-GRADUMET FILMTAB\\nFEROCON\\nFEROCYL\\nFEROSUL\\nFEROTRIN\\nFEROTRINSIC\\nFERRA T.D. CAPS\\nFERRA-TD\\nFERRALET\\nFERRALET 90\\nFERRALET TD\\nFERRAPLUS\\nFERRATAB\\nFERRETTS IPS\\nFERREX\\nFERREX 150 FORTE\\nFERREX 150 FORTE PLUS\\nFERREX 150 PLUS\\nFERREX-150\\nFERRIMIN\\nFERRIMIN 150\\nFERRIPROX\\nFERRLECIT\\nFERRO BASIC\\nFERRO DSS\\nFERRO-CAPS\\nFERRO-SEQUELS\\nFERRO-TIME\\nFERROCITE\\nFERROCITE F\\nFERROCITE PLUS\\nFERROGELS\\nFERROGELS FORTE\\nFERROSPACE\\nFERROUS DS\\nFERTINEX\\nFERUS PIC-150\\nFETRIN\\nFETZIMA\\nFETZIMA PACK\\nFEVERALL\\nFEXMID\\nFEXOFEENADINE\\nFIASP\\nFIBER CHOICE\\nFIBER CHOICE WEIGHT MANAGEMENT\\nFIBER LAX\\nFIBER LAXATIVE\\nFIBER TAB\\nFIBERALL\\nFIBERALL TABLETS\\nFIBERCON\\nFIBERLAX\\nFIBERNORM\\nFIBERTAB\\nFIBRICOR\\nFIBRYGA\\nFINACEA\\nFINEVIN\\nFIORICET\\nFIORICET WITH CODEINE\\nFIORINAL\\nFIORINAL WITH CODEINE\\nFIORMOR\\nFIORPAP\\nFIORTAL\\nFIORTAL WITH CODEINE\\nFIRAZYR\\nFIRMAGON\\nFIRST HYDROCORTISONE\\nFIRST TESTOSTERONE\\nFIRST-PROGESTERONE\\nFIRVANQ\\nFIV-ASA\\nFLAC\\nFLAGYL\\nFLANAX ANTACID\\nFLANAX LOZENGES\\nFLANAX NAPROXEN\\nFLANDERS\\nFLAREX\\nFLATULEX\\nFLATULEX DROPS\\nFLEBOGAMMA\\nFLECTOR\\nFLEET\\nFLEET BABYLAX\\nFLEET BISACODYL\\nFLEET ENEMA\\nFLEET GLYCERIN SUPPOSITORIES ADULT\\nFLEET MINERAL OIL\\nFLEET PHOSPHO-SODA\\nFLEET SOF-LAX\\nFLETCHERS CASTORIA\\nFLETCHERS CHILD LAXATIVE\\nFLETCHERS CHILD LAXATIVE CHERRY\\nFLEX-10\\nFLEX24 PERFORMANCE\\nFLEXALL\\nFLEXALL MAXIMUM STRENGTH\\nFLEXALL ULTRA PLUS\\nFLEXBUMIN\\nFLEXERIL\\nFLEXOJECT\\nFLEXON\\nFLEXTRA\\nFLEXTRA PLUS\\nFLEXTRA-DS\\nFLO-PRED\\nFLOAM\\nFLOLAN\\nFLOLIPID\\nFLOMAX\\nFLONASE\\nFLONASE SENSIMIST\\nFLORAJEN\\nFLORAJEN BIFIDOBLEND\\nFLORAJEN3\\nFLORASTOR\\nFLORICAL\\nFLORIL REDNESS RELIEF\\nFLORIL TEARS\\nFLORINEF\\nFLORONE\\nFLORONE E\\nFLOROPRYL\\nFLOVENT\\nFLOVENT ROTADISK\\nFLOWTUSS\\nFLOXIN\\nFLOXIN I.V.\\nFLOXIN OTIC\\nFLOXURIDIEN\\nFLOXURIDINE NOVAPLUS\\nFLU, COLD, AND COUGH\\nFLUAD 2015-2016\\nFLUAD 2016-2017\\nFLUAD 2017-2018\\nFLUARIX 2008-2009 FORMULA\\nFLUARIX 2009-2010 FORMULA\\nFLUARIX 2010-2011 FORMULA\\nFLUARIX 2011-2012 FORMULA\\nFLUARIX 2012-2013 FORMULA\\nFLUARIX 2013-2014 FORMULA\\nFLUARIX 2014-2015 FORMULA\\nFLUARIX QUAD 2014-2015 FORMULA\\nFLUARIX QUADRIVALENT 2015-2016\\nFLUARIX QUADRIVALENT 2016-2017\\nFLUARIX QUADRIVALENT 2017-2018\\nFLUARIX QUADRIVALENT 2018-2019\\nFLUBHENAZINE\\nFLUBLOK 2012-2013 FORMULA\\nFLUBLOK 2013-2014 FORMULA\\nFLUBLOK 2014-2015 FORMULA\\nFLUBLOK 2015-2016\\nFLUBLOK 2016-2017\\nFLUBLOK 2017-2018\\nFLUBLOK QUADRIVALENT 2017-2018\\nFLUCAINE\\nFLUCELVAX 2012-2013 FORMULA\\nFLUCELVAX 2013-2014 FORMULA\\nFLUCELVAX 2014-2015 FORMULA\\nFLUCELVAX 2015-2016\\nFLUCELVAX QUADRIVALENT 2016-2017\\nFLUCELVAX QUADRIVALENT 2017-2018\\nFLUCONAZALE\\nFLUDARA\\nFLUEX\\nFLULAVAL 2008-2009 FORMULA\\nFLULAVAL 2009-2010 FORMULA\\nFLULAVAL 2010-2011 FORMULA\\nFLULAVAL 2011-2012 FORMULA\\nFLULAVAL 2013-2014 FORMULA\\nFLULAVAL 2014-2015 FORMULA\\nFLULAVAL QUAD 2013-2014 FORMULA\\nFLULAVAL QUAD 2014-2015 FORMULA\\nFLULAVAL QUADRIVALENT 2015-2016\\nFLULAVAL QUADRIVALENT 2016-2017\\nFLULAVAL QUADRIVALENT 2017-2018\\nFLULAVAL QUADRIVALENT 2018-2019\\nFLUMADINE\\nFLUMIST 2008-2009 FORMULA\\nFLUMIST 2009-2010 FORMULA\\nFLUMIST 2011-2012 FORMULA\\nFLUMIST 2012-2013 FORMULA\\nFLUMIST 2014-2015 FORMULA\\nFLUMIST 2015-2016\\nFLUMIST QUADRIVALENT 2016-2017\\nFLUMIST QUADRIVALENT 2017-2018\\nFLUNISIN\\nFLUONID\\nFLUOR A DAY\\nFLUOR A DAY CHEWABLE\\nFLUOR-OP\\nFLUORABON\\nFLUORACAINE\\nFLUORBENOX\\nFLUORESCEIN DARK\\nFLUORESCEIN LITE\\nFLUORESCITE\\nFLUORI-METHANE\\nFLUORIDEX\\nFLUORIDEX DAILY DEFENSE SENSITIVITY\\nFLUORIDEX DAILY RENEWAL\\nFLUORIGARD\\nFLUORINSE\\nFLUORISHIELD\\nFLUORITAB\\nFLUOROCARE\\nFLUORODEX\\nFLUORON\\nFLUOROPLEX\\nFLUOROX\\nFLUOSOL\\nFLURA-DROPS\\nFLURA-LOZ\\nFLURA-TAB\\nFLURATE\\nFLURBIDROFEN\\nFLURESS\\nFLURO-ETHYL\\nFLURO-ETHYL REFORMULATED SEP 2008\\nFLUROSYN\\nFLUROX\\nFLUTEX\\nFLUTICARE\\nFLUTUSS HC\\nFLUTUSS XP\\nFLUVIRIN 2008-2009 FORMULA\\nFLUVIRIN 2009-2010 FORMULA\\nFLUVIRIN 2010-2011 FORMULA\\nFLUVIRIN 2011-2012 FORMULA\\nFLUVIRIN 2012-2013 FORMULA\\nFLUVIRIN 2013-2014 FORMULA\\nFLUVIRIN 2014-2015 FORMULA\\nFLUVIRIN 2015-2016\\nFLUVIRIN 2016-2017\\nFLUVIRIN 2017-2018\\nFLUXID\\nFLUZONE\\nFLUZONE 2008-2009 FORMULA\\nFLUZONE 2009-2010 FORMULA\\nFLUZONE 2010-2011 FORMULA\\nFLUZONE 2011-2012 FORMULA\\nFLUZONE 2012-2013 FORMULA\\nFLUZONE 2013-2014 FORMULA\\nFLUZONE 2014-2015 FORMULA\\nFLUZONE 2015-2016\\nFLUZONE 2016-2017\\nFLUZONE 2017-2018\\nFLUZONE HIGH-DOSE 2012-2013 FORMULA\\nFLUZONE HIGH-DOSE 2013-2014 FORMULA\\nFLUZONE HIGH-DOSE 2014-2015 FORMULA\\nFLUZONE INTRADERMAL 2012-2013 FORMULA\\nFLUZONE INTRADERMAL 2013-2014 FORMULA\\nFLUZONE INTRADERMAL 2014-2015 FORMULA\\nFLUZONE QUADRIVALENT 2013-2014 FORMULA\\nFLUZONE QUADRIVALENT 2014-2015 FORMULA\\nFLUZONE QUADRIVALENT 2015-2016\\nFLUZONE QUADRIVALENT 2016 SOUTHERN HEMISPHERE\\nFLUZONE QUADRIVALENT 2016-2017\\nFLUZONE QUADRIVALENT 2017-2018\\nFML\\nFML FORTE LIQUIFILM\\nFML S.O.P.\\nFML-S\\nFOAMICON\\nFOAMING ANTACID\\nFOCALIN\\nFOCALIN XR\\nFOILLE\\nFOILLE PLUS\\nFOLACIN\\nFOLBALIN\\nFOLBECAL\\nFOLBEE\\nFOLBIC\\nFOLCAPS\\nFOLEX PFS\\nFOLGARD\\nFOLGARD OS\\nFOLINATAL PLUS B\\nFOLITAB\\nFOLIVANE-F\\nFOLLISTIM\\nFOLOTYN\\nFOLPACE RX\\nFOLPLEX\\nFOLTABS\\nFOLTRATE\\nFOLTX\\nFORADIL\\nFORANE\\nFORFIVO\\nFORMA-RAY\\nFORMADON\\nFORMALAZ\\nFORMALYDE-10\\nFORMULATION R\\nFORMULATION R OINTMENT\\nFORTABS\\nFORTAMET\\nFORTAZ\\nFORTEO\\nFORTESTA\\nFORTICAL\\nFORTOVASE\\nFOSAMAX\\nFOSAMAX PLUS D\\nFOSAMAX PLUS D 702800\\nFOSAMAX PLUS D 705600\\nFOSCAVIR\\nFOSRENOL\\nFOSTEUM\\nFOSTEX\\nFOSTEX BAR\\nFOSTEX BAR 10%\\nFOSTEX GEL 10%\\nFOSTEX MEDICATED CLEANING BAR\\nFOSTEX WASH\\nFOSTEX WASH 10%\\nFOSTRIL\\nFOTOTAR\\nFOUR-WAY\\nFRAGMIN\\nFREAMINE 6.9\\nFREAMINE III 10\\nFREAMINE III 3\\nFREAMINE III 8.5\\nFREEZ EEZ\\nFREEZE\\nFREEZE IT\\nFREEZONE\\nFREEZONE CORN REMOVER\\nFRENADOL\\nFRESHKOTE\\nFROVA\\nFRUITY C\\nFS SHAMPOO\\nFULPHILA\\nFULVICIN PG\\nFULVICIN-U-F\\nFULYZAQ\\nFUMASORB\\nFUMATINIC\\nFUNDUSCEIN\\nFUNGATIN\\nFUNGI-GUARD\\nFUNGI-NAIL\\nFUNGI-NAIL TOE AND FOOT\\nFUNGICURE\\nFUNGICURE MAXIMUM STRENGTH\\nFUNGICURE SOLUTION\\nFUNGIZONE\\nFUNGIZONE CREAM\\nFUNGOID\\nFUNGOID (CLOTRIMAZOLE)\\nFUNGOID AF\\nFUNGOID AND HC\\nFUNGOID-D\\nFURACIN\\nFURADANTIN\\nFUROXONE\\nFUSILEV\\nFUZEON\\nFYAVOLV\\nFYCOMPA\\nFYCOMPA 24 SAMPLE PACK\\nFYCOMPA 46 SAMPLE PACK', '\\n'), com.fc.JavaScriptDistLib.TextLib.textSplitWith('G BID\\nG-1\\nG-BID DM\\nG-MYCIN\\nG-MYTICIN\\nG-PHED- PD\\nG-TAR\\nG-TUSS\\nG-ZYNCOF\\nGABARONE\\nGABITRIL\\nGABLOFEN\\nGALZIN\\nGAMASTAN\\nGAMIMUNE N\\nGAMIMUNE N 10%\\nGAMIMUNE N 5%\\nGAMMAGARD\\nGAMMAGARD SD\\nGAMMAKED\\nGAMMAPLEX\\nGAMMAR\\nGAMMAR I.V.\\nGAMMAR-P I.V.\\nGAMUNEX\\nGANI-TUSS NR\\nGANITE\\nGANTANOL\\nGANTRISIN\\nGANTRISIN OPHTHALMIC\\nGARAMYCIN\\nGARAMYCIN OPHTHALMIC\\nGARAMYCIN TOPICAL\\nGARDASIL\\nGARDASIL 9\\nGARLIQUE\\nGARNIER FRUCTIS ANTIDANDRUFF\\nGAS AIDE\\nGAS RELIEF\\nGAS-X\\nGAS-X EXTRA STRENGTH\\nGAS-X LIQUID EXTRA STRENGTH\\nGAS-X MAXIMUM STRENGTH\\nGAS-X PREVENTION\\nGAS-X WITH MAALOX\\nGASTRINEX\\nGASTROCROM\\nGASTROGRAFIN\\nGASTROMARK\\nGATTEX\\nGAVILAX\\nGAVILYTE-C\\nGAVILYTE-G\\nGAVILYTE-H\\nGAVILYTE-H AND BISACODYL\\nGAVILYTE-N\\nGAVISCON\\nGAVISCON CHEWABLE\\nGAVISCON CHEWABLE TABLET\\nGAVISCON REGULAR STRENGTH LIQUID\\nGAVISCON-2\\nGAZYVA\\nGDP EX\\nGEBAUER\'S ETHYL CHLORIDE\\nGEL-KAM\\nGEL-ONE\\nGEL-SYN\\nGEL-TIN\\nGELATO ANESTHETIC\\nGELATO PERIO RINSE\\nGELATO SODIUM FLUORIDE\\nGELATO TOPICAL GEL\\nGELHIST PEDIATRIC\\nGELNIQUE\\nGELPIRIN-CCF\\nGELRITE\\nGELUSIL\\nGEMCOR\\nGEMZAR\\nGEN LAX\\nGEN-ALOX\\nGEN-LANTA\\nGEN-LANTA II\\nGEN-XENE\\nGENACOL\\nGENACOL MAXIMUM STRENGTH\\nGENACOTE\\nGENAHIST\\nGENALLERATE\\nGENAMIN\\nGENAMIN EXPECTORANT\\nGENAPAP\\nGENAPAP C\\nGENAPAP EXTRA STRENGTH\\nGENAPAP PM\\nGENAPAP SINUS\\nGENAPHED\\nGENAPHED PLUS\\nGENASAL\\nGENASAN\\nGENASEC\\nGENASOFT\\nGENASOFT PLUS\\nGENASONEALOE\\nGENASPOR\\nGENASYME\\nGENATON\\nGENATON CHEWABLE\\nGENATUSS\\nGENATUSS DM\\nGENCOFED\\nGENCOFED EXPECTORANT\\nGENCOFED PEDIATRIC EXPECTORANT\\nGENCOLD\\nGENDECON\\nGENE PRESS T\\nGENEBROM DM\\nGENEBRONCO D\\nGENEBS\\nGENECOF HC\\nGENECOF XP\\nGENEDEL\\nGENEDEL GRAPE FLAVOR\\nGENELAN\\nGENEPATUSS\\nGENERESS FE 28\\nGENERLAC\\nGENETRON 12\\nGENETUSS 2\\nGENEXA\\nGENEXOTIC HC\\nGENEXPECT DM\\nGENEXPECT PE\\nGENEXPECT SF\\nGENFIBER\\nGENGRAF\\nGENNIN-FC\\nGENOCIDIN TUSS\\nGENOPTIC\\nGENORA\\nGENORA 150\\nGENOTROPIN\\nGENPRIL\\nGENPRIN\\nGENTAK\\nGENTASOL\\nGENTEAL\\nGENTEAL GEL DROPS\\nGENTEAL PM\\nGENTEAL TEARS\\nGENTEAL TEARS MILD\\nGENTEX HC\\nGENTEX LA\\nGENTEX LQ\\nGENTLAX\\nGENTLAX REFORMULATED JAN 2008\\nGENTLAX S\\nGENTLE\\nGENTLE LAXATIVE\\nGENTLELAX\\nGENTRAN 40\\nGENTRAN 70\\nGENVISC\\nGENVOYA\\nGEOCILLIN\\nGEODON\\nGEONE\\nGEREF\\nGEREF DIAGNOSTIC\\nGERI-HYDROLAC\\nGERICET\\nGERIDIUM\\nGERIMAL\\nGESTERONE\\nGESTICARE DHA\\nGESTICARE DHA STARTER PACK\\nGESTUSS-HC\\nGETS-IT CORN AND CALLUS REMOVER\\nGFN 600PHENYLEPHRINE 20\\nGFN DYP\\nGFN PEH\\nGFN PSEH DTMH 00\\nGFN PSEH DTMH 05\\nGFN PSEH DTMH 06\\nGFN PSEH DTMH 07\\nGFN PSEH DTMH O1\\nGFN PSEH DTMH TABLETS 11\\nGG-CEN\\nGG-DM SR\\nGG-PPA\\nGGDM\\nGIANVI 28-DAY\\nGIAPREZA\\nGIAZO\\nGILDAGIA\\nGILDESS\\nGILDESS 1.530 21 DAY\\nGILDESS 120 21 DAY\\nGILDESS 24 FE 28 DAY\\nGILDESS FE 1.530 28 DAY\\nGILDESS FE 120 28 DAY\\nGILENYA\\nGILOTRIF\\nGILPHEX\\nGILPHEX TR\\nGILTUSS\\nGILTUSS ALLERGY & SINUS\\nGILTUSS COUGH & CHEST CONGESTION\\nGILTUSS PED-C\\nGILTUSS PEDIATRIC\\nGILTUSS SINUS & CONGESTION\\nGILTUSS TR\\nGINGI MED\\nGINGICAINE\\nGINSANA\\nGLADASE-C\\nGLASSIA\\nGLATOPA\\nGLAUCON\\nGLEEVEC\\nGLEOSTINE\\nGLIADEL\\nGLO-SEL\\nGLU-K\\nGLUCAGEN\\nGLUCOBURST\\nGLUCOPHAGE\\nGLUCOPHAGE XR\\nGLUCOTROL\\nGLUCOTROL XL\\nGLUCOVANCE\\nGLUMETZA\\nGLUTAMIC-500\\nGLUTOSE\\nGLY-CORT\\nGLY-OXIDE\\nGLYBURASE\\nGLYCATE\\nGLYCERYL T\\nGLYCOLAX\\nGLYCOPHOS\\nGLYCOTUSS-DM\\nGLYDEINE\\nGLYDO\\nGLYGURIDE\\nGLYNASE\\nGLYNASE PRES-TAB\\nGLYOXIDE\\nGLYQUIN\\nGLYSET\\nGLYTONE\\nGLYTUSS\\nGLYXAMBI\\nGOCOVRI\\nGOLD BOND ANTI-ITCH INTENSIVE RELIEF\\nGOLD BOND BABY CORNSTARCH PLUS\\nGOLD BOND BODY POWDER EXTRA STRENGTH\\nGOLD BOND BODY POWDER ORIGINAL STRENGTH\\nGOLD BOND FOOT POWDER MAXIMUM STRENGTH\\nGOLD BOND INTENSIVE HEALING\\nGOLD BOND LOTION\\nGOLD BOND MAXIMUM RELIEF\\nGOLD BOND PAIN RELIEVING FOOT\\nGOLD BOND ULTIMATE DIABETICS DRY SKIN RELIEF\\nGOLD BOND ULTIMATE ECZEMA RELIEF\\nGOLYTELY\\nGONAK\\nGONAL F\\nGONAL-F RFF\\nGONIC\\nGONIOSOFT\\nGONIOSOL\\nGONIOVISC\\nGONITRO\\nGOODY\'S BACK & BODY PAIN RELIEF\\nGOODY\'S BODY PAIN\\nGOODY\'S EXTRA STRENGTH\\nGOODY\'S MIGRAINE RELIEF\\nGOODY\'S PM\\nGOPRELTO\\nGORDOBALM\\nGORDOCHOM\\nGORDOFILM\\nGORDOGESIC\\nGORDONS UREA\\nGORMEL\\nGORMEL 10\\nGRALISE\\nGRALISE 30 DAY\\nGRALISE STARTER PACK\\nGRANISOL\\nGRANIX\\nGRANUL-DERM\\nGRANULDERM\\nGRANULEX\\nGRANUMED\\nGRASTEK\\nGRIFULVIN V\\nGRIS-PEG\\nGRISACTIN 500\\nGRISACTIN ULTRA\\nGRISEOFULICIN\\nGRISEOFULVIC\\nGRX HEMORRHOIDAL\\nGUA HC\\nGUA PC\\nGUACOL\\nGUAI SUDO\\nGUAI-CAR LA\\nGUAI-CO\\nGUAI-DEX\\nGUAIATUSSIN AC\\nGUAIATUSSIN DAC\\nGUAIBID D\\nGUAIBID D PEDIATRIC\\nGUAIBID DM\\nGUAIBID-LA\\nGUAIDEX\\nGUAIFED\\nGUAIFED PD\\nGUAIFED PD REFORMULATED NOV 2008\\nGUAIFED SYRUP\\nGUAIFED-PSE\\nGUAIFEN AC\\nGUAIFEN C\\nGUAIFEN CF\\nGUAIFEN DAC\\nGUAIFEN DM\\nGUAIFEN NR\\nGUAIFEN-C\\nGUAIFENESIN LA\\nGUAIFENEX\\nGUAIFENEX DM RX\\nGUAIFENEX GP\\nGUAIFENEX LA\\nGUAIFENEX PPA 75\\nGUAIFENEX PSE 120\\nGUAIFENEX PSE 80\\nGUAIFENEX PSE 85\\nGUAIFENEX RX\\nGUAIPAX\\nGUAIPAX PSE\\nGUAIPHEN PD\\nGUAITAB\\nGUAIVENT (ETHEX)\\nGUAIVENT PD\\nGUAPHEN FORTE\\nGUIACOUGH\\nGUIACOUGH DM\\nGUIADEX DM\\nGUIADRINE DM\\nGUIADRINE G-1200\\nGUIADRINE II\\nGUIADRINE II SR\\nGUIADRINE PSE\\nGUIADRINE PSE 120\\nGUIADRINE-GP\\nGUIAFENE II DM\\nGUIAPHEN HD\\nGUIAT CLEAR DM\\nGUIATEX\\nGUIATEX II\\nGUIATEX II SR\\nGUIATEX LA\\nGUIATEX PSE\\nGUIATUSS\\nGUIATUSS AC\\nGUIATUSS CF\\nGUIATUSS CLEAR\\nGUIATUSS DAC\\nGUIATUSS DM\\nGUIATUSS PE\\nGUIATUSSIN DAC\\nGUIATUSSIN DM\\nGUIATUSSIN WITH CODEINE\\nGUIATUSSIN-CF\\nGUIAVENT ER\\nGYBURIDE\\nGYNAZOLE-1\\nGYNE-LOTRIMIN\\nGYNE-LOTRIMIN INSERTS\\nGYNECORT\\nGYNODIOL\\nGYNOGEN LA 20\\nGYNOL II\\nGYNOL II GEL', '\\n'), com.fc.JavaScriptDistLib.TextLib.textSplitWith('H 9600 SR\\nH C TUSSIVE-NR\\nH-C TUSSIVE\\nH-TRAN\\nH-TUSS-D LIQUID\\nH2Q\\nHABITROL\\nHAEGARDA\\nHAILEY 1.530 21 DAY\\nHAILEY 24 FE 28 DAY\\nHAILEY FE 120 28 DAY\\nHALAC\\nHALAVEN\\nHALCION\\nHALDOL\\nHALDOL DECANOATE\\nHALENOL\\nHALEY\'S M-O\\nHALFAN\\nHALFLYTELY\\nHALFLYTELY AND BISACODYL BOWEL PREP KIT\\nHALFLYTELY AND BISACODYL BOWEL PREP REFORMULATED AUG 2010\\nHALFLYTELY AND BISACODYL BOWEL PREP REFORMULATED OCT 2008\\nHALFPRIN\\nHALLS\\nHALLS DEFENSE\\nHALLS SUGARFREE HONEY LEMON\\nHALOG\\nHALOG-E\\nHALONATE\\nHALONATE PAC\\nHALOTESTIN\\nHALOTEX\\nHALOTUSSIN\\nHALOTUSSIN AC\\nHALOTUSSIN DAC\\nHALOTUSSIN DM\\nHALOTUSSIN DM SUGAR FREE\\nHALTRAN\\nHAMPTONS BABY POWDER\\nHAPONAL\\nHARMONYL\\nHARVONI\\nHAVRIX\\nHAVRIX PEDIATRIC\\nHAY FEVER ALLERGY RELIEVER\\nHAYFEBROL\\nHAYFEBROL LIQUID\\nHB-VAX\\nHB-VAX II\\nHC DERMA-PAX\\nHC PRAMOXINE\\nHC-DERMA-PAX\\nHC-TUSSIVE-D\\nHCB BPM PEH\\nHEAD & SHOULDERS\\nHEAD & SHOULDERS DRY SCALP\\nHEAD & SHOULDERS INTENSIVE TREATMENT\\nHEALON\\nHEALON5\\nHEALTH CARE AMERICA GLUCOSE\\nHEALTHY MAMA\\nHEALTHYLAX\\nHEATHER 28 DAY\\nHECORIA\\nHECTOROL\\nHELIDAC THERAPY\\nHELIXATE\\nHEMABATE\\nHEMANGEOL\\nHEMASPAN\\nHEMATINIC WITH FOLIC ACID\\nHEMATOGEN\\nHEMAVITE F\\nHEMAX\\nHEMLIBRA\\nHEMMOREX\\nHEMOBAN\\nHEMOCYTE\\nHEMOCYTE PLUS\\nHEMOCYTE-C\\nHEMOCYTE-F\\nHEMOCYTE-F ELIXIR\\nHEMOFIL\\nHEMORID\\nHEMORID CREAM\\nHEMORID MAXIMUM STRENGTH\\nHEMORID OINTMENT\\nHEMORR-OXINE\\nHEMORRHOIDAL HC\\nHEMORROIDAL OINTMENT\\nHEMOX A\\nHEMRIL\\nHEMRIL-30\\nHEMRIL-HC UNISERTS\\nHEP-LOCK\\nHEP-PAK\\nHEP-PAK CVC\\nHEPAGAM B\\nHEPAGAM B NOVAPLUS\\nHEPATAMINE 8\\nHEPATASOL 8\\nHEPFLUSH\\nHEPLISAV-B\\nHEPSERA\\nHEPTALAC\\nHERBON REFORMULATED MAR 2010\\nHERCEPTIN\\nHERPETROL\\nHERPLEX\\nHESPAN\\nHETLIOZ\\nHEXABRIX\\nHEXADROL\\nHEXADROL PHOSPHATE\\nHEXALEN\\nHEXATUSSIN\\nHEXTEND\\nHHR\\nHI TEX PSE\\nHI-COR\\nHI-TUSS HC\\nHIBERIX\\nHIBICLENS\\nHIBISTAT\\nHIBTITER\\nHIGHLAND DM\\nHIGHLAND HC\\nHIPREX\\nHISDEC\\nHISMANAL\\nHIST-HC\\nHIST-PLUS\\nHIST-PSE\\nHISTA-TABS\\nHISTA-VADRIN\\nHISTA-VENT DA\\nHISTA-VENT PSE\\nHISTACOL BD\\nHISTACOL DM DROPS\\nHISTACOL DM PEDIATRIC\\nHISTADE\\nHISTADE REFORMULATED FEB 2008\\nHISTADEC\\nHISTADEC DM\\nHISTADECDM\\nHISTAFED\\nHISTAFED LA\\nHISTAJECT\\nHISTALET\\nHISTALET FORTE\\nHISTAMAXD\\nHISTATAB\\nHISTATAB PH\\nHISTATAB PLUS\\nHISTATAN\\nHISTATROL\\nHISTERONE\\nHISTEX\\nHISTEX AC\\nHISTEX CHEWABLE\\nHISTEX CT\\nHISTEX DM\\nHISTEX HC\\nHISTEX IE\\nHISTEX PD\\nHISTEX PD 12\\nHISTEX PD REFORMULATED MAR 2014\\nHISTEX PDX\\nHISTEX PE\\nHISTEX SR\\nHISTEX SR TABLET\\nHISTEX SYRUP\\nHISTINE D\\nHISTINE-D\\nHISTINEX D\\nHISTINEX DM\\nHISTINEX HC\\nHISTINEX PV\\nHISTOLYN CYL\\nHISTUSS HC\\nHISTUSS PD\\nHISTUSSIN D\\nHISTUSSIN-HC\\nHIVID\\nHIZENTRA\\nHMS SUSPENSION\\nHOLD DM\\nHOMAPIN-10\\nHOMAPIN-5\\nHOMATROPAIRE\\nHONGOS\\nHORIZANT\\nHORSEMAN\'S DREAM FUNG-A-WAY\\nHOT SPOT\\nHSS\\nHT TUSS DM\\nHUMALOG\\nHUMALOG MIX\\nHUMALOG MIX 5050\\nHUMALOG MIX 7525\\nHUMAN ALBUMIN GRIFOLS\\nHUMATE-P\\nHUMATROPE\\nHUMCO\\nHUMEGON\\nHUMIBID\\nHUMIBID CS\\nHUMIBID DM\\nHUMIBID DM PEDIATRIC\\nHUMIBID DM REFORMULATED FEB 2008\\nHUMIBID E\\nHUMIBID GC\\nHUMIBID L.A. REFORMULATED APR 2009\\nHUMIBID MAXIMUM STRENGTH\\nHUMIBID PEDIATRIC\\nHUMIGEN DM\\nHUMIGEN LA\\nHUMIRA\\nHUMIRA PEDIATRIC CROHN\'S DISEASE STARTER PACKAGE (2 COUNT)\\nHUMIRA PEDIATRIC CROHN\'S DISEASE STARTER PACKAGE (3 COUNT)\\nHUMIRA PEDIATRIC CROHN\'S DISEASE STARTER PACKAGE (6 COUNT)\\nHUMIRA PEN - CROHN\'S DISEASE STARTER PACK\\nHUMIRA PEN - PSORIASIS STARTER PACK\\nHUMIRA PEN 40 MG0.4 ML STARTER PACK - CROHN\'S DISEASE\\nHUMIRA PEN 40 MG0.4 ML STARTER PACK - PSORIASIS\\nHUMIRA PEN 80 MG0.8 ML - STARTER PACKAGE FOR CROHN\'S DISEASE, ULCERATIVE COLITIS OR HIDRADENITIS SUPPURATIVA\\nHUMIRA PEN 80 MG0.8 ML AND 40 MG0.4 ML - PSORIASISUVEITIS STARTER PACKAGE\\nHUMIRA PREFILLED SYRINGE 80 MG0.8 ML STARTER PACK - PEDIATRIC CROHN\'S DISEASE\\nHUMIST\\nHUMORSOL\\nHUMULIN\\nHUMULIN 5050\\nHUMULIN 7030\\nHUMULIN L\\nHUMULIN N\\nHUMULIN R\\nHUMULIN U ULTRALENTE\\nHURRICAINE\\nHURRICANE TRADENAME\\nHURRISEPT\\nHUSKY 514\\nHY-KXP\\nHY-PHEN\\nHY5\\nHYALGAN\\nHYBOLIN DECANOATE\\nHYBOLIN-IMPROVED\\nHYBRISIL\\nHYCAMTIN\\nHYCET\\nHYCO ELIXIR\\nHYCO-DH\\nHYCO-PAP\\nHYCODAN\\nHYCODAN SOLUTION\\nHYCOFENIX\\nHYCOMAL DH\\nHYCOMED\\nHYCOMINE\\nHYCOMINE COMPOUND\\nHYCOMINE PEDIATRIC\\nHYCOPHEN\\nHYCOPHEN PEDIATRIC\\nHYCORT\\nHYCOSIN EXPECTORANT\\nHYCOTUSS\\nHYCOTUSS EXPECTORANT\\nHYDASE\\nHYDELTRA-T.B.A.\\nHYDELTRASOL\\nHYDEX PD\\nHYDONE\\nHYDONE FORMULA LIQUID\\nHYDRA-ZIDE\\nHYDRALAZINE PLUS\\nHYDRAMINE\\nHYDRAMINE COMPOUND\\nHYDRAMINE COUGH SYRUP\\nHYDRAP-ES\\nHYDRASYN25\\nHYDRATE\\nHYDREA\\nHYDRISALIC\\nHYDRO 35\\nHYDRO 40\\nHYDRO EAR\\nHYDRO GP\\nHYDRO PAR\\nHYDRO PC\\nHYDRO PRO\\nHYDRO PRO D\\nHYDRO PRO DM SR\\nHYDRO TUSSIN HC\\nHYDRO-COBEX\\nHYDRO-DP\\nHYDRO-PC II\\nHYDRO-PC II PLUS\\nHYDRO-RESERP\\nHYDRO-TUSS DM\\nHYDRO-TUSS XP\\nHYDRO-TUSSIN CBX\\nHYDRO-TUSSIN DHC\\nHYDRO-TUSSIN EXP\\nHYDRO-TUSSIN HG\\nHYDROCET\\nHYDROCIL\\nHYDROCOD CP AND PSEUD\\nHYDROCOD-GF\\nHYDROCODONE CP\\nHYDROCODONE HD\\nHYDROCOF HC\\nHYDROCOF-HC\\nHYDROCORT CREAM\\nHYDROCORTISONE 1% IN ABSORBASE\\nHYDROCORTISONE AC\\nHYDROCORTONE\\nHYDROCORTONE ACETATE\\nHYDROCORTONE PHOSPHATE\\nHYDROCOT\\nHYDRODIURIL\\nHYDROFED\\nHYDROGESIC\\nHYDROMET\\nHYDROMIDE\\nHYDRON CP\\nHYDRON EX\\nHYDRON KGS\\nHYDRON PCS\\nHYDROPANE\\nHYDROPEL\\nHYDROPHED\\nHYDROPHENE DH\\nHYDROPRAM\\nHYDROPRES-25\\nHYDROPRES-50\\nHYDROQUINONE + SUNSCREEN\\nHYDROSERP\\nHYDROSERPINE\\nHYDROSERPINE #1\\nHYDROSKIN\\nHYDROSTAT\\nHYDROSTAT IR\\nHYDROTROPINE\\nHYDROTUSS\\nHYDROTUSS HC\\nHYDROTUSSIN HD\\nHYDROTUSSIN XP\\nHYDROXY-COBAL\\nHYFLEX\\nHYFLEX DS\\nHYGEL\\nHYGIENIC EAR\\nHYGROTON\\nHYLASE WOUND\\nHYLENEX\\nHYLIRA\\nHYLOREL\\nHYLUTIN\\nHYOLEV\\nHYOMAX\\nHYOPHEN\\nHYOSCYAMINE TR\\nHYOSOL\\nHYOSOLSL\\nHYOSOPHEN\\nHYOSOPHEN SR\\nHYOSPAZ\\nHYOSYNE\\nHYPAM\\nHYPAMINE\\nHYPAQUE\\nHYPAQUE CYSTO\\nHYPAQUE MEGLUMINE\\nHYPAQUE SODIUM\\nHYPER-SAL\\nHYPER-TET\\nHYPERAB\\nHYPERCARE\\nHYPERHEP B\\nHYPERRAB\\nHYPERRHO\\nHYPERRHO SD\\nHYPERSED\\nHYPERSTAT\\nHYPERTET\\nHYPERTET SD\\nHYPHED\\nHYPHEN-HD\\nHYPOTEARS\\nHYQVIA 10 G  100 ML KIT\\nHYQVIA 2.5 G  25 ML KIT\\nHYQVIA 20 G  200 ML KIT\\nHYQVIA 30 G  300 ML KIT\\nHYQVIA 5 G  50 ML KIT\\nHYREXIN\\nHYSEPT\\nHYSINGLA\\nHYSKON\\nHYSONE\\nHYTAN\\nHYTINIC\\nHYTONE\\nHYTRIN\\nHYTUSS\\nHYTUSS 2X\\nHYTUSSIN\\nHYTUSSIN EXPECTORANT', '\\n'), com.fc.JavaScriptDistLib.TextLib.textSplitWith('I-COOL\\nI-COOL PLUS D\\nI.D.A.\\nIB-STAT\\nIBIFON 600\\nIBRANCE\\nIBREN\\nIBU\\nIBU-200\\nIBU-4\\nIBU-6\\nIBU-8\\nIBU-TAB\\nIBUDONE\\nIBUDONE 10200\\nIBUDONE 5200\\nIBUPROHM\\nIC 400 KIT\\nIC 800 KIT\\nIC-GREEN\\nICAR\\nICAR C\\nICAR PRENATAL CHEWABLE CALCIUM\\nICAR-C PLUS\\nICAR-C PLUS SR\\nICLEVIA 91 DAY\\nICLUSIG\\nICY HOT\\nICY HOT ARTHRITIS\\nICY HOT VAPOR\\nICY HOT WITH CAPSAICIN\\nICY HOT WITH METHYL SALICYLATE\\nIDAMYCIN\\nIDAMYCIN PFS\\nIDE-CET\\nIDELVION\\nIDENAL\\nIDHIFA\\nIFEREX\\nIFEREX 150 FORTE\\nIFEX\\nIFEX  MESNEX KIT 10\\nIFEX  MESNEX KIT 26\\nIFEX  MESNEX KIT 53\\nIFEX MESNEX KIT\\nIFEX MESNEX KIT 26\\nIFEX MESNEX KIT 53\\nILARIS\\nILETIN I, LENTE\\nILETIN II LENTE PORK\\nILETIN II REGULAR PORK\\nILETIN NPH\\nILETIN REGULAR\\nILEVRO\\nILEX SKIN\\nILOSONE\\nILOTYCIN\\nILOTYCIN GLUCEPTATE\\nILOZYME\\nILUVIEN\\nIMBRUVICA\\nIMDUR\\nIMFINZI\\nIMIPRAMIDE\\nIMITREX\\nIMLYGIC\\nIMODIUM\\nIMODIUM A-D\\nIMODIUM A-D NEW FORMULA\\nIMODIUM ADVANCED\\nIMODIUM MULTI-SYMPTOM RELIEF\\nIMOGAM\\nIMOGAM RABIES-HT\\nIMOTIL\\nIMOVAX\\nIMOVAX RABIES\\nIMPAVIDO\\nIMPLANON\\nIMPOYZ\\nIMURAN\\nIMVEXXY\\nINAPSINE\\nINCIVEK\\nINCRELEX\\nINCRUSE\\nINDERAL\\nINDERIDE\\nINDERIDE 4025\\nINDERIDE 8025\\nINDERIDE LA\\nINDIGO CARMINE TRADE NAME\\nINDIOMIN\\nINDOCIN\\nINDOCIN SR\\nINFALYTE\\nINFANRIX\\nINFANTAIRE\\nINFANTAIRE GAS RELIEF\\nINFASURF\\nINFED\\nINFERGEN\\nINFLECTRA\\nINFUMORPH\\nINFUVITE\\nINFUVITE PEDIATRIC\\nINGREZZA\\nINJECTAFER\\nINLYTA\\nINNOFEM\\nINNOHEP\\nINNOPRAN\\nINNOPRAN XL\\nINNOVAR\\nINOCOR I. V.\\nINOMAX\\nINOSITECH\\nINOVA\\nINOVA 4-1\\nINOVA 41\\nINOVA 8-2\\nINSPRA\\nINSTA-CHAR\\nINSTA-GLUCOSE\\nINSTACORT\\nINSTANTFOAM\\nINSTILLAGEL\\nINSULIN PORK MIX\\nINTAL\\nINTAL INHALER\\nINTEGRA F\\nINTEGRILIN\\nINTELENCE\\nINTERMEZZO\\nINTESTINEX\\nINTRALIPID\\nINTRAROSA\\nINTRON A\\nINTROVALE 91 DAY\\nINTUNIV\\nINTUNIV KIT 2128\\nINTUNIV KIT 77\\nINVANZ\\nINVEGA\\nINVERSINE\\nINVIRASE\\nINVOKAMET\\nINVOKANA\\nINZO\\nIOBID DM\\nIODAL HD\\nIODEX\\nIODO PLAIN\\nIODO-HC\\nIODOFLEX\\nIODOPEN\\nIODOSORB\\nIODROL NR\\nIOFED PD\\nIOFEN\\nIOFEN-NF\\nIOHIST D\\nIOHIST DM\\nIONAMIN\\nIONAMIN-15\\nIONAMINE\\nIONIL PLUS\\nIONIL SHAMPOO\\nIONIL T\\nIONIL T PLUS\\nIONOSOL-B\\nIONOSOL-MB\\nIONOSOL-T\\nIONSYS\\nIONTOCAINE\\nIOPAMIDOL-200\\nIOPAMIDOL-250\\nIOPAMIDOL-370\\nIOPHEN\\nIOPHEN DM\\nIOPHEN NR\\nIOPHEN-C NF\\nIOPHEN-C NR\\nIOPIDINE\\nIOSAL II\\nIOSAT\\nIOTEX PSE\\nIOTUSSIN D LIQUID\\nIOTUSSIN HC\\nIPLEX\\nIPM WOUND\\nIPOL\\nIPRIVASK\\nIPSATOL COUGH FORMULA\\nIQUIX\\nIRCON\\nIRCON-FA\\nIRENKA\\nIRESSA\\nIROFOL DROPS\\nIRON 300\\nIRON SOL\\nIRON SUPPLEMENT\\nIRONMAR\\nIROSPAN\\nIROSPAN 246 KIT\\nIROSPAN TABLET\\nISAGEL\\nISENTRESS\\nISIBLOOM 28 DAY\\nISMO\\nISMOTIC PB\\nISO-ACETAZONE\\nISOCAINE\\nISOCAINE WITH LEVONORDEFRIN\\nISOCET\\nISOCHRON\\nISOCOM\\nISODETTES\\nISODITRATE\\nISOLLYL\\nISOLYTE H\\nISOLYTE H AND DEXTROSE\\nISOLYTE M\\nISOLYTE P\\nISOLYTE S\\nISOLYTE S IN 5 % DEXTROSE\\nISONARIF\\nISOPHEN-DF\\nISOPLATE\\nISOPTIN\\nISOPTIN I.V.\\nISOPTIN SR\\nISOPTO ALKALINE\\nISOPTO ATROPINE\\nISOPTO CARBACHOL\\nISOPTO CETAMIDE\\nISOPTO CETAPRED\\nISOPTO FRIN\\nISOPTO HOMATROPINE\\nISOPTO HYOSCINE\\nISOPTOCARPINE\\nISORDIL\\nISORDIL TEMBIDS\\nISORDIL TITRADOSE\\nISOVATE\\nISOVEX\\nISOVUE 370\\nISOVUE-128\\nISOVUE-250\\nISOVUE-300\\nISOVUE-M-200\\nISTALOL\\nISTODAX\\nISUPREL\\nISUPREL HCL\\nISUPREL MISTOMETER\\nITCH RELIEF\\nITCH-X\\nITCH-X MAXIMUM STRENGTH\\nITMD LAMICTAL CD\\nIVAREST\\nIVAREST MAXIMUM STRENGTH\\nIVDERM\\nIVEEGAM\\nIVEEGAM EN\\nIVOCORT\\nIVY BLOCK\\nIVY DRY SUPER\\nIVY DRY SUPER CONTINUOUS SPRAY\\nIVY-DRY CREAM\\nIVY-DRY KIDS\\nIXEMPRA\\nIXIARO\\nIXINITY', '\\n'), com.fc.JavaScriptDistLib.TextLib.textSplitWith('J TAN D\\nJ-COF DHC\\nJ-MAX\\nJ-MAX DHC\\nJ-MAX TABLETS\\nJ-TAN D HC\\nJADENU\\nJAIMIESS 91 DAY\\nJAKAFI\\nJALYN\\nJANTOVEN\\nJANUMET\\nJANUMET 1001000\\nJANUMET 501000\\nJANUMET 50500\\nJANUVIA\\nJARDIANCE\\nJAY-PHYL\\nJAYCOF HC\\nJAYCOF XP\\nJAYCOF-HC\\nJE-VAX\\nJENAMICIN\\nJENCYCLA 28 DAY\\nJENLOGA\\nJENTADUETO\\nJET-ALERT\\nJETREA\\nJEVANTIQUE\\nJEVTANA\\nJINTELI\\nJOHNSONS NO MORE RASH\\nJOINTFLEX\\nJOINTFLEX ICE\\nJOLESSA 91 DAY\\nJOLIVETTE\\nJOLIVETTE 28 DAY\\nJOY ANTIBACTERIAL\\nJUBLIA\\nJULEBER 28 DAY\\nJULUCA\\nJUNEL\\nJUNEL 1.530 21 DAY\\nJUNEL 120 21 DAY\\nJUNEL FE\\nJUNEL FE 1.530 28 DAY\\nJUNEL FE 120 28 DAY\\nJUNEL FE 24 120 28 DAY\\nJUNIOR PAIN RELIEVER\\nJUNIOR STRENGTH TYLENOL\\nJUST ONE PER DAY\\nJUVISYNC\\nJUXTAPID\\nJYNARQUE\\nJYNARQUE 4515 CARTON\\nJYNARQUE 6030 CARTON\\nJYNARQUE 9030 CARTON', '\\n'), com.fc.JavaScriptDistLib.TextLib.textSplitWith('K + POTASSIUM\\nK EFFERVESCENT\\nK PLUS CARE\\nK PLUS CARE ET\\nK TAN\\nK TUSSIN DM\\nK+ CARE ET\\nK+CARE\\nK-10\\nK-8\\nK-C SUSPENSION\\nK-DUR\\nK-DUR 20\\nK-EFFERVESCENT\\nK-LOR\\nK-LYTE\\nK-LYTE CI\\nK-LYTE CL\\nK-PEC\\nK-PEK\\nK-PEK II\\nK-PEK REFORMULATED JUN 2008\\nK-PHOS\\nK-PHOS M.F.\\nK-PHOS NEUTRAL\\nK-PHOS NO 2\\nK-SOL\\nK-SOL PRESERVING MEDIUM\\nK-TAB\\nK-VESCENT\\nK-Y PLUS NONOXYNOL 9\\nKA-PEC\\nKA-PEK\\nKABIKINASE\\nKADCYLA\\nKADIAN\\nKAITLIB FE 28 DAY\\nKALBITOR\\nKALETRA\\nKALLIGA 28 DAY\\nKALYDECO\\nKANTREX\\nKANUMA\\nKAO-PAVERIN\\nKAO-PULGITE\\nKAO-SPEN\\nKAO-TIN\\nKAO-TIN CAPSULE\\nKAO-TIN REFORMULATED FEB 2008\\nKAOCHLOR\\nKAOCHLOR S-F\\nKAODENE NN SUSPENSION\\nKAON\\nKAON-CI\\nKAON-CL\\nKAON-CL 20%\\nKAOPECTATE\\nKAOPECTATE 1-D\\nKAOPECTATE CHILD\\nKAOPECTATE EXTRA STRENGTH\\nKAOPECTATE REFORMULATED AUG 2006\\nKAOPECTATE STOOL SOFTENER\\nKAOPEK\\nKAPECTOLIN\\nKAPECTOLIN REFORMULATED JUN 2008\\nKAPIDEX\\nKAPSPARGO\\nKAPVAY\\nKAPVAY DOSE PACK\\nKARBINAL\\nKARIDIUM\\nKARIVA 28 DAY\\nKASOF\\nKATO\\nKAY CIEL\\nKAYEXALATE\\nKAZANO\\nKCENTRA\\nKCL-40\\nKEDBUMIN\\nKEDRAB\\nKEEP ALERT\\nKEFLEX\\nKEFLIN\\nKEFUROX\\nKEFZOL\\nKELNOR\\nKELNOR 135 28 DAY\\nKELNOR 150 28 DAY\\nKEMSTRO\\nKEN-JEC\\nKEN-JEC 40\\nKENAJECT\\nKENAJECT-40\\nKENALOG\\nKENALOG 40\\nKENALOG-10\\nKENGREAL\\nKEPIVANCE\\nKEPPRA\\nKERA NAIL\\nKERA-42\\nKERAFOAM\\nKERALAC\\nKERALYT\\nKERALYT 5\\nKERALYT 6 SCALP COMPLETE\\nKERALYT SCALP\\nKERASAL\\nKERASAL AL\\nKERASAL EXFOLIATING FOOT MOISTURIZER THERAPY\\nKERATOL\\nKERATOL 40\\nKERATOL HC\\nKERLONE\\nKEROL\\nKERYDIN\\nKESTRONE 5\\nKETALAR\\nKETEK\\nKETOCON PLUS\\nKETODAN\\nKEVEYIS\\nKEVZARA\\nKEY-PRED\\nKEY-PRED SP\\nKEYTRUDA\\nKG HIST D\\nKG HIST DM\\nKG-DAL HD\\nKG-DAL HD PLUS\\nKG-FED\\nKG-FED EXPECTORANT\\nKG-FED PEDIATRIC EXPECTORANT\\nKG-HIST D\\nKG-TUSS HD\\nKG-TUSSIN\\nKGS HC\\nKGS-PE\\nKHEDEZLA\\nKID KARE DROPS\\nKID\'S CHOICE\\nKIE\\nKIMIDESS 28 DAY\\nKINERASE\\nKINERET\\nKINEVAC\\nKINLYTIC\\nKINRIX\\nKIONEX\\nKISQALI\\nKISQALI 200 MG DAILY DOSE CARTON\\nKISQALI 400 MG DAILY DOSE CARTON\\nKISQALI 600 MG DAILY DOSE CARTON\\nKISQALI FEMARA CO-PACK 200\\nKISQALI FEMARA CO-PACK 400\\nKISQALI FEMARA CO-PACK 600\\nKITA LA TOS\\nKITABIS\\nKLARON\\nKLERIST-D\\nKLONOPIN\\nKLONOPIN WAFER\\nKLOR-CON\\nKLOR-CON 8\\nKLOR-CON M15\\nKLOR-CON M20\\nKLOR-CON25\\nKLOR-CONEF\\nKLORVESS\\nKLORVESS EFFERVESCENT\\nKOATE\\nKOATE DVI\\nKOGENATE\\nKOLA-PECTIN\\nKOLDETS COUGH DROP\\nKOLEPHRIN\\nKOLEPHRIN DM\\nKOLEPHRIN GGDM\\nKOLORZ\\nKOMBIGLYZE\\nKOMBIGLYZE 2.51000\\nKOMBIGLYZE 51000\\nKOMBIGLYZE 5500\\nKONAKION\\nKONDREMUL PLAIN\\nKONDREMUL WITH PHENOLPHTALEIN\\nKONSYL\\nKONSYL FIBER\\nKONSYL FOR KIDS\\nKONSYL ORANGE\\nKONSYL SENNA PROMPT\\nKONSYL-D\\nKOPHANE\\nKORLYM\\nKOROMEX\\nKOROMEX CONTRACEPTIVE\\nKOROMEX CREAM\\nKOROMEX CRYSTAL CLEAR GEL\\nKOVALTRY\\nKOVANAZE\\nKOVIA\\nKRAFTOBESE\\nKRAFTOBESE GR\\nKRAFTPLEG\\nKRAFTSTAT-35\\nKRISTALOSE\\nKROGER\\nKRONOFED-A\\nKRYSTEXXA\\nKU-ZYME\\nKU-ZYME HP\\nKUDROX\\nKURIC\\nKURVELO\\nKUTKIT STYPS\\nKUTRASE\\nKUVAN\\nKWAI\\nKWELCOF\\nKYBELLA\\nKYLEENA\\nKYMRIAH\\nKYNAMRO\\nKYPROLIS\\nKYTRIL', '\\n'), com.fc.JavaScriptDistLib.TextLib.textSplitWith('L-ALL 12\\nL-ALL 12 NF\\nL-CAINE\\nL-DROMORAN\\nL-FORMULA\\nL-MYCIN\\nLA NASAL DECONGESTANT\\nLA-12\\nLAC-DOSE\\nLAC-HYDRIN\\nLAC-HYDRIN FIVE\\nLAC-HYDRIN TEN\\nLACLOTION\\nLACRI-LUBE\\nLACRI-LUBE S.O.P.\\nLACRISERT\\nLACTAID\\nLACTAID EXTRA STRENGTH\\nLACTAID ULTRA\\nLACTASE EXTRA STRENGTH\\nLACTICARE\\nLACTICARE-HC\\nLACTINOL\\nLACTINOL-E\\nLACTOCAL\\nLACTRASE\\nLADY-LAX\\nLAGESIC\\nLAGICAM\\nLAMICTAL\\nLAMICTAL BLUE (FOR PATIENTS TAKING VALPROATE)\\nLAMICTAL GREEN (FOR PATIENTS TAKING CARBAMAZEPINE, PHENYTOIN, PHENOBARBITAL, PRIMIDONE, OR RIFAMPIN AND NOT TAKING VALPROATE)\\nLAMICTAL ODT BLUE PATIENT TITRATION KIT (FOR PATIENTS TAKING VALPROATE)\\nLAMICTAL ODT GREEN TITRATION KIT (FOR PATIENTS TAKING ENZYME-INDUCING DRUGS AND NOT TAKING VALPROATE)\\nLAMICTAL ODT ORANGE PATIENT TITRATION KIT (FOR PATIENTS NOT TAKING ENZYME-INDUCING DRUGS OR VALPROATE)\\nLAMICTAL ORANGE (FOR PATIENTS NOT TAKING CARBAMAZEPINE, PHENYTOIN, PHENOBARBITAL, PRIMIDONE, OR RIFAMPIN AND NOT TAKING VALPROATE)\\nLAMICTAL XR BLUE PATIENT TITRATION KIT (FOR PATIENTS TAKING VALPROATE)\\nLAMICTAL XR GREEN PATIENT TITRATION KIT (FOR PATIENTS TAKING CARBAMAZEPINE, PHENYTOIN, PHENOBARBITAL, OR PRIMIDONE, AND NOT TAKING VALPROATE)\\nLAMICTAL XR ORANGE PATIENT TITRATION KIT (FOR PATIENTS NOT TAKING CARBAMAZEPINE, PHENYTOIN, PHENOBARBITAL, PRIMIDONE, OR VALPROATE)\\nLAMISIL\\nLAMISIL AT\\nLAMISIL DEFENSE\\nLAMPRENE\\nLANABIOTIC\\nLANACANE\\nLANAPHILIC WITH UREA\\nLANIROIF\\nLANOXICAPS\\nLANOXIN\\nLANOZIN\\nLANSINOH\\nLANTEX-LA\\nLANTISEPTIC\\nLANTISEPTIC MULTI-PURPOSE\\nLANTISEPTIC NOURISHING SKIN\\nLANTISEPTIC PROTECTIVE\\nLANTUS\\nLAPASE\\nLARGON\\nLARIAM\\nLARIN 1.530\\nLARIN 120\\nLARIN 24 FE 120\\nLARIN FE 1.530\\nLARIN FE 120\\nLARISSIA 28 DAY PACK\\nLARODOPA\\nLARTRUVO\\nLARYNG-O-JET\\nLASIX\\nLASSARS ZINC\\nLASTACAFT\\nLASTOLIC\\nLATISSE\\nLATRIX\\nLATUDA\\nLAVACOL\\nLAVIV\\nLAVOCLEN\\nLAX PREPARE\\nLAX-EASE\\nLAX-EASE MAXIMUM STRENGTH\\nLAX-PILLS\\nLAX-SOFTENER\\nLAXA BASIC\\nLAXADAN\\nLAXATIV PLUS\\nLAXATIV PLUS (PHENOLPHTHALEIN)\\nLAXATIVE (CASANTHROL-DOCUSATE)\\nLAXATIVE (DOCUSATE-PHENOLPHTHALEIN)\\nLAXATIVE (PHENOLPHTHALEIN)\\nLAXATIVE GENTLE SUPPOSITORIES\\nLAXATIVE NATURAL\\nLAXATIVE PLUS\\nLAXINATE\\nLAXMAR\\nLAYOLIS FE 28\\nLAZANDA\\nLAZER CREME\\nLAZERFORMALYDE\\nLAZERSPORIN-C\\nLEADER\\nLEADER ACID REDUCER\\nLEADER ALLERGY RELIEF D\\nLEADER NAPROXEN\\nLEADER NICOTINE POLACRILEX\\nLECITHIN NATURAL\\nLECITHIN-SOFTGELS\\nLEDERCILLIN VK\\nLEENA 28 DAY\\nLEG EASE PM\\nLEG-GESIC\\nLEGATRIN PM\\nLEMTRADA\\nLENVIMA\\nLENVIMA 10\\nLENVIMA 14\\nLENVIMA 18\\nLENVIMA 20\\nLENVIMA 24\\nLENVIMA 8\\nLENZAGEL\\nLENZAPATCH\\nLESCOL\\nLESSINA\\nLESSINA 21 DAY\\nLESSINA 28 DAY\\nLETAIRIS\\nLEUKERAN\\nLEUKINE\\nLEUSTATIN\\nLEVACET\\nLEVALL\\nLEVALL 2\\nLEVALL 5.0\\nLEVALL G\\nLEVALL REFORMULATED FEB 2008\\nLEVALL-12\\nLEVAQUIN\\nLEVAQUIN LEVA PACK\\nLEVATOL\\nLEVBID\\nLEVEMIR\\nLEVITRA\\nLEVLEN\\nLEVLEN 21 DAY\\nLEVLEN 28 DAY\\nLEVLITE 28 DAY\\nLEVO-T\\nLEVONEST 28 DAY\\nLEVOPHED\\nLEVOPROME\\nLEVORA\\nLEVORA 0.1530 21 DAY\\nLEVORA 0.1530 28 DAY\\nLEVOTABS\\nLEVOTHROID\\nLEVOXY\\nLEVOXYL\\nLEVSIN\\nLEVSIN WITH PHENOBARBITAL\\nLEVSINEX\\nLEVSINSL TABLETS\\nLEVULAN\\nLEXAPRO\\nLEXIFEN\\nLEXINAL\\nLEXISCAN\\nLEXIVA\\nLEXXEL\\nLEXXEL 52.5\\nLIALDA\\nLIBRAX\\nLIBRAX REFORMULATED AUG 2006\\nLIBRITABS\\nLIBRIUM\\nLICE KILLING\\nLICE MD\\nLICE TREATMENT MAXIMUM STRENGTH\\nLICE-X LIQUID\\nLICON\\nLIDA MANTLE\\nLIDAMANTLE\\nLIDAMANTLE HC\\nLIDAZONE HC\\nLIDEX\\nLIDEX-E\\nLIDOCARE\\nLIDOCORT\\nLIDOCREAM\\nLIDODAN\\nLIDODERM\\nLIDOJECT\\nLIDOJECT 1\\nLIDOJECT 2\\nLIDOMAR\\nLIDOOCAINE\\nLIDOPATCH\\nLIDOPEN\\nLIDOPRO\\nLIDOPRO PATCH\\nLIDOSENSE\\nLIDOSITE\\nLIDOTHOL\\nLIDOTRAL\\nLIDOVIR\\nLIDOWORX\\nLIDOZEN\\nLIF-O-GEN\\nLIFE-O-GEN\\nLIGNOSPAN\\nLIGNOSPAN WITH EPINEPHRINE\\nLILETTA\\nLILLOW 28 DAY\\nLIMBITROL\\nLIMBITROL DS\\nLIMBREL\\nLINCOCIN\\nLINCOREX\\nLINDE\\nLINHIST-L.A.\\nLINZESS\\nLIORESAL\\nLIORESAL INTRATHECAL\\nLIPITOR\\nLIPODOX\\nLIPOFEN\\nLIPOFLAVOVIT\\nLIPOSYN II\\nLIPOSYN III\\nLIPRAM\\nLIPRAM CR20\\nLIPRAM CR5\\nLIPRAM UL 18\\nLIPRAM UL12\\nLIPRAM-CR\\nLIPRAM-CR 20\\nLIPRAM-CR5\\nLIPRAM-PN\\nLIPRAM-UL 12\\nLIPRAM-UL 20\\nLIPTRUZET\\nLIQ-10\\nLIQSORB\\nLIQUADD\\nLIQUI HISTINE D\\nLIQUI-ALLERGY\\nLIQUI-CHAR\\nLIQUI-CHAR WITH SORBITOL\\nLIQUI-DUALCITRA\\nLIQUI-FLUR\\nLIQUI-HISTINE\\nLIQUI-HISTINE-D\\nLIQUI-MINIC INFANT\\nLIQUI-SOOTH\\nLIQUI-TUSS HD\\nLIQUIBID\\nLIQUIBID DR\\nLIQUIBID PDR\\nLIQUIBID-D\\nLIQUIBID-PD\\nLIQUICET\\nLIQUICOUGH DM\\nLIQUICOUGH HC\\nLIQUID CO-Q10\\nLIQUID PEDVAXHIB\\nLIQUID PRED\\nLIQUIDBID 1200\\nLIQUIDBID LA\\nLIQUIHISTINE CS\\nLIQUIHISTINE DM\\nLIQUIMAT\\nLIQUIMAT LIGHT\\nLIQUIMAT MEDIUM\\nLIQUIPHED DM\\nLIQUIPRIN\\nLIQUITEX\\nLIQUITUSS ELIXIR\\nLIQUITUSS HD\\nLIQUITUSS R-DM\\nLIQUITUSSIN HC\\nLIQUITUSSIN HC SYRUP\\nLISPRO PRC\\nLISTERINE\\nLISTERINE ANTISEPTIC\\nLISTERINE ESSENTIAL CARE TARTAR CONTROL\\nLITECOAT ASPIRIN\\nLITHANE\\nLITHOBID\\nLITHOSTAT\\nLITHOTABS\\nLITTLE BOTTOMS DIAPER RASH\\nLITTLE COLDS\\nLITTLE FEVERS\\nLITTLE NOSES\\nLITTLE NOSES DECONGESTANT\\nLITTLE OUCHIES\\nLITTLE REMEDIES FOR COLDS DECONGESTANT PLUS COUGH\\nLITTLE TUMMYS\\nLITTLE TUMMYS LAXATIVE DROPS\\nLIVALO\\nLIVOSTIN\\nLMX\\nLMX 4\\nLMX 4 WITH TEGADERM\\nLMX 5\\nLMX PLUS\\nLO LOESTRIN FE 28 DAY\\nLO MINASTRIN FE 28 DAY\\nLO SIMPESSE 91 DAY\\nLO-AQUA\\nLO-ZUMANDIMINE 28 DAY\\nLOBAC\\nLOCHOLEST\\nLOCHOLEST LIGHT\\nLOCOID\\nLOCOID LIPOCREAM\\nLODINE\\nLODINE XL\\nLODOCORT\\nLODOCORTISONE\\nLODOSYN\\nLODRANE\\nLODRANE 12D\\nLODRANE 24D\\nLODRANE D\\nLODRANE LD\\nLODRANE LIQUID\\nLOESTRIN 1.530 21 DAY\\nLOESTRIN 120 21 DAY\\nLOESTRIN 24 FE 28 DAY\\nLOESTRIN FE 1.530 28 DAY\\nLOESTRIN FE 120 28 DAY\\nLOFIBRA\\nLOHIST 12D\\nLOHIST D\\nLOK-PAK\\nLOKARA\\nLOKELMA\\nLOLLICAINE\\nLOMAIRA\\nLOMEDIA 24 FE\\nLOMOCOT\\nLOMOTIL\\nLONG ACTING NASAL\\nLONG LASTING NASAL\\nLONGS GLUCOSE\\nLONHALA\\nLONITEN\\nLONOX\\nLONSURF\\nLOOPERAMIDE\\nLOOVRAL\\nLOOVRAL 21 DAY\\nLOOVRAL 28 DAY\\nLOPID\\nLOPREEZA 0.50.1 28 DAY\\nLOPREEZA 10.5 28 DAY\\nLOPRESSOR\\nLOPRESSOR HCT\\nLOPROX\\nLOPROX TS\\nLOPURIN\\nLOQUA\\nLORABID\\nLORABID PULVULES\\nLORADAMED\\nLORAZEPAM INTENSOL\\nLORCET\\nLORCET 10650\\nLORCET HD\\nLORCET PLUS\\nLORELCO\\nLOROXIDE\\nLORTAB\\nLORTAB 0.533.3\\nLORTAB 10500\\nLORTAB 2.5500\\nLORTAB 5500\\nLORTAB 7.5500\\nLORTAB ASA\\nLORTUSS DM\\nLORTUSS DM REFORMULATED APR 2011\\nLORTUSS EX\\nLORTUSS HC\\nLORTUSS LQ\\nLORYNA 28 DAY\\nLORZONE\\nLOSEASONIQUE\\nLOSO PREP BOWEL CLEANSING SYSTEM\\nLOSOSPAN\\nLOSOSPAN PLUS\\nLOTEMAX\\nLOTENSIN\\nLOTENSIN HCT\\nLOTREL\\nLOTREL 1020\\nLOTREL 1040\\nLOTREL 2.510\\nLOTREL 510\\nLOTREL 520\\nLOTREL 540\\nLOTRIMIN\\nLOTRIMIN AF\\nLOTRIMIN JOCK ITCH POWDER\\nLOTRIMIN ULTRA\\nLOTRISONE\\nLOTRONEX\\nLOTUSSIN\\nLOTUSSIN DM\\nLOVAZA\\nLOVENOX\\nLOVING LOTION\\nLOW DOSE ASA\\nLOW SODIUM PLUS\\nLOW-OGESTREL 21 DAY\\nLOW-OGESTREL 28 DAY\\nLOWSIUM\\nLOWSIUM PLUS\\nLOXITANE\\nLOXITANE C\\nLOXITANE IM\\nLOZI-FLUR\\nLOZOL\\nLTA\\nLTA 360\\nLTA PED\\nLUBRIFRESH P.M.\\nLUCEMYRA\\nLUCENTIS\\nLUCIDEX\\nLUCONAZOLE\\nLUDEN\'S\\nLUDEN\'S DROPS\\nLUDENT\\nLUFYLLIN\\nLUFYLLIN-EPG\\nLUFYLLIN-GG\\nLUGOLS STRONG IODINE\\nLUMICAIN\\nLUMIGAN\\nLUMINAL\\nLUMIZYME\\nLUNELLE\\nLUNESTA\\nLUPANETA PACK 1-MONTH\\nLUPANETA PACK 3-MONTH\\nLUPRON\\nLURIDE\\nLURLINE PMS\\nLUSAIR\\nLUSEDRA\\nLUSONAL\\nLUSONAL REFORMULATED OCT 2008\\nLUSONEX\\nLUSONEX PLUS\\nLUSTRA\\nLUTATHERA\\nLUTERA\\nLUTERA 28 DAY\\nLUTREPULSE\\nLUVENA FEMININE WIPES\\nLUVERIS\\nLUVOX\\nLUXIQ\\nLUXTURNA\\nLUZU\\nLYDIA E. PINKHAM\\nLYMERIX\\nLYMPHAZURIN\\nLYNOX 10300\\nLYNOX 2.5300\\nLYNOX 5300\\nLYNOX 7.5300\\nLYNPARZA\\nLYPHOCIN\\nLYRICA\\nLYSODREN\\nLYSTEDA\\nLYZA', '\\n'), com.fc.JavaScriptDistLib.TextLib.textSplitWith('M CLEAR JR REFORMULATED OCT 2007\\nM-CAPS\\nM-CLEAR\\nM-CLEAR REFORMULATED OCT 2007\\nM-CLEAR WC\\nM-END\\nM-END DM\\nM-END DMX\\nM-END LIQUID\\nM-END MAX\\nM-END MAX D\\nM-END PE\\nM-END REFORMULATED OCT 2008\\nM-END WC\\nM-HIST T.D.\\nM-M-R II\\nM-PHEN\\nM-PREDNISOLONE\\nM-R-VAX II\\nM.A.H.\\nM.T.E.-4\\nM.T.E.-4 CONCENTRATED\\nM.T.E.-5\\nM.T.E.-6\\nM.T.E.-7\\nMAALOX\\nMAALOX ANTACID BARRIER\\nMAALOX ANTI-DIARRHEAL\\nMAALOX ANTI-GAS\\nMAALOX ANTI-GAS EXTRA STRENGTH\\nMAALOX CHILDREN\'S\\nMAALOX DAILY FIBER THERAPY\\nMAALOX HRF\\nMAALOX JUNIOR PLUS ANTIGAS\\nMAALOX MAX\\nMAALOX MAX QUICK DISSOLVE\\nMAALOX PLUS\\nMAALOX PLUS EXTRA STRENGTH\\nMAALOX QUICK DISSOLVE\\nMAALOX QUICK DISSOLVE MAXIMUM STRENGTH\\nMAALOX T.C.\\nMAALOX TOTAL STOMACH RELIEF\\nMACROBID\\nMACRODANTIN\\nMACRODEX\\nMACUGEN\\nMACUVITE\\nMACUVITE WITH LUTEIN\\nMAG 64\\nMAG-200\\nMAG-DELAY\\nMAG-G\\nMAG-OX 400\\nMAG-SR\\nMAG-TAB SR\\nMAGAANT\\nMAGAGEL\\nMAGAGEL PLUS\\nMAGALDRATE PLUS\\nMAGALOX PLUS\\nMAGAN\\nMAGDELAY\\nMAGGEL\\nMAGINEX\\nMAGINEX DS\\nMAGNACET\\nMAGNACET 10400\\nMAGNACET 2.5400\\nMAGNACET 5400\\nMAGNACET 7.5400\\nMAGNALOX\\nMAGNAPRIN\\nMAGNEBIND\\nMAGNEBIND 250300\\nMAGNEBIND 400 RX\\nMAGNEBIND 400200\\nMAGNEVIST\\nMAGONATE\\nMAGONATE REFORMULATED DEC 2013\\nMAGTRATE\\nMAJOR-CIN\\nMAJOR-CON\\nMAJORCON\\nMAKENA\\nMALARONE\\nMALARONE PEDIATRIC\\nMALATAL\\nMALDEC\\nMALDEC DM\\nMALDEC-DM\\nMALDEMAR\\nMALDROXAL\\nMALDROXAL PLUS\\nMALLAZINE\\nMALLISOL\\nMALLOPRESS\\nMALLOTUSS\\nMALTSUPEX\\nMANDELAMINE\\nMANDELAY\\nMANDOL\\nMANE N\' TAIL MINERAL ICE\\nMANTADIL\\nMAOLATE\\nMAOSON\\nMAPAP\\nMAPAP CHILDRENS COLD\\nMAPAP COLD\\nMAPAP COLD CHILDRENS\\nMAPAP COLD FORMULA\\nMAPAP JUNIOR STRENGTH\\nMAPAP PM\\nMAPAP SINUS\\nMAPAP SINUS CONGESTION AND PAIN\\nMAR-COF BP\\nMAR-COF CG\\nMAR-ZINC\\nMARAX\\nMARAX DF\\nMARBLEN\\nMARCAINE\\nMARCAINE HCL\\nMARCAINE HCL WITH EPINEPHRINE\\nMARCAINE SPINAL\\nMARCAINE WITH EPINEPHRINE\\nMARCAINE WITH EPINEPHRINE 0.751:200000\\nMARCILLIN\\nMARCOF EXPECTORANT\\nMARDOL\\nMAREZINE\\nMARFARIN\\nMARGESIC\\nMARGESIC #3\\nMARGESIC-H\\nMARINE MIST\\nMARINOL\\nMARKET BASKET\\nMARLEXATE\\nMARLISSA 28 DAY\\nMARPLAN\\nMARPRES\\nMARQIBO\\nMARTEN-TAB\\nMARTHRITIC\\nMASANTI\\nMASANTI DS\\nMASANTI II\\nMASOPHEN\\nMASOPHEN PM\\nMASPORIN\\nMASPORIN OTIC\\nMASSENGILL\\nMASSENGILL MEDICATED DOUCHE\\nMASTUSSIN\\nMASTUSSIN DM\\nMASTUSSIN PE\\nMATMATE\\nMATULANE\\nMATZIM\\nMAVIK\\nMAVYRET\\nMAX HC\\nMAX-FREEZE\\nMAXAIR\\nMAXAIR AUTOHALER\\nMAXALT\\nMAXALT-MLT\\nMAXAQUIN\\nMAXCOSIN LA\\nMAXI TUSS HCG\\nMAXI-TUSS DM\\nMAXI-TUSS HC\\nMAXI-TUSS HCX\\nMAXI-TUSS SA\\nMAXICHLOR\\nMAXICHLOR PEH\\nMAXICHLOR PEH DM\\nMAXICHLOR PSE\\nMAXICHLOR PSE DM\\nMAXIDEX\\nMAXIDONE\\nMAXIFED\\nMAXIFED CD\\nMAXIFED CDX\\nMAXIFED DM\\nMAXIFED DM REFORMULATED JUL 2008\\nMAXIFED DMX\\nMAXIFED DMX REFORMULATED JUL 2008\\nMAXIFED REFORMULATED JUL 2008\\nMAXIFED-G\\nMAXIFED-G CD\\nMAXIFED-G CDX\\nMAXIFED-G REFORMULATED JUL 2008\\nMAXIFLOR\\nMAXIFLU\\nMAXIFLU CD\\nMAXIFLU CDX\\nMAXIFLU DM\\nMAXIMUM ACETAMINOPHEN\\nMAXIMUM ALLERGY RELIEF\\nMAXIMUM D3\\nMAXIMUM STRENGTH MYLANTA GAS\\nMAXIMUM STRENGTH WART REMOVER\\nMAXIPHEN\\nMAXIPHEN ADT\\nMAXIPHEN CD\\nMAXIPHEN CDX\\nMAXIPHEN DM REFORMULATED JUL 2008\\nMAXIPHEN REFORMULATED JUL 2008\\nMAXIPHEN-G\\nMAXIPHEN-G DM\\nMAXIPIME\\nMAXITROL\\nMAXIVISION LUTEIN FORMULA\\nMAXZIDE\\nMAZANOR\\nMB-TAB\\nMD HYDROCORTISONE\\nMD-76\\nMD-GASTROVIEW\\nMEBARAL\\nMECHOLYL\\nMECLAN\\nMECLICOT\\nMECLOMEN\\nMECTALYTE\\nMED ASPIRIN\\nMED-HIST\\nMED-HIST EXPECTORANT\\nMED-HIST-HC\\nMED-JEC-40\\nMED-RX\\nMED-RX DM\\nMEDA CAP\\nMEDASULF\\nMEDCODIN\\nMEDENT\\nMEDENT C\\nMEDENT DM\\nMEDENT LD\\nMEDENT LDI\\nMEDENT-PE\\nMEDENT-PEI\\nMEDEREK\\nMEDERMA ADVANCED SCAR\\nMEDERMA PM\\nMEDERMA STRETCH MARK THERAPY\\nMEDEX-LA\\nMEDI-DERM\\nMEDI-DERM WITH LIDOCAINE\\nMEDI-LYTE\\nMEDI-PAD\\nMEDI-PASTE\\nMEDI-QUIK\\nMEDI-QUIK SPRAY\\nMEDICAINE\\nMEDICAINE STING\\nMEDICATED BLUE\\nMEDICONE\\nMEDICONE HEMORRHOIDAL\\nMEDICORT\\nMEDIDEX\\nMEDIDEX LA\\nMEDIDIOL 10\\nMEDIGESIC\\nMEDIHALER-EPI\\nMEDIHALER-ERGOTAMINE\\nMEDIHALER-ISO\\nMEDILAX\\nMEDIPAIN 5\\nMEDIPLAST\\nMEDIPRED\\nMEDISPAZ\\nMEDITEST\\nMEDIVERT\\nMEDRALONE 40\\nMEDRALONE 80\\nMEDROL\\nMEDROL DOSE PACK 21\\nMEDROL DOSEPAK\\nMEDROX\\nMEDTUSS HD\\nMEFOXIN\\nMEGA C ACID PLUS\\nMEGA-CA PLUS\\nMEGA-TRIM\\nMEGACE\\nMEGACE ES\\nMEKINIST\\nMEKTOVI\\nMELAMIN\\nMELAMIX\\nMELANEX\\nMELANOL\\nMELATONEX\\nMELFIAT\\nMELLARIL\\nMELLARIL-S\\nMELODETTA 24 FE CHEWABLE 28 DAY\\nMELPAQUE HP\\nMELQUIN HP\\nMELQUIN-3\\nMEMBRANEBLUE\\nMEN-PHOR\\nMENACTRA\\nMENADOL\\nMENAVAL-20\\nMENEST\\nMENHIBRIX\\nMENI-D\\nMENOGEN\\nMENOGEN HS\\nMENOMUNE ACYW-135\\nMENOPUR\\nMENOSTAR\\nMENTAX\\nMENTHAC ARTHRITIS CREAM WITH CAPSAICIN\\nMENTHOLATUM\\nMENTHOLATUM PAIN RELIEF\\nMENVEO\\nMEPERGAN\\nMEPERGAN FORTIS\\nMEPERITAB\\nMEPHYTON\\nMEPRON\\nMEPROZINE\\nMEPSEVII\\nMERCUROCLEAR\\nMERIDIA\\nMERREM\\nMERSOL\\nMERUVAX II\\nMESANTOIN\\nMESNEX\\nMESTINON\\nMETADATE\\nMETADATE CD\\nMETADATE ER\\nMETAGLIP\\nMETAGLIP 2.5 MG250 MG\\nMETAGLIP 2.5 MG500 MG\\nMETAGLIP 5 MG500 MG\\nMETAHISTINE D\\nMETAHYDRIN\\nMETAMUCIL\\nMETAMUCIL CLEAR & NATURAL\\nMETANX\\nMETAPREL\\nMETATENSIN #2\\nMETATENSIN #4\\nMETAXALL\\nMETED\\nMETFORMING\\nMETHACORT 40\\nMETHACORT 80\\nMETHADEX\\nMETHADOSE\\nMETHAGUAL\\nMETHERGINE\\nMETHITEST\\nMETHYLCOTOL\\nMETHYLIN\\nMETHYLIN ER\\nMETHYLONE 80\\nMETHYLPRED\\nMETICORTEN\\nMETIMYD\\nMETOPIRONE\\nMETOZOLV\\nMETROCREAM\\nMETRODIN\\nMETROGEL\\nMETROGEL-VAGINAL\\nMETROLOTION\\nMETRONIDALE\\nMETROPROLOL\\nMETRYL\\nMETUBINE IODIDE\\nMETVIXIA\\nMEVACOR\\nMEXAR\\nMEXITIL\\nMEXSANA\\nMEZLIN\\nMG 217\\nMG 217 PSORIASIS\\nMG PLUS PROTEIN\\nMG217 PSORIASIS COAL TAR\\nMG217 PSORIASIS SALICYLIC ACID\\nMHP-A\\nMI-ACID\\nMI-ACID DOUBLE STRENGTH\\nMI-ACID GAS RELIEF\\nMI-OMEGA\\nMIACALCIN\\nMIBELAS 24 FE CHEWABLE 28 DAY\\nMICADERM\\nMICANOL\\nMICARDIS\\nMICARDIS-HCT\\nMICATIN\\nMICATIN FOOT POWDER\\nMICATIN FOOT POWDER DEODORANT\\nMICATIN JOCK ITCH\\nMICATIN LIQUID FOOT\\nMICOMP-PB\\nMICON 7\\nMICON-80\\nMICONAZOLE 7\\nMICORT-HC\\nMICRAININ\\nMICRHOGAM\\nMICRO-GUARD\\nMICRO-K\\nMICRO-K LS\\nMICROGESTIN\\nMICROGESTIN 1.530 21 DAY\\nMICROGESTIN 120 21 DAY\\nMICROGESTIN 24 FE 28 DAY\\nMICROGESTIN FE 1.530 28 DAY\\nMICROGESTIN FE 120 28 DAY\\nMICROLIPID\\nMICRONASE\\nMICRONEFRIN\\nMICRONOR\\nMICROZIDE\\nMIDAMOR\\nMIDCHLOR\\nMIDOL COMPLETE\\nMIDOL CRAMPS & BODYACHES\\nMIDOL EXTENDED RELIEF\\nMIDOL IB\\nMIDOL LONG LASTING RELIEF\\nMIDOL MAXIMUM STRENGTH CRAMP FORMULA\\nMIDOL MAXIMUM STRENGTH MENSTRUAL\\nMIDOL PM\\nMIDOL PM REFORMULATED APR 2011\\nMIDOL PMS MAXIMUM STRENGTH\\nMIDOL TEEN\\nMIDRIN\\nMIFEPREX\\nMIGERGOT\\nMIGQUIN\\nMIGRACET-PB\\nMIGRAN-A\\nMIGRANAL\\nMIGRATEN\\nMIGRATINE\\nMILANTEX\\nMILI 28 DAY\\nMILK OF MAGNESIA\\nMILKINOL\\nMILLIPRED\\nMILLIPRED DP 12 DAY\\nMILLIPRED DP 6 DAY\\nMILONTIN\\nMILTOWN\\nMIMVEY\\nMIMVEY LO 28 DAY\\nMINASTRIN 24 FE 28 DAY\\nMINASTRIN 24 FE CHEWABLE 28 DAY\\nMINDAL DM\\nMINERAL ICE\\nMINIDROPS\\nMINIDYNE\\nMINIPRESS\\nMINIPRIN\\nMINIRIN\\nMINITABS\\nMINITRAN\\nMINIVELLE\\nMINIZIDE\\nMINOCIN\\nMINOLIRA\\nMINOTAL\\nMINT SORE THROAT\\nMINTAB DM\\nMINTEX\\nMINTEX DM\\nMINTEX HC\\nMINTEX PD\\nMINTEX PSE\\nMINTEZOL\\nMINTOX\\nMINTOX PLUS\\nMINTUSS DM\\nMINTUSS DR\\nMINTUSS EX\\nMINTUSS G\\nMINTUSS HC\\nMINTUSS HC REFORMULATED FEB 2009\\nMINTUSS MR\\nMINTUSS MS\\nMINTUSS NX\\nMIO-REL\\nMIOCHOL\\nMIOCHOL PLUS\\nMIOCHOL-E\\nMIOSTAT\\nMIRACLE FOOT REPAIR\\nMIRADON\\nMIRALAX\\nMIRANEL\\nMIRANEL AF\\nMIRAPEX\\nMIRAPHEN LA\\nMIRAPHEN PE\\nMIRCERA\\nMIRCETTE 28 DAY\\nMIRENA\\nMIRTAZDINE\\nMIRVASO\\nMITIGARE\\nMITOSOL\\nMITRAN\\nMITRAZOL\\nMITRIDE\\nMITROLAN\\nMIVACRON\\nMOBAN\\nMOBIC\\nMOBIDIN\\nMOBIGESIC\\nMOBISYL\\nMOCTANIN\\nMODANE\\nMODANE BULK\\nMODANE PLUS\\nMODANE REFORMULATED SEP 2008\\nMODANE SOFT\\nMODERIBA\\nMODERIBA 1000 DOSE PACK\\nMODERIBA 1200 DOSE PACK\\nMODERIBA 600 DOSE PACK\\nMODERIBA 800 DOSE PACK\\nMODICON\\nMODICON 28 DAY\\nMODURETIC 5-50\\nMOISTURE EYES PM\\nMOISTURE-EYES\\nMOISTUREL\\nMOISTUREL THERAPEUTIC\\nMOL-IRON\\nMOLLIFENE\\nMOLYPEN\\nMOMENTUM TRADENAME\\nMOMEXIN\\nMOMEXIN KIT\\nMONAFED DM\\nMONARC-M\\nMONDOXYNE\\nMONISTAT\\nMONISTAT 1 DAY OVULE COMBINATION PACK\\nMONISTAT 1 DAY WITH SUPPOSITORIES\\nMONISTAT 1 WITH SUPPOSITORIES\\nMONISTAT 3\\nMONISTAT 3 COMBINATION PACK\\nMONISTAT 3 DAY OVULE COMBINATION PACK\\nMONISTAT 3 DAY WITH SUPPOSITORIES\\nMONISTAT 3 VAGINAL CREAM COMBINATION PACK\\nMONISTAT 3 VAGINAL CREAM COMBINATION PACK WITH PREFILLED APPLICATORS\\nMONISTAT 3 WITH SUPPOSITORIES\\nMONISTAT 5\\nMONISTAT 7\\nMONISTAT 7 COMBINATION PACK\\nMONISTAT 7 DAY WITH SUPPOSITORIES\\nMONISTAT 7 VAGINAL CREAM COMBINATION PACK\\nMONISTAT 7 VAGINAL CREAM COMBINATION PACK WITH PREFILLED APPLICATORS\\nMONISTAT 7 VAGINAL CREAM COMBINATION PACK WITH VAGINAL CREAMS\\nMONISTAT 7 WITH SUPPOSITORIES\\nMONISTAT I.V.\\nMONISTAT ITCH RELIEF\\nMONISTAT SIMPLE THERAPY\\nMONISTAT SOOTHING CARE\\nMONISTAT-1\\nMONISTAT-DERM\\nMONO-LINYAH 28 DAY\\nMONOCAL\\nMONOCETE\\nMONOCID\\nMONOCLATE\\nMONOCLATE-P\\nMONODOX\\nMONOJEL\\nMONOKET\\nMONONESSA\\nMONONESSA 28 DAY\\nMONONINE\\nMONOPRIL\\nMONOPRIL HCT\\nMONOVISC\\nMONTE-G HC\\nMONTECOUGH\\nMONTEFLU HC\\nMONUROL\\nMOOREDEC\\nMOORETAN S PEDIATRIC\\nMORGIDOX\\nMORNING AFTER\\nMORPHABOND\\nMOSCO CORN & CALLUS REMOVER\\nMOSCO NAIL A CAIN\\nMOSCO ONE STEP CORN REMOVER\\nMOSCO-CAIN\\nMOTION-AID\\nMOTOFEN\\nMOTRIN\\nMOTRIN CHILDRENS\\nMOTRIN COLD AND FLU\\nMOTRIN COLD CHILDRENS\\nMOTRIN IB SINUS\\nMOTRIN JUNIOR STRENGTH\\nMOTRIN MIGRAINE PAIN\\nMOTRIN PM\\nMOTRIN SINUS HEADACHE\\nMOVANTIK\\nMOVIPREP\\nMOXATAG\\nMOXEZA\\nMOXILIN\\nMOZOBIL\\nMPM ANTI-FUNGAL\\nMPM RADIAPLEX\\nMS CONTIN\\nMSIR\\nMSP-BLU\\nMSS\\nMST 600\\nMTX SUPPORT\\nMUCINEX\\nMUCINEX CHILDREN\'S COUGH\\nMUCINEX CHILDREN\'S MULTI-SYMPTOM COLD\\nMUCINEX CHILDREN\'S NIGHT TIME MULTI-SYMPTOM COLD\\nMUCINEX COLD\\nMUCINEX COUGH\\nMUCINEX D\\nMUCINEX DM\\nMUCINEX FAST-MAX COLD & FLU NIGHTTIME\\nMUCINEX FAST-MAX COLD AND SINUS\\nMUCINEX FAST-MAX COLD, FLU AND SORE THROAT\\nMUCINEX FAST-MAX DAY TIME SEVERE COLD AND NIGHT TIME COLD AND FLU MAXIMUM STRENGTH\\nMUCINEX FAST-MAX NIGHT TIME COLD AND FLU\\nMUCINEX FAST-MAX SEVERE COLD\\nMUCINEX FAST-MAX SEVERE CONGESTION AND COUGH\\nMUCINEX NASAL SPRAY\\nMUCINEX NON-DROWSY ALLERGY\\nMUCINEX SINUS-MAX DAY\\nMUCINEX SINUS-MAX DAY & NIGHT\\nMUCINEX SINUS-MAX NIGHT\\nMUCINEX SINUS-MAX PRESSURE AND PAIN\\nMUCINEX SINUS-MAX SEVERE CONGESTION RELIEF\\nMUCINEX STUFFY NOSE & COLD\\nMUCO-FEN\\nMUCO-FEN 1000 DM\\nMUCO-FEN 1200\\nMUCO-FEN 600 DM\\nMUCO-FEN 800\\nMUCO-FEN 800 DM\\nMUCO-FEN DM\\nMUCO-FEN LA\\nMUCOBID DM\\nMUCOBID-L.A.\\nMUCOMYST\\nMUCUS RELIEF\\nMUCUS RELIEF DM\\nMUDRANE\\nMUDRANE GG\\nMUDRANE GG-2\\nMULTAQ\\nMULTE-PAK-4\\nMULTE-PAK-5\\nMULTI SYMPTOM COUGH AND COLD\\nMULTI-DELYN\\nMULTI-HIST DM\\nMULTI-SYMPTOM COLD RELIEF\\nMULTIGEN\\nMULTIGEN PLUS\\nMULTIHANCE\\nMULTIHIST D\\nMULTIHIST D SR\\nMULTIHISTAMINE-D\\nMULTIHISTAMINE-D PED\\nMULTIPLE TRACE ELEMENT\\nMULTIPLE TRACE ELEMENT NEONATAL\\nMULTIPLE TRACE ELEMENT PEDIATRIC\\nMULTITRACE-4\\nMULTITRACE-4 CONCENTRATE\\nMULTITRACE-4 NEONATAL\\nMULTITRACE-4 PEDIATRIC\\nMULTITRACE-5\\nMUMPSVAX\\nMURINE DRY EYES\\nMURINE EAR\\nMURINE EAR DROPS\\nMURINE TEARS PLUS\\nMURO 128\\nMURO EYE OINTMENT\\nMUROCEL\\nMUROCOLL 2\\nMUSE\\nMUSTARGEN\\nMUTAMYCIN\\nMVASI\\nMVC-FLUORIDE\\nMVI PEDIATRIC\\nMY CHOICE\\nMY WAY\\nMY-E\\nMY-O-DEN\\nMYALEPT\\nMYAMBUTOL\\nMYCAMINE\\nMYCASONE\\nMYCELEX\\nMYCELEX OTC\\nMYCELEX TROCHES\\nMYCELEX-3\\nMYCELEX-7\\nMYCI\\nMYCIFRADIN\\nMYCIGUENT\\nMYCINAIRE\\nMYCINETTE SORE THROAT SPRAY\\nMYCITRACIN PLUS PAIN RELIEVER\\nMYCITRACIN TRIPLE ANTIBIOTIC\\nMYCO BIOTIC\\nMYCO BIOTIC II\\nMYCO TRIACET II\\nMYCO-TRIACET\\nMYCOBUTIN\\nMYCOCIDE NS\\nMYCOGEN\\nMYCOGEN II\\nMYCOLOG\\nMYCOLOG II\\nMYCOMAR\\nMYCOSTATIN\\nMYCOSTATIN TOPICAL\\nMYDAYIS\\nMYDEX\\nMYDFRIN\\nMYDOCS\\nMYDRAL\\nMYDRIACYL\\nMYELO-KIT\\nMYFEDRINE\\nMYFORTIC\\nMYGEL\\nMYGEL II\\nMYGRACET\\nMYGREX\\nMYHIST DM\\nMYKIDZ IRON\\nMYKROX\\nMYLAGEL\\nMYLAGEL II\\nMYLAGEN\\nMYLAGEN-II\\nMYLANTA\\nMYLANTA AR\\nMYLANTA CHILD\\nMYLANTA DS FAST ACTING\\nMYLANTA GAS\\nMYLANTA GAS RELIEF GELTAB\\nMYLANTA GELCAP\\nMYLANTA SUPREME\\nMYLANTA TONIGHT\\nMYLANTA ULTIMATE\\nMYLANTA ULTRA\\nMYLAVAL\\nMYLERAN\\nMYLICON\\nMYLOCAINE\\nMYLOTARG\\nMYOBLOC\\nMYOCHRYSINE\\nMYOCIDIN\\nMYOFLEX\\nMYOLIN\\nMYOPHEN\\nMYORISAN\\nMYOXIN\\nMYOZYME\\nMYPHETANE DC\\nMYPHETANE DX\\nMYPHETAPP\\nMYRAC\\nMYRBETRIQ\\nMYSOLINE\\nMYTAB GAS\\nMYTELASE\\nMYTESI\\nMYTEX\\nMYTREX\\nMYTUSSIN\\nMYTUSSIN AC\\nMYTUSSIN DAC\\nMYTUSSIN DM\\nMYTUSSIN PE\\nMYZILRA 28 DAY\\nMZM', '\\n'), com.fc.JavaScriptDistLib.TextLib.textSplitWith('N ICE WITH VITAMIN C\\nN\'ICE\\nN.T.A.\\nNA-ZONE\\nNABI-HB\\nNACON\\nNAFAZAIR\\nNAFRINSE\\nNAFTIN\\nNAGLAZYME\\nNAIL-EX\\nNALACET\\nNALDA-RELIEF PEDIATRIC\\nNALDECON\\nNALDECON CX\\nNALDECON DX LIQUIGEL\\nNALDECON PEDIATRIC\\nNALDECON SENIOR DX\\nNALDECON-CX ADULT\\nNALDECON-DX ADULT\\nNALDECON-DX CHILDRENS\\nNALDECON-DX PEDIATRIC\\nNALDECON-EX PEDIATRIC\\nNALDECON-EX SENIOR\\nNALDELATE\\nNALDELATE DX CHILDRENS\\nNALDELATE DX PEDIATRIC\\nNALDELATE PEDIATRIC\\nNALEX AC\\nNALEX DH\\nNALEX EXPECTORANT\\nNALEX-A\\nNALEX-A 12\\nNALFED\\nNALFED PD\\nNALFON\\nNALGESTIC PEDIATRIC\\nNALLPEN\\nNALOCET\\nNALPHEN DX CHILDRENS\\nNALPHEN DX PEDIATRIC\\nNALPHEN PEDIATRIC\\nNALSPAN\\nNALSPAN PEDIATRIC\\nNALSPAN SENIOR DX\\nNAMENDA\\nNAMENDA 28 TITRATION PACK\\nNAMENDA 49 TITRATION PACK\\nNAMENDA TRITRATION PAK\\nNAMZARIC\\nNAMZARIC TITRATION PACK\\nNAPEOXEN\\nNAPHCON\\nNAPHCON A\\nNAPHCON FORTE\\nNAPRELAN\\nNAPRELAN DOSE CARD\\nNAPROSYN\\nNAPROSYN EC\\nNAPROXRN\\nNAQUA\\nNARCAN\\nNARCOF\\nNARDIL\\nNARFARIN\\nNARIZ\\nNARIZ HC\\nNAROPIN\\nNARVOX\\nNASABID\\nNASABID 25090\\nNASABID 60090\\nNASABID SR\\nNASACORT\\nNASACORT AQ\\nNASADROPS\\nNASAHIST B\\nNASAHIST LA\\nNASAL DECONGESTANT-ANTIHISTAMINE\\nNASAL LA\\nNASAL MOIST\\nNASAL RELIEF\\nNASAL TABLET\\nNASALCROM\\nNASALCROM CHILD\\nNASALIDE\\nNASAREL\\nNASATUSS\\nNASCOBAL\\nNASEX\\nNASIN\\nNASIN NASAL\\nNASOFED\\nNASOFLOW\\nNASOHIST\\nNASOHIST-DM\\nNASONEX\\nNASOP\\nNASOP SUSPENSION\\nNASOPEN\\nNASOPEN PE\\nNASOPEN-CH\\nNASOTUSS\\nNATACYN\\nNATAFORT\\nNATAZIA 28 DAY\\nNATELLE\\nNATESTO\\nNATPARA\\nNATRECOR\\nNATROBA\\nNATURAL FIBER THERAPY\\nNATURAL THYROID\\nNATURAL VEGETABLE\\nNATURAL VEGETABLE LAXATIVE\\nNATURE FUSION COLD & FLU\\nNATURE FUSION COUGH\\nNATURE\'S TEARS\\nNATURE-THROID\\nNATURES REMEDY\\nNATURETIN-10\\nNATURETIN-5\\nNAUSEA CONTROL\\nNAUZENE\\nNAVA-SC\\nNAVANE\\nNAVELBINE\\nNAVOGAN\\nNAVSTEL\\nNAZARIN\\nNAZARIN HC\\nND STAT\\nNEBCIN\\nNEBCIN PEDIATRIC\\nNEBU-SOL\\nNEBUPENT\\nNEBUSAL\\nNECON\\nNECON 0.535 21 DAY\\nNECON 0.535 28 DAY\\nNECON 1011 28 DAY\\nNECON 135 21 DAY\\nNECON 135 28 DAY\\nNECON 150\\nNECON 150 21 DAY\\nNECON 150 28 DAY\\nNECON 777 28 DAY\\nNEGGRAM\\nNEILFED\\nNELOVA\\nNELOVA 150 M\\nNEMBUTAL\\nNEMBUTAL SODIUM\\nNEO AC\\nNEO DM\\nNEO DM DROPS\\nNEO DM SYRUP\\nNEO POLY HC\\nNEO-CALGLUCON\\nNEO-CORTEF\\nNEO-DECADRON\\nNEO-DECADRON CREAM\\nNEO-DEX\\nNEO-DEXAIR\\nNEO-FRADIN\\nNEO-HC\\nNEO-MEDROL ACETATE\\nNEO-POLYCIN\\nNEO-POLYCIN HC\\nNEO-SYNALAR\\nNEO-SYNEPHRINE\\nNEO-SYNEPHRINE 12 HOUR\\nNEO-SYNEPHRINE OPHTHALMIC\\nNEO-TAB\\nNEOBENZ MICRO\\nNEOBENZ MICRO CREAM PLUS PACK\\nNEOBENZ MICRO PACK\\nNEOBENZ MICRO SD\\nNEOBENZ MICRO WASH\\nNEOBENZ MICRO WASH PLUS PACK\\nNEOCIDIN\\nNEOCIDIN OINTMENT\\nNEOCIDIN SOLUTION\\nNEOCIN\\nNEOCIN PG\\nNEOFRIN\\nNEOLOID\\nNEOPAP SUPPRETTES\\nNEOPOLYDEX\\nNEOPROFEN\\nNEOQ10\\nNEORAL\\nNEOSAR\\nNEOSOL\\nNEOSPORIN\\nNEOSPORIN AF\\nNEOSPORIN ECZEMA\\nNEOSPORIN ESSENTIALS TRIAL PACK\\nNEOSPORIN G. U. IRRIGANT\\nNEOSPORIN LIP HEALTH OVERNIGHT RENEWAL THERAPY\\nNEOSPORIN LT LIP TREATMENT\\nNEOSPORIN MOISTURIZING\\nNEOSPORIN NEO TO GO\\nNEOSPORIN NEO TO GO!\\nNEOSPORIN OINTMENT\\nNEOSPORIN PLUS MAXIMUM STRENGTH\\nNEOSPORIN PLUS MAXIMUM STRENGTH CREAM\\nNEOSPORIN PLUS MAXIUM STRENGTH OINTMENT\\nNEOSPORIN SOLUTION\\nNEOSPORIN WOUND CLEANSER\\nNEOTERIC DIABETIC\\nNEOTHYLLINE\\nNEOTIC\\nNEOTRACE-4\\nNEOTRICIN HC\\nNEOTUSS\\nNEOTUSS D\\nNEOTUSS IMPROVED\\nNEOTUSS PLUS\\nNEOVA COMPLEX HQ PLUS\\nNEPHRAMINE\\nNEPHRO CALCI\\nNEPHRO-FER\\nNEPHRO-FER RX\\nNEPHROCAPS\\nNEPHROCAPS QT\\nNEPHROX\\nNEPTAZANE\\nNERAPAMIL\\nNERLYNX\\nNERVINE\\nNERVOCAINE\\nNESACAINE\\nNESACAINE MPF\\nNESCON PD\\nNESINA\\nNETROMYCIN\\nNEUAC\\nNEULASTA\\nNEUMEGA\\nNEUPOGEN\\nNEUPRO\\nNEUPRO KIT\\nNEUROFORTE-R\\nNEURONTIN\\nNEUTRA CAINE\\nNEUTRA MAXX\\nNEUTRA-PHOS\\nNEUTRACARE\\nNEUTRAGARD\\nNEUTRAHIST\\nNEUTRAHIST DROPS\\nNEUTRAHIST PDX\\nNEUTRAMAXX\\nNEUTRAPHOR\\nNEUTRAPHORUS REX SKIN PROTECTANT\\nNEUTREXIN\\nNEUTROGENA ACNE MASK\\nNEUTROGENA ACNE WASH OIL FREE\\nNEUTROGENA HEALTHY SCALP DANDRUFF SHAMPOO\\nNEUTROGENA ON SPOT ACNE TREATMENT\\nNEUTROGENA RAPID CLEAR GEL\\nNEUTROGENA T-SCALP\\nNEUTROGENA TDERM\\nNEUTROGENA TGEL DAILY CONTROL\\nNEUTROGENA TGEL EXTRA STRENGTH\\nNEUTROGENA TSAL\\nNEVANAC\\nNEW-SKIN LIQUID BANDAGE\\nNEW-SKIN POISON IVY\\nNEW-SKIN SCAR FADE\\nNEXA SELECT\\nNEXA SELECT REFORMULATED FEB 2013\\nNEXAFED\\nNEXAFED SINUS AND PAIN\\nNEXAVAR\\nNEXAVIR\\nNEXESTA FE 28 DAY\\nNEXICLON\\nNEXIUM\\nNEXPHEN PD\\nNEXPLANON\\nNEXT CHOICE\\nNEXT CHOICE ONE DOSE\\nNEXTERONE\\nNIACOR\\nNIACOR B3\\nNIASPAN\\nNICAZEL\\nNICLOCIDE\\nNICO-400\\nNICOBID TEMPULES\\nNICODERM C-Q\\nNICOLAR\\nNICOMIDE\\nNICOMIDE-T\\nNICORELIEF\\nNICORETTE\\nNICOSYN\\nNICOTINEX\\nNICOTROL\\nNICOTROL INHALER\\nNICOTROL NS\\nNICOTROL REFILL\\nNIFEDIAC\\nNIFEDIAC CC\\nNIFEDICAL\\nNIFEDPINE\\nNIFEREX\\nNIFEREX-150\\nNIGHT TIME COLD MEDICINE\\nNIGHT TIME PAIN MEDICINE EXTRA STRENGTH\\nNIGHT TIME SLEEP-AID\\nNIGHTIME COLD MEDICINE\\nNIKKI 28 DAY\\nNIKZON\\nNILANDRON\\nNILSTAT\\nNIMBEX\\nNIMOTOP\\nNINJACOF\\nNINJACOF A\\nNINJACOF XG\\nNINLARO\\nNIPENT\\nNIPRIDE\\nNIRAVAM\\nNITE TIME COLD\\nNITETIME\\nNITHIODOTE\\nNITREK\\nNITRO MACRO\\nNITRO TD PATCH-A\\nNITRO-BID\\nNITRO-BID IV\\nNITRO-DUR\\nNITRO-PAR\\nNITRO-TIME\\nNITRODISC\\nNITROFURANTIN\\nNITROGARD\\nNITROL\\nNITROLINGUAL\\nNITROMIST\\nNITRONAL\\nNITRONG\\nNITROPRESS\\nNITROQUICK\\nNITROSTAT\\nNITYR\\nNIVA-FOL\\nNIX CREAM RINSE\\nNIZORAL\\nNO 7 STAY PERFECT\\nNO DOZ\\nNO DOZ MAXIMUM STRENGTH\\nNOCDURNA\\nNOCTIVA\\nNODOLOR\\nNOGENIC HC\\nNOHIST\\nNOHIST A\\nNOHIST DM\\nNOHIST DMX\\nNOHIST-PLUS\\nNOLAHIST\\nNOLAMINE\\nNOLIX\\nNOLVADEX\\nNOMUC-PE\\nNON ASPIRIN EXTRA STRENGTH\\nNON ASPIRIN FLU\\nNON-ASPIRIN\\nNON-ASPIRIN CHILDREN\'S PAIN RELIEVER\\nNON-ASPIRIN CHILDRENS COLD\\nNON-ASPIRIN PAIN RELIEVER\\nNON-ASPIRIN PM\\nNON-ASPIRIN SINUS\\nNON-DROWSY SINUS MAXIMUM STRENGTH\\nNONBAC\\nNOR-QD\\nNOR-QD 28 DAY\\nNORA-BE 28 DAY\\nNORCO\\nNORCO 10325\\nNORCO 5325\\nNORCO 7.5325\\nNORCURON\\nNORDETTE\\nNORDETTE 28 DAY\\nNORDITROPIN\\nNORDITROPIN CARTRIDGE\\nNOREL\\nNOREL AD\\nNOREL CS\\nNOREL DM\\nNOREL EX\\nNOREL LA\\nNOREL SD\\nNOREL SR\\nNORETHIN 150 M\\nNORFLEX\\nNORGESIC\\nNORGESIC FORTE\\nNORINYL\\nNORINYL 1+35 21 DAY\\nNORINYL 1+50 28 DAY\\nNORINYL 1-50\\nNORINYL 135 28 DAY\\nNORISC\\nNORISODRINE WITH CALCIUM IODINE\\nNORITATE\\nNORLYDA 28 DAY\\nNORLYROC\\nNORLYROC 28 DAY\\nNORMIFLO\\nNORMLSHIELD\\nNORMODYNE\\nNORMOSOL-M\\nNORMOSOL-R\\nNORMOSOL-R IN 5 % DEXTROSE\\nNOROXIN\\nNORPACE\\nNORPACE CR\\nNORPLANT\\nNORPRAMIN\\nNORTEMP\\nNORTHERA\\nNORTHYX\\nNORTREL\\nNORTREL 0.535 28 DAY\\nNORTREL 135 21 DAY\\nNORTREL 135 28 DAY\\nNORTREL 777 21 DAY\\nNORTREL 777 28 DAY\\nNORTUSS-NX\\nNORVASC\\nNORVAXS\\nNORVIR\\nNORWICH ASPIRIN\\nNOSTRILLA\\nNOTRIPTYLINE\\nNOTUSS\\nNOTUSS AC\\nNOTUSS DC\\nNOTUSS PD\\nNOTUSS PE\\nNOTUSS-FORTE\\nNOTUSS-NX\\nNOTUSS-NXD\\nNOVACET\\nNOVACORT\\nNOVADYNE DH\\nNOVADYNE EXPECTORANT\\nNOVAFERRUM\\nNOVAFERRUM 125\\nNOVAFERRUM D\\nNOVAFERRUM IRON\\nNOVAFERRUM REFORMULATED OCT 2010\\nNOVAGESIC\\nNOVAGEST\\nNOVAGEST WITH CODEINE\\nNOVAHISTINE DH\\nNOVAHISTINE DH REFORMULATED OCT 2008\\nNOVAHISTINE DMX\\nNOVAHISTINE ELIXIR\\nNOVAHISTINE EXPECTORANT\\nNOVAMINE\\nNOVAMINE 15%\\nNOVANTRONE\\nNOVAREL\\nNOVASAL\\nNOVASUS\\nNOVOCAINE\\nNOVOEIGHT\\nNOVOLIN\\nNOVOLIN 7030\\nNOVOLIN 7030 PENFILL\\nNOVOLIN L\\nNOVOLIN N\\nNOVOLIN N PENFILL\\nNOVOLIN R\\nNOVOLOG\\nNOVOLOG MIX\\nNOVOLOG MIX 7030\\nNOVOLOG MIX 70:30\\nNOVOSEVEN\\nNOVOTHYROX\\nNOXAFIL\\nNP THYROID\\nNP-27\\nNPLATE\\nNRS NASAL\\nNTZ LONG ACTING NASAL\\nNU-IRON\\nNU-IRON 150\\nNU-MED\\nNUBAIN\\nNUCALA\\nNUCO-TUSS EXPECTORANT\\nNUCO-TUSS PEDIATRIC EXPECTORANT\\nNUCOCHEM\\nNUCOCHEM EXPECTORANT\\nNUCOCHEM PEDIATRIC EXPECTORANT\\nNUCODINE\\nNUCODINE EXPECTORANT\\nNUCODINE PEDIATRIC\\nNUCOFED\\nNUCOFED EXPECTORANT\\nNUCOFED PEDIATRIC EXPECTORANT\\nNUCORT\\nNUCOTUSS\\nNUCOTUSS EXPECTORANT\\nNUCOTUSS PEDIATRIC EXPECTORANT\\nNUCYNTA\\nNUDAL HD\\nNUEDEXTA\\nNUFOL\\nNULECIT\\nNULEV\\nNULLO\\nNULOJIX\\nNULYTELY\\nNUMOBID DX\\nNUMONYL\\nNUMORPHAN HCL\\nNUMOTIZINE\\nNUOX\\nNUPERCAINAL\\nNUPERCAINAL HC 1%\\nNUPERCAINAL SUPPOSITORIES\\nNUPLAZID\\nNUPRIN\\nNUPRIN BACKACHE\\nNUPRO\\nNUPRO CHLORHEXIDINE\\nNUQUIN HP\\nNUROMAX\\nNUTR-E-SOL\\nNUTRACORT\\nNUTRADROPS\\nNUTRALOX\\nNUTRAPLUS\\nNUTRESTORE\\nNUTRILIPID\\nNUTRILYTE\\nNUTRILYTE II\\nNUTRISOURCE\\nNUTROPIN\\nNUTROPIN AQ\\nNUTROPIN AQ NUSPIN 5\\nNUTROPIN DEPOT\\nNUVARING\\nNUVESSA\\nNUVIGIL\\nNUWIQ\\nNUZOLE\\nNUZON\\nNY-TANNIC\\nNYAMYC\\nNYATA\\nNYDAMAX\\nNYDRAZID\\nNYLIA 135 28 DAY\\nNYLIA 777 28 DAY\\nNYMALIZE\\nNYQUIL ALCHOHOL FREE\\nNYQUIL ALCOHOL FREE\\nNYQUIL CHILD COUGH AND COLD\\nNYQUIL COLD & FLU\\nNYQUIL COLD & FLU RELIEF\\nNYQUIL COLD MEDICINE\\nNYQUIL COUGH\\nNYQUIL D\\nNYQUIL MULTI-SYMPTOM\\nNYQUIL SEVERE COLD & FLU\\nNYQUIL SINEX\\nNYST-OLONE\\nNYST-OLONE II\\nNYSTEX\\nNYSTOP\\nNYTOL\\nNYTOL CAPLET', '\\n'), com.fc.JavaScriptDistLib.TextLib.textSplitWith('OAKLIDE\\nOASIS TEARS\\nOBAGI\\nOBAGI NU DERM\\nOBAGI NU-DERM SUNFADER\\nOBENIX\\nOBEPHEN\\nOBEZINE\\nOBIZUR\\nOBREDON\\nOBY-CAP\\nOBY-TRIM\\nOC 8 ADULT ACNE\\nOCALIVA\\nOCCLUSAL-HP\\nOCEAN BLUE NUTRITIONALS OMEGA-3 1450\\nOCEAN BLUE NUTRITIONALS VITAMIN B PLUS OMEGA-3 1450\\nOCELLA 28 DAY\\nOCREVUS\\nOCTAGAM\\nOCTOCAINE\\nOCTOCAINE WITH EPINEPHRINE\\nOCTYCINE\\nOCTYCINE-100\\nOCTYCINE-250\\nOCU-CAINE\\nOCU-CARPINE\\nOCU-CHLOR\\nOCU-CORT\\nOCU-DEX\\nOCU-FLUR 10\\nOCU-MYCIN\\nOCU-PENTOLATE\\nOCU-PHRIN\\nOCU-PRED\\nOCU-PRED FORTE\\nOCU-PRED-A\\nOCU-SPORE-B\\nOCU-SPORE-G\\nOCU-SUL\\nOCU-SUL 10\\nOCU-SUL 15\\nOCU-SUL 30\\nOCU-TRACIN\\nOCU-TROL\\nOCU-TROPIC\\nOCU-TROPINE\\nOCU-ZOLINE\\nOCUCLEAR\\nOCUDOX\\nOCUFEN\\nOCUFLOX\\nOCUFRESH\\nOCUHIST\\nOCUMYCIN\\nOCUPRESS\\nOCUSOFT\\nOCUSULF-10\\nOCUTRICIN HC\\nOCUVITE\\nOCUVITE LUTEIN\\nODACTRA\\nODEFSEY\\nODOMZO\\nODORLESS PAIN\\nOFEV\\nOFF-EAZY\\nOFIRMEV\\nOGEN\\nOGESTREL 28 DAY\\nOHM ALLERGY RELIEF\\nOKEBO\\nOLEPTRO\\nOLUMIANT\\nOLUX\\nOLYSIO\\nOMECLAMOX\\nOMEDIA\\nOMIDRIA\\nOMNARIS\\nOMNI GEL\\nOMNI-MED\\nOMNICEF\\nOMNICEF OMNI-PAC\\nOMNIHIB\\nOMNIHIST\\nOMNIHIST II L.A.\\nOMNII\\nOMNIPAQUE\\nOMNIPEN\\nOMNIPEN-N\\nOMNIPRED\\nOMNISCAN\\nOMNISCAN SAFEPAK\\nOMNITROPE\\nOMONTYS\\nOMTRYG\\nONCASPAR\\nONCET\\nONCOVIN\\nONDANESTRON\\nONDANSETRON NOVAPLUS\\nONE STEP PINWORM TREATMENT\\nONE TOUCH\\nONE TOUCH REFORMULATED APR 2009\\nONETAB COLD AND FLU\\nONEXTON\\nONFI\\nONGLYZA\\nONIVYDE\\nONMEL\\nONSET FORTE\\nONSOLIS\\nONTAK\\nONXOL\\nONY-CLEAR\\nONZETRA\\nOPANA\\nOPCICON ONE-STEP\\nOPCON-A\\nOPDIVO\\nOPHTHAINE\\nOPHTHETIC\\nOPHTHOCORT\\nOPIUM DEODORIZED\\nOPSUMIT\\nOPTASE\\nOPTICAINE\\nOPTICROM\\nOPTICYL\\nOPTIFLEX-C\\nOPTIFLEX-G\\nOPTIGENE\\nOPTIMARK\\nOPTIMINE\\nOPTIMYD\\nOPTION 2\\nOPTIPRANOLOL\\nOPTIRAY 160\\nOPTIRAY 240\\nOPTIRAY 300\\nOPTIRAY 320\\nOPTIRAY 350\\nOPTIVAR\\nORA RELIEF\\nORABASE\\nORABASE BABY TEETHING GEL\\nORABASE GEL-B\\nORABASE LIP HEALER\\nORABASE WITH BENZOCAINE\\nORABLOC\\nORACEA\\nORACIT\\nORADENT\\nORAGESIC\\nORAGRAFIN SODIUM\\nORAJEL\\nORAJEL BABY\\nORAJEL BABY NIGHTTIME\\nORAJEL BABY TOOTH AND GUM CLEANER\\nORAJEL BLEEDING GUM RINSE\\nORAJEL D\\nORAJEL DENTURE\\nORAJEL DENTURE PLUS\\nORAJEL DRY MOUTH\\nORAJEL MAXIMUM STRENGTH\\nORAJEL MAXIMUM STRENGTH PM\\nORAJEL MAXIMUM STRENGTH TOOTHACHE\\nORAJEL MOUTH SORE MEDICINE\\nORAJEL MOUTH SORE RINSE\\nORAJEL MOUTH-AID\\nORAJEL MOUTH-AID LIQUID\\nORAJEL PERIOSEPTIC MAXIMUM STRENGTH\\nORAJEL ULTRA\\nORAJEL ULTRA MOUTH SORE MEDICINE\\nORAL B ANTI-CAVITY\\nORAL B FLUORINSE\\nORAL-B MINUTE-FOAM\\nORAL-B NEUTRA\\nORAL-B RINSE\\nORALAIR 100\\nORALAIR 300\\nORALAIR CHILDREN AND ADOLESCENTS SAMPLE KIT\\nORALONE\\nORAMAGIC PLUS\\nORAMORPH\\nORAMORPH SR\\nORANGE C\\nORAP\\nORAPRED\\nORAQIX\\nORASEP\\nORASEP REFORMULATED DEC 2013\\nORASONE\\nORASTAT\\nORATUSS\\nORAVERSE\\nORAVIG\\nORAXYL\\nORAZINC\\nORAZINC 110\\nORAZINC 220\\nORBACTIV\\nORBEC\\nORBEXA\\nORBIVAN\\nORBIVAN CF\\nORDRINE AT\\nORENCIA\\nORENITRAM\\nORETIC\\nORETICYL 25\\nORETICYL 50\\nORETICYL FORTE\\nORETON METHYL\\nORFADIN\\nORFRO\\nORGADIN\\nORGADIN-TUSS DM\\nORGAN-1 NR\\nORGANIDIN NR\\nORGARAN\\nORILISSA\\nORINASE\\nORINASE DIAGNOSTIC\\nORIS\\nORKAMBI\\nORLAAM\\nORLENTA\\nORMAZINE\\nORNEX\\nORO CLENSE\\nORPHENATE\\nORPHENGESIC\\nORPHENGESIC FORTE\\nORSYTHIA 28 DAY\\nORTHO CYCLEN\\nORTHO DIENESTROL\\nORTHO EVRA\\nORTHO MICRONOR 28 DAY\\nORTHO NOVUM\\nORTHO TRI-CYCLEN 28 DAY\\nORTHO TRI-CYCLEN LO 28 DAY\\nORTHO-CEPT\\nORTHO-CEPT 21 DAY\\nORTHO-CEPT 28 DAY\\nORTHO-CYCLEN 21 DAY\\nORTHO-CYCLEN 28 DAY\\nORTHO-GYNOL CONTRACEPTIVE\\nORTHO-NESIC\\nORTHO-NOVUM 1011 28 DAY\\nORTHO-NOVUM 135 28 DAY\\nORTHO-NOVUM 777 21 DAY\\nORTHO-NOVUM 777 28 DAY\\nORTHO-PREFEST 30 DAY\\nORTHOCLONE OKT3\\nORTHOVISC\\nORTHOWASH\\nORUDIS\\nORUDIS KT\\nORUVAIL\\nORVATEN\\nOS CAL 500 WITH D\\nOS-CAL 500 WITH D\\nOS-CAL WITH D\\nOSCAL 500\\nOSCIMIN\\nOSCION\\nOSENI\\nOSMITROL\\nOSMOGLYN\\nOSMOLEX\\nOSMOPREP\\nOSPHENA\\nOSTEO BI-FLEX\\nOSTEO-PORETICAL\\nOSTERCAL-D\\nOTEZLA\\nOTEZLA 28-DAY STARTER PACK\\nOTEZLA STARTER PACK\\nOTI-MED\\nOTI-SONE\\nOTIC EAR CARE\\nOTIC EDGE\\nOTIC TRIDESILON\\nOTICAINE\\nOTICIN\\nOTICIN HC\\nOTICIN HC EAR DROPS\\nOTICOT HC\\nOTIGESIC\\nOTIMAR\\nOTIPRIO\\nOTO-END\\nOTOCAIN\\nOTOCIDIN\\nOTOCORT\\nOTOCORT STERILE SUSPENSION\\nOTOMAR HC\\nOTOMAX HC\\nOTOVEL\\nOTOZIN\\nOTOZONE\\nOTREXUP\\nOTRIVIN\\nOUTGRO PAIN RELIEF\\nOVABAN\\nOVACE\\nOVACE WASH\\nOVCON\\nOVCON 35 28 DAY\\nOVCON 35 FE 28 DAY\\nOVCON 50 28 DAY\\nOVIDE\\nOVIDREL\\nOVRAL 21 DAY\\nOVRAL 28 DAY\\nOVRETTE\\nOXANDRIN\\nOXAYDO\\nOXECTA\\nOXILAN\\nOXIPOR VHC\\nOXISTAT\\nOXSORALEN\\nOXTELLAR\\nOXY 10\\nOXY 10 BALANCE\\nOXY BALANCE\\nOXY BALANCE CLEANSING\\nOXY CLEAN\\nOXY CLEAN MEDICATED\\nOXY DAILY WASH\\nOXY FACE SCRUB\\nOXY IR\\nOXY MAXIMUM ACTION TREATMENT PAD\\nOXY NIGHTWATCH MAXIMUM STRENGTH\\nOXY ORAL\\nOXY VANISHING GEL\\nOXY-OTIC\\nOXYCONTIN\\nOXYFAST\\nOXYFRIN\\nOXYIR\\nOXYMETA-12\\nOXYTROL\\nOYSCO 500\\nOYSCO 500 WITH D\\nOYSCO D\\nOYSCO D WITH CALCIUM\\nOYSCO-500 WITH D\\nOYST CAL\\nOYST CAL 500\\nOYST CAL D\\nOYST CALCIUM\\nOYST-CAL-D\\nOYSTER CAL\\nOYSTER CALCIUM\\nOYSTER SHELL\\nOYSTER SHELL CALCIUM 500\\nOYSTER SHELL CALCIUM WITH VITAMIN D\\nOYSTER SHELLD\\nOYSTER-D\\nOYSTERCAL-D\\nOZEMPIC\\nOZURDEX', '\\n'), com.fc.JavaScriptDistLib.TextLib.textSplitWith('P & S\\nP CHLOR GG\\nP TUSS\\nP TUSS D\\nP TUSS DM\\nP-1000\\nP-A-C ANALGESIC\\nP-HIST\\nP-HIST DM\\nP-TANN\\nP-TANN D\\nP-TEX\\nP-V-TUSSIN\\nP-V-TUSSIN SYRUP\\nP.T.E.-4\\nP.T.E.-5\\nP1E1\\nP2E1\\nP3E1\\nP4E1\\nP6E1\\nPACAPS\\nPACERONE\\nPACNEX\\nPAIN RELIEF (EFFERVESCENT)\\nPAIN RELIEF PM\\nPAIN RELIEF PM ADDED STRENGTH\\nPAIN RELIEF WITH ASPIRIN\\nPAIN RELIEVER ADDED STRENGTH\\nPAIN RELIEVER PM\\nPAIN-A-LAY GARGLE\\nPAIN-GESIC\\nPAINZONE\\nPALCAPS 10\\nPALCAPS 20\\nPALGIC\\nPALGIC D\\nPALGIC DS 0.45\\nPALGIC DS 0.46\\nPALGIC-DC\\nPALGIC-DS\\nPALIPASE\\nPALIPASE MT 16\\nPALIPASE MT 20\\nPALLADONE\\nPALOXIN\\nPALPEON DR 10\\nPALPEON DR 20\\nPALS CHLOROPHYLL COPPER COMPLEX\\nPALYNZIQ\\nPAMELOR\\nPAMINE\\nPAMINE FORTE DOSE PACK 60\\nPAMPRIN CRAMP FORMULA\\nPAMPRIN ES MULTI-SYMPTOM RELIEF FORMULA\\nPAMPRIN MAX FORMULA\\nPAMPRIN MAXIMUM PAIN\\nPAMPRIN MULTI-SYMPTOM\\nPAN-MIST LA\\nPANACET\\nPANADOL\\nPANADOL JR.\\nPANAFIL\\nPANAFIL WHITE\\nPANALGESIC GOLD\\nPANALGESIC GOLD LIQUID\\nPANASAL 5500\\nPANASE\\nPANATUSS DX\\nPANATUSS DXP\\nPANATUSS DXP PEDIATRIC\\nPANATUSS DXP PEDIATRIC REFORMULATED JUN 2012\\nPANATUSS PED\\nPANCOF\\nPANCOF EXP\\nPANCOF HC\\nPANCOF HC REFORMULATED FEB 2008\\nPANCOF XP\\nPANCOF XP REFORMULATED FEB 2008\\nPANCOF-PD\\nPANCREASE\\nPANCREASE MT 10\\nPANCREASE MT 16\\nPANCREASE MT 20\\nPANCREASE MT 4\\nPANCREATIC EC\\nPANCREATIC EC 4\\nPANCREATIL-UL 12\\nPANCREATIN 4X\\nPANCREAZE\\nPANCRECARB MS\\nPANCRECARB MS 16\\nPANCRECARB MS-4\\nPANCRECARB MS-8\\nPANCRELIPASE 16 MU\\nPANCRELIPASE 16000\\nPANCRELIPASE 20000\\nPANCRELIPASE DR\\nPANCRELIPASE EC\\nPANCRELIPASE MT 16\\nPANCRELIPASE SR\\nPANCRON 10\\nPANCRON 20\\nPANCRON DR\\nPANDEL\\nPANEX\\nPANEX 500\\nPANFIL\\nPANFIL G\\nPANGESTYME CN 10\\nPANGESTYME CN 20\\nPANGESTYME EC\\nPANGESTYME MT 16\\nPANGESTYME UL 12\\nPANGESTYME UL 18\\nPANGESTYME UL 20\\nPANHEMATIN\\nPANIXINE DISPERDOSE\\nPANLOR\\nPANLOR DC REFORMULATED JAN 2008\\nPANLOR REFORMULATED JAN 2018\\nPANLOR SS\\nPANMIST DM\\nPANMIST DM SR\\nPANMIST LA\\nPANMIST-S\\nPANMYCIN\\nPANNAZ\\nPANNAZ REFORMULATED SEP 2008\\nPANNAZ S\\nPANOCAPS\\nPANOCAPS MT 16\\nPANOCAPS MT 20\\nPANOKASE 16\\nPANOXYL\\nPANOXYL 10\\nPANOXYL 5\\nPANOXYL AQ\\nPANRETIN\\nPANRITIS FORTE\\nPANSCOL\\nPANSHAPE M\\nPANTHODERM\\nPAP-UREA\\nPAPACON\\nPAPFYLL\\nPARA-TIME S. R.\\nPARADIONE\\nPARAFLEX\\nPARAFON FORTE DSC\\nPARAL\\nPARAMOL\\nPARAPLATIN\\nPARCAINE\\nPARCOPA\\nPARDRYL\\nPAREMYD\\nPAREPECTOLIN\\nPARLODEL\\nPARNATE\\nPAROEX\\nPAROMYCIN\\nPARSABIV\\nPARTUSS-LA\\nPASER DR\\nPATADAY\\nPATANASE\\nPATANOL\\nPAVABID PLATEAU\\nPAVACOT\\nPAVAGEN\\nPAVULON\\nPAXAREL\\nPAXIDORM\\nPAXIL\\nPAXIL CR\\nPAXIPAM\\nPAZEO\\nPAZOL XS\\nPB HYOS\\nPB-ERGO-BELL\\nPBM ALLERGY SYRUP\\nPBZ\\nPBZ-SR\\nPC PEN VK\\nPC-10\\nPC-CAP\\nPCE\\nPCM-LA\\nPCXX NEUTRAL FOAM\\nPCXX NEUTRAL RINSE\\nPD COF\\nPD HIS D\\nPDM GG\\nPE-GUAI\\nPEDAMETH\\nPEDI-CORT V\\nPEDI-DRI\\nPEDI-PRO\\nPEDI-PRO (BENZALKONIUM)\\nPEDIA RELIEF\\nPEDIA RELIEF COUGH & COLD\\nPEDIA RELIEF DROPS\\nPEDIA-LAX\\nPEDIA-LAX CHEWABLE\\nPEDIA-LAX LIQUID\\nPEDIA-LAX LIQUID GLYCERIN SUPPOSITORIES\\nPEDIA-LAX PROBIOTIC\\nPEDIA-POP PALSICLES\\nPEDIACARE\\nPEDIACARE CHILDREN\'S 24-HR ALLERGY\\nPEDIACARE CHILDREN\'S ALLERGY\\nPEDIACARE CHILDREN\'S ALLERGY & COLD\\nPEDIACARE CHILDREN\'S COUGH AND CONGESTION\\nPEDIACARE CHILDREN\'S FEVER REDUCER PAIN RELIEVER\\nPEDIACARE CHILDREN\'S FLU PLUS APAP\\nPEDIACARE CHILDREN\'S MULTI-SYMPTOM COLD\\nPEDIACARE CHILDREN\'S MULTI-SYMPTOM COLD PLUS APAP\\nPEDIACARE CHILDREN\'S NIGHTREST MULTI-SYMPTOM COLD\\nPEDIACARE CHILDREN\'S PAIN & FEVER W IBUPROFEN\\nPEDIACARE CHILDREN\'S PLUS COUGH AND RUNNY NOSE\\nPEDIACARE COUGH & SORE THROAT PLUS APAP\\nPEDIACARE COUGH AND COLD\\nPEDIACARE COUGH AND COLD CHEWABLE\\nPEDIACARE COUGH AND COLD REFORMULATED FEB 2012\\nPEDIACARE COUGH PLUS COLD\\nPEDIACARE DECONGESTANT\\nPEDIACARE DROPS\\nPEDIACARE FEVER\\nPEDIACARE GAS RELIEF\\nPEDIACARE INFANT DECONGESTANT & COUGH\\nPEDIACARE INFANT DECONGESTANT & COUGH REFORMULATED OCT 2008\\nPEDIACARE INFANT FEVER PAIN RELIEVER\\nPEDIACARE INFANT FEVER REDUCER\\nPEDIACARE INFANT GAS RELIEF\\nPEDIACARE INFANTS COUGH\\nPEDIACARE INFANTS DECONGESTANT\\nPEDIACARE LONG ACTING\\nPEDIACARE LONG ACTING REFORMULATED FEB 2010\\nPEDIACARE MULTI SYMPTOM COLD\\nPEDIACARE NIGHTREST\\nPEDIACARE NIGHTTIME COUGH\\nPEDIACARE NIGHTTIME MULTI-SYMPTOM COLD\\nPEDIACOF\\nPEDIACON DX\\nPEDIADERM AF\\nPEDIADERM HC\\nPEDIADERM TA\\nPEDIAFLOR DROPS\\nPEDIAHIST DM\\nPEDIAHIST DM DROPS\\nPEDIALYTE\\nPEDIAMIST\\nPEDIAPAP\\nPEDIAPHEN\\nPEDIAPRED\\nPEDIARIX\\nPEDIATAN\\nPEDIATAN D\\nPEDIATEX\\nPEDIATEX 12\\nPEDIATEX 12 DM\\nPEDIATEX 12D\\nPEDIATEX CT\\nPEDIATEX D\\nPEDIATEX D 0.43.5\\nPEDIATEX DM\\nPEDIATEX HC\\nPEDIATEX TD\\nPEDIATEX TDM\\nPEDIATRIC APAP\\nPEDIATRIC COUGH AND COLD\\nPEDIATRIC RELIEF\\nPEDIAZOLE\\nPEDIOTIC\\nPEDIOX\\nPEDIOX CHEWABLE\\nPEDIOX-S\\nPEDIPIROX-4\\nPEDITEX\\nPEDITUSS\\nPEDTE-PAK-4\\nPEDTRACE-4\\nPEDURAL\\nPEDVAX HIB\\nPEDVAXHIB\\nPEG-INTRON\\nPEGANONE\\nPEGASYS\\nPEGINTRON\\nPEGYLAX\\nPELEVERUS\\nPEN-G MAX\\nPEN-V\\nPEN-VEE K\\nPENDEX\\nPENECORT\\nPENEDERM\\nPENETREX\\nPENLAC NAIL LACQUER\\nPENNSAID\\nPENTACARINAT\\nPENTACEL\\nPENTAM\\nPENTAM 300\\nPENTASA\\nPENTASPAN\\nPENTAZINE\\nPENTAZINE VC\\nPENTAZINE WITH CODEINE\\nPENTHRANE\\nPENTOSTAM\\nPENTOTHAL\\nPENTOXIL\\nPENTOXYL\\nPENTRAX\\nPENTRAX GOLD\\nPEP-BACK\\nPEPCID\\nPEPCID AC\\nPEPCID COMPLETE\\nPEPTAVLON\\nPEPTIC RELIEF\\nPEPTO BISMOL MAXIMUM STRENGTH\\nPEPTO DIARRHEA CONTROL\\nPEPTO-BISMOL\\nPEPTO-BISMOL CHILDREN\'S\\nPEPTO-BISMOL INSTACOOL PACK\\nPEPTO-BISMOL TO-GO COMBO PACK\\nPERANEX\\nPERCHLORACAP\\nPERCOCET\\nPERCOCET 10325\\nPERCOCET 10650\\nPERCOCET 2.5325\\nPERCOCET 5325\\nPERCOCET 7.5325\\nPERCOCET 7.5500\\nPERCODAN REFORMULATED MAY 2009\\nPERCODAN-DEMI\\nPERCOGESIC\\nPERCOGESIC BACKACHE\\nPERCOGESIC EXTRA STRENGTH\\nPERCOGESIC REFORMULATED JAN 2011\\nPERCOLONE\\nPERCY MEDICINE\\nPERDIEM\\nPERDIEM FIBER\\nPERDIEM FIBER CAPLET\\nPERDIEM OVERNIGHT\\nPERESTAN\\nPERFECT CHOICE\\nPERFECT CHOICE ONE MINUTE\\nPERFORM\\nPERFOROMIST\\nPERGONAL\\nPERI-COLACE\\nPERI-COLACE REFORMULATED FEB 2008\\nPERI-D.O.S.\\nPERI-DS\\nPERIACTIN\\nPERIDEX\\nPERIGIENE\\nPERIGUARD\\nPERIMAX PERIO RINSE\\nPERIO MED\\nPERIO PLUS\\nPERIOCHIP\\nPERIOGARD\\nPERIOSEP\\nPERIOSTAT\\nPERISINE\\nPERISOL\\nPERJETA\\nPERLOXX\\nPERLOXX 10300\\nPERLOXX 2.5300\\nPERLOXX 5300\\nPERLOXX 7.5300\\nPERMAPEN\\nPERMAX\\nPERMITIL\\nPERNOX\\nPERNOX LEMON\\nPERNOX LOTION\\nPERNOX REGULAR\\nPERNOX SCRUB CLEANSER\\nPERODERM\\nPEROX-A-MINT\\nPEROXIN A\\nPEROXIN A 10\\nPEROXYL\\nPERSA-GEL\\nPERSA-GEL W\\nPERSANTINE\\nPERT PLUS DANDRUFF\\nPERTOFRANE\\nPERTUSSIN CS CHILDRENS\\nPERTUSSIN ES\\nPERTZYE\\nPETROLA\\nPEXEVA\\nPFIZERPEN\\nPHARBETOL\\nPHARMADINE\\nPHARMADRINE\\nPHARMAGESIC\\nPHAZYME\\nPHAZYME-125 SOFTGELS MAXIMUM STRENGTH\\nPHEN TUSS DM\\nPHEN-LAX\\nPHEN-TUSS AD\\nPHENA-HC\\nPHENA-PLUS\\nPHENA-S\\nPHENABID\\nPHENABID DM\\nPHENADEX\\nPHENADOZ\\nPHENAMETH VC\\nPHENAPAP\\nPHENAPAP SINUS IMPROVED\\nPHENAPHEN WITH CODEINE\\nPHENAPHEN WITH CODEINE #3\\nPHENAPHEN WITH CODEINE #4\\nPHENASEP\\nPHENASEP CHERRY\\nPHENASEPTIC\\nPHENAVENT\\nPHENAVENT D\\nPHENAVENT LA\\nPHENAVENT PED\\nPHENAZINE\\nPHENAZINE 50\\nPHENAZO\\nPHENCARB GG\\nPHENCHLOR S.H.A.\\nPHENCHLOR TANNATE PEDIATRIC\\nPHENCLOR TANNATE\\nPHENCLOR TANNATE PEDIATRIC\\nPHENCO-CARE\\nPHENDACOF\\nPHENDACOF HC\\nPHENDAL HD\\nPHENDAL-HD\\nPHENDIET\\nPHENDIET 105\\nPHENDIET-105\\nPHENDRY\\nPHENEEN\\nPHENERBEL-S\\nPHENERGAN\\nPHENERGAN FORTIS\\nPHENERGAN VC\\nPHENERGAN VC WITH CODEINE\\nPHENERGAN WITH CODEINE\\nPHENERGAN WITH DEXTROMETHORPHAN\\nPHENERZINE\\nPHENFLU\\nPHENFLU CD\\nPHENFLU CDX\\nPHENFLU DM\\nPHENHIST\\nPHENHIST DH\\nPHENHIST DH WITH CODEINE\\nPHENHIST EXPECTORANT\\nPHENOBEL\\nPHENOHYTRO\\nPHENOJECT\\nPHENOJECT-50\\nPHENOL EZ\\nPHENOLAX\\nPHENOPTIC\\nPHENTERCOT\\nPHENTEX\\nPHENTRIDE\\nPHENURONE\\nPHENYDRYL\\nPHENYLDRINE\\nPHENYLEPHRINE HD\\nPHENYLEPHRINE, CHLORPHENIRAMINE, AND METHSCOPOLAMINE\\nPHENYLFENESIN\\nPHENYLFENESIN LA\\nPHENYLGESIC\\nPHENYLHISTINE\\nPHENYLHISTINE DH\\nPHENYLHISTINE DH EXPECTORANT\\nPHENYLHISTINE EXPECTORANT\\nPHENYTEK\\nPHENZENE\\nPHICON\\nPHILITH 28 DAY\\nPHILLIPS GEL\\nPHILLIPS M-O\\nPHILLIPS MILK OF MAGNESIA\\nPHILLIPS STOOL SOFTENER\\nPHILLIPS\' CRAMP-FREE\\nPHISOHEX\\nPHLEMEX\\nPHLEMEX FORTE\\nPHLEMEX-PE\\nPHLEMGESIC\\nPHOS FLUR RINSE\\nPHOS-FLUR\\nPHOSLO\\nPHOSLYRA\\nPHOSPHA 250 NEUTRAL\\nPHOSPHASAL\\nPHOSPHATE FLUORIDE\\nPHOSPHOLINE IODIDE\\nPHOTOFRIN\\nPHOTREXA\\nPHRENILIN\\nPHRENILIN FORTE\\nPHRENILIN WITH CAFFEINE AND CODEINE\\nPHYLLOCONTIN\\nPHYSIOLYTE\\nPHYSIOSOL\\nPICATO\\nPILAGAN\\nPILAGAN WITH C CAP\\nPILOCAR\\nPILOPINE\\nPILOPINE-HS\\nPILOPTIC\\nPILOPTIC-1\\nPILOPTIC-12\\nPILOPTIC-2\\nPILOPTIC-3\\nPILOPTIC-4\\nPILOPTIC-6\\nPILOSTAT\\nPIMTREA PACK\\nPIN-X\\nPINK BISMOL\\nPINK BISMUTH\\nPINWORM MEDICINE\\nPIPRACIL\\nPIRMELLA 135 28 DAY\\nPIRMELLA 777 28 DAY\\nPITOCIN\\nPITRESSIN\\nPLACIDYL\\nPLAN B\\nPLAN B ONE-STEP\\nPLAQUENIL\\nPLASBUMIN\\nPLASBUMIN-20\\nPLASBUMIN-25\\nPLASBUMIN-5\\nPLASMA-LYTE 148\\nPLASMA-LYTE 148 IN 5 % DEXTROSE\\nPLASMA-LYTE 56\\nPLASMA-LYTE 56 IN 5 % DEXTROSE\\nPLASMA-LYTE M IN 5 % DEXTROSE\\nPLASMA-LYTE R\\nPLASMA-LYTE R IN 5 % DEXTROSE\\nPLASMA-LYTE R IN 5% DEXTROSE\\nPLASMA-PLEX\\nPLASMALYTE A\\nPLASMANATE\\nPLASMATEIN\\nPLATINOL\\nPLATINOL-AQ\\nPLAVIX\\nPLEDGACLIN\\nPLEGINE\\nPLEGRIDY\\nPLEGRIDY PEN STARTER PACK\\nPLEGRIDY STARTER PACK\\nPLEMEX\\nPLENAMINE\\nPLENAXIS\\nPLENDIL\\nPLENVU\\nPLETAL\\nPLEXION\\nPLEXION CLEANSER\\nPLEXION SCT\\nPLIAGLIS\\nPLURATUSS\\nPMB\\nPNEUMOMIST\\nPNEUMOTUSSIN\\nPNEUMOVAX 23\\nPODACTIN\\nPODOCON\\nPODOCON-25\\nPODOFIN\\nPOINT RELIEF\\nPOLAR FREEZE\\nPOLAR FROST\\nPOLARAMINE\\nPOLARAMINE EXPECTORANT\\nPOLARAMINE REPETABS TABLETS\\nPOLOCAINE\\nPOLOCAINE WITH LEVONORDEFRIN\\nPOLOCAINE-MPF\\nPOLY CS\\nPOLY D\\nPOLY D SR\\nPOLY DM\\nPOLY HIST CB\\nPOLY HIST DHC\\nPOLY HIST DM\\nPOLY HIST FORTE\\nPOLY HIST FORTE REFORMULATED FEB 2008\\nPOLY HIST FORTE REFORMULATED NOV 2013\\nPOLY HIST FORTE REFORMULATED OCT 2010\\nPOLY HIST HC\\nPOLY HIST NC\\nPOLY HIST PD\\nPOLY HISTINE D\\nPOLY HISTINE DM\\nPOLY IRON\\nPOLY IRON 150 FORTE\\nPOLY PRED\\nPOLY TAN D\\nPOLY TUSSIN DM\\nPOLY TUSSIN EX\\nPOLY TUSSIN XP\\nPOLY-D\\nPOLY-DEX\\nPOLY-HISTINE\\nPOLY-HISTINE CS\\nPOLY-HISTINE-D\\nPOLY-HISTINE-D PED\\nPOLY-TUSSIN\\nPOLY-TUSSIN AC\\nPOLY-VENT\\nPOLY-VENT DM\\nPOLY-VENT IR\\nPOLY-VENT JR\\nPOLY-VENT PLUS\\nPOLY-VI-SOL\\nPOLY-VI-SOL WITH IRON\\nPOLYCARB\\nPOLYCILLIN\\nPOLYCIN\\nPOLYCITRA\\nPOLYCITRA-K\\nPOLYCITRA-LC\\nPOLYDINE\\nPOLYGAM SD\\nPOLYGESIC\\nPOLYSPORIN\\nPOLYTAN\\nPOLYTAN D\\nPOLYTAR\\nPOLYTINE CS\\nPOLYTINE D\\nPOLYTINE DM\\nPOLYTRACIN\\nPOLYTRIM\\nPOMALYST\\nPONDIMIN\\nPONSTEL\\nPONTOCAINE\\nPONTOCAINE HCL\\nPONTOCAINE OPHTHALMIC\\nPORTIA 21 DAY\\nPORTIA 28 DAY\\nPORTRAZZA\\nPOSICOR\\nPOSIFLUSH\\nPOSTURE-D HP\\nPOTABA\\nPOTIGA\\nPOVIDEX\\nPOVIDEX PERI\\nPOVIDINE\\nPOXI\\nPP-CAP\\nPPA-GG CR\\nPRADAXA\\nPRALUENT\\nPRAMCORT\\nPRAMEGEL\\nPRAMEGEL REFORMULATED APR 2012\\nPRAMOSONE\\nPRAMOTIC\\nPRAMOX\\nPRANDIMET\\nPRANDIMET 1500\\nPRANDIMET 2500\\nPRANDIN\\nPRASCION\\nPRASCION CLEANSER\\nPRASCION RA\\nPRAVACHOL\\nPRAVIGARD 32520\\nPRAVIGARD 32540\\nPRAVIGARD 32580\\nPRAVIGARD 8120\\nPRAVIGARD 8140\\nPRAVIGARD 8180\\nPRAX\\nPRAXBIND\\nPRECEDEX\\nPRECISE\\nPRECOSE\\nPRED FORTE\\nPRED MILD\\nPRED-G\\nPRED-G S.O.P.\\nPRED-JECT-50\\nPREDACORT 50\\nPREDACORTEN\\nPREDAJECT-50\\nPREDALONE 50\\nPREDATE-50\\nPREDCOR\\nPREDICORT RP\\nPREDICORT-50\\nPREDNICEN-M\\nPREDNICOT\\nPREDNISOL\\nPREDNISONE INTENSOL\\nPREDONE\\nPREDSULFAIR\\nPREFEST 30 DAY\\nPREFRIN\\nPREGNITUDE\\nPREGNYL\\nPREHIST D\\nPRELIEF\\nPRELONE\\nPRELU-2\\nPREMARIN\\nPREMARIN WITH METHYLTESTOSTERONE\\nPREMASOL\\nPREMESIS RX\\nPREMESYN PMS\\nPREMPHASE\\nPREMPHASE 28 DAY\\nPREMPRO\\nPREMPRO 0.31.5 28 DAY\\nPREMPRO 0.451.5 28 DAY\\nPREMPRO 0.6252.5 28 DAY\\nPREMPRO 0.6255 28 DAY\\nPREMSYN PMS\\nPRENEXA\\nPRENEXA PREMIER\\nPREP-HEM\\nPREPARATION H\\nPREPARATION H COOLING GEL\\nPREPARATION H CREAM\\nPREPARATION H HYDROCORTISONE\\nPREPARATION H MEDICATED WIPES\\nPREPARATION H RAPID RELIEF\\nPREPARATION H REFORMULATED JUN 2013\\nPREPARATION H SUPPOSITORIES\\nPREPARATION H SUPPOSITORIES REFORMULATED OCT 2013\\nPREPIDIL\\nPREPOPIK\\nPRESERVISION\\nPRESERVISION 2\\nPRESERVISION WITH LUTEIN\\nPRESGEN\\nPRESTALIA\\nPRETZ\\nPRETZ IRRIGATION SOLUTION\\nPRETZ NASAL\\nPRETZ-D\\nPREVACID\\nPREVACID NAPRAPAC 250\\nPREVACID NAPRAPAC 375\\nPREVACID NAPRAPAC 500\\nPREVACID SOLUTAB\\nPREVALITE\\nPREVEN EMERGENCY CONTRACEPTIVE KIT\\nPREVENAR\\nPREVIDENT\\nPREVIDENT 500 PLUS BOOST\\nPREVIDENT 5000 BOOSTER\\nPREVIDENT 5000 PLUS\\nPREVIDENT 5000 SENSITIVE\\nPREVIDENT DENTAL RINSE\\nPREVIFEM\\nPREVIFEM 28 DAY\\nPREVNAR\\nPREVNAR 13\\nPREVPAC\\nPREVYMIS\\nPREZCOBIX\\nPREZISTA\\nPRIALT\\nPRIFTIN\\nPRILOSEC\\nPRIMACOR\\nPRIMACOR I.V.\\nPRIMALEV\\nPRIMALEV 30010\\nPRIMALEV 3002.5\\nPRIMALEV 3005\\nPRIMALEV 3007.5\\nPRIMATENE\\nPRIMATENE DUAL ACTION\\nPRIMATENE MIST INHALER\\nPRIMATENE MIST SUSPENSION\\nPRIMATUSS 4\\nPRIMAXIN\\nPRIMAXIN IM\\nPRIMAXIN IV\\nPRIMLEV\\nPRIMLEV 30010\\nPRIMLEV 3005\\nPRIMLEV 3007.5\\nPRIMOR 120\\nPRIMOR 1200\\nPRIMOR 240\\nPRIMOR 600\\nPRIMSOL\\nPRINCIPEN\\nPRINIVIL\\nPRINIZE\\nPRINZIDE\\nPRISTIQ\\nPRIVIGEN\\nPRIVINE\\nPRO 12\\nPRO 12 MOUSSE\\nPRO CLEAR\\nPRO CLEAR AC\\nPRO PET DR. JEFF\\nPRO PET LIQUID\\nPRO PET SKIN RELIEF\\nPRO RED\\nPRO TUSS\\nPRO-AIR ALBUTEROL\\nPRO-FAST HS\\nPRO-FAST SA\\nPRO-FAST SR\\nPRO-HYO\\nPRO-MED\\nPRO1TEK\\nPROACTIV SHEER FINISH\\nPROACTIV TONER\\nPROACTIVE CLEANING BAR\\nPROAIR\\nPROAIR HFA\\nPROAMATINE\\nPROANTHO PLUS\\nPROBANTHINE\\nPROBAX\\nPROBUPHINE\\nPROCALAMINE 3\\nPROCAN\\nPROCANBID\\nPROCARDIA\\nPROCENTRA\\nPROCET\\nPROCHIEVE\\nPROCOF\\nPROCOF D\\nPROCOMYCIN\\nPROCORT\\nPROCORT 1.851.15\\nPROCOT\\nPROCRIT\\nPROCTO-KIT\\nPROCTO-MED\\nPROCTO-PAK\\nPROCTOCORT\\nPROCTOCREAM\\nPROCTOFOAM\\nPROCTOFOAM-HC\\nPROCTOSERT HC\\nPROCTOSOL\\nPROCTOSOL HCR\\nPROCTOSOL-HC\\nPROCTOZONE HC\\nPROCTOZONE-H\\nPROCTOZONE-P\\nPROCYSBI\\nPRODENRX RINSE\\nPRODERM\\nPRODIUM\\nPRODRIN\\nPRODROX\\nPRODROXY\\nPROFASI\\nPROFEN\\nPROFEN FORTE\\nPROFEN FORTE DM\\nPROFEN II\\nPROFEN II DM\\nPROFEN II DM REFORMULATED FEB 2008\\nPROFEN LA\\nPROFENAL\\nPROFENO\\nPROFERRIN\\nPROFERRIN-FORTE\\nPROFILNINE\\nPROFILNINE SD\\nPROFLOXACIN\\nPROGAN\\nPROGEST\\nPROGLYCEM\\nPROGRAF\\nPROHANCE\\nPROHIBIT\\nPROHIST\\nPROHIST CD\\nPROHIST CF\\nPROHIST DM\\nPROHIST LQ\\nPROHIST-8\\nPROHISTINE D\\nPROHISTINE DM\\nPROHISTINE-D\\nPROLASTIN\\nPROLENSA\\nPROLEUKIN\\nPROLEX D\\nPROLEX DH\\nPROLEX DM\\nPROLEX DMX\\nPROLEX PD\\nPROLIA\\nPROLIXIN\\nPROLIXIN DECANOATE\\nPROLIXIN ENANTHATE\\nPROLOPRIM\\nPROMACET\\nPROMACOT\\nPROMACTA\\nPROMETH VC\\nPROMETH VC WITH CODEINE\\nPROMETH WITH CODEINE\\nPROMETH WITH DEXTROMETHORPHAN\\nPROMETHAZINE VC\\nPROMETHAZINE VC WITH CODEINE\\nPROMETHEGAN\\nPROMETRIUM\\nPROMINOL\\nPROMOLAXIN\\nPROMPT\\nPROMPT RELIEF\\nPRONESTYL\\nPRONESTYL-SR\\nPRONOL\\nPRONTO\\nPRONTO PLUS\\nPRONTO PLUS COMPLETE LICE REMOVER SYSTEM\\nPRONTO PLUS LICE EGG REMOVER\\nPRONTO PLUS PINWORM\\nPRONTO SHAMPOO & CREAM RINSE\\nPRONTO SPRAY\\nPROP-A-HIST\\nPROP-A-TANE\\nPROPA P.H.\\nPROPA P.H. ACNE MASK\\nPROPA P.H. FOAMING FACE WASH\\nPROPA P.H. SKIN CLEANSER NORMALSENSITIVE\\nPROPACET\\nPROPACET 100\\nPROPAGEST\\nPROPAN\\nPROPATUSS EXPECTORANT\\nPROPECIA\\nPROPEL\\nPROPINE\\nPROPOVEN\\nPROPOXYPHENE COMPOUND 65\\nPROPRINAL\\nPROPYLHIOURACIL\\nPROQUAD\\nPROQUIN\\nPROREX\\nPROSCAR\\nPROSED\\nPROSED DS\\nPROSED EC\\nPROSEDDS\\nPROSOL\\nPROSOM\\nPROSTIGMIN\\nPROSTIGMIN BROMIDE\\nPROSTIN E2\\nPROSTIN VR\\nPROTAC\\nPROTECTOL\\nPROTEX\\nPROTEX D\\nPROTID\\nPROTILASE\\nPROTILASE MT-16\\nPROTONIX\\nPROTONIX IV\\nPROTOPAM\\nPROTOPIC\\nPROTOSTAT\\nPROTROPIN\\nPROTUSS\\nPROTUSS D\\nPROTUSS TABLET\\nPROVAYBLUE\\nPROVENGE\\nPROVENTIL\\nPROVENTIL REPETABS TABLETS\\nPROVERA\\nPROVIGIL\\nPROVISC\\nPROVOCHOLINE\\nPROXACOL\\nPROXIGEL\\nPROZAC\\nPRUDOXIN\\nPRULET\\nPSE ALLERGY\\nPSE ALLERGY DM\\nPSE BROM DM\\nPSE CARB DM\\nPSE SINUS\\nPSE-GG CR\\nPSE-GG TR\\nPSEUBROM\\nPSEUCLOR\\nPSEUCLOR-SR\\nPSEUDACARB\\nPSEUDATEX HC\\nPSEUDO CARB\\nPSEUDO CARB DM\\nPSEUDO COUGH\\nPSEUDO-G\\nPSEUDO-PLUS\\nPSEUDOBROM DM\\nPSEUDOCOT\\nPSEUDOCOT-C\\nPSEUDOCOT-G\\nPSEUDOCOT-T\\nPSEUDODINE C\\nPSEUDOEPHEDRINE GG\\nPSEUDOEPHEDRINE SINUS\\nPSEUDOFED\\nPSEUDOFEN\\nPSEUDOFEN PD\\nPSEUDOGEST-DM\\nPSEUDOTABS\\nPSEUDOVAL\\nPSEUDOVENT\\nPSEUDOVENT DM\\nPSEUDOVENT PED\\nPSEUDOX M\\nPSORCON\\nPSORENT\\nPSORIASIN\\nPSORIASIN WASH\\nPSORIATEC\\nPSORIGEL\\nPUBLIX GLUCOSE\\nPULERE\\nPULEXN DM\\nPULMARI-GP\\nPULMICORT\\nPULMOSAL\\nPULMOZYME\\nPURALUBE\\nPURELAX\\nPURELL\\nPURGE\\nPURINETHOL\\nPURIXAN\\nPUROXCIN\\nPYCNOGENOL\\nPYLERA\\nPYREGESIC-C\\nPYRELLE\\nPYRELLE HB\\nPYRIDIUM\\nPYRIDIUM PLUS\\nPYRIDOSTISMINE\\nPYRIL D\\nPYRIL DM\\nPYRILAFEN TANNATE 12\\nPYRINYL II\\nPYRINYL LIQUID SHAMPOO\\nPYRLEX\\nPYRLEX CB\\nPYRLEX PD\\nPYRROXATE\\nPYRROXATE COLD & CONGESTION', '\\n'), com.fc.JavaScriptDistLib.TextLib.textSplitWith('Q HIST LA\\nQ-ACIN\\nQ-B\\nQ-BID\\nQ-DRYL\\nQ-DRYL TOPICAL\\nQ-FED\\nQ-GEL\\nQ-GEL WITH LIPOIC ACID\\nQ-GESIC\\nQ-HIST LA\\nQ-LAX\\nQ-NAFTATE\\nQ-NOL\\nQ-PAP\\nQ-PROFEN\\nQ-SORB CO Q-10\\nQ-TAPP\\nQ-TAPP DM\\nQ-TAPP REFORMULATED FEB 2008\\nQ-TAPP SR\\nQ-TUSS\\nQ-TUSS WITH HYDROCODONE\\nQ-TUSSIN CF\\nQ-TUSSIN CF REFORMULATED OCT 2007\\nQ-TUSSIN PE\\nQ-UP\\nQ-V TUSSIN\\nQBRELIS\\nQDALL\\nQDALL AR\\nQFLEX\\nQLEARQUIL ALLERGY RELIEF\\nQLEARQUIL DAYTIME SINUS & CONGESTION\\nQLEARQUIL NASAL DECONGESTANT\\nQLEARQUIL NIGHTTIME\\nQLEARQUIL NIGHTTIME ALLERGY RELIEF\\nQM-260\\nQNASL\\nQSYMIA\\nQSYMIA 11.2569\\nQSYMIA 1592\\nQSYMIA 3.7523\\nQSYMIA 7.546\\nQTERN\\nQUAD TANN\\nQUADRA-HIST D\\nQUADRA-HIST D REFORMULATED FEB 2008\\nQUADRA-HIST-D PED\\nQUADRA-HIST-D PED REFORMULATED MAR 2009\\nQUADRACEL\\nQUADRAHIST D\\nQUADRAHIST PEDIATRIC\\nQUADRAMET\\nQUAL TUSSIN\\nQUAL-TUSSIN DC\\nQUALA CET\\nQUALA HC\\nQUALAQUIN\\nQUALITEST\\nQUALITEST HEMORRHOIDAL SUPPOSITORY\\nQUARTETTE 91 DAY PACK\\nQUARTUSS\\nQUARZAN\\nQUASENSE 91 DAY\\nQUDEXY\\nQUELICIN\\nQUELICIN CHLORIDE\\nQUENALIN\\nQUESTRAN\\nQUESTRAN LIGHT\\nQUFLORA\\nQUIBRON\\nQUIBRON 300\\nQUIBRON T-SR\\nQUIBRON-T\\nQUICK CURE\\nQUILLICHEW\\nQUILLIVANT\\nQUIN-G\\nQUIN-RELEASE\\nQUIN-TAB\\nQUINADURE\\nQUINAGLUTE DURA-TABS\\nQUINAMM\\nQUINARETIC\\nQUINARETIC 1012.5\\nQUINARETIC 12.510\\nQUINARETIC 12.520\\nQUINARETIC 2012.5\\nQUINARETIC 2025\\nQUINARETIC 2520\\nQUINDAL 1010012.5\\nQUINDAL 1020012.5\\nQUINDAL EXPECTORANT\\nQUINDAL HD\\nQUINDAL HD PLUS\\nQUINEPROX\\nQUINIDEX EXTENTABS\\nQUINJA\\nQUINORA\\nQUINTEX HS\\nQUINZYME\\nQUIXIN\\nQUTENZA\\nQV ALLERGY\\nQVAR', '\\n'), com.fc.JavaScriptDistLib.TextLib.textSplitWith('R & C\\nR A ACNE\\nR-GENE 10\\nR-TANNA\\nR-TANNA 12\\nR-TANNAMINE\\nR-TANNAMINE PLUS\\nR-TANNATE\\nR-TANNATE PEDIATRIC\\nR-TANNIC-S AD\\nRABAVERT\\nRADIAGUARD\\nRADICAVA\\nRADIOGARDASE\\nRADIOGRADASE\\nRADTUE\\nRAGWITEK\\nRAJANI 28 DAY\\nRALIX\\nRAMSES CRYSTAL CLEAR\\nRAMSES PERSONAL\\nRANEXA\\nRANICLOR\\nRAPAFLO\\nRAPAMUNE\\nRAPDONE\\nRAPHON\\nRAPHTRE\\nRAPIFLUX\\nRAPIVAB\\nRAPLIXA\\nRAPLON\\nRAPTIVA\\nRASH RELIEF ANTIBACTERIAL\\nRASH RELIEF ANTIFUNGAL\\nRASH RELIEF CLEAR\\nRASH RELIEF WITH ZINC OXIDE\\nRASUVO\\nRAUWOLFEMMS\\nRAUZIDE\\nRAVICTI\\nRAXAR\\nRAYALDEE\\nRAYOS\\nRAZADYNE\\nRE KAR CE PLUS\\nRE TANN\\nRE-10 WASH\\nRE-AZO\\nRE-DRYLEX\\nRE-U40\\nREA LO 39\\nREA-LO\\nREA-LO LOTION\\nREACT\\nREBETOL\\nREBETRON COMBINATION PACKAGE FOR PATIENTS < = 75 KG, INTRON A 15,000,000 UNTML MULTI-DOSE PEN  70 REBETOL CAPSULES\\nREBETRON COMBINATION PACKAGE FOR PATIENTS < = 75 KG, INTRON A 6,000,000 UNTML MULTI-DOSE VIAL  70 REBETOL CAPSULES\\nREBETRON COMBINATION PACKAGE FOR PATIENTS < = 75 KG, INTRON A 6,000,000 UNTML SINGLE DOSE VIALS  70 REBETOL CAPSULES\\nREBETRON COMBINATION PACKAGE FOR PATIENTS > = 75 KG, INTRON A 15,000,000 UNTML MULTI-DOSE PEN  84 REBETOL CAPSULES\\nREBETRON COMBINATION PACKAGE FOR PATIENTS > = 75 KG, INTRON A 6,000,000 UNTML MULTI-DOSE VIAL  84 REBETOL CAPSULES\\nREBETRON COMBINATION PACKAGE FOR PATIENTS > = 75 KG, INTRON A 6,000,000 UNTML SINGLE DOSE VIALS  84 REBETOL CAPSULES\\nREBETRON COMBINATION PACKAGE FOR REBETOL DOSE REDUCTION, INTRON A 15,000,000 UNTML MULTI-DOSE PEN  42 REBETOL CAPSULES\\nREBETRON COMBINATION PACKAGE FOR REBETOL DOSE REDUCTION, INTRON A 6,000,000 UNTML MULTI-DOSE VIAL  42 REBETOL CAPSULES\\nREBETRON COMBINATION PACKAGE FOR REBETOL DOSE REDUCTION, INTRON A 6,000,000 UNTML SINGLE DOSE VIALS  42 REBETOL CAPSULES\\nREBIF\\nREBIF REBIDOSE\\nREBIF TITRATION\\nREBINYN\\nRECEDE\\nRECLAST\\nRECLIPSEN\\nRECLIPSEN 28 DAY\\nRECOFEN D\\nRECOMBINATE\\nRECOMBIVAX\\nRECOMBIVAX HB\\nRECORT PLUS\\nRECOTHROM\\nRECTACAINE\\nRECTACORT-HC\\nRECTACREME HC\\nRECTAGEL\\nRECTAGEL HC\\nRECTASOL\\nRECTASOL-HC\\nRECTICARE\\nRECTICARE WIPES\\nRECTIV\\nRECTOCORT HC\\nRED CROSS CANKER SORE\\nREDERM\\nREDNESS EYES PLUS\\nREDNESS RELIEF\\nREDUTEMP\\nREDUX\\nREFACTO\\nREFENESEN\\nREFENESEN CHEST CONGESTION & PAIN RELIEF\\nREFENESEN CHEST CONGESTION & PAIN RELIEF PE\\nREFENESEN PE\\nREFISSA\\nREFLUDAN\\nREFRESH DROPS\\nREFRESH DRY EYE THERAPY\\nREFRESH EYE ITCH RELIEF\\nREFRESH LACRI-LUBE\\nREFRESH LIQUIGEL\\nREFRESH LUBRICANT\\nREFRESH OPTIVE\\nREFRESH OPTIVE ADVANCED\\nREFRESH OPTIVE EXTENDED THERAPY\\nREFRESH OPTIVE MEGA-3\\nREFRESH PLUS\\nREFRESH PM\\nREFRESH REDNESS RELIEF\\nREFRESH TEARS\\nREGENCARE\\nREGENECARE\\nREGIMEX\\nREGITINE\\nREGLAN\\nREGONOL\\nREGRANEX\\nREGROTON\\nREGULAX SS\\nREGULOID\\nREHYDRALYTE\\nRELACON LAX\\nRELACON-HC\\nRELACON-HC NR\\nRELADOR\\nRELAFEN\\nRELAGARD\\nRELAGESIC\\nRELAHIST-DM\\nRELASIN HC\\nRELASIN-HCX\\nRELAXAZONE\\nRELCOF\\nRELCOF C\\nRELCOF DN PE\\nRELCOF PE\\nRELENZA\\nRELHIST\\nRELIABLE GENTLE\\nRELION GLUCOSE\\nRELION RNOVOLIN\\nRELIONNOVOLIN 7030\\nRELIONNOVOLIN N\\nRELISTOR\\nRELPAX\\nRELURI\\nREMBRANDT\\nREME-T\\nREMEDY 4-IN-1\\nREMEDY 4-IN-1 BODY CLEANSER\\nREMEDY 4-IN-1 CLEANSING LOTION\\nREMEDY ANTIFUNGAL\\nREMEDY ZINC SKIN PROTECTANT\\nREMERGENT HQ\\nREMERON\\nREMERON SOLTAB\\nREMEVEN\\nREMICADE\\nREMINYL\\nREMODULIN\\nREMULAR\\nREMULAR-S\\nRENA-VITE\\nRENACIDIN\\nRENACIDIN IRRGIATION\\nRENAF\\nRENAGEL\\nRENAMIN 6.5\\nRENESE\\nRENESE-R\\nRENFLEXIS\\nRENITEC\\nRENO M-DIP\\nRENO-30\\nRENO-DIP\\nRENO-M-30\\nRENO-M-60\\nRENOCAL\\nRENOGRAFIN\\nRENOVA\\nRENOVIST\\nRENOVUE-65\\nRENOVUE-DIP\\nRENTAMINE\\nRENVELA\\nREOPRO\\nREPAN\\nREPATHA\\nREPHRESH PRO-B\\nREPLESTA\\nREPLESTA NX\\nREPREXAIN\\nREPREXAIN 10200\\nREPREXAIN 2.5200\\nREPREXAIN 5200\\nREPREXAIN 7.5200\\nREPRONEX\\nREQUIP\\nREQUIP 2-WEEK STARTER KIT\\nRESCON\\nRESCON JR\\nRESCON JR REFORMULATED FEB 2010\\nRESCON LIQUID\\nRESCON REFORMULATED JUL 2010\\nRESCON REFORMULATED JUN 2008\\nRESCON TABLETS\\nRESCON-DM\\nRESCON-GG\\nRESCON-MX\\nRESCON-MX REFORMULATED FEB 2009\\nRESCON-MX REFORMULATED JAN 2010\\nRESCON-MX REFORMULATED OCT 2006\\nRESCRIPTOR\\nRESCUDOSE\\nRESECTISOL\\nRESINOL\\nRESPA\\nRESPA 1ST\\nRESPA AR\\nRESPA C&C\\nRESPA DM\\nRESPA PE\\nRESPA-1ST\\nRESPA-A.R.M.\\nRESPA-BR\\nRESPA-GF\\nRESPAHIST\\nRESPAHIST II\\nRESPAIRE\\nRESPAIRE 120\\nRESPAIRE 30\\nRESPAIRE 60\\nRESPAIRE-120 SR\\nRESPAIRE-30\\nRESPAIRE-60 SR\\nRESPBID\\nRESPERAL\\nRESPERAL-DM DROPS\\nRESPI-TANN\\nRESPI-TANN G\\nRESPI-TANN PD\\nRESPIGAM\\nRESPIRAM\\nRESPIVENT\\nRESPIVENT DF DOSEPACK 10\\nRESPIVENT-D\\nREST SIMPLY\\nRESTALL\\nRESTASIS\\nRESTONE\\nRESTORIL\\nRETACRIT\\nRETAINE\\nRETAINE HPMC\\nRETAINE MGD\\nRETAINE PM\\nRETAVASE\\nRETIN A MICRO GEL\\nRETIN-A\\nRETISERT\\nRETRE-GEL\\nRETROVIR\\nREVATIO\\nREVERSOL\\nREVEX\\nREVIA\\nREVINA\\nREVITADERM WOUND CARE\\nREVIVE PLUS\\nREVLIMID\\nREVONTO\\nREXAVITE\\nREXOLATE\\nREXULTI\\nREYATAZ\\nREZAMID\\nREZINE\\nREZIRA\\nREZYST PROBIOTIC\\nRHEABAN MAXIMUM STRENGTH\\nRHEOMACRODEX\\nRHEUMATREX\\nRHEUMATREX DOSE PACK 12\\nRHEUMATREX DOSE PACK 16\\nRHEUMATREX DOSE PACK 2\\nRHEUMATREX DOSE PACK 20\\nRHEUMATREX DOSE PACK 24\\nRHEUMATREX DOSE PACK 28\\nRHEUMATREX DOSE PACK 3\\nRHEUMATREX DOSE PACK 32\\nRHEUMATREX DOSE PACK 4\\nRHEUMATREX DOSE PACK 5\\nRHEUMATREX DOSE PACK 6\\nRHEUMATREX DOSE PACK 7\\nRHEUMATREX DOSE PACK 8\\nRHINABID PD\\nRHINACLEAR DOSE PACK 10\\nRHINACON A\\nRHINACON DH\\nRHINAHIST\\nRHINALL\\nRHINARIS\\nRHINATATE\\nRHINOCAPS\\nRHINOCORT\\nRHINOCORT AQUA\\nRHINOFLEX\\nRHINOGESIC\\nRHINOLAR\\nRHINOSYN-DM\\nRHINOSYN-DMX\\nRHINOSYN-X\\nRHOFADE\\nRHOGAM\\nRHOPHYLAC\\nRHOPRESSA\\nRI-GEL II\\nRI-MAG\\nRI-MAG PLUS\\nRI-MOX\\nRI-MOX PLUS\\nRIASTAP\\nRIAX\\nRIBAPAK 1000MGDAY\\nRIBAPAK 1200MGDAY\\nRIBAPAK 800MGDAY\\nRIBASPHERE\\nRIBASPHERE RIBAPAK 1000\\nRIBASPHERE RIBAPAK 1200\\nRIBASPHERE RIBAPAK 600\\nRIBASPHERE RIBAPAK 800\\nRIBATAB\\nRIBATAB 1000 MGDAY COMPLIANCE PACK\\nRIBATAB COMPLIANCE PACK\\nRICOBID\\nRICOLA\\nRID\\nRID-A-PAIN\\nRIDACTATE\\nRIDAFED\\nRIDAURA\\nRIDENOL\\nRIDIFED\\nRIDIPRIN\\nRIDRAMIN\\nRIFADIN\\nRIFAMATE\\nRIFATER\\nRIGHTSTEP\\nRIGINIC\\nRILUTEK\\nRIMACTANE\\nRIMANTIDINE\\nRIMSO-50\\nRINATE\\nRINDAL HD PLUS\\nRINDAL HPD\\nRINDAL-HD\\nRIOMET\\nRIOPAN\\nRIOPAN PLUS\\nRIOPAN PLUS DOUBLE STRENGTH\\nRISAMINE\\nRISAQUAD\\nRISPAS\\nRISPERDAL\\nRISPERDAL M-TAB\\nRITALIN\\nRITALIN LA\\nRITALIN-SR\\nRITIFED\\nRITUXAN\\nRITUXAN HYCELA\\nRIVELSA 91 DAY\\nRIXUBIS\\nRMS\\nROBAFEN\\nROBAFEN AC\\nROBAFEN CF\\nROBAFEN CF REFORMULATED FEB 2008\\nROBAFEN COUGH\\nROBAFEN DM\\nROBAFEN PE\\nROBAFEN PEDIATRIC COUGH & COLD\\nROBALOG\\nROBAXIN\\nROBAXIN-750\\nROBAXISAL\\nROBICHEM\\nROBICHEM AC\\nROBICHEM DM\\nROBICHEM PE\\nROBIMYCIN\\nROBINUL\\nROBITET 500\\nROBITUSSIN\\nROBITUSSIN 12 HOUR COUGH RELIEF\\nROBITUSSIN AC\\nROBITUSSIN ALLERGY & COUGH\\nROBITUSSIN CHEST CONGESTION\\nROBITUSSIN CHILDREN\'S COUGH & COLD CF\\nROBITUSSIN CHILDREN\'S NIGHTTIME COUGH LONG-ACTING DM\\nROBITUSSIN COLD AND COUGH\\nROBITUSSIN COLD COUGH AND FLU\\nROBITUSSIN COUGH & COLD CF\\nROBITUSSIN COUGH & COLD CF MAX\\nROBITUSSIN COUGH & COLD CF TO GO\\nROBITUSSIN COUGH & COLD D\\nROBITUSSIN COUGH & CONGESTION\\nROBITUSSIN COUGH & CONGESTION DM MAX\\nROBITUSSIN COUGH AND COLD LONG-ACTING\\nROBITUSSIN COUGH CALMERS\\nROBITUSSIN COUGH DROP\\nROBITUSSIN COUGH GELS\\nROBITUSSIN DAC\\nROBITUSSIN DM\\nROBITUSSIN DM INFANT DROPS\\nROBITUSSIN DM TO GO\\nROBITUSSIN HEAD & CHEST CONGESTION\\nROBITUSSIN HONEY COUGH\\nROBITUSSIN HONEY FLU NIGHTTIME\\nROBITUSSIN HONEY FLU NON-DROWSY\\nROBITUSSIN LINGERING COLD LONG-ACTING COUGH\\nROBITUSSIN MAXIMUM STRENGTH\\nROBITUSSIN MAXIMUM STRENGTH COUGH & COLD\\nROBITUSSIN MAXIMUM STRENGTH COUGH PLUS CHEST CONGESTION DM\\nROBITUSSIN MEDI-SOOTHERS\\nROBITUSSIN MULTI-SYMPTOM\\nROBITUSSIN NIGHT COLD\\nROBITUSSIN NIGHT RELIEF\\nROBITUSSIN NIGHT TIME\\nROBITUSSIN NIGHT TIME COUGH & CHEST CONGESTIO\\nROBITUSSIN NIGHT TIME COUGH & CHEST CONGESTION\\nROBITUSSIN NIGHT TIME COUGH AND COLD\\nROBITUSSIN NIGHT TIME COUGH, COLD & FLU\\nROBITUSSIN NIGHTTIME COUGH DM\\nROBITUSSIN PEAK COLD DAYTIME COLD PLUS FLU\\nROBITUSSIN PEAK COLD MAXIMUM STRENGTH COUGH PLUS CHEST CONGESTION DM\\nROBITUSSIN PEAK COLD MAXIMUM STRENGTH MULTI-SYMPTOM COLD\\nROBITUSSIN PEAK COLD MULTI-SYMPTOM COLD\\nROBITUSSIN PEAK COLD NASAL\\nROBITUSSIN PEAK COLD NIGHTTIME COLD PLUS FLU\\nROBITUSSIN PEAK COLD NIGHTTIME MULTI-SYMPTOM COLD\\nROBITUSSIN PEAK COLD NIGHTTIME NASAL RELIEF\\nROBITUSSIN PEDIATRIC\\nROBITUSSIN PEDIATRIC COUGH & COLD\\nROBITUSSIN PEDIATRIC COUGH & COLD LA\\nROBITUSSIN PEDIATRIC COUGH & COLD NIGHTTIME\\nROBITUSSIN PEDIATRIC COUGH AND DECONGESTANT\\nROBITUSSIN PEDIATRIC COUGH SUPPRESSANT\\nROBITUSSIN PEDIATRIC NIGHT RELIEF\\nROBITUSSIN PM\\nROBITUSSIN PM COUGH & COLD\\nROBITUSSIN SEVERE CONGESTION\\nROBITUSSIN-AC\\nROBITUSSIN-CF\\nROBITUSSIN-CF REFORMULATED FEB 2008\\nROBITUSSIN-DAC\\nROBITUSSIN-DM\\nROBITUSSIN-PE\\nROBITUSSIN-SF\\nROCALTROL\\nROCCAL\\nROCEPHIN\\nROFERON-A\\nROGAINE\\nROGAINE EXTRA STRENGTH\\nROHIST\\nROLAIDS\\nROLAIDS ADVANCED\\nROLAIDS MULTI-SYMPTOM\\nROLAIDS PLUS GAS RELIEF\\nROLAIDS REFORMULATED AUG 2006\\nROLAIDS SODIUM FREE\\nROLAIDS SOFTCHEWS\\nROLAIDS ULTRA STRENGTH\\nROLATUSS\\nROLATUSS WITH HYDROCODONE\\nROLATUSS-SR\\nROMAZICON\\nROMILAR AC\\nROMYCIN\\nRON ACID\\nRONDAMETH\\nRONDAMINE\\nRONDAMINE DM\\nRONDAMINE TR\\nRONDEC\\nRONDEC DM\\nRONDEC DM DROPS\\nRONDEC DROPS\\nRONDEC REFORMULATED FEB 2009\\nRONDEC-DM REFORMULATED FEB 2009\\nRONDEC-TR\\nRONDEX\\nRONDEX-DM\\nRONOXIDIL\\nROSAC\\nROSADAN\\nROSADERM\\nROSADERM CLEANSER\\nROSANIL\\nROSANIL CLEANSER\\nROSE HIPS C\\nROSULA\\nROSULA CLEANSER\\nROSULA NS\\nROTARIX\\nROTASHIELD\\nROTATEQ\\nROWASA\\nROWEEPRA\\nROXANOL\\nROXANOL UD\\nROXANOL-T\\nROXICET\\nROXICET 5325\\nROXICET 5500\\nROXICODONE\\nROXILOX\\nROXIPRIN\\nROXYBOND\\nROYMICIN\\nROZEREM\\nROZEX\\nRT CAPSIN\\nRU HIST D\\nRU HIST FORTE\\nRU TUSS DE\\nRU TUSS-DM\\nRU-TAB\\nRU-TUSS\\nRU-TUSS EXPECTORANT\\nRU-TUSS REFORMULATED AUG 2007\\nRU-TUSS WITH HYDROCODONE\\nRU-VERT-M\\nRUBRACA\\nRUBRAMIN PC\\nRUCONEST\\nRUFEN\\nRULOX\\nRULOX #1\\nRULOX #2\\nRULOX PLUS\\nRUM-K\\nRUTUSS\\nRUTUSS WITH HYDROCODONE\\nRX TRIAMCINOLONE\\nRX-ACT ALL DAY PAIN RELIEF\\nRX-ACT IBUPROFEN\\nRX-OTIC\\nRY-TANN\\nRY-TUSS\\nRYANODEX\\nRYBIX\\nRYDAPT\\nRYMED\\nRYMED-D\\nRYMED-TR\\nRYNA C\\nRYNA CX\\nRYNA LIQUID\\nRYNA-12\\nRYNA-12X\\nRYNA-C\\nRYNA-CX\\nRYNATAN\\nRYNATAN PEDIATRIC\\nRYNATAN PEDIATRIC CHEWABLE\\nRYNATAN PEDIATRIC REFORMULATED FEB 2008\\nRYNATAN-S PEDIATRIC\\nRYNATUSS\\nRYNESSA\\nRYNEX-DM\\nRYNEZE\\nRYTARY\\nRYTHMOL\\nRYTHMOL SR\\nRYVENT\\nRYZODEG\\nRYZOLT', '\\n'), com.fc.JavaScriptDistLib.TextLib.textSplitWith('S-2\\nS-PACK\\nS-PACK DM\\nS-PAK DM\\nS-T FEBROL\\nS-T FORTE\\nS-T FORTE 2\\nS.O.S.S.\\nSABRIL\\nSAFE TUSSIN 30\\nSAFEGUARD ANTIBACTERIAL LIQUID\\nSAFETUSSIN CD\\nSAFETUSSIN DM\\nSAFETUSSIN PM\\nSAFYRAL 28 DAY\\nSAIZEN\\nSAL-ACID PLASTERS\\nSAL-PLANT GEL\\nSAL-TROPINE\\nSALAC\\nSALACTIC FILM\\nSALACYN\\nSALAGEN\\nSALAZOPYRIN\\nSALETO\\nSALETO-200\\nSALETO-400\\nSALETO-600\\nSALETO-800\\nSALETO-D\\nSALEX\\nSALFLEX\\nSALINEX\\nSALINOCAINE\\nSALITOP\\nSALIVASURE\\nSALJET\\nSALKERA\\nSALONPAS\\nSALONPAS DEEP RELIEVING\\nSALONPAS GEL-PATCH\\nSALONPAS MASSAGE FOAM\\nSALONPAS PAIN RELIEF PATCH\\nSALONPAS PAIN RELIEVING PATCH\\nSALONPAS SPRAY\\nSALONSIP AQUA-PATCH\\nSALSITAB\\nSALTAIRE\\nSALURON\\nSALUTENSIN\\nSALUTENSIN-DEMI\\nSALVAX\\nSALVAX DUO\\nSALVAX DUO PLUS\\nSAMSCA\\nSAMSON 8\\nSANAFITIL\\nSANAFITIL ANTIFUNGAL\\nSANCTURA\\nSANCUSO\\nSANDIMMUNE\\nSANDOGLOBULIN\\nSANDOSTATIN\\nSANDOSTATIN LAR DEPOT\\nSANI-CLENS\\nSANI-SUPP\\nSANISUDS F-7250\\nSANO LOG\\nSANOREX\\nSANSERT\\nSANTYL\\nSAPHRIS\\nSARAFEM\\nSARAPIN\\nSARNA\\nSARNA SENSITIVE\\nSARNA ULTRA\\nSARNOL-HC\\nSASTID SOAP\\nSAVAYSA\\nSAVELLA\\nSAVELLA 4-WEEK TITRATION\\nSAXENDA\\nSAYMAN SALVE\\nSCALACORT\\nSCALACORT DK\\nSCALP-AID\\nSCALP-CORT\\nSCALPICIN ITCH RELIEF\\nSCALPICIN SCALP RELIEF\\nSCANDONEST\\nSCANDONEST L\\nSCHIFF\\nSCHIFF MOVE FREE\\nSCLAVO TEST-PPD\\nSCLERO SEAL\\nSCLEROMATE\\nSCLEROSOL\\nSCLROMATE\\nSCOPACE\\nSCOPOHIST-PE\\nSCOT TUSSIN ORIGINAL\\nSCOT-TUSSIN\\nSCOT-TUSSIN ALLERGY\\nSCOT-TUSSIN ALLERGY RELIEF FORMULA\\nSCOT-TUSSIN DIABETIC\\nSCOT-TUSSIN DIABETIC CF\\nSCOT-TUSSIN DM\\nSCOT-TUSSIN DM COUGH CHASERS\\nSCOT-TUSSIN SUGAR FREE DM\\nSCYTERA\\nSEA MIST\\nSEA SOFT\\nSEA-OMEGA\\nSEA-OMEGA 30\\nSEASONALE\\nSEASONALE 91 DAY\\nSEASONIQUE\\nSEB-PREV\\nSEB-PREV WASH\\nSEBA-GEL\\nSEBASORB\\nSEBEX\\nSEBIZON\\nSEBUCARE\\nSEBULEX\\nSEBULEX SHAMPOO\\nSEBULEX SHAMPOO WITH CONDITIONERS\\nSEBULON\\nSEBUTONE\\nSECONAL SODIUM\\nSECREFLO\\nSECRETIN-FERRING\\nSECTRAL\\nSECURA\\nSEDAPAP\\nSEEBRI\\nSEGLUROMET\\nSEL-PEN BLUE\\nSELDANE-D\\nSELE-PAK\\nSELEGILENE\\nSELEPEN\\nSELESTOJECT\\nSELFEMRA\\nSELRX\\nSELSEB\\nSELSUN\\nSELSUN BLUE\\nSELSUN BLUE 2 IN 1\\nSELSUN BLUE BALANCED TREATMENT\\nSELSUN BLUE MOISTURIZING TREATMENT\\nSELSUN BLUE NATURALS\\nSELSUN BLUE SENSITIVE SCALP\\nSELZENTRY\\nSEMICID CONTRACEPTIVE SUPPOSITORIES\\nSEMPREX-D\\nSENATEC\\nSENATEC HC\\nSENEXON\\nSENEXON S\\nSENIOR MOMENT\\nSENIORTOPIX HEALIX\\nSENNA LAX\\nSENNA PLUS\\nSENNA S\\nSENNA SOFT\\nSENNA-GEN\\nSENNA-RELIEF CHILDS\\nSENNA-TIME\\nSENNALAX\\nSENNALAX S\\nSENOKOT\\nSENOKOT CHILD\\nSENOKOT EXTRA\\nSENOKOT-S\\nSENOKOTXTRA\\nSENOLAX\\nSENORMIN\\nSENOSOL\\nSENOSOL-SS\\nSENOX\\nSENSI-CARE BODY\\nSENSI-CARE PROTECTIVE BARRIER\\nSENSIPAK\\nSENSIPAR\\nSENSITIVE EYES REDNESS RELIEVER\\nSENSODYNE\\nSENSODYNE ISO-ACTIVE\\nSENSORCAINE\\nSENSORCAINE WITH EPINEPHRINE\\nSENSORCAINE-MPF\\nSENSORCAINE-MPF WITH EPINEPHRINE\\nSENTRY HC HOTSPOT\\nSEPASOOTHE\\nSEPASOOTHE REFORMULATED APR 2011\\nSEPTA\\nSEPTI-SOFT\\nSEPTISOL\\nSEPTISOL FOAM\\nSEPTISOL NPD\\nSEPTOCAINE\\nSEPTRA\\nSEPTRA DS\\nSEPTRA I.V. INFUSION\\nSER-AP-ES\\nSERADEX\\nSERADEX LA\\nSERATHIDE\\nSERAX\\nSERENTIL\\nSEREVENT\\nSEREVENT DISKUS\\nSERNIVO\\nSEROMYCIN\\nSEROPHENE\\nSEROQUEL\\nSEROQUEL XR 14-DAY SAMPLE KIT\\nSEROSTIM\\nSERPAZIDE\\nSERPEX\\nSERUTAN\\nSERVIRA\\nSERZONE\\nSERZONE STARTER PACK\\nSETLAKIN 91 DAY\\nSEUDOTABS\\nSEVOFLUORANE SOUJOURN\\nSF 5000 PLUS\\nSHAROBEL 28 DAY\\nSHEER DESENZ\\nSHELLCAP\\nSHELLCAP PD\\nSHELLGEL\\nSHERI-B-12\\nSHINGRIX\\nSHUR-SEAL GEL\\nSIGNIFOR\\nSIKLOS\\nSIL TEX\\nSILACE\\nSILADRYL\\nSILADRYL DAS\\nSILADYL\\nSILADYL SA\\nSILAFED\\nSILAMINIC EXPECTORANT\\nSILAPAP\\nSILDEC\\nSILDEC DM\\nSILDEC DM REFORMULATED SEP 2007\\nSILDEC DROPS\\nSILDEC PE\\nSILDEC-PE DM SYRUP\\nSILENOR\\nSILFEDRINE\\nSILIQ\\nSILKA CREAM\\nSILPHEN\\nSILPHEN COUGH\\nSILPHEN DM\\nSILTANE\\nSILTUSS DAS\\nSILTUSSIN\\nSILTUSSIN DM\\nSILTUSSIN-DM\\nSILVADENE\\nSILVERA\\nSIMAAL GEL\\nSIMBRINZA\\nSIMCOR\\nSIMCOR 100020\\nSIMCOR 100040\\nSIMCOR 50020\\nSIMCOR 50040\\nSIMCOR 75020\\nSIMLIYA 28 DAY\\nSIMPESSE 91 DAY\\nSIMPLET\\nSIMPLY SALINE\\nSIMPLY SLEEP\\nSIMPONI\\nSIMRON\\nSIMUC\\nSIMUC-DM\\nSIMUC-HD\\nSIMULECT\\nSIN-U-SPAN\\nSINA-12X\\nSINAPAP\\nSINAPILS\\nSINAREST\\nSINAREST EXTRA STRENGTH\\nSINAREST NASAL\\nSINAREST SINUS\\nSINE-AID\\nSINE-AID IB\\nSINE-OFF COLD AND COUGH\\nSINE-OFF MAXIMUM STRENGTH\\nSINE-OFF MAXIMUM STRENGTH REFORMULATED SEP 2008\\nSINE-OFF SINUS AND COLD\\nSINEMET\\nSINEMET CR\\nSINEQUAN\\nSINEX\\nSINEX LONG-ACTING\\nSINEX NASAL SPRAY\\nSINEX ULTRA FINE MIST\\nSINGULAIR\\nSINODEC\\nSINOGRAFIN\\nSINUCON\\nSINUCON PEDIATRIC\\nSINUCOT\\nSINUFED\\nSINUFED TIMECELLES\\nSINUHIST\\nSINULIN\\nSINUMIST\\nSINUPAN\\nSINUS AID\\nSINUS MAXIMUM STRENGTH\\nSINUS RELIEF\\nSINUSON\\nSINUSON II\\nSINUSTAB\\nSINUTAB\\nSINUTAB EX-STRENGTH\\nSINUTAB MAXIMUM STRENGTH\\nSINUTAB NON DRYING\\nSINUTAB REGULAR STRENGTH\\nSINUTAB SINUS\\nSINUTUSS DM\\nSINUTUSS DM REFORMULATED FEB 2008\\nSINUVA\\nSINUVENT\\nSINUVENT PE\\nSIRTURO\\nSITAVIG\\nSITREX\\nSITREX REFORMULATED AUG 2007\\nSIVEXTRO\\nSKELAXIN\\nSKELEX\\nSKELID\\nSKLICE\\nSKYLA\\nSLEDGEHAMMER\\nSLEEP AID (DIPHENHYDRAMINE)\\nSLEEP AID (DOXYLAMINE)\\nSLEEP AID WITH APAP\\nSLEEP TAB II\\nSLEEP-ETTES\\nSLEEP-EZE\\nSLEEP-EZE-3\\nSLEEPINAL\\nSLO-BID GYROCAPS\\nSLO-NIACIN\\nSLO-PHYLLIN\\nSLO-PHYLLIN 250\\nSLO-PHYLLIN 80\\nSLO-PHYLLIN GG\\nSLO-PHYLLIN GYROCAPS\\nSLOAN\'S LINIMENT\\nSLOPRIN\\nSLOW FE WITH FOLIC ACID\\nSLOW-FE\\nSLOW-MAG\\nSLOW-MAG REFORMULATED FEB 2012\\nSLT\\nSMART SAN\\nSOAP SENSATIONS\\nSOCHLOR\\nSODIPHLUOR\\nSODIUM SULAMYD\\nSOJOURN\\nSOLAGE\\nSOLAQUIN FORTE\\nSOLARAZE\\nSOLARCAINE\\nSOLARCAINE AEROSOL\\nSOLARCAINE ALOE EXTRA BURN RELIEF\\nSOLARCAINE PLUS ALOE\\nSOLATENE\\nSOLESTA\\nSOLFOTON\\nSOLGANOL\\nSOLIA\\nSOLIA 28 DAY\\nSOLIQUA\\nSOLIRIS\\nSOLODYN\\nSOLOSEC\\nSOLOSTAR\\nSOLOTUSS\\nSOLOXIDE\\nSOLTAMOX\\nSOLU-CORTEF\\nSOLU-MEDROL\\nSOLU-PHYLLIN GG\\nSOLUCLENZ\\nSOLUREX\\nSOLUREX LA\\nSOMA\\nSOMA COMPOUND\\nSOMA COMPOUND WITH CODEINE\\nSOMATULINE\\nSOMAVERT\\nSOMBRA WARM PAIN RELIEVING GEL\\nSOMINEX\\nSOMINEX MAXIMUM STRENGTH\\nSOMINEX PAIN RELIEF FORMULA\\nSOMNICAPS\\nSOMNICIN\\nSOMNOTE\\nSONAHIST\\nSONAHIST DM\\nSONATA\\nSONIAZIO\\nSONORX\\nSOOLANTRA\\nSOOTHE & COOL MOISTURE BARRIER\\nSOOTHE & COOL POWDER\\nSOOTHE & COOL SKIN PASTE\\nSOOTHE CAPLETS\\nSOOTHE CHEWABLE\\nSOOTHE MAXIMUM STRENGTH\\nSOOTHE MINERAL OIL\\nSOOTHE NIGHT TIME\\nSOOTHE REGULAR STRENGTH\\nSOOTHE-IT PLUS\\nSORBET\\nSORBITRATE\\nSORBUTUSS\\nSORE THROAT SPRAY-CHERRY\\nSORE THROAT SPRAY-MENTHOL\\nSORIATANE\\nSORILUX\\nSORINE\\nSOTRADECOL\\nSOTRET\\nSOTYLIZE\\nSOVALDI\\nSP RX 228\\nSPACOL\\nSPACOL TABLET\\nSPACOL TS\\nSPANTUSS HD\\nSPARINE\\nSPASDEL\\nSPASMOLIN\\nSPASQUID\\nSPASTOLATE\\nSPASTRIN\\nSPEC-T\\nSPEC-T SORE THROATCOUGH SUPPRESSANT\\nSPEC-T SORE THROATDECONGESTANT\\nSPECIAL C\\nSPECTAZOLE\\nSPECTRACEF\\nSPECTROCIN PLUS\\nSPECTRUM-4\\nSPHERULIN\\nSPHERUSOL\\nSPINRAZA\\nSPIRIVA\\nSPIRONO\\nSPIRONOLACTONE PLUS\\nSPORANOX\\nSPORANOX PULSEPAK\\nSPORANOX-PULSE\\nSPORTS PAIN RELIEF RUB\\nSPORTSCREME\\nSPRAYZOIN\\nSPRINTEC\\nSPRINTEC 28 DAY\\nSPRITAM\\nSPRIX\\nSPRYCEL\\nSPS\\nSRC EXPECTORANT\\nSRONYX\\nSRONYX 28 DAY\\nSSD\\nSSD AF\\nSSD RP\\nST-37\\nST. JOSEPH ADULT CHEWABLE ASPIRIN\\nST. JOSEPH ASPIRIN\\nST. JOSEPH ASPIRIN ADULT EC\\nST. JOSEPH ASPIRIN-FREE\\nST. JOSEPH COUGH SUPPRESSANT\\nSTABEC\\nSTADOL\\nSTAFLEX\\nSTAGESIC\\nSTAGESIC 10250\\nSTAGESIC-10\\nSTAHIST\\nSTAHIST AD\\nSTAHIST AD LIQUID\\nSTAHIST REFORMULATED APR 2013\\nSTALEVO\\nSTAMARIL\\nSTAMOIST E\\nSTAMOIST E 60045\\nSTAMOIST LA\\nSTANBACK HEADACHE POWDER\\nSTANBACK HEADACHE POWDER REFORMULATED JAN 2011\\nSTANGARD\\nSTANIMAX GEL\\nSTANIMAX PERIO RINSE\\nSTANLEY-LINCTUS\\nSTANLEY-SYRUP\\nSTAPHASEPTIC\\nSTAPHCILLIN\\nSTAR-OTIC\\nSTARLIX\\nSTATICIN\\nSTATOBEX\\nSTATROL\\nSTATUSS\\nSTATUSS DM\\nSTATUSS GREEN\\nSTATUSS GREEN REFORMULATED JAN 2012\\nSTAVZOR\\nSTAXYN\\nSTAY ALERT\\nSTAY AWAKE\\nSTEGLATRO\\nSTEGLUJAN\\nSTELARA\\nSTELAZINE\\nSTENDRA\\nSTERAPRED\\nSTERAPRED 5 MG 12 DAY UNI-PAK\\nSTERAPRED 5 MG UNI-PAK\\nSTERAPRED DS\\nSTERAPRED DS 12 DAY UNI-PAK\\nSTERAPRED DS UNI-PAK\\nSTERAPRED DS UNI-PAK 12 DAY\\nSTERAPRED DS UNI-PAK 6 DAY\\nSTERAPRED UNI-PAK 12 DAY\\nSTERAPRED UNI-PAK 6 DAY\\nSTERIL-EYES\\nSTERILUBE\\nSTERITALC\\nSTEROFORM\\nSTILPHOSTROL\\nSTIMATE\\nSTING-KILL\\nSTINGEZE FOR KIDS\\nSTINGEZE W CAMPHOR\\nSTIOLTO\\nSTIVARGA\\nSTOMACH RELIEF\\nSTOMACH RELIEF EXTRA STRENGTH\\nSTOMAX\\nSTOOL SOFTENER PLUS\\nSTOOL-LAX\\nSTOP LICE MAXIMUM STRENGTH\\nSTOPAIN\\nSTOPAIN EXTRA STRENGTH\\nSTRATTERA\\nSTRATTERA 10182540 KIT\\nSTRATTERA 18254060 KIT\\nSTRATTERA 25406080 KIT\\nSTRAWBERRY C\\nSTRENSIQ\\nSTREPTASE\\nSTRESS BISMUTH SUBSALICYLATE\\nSTRESS LIQUID\\nSTRESS MAXIMUM STRENGTH\\nSTRI-DEX\\nSTRI-DEX CLEAR GEL\\nSTRI-DEX FACE WASH\\nSTRIANT\\nSTRIBILD\\nSTRIDEX\\nSTRIDEX ESSENTIAL\\nSTRIFON FORT\\nSTRIVERDI\\nSTRIX\\nSTROMECTOL\\nSTRONG CAPS\\nSTYE\\nSTYPTOCAINE\\nSTYPTSTIX\\nSU-TUSS HD\\nSU-TUSS HD ELIXIR\\nSUAVE MEN 2 IN 1\\nSUBLIMAZE\\nSUBLOCADE\\nSUBOXONE\\nSUBOXONE 20.5\\nSUBOXONE 82\\nSUBSYS\\nSUBSYS 1200 MCG\\nSUBSYS 1600 MCG\\nSUBUTEX\\nSUBVENITE\\nSUBVENITE BLUE (FOR PATIENTS TAKING VALPROATE)\\nSUBVENITE GREEN (FOR PATIENTS TAKING CARBAMAZEPINE, PHENYTOIN, PHENOBARBITAL, OR PRIMIDONE AND NOT TAKING VALPROATE)\\nSUBVENITE ORANGE (FOR PATIENTS NOT TAKING CARBAMAZEPINE, PHENYTOIN, PHENOBARBITAL, PRIMIDONE, OR VALPROATE)\\nSUCLEAR\\nSUCLOR\\nSUCRAID\\nSUCRETS\\nSUCRETS DM\\nSUCRETS ORIGINAL\\nSUDA-TUSSIN DM\\nSUDAFED\\nSUDAFED 12-HOUR\\nSUDAFED CHILD COLD & COUGH\\nSUDAFED CHILD NASAL DECONGESTANT\\nSUDAFED COLD AND COUGH LIQUICAPS\\nSUDAFED COLD AND SINUS\\nSUDAFED COUGH\\nSUDAFED COUGH SYRUP\\nSUDAFED NON DRYING SINUS\\nSUDAFED OM\\nSUDAFED PE\\nSUDAFED PE CHILDREN\'S COLD & COUGH\\nSUDAFED PE CHILDREN\'S NASAL DECONGESTANT\\nSUDAFED PE COLD & COUGH\\nSUDAFED PE DAY & NIGHT COLD\\nSUDAFED PE DAY & NIGHT TABLET\\nSUDAFED PE DAY PLUS NIGHT SINUS CONGESTION KIT\\nSUDAFED PE NIGHTTIME COLD\\nSUDAFED PE NIGHTTIME DECONGESTANT\\nSUDAFED PE NON-DRYING SINUS\\nSUDAFED PE PRESSURE PLUS PAIN PLUS COUGH\\nSUDAFED PE PRESSURE PLUS PAIN PLUS MUCUS\\nSUDAFED PE PRESSURE, PAIN & COLD\\nSUDAFED PE SEVERE COLD\\nSUDAFED PE SINUS & ALLERGY\\nSUDAFED PE SINUS CONGESTION PLUS ALLERGY\\nSUDAFED PE SINUS HEADACHE\\nSUDAFED PE TRIPLE ACTION\\nSUDAFED PLUS\\nSUDAFED SEVERE COLD\\nSUDAFED SINUS\\nSUDAFED SINUS & ALLERGY\\nSUDAFED SINUS & PAIN\\nSUDAFED SINUS HEADACHE\\nSUDAFED SINUS NIGHTTIME\\nSUDAFED SINUS NIGHTTIME PLUS PAIN RELIEF\\nSUDAFED TRIPLE ACTION\\nSUDAHIST\\nSUDAL 12\\nSUDAL 120600\\nSUDAL 60500\\nSUDAL DM\\nSUDAL SR\\nSUDATEX\\nSUDATUSS 2 DF\\nSUDATUSS DM\\nSUDATUSS SF\\nSUDEX\\nSUDO-TAB\\nSUDODRIN\\nSUDOGEST\\nSUDOGEST PE\\nSUDOGEST PLUS\\nSUDOGEST SINUS & ALLERGY\\nSUDOGEST SINUS MAXIMUM STRENGTH\\nSUDRINE\\nSUFENTA\\nSULAR\\nSULF-10\\nSULF-15\\nSULFAC\\nSULFAC 10%\\nSULFACET SODIUM\\nSULFACET-R\\nSULFALAX CALCIUM\\nSULFAMAG\\nSULFAMYLON\\nSULFATOL\\nSULFATRIM\\nSULFAZIN\\nSULFAZINE\\nSULFIMYCIN\\nSULFIX CLEANSER\\nSULFO-LO\\nSULFOAM\\nSULFORCIN\\nSULFOXYL\\nSULMASQUE\\nSULPHO-LAC\\nSULSTER\\nSULTRIN TRIPLE SULFA\\nSULZEE\\nSUMADAN WASH\\nSUMAVEL\\nSUMAVEL DOSEPRO\\nSUMAXIN\\nSUMMER\'S EVE MEDICATED\\nSUMMERS EVE ANTI-ITCH\\nSUMTAN\\nSUMYCIN\\nSUNBALANCE\\nSUNDROPS 77\\nSUNKIST VITAMIN C\\nSUNMARK ANTI-ITCH\\nSUP PAIN MED\\nSUPAC\\nSUPARTZ\\nSUPER C-500\\nSUPER CALCIUM\\nSUPER DOPHILUS\\nSUPERDENT\\nSUPERDENT HEMAL\\nSUPERFED\\nSUPHEDRIN\\nSUPHEDRIN SINUS\\nSUPHEDRINE\\nSUPHEDRINE PLUS\\nSUPHENAMINE\\nSUPHENAMINE-SR\\nSUPHERA\\nSUPPRELIN\\nSUPRAMINE\\nSUPRANE\\nSUPRAX\\nSUPRED\\nSUPRENZA\\nSUPREP BOWEL PREP KIT\\nSUR-Q-LAX\\nSURE COMFORT\\nSURELAC\\nSURFAK STOOL SOFTENER\\nSURFAXIN\\nSURMONTIL\\nSURPASS\\nSURPASS EXTRA STRENGTH\\nSURVANTA\\nSURVANTA INTRATRACHEAL\\nSUS-PHRINE INJECTION\\nSUSPEN\\nSUSTAIRE\\nSUSTIVA\\nSUSTOL\\nSUTAN DM\\nSUTAN SUSPENSION\\nSUTAN-DM\\nSUTENT\\nSUTTAR\\nSUTTAR 2\\nSWAN (PHARMACOLOGIC SUBSTANCE)\\nSWEET-EASE\\nSWIM EAR\\nSWISS KRISS\\nSYEDA 28 DAY\\nSYLATRON\\nSYLLACT\\nSYLLAMALT\\nSYLVANT\\nSYMADINE\\nSYMAX\\nSYMAX SL\\nSYMAX SR\\nSYMBICORT\\nSYMBICORT 1604.5\\nSYMBICORT 804.5\\nSYMBIOFLOR\\nSYMBIOFLOR I\\nSYMBYAX\\nSYMDEKO 4-WEEK\\nSYMFI\\nSYMFI LO\\nSYMJEPI\\nSYMLIN\\nSYMLINPEN\\nSYMMETREL\\nSYMMETRY\\nSYMPAK\\nSYMPAK DM\\nSYMPAK II\\nSYMPAK PDX\\nSYMPROIC\\nSYMTAN\\nSYMTAN A\\nSYMTUZA\\nSYN-RX\\nSYN-RX DM\\nSYNAGIS\\nSYNALAR\\nSYNALGOS-DC\\nSYNAPRYN\\nSYNAREL\\nSYNDROS\\nSYNERA\\nSYNERCID\\nSYNJARDY\\nSYNOVACIN\\nSYNRIBO\\nSYNTHROID\\nSYNTOCINON\\nSYNVISC\\nSYNVISC-ONE\\nSYPRINE\\nSYREX\\nSYSTANE\\nSYSTANE BALANCE\\nSYSTANE COMPLETE\\nSYSTANE NIGHTTIME\\nSYSTANE OVERNIGHT THERAPY\\nSYSTANE ULTRA\\nSYTOBEX', '\\n'), com.fc.JavaScriptDistLib.TextLib.textSplitWith('T KOFF\\nT TANNA DM\\nT- KOFF\\nT-ATHLETE\\nT-DIET\\nT-GESIC\\nT-PAINOL\\nT-PAINOL EXTRA STRENGTH\\nT-PANOL\\nT-STAT\\nT-TUSSIN\\nT-TUSSIN DM\\nT-TUSSIN PE\\nTAB-PROFEN\\nTABLOID\\nTAC\\nTAC 3\\nTACARYL\\nTACE\\nTACE (BRAND NAME)\\nTACHOSIL\\nTACLONEX\\nTACTINAL\\nTAFINLAR\\nTAGAMET\\nTAGAMET HB\\nTAGRISSO\\nTAKE ACTION\\nTALACEN\\nTALADINE\\nTALTZ\\nTALWIN\\nTALWIN COMPOUND\\nTALWIN LACTATE\\nTALWIN NX\\nTAMBOCOR\\nTAMIFLU\\nTANABID DA\\nTANAC LIQUID\\nTANAC REFORMULATED DEC 2010\\nTANACOF DM\\nTANACOF XR\\nTANAFED\\nTANAFED DM\\nTANAFED DMX\\nTANAFED DP\\nTANAHIST-D\\nTANAHIST-PD\\nTANAMINE\\nTANDEM\\nTANDEM F\\nTANDEM OB\\nTANDEM PLUS\\nTANDUR DM\\nTANNATE 12 S\\nTANNATE DMP-DEX\\nTANNATE-12 SUSP\\nTANNI-HIST 12\\nTANNI-HIST 12 RF\\nTANNIC-12\\nTANNIC-12 S\\nTANORAL\\nTANZEUM\\nTAPAZOLE\\nTAPERDEX 12 DAY TAPER\\nTAPERDEX 6 DAY TAPER\\nTARA-8\\nTARABINE PFS\\nTARCEVA\\nTARGADOX\\nTARGINIQ\\nTARGRETIN\\nTARGRETIN TOPICAL\\nTARINA FE 120 28 DAY\\nTARKA\\nTARKA 1240\\nTARKA 2180\\nTARKA 2240\\nTARKA 4240\\nTARSUM\\nTARSUM REFORMULATED\\nTASIGNA\\nTASMAR\\nTAVALISSE\\nTAVIST\\nTAVIST ALLERGY\\nTAVIST ALLERGYSINUSHEADACHE\\nTAVIST NIGHTTIME ALLERGY\\nTAVIST NON-SEDATING\\nTAVIST SINUS\\nTAVIST-1\\nTAVIST-D\\nTAVIST-DA\\nTAXADONE\\nTAXOTERE\\nTAYTULLA 28 DAY\\nTAZICEF\\nTAZORAC\\nTAZTIA\\nTDS FORTE\\nTE ANATOXAL BERNA\\nTEARGEN\\nTEARGEN II\\nTEARISOL\\nTEARS AGAIN\\nTEARS AGAIN EYE DROPS\\nTEARS AGAIN HYDRATE\\nTEARS AGAIN MC EYE DROPS\\nTEARS AGAIN OINTMENT\\nTEARS NATURALE\\nTEARS NATURALE FORTE\\nTEARS NATURALE PM\\nTEARS RENEWED\\nTEBAMIDE\\nTEBAMIDE PEDIATRIC\\nTECENTRIQ\\nTECFIDERA\\nTECFIDERA 30-DAY STARTER PACK\\nTECHNIVIE\\nTECNU FIRST AID\\nTECZEM\\nTEDRIGEN\\nTEFLARO\\nTEGISON\\nTEGOPEN\\nTEGRETOL\\nTEGRETOL XR\\nTEGRIN MEDICATED\\nTEGRIN-LT LICE SPRAY\\nTEGRIN-LT SHAMPOO\\nTEKAMLO\\nTEKRAL\\nTEKTURNA\\nTEKTURNA HCT\\nTEKTURNA HCT 15012.5\\nTEKTURNA HCT 15025\\nTEKTURNA HCT 30012.5\\nTEKTURNA HCT 30025\\nTELADAR\\nTELDRIN\\nTELDRIN HBP\\nTEMARIL\\nTEMODAR\\nTEMOVATE\\nTEMPRA\\nTEMPRA 1\\nTEMPRA 2\\nTEMPRA 3\\nTEMPRA QUICKLETS\\nTEN-K\\nTENAR DM\\nTENAR PSE\\nTENCET\\nTENCON\\nTENEX\\nTENIVAC\\nTENORETIC\\nTENORMIN\\nTENUATE\\nTENUATE DOSPAN\\nTEPADINA\\nTEPANIL\\nTEQUIN\\nTEQUIN TEQPAQ\\nTERA GEL\\nTERAMINE\\nTERAMINE ER\\nTERAZOL 3\\nTERAZOL 7\\nTERBINEX\\nTERMENE\\nTEROCIN\\nTERRA-CORTRIL\\nTERRAMYCIN\\nTERRAMYCIN IM\\nTERRAMYCIN WITH POLYMYXIN B SULFATE\\nTERRELL\\nTERSI FOAM\\nTESSALON\\nTESSALON PERLES\\nTESTA SPAN\\nTESTAMONE-100\\nTESTIM\\nTESTODERM\\nTESTOLIN\\nTESTOMAR\\nTESTOPEL\\nTESTRADIOL\\nTESTRED\\nTESTRO\\nTESTRO AQ\\nTESTRO-L.A.\\nTETCAINE\\nTETRA 500\\nTETRA-IDE\\nTETRA-MAG\\nTETRACAP\\nTETRACON\\nTETRASINE\\nTETRASINE EX\\nTETRAVISC\\nTETTERINE\\nTEV TROPIN\\nTEVA-CC\\nTEVETEN\\nTEVETEN HCT\\nTEXACORT\\nTGEL\\nTGEL CONDITIONER\\nTHALITONE\\nTHALOMID\\nTHE ITCH ERASER SENSITIVE\\nTHE MAGIC BULLET\\nTHEO G\\nTHEO-24\\nTHEO-DUR SPRINKLE\\nTHEO-SAV\\nTHEO-TIME\\nTHEO-X\\nTHEOBID\\nTHEOCAP\\nTHEOCHRON\\nTHEOCLEAR\\nTHEOCLEAR-80\\nTHEOCON\\nTHEOCON ELIXIR\\nTHEODRINE\\nTHEODUR\\nTHEOLAIR\\nTHEOLATE\\nTHEOMAR G.G.\\nTHEOMAX\\nTHEOMAX DF\\nTHEOPHYLL-GG\\nTHEOSOL-80\\nTHEOSPAN\\nTHEOSPECT\\nTHEOVENT\\nTHERA TEARS\\nTHERA-D\\nTHERA-FLUR-N\\nTHERA-GESIC\\nTHERA-GESIC PLUS\\nTHERA-SAL\\nTHERACRAN\\nTHERACYS\\nTHERAFLU\\nTHERAFLU COLD & COUGH\\nTHERAFLU COLD & COUGH STRIP\\nTHERAFLU COLD & SORE THROAT\\nTHERAFLU COLD & SORE THROAT REFORMULATED SEP 2008\\nTHERAFLU DAYTIME SEVERE COLD\\nTHERAFLU DAYTIME SEVERE COLD & COUGH\\nTHERAFLU FLU & CHEST CONGESTION\\nTHERAFLU FLU & SORE THROAT\\nTHERAFLU FLU & SORE THROAT REFORMULATED SEP 2008\\nTHERAFLU FLU AND COLD MEDICINE POWDER\\nTHERAFLU MAX-D\\nTHERAFLU MULTI SYMPTOM\\nTHERAFLU NIGHT COUGH AND COLD AND FLU\\nTHERAFLU NIGHTIME MAXIMUM STRENGTH\\nTHERAFLU NIGHTTIME MAXIMUM STRENGTH\\nTHERAFLU NIGHTTIME SEVERE COLD\\nTHERAFLU NIGHTTIME SEVERE COLD & COUGH\\nTHERAFLU NIGHTTIME SEVERE COLD CAPSULE\\nTHERAFLU NIGHTTIME SEVERE COLD TABLET\\nTHERAFLU NO DROWSINESS MAXIMUM STRENGTH\\nTHERAFLU SEVERE COLD & CONGESTION NON-DROWSY\\nTHERAFLU SEVERE COLD & COUGH DAYTIME NIGHTTIME POWDER\\nTHERAFLU SEVERE COLD NIGHTTIME\\nTHERAFLU SINUS\\nTHERAFLU SORE THROAT MAXIMUM STRENGTH\\nTHERAFLU VAPOR STICK\\nTHERAFLU WARMING COLD & CHEST CONGESTION\\nTHERAFLU WARMING RELIEF\\nTHERAFLU WARMING SEVERE COLD\\nTHERAFLU WARMING SEVERE COLD NIGHTTIME\\nTHERAFLU, FLU, COLD, AND COUGH\\nTHERAHIST\\nTHERAMYCIN\\nTHERAMYCIN Z\\nTHERAPLEX T\\nTHERAPLEX Z\\nTHERASEAL HAND PROTECTION\\nTHERASTAT\\nTHERATEARS\\nTHERATEARS NUTRITION\\nTHEREVAC PLUS\\nTHEREVAC-SB\\nTHERMAZENE\\nTHERMOTABS\\nTHEROXIDE\\nTHIOLA\\nTHIOPLEX\\nTHIOSULFIL FORTE\\nTHORACOL\\nTHORAZINE\\nTHORAZINE SPANSULE CAPSULES\\nTHREAMINE DM\\nTHREOSTAT\\nTHRIVE\\nTHROAT SPRAY-CHERRY\\nTHROMBATE\\nTHROMBATE III\\nTHROMBIN-JMI\\nTHROMBINAR\\nTHROMBOGEN\\nTHROMBOSTAT\\nTHYBINE\\nTHYMOGLOBULIN\\nTHYROGEN\\nTHYROLAR\\nTHYROSAFE\\nTHYROSHIELD\\nTHYROX\\nTI-PLEX\\nTIADYLT\\nTIAMATE\\nTIAZAC\\nTIBSOVO\\nTICAR\\nTICE BCG\\nTICLID\\nTICON\\nTIGAN\\nTIGAN ADULT\\nTIGAN PEDIATRIC\\nTIGER BALM\\nTIGER BALM LINIMENT\\nTIGER BALM MUSCLE RUB\\nTIGER BALM PAIN RELIEVING\\nTIJA\\nTIKOSYN\\nTILADE\\nTILIA FE\\nTIME HIST QD\\nTIMENTIN\\nTIMOLIDE\\nTIMOPTIC\\nTIMOPTIC IN OCUDOSE\\nTIMOPTIC-XE\\nTIN-BEN\\nTINACTIN\\nTINACTIN JOCK ITCH\\nTINADERM\\nTINASPORE\\nTINDAMAX\\nTINEACIDE ANTIFUNGAL\\nTINEACIDE ANTIFUNGAL REFORMULATED JUN 2013\\nTING\\nTING AF\\nTIROSINT\\nTIROSINT 0.013\\nTIROSINT 0.025\\nTIROSINT 0.05\\nTIROSINT 0.075\\nTIROSINT 0.088\\nTIROSINT 0.1\\nTIROSINT 0.112\\nTIROSINT 0.125\\nTIROSINT 0.137\\nTIROSINT 0.15\\nTIS-U-SOL\\nTISSEEL\\nTISSEEL VH\\nTITRALAC\\nTITRALAC PLUS\\nTITRALAC PLUS LIQUID\\nTIVICAY\\nTIVORBEX\\nTL GARD RX\\nTL-DEX DM\\nTL-HIST CD\\nTL-HIST CM\\nTL-HIST DM\\nTNKASE\\nTOBI\\nTOBI PODHALER DAILY KIT\\nTOBI PODHALER KIT\\nTOBI PODHALER WEEKLY KIT\\nTOBRADEX\\nTOBRAFLEX\\nTOBRALCON\\nTOBRASOL\\nTOBREX\\nTOFRANIL\\nTOFRANIL-PM\\nTOL-TAB\\nTOLAK\\nTOLECTIN\\nTOLINASE\\nTOLNATE\\nTOLU-SED DM\\nTOMYCINE\\nTONOCARD\\nTOOTSWEET\\nTOPAMAX\\nTOPAMAX SPRINKLE\\nTOPEX\\nTOPICAINE\\nTOPICAL HEMO-STAT\\nTOPICALE\\nTOPICALE GEL\\nTOPICALE XTRA\\nTOPICORT\\nTOPICORT LP\\nTOPICYCLINE\\nTOPIRAGEN\\nTOPISULF\\nTOPOSAR\\nTOPROL\\nTOPROL-XL\\nTORADOL\\nTORECAN\\nTORISEL\\nTORNALATE\\nTOTACILLIN\\nTOTACILLIN-N\\nTOTAL ALLERGY\\nTOTECT\\nTOUJEO\\nTOURO ALLERGY\\nTOURO CC\\nTOURO DM\\nTOURO EX\\nTOURO HC\\nTOURO LA\\nTOURO LA 525120\\nTOVIAZ\\nTPN ELECTROLYTES\\nTRAC TABS 2X\\nTRACLEER\\nTRACRIUM\\nTRADJENTA\\nTRAHIST\\nTRAMACORT\\nTRAMACORT-D\\nTRAMALGIN\\nTRANCOPAL\\nTRANCOT\\nTRANDATE\\nTRANQUIL NIGHTTIME SLEEP AID\\nTRANS-VER-SAL\\nTRANSANOSIL\\nTRANSDERM NITRO\\nTRANSDERM SCOP\\nTRANSIDERM-NITRO\\nTRANXENE\\nTRANXENE-SD\\nTRANZAREL\\nTRASYLOL\\nTRAVASE\\nTRAVASOL 10\\nTRAVASOL 5.5\\nTRAVATAN\\nTRAVEL-EASE\\nTRAVEL-EZE\\nTRAVEL-WISE\\nTREAGAN\\nTREANDA\\nTRECATOR\\nTRECATOR-SC\\nTRELEGY\\nTRELSTAR\\nTRELSTAR DEPOT\\nTRELSTAR LA\\nTREMFYA\\nTRENTAL\\nTRESIBA\\nTRETIN X\\nTRETTEN\\nTREXALL\\nTREXBROM\\nTREXBROM REFORMULATED JUN 2011\\nTREXIMA\\nTREXIMET\\nTREZIX\\nTRI BIOZENE\\nTRI FED X\\nTRI FEMYNOR 28 DAY\\nTRI LEVLEN\\nTRI VENT DM\\nTRI VENT DPC\\nTRI VENT HC\\nTRI-BUFFERED ASPIRIN\\nTRI-CHLOR\\nTRI-DEC\\nTRI-ESTARYLLA 28 DAY\\nTRI-HIST PEDIATRIC\\nTRI-HYDROSERPINE\\nTRI-K\\nTRI-KORT\\nTRI-LEGEST 28\\nTRI-LEGEST 28 DAY\\nTRI-LEVLEN 28 DAY\\nTRI-LINYAH\\nTRI-LO- ESTARYLLA 28 DAY\\nTRI-LO-MARZIA 28-DAY\\nTRI-LO-MILI\\nTRI-LO-SPRINTEC 28 DAY\\nTRI-LUMA\\nTRI-MED\\nTRI-MILI 28 DAY\\nTRI-NASAL\\nTRI-NEFRIN\\nTRI-NORINYL 28 DAY\\nTRI-OTIC\\nTRI-P ORAL INFANT DROPS\\nTRI-PAK\\nTRI-PASE\\nTRI-PHEN-CHLOR\\nTRI-PHEN-CHLOR PEDIATRIC\\nTRI-PHEN-MINE\\nTRI-PHEN-MINE PEDIATRIC\\nTRI-PREVIFEM 28 DAY\\nTRI-PSEUDO\\nTRI-SPRINTEC 28 DAY\\nTRI-STATIN\\nTRI-STATIN II\\nTRI-SUDO\\nTRI-TANNATE\\nTRI-TANNATE PEDIATRIC\\nTRI-TANNATE PLUS\\nTRI-VI-SOL\\nTRI-VI-SOL WITH IRON\\nTRI-VYLIBRA 28 DAY\\nTRI-ZEL\\nTRIAC COLD & COUGH\\nTRIAC EXPECTORANT\\nTRIACET\\nTRIACIN\\nTRIACIN C\\nTRIACTIN\\nTRIACTIN DM\\nTRIACTIN EXPECTORANT\\nTRIACTIN SYRUP\\nTRIACTING\\nTRIAD\\nTRIAFED\\nTRIAFED & CODEINE\\nTRIALL\\nTRIAM\\nTRIAM-A\\nTRIAM-FORTE\\nTRIAMCOT\\nTRIAMINIC\\nTRIAMINIC A.M.\\nTRIAMINIC A.M. COUGH AND DECONGESTANT\\nTRIAMINIC ALLERCHEWS\\nTRIAMINIC ALLERGY\\nTRIAMINIC ALLERGY CONGESTION\\nTRIAMINIC AM\\nTRIAMINIC CHEST & NASAL CONGESTION\\nTRIAMINIC CHEST CONGESTION\\nTRIAMINIC CHEST CONGESTION REFORMULATED NOV 2006\\nTRIAMINIC CHILDREN\'S MULTI-SYMPTOM FEVER COLD\\nTRIAMINIC COLD AND ALLERGY\\nTRIAMINIC COLD AND ALLERGY REFORMULATED JAN 2014\\nTRIAMINIC COLD AND ALLERGY REFORMULATED MAR 2007\\nTRIAMINIC COLD AND COUGH\\nTRIAMINIC COLD AND FEVER\\nTRIAMINIC COLD SYRUP\\nTRIAMINIC COUGH\\nTRIAMINIC COUGH & RUNNY NOSE\\nTRIAMINIC COUGH & RUNNY NOSE SOFTCHEWS\\nTRIAMINIC COUGH & SORE THROAT\\nTRIAMINIC COUGH & SORE THROAT REFORMULATED JUL 2007\\nTRIAMINIC COUGH AND CONGESTION\\nTRIAMINIC DAY TIME COLD & COUGH\\nTRIAMINIC DECONGESTANT\\nTRIAMINIC DM\\nTRIAMINIC EXPECTORANT\\nTRIAMINIC EXPECTORANT DH\\nTRIAMINIC EXPECTORANT WITH CODEINE\\nTRIAMINIC FEVER & PAIN\\nTRIAMINIC INFANT DROPS\\nTRIAMINIC INFANT DROPS REFORMULATED NOV 2010\\nTRIAMINIC LONG ACTING COUGH\\nTRIAMINIC LONG-ACTING COUGH & COLD\\nTRIAMINIC MULTI-SYMPTOM FEVER\\nTRIAMINIC MULTI-SYMPTON\\nTRIAMINIC NIGHT TIME\\nTRIAMINIC NIGHT TIME COLD & COUGH\\nTRIAMINIC SOFTCHEW\\nTRIAMINIC SOFTCHEW COLD AND ALLERGY\\nTRIAMINIC SOFTCHEW COLD AND COUGH\\nTRIAMINIC SOFTCHEWS ALLERGY CONGESTION\\nTRIAMINIC SOFTCHEWS ALLERGY SINUS\\nTRIAMINIC SOFTCHEWS CHEST CONGESTION\\nTRIAMINIC SOFTCHEWS COUGH & SORE THROAT\\nTRIAMINIC SOFTCHEWS COUGH & SORE THROAT REFORMULATED JUL 2007\\nTRIAMINIC SORE THROAT\\nTRIAMINIC SORE THROAT FORMULA\\nTRIAMINIC THIN STRIPS COLD\\nTRIAMINIC THIN STRIPS COUGH\\nTRIAMINIC-D MULTI-SYMPTOM COLD\\nTRIAMINICIN\\nTRIAMINICIN REFORMULATED SEP 2008\\nTRIAMINICOL MULTI SYMPTOM COUGH AND COLD\\nTRIAMONIDE\\nTRIAMONIDE 40\\nTRIANEX\\nTRIANT-HC\\nTRIAVIL\\nTRIAVIL 102\\nTRIAVIL 104\\nTRIAVIL 252\\nTRIAVIL 254\\nTRIAVIL 504\\nTRIAZ\\nTRIAZ CLEANSER\\nTRIBAN\\nTRIBENZOR\\nTRIBIOTIC PLUS\\nTRIBLIDE\\nTRICHLOR FRESH PAK\\nTRICODENE FORTE\\nTRICODENE NN\\nTRICODENE PEDIATRIC\\nTRICODENE SUGAR FREE\\nTRICOLD\\nTRICOR\\nTRICOSAL\\nTRIDERM\\nTRIDESILON\\nTRIDIONE\\nTRIDRANE\\nTRIESENCE\\nTRIFED C\\nTRIFERIC\\nTRIGLIDE\\nTRIHEXANE\\nTRIHIBIT\\nTRIHIST CS\\nTRIHIST D\\nTRIHIST DM\\nTRIHIST-CS\\nTRIHIST-D\\nTRIKOF D\\nTRIKOF D REFORMULATED SEP 2008\\nTRILAFON\\nTRILEPTAL\\nTRILIPIX\\nTRILISATE\\nTRILOCORT\\nTRILOG\\nTRILONE\\nTRILYTE\\nTRIMAL DH\\nTRIMAZIDE\\nTRIMO SAN\\nTRIMO-SAN\\nTRIMOX\\nTRIMPEX\\nTRINALIN REPETABS TABLETS\\nTRINESSA 28 DAY\\nTRINESSA LO 28 DAY\\nTRINTELLIX\\nTRINTEX\\nTRIOFED\\nTRIONATE\\nTRIOSTAT\\nTRIOTANN\\nTRIOTANN PEDIATRIC\\nTRIOTANN-S\\nTRIOTANN-S PEDIATRIC\\nTRIOXIN\\nTRIPEDIA\\nTRIPHASIL 21 DAY\\nTRIPHASIL 28 DAY\\nTRIPHED\\nTRIPHENICOL\\nTRIPLE ANTIBIOTIC\\nTRIPLE ANTIBIOTIC PLUS\\nTRIPLE ANTIBIOTIC PLUS LIDOCAINE\\nTRIPLE ANTIBIOTIC PLUS PRAMOXINE\\nTRIPLE CARE ANTIFUNGAL\\nTRIPLE PASTE\\nTRIPLE PASTE AF\\nTRIPLE TANNATE PEDIATRIC\\nTRIPLE X PEDICULICIDE\\nTRIPLEFLEX\\nTRIPLEX AD\\nTRIPOHIST\\nTRIPOHIST D\\nTRIPOSED\\nTRIPTIFED\\nTRIPTODUR\\nTRIPTONE\\nTRISENOX\\nTRISOFED\\nTRISORALEN\\nTRISPEC DEX\\nTRISTOJECT\\nTRISUDRINE\\nTRITAL\\nTRITAL DM\\nTRITAL SR\\nTRITAN\\nTRITEC\\nTRITUSS\\nTRITUSS A\\nTRITUSS ER\\nTRIUMEQ\\nTRIVARIS\\nTRIVEEN\\nTRIVORA 28 DAY\\nTRIXAICIN\\nTRIXAICIN HP\\nTRIXENOX\\nTRIZIVIR\\nTROBICIN\\nTROCAINE\\nTROGARZO\\nTROKENDI\\nTRONOLANE\\nTRONOLANE ANESTHETIC\\nTRONOLANE SUPPOSITORIES\\nTRONOTHANE\\nTROPHAMINE\\nTROPHAMINE 10 %\\nTROPHAMINE 6 %\\nTROVAN\\nTROVAN IV\\nTROVANZITHROMAX COMPLIANCE PAK\\nTROXYCA\\nTRU-MICIN\\nTRUEPLUS GLUCOSE\\nTRUEPLUS GLUCOSE SHOT\\nTRULANCE\\nTRULICITY\\nTRUMENBA\\nTRUPHYLLINE\\nTRUSOPT\\nTRUVADA\\nTRUX-ADRYL\\nTRUXACAINE\\nTRUXADRYL\\nTRUXAZOLE\\nTRUXCILLIN-VK\\nTRUXICILLIN\\nTRUXOPHYLLIN\\nTRYSUL\\nTUBERSOL\\nTUBIZID\\nTUCKS\\nTUCKS CLEAR GEL\\nTUCKS FAST RELIEF\\nTUCKS HC\\nTUCKS HEMORRHOIDAL\\nTUCKS MEDICATED PADS\\nTUCKS SUPPOSITORIES\\nTUDORZA\\nTUINAL\\nTULANA\\nTUMS\\nTUMS 500\\nTUMS CHEWY DELIGHTS\\nTUMS DUAL ACTION\\nTUMS E-X\\nTUMS ULTRA\\nTUMS WITH GAS RELIEF\\nTUSAL\\nTUSANA D\\nTUSDEC HC\\nTUSGEN\\nTUSGEN PED BUBBLE GUM FLAVOR\\nTUSICOF\\nTUSNEL\\nTUSNEL C\\nTUSNEL CAPS\\nTUSNEL DIABETIC\\nTUSNEL DM PEDIATRIC\\nTUSNEL HC\\nTUSNEL PEDIATRIC\\nTUSNEL PEDIATRIC COUGH\\nTUSNEL REFORMULATED APR 2011\\nTUSS AX\\nTUSS DA\\nTUSS DM\\nTUSS HC\\nTUSS MINE DM\\nTUSS PD\\nTUSS S\\nTUSS TAN\\nTUSS-DS\\nTUSS-LA\\nTUSSADUR-HD\\nTUSSAFED\\nTUSSAFED EX\\nTUSSAFED-EX DROPS\\nTUSSAFED-HC\\nTUSSAFED-HCG\\nTUSSAFIN\\nTUSSAFIN LIQUID\\nTUSSALL\\nTUSSALL ER\\nTUSSAMINIC\\nTUSSANIL\\nTUSSAR\\nTUSSAR DM\\nTUSSAR SF\\nTUSSAR-2\\nTUSSBID\\nTUSSCIDIN\\nTUSSCIDIN DM\\nTUSSCIDIN PE\\nTUSSCOUGH DHC\\nTUSSEND\\nTUSSEND EXPECTORANT\\nTUSSEX\\nTUSSGEN\\nTUSSGEN EXPECTORANT\\nTUSSHISTINE CS\\nTUSSI ORGANIDIN 10100\\nTUSSI ORGANIDIN 10300\\nTUSSI ORGANIDIN DM 10100\\nTUSSI ORGANIDIN DM 10300\\nTUSSI PRES B\\nTUSSI PRES B REFORMULATED AUG 2011\\nTUSSI PRESS\\nTUSSI-12\\nTUSSI-12 SUSPENSION\\nTUSSI-12 TABLET\\nTUSSI-12D\\nTUSSI-12D S\\nTUSSI-BID\\nTUSSI-ORGANIDIN DM NR\\nTUSSI-ORGANIDIN DM-S NR\\nTUSSI-ORGANIDIN NR\\nTUSSI-ORGANIDIN-S NR\\nTUSSI-PRES\\nTUSSI-PRES PE\\nTUSSICAPS\\nTUSSICARE DH\\nTUSSICLEAR DH\\nTUSSIDEN C\\nTUSSIDEN DM\\nTUSSIDIN DM\\nTUSSIGON\\nTUSSIN\\nTUSSIN CF\\nTUSSIN CF COLD\\nTUSSIN CF COUGH\\nTUSSIN COUGH AND COLD\\nTUSSIN COUGH AND COLD MAXIMUM STRENGTH\\nTUSSIN DM\\nTUSSIN EXPECTORANT\\nTUSSIN PE\\nTUSSIN PEDIATRIC\\nTUSSIN PEDIATRIC COLD AND COUGH\\nTUSSIN V\\nTUSSINATE\\nTUSSIONEX\\nTUSSIONEX PENNKINETIC\\nTUSSIONEX PENNKINETIC ER\\nTUSSIPHEN DM\\nTUSSIREX\\nTUSSIREX SUGAR FREE\\nTUSSITAB\\nTUSSIVE HC\\nTUSSIZONE-12 RF\\nTUSSO C\\nTUSSO DF\\nTUSSO DM\\nTUSSO HC\\nTUSSO ZMR\\nTUSSO-C\\nTUSSO-DM\\nTUSSO-DMR\\nTUSSO-XR\\nTUSSO-ZR\\nTUSSPLEX\\nTUSSPLEX DM\\nTUSSTAT\\nTUSTAN\\nTUZISTRA\\nTWILITE\\nTWIN-K\\nTWINJECT\\nTWINRIX\\nTWO-DYNE\\nTWYNSTA\\nTYBOST\\nTYCOLENE\\nTYDEMY 28 DAY\\nTYGACIL\\nTYKERB\\nTYLAGESIC 3\\nTYLENOL\\nTYLENOL ALLERGY\\nTYLENOL ALLERGY COMPLETE MULTI-SYMPTOM DAY AND NIGHT\\nTYLENOL ALLERGY MULTI-SYMPTOM\\nTYLENOL ALLERGY MULTI-SYMPTOM NIGHTTIME\\nTYLENOL ALLERGY SINUS\\nTYLENOL ALLERGY SINUS CAPLET\\nTYLENOL ALLERGY SINUS NIGHTTIME\\nTYLENOL CHEST CONGESTION\\nTYLENOL CHILDREN\'S MULTI-SYMPTOM COLD PLUS\\nTYLENOL CHILDREN\'S PLUS COLD\\nTYLENOL CHILDREN\'S PLUS COLD & COUGH\\nTYLENOL CHILDREN\'S PLUS COLD REFORMULATED MAR 2013\\nTYLENOL CHILDREN\'S PLUS FLU\\nTYLENOL CHILDRENS PLUS COUGH & RUNNY NOSE\\nTYLENOL CHILDRENS PLUS COUGH & SORE THROAT\\nTYLENOL COLD\\nTYLENOL COLD & FLU SEVERE DAY TIME\\nTYLENOL COLD & FLU SEVERE NIGHTTIME\\nTYLENOL COLD AND FLU\\nTYLENOL COLD AND FLU NO DROWSINESS\\nTYLENOL COLD COMPLETE FORMULA\\nTYLENOL COLD DAY AND NIGHT CONVENIENCE PACK\\nTYLENOL COLD HEAD CONGESTION SEVERE\\nTYLENOL COLD INFANTS\\nTYLENOL COLD INFANTS REFORMULATED JUN 2007\\nTYLENOL COLD MULTI-SYMPTOM DAY AND NIGHT\\nTYLENOL COLD MULTI-SYMPTOM DAY AND NIGHT 1212\\nTYLENOL COLD MULTI-SYMPTOM DAY AND NIGHT 128\\nTYLENOL COLD MULTI-SYMPTOM DAY AND NIGHT 3624\\nTYLENOL COLD MULTI-SYMPTOM DAYTIME\\nTYLENOL COLD MULTI-SYMPTOM NIGHTTIME\\nTYLENOL COLD MULTI-SYMPTOM NIGHTTIME LIQUID\\nTYLENOL COLD MULTI-SYMPTOM SEVERE\\nTYLENOL COLD MULTI-SYMPTOM SEVERE DAYTIME\\nTYLENOL COLD NO DROWSINESS\\nTYLENOL COLD PLUS COUGH PLUS SORE THROAT\\nTYLENOL COLD RELIEF\\nTYLENOL COLD RELIEF NIGHTTIME\\nTYLENOL COLD SEVERE CONGESTION\\nTYLENOL COLD SEVERE CONGESTION NON-DROWSY\\nTYLENOL COUGH\\nTYLENOL COUGH & SORE THROAT NIGHT TIME\\nTYLENOL COUGH AND SORE THROAT DAYTIME\\nTYLENOL COUGH LIQUID WITH DECONGESTANT\\nTYLENOL EXTRA STRENGTH DAY AND NIGHT PACK\\nTYLENOL EXTRA STRENGTH DAY AND NIGHT VALUE PACK\\nTYLENOL EXTRA STRENGTH P.M.\\nTYLENOL FLU DAY AND NIGHT CONVENIENCE PACK GELCAP\\nTYLENOL FLU MAXIMUM STRENGTH\\nTYLENOL FLU MAXIMUM STRENGTH NIGHTTIME\\nTYLENOL FLU NIGHTTIME\\nTYLENOL INFANT\\nTYLENOL INFANTS COLD PLUS COUGH\\nTYLENOL INFANTS COLD PLUS COUGH REFORMULATED SEP 2008\\nTYLENOL NIGHTIME FLU GELCAP MAXIMUM STRENGTH\\nTYLENOL PM\\nTYLENOL PM EXTRA STRENGTH\\nTYLENOL SEVERE ALLERGY\\nTYLENOL SIMPLY COUGH\\nTYLENOL SIMPLY STUFFY\\nTYLENOL SINUS\\nTYLENOL SINUS CHILDRENS\\nTYLENOL SINUS CONGESTION & PAIN NIGHTTIME\\nTYLENOL SINUS CONGESTION AND PAIN DAY AND NIGHT\\nTYLENOL SINUS CONGESTION AND PAIN DAYTIME\\nTYLENOL SINUS CONGESTION AND PAIN SEVERE\\nTYLENOL SINUS CONGESTION DAYTIME\\nTYLENOL SINUS CONGESTION NIGHTTIME\\nTYLENOL SINUS DAY AND NIGHT CONVENIENCE PACK\\nTYLENOL SINUS DAY AND NIGHT CONVENIENCE PACK CAPLET\\nTYLENOL SINUS MAXIMUM STRENGTH\\nTYLENOL SINUS NIGHTTIME\\nTYLENOL SINUS SEVERE CONGESTION\\nTYLENOL SORE THROAT NIGHTTIME\\nTYLENOL WARMING COUGH & SORE THROAT NIGHTIME\\nTYLENOL WITH CODEINE\\nTYLENOL WITH CODEINE #2\\nTYLENOL WITH CODEINE #3\\nTYLENOL WITH CODEINE #4\\nTYLOPHEN\\nTYLOX\\nTYMLOS\\nTYPHIM VI\\nTYRODONE EXPECTORANT\\nTYSABRI\\nTYVASO\\nTYZEKA\\nTYZINE\\nTYZINE NASAL', '\\n'), com.fc.JavaScriptDistLib.TextLib.textSplitWith('U-CORT\\nU-KERA\\nU-LACTIN\\nU-TRI-LONE\\nUAA\\nUAD\\nUAD CAINE\\nUCERIS\\nUGESIC\\nULCEREASE\\nULESFIA\\nULORIC\\nULR-LA\\nULTACAN\\nULTANE\\nULTIVA\\nULTRA FRESH\\nULTRA FRESH P.M.\\nULTRA MIDE\\nULTRA MYLANTA CALCI TABS\\nULTRA TEARS\\nULTRABALANCE\\nULTRABROM\\nULTRABROM PD\\nULTRACAPS MT 20\\nULTRACEF\\nULTRACET\\nULTRALYTIC\\nULTRALYTIC 2\\nULTRAM\\nULTRAPRIN\\nULTRASAL\\nULTRASE\\nULTRASE MT 12\\nULTRASE MT 18\\nULTRASE MT 20\\nULTRAVATE\\nULTRAVATE PAC\\nULTRAVATE PAC CREAM\\nULTRAVATE X CREAM\\nULTRAVATE X OINTMENT\\nULTRAVIST\\nULTRESA\\nUMECTA\\nUMECTA PD\\nUNASYN\\nUNDELENIC\\nUNGUENTINE\\nUNGUENTINE MAXIMUM STRENGTH\\nUNGUENTINE PLUS\\nUNI ALL 12\\nUNI BRONCHIAL\\nUNI DECON\\nUNI HIST PDX\\nUNI MULTIHIST DM\\nUNI SALVE\\nUNI SERP\\nUNI TUSS DM\\nUNI TUSS HC\\nUNI TUSSIN CF\\nUNI TUSSIN PE\\nUNI-ACE\\nUNI-ACE CHILD\\nUNI-ANN\\nUNI-ANTACID\\nUNI-BUFF\\nUNI-CAL 500\\nUNI-CALM\\nUNI-CASE\\nUNI-CENNA\\nUNI-COF\\nUNI-COF EXPECTORANT\\nUNI-CORTROM\\nUNI-DUR\\nUNI-EASE\\nUNI-EASE PLUS\\nUNI-FED\\nUNI-FEMLAX\\nUNI-GUAIFEN 600300\\nUNI-HIST\\nUNI-HIST DM PEDIATRIC\\nUNI-HIST DM PEDIATRIC DROPS\\nUNI-HIST PDX DROPS\\nUNI-LAN\\nUNI-LAN II\\nUNI-LAXATIVE\\nUNI-LEV 5.0\\nUNI-MINT\\nUNI-MULTIHIST\\nUNI-MULTIHIST CS\\nUNI-MULTIHIST D\\nUNI-MULTIHIST D PED\\nUNI-MULTIHIST D SR\\nUNI-OTIC\\nUNI-PERR\\nUNI-PRO\\nUNI-SED\\nUNI-SED PLUS\\nUNI-SPORT\\nUNI-TANN\\nUNI-TANN CS\\nUNI-TANN D\\nUNI-TEX\\nUNI-TREN\\nUNI-TRICOF HC\\nUNI-TRIS\\nUNI-TUSSIN\\nUNI-TUSSIN DM\\nUNIFED\\nUNIFIBER\\nUNILAX\\nUNIPEN\\nUNIPHYL\\nUNIPRES\\nUNIRETIC\\nUNIRETIC 1512.5\\nUNIRETIC 1525\\nUNIRETIC 7.512.5\\nUNISERTS\\nUNISOM\\nUNISOM SLEEP\\nUNISOM SLEEPGELS MAXIMUM STRENGTH\\nUNISOM SLEEPMELTS\\nUNISOM WITH PAIN RELIEF\\nUNIT-HIST DROPS\\nUNIT-TEX\\nUNITHROID\\nUNITUXIN\\nUNIVASC\\nUPTRAVI\\nUPTRAVI TITRATION PACK\\nURALGIC\\nURAMAXIN\\nURAMIT\\nURAPINE\\nURBAN DS\\nURBAN TRADENAME\\nUREACIN-10\\nUREACIN-20\\nUREALAC\\nUREAPHIL\\nURECHOLINE\\nURELIEF\\nURELIEF PLUS\\nURELLE\\nURETRON\\nURETRON DS\\nUREX\\nURI-SEP SC\\nURIBEL\\nURICALM\\nURICALM INTENSIVE\\nURIDON MODIFIED\\nURIMAR REFORMULATED OCT 2013\\nURIMAR T\\nURIMAX\\nURIN DS\\nURINARY ANALGESIC\\nURISED\\nURISEDAMINE\\nURISPAS\\nURISTAT\\nURITACT\\nURITACT DS\\nURITACT-EC\\nURITIN\\nURL-TANNATE\\nURO BLUE\\nURO-BLUE\\nURO-JECT\\nURO-KP\\nURO-KP-NEUTRAL\\nURO-MAG\\nURO-PHOSPHATE\\nUROBIOTIC\\nUROBIOTIC-250\\nUROCIT-K\\nURODOL\\nUROGESIC\\nUROGESIC BLUE\\nUROGESIC BLUE REFORMULATED APR 2012\\nUROLENE BLUE\\nUROLET\\nUROLOGIC G\\nUROPHEN\\nUROPLUS\\nUROPLUS DS\\nUROQID-ACID NO.2\\nUROTROL\\nUROXATRAL\\nURSINUS\\nURSO\\nURSO FORTE\\nUSEPT\\nUSTELL\\nUTA CAPSULE\\nUTA CAPSULE REFORMULATED FEB 2016\\nUTAC\\nUTI RELIEF\\nUTIBRON\\nUTICAP\\nUTICORT\\nUTIRA\\nUTIRA-C\\nUTOPIC\\nUTRONA-C\\nUVADEX', '\\n'), com.fc.JavaScriptDistLib.TextLib.textSplitWith('V-CIL-K\\nV-CILLIN K\\nV-COF\\nV-GAN\\nV-GAN-25\\nV-GAN-50\\nV-HIST\\nV-LAX\\nV-TAN DM\\nV-TANN\\nV-TANN SUSPENSION\\nV.V.S.\\nVA DISCLOSING\\nVA-ZONE\\nVABOMERE\\nVAGI-GARD DOUCHE\\nVAGIFEM\\nVAGISIL MAXINUM STRENGTH\\nVAGISIL ORIGINAL FORMULA\\nVAGISIL WIPES\\nVAGISTAT\\nVAGISTAT 3 COMBINATION PACK\\nVAGISTAT 3 DAY COMBINATION PACK\\nVAGISTAT-1\\nVAGISTAT-3 COMBINATION PACK\\nVALCHLOR\\nVALCYTE\\nVALERGEN\\nVALERTEST\\nVALERTEST NO. 1\\nVALISONE\\nVALIUM\\nVALOMAG\\nVALORIN EXTRA\\nVALRELEASE\\nVALSTAR\\nVALTREX\\nVALTURNA\\nVALU-DRYL\\nVALU-DRYL TOPICAL\\nVALU-FOAM\\nVALU-TAPP SR\\nVALUMAG PLUS\\nVALUPHED\\nVALUPHED WITH ACTAMINE\\nVANACET\\nVANACHOL\\nVANACLEAR\\nVANACOF\\nVANACOF AC\\nVANACOF APE\\nVANACOF CDP\\nVANACOF DM\\nVANACOF DX\\nVANACOF G\\nVANACOF GPE\\nVANACOF-8\\nVANACOF-PE\\nVANACON\\nVANADOM\\nVANAHIST PD\\nVANAMIDE\\nVANAMINE\\nVANATAB\\nVANATAB AC\\nVANATAB DM\\nVANATOL\\nVANATRIP\\nVANCENASE\\nVANCENASE AQ\\nVANCENASE AQ DS\\nVANCERIL\\nVANCERIL DS\\nVANCOCIN\\nVANCOLED\\nVANCOMYCIN HYDROCHLORIDE NOVAPLUS\\nVANDAZOLE\\nVANEX\\nVANEX EXPECTORANT\\nVANEX FORTE\\nVANEX FORTE-D\\nVANEX FORTE-R\\nVANEX GRAPE\\nVANEX-HD\\nVANEX-LA\\nVANICREAM DIAPER RASH\\nVANIPLY\\nVANIQA\\nVANOS\\nVANOXIDE\\nVANOXIDE-HC\\nVANQUISH\\nVANSIL\\nVANSPAR\\nVANTAS\\nVANTIN\\nVAPOREX\\nVAPORUB\\nVAPORX BALM\\nVAPRISOL\\nVAQTA\\nVAQTA PEDIATRIC\\nVARITHENA\\nVARIVAX\\nVARIZIG\\nVARUBI\\nVASCEPA\\nVASCOR\\nVASELINE\\nVASERETIC\\nVASERETIC 10-25\\nVASERETIC 5-12.5\\nVASO DOSE PACK 10\\nVASO DOSE PACK 30\\nVASOCIDIN\\nVASOCLEAR\\nVASOCLEAR A\\nVASOCON\\nVASOCON-A\\nVASODILAN\\nVASOFLEX D1\\nVASOFLEX HD\\nVASOLEX\\nVASOSTRICT\\nVASOSULF\\nVASOTEC\\nVASOXYL\\nVAXCHORA\\nVAYACOG\\nVAYARIN\\nVAYAROL\\nVAZCULEP\\nVAZOBID\\nVAZOBID-PD\\nVAZOL\\nVAZOL D\\nVAZOTAB\\nVAZOTAB REFORMULATED DEC 2013\\nVAZOTAN\\nVAZOTUSS HC\\nVCF CONTRACEPTIVE\\nVECAMYL\\nVECTIBIX\\nVECTICAL\\nVECTRIN\\nVEETIDS\\nVELBAN\\nVELCADE\\nVELETRI\\nVELIVET 28 DAY\\nVELOSEF\\nVELOSULIN\\nVELPHORO\\nVELTASSA\\nVELTIN\\nVEMLIDY\\nVENASTAT\\nVENBID TR\\nVENCLEXTA\\nVENCLEXTA STARTING PACK\\nVENDONE\\nVENELEX\\nVENOFER\\nVENTAVIS\\nVENTOLIN\\nVENTOLIN HFA\\nVENTOLIN NEBULES\\nVENTOLIN ROTACAPS\\nVENTUSS\\nVERACOLATE\\nVERAMYST\\nVERAZINC\\nVERDESO\\nVERDROCET\\nVEREGEN\\nVERELAN\\nVERELAN PM\\nVERIPRED\\nVERMOX\\nVERSACLOZ\\nVERSED\\nVERSICLEAR\\nVERTICALM\\nVERV\\nVERZENIO\\nVESANOLD\\nVESICARE\\nVESPRIN\\nVESTURA\\nVETUSS HC SYRUP\\nVEXA\\nVEXOL\\nVFEND\\nVI Q TUSS\\nVI-ATRO\\nVI-SUDO\\nVIABECLINE\\nVIACTIV CALCIUM PLUS D\\nVIACTIV CALCIUM SOFT CHEWS\\nVIADUR\\nVIAGRA\\nVIBAL\\nVIBATIV\\nVIBERZI\\nVIBRA-TABS\\nVIBRAMYCIN\\nVIBRAMYCIN CALCIUM\\nVIBRAMYCIN MONOHYDRATE\\nVICKS 44 COLD & COUGH LIQUICAPS\\nVICKS 44 COLD, FLU AND COUGH\\nVICKS 44 COUGH MEDICINE\\nVICKS 44 COUGH RELIEF\\nVICKS 44D\\nVICKS 44D COUGH & HEAD CONGESTION\\nVICKS 44D PEDIATRIC\\nVICKS 44E\\nVICKS 44M PEDIATRIC\\nVICKS DAYQUIL MUCUS CONTROL\\nVICKS DAYQUILNYQUIL COLD & FLU RELIEF COMBO PACK\\nVICKS FORMULA 44\\nVICKS FORMULA 44 CUSTOM CARE CHESTY COUGH\\nVICKS FORMULA 44 CUSTOM CARE COUGH & COLD PM\\nVICKS FORMULA 44M\\nVICKS NATURE FUSION COLD AND FLU NIGHT\\nVICKS NATURE FUSION COUGH AND CHEST CONGESTION\\nVICKS NATURE FUSION COUGH AND FLU NIGHT\\nVICKS NYQUIL COUGH\\nVICKS PEDIATRIC FORMULA 44M\\nVICKS VAPODROPS\\nVICKS VAPORUB\\nVICKS VAPOSTEAM\\nVICKS VITAMIN C DROPS\\nVICOCLEAR\\nVICOCLEAR DH\\nVICODIN\\nVICODIN ES\\nVICODIN HP\\nVICODIN TUSS\\nVICOPROFEN\\nVICOTUSS\\nVICTOZA\\nVICTRELIS\\nVIDAZA\\nVIDEN\\nVIDEX\\nVIDEX EC\\nVIDONE\\nVIEKIRA PAK\\nVIEKIRA XR PAK\\nVIENVA 28 DAY\\nVIGADRONE\\nVIGAMOX\\nVIIBRYD\\nVIIBRYD 102040 30 DAY PACK\\nVIIBRYD STARTER PACK 1020 30 DAY PACK\\nVILOFANE\\nVIMIZIM\\nVIMOVO\\nVIMOVO 37520\\nVIMOVO 50020\\nVIMPAT\\nVIMPAT 2 WEEK STARTER KIT\\nVINCASAR\\nVINCASAR PFS\\nVIO-MOORE\\nVIO-TEX-HC\\nVIOKACE\\nVIOKASE\\nVIORELE 28 DAY\\nVIOXX\\nVIQUIN FORTE\\nVIRACEPT\\nVIRACTIN\\nVIRAMUNE\\nVIRASAL\\nVIRAVAN S\\nVIRAVAN-P\\nVIRAVAN-PDM\\nVIRAZOLE\\nVIREAD\\nVIRIDIUM\\nVIROPTIC\\nVIRORMONE INJECTION\\nVISCO-3\\nVISCOAT\\nVISICOL\\nVISICOL 3981102\\nVISINE\\nVISINE AC\\nVISINE ADVANCED RELIEF\\nVISINE DRY EYE RELIEF\\nVISINE L.R.\\nVISINE LONG LASTING\\nVISINE MAXIMUM REDNESS RELIEF\\nVISINE PURE TEARS\\nVISINE TEARS LONG LASTING DRY EYE\\nVISINE TIRED EYE RELIEF\\nVISINE TOTALITY\\nVISINE-A\\nVISION BLUE\\nVISION CLEAR\\nVISION EYE\\nVISIPAQUE\\nVISKEN\\nVISQID\\nVISQID AA\\nVISTACON\\nVISTACOT\\nVISTAJECT-50\\nVISTARIL\\nVISTAZINE\\nVISTIDE\\nVISTOGARD\\nVISTRA\\nVISTUSS\\nVISUDYNE\\nVISVEX HC\\nVITA #12\\nVITA NUMONYL\\nVITA-PLUS E NATURAL\\nVITA-RESPA\\nVITABEE 12\\nVITABEE WITH C\\nVITADYE\\nVITAFOL-ONE\\nVITAMIN C TR\\nVITAPAP\\nVITAZOL\\nVITEKTA\\nVITELLE IROSPAN\\nVITELLE NESTREX\\nVITRASE\\nVITRASERT\\nVITRAVENE\\nVITRAX\\nVITRON-C\\nVITRON-C REFORMULATED JUL 2016\\nVITUSSIN\\nVITUSSIN EXPECTORANT\\nVITUZ\\nVIVA-DROPS\\nVIVA-DROPS LUBRICATING EYE DROPS\\nVIVACAINE\\nVIVACTIL\\nVIVAGLOBIN\\nVIVARIN\\nVIVELLE\\nVIVELLE-DOT\\nVIVITROL\\nVIVLODEX\\nVIVOTIF\\nVOGELXO\\nVOLNEA 28 DAY\\nVOLTAREN\\nVOLTAREN OPHTHALMIC\\nVOLTAROL\\nVOLUVEN\\nVONTROL\\nVONVENDI\\nVOPAC\\nVORAXAZE\\nVOSEVI\\nVOSOL\\nVOSOL HC\\nVOSPIRE\\nVOTRIENT\\nVPRIV\\nVRAYLAR\\nVRAYLAR 1.53 MIXED PACK\\nVUSION\\nVYFEMLA 28 DAY\\nVYLIBRA 28 DAY\\nVYTONE\\nVYTORIN\\nVYVANSE\\nVYXEOS\\nVYZULTA', '\\n'), com.fc.JavaScriptDistLib.TextLib.textSplitWith('WAKESPAN\\nWAL ZYR 24 HOUR ALLERGY\\nWAL ZYR D\\nWAL-ACT\\nWAL-DRAM\\nWAL-DRAM 2\\nWAL-DRYL\\nWAL-DRYL ALLERGY\\nWAL-DRYL CHILDRENS\\nWAL-DRYL PE\\nWAL-DRYL SEVERE ALLERGY & SINUS\\nWAL-DRYL-D\\nWAL-DRYL-D ALLERGY\\nWAL-FEX\\nWAL-FEX D\\nWAL-FINATE\\nWAL-FINATE-D\\nWAL-FLU COLD AND SORE THROAT\\nWAL-FLU DAYTIME SEVERE COLD AND COUGH\\nWAL-FLU NIGHTTIME SEVERE COLD\\nWAL-FLU SEVERE COLD\\nWAL-FLU SEVERE COLD AND COUGH\\nWAL-FLU SEVERE COLD NIGHTTIME\\nWAL-FOUR\\nWAL-HIST 12 HR RELIEF\\nWAL-ITIN\\nWAL-ITIN D\\nWAL-MUCIL\\nWAL-PHED\\nWAL-PHED COLD & COUGH\\nWAL-PHED PE\\nWAL-PHED PE COLD & COUGH MULTI-SYMPTOM DAYTIME\\nWAL-PHED PE COLD MULTI-SYMPTOM NIGHTTIME\\nWAL-PHED PE COMBO PACK\\nWAL-PHED PE SEVERE COLD\\nWAL-PHED PE SINUS & ALLERGY\\nWAL-PHED PE SINUS HEADACHE\\nWAL-PHED PE TRIPLE RELIEF\\nWAL-PHED SINUS & ALLERGY\\nWAL-PROFEN\\nWAL-PROFEN COLD AND SINUS\\nWAL-PROFEN CONGESTION RELIEF AND PAIN\\nWAL-PROXEN\\nWAL-SLEEP Z\\nWAL-SOM\\nWAL-SOM (DOXYLAMINE)\\nWAL-SOM MAXIMUM STRENGTH\\nWAL-TAP CHILDREN\'S COLD & ALLERGY\\nWAL-TAP DM\\nWAL-TUSSIN CF\\nWAL-TUSSIN CHEST CONGESTION\\nWAL-TUSSIN CHILDREN\'S COUGH RELIEF\\nWAL-TUSSIN COLD & CONGESTION CAPSULE\\nWAL-TUSSIN COLD & FLU CAPSULE\\nWAL-TUSSIN COLD SEVERE CONGESTION CAPSULE\\nWAL-TUSSIN COUGH\\nWAL-TUSSIN COUGH & COLD\\nWAL-TUSSIN DM\\nWAL-TUSSIN DM MAX\\nWAL-VERT\\nWAL-ZAN\\nWAL-ZYR\\nWAL-ZYR ITCHY EYE\\nWALGREENS TARTAR CONTROL WHITENING\\nWARFAREN\\nWARFARING\\nWARFIN\\nWART AWAY\\nWART REMOVER\\nWART-OFF TREATMENT\\nWAYKUP\\nWE ALLERGY\\nWE MIST II LA\\nWE MIST LA\\nWEBCOL\\nWEHAMINE\\nWEHDRYL\\nWEHGEN V\\nWEHLESS\\nWEHLESS SR\\nWEIGHT LOSS SUBSTANCE\\nWELCHOL\\nWELLBUTRIN\\nWELLTUSS EXP\\nWELLTUSS HC\\nWERA 28 DAY\\nWESORBIDE\\nWEST-DECON\\nWEST-DECON M\\nWESTCORT\\nWESTHROID\\nWESTRIM\\nWESTRIM LA\\nWHISKCARE 357\\nWHITFIELD\'S OINTMENT\\nWIGRAINE\\nWILATE\\nWINRHO\\nWINRHO SDF\\nWOMANS LAX\\nWOMENS GENTLE LAXATIVE\\nWOMENS LAXATIVE\\nWOMENS TYLENOL MENSTRUAL RELIEF\\nWP THYROID\\nWYAMINE SULFATE INJECTION\\nWYCILLIN\\nWYDASE\\nWYGESIC\\nWYMOX\\nWYMZYA FE 28 DAY\\nWYTENSIN', '\\n'), com.fc.JavaScriptDistLib.TextLib.textSplitWith('X HIST\\nX HIST DM\\nX-HIST\\nX-HIST DM\\nX-PAIN RELIEF\\nX-PREP\\nX-SEB\\nX-SEB PLUS\\nX-SEB T PEARL\\nX-SEB T PLUS\\nX-VIATE\\nX-WAX\\nX-WAX EARWAX\\nXADAGO\\nXALATAN\\nXALIX\\nXALKORI\\nXANAX\\nXARELTO\\nXARELTO KIT\\nXARTEMIS\\nXATMEP\\nXEBCORT\\nXEDEC\\nXELJANZ\\nXELODA\\nXENADERM\\nXENAZINE\\nXENICAL\\nXEOMIN\\nXEPI\\nXERAC AC\\nXERESE\\nXERMELO\\nXGEVA\\nXHANCE\\nXIAFLEX\\nXIBROM\\nXIFAXAN\\nXIGDUO\\nXIGRIS\\nXIIDRA\\nXIMINO\\nXIRAHIST\\nXIRAHIST DM\\nXIRAHISTDM\\nXIRAL\\nXIRATUSS\\nXODOL\\nXOFIGO\\nXOLAIR\\nXOLEGEL\\nXOLEGEL COREPAK\\nXOLEGEL DUO\\nXOLEGEL DUO REFORMULATED OCT 2008\\nXOLEX\\nXOLIDO\\nXOLOX\\nXOPENEX\\nXOTEN\\nXOTEN-C\\nXPECT\\nXPECT HC\\nXPECT PE\\nXPECT-AT\\nXS NO ASPIRIN PR\\nXS PAIN RELIEVER\\nXTAMPZA\\nXTANDI\\nXTORO\\nXTRA-LAX\\nXULANE\\nXULTOPHY\\nXURIDEN\\nXYLAREX\\nXYLO-PFAN\\nXYLOCAINE\\nXYLOCAINE 10% ORAL\\nXYLOCAINE HCL\\nXYLOCAINE HCL FOR SPINAL\\nXYLOCAINE HCL WITH EPINEPHRINE\\nXYLOCAINE JELLY\\nXYLOCAINE TOPICAL\\nXYLOCAINE VISCOUS\\nXYLOCAINE WITH EPINEPHRINE\\nXYLOCAINE WITH EPINEPHRINE DENTAL CARTRIDGES\\nXYLOCAINE-MPF\\nXYLOCAINE-MPF-EPINEPHRINE\\nXYLOCARD\\nXYLON\\nXYNTHA\\nXYRALID\\nXYRALID RC KIT\\nXYREM\\nXYZAL', '\\n'), com.fc.JavaScriptDistLib.TextLib.textSplitWith('Y-COF DM\\nYASMIN\\nYASMIN 28 DAY\\nYAZ\\nYAZ 28 DAY\\nYEAST-X EXTERNAL\\nYEAST-X INT\\nYERVOY\\nYESCARTA\\nYF-VAX\\nYIERO-GOTA\\nYIERONIA\\nYOCON\\nYODOXIN\\nYOHIMAR\\nYOHIMEX\\nYOMAN\\nYONDELIS\\nYONSA\\nYOSPRALA\\nYOVITAL\\nYSP ASPIRIN\\nYUVAFEM', '\\n'), com.fc.JavaScriptDistLib.TextLib.textSplitWith('Z COF\\nZ TUSS\\nZ TUSS AC\\nZ TUSS DM\\nZ-BUM\\nZ-COF\\nZ-COF DM\\nZ-COF HC\\nZ-COF HCX\\nZ-DEX\\nZ-PAK\\nZ-PAK SAMPLE\\nZ-PRAM\\nZ-SLEEP\\nZ-TUSS AC\\nZ-TUSS E\\nZ-XTRA\\nZACARE 40.2\\nZACARE 80.2\\nZACLIR\\nZADITOR\\nZAGAM\\nZAGAM RESPIPAC\\nZALTRAP\\nZAMICET\\nZANAFLEX\\nZANOSAR\\nZANTAC\\nZANTAC 150\\nZANTAC 300\\nZANTAC 300 GELDOSE\\nZANTAC 75\\nZANTAC EFFERDOSE\\nZANTAC GELDOSE\\nZANTRYL\\nZAP BENZOCAINE TETRACAINE COMBINATION\\nZAP TOPICAL SOLUTION\\nZAPTEC\\nZAPTEC PSE\\nZAPZYT ACNE WASH\\nZARAH\\nZARONTIN\\nZAROXOLYN\\nZARTAN\\nZARXIO\\nZAVESCA\\nZAZOLE\\nZEASORB\\nZEASORB-AF\\nZEASORB-AF LOTIONPOWDER\\nZEBETA\\nZEBUTAL\\nZECUITY\\nZEFAZONE\\nZEFAZONE I.V.\\nZEGERID REFORMULATED AUG 2006\\nZEGERID WITH MAGNESIUM HYDROXIDE\\nZEJULA\\nZELAPAR\\nZELBORAF\\nZELNORM\\nZEMA PAK 10 DAY\\nZEMA PAK 13 DAY\\nZEMA PAK 6 DAY\\nZEMAIRA\\nZEMBRACE\\nZEMDRI\\nZEMPLAR\\nZEMURON\\nZENATANE\\nZENCHENT\\nZENCHENT 28 DAY\\nZENCHENT FE 28 DAY\\nZENCIA WASH\\nZENPEP\\nZENTRIP\\nZENZEDI\\nZEOSA 28 DAY\\nZEPATIER\\nZEPHIRAN\\nZEPHIRAN CHLORIDE\\nZEPHREX\\nZEPHREX-D\\nZEPRIME TAR EMULSION\\nZERBAXA\\nZERIT\\nZERLOR\\nZERO-ORDER RELEASE\\nZEROXIN\\nZERVALX\\nZESTORETIC\\nZESTRIL\\nZETACET\\nZETACET WASH\\nZETAR\\nZETIA\\nZETONNA\\nZETRAN\\nZFLEX\\nZGESIC\\nZHIST\\nZIAC\\nZIAC 106.25\\nZIAC 2.56.25\\nZIAC 56.25\\nZIAGEN\\nZIANA\\nZICAM COUGH\\nZICAM COUGH PLUS D\\nZICAM EXTREME CONGESTION RELIEF\\nZICAM FLU NIGHTTIME\\nZICAM SINUS RELIEF\\nZIKS PAIN RELIEF\\nZILACTIN\\nZILACTIN B\\nZILACTIN COLD SORE\\nZILACTIN-L\\nZILACTIN-L COLD SORE LIQUID\\nZILRETTA\\nZIMECTERIN\\nZINACEF\\nZINBRYTA\\nZINC GLUCONATE QUICK MELT\\nZINCA-PAK\\nZINCATE\\nZINCFRIN\\nZINCON\\nZINECARD\\nZINGO\\nZINOTIC\\nZINOTIC ES\\nZINPLAVA\\nZINX\\nZINX ALLERGY KIT\\nZINX CHLOR-D\\nZINX COLD KIT\\nZINX CONGESTION\\nZINX CONGESTION KIT\\nZINX D-TUSS\\nZINX KIDS SNEEZE KIT\\nZINX PCM\\nZIOPTAN\\nZIOX\\nZIPSOR\\nZIRGAN\\nZITHRANOL\\nZITHRANOL-RR\\nZITHROMAX\\nZMAX\\nZNP\\nZNP BAR\\nZOCOR\\nZODERM\\nZODERM 4.5\\nZODERM 4.510\\nZODERM 5.75\\nZODERM 5.7510\\nZODERM 6.5\\nZODERM 6.510\\nZODERM 8.5\\nZODERM 8.510\\nZODEX 12 DAY TAPER\\nZODEX 6 DAY TAPER\\nZODRYL\\nZODRYL AC\\nZODRYL AC 25\\nZODRYL AC 30\\nZODRYL AC 35\\nZODRYL AC 40\\nZODRYL AC 50\\nZODRYL AC 60\\nZODRYL AC 80\\nZODRYL DAC\\nZODRYL DAC 25\\nZODRYL DAC 30\\nZODRYL DAC 35\\nZODRYL DAC 40\\nZODRYL DAC 50\\nZODRYL DAC 60\\nZODRYL DAC 80\\nZODRYL DEC\\nZODRYL DEC 25\\nZODRYL DEC 30\\nZODRYL DEC 35\\nZODRYL DEC 40\\nZODRYL DEC 50\\nZODRYL DEC 60\\nZODRYL DEC 80\\nZOFRAN\\nZOFRAN ODT\\nZOHYDRO\\nZOLADEX\\nZOLINZA\\nZOLOFT\\nZOLPIMIST\\nZOLVIT\\nZOMACTON\\nZOMETA\\nZOMIG\\nZOMIG-ZMT\\nZONALON\\nZONATUSS\\nZONE-A\\nZONE-A FORTE\\nZONEGRAN\\nZONTIVITY\\nZOOBY FLUORIDE FOAM\\nZORBTIVE\\nZORCAINE\\nZORPRIN\\nZORTRESS\\nZORVOLEX\\nZOSTAVAX\\nZOSTRIX\\nZOSTRIX COLD THERAPY\\nZOSTRIX DIABETIC JOINT & ARTHRITIS PAIN RELIEF\\nZOSTRIX HOT AND COLD THERAPY SYSTEM\\nZOSTRIX JOINT & ARTHRITIS PAIN RELIEF\\nZOSTRIX SPORTS\\nZOSTRIX-HP\\nZOSYN\\nZOTEX\\nZOTEX C\\nZOTEX DM\\nZOTEX DMX\\nZOTEX EX\\nZOTEX GPX\\nZOTEX HC\\nZOTEX LA\\nZOTEX LAX\\nZOTEX PE\\nZOTEX-12\\nZOTEX-12D\\nZOTEX-C\\nZOTEX-D\\nZOTEX-GP\\nZOTO-HC\\nZOTO-HC DROPS\\nZOVIA 135\\nZOVIA 135E 28 DAY\\nZOVIA 150\\nZOVIA 150E 28 DAY\\nZOVIRAX\\nZOVIRAX COLD SORE\\nZTLIDO\\nZTUSS\\nZUBSOLV\\nZUMANDIMINE 28 DAY\\nZUPLENZ\\nZURAMPIC\\nZUTRIPRO\\nZYBAN\\nZYBAN ADVANTAGE PACK\\nZYBAN SR\\nZYCLARA\\nZYDELIG\\nZYDONE\\nZYDONE 10400\\nZYDONE 5400\\nZYDONE 5500\\nZYDONE 7.5400\\nZYFLO\\nZYFREL\\nZYKADIA\\nZYLET\\nZYLOPRIM\\nZYMAR\\nZYMASE\\nZYMAXID\\nZYMECOT\\nZYMINE\\nZYMINE D\\nZYMINE DXR\\nZYMINE HC\\nZYMINE XR\\nZYPITAMAG\\nZYPRAM\\nZYPREXA\\nZYPREXA ZYDIS\\nZYRPHEN\\nZYRTEC\\nZYRTEC ITCHY EYE\\nZYRTEC-D\\nZYTIGA\\nZYTOPIC\\nZYVOX\\nZZZQUIL', '\\n'), com.fc.JavaScriptDistLib.TextLib.textSplitWith('1 PLUS 1 F\\n10 BENZAGEL\\n12 HOUR COLD\\n12 HOUR NASAL TABLET\\n3M AVAGARD\\n4 FACE UP\\n4-WAY\\n4-WAY FAST ACTING\\n4-WAY FAST ACTING NASAL SPRAY\\n4-WAY MOISTURIZING\\n40 WINKS\\n5 BENZAGEL\\n5 FACE UP\\n60 SECOND TASTE\\n666 COLD PREPARATION\\n8-MOP', '\\n')];
    });
  }
  /**
   * Describe this function...
   */
  function reminderNavigation() {
    return new Promise(function(resolve, reject) {
      // Block#: ~}H9^I2T_XSV;+x+^F+~
      if(com.fc.JavaScriptDistLib.ListLibrary.listContains((com.fc.JavaScriptDistLib.Storage.getAllKeys()), 'email')) {
        // Block#: ~0=~ditArA^]%*9N*CbP
        _that.goToActivities = true;
        // Block#: wz-K=-I8K@.F*+D$1pMR
        _that.userID = (com.fc.JavaScriptDistLib.Storage.getValue('email'));
        // Block#: Nz~~56zvcfm2RRyqiEf3
        if(com.fc.JavaScriptDistLib.TextLib.textComparison(_that.currentScreen, "EQUAL", 'S21Pin')) {
          // Block#: kU6t6k_R#=ccCFZq?!mU
          S21UpdateScreen().then(response => {;
          });
        } else {
          // Block#: N-e^bF7GTycva-1!x*}J
          if(_that.isLoggedIn) {
            // Block#: t1?WYv.x?Gc9c)]soG:,
            startHomeProcessAtActivities().then(response => {;
            });
          } else {
            // Block#: vW#Zlwll9p*oFW%C(QB`
            _that.isLoggingIn = true;
            // Block#: 9m`o|sVAd#BE#A{IE2pw
            _that.S21FirstDisplay = true;
            // Block#: {tcC--wX]JtpYS,3`5;.
            let hideScreen = $('.HTML5-deploy-wrapper .Screen:visible');
            //Close all dialogs
            com.fc.JavaScriptDistLib.Screen.closeDialogs();
            hideScreen.hide();
            let showScreen = $('[obj-name="S21Pin"]');
            showScreen.show();
            history.pushState({
              'view': 'S21Pin'
            }, 'S21Pin', '?S21Pin');
            hideScreen.triggerHandler('hide');
            showScreen.triggerHandler('show');
          }
        }
      }
    });
  }
  /**
   * Describe this function...
   */
  function startForgotPasswordProcess() {
    return new Promise(function(resolve, reject) {
      // Block#: O:d1dWX-jm!-=G:Rs:=y
      if(_that.userID != null) {
        // Block#: 5/qvi,n@ueh@-c}sj,,N
        com.fc.JavaScriptDistLib.SnapClinical.configureAuthentication('{"api":{"url":"https://powermomstaging.snapclinical.net","username":"","password":"","userid":"","authentication":"Token Based Auth","lazyDeveloper":false,"frontEndKey":"mobileApp"}}');
        com.fc.JavaScriptDistLib.SnapClinical.snapClinicalConfigure('forgetfulUser', '4mn3s14C!', 'forgetfulUser', "mobileApp", "https://powermomstaging.snapclinical.net");
        // Block#: blJvcdUmyIvc[$(LeSl}
        _that.temp = com.fc.JavaScriptDistLib.Dictionary.createDictionary(['forceStartNewInstance', 'processVariables'], [true, [com.fc.JavaScriptDistLib.Dictionary.createDictionary(['name', 'scope', 'type', 'value'], ['email', 'local', 'string', _that.userID])]]);
        // Block#: W{!Zgi[iP;)7^]P.d=9K
        com.fc.JavaScriptDistLib.SnapClinical.startProcess(Object.assign(Object.assign({
            "forceStartNewInstance": false
          }, _that.temp), {
            "processDefinitionKey": 'PowerMomResetPinV1'
          }),
          function(process_data) {
            // Block#: %9y-eShMGVAQ0Igsyv){
            _that.currentTask = (com.fc.JavaScriptDistLib.JSON.parseJSONDataForPath(process_data, '$.tasks[0]'))[0];
            // Block#: #$mecb=]/*a_yNX7#MqB
            console.log(_that.currentTask);
            if(_that.debugService && _that.debugService.active) {
              _that.debugService.traces.push(_that.currentTask);
              _that.debugService.printLog();
            }
            // Block#: D!8S8VBMcmg.?uDlJ7$B
            determineNextPageToDisplay().then(response => {;
            });
          },
          function(error_data) {
            // Block#: s80n19R(xhQSoK8wJ,m`
            _that.pErrorData = error_data;
            // Block#: P~DxEK/1q5/HQD3dftzK
            $('[obj-name="L21Error"]').show(); // Block#: taU]1;WG|k]ug}(h;4a7
            com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("S21Pin", false); // Block#: k*[VYp5ekW%;3o|*UL0v
            com.fc.JavaScriptDistLib.Label.setProperty["Text"]("L21Error", 'User not found'); // Block#: WtoOb|LW#ByY[:Q_out8
            com.fc.JavaScriptDistLib.Clock.startTimer(com.fc.JavaScriptDistLib.Clock.createTimer(3, 1), function(timer) {
              // Block#: zaj~%O*oV*EDH`Q1B-~u
              let hideScreen = $('.HTML5-deploy-wrapper .Screen:visible');
              //Close all dialogs
              com.fc.JavaScriptDistLib.Screen.closeDialogs();
              hideScreen.hide();
              let showScreen = $('[obj-name="S1Intro"]');
              showScreen.show();
              history.pushState({
                'view': 'S1Intro'
              }, 'S1Intro', '?S1Intro');
              hideScreen.triggerHandler('hide');
              showScreen.triggerHandler('show');
            });
          });
      }
    });
  }
  /**
   * Describe this function...
   */
  function startSignUp() {
    return new Promise(function(resolve, reject) {
      // Block#: MJS`|dQ?|OEJPO}VGBs{
      com.fc.JavaScriptDistLib.SnapClinical.configureAuthentication('{"api":{"url":"https://powermomstaging.snapclinical.net","username":"","password":"","userid":"","authentication":"Token Based Auth","lazyDeveloper":false,"frontEndKey":"mobileApp"}}');
      com.fc.JavaScriptDistLib.SnapClinical.snapClinicalConfigure((String(com.fc.JavaScriptDistLib.FireBase.getUniqueDeviceId()) + String('@snapclinical.net')), 'P4ssw0RD$!', (String(com.fc.JavaScriptDistLib.FireBase.getUniqueDeviceId()) + String('@snapclinical.net')), "mobileApp", "https://powermomstaging.snapclinical.net");
      // Block#: 6ro=0kU=yICLtDb2mb-w
      com.fc.JavaScriptDistLib.Storage.add('resumeSignUpProcess', true) // Block#: R%kAX67yY^)oh$X0Mzb6
      startAccountSetUpFlow().then(response => {;
      });
    });
  }
  com.fc.JavaScriptDistLib.EventListeners.register("handleBackButton", "HealthDashboardLibrary",
    /**
     * Describe this function...
     */
    function handleBackButton() {
      return new Promise(function(resolve, reject) {
        // Block#: N~2Jba8BlP,97@h!L!AM
        if(!_that.buttonClicked) {
          // Block#: Fnz5LMy7/q6Xn0?_C=eJ
          _that.buttonClicked = true;
          // Block#: 2*0R?Mv1]S*-jn,`CwTB
          _that.returnError = saveTaskAndNext(getOutcomeName('B16Back'));
        }
      });
    }
  );
  /**
   * Describe this function...
   */
  function B12NextUpdate() {
    return new Promise(function(resolve, reject) {
      // Block#: ^GDZJ,}MFyZvPS@4qxOG
      if(_that.selectionMade) {
        // Block#: /u82qKwjbN@9W#y2I.ON
        com.fc.JavaScriptDistLib.Button.setProperty["Border color"]("B12Next", (com.fc.JavaScriptDistLib.ColourLibrary.getColourFromText('#dd198e'))); // Block#: zU[Tzd|Lza?[s]tdwqKM
        com.fc.JavaScriptDistLib.Button.setProperty["Background color"]("B12Next", (com.fc.JavaScriptDistLib.ColourLibrary.getColourFromText('#dd198e')));
      } else {
        // Block#: ^|T8+k,MP}$)JBb,^4IB
        com.fc.JavaScriptDistLib.Button.setProperty["Border color"]("B12Next", (com.fc.JavaScriptDistLib.ColourLibrary.getColourFromText('#f4badd'))); // Block#: Z5e(u?3P56y7ctZ=`?Ik
        com.fc.JavaScriptDistLib.Button.setProperty["Background color"]("B12Next", (com.fc.JavaScriptDistLib.ColourLibrary.getColourFromText('#f4badd')));
      }
    });
  }
  /**
   * Describe this function...
   */
  function getProcessVariable(id) {
    // Block#: l^K,Xq-~NY07V-xgw^5p
    if(_that.currentTask == null) {
      return null;
    }
    // Block#: `fr(HvI[1wt@YC*c4+LA
    _that.localVar1 = (com.fc.JavaScriptDistLib.JSON.parseJSONDataForPath(_that.currentTask, ['$.processVariables[?(@.name=="', id, '")].value'].join('')));
    // Block#: nnUGxa_$T7N1-5$o!uGX
    if(_that.localVar1 != null) {
      return _that.localVar1[0];
    }
    return null;
  }
  /**
   * Describe this function...
   */
  function getError() {
    // Block#: Ca@m]`75#RcD[X)5[8qt
    _that.currentProperty = getFormProperty('error');
    return com.fc.JavaScriptDistLib.TextLib.convertToText(_that.currentProperty);
  }
  /**
   * Describe this function...
   */
  function cleanUnusedVariables() {
    return new Promise(function(resolve, reject) {
      // Block#: Cq2gbGge`g?1Jc?Ccn6!
      _that.cleanedVariables = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.currentTask, 'processVariables'));
      // Block#: WaZRCjK(RODMAb7oEVA2
      com.fc.JavaScriptDistLib.Dictionary.setDictValue(_that.currentTask, 'processVariables', []);
    });
  }
  /**
   * Describe this function...
   */
  function B22NextUpdate() {
    return new Promise(function(resolve, reject) {
      // Block#: LEeq`[3cqyZ$n4!C!l4~
      if(_that.selectionMade) {
        // Block#: d+nso*WlH6K`yAs{G95c
        com.fc.JavaScriptDistLib.Button.setProperty["Background color"]("B22Next", (com.fc.JavaScriptDistLib.ColourLibrary.getColourFromText('#dd198e')));
      } else {
        // Block#: ~;yh|H^Uo#Va4D7doR?F
        com.fc.JavaScriptDistLib.Button.setProperty["Background color"]("B22Next", (com.fc.JavaScriptDistLib.ColourLibrary.getColourFromText('#f4badd')));
      }
    });
  }
  /**
   * Describe this function...
   */
  function startAccountSetUpFlow() {
    return new Promise(function(resolve, reject) {
      // Block#: _afxHy(`MFQRISVioVZ%
      startNewProcessInstance('PowerMomAccountSetUp', false).then(response => {;
        if(response.name === "error") {
          // Block#: S33puH-aGa/pSZ4wAS@a
          console.log(response.data);
          if(_that.debugService && _that.debugService.active) {
            _that.debugService.traces.push(response.data);
            _that.debugService.printLog();
          }
          // Block#: VIX;fTjlmvcOZM:%PR^i
          _that.buttonClicked = true;
          // Block#: 3Y0Dks,^(jn+|+(L#C;2
          createAccount().then(response => {;
          });
        }
      });
    });
  }
  /**
   * TODO: fields should be addressed through their id and not as an array!!!
   */
  function setFormFieldByMapKey(mapKey, property, value) {
    // Block#: C08Vj%Y=4KaC_1~Xg*8S
    if(doesFieldExistInMap(mapKey)) {
      // Block#: w,1y.q]!!/_tUB1DFgu?
      _that.localVar1 = (com.fc.JavaScriptDistLib.JSON.parseJSONDataForPath(_that.currentTask, ['$.formProperties[?(@.id=="outcomeAndFieldMapping")].enumValues[?(@.name=="', mapKey, '")].id'].join('')));
      // Block#: jfp-Be^q$sE5E2mUgp[4
      _that.localVar1 = _that.localVar1[0];
      // Block#: 54#]g,{49Sk39#TIfl+E
      _that.localVar1 = com.fc.JavaScriptDistLib.TextLib.textReplace('field', '', _that.localVar1);
      // Block#: uwk0YulVX_~kAyfc*bA~
      _that.localIndex = (com.fc.JavaScriptDistLib.MathLibrary.toNumber(_that.localVar1)) - 1;
      // Block#: 4/qzG,D_J|uXzTVfcPFw
      _that.localFormData = (com.fc.JavaScriptDistLib.JSON.parseJSONDataForPath(_that.currentTask, '$.formData'))[0];
      // Block#: 8H5s]dr,o0ICwd$Vt}+V
      _that.localFormFields = (com.fc.JavaScriptDistLib.JSON.parseJSONDataForPath(_that.currentTask, '$.formData.fields[*]'));
      // Block#: u+W+6/^:`$nv~}C6f]nN
      _that.localVar1 = _that.localFormFields[_that.localIndex];
      // Block#: y4ycqo+cm`QEBg9(J.de
      com.fc.JavaScriptDistLib.Dictionary.setDictValue(_that.localVar1, 'value', value);
      // Block#: tox|igfXFLr7RWLAAID3
      _that.localFormFields[_that.localIndex] = _that.localVar1;
      // Block#: Zd~-NE(~w5[hMtrTz5R,
      com.fc.JavaScriptDistLib.Dictionary.setDictValue(_that.localFormData, 'fields', _that.localFormFields);
      // Block#: ?Amh`S1uNM9+u;gH[^jM
      com.fc.JavaScriptDistLib.Dictionary.setDictValue(_that.currentTask, 'formData', _that.localFormData);
    }
  }
  /**
   * Describe this function...
   */
  function startHomeProcessAtActivities() {
    return new Promise(function(resolve, reject) {
      // Block#: AGMi3Dvb2vtP@3eW++V(
      com.fc.JavaScriptDistLib.SnapClinical.startProcess(Object.assign(Object.assign({
          "forceStartNewInstance": false
        }, com.fc.JavaScriptDistLib.Dictionary.createDictionary(['forceStartNewInstance', 'processVariables'], [true, [com.fc.JavaScriptDistLib.Dictionary.createDictionary(['name', 'value'], ['goToActivities', true]), com.fc.JavaScriptDistLib.Dictionary.createDictionary(['name', 'value'], ['timezone', getTimezone()])]])), {
          "processDefinitionKey": 'PowerMomHomeProcessV1'
        }),
        function(process_data) {
          // Block#: ^;Kvi}~i.wiyVOj8eLXA
          _that.currentTask = (com.fc.JavaScriptDistLib.JSON.parseJSONDataForPath(process_data, '$.tasks[0]'))[0];
          // Block#: ]9^*AhY5DoxH[wY8q|U!
          console.log('Go To Activities Success');
          if(_that.debugService && _that.debugService.active) {
            _that.debugService.traces.push('Go To Activities Success');
            _that.debugService.printLog();
          }
          // Block#: @iZ.;KCfkr6%^o0AgS_o
          _that.goToActivities = false;
          // Block#: MoW{v)x,4f.8!29xaDb/
          if(!_that.isLoggedIn) {
            // Block#: jgt^bZH;.Jf:i5hO9ER+
            com.fc.JavaScriptDistLib.Storage.add('email', _that.userID)
          }
          // Block#: 9B78Fa4G/Gxr!6Cvy!KM
          _that.isLoggedIn = true;
          // Block#: M@3x=e:,SuL0I@^/s3A}
          determineNextPageToDisplay().then(response => {;
          });
        },
        function(error_data) {
          // Block#: -4S}=a[9#,-?hQCsQ^BD
          console.log(error_data);
          if(_that.debugService && _that.debugService.active) {
            _that.debugService.traces.push(error_data);
            _that.debugService.printLog();
          }
        });
    });
  }
  /**
   * Describe this function...
   */
  function ProcessDone() {}
  /**
   * Describe this function...
   */
  function clearUserData() {
    return new Promise(function(resolve, reject) {
      // Block#: ]~enfI9/%IG;$_FkRC9M
      com.fc.JavaScriptDistLib.SnapClinical.logout(
        function(success_data) {
          // Block#: SFKyk+WCtLVmW2J~g*nS
          console.log(success_data);
          if(_that.debugService && _that.debugService.active) {
            _that.debugService.traces.push(success_data);
            _that.debugService.printLog();
          }
        },
        function(error_data) {
          // Block#: S9u;YDlngeCS}Pm1~Eok
          console.log(error_data);
          if(_that.debugService && _that.debugService.active) {
            _that.debugService.traces.push(error_data);
            _that.debugService.printLog();
          }
        });
      // Block#: Ki+_#)A@B~H8F=jF0qXu
      com.fc.JavaScriptDistLib.Storage.remove('email') // Block#: Wr#Cy)+o!gxSt[-L}y*[
      _that.isLoggedIn = false;
      // Block#: kO_I`:Lr)?L%$xo1M!z%
      _that.userID = '';
      // Block#: T8,z_}QF5f.Q}~71!%9/
      _that.userPinString = '';
      // Block#: BzARP}?V/Buc-dxUhAzt
      com.fc.JavaScriptDistLib.GoogleFit.deAuthorize();
    });
  }
  /**
   * Describe this function...
   */
  function getFormPropertyValue(id) {
    // Block#: #5gkYNb0)Iv)=.}Q19t}
    if(_that.currentTask == null) {
      return null;
    }
    // Block#: Xa+`zR9Cvsci(5wl~6F:
    _that.localVar1 = (com.fc.JavaScriptDistLib.JSON.parseJSONDataForPath(_that.currentTask, ['$.formProperties[?(@.id=="', id, '")].value'].join('')));
    // Block#: ];Jk/VFWG~~x%RL5rgC]
    if(_that.localVar1 != null) {
      return _that.localVar1[0];
    }
    return null;
  }
  /**
   * Describe this function...
   */
  function getFormProperty(id) {
    // Block#: ^wgt41Bfu@iUk!cIQ~H@
    if(_that.currentTask == null) {
      return null;
    }
    // Block#: 7OTOeXc_X5p%(4uuf.*1
    _that.localVar1 = (com.fc.JavaScriptDistLib.JSON.parseJSONDataForPath(_that.currentTask, ['$.formProperties[?(@.id=="', id, '")].name'].join('')));
    // Block#: Us+n=L):GWw-W#p.jwcR
    if(_that.localVar1 != null) {
      return _that.localVar1[0];
    }
    return null;
  }
  /**
   * Describe this function...
   */
  function B25NextUpdate() {
    return new Promise(function(resolve, reject) {
      // Block#: [`,VYBIcsT1wEGSt4v/Z
      if(_that.selectionMade) {
        // Block#: ozl)4EqFRpr4W*)On%`h
        com.fc.JavaScriptDistLib.Button.setProperty["Border color"]("B25Next", (com.fc.JavaScriptDistLib.ColourLibrary.getColourFromText('#dd198e'))); // Block#: |**o%}2vo,xg!tl(+ck%
        com.fc.JavaScriptDistLib.Button.setProperty["Background color"]("B25Next", (com.fc.JavaScriptDistLib.ColourLibrary.getColourFromText('#dd198e')));
      } else {
        // Block#: ]jWPBvHYLj14@N6g?S%h
        com.fc.JavaScriptDistLib.Button.setProperty["Border color"]("B25Next", (com.fc.JavaScriptDistLib.ColourLibrary.getColourFromText('#f4badd'))); // Block#: JkjdRiuSHJh]m!-I,591
        com.fc.JavaScriptDistLib.Button.setProperty["Background color"]("B25Next", (com.fc.JavaScriptDistLib.ColourLibrary.getColourFromText('#f4badd')));
      }
    });
  }
  /**
   * Describe this function...
   */
  function onContinueEvent() {
    return new Promise(function(resolve, reject) {
      // Block#: w^A=qbF(nyg1,OT/=.G@
      console.log('onContinueEvent');
      if(_that.debugService && _that.debugService.active) {
        _that.debugService.traces.push('onContinueEvent');
        _that.debugService.printLog();
      }
      // Block#: xl6,h9r@)-QHEt(:BQ3p
      console.log(_that.isLoggingIn);
      if(_that.debugService && _that.debugService.active) {
        _that.debugService.traces.push(_that.isLoggingIn);
        _that.debugService.printLog();
      }
      // Block#: _9#EIqhxNtM!yh%J1,Su
      console.log(_that.currentTask);
      if(_that.debugService && _that.debugService.active) {
        _that.debugService.traces.push(_that.currentTask);
        _that.debugService.printLog();
      }
      // Block#: `c{Dt*$]E/*nNjhpIR36
      console.log(com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.currentTask, 'processDefinitionId'));
      if(_that.debugService && _that.debugService.active) {
        _that.debugService.traces.push(com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.currentTask, 'processDefinitionId'));
        _that.debugService.printLog();
      }
      // Block#: ^+!r+i:snB,.(w;L_LK^
      if(_that.goToActivities) {
        // Block#: %+=#l2~{$NAUpmfrfDPS
        com.fc.JavaScriptDistLib.SnapClinical.configureAuthentication('{"api":{"url":"https://powermomstaging.snapclinical.net","username":"","password":"","userid":"","authentication":"Token Based Auth","lazyDeveloper":false,"frontEndKey":"mobileApp"}}');
        com.fc.JavaScriptDistLib.SnapClinical.snapClinicalConfigure(_that.userID, _that.userPinString, _that.userID, "mobileApp", "https://powermomstaging.snapclinical.net");
        // Block#: hoGjjDSUN9g2)m_CtsW2
        startHomeProcessAtActivities().then(response => {;
        });
      } else {
        // Block#: P/m_nYUd5rkap@@Sgfo}
        if(_that.isLoggedIn) {
          // Block#: W9oKb]`,Du?_h[grEl4#
          com.fc.JavaScriptDistLib.SnapClinical.configureAuthentication('{"api":{"url":"https://powermomstaging.snapclinical.net","username":"","password":"","userid":"","authentication":"Token Based Auth","lazyDeveloper":false,"frontEndKey":"mobileApp"}}');
          com.fc.JavaScriptDistLib.SnapClinical.snapClinicalConfigure(_that.userID, _that.userPinString, _that.userID, "mobileApp", "https://powermomstaging.snapclinical.net");
          // Block#: ($Y_(nBLlU$^K%B{4JkH
          _that.userPinString = '';
          // This is to retrieve user's language and update the UI accordingly
          // Block#: dt[GJQbzC[!5iOD,BP!x
          com.fc.JavaScriptDistLib.SnapClinical.fetch('/snap-api/user/search/whoAmI', "GET", JSON.stringify(),
            function(WhoAm) {
              // Block#: FI)r^zKSgdoW?EHAQtp=
              _that.buttonClicked = false;
              // Block#: -7GYi11H,U*!NVAGj?CQ
              displayPageEngine().then(response => {;
              });
            },
            function(error) {
              // Block#: HOiKv`O;D}[V|CF!#iE?
              console.log(error);
              if(_that.debugService && _that.debugService.active) {
                _that.debugService.traces.push(error);
                _that.debugService.printLog();
              }
              // Block#: *FU+16sTGdvlD:Z?SN[@
              _that.buttonClicked = false;
              // Block#: {FcL;mdE53)ZrO_wLu_q
              S21UpdatePinProgress(0).then(response => {;
              });
              // Block#: Rsa/OXHB(Hp8zRIZxapS
              com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("S21Pin", false); // Block#: #qb-NS=7y9em(HrYbb-S
              com.fc.JavaScriptDistLib.Label.setProperty["Text"]("L21Error", 'Incorrect pin or invalid account'); // Block#: (?d$4fM7H0l^4l.VU`k0
              $('[obj-name="L21Error"]').show();
            });
        } else {
          // Block#: OusQpai8+2qau5^nxIjh
          if(_that.isLoggingIn) {
            // Block#: 4PX{_xvz%mBg~^uenU`J
            com.fc.JavaScriptDistLib.SnapClinical.configureAuthentication('{"api":{"url":"https://powermomstaging.snapclinical.net","username":"","password":"","userid":"","authentication":"Token Based Auth","lazyDeveloper":false,"frontEndKey":"mobileApp"}}');
            com.fc.JavaScriptDistLib.SnapClinical.snapClinicalConfigure(_that.userID, _that.userPinString, _that.userID, "mobileApp", "https://powermomstaging.snapclinical.net");
            // Block#: n=b)v.:DU]pxs2z0U2xo
            _that.userPinString = '';
            // Block#: !26q?vQyACrhv4ZqIy0d
            startNewProcessInstance('PowerMomHomeProcessV1', true).then(response => {;
              if(response.name === "error") {
                // Block#: $]`|3@jKB;`mK]Cf$%Y{
                _that.buttonClicked = false;
                // Block#: J`mNy4C?~]1V;TaHq.CP
                S21UpdatePinProgress(0).then(response => {;
                });
                // Block#: TTt(G2tLy{@PaEnzdk[|
                com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("S21Pin", false); // Block#: +/)Wc8],^U!dogW64ZS`
                com.fc.JavaScriptDistLib.Label.setProperty["Text"]("L21Error", 'Incorrect pin or invalid account'); // Block#: JFd?h)?z?^[#VOV1~*X(
                $('[obj-name="L21Error"]').show();
              }
            });
          } else {
            // Block#: T,nn;*WapK^*81%sd#LF
            setFormFieldById('pin', 'value', _that.userPinString).then(response => {;
            });
            // Block#: NTp!,,)*V|~$9sL6+?Pa
            _that.userPinString = '';
            // Block#: SPub[Ui?EvBs4;NMR^{:
            _that.returnError = saveTaskAndNext(getOutcomeName('B21Next'));
          }
        }
      }
    });
  }
  /**
   * Describe this function...
   */
  function B25NoneUpdate() {
    return new Promise(function(resolve, reject) {
      // Block#: {y`d7h7o3!;nXwCw%8;T
      if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(_that.selectedMeds.length, "GT", 0)) {
        // Block#: Y8@ek`9/X`Rc%4!BHvqG
        com.fc.JavaScriptDistLib.Button.setProperty["Border color"]("B25None", (com.fc.JavaScriptDistLib.ColourLibrary.getColourFromText('#f4badd'))); // Block#: je*K[q1PwQsT+]K{r~9d
        com.fc.JavaScriptDistLib.Button.setProperty["Background color"]("B25None", (com.fc.JavaScriptDistLib.ColourLibrary.getColourFromText('#f4badd')));
      } else {
        // Block#: t}w-t`rj6M?DPbyqF6{1
        com.fc.JavaScriptDistLib.Button.setProperty["Border color"]("B25None", (com.fc.JavaScriptDistLib.ColourLibrary.getColourFromText('#dd198e'))); // Block#: P#B)G1ZG9Peh|_-+#S)b
        com.fc.JavaScriptDistLib.Button.setProperty["Background color"]("B25None", (com.fc.JavaScriptDistLib.ColourLibrary.getColourFromText('#dd198e')));
      }
    });
  }
  /**
   * Describe this function...
   */
  function validateEmail(email) {
    // Block#: t4TPW6K0%0#7My-+vhS=
    _that.isEmailValid = false;
    // Block#: 536!%i*[H9uv}_vRX^dH
    if(!!email.length) {
      // Block#: =68}l*4=}c*y!X`TNy{z
      if(com.fc.JavaScriptDistLib.TextLib.textMatchWithRegex(com.fc.JavaScriptDistLib.TextLib.convertToRegExp('^((([!#$%&\'*+\\-/=?^_`{|}~\\w])|([!#$%&\'*+\\-/=?^_`{|}~\\w][!#$%&\'*+\\-/=?^_`{|}~\\.\\w]{0,}[!#$%&\'*+\\-/=?^_`{|}~\\w]))[@]\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*)$', "i"), email)) {
        // Block#: []eXG3ft3S%]a(*Fd%Cw
        _that.isEmailValid = true;
      }
    }
    return _that.isEmailValid;
  }
  /**
   * TODO: fields shohuld be addressed through their id and not as an array!!!
   */
  function getFormFieldsMapping(id) {
    // Block#: w?Ts;hK9s/cPLCpCXS1V
    if(_that.currentTask == null) {
      return '';
    }
    // Block#: .1yveQZuf~yM/o+iTJ-v
    _that.localVar1 = (com.fc.JavaScriptDistLib.JSON.parseJSONDataForPath(_that.currentTask, ['$.formProperties[?(@.id=="outcomeAndFieldMapping")].enumValues[?(@.id=="', 'field', id, '")].name'].join('')));
    // Block#: _v47L9wY:zt~.%[+`]V`
    if(!!_that.localVar1.length) {
      return _that.localVar1[0];
    }
    return '';
  }
  /**
   * Describe this function...
   */
  function B20NextUpdate() {
    return new Promise(function(resolve, reject) {
      // Block#: _Q3LLCn-*eT[ky%`C9)g
      if(_that.selectionMade) {
        // Block#: PMwb6PqI:|bPnS8)+.,4
        com.fc.JavaScriptDistLib.Button.setProperty["Background color"]("B20Next", (com.fc.JavaScriptDistLib.ColourLibrary.getColourFromText('#dd198e'))); // Block#: }1rlK8;T8g!ps{JCGAA3
        com.fc.JavaScriptDistLib.Button.setProperty["Border color"]("B20Next", (com.fc.JavaScriptDistLib.ColourLibrary.getColourFromText('#dd198e')));
      } else {
        // Block#: d}V^({4o?f^W72%xcM~Z
        com.fc.JavaScriptDistLib.Button.setProperty["Background color"]("B20Next", (com.fc.JavaScriptDistLib.ColourLibrary.getColourFromText('#f4badd'))); // Block#: /F:.)|`M7wXWX4Kof?V-
        com.fc.JavaScriptDistLib.Button.setProperty["Border color"]("B20Next", (com.fc.JavaScriptDistLib.ColourLibrary.getColourFromText('#f4badd')));
      }
    });
  }
  /**
   * Describe this function...
   */
  function S22CheckFields() {
    return new Promise(function(resolve, reject) {
      // Block#: }bvq/=O#q=$9M{l0=aZW
      _that.selectionMade = false;
      // Block#: 1-s-I_nPsBuwJesCkEM[
      $('[obj-name="L22Error"]').hide(); // Block#: =^3S+=VYLYezW_pxCqWR
      if(!!com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("T22Text1").length && !com.fc.JavaScriptDistLib.TextLib.textContains(com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("T22Text1"), '.') &&
        !!com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("T22Text2").length && !com.fc.JavaScriptDistLib.TextLib.textContains(com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("T22Text2"), '.')
      ) {
        // Block#: B9rWuI@!lj77kXhJvLE8
        if(com.fc.JavaScriptDistLib.TextLib.textComparison(_that.validationType, "EQUAL", 'adultHeight')) {
          // Block#: *F=}M=j-tCU9Oll/;)8n
          if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(com.fc.JavaScriptDistLib.MathLibrary.toNumber(com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("T22Text1")), "GTE", com.fc.JavaScriptDistLib.MathLibrary.toNumber(_that.minInput1)) &&
            com.fc.JavaScriptDistLib.MathLibrary.mathCompare(com.fc.JavaScriptDistLib.MathLibrary.toNumber(com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("T22Text1")), "LT", com.fc.JavaScriptDistLib.MathLibrary.toNumber(_that.maxInput1)) &&
            com.fc.JavaScriptDistLib.MathLibrary.mathCompare(com.fc.JavaScriptDistLib.MathLibrary.toNumber(com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("T22Text2")), "GTE", com.fc.JavaScriptDistLib.MathLibrary.toNumber(_that.minInput2)) &&
            com.fc.JavaScriptDistLib.MathLibrary.mathCompare(com.fc.JavaScriptDistLib.MathLibrary.toNumber(com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("T22Text2")), "LTE", com.fc.JavaScriptDistLib.MathLibrary.toNumber(_that.maxInput2))
          ) {
            // Block#: UWz)=nZsFbBg9|QQ[kz`
            _that.selectionMade = true;
          } else if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(com.fc.JavaScriptDistLib.MathLibrary.toNumber(com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("T22Text1")), "EQ", com.fc.JavaScriptDistLib.MathLibrary.toNumber(_that.maxInput1)) &&
            com.fc.JavaScriptDistLib.MathLibrary.mathCompare(com.fc.JavaScriptDistLib.MathLibrary.toNumber(com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("T22Text2")), "EQ", com.fc.JavaScriptDistLib.MathLibrary.toNumber(_that.minInput2))
          ) {
            // Block#: $ug(m1}(:)3^kf2#@|BC
            _that.selectionMade = true;
          } else if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(com.fc.JavaScriptDistLib.MathLibrary.toNumber(com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("T22Text1")), "GT", com.fc.JavaScriptDistLib.MathLibrary.toNumber(_that.maxInput1)) ||
            com.fc.JavaScriptDistLib.MathLibrary.mathCompare(com.fc.JavaScriptDistLib.MathLibrary.toNumber(com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("T22Text2")), "GT", com.fc.JavaScriptDistLib.MathLibrary.toNumber(_that.maxInput2))
          ) {
            // Block#: tbkMk:RuKk@Z=MVG,HMr
            $('[obj-name="L22Error"]').show();
          } else if(_that.nextClicked && (com.fc.JavaScriptDistLib.MathLibrary.mathCompare(com.fc.JavaScriptDistLib.MathLibrary.toNumber(com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("T22Text1")), "LT", com.fc.JavaScriptDistLib.MathLibrary.toNumber(_that.minInput1)) ||
              com.fc.JavaScriptDistLib.MathLibrary.mathCompare(com.fc.JavaScriptDistLib.MathLibrary.toNumber(com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("T22Text2")), "LT", com.fc.JavaScriptDistLib.MathLibrary.toNumber(_that.minInput2))
            )) {
            // Block#: (J1E[Lo7.(f70|3%E.dP
            $('[obj-name="L22Error"]').show();
          }
        } else if(com.fc.JavaScriptDistLib.TextLib.textComparison(_that.validationType, "EQUAL", 'babyWeight')) {
          // Block#: :I!H6.#x](G%h-]^|]z5
          if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(com.fc.JavaScriptDistLib.MathLibrary.toNumber(com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("T22Text1")), "EQ", com.fc.JavaScriptDistLib.MathLibrary.toNumber(_that.minInput1)) &&
            com.fc.JavaScriptDistLib.MathLibrary.mathCompare(com.fc.JavaScriptDistLib.MathLibrary.toNumber(com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("T22Text2")), "GTE", 9) &&
            com.fc.JavaScriptDistLib.MathLibrary.mathCompare(com.fc.JavaScriptDistLib.MathLibrary.toNumber(com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("T22Text2")), "LTE", com.fc.JavaScriptDistLib.MathLibrary.toNumber(_that.maxInput2))
          ) {
            // Block#: aOU6R-0;ap6mB)aL-NXe
            _that.selectionMade = true;
          } else if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(com.fc.JavaScriptDistLib.MathLibrary.toNumber(com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("T22Text1")), "GT", com.fc.JavaScriptDistLib.MathLibrary.toNumber(_that.minInput1)) &&
            com.fc.JavaScriptDistLib.MathLibrary.mathCompare(com.fc.JavaScriptDistLib.MathLibrary.toNumber(com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("T22Text1")), "LT", com.fc.JavaScriptDistLib.MathLibrary.toNumber(_that.maxInput1)) &&
            com.fc.JavaScriptDistLib.MathLibrary.mathCompare(com.fc.JavaScriptDistLib.MathLibrary.toNumber(com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("T22Text2")), "GTE", com.fc.JavaScriptDistLib.MathLibrary.toNumber(_that.minInput2)) &&
            com.fc.JavaScriptDistLib.MathLibrary.mathCompare(com.fc.JavaScriptDistLib.MathLibrary.toNumber(com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("T22Text2")), "LTE", com.fc.JavaScriptDistLib.MathLibrary.toNumber(_that.maxInput2))
          ) {
            // Block#: d0+POvj$WmOKD{Cg$(v$
            _that.selectionMade = true;
          } else if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(com.fc.JavaScriptDistLib.MathLibrary.toNumber(com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("T22Text1")), "EQ", com.fc.JavaScriptDistLib.MathLibrary.toNumber(_that.maxInput1)) &&
            com.fc.JavaScriptDistLib.MathLibrary.mathCompare(com.fc.JavaScriptDistLib.MathLibrary.toNumber(com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("T22Text2")), "EQ", com.fc.JavaScriptDistLib.MathLibrary.toNumber(_that.minInput2))
          ) {
            // Block#: 6.7hWji@-O33iv*]mZA{
            _that.selectionMade = true;
          } else if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(com.fc.JavaScriptDistLib.MathLibrary.toNumber(com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("T22Text1")), "GT", com.fc.JavaScriptDistLib.MathLibrary.toNumber(_that.maxInput1)) ||
            com.fc.JavaScriptDistLib.MathLibrary.mathCompare(com.fc.JavaScriptDistLib.MathLibrary.toNumber(com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("T22Text2")), "GT", com.fc.JavaScriptDistLib.MathLibrary.toNumber(_that.maxInput2))
          ) {
            // Block#: $1JEFh`m3ikG7!^%7C]q
            $('[obj-name="L22Error"]').show();
          } else if(_that.nextClicked && (com.fc.JavaScriptDistLib.MathLibrary.mathCompare(com.fc.JavaScriptDistLib.MathLibrary.toNumber(com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("T22Text1")), "LT", com.fc.JavaScriptDistLib.MathLibrary.toNumber(_that.minInput1)) ||
              com.fc.JavaScriptDistLib.MathLibrary.mathCompare(com.fc.JavaScriptDistLib.MathLibrary.toNumber(com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("T22Text2")), "LT", com.fc.JavaScriptDistLib.MathLibrary.toNumber(_that.minInput2))
            )) {
            // Block#: G=Ku8d~xOC?!VxX!U15b
            $('[obj-name="L22Error"]').show();
          } else if(_that.nextClicked && com.fc.JavaScriptDistLib.MathLibrary.mathCompare(com.fc.JavaScriptDistLib.MathLibrary.toNumber(com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("T22Text1")), "EQ", com.fc.JavaScriptDistLib.MathLibrary.toNumber(_that.minInput1)) &&
            (com.fc.JavaScriptDistLib.MathLibrary.mathCompare(com.fc.JavaScriptDistLib.MathLibrary.toNumber(com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("T22Text2")), "LT", 9) ||
              com.fc.JavaScriptDistLib.MathLibrary.mathCompare(com.fc.JavaScriptDistLib.MathLibrary.toNumber(com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("T22Text2")), "GT", com.fc.JavaScriptDistLib.MathLibrary.toNumber(_that.maxInput2))
            )) {
            // Block#: =/}DuC/TfUE0DUJ2{AM;
            $('[obj-name="L22Error"]').show();
          }
        } else if(com.fc.JavaScriptDistLib.TextLib.textComparison(_that.validationType, "EQUAL", '3digits')) {
          // Block#: ]AnK9E$p{qEW*k5n@{fr
          if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(com.fc.JavaScriptDistLib.MathLibrary.toNumber(com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("T22Text1")), "GTE", com.fc.JavaScriptDistLib.MathLibrary.toNumber(_that.minInput1)) &&
            com.fc.JavaScriptDistLib.MathLibrary.mathCompare(com.fc.JavaScriptDistLib.MathLibrary.toNumber(com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("T22Text1")), "LTE", com.fc.JavaScriptDistLib.MathLibrary.toNumber(_that.maxInput1)) &&
            com.fc.JavaScriptDistLib.MathLibrary.mathCompare(com.fc.JavaScriptDistLib.MathLibrary.toNumber(com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("T22Text2")), "GTE", com.fc.JavaScriptDistLib.MathLibrary.toNumber(_that.minInput2)) &&
            com.fc.JavaScriptDistLib.MathLibrary.mathCompare(com.fc.JavaScriptDistLib.MathLibrary.toNumber(com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("T22Text2")), "LTE", com.fc.JavaScriptDistLib.MathLibrary.toNumber(_that.maxInput2))
          ) {
            // Block#: ]ek~G:|g$aE?_!E58R6t
            _that.selectionMade = true;
          } else if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(com.fc.JavaScriptDistLib.MathLibrary.toNumber(com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("T22Text1")), "GT", com.fc.JavaScriptDistLib.MathLibrary.toNumber(_that.maxInput1)) ||
            com.fc.JavaScriptDistLib.MathLibrary.mathCompare(com.fc.JavaScriptDistLib.MathLibrary.toNumber(com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("T22Text2")), "GT", com.fc.JavaScriptDistLib.MathLibrary.toNumber(_that.maxInput2))
          ) {
            // Block#: iZini^x2q~e627OzpK5J
            $('[obj-name="L22Error"]').show();
          } else if(_that.nextClicked && (com.fc.JavaScriptDistLib.MathLibrary.mathCompare(com.fc.JavaScriptDistLib.MathLibrary.toNumber(com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("T22Text1")), "LT", com.fc.JavaScriptDistLib.MathLibrary.toNumber(_that.minInput1)) ||
              com.fc.JavaScriptDistLib.MathLibrary.mathCompare(com.fc.JavaScriptDistLib.MathLibrary.toNumber(com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("T22Text2")), "LT", com.fc.JavaScriptDistLib.MathLibrary.toNumber(_that.minInput2))
            )) {
            // Block#: #@t$dyT;LKpw.^{3^xU8
            $('[obj-name="L22Error"]').show();
          }
        }
      } else if(com.fc.JavaScriptDistLib.TextLib.textContains(com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("T22Text1"), '.') ||
        com.fc.JavaScriptDistLib.TextLib.textContains(com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("T22Text2"), '.')
      ) {
        // Block#: *)kE[Ust{undih*SCGj*
        $('[obj-name="L22Error"]').show();
      }
      // Block#: VTsDy5EUiQPv#`CM+R!M
      B22NextUpdate().then(response => {;
      });
    });
  }
  /**
   * Describe this function...
   */
  function c1CheckboxUpdate() {
    return new Promise(function(resolve, reject) {
      // Block#: HP:I?w(*pNk.b8R%rmj1
      if(_that.checkBoxValue) {
        // Block#: Iq}er:C}d}sK0-jqFR{^
        com.fc.JavaScriptDistLib.Image.setProperty["Image"]("I1Checkbox", (com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("./img/checked grey1.png")));
      } else {
        // Block#: 8ZGf-T`5dUJyW*$WF8u-
        com.fc.JavaScriptDistLib.Image.setProperty["Image"]("I1Checkbox", (com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("./img/empty grey2.png")));
      }
    });
  }
  /**
   * Describe this function...
   */
  function startFlow(body) {
    return new Promise(function(resolve, reject) {
      // Block#: MZFTXp0``}GM!19_(+n1
      com.fc.JavaScriptDistLib.SnapClinical.fetch('/flow-api/snap-api/get-new-or-resume-process', "POST", JSON.stringify(body),
        function(data) {
          // Block#: ~IOM#TrQRnqB)|OcC2G:
          if((com.fc.JavaScriptDistLib.Dictionary.getDictValue(com.fc.JavaScriptDistLib.JSON.parseJSONData(data), 'tasks')) != null) {
            // Block#: M{~O5!B|rTBy6raqGD(:
            console.log('1');
            if(_that.debugService && _that.debugService.active) {
              _that.debugService.traces.push('1');
              _that.debugService.printLog();
            }
            // Block#: .;z]O.~7I?n7QMXKYT^T
            _that.currentTask = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(com.fc.JavaScriptDistLib.JSON.parseJSONData(data), 'tasks'))[0];
          } else {
            // Block#: TK56a.FUc}#mJ)-y:!EP
            console.log('2');
            if(_that.debugService && _that.debugService.active) {
              _that.debugService.traces.push('2');
              _that.debugService.printLog();
            }
            // Block#: }$`g~r8zMWEJ[a:E5[CG
            _that.currentTask = null;
          }
          // Block#: #^le!nU%Av=aDV;L3[KZ
          determineNextPageToDisplay().then(response => {;
          });
        },
        function(error) {
          // Block#: p0.{D*P#OIV9i8Ga/_dt
          resolve({
            name: "error",
            data: error
          });
        });
    });
  }
  /**
   * Describe this function...
   */
  function b28NextUpdate() {
    return new Promise(function(resolve, reject) {
      // Block#: GpR(/|2vieItt|`:umXR
      if(_that.selectionMade) {
        // Block#: i!|pu@fB3M(}BMA0^|Y^
        com.fc.JavaScriptDistLib.Button.setProperty["Background color"]("B28Next", (com.fc.JavaScriptDistLib.ColourLibrary.getColourFromText('#dd198e'))); // Block#: a!dP.K[dF$~xfJ$55%$:
        com.fc.JavaScriptDistLib.Button.setProperty["Border color"]("B28Next", (com.fc.JavaScriptDistLib.ColourLibrary.getColourFromText('#dd198e')));
      } else {
        // Block#: K^?PJl^?$q4^Dr2-Y:#c
        com.fc.JavaScriptDistLib.Button.setProperty["Background color"]("B28Next", (com.fc.JavaScriptDistLib.ColourLibrary.getColourFromText('#f4badd'))); // Block#: 3*;?Owwh]CcNc26(b)-V
        com.fc.JavaScriptDistLib.Button.setProperty["Border color"]("B28Next", (com.fc.JavaScriptDistLib.ColourLibrary.getColourFromText('#f4badd')));
      }
    });
  }
  /**
   * Describe this function...
   */
  function handleEnvironment() {
    return new Promise(function(resolve, reject) {
      // Block#: 57r~+8z1`1vZGE^6|4Qm
      com.fc.JavaScriptDistLib.SnapClinical.setEnvironmentVariables('https://powermom.snapclinical.net', 'mobileApp');
      // Block#: 0D5m=|}[ui7ms%v@nBgm
      if(com.fc.JavaScriptDistLib.ListLibrary.listContains((com.fc.JavaScriptDistLib.Storage.getAllKeys()), 'tester')) {
        // Block#: l/*M@#]eDg+b`I`^ancN
        if(com.fc.JavaScriptDistLib.Storage.getValue('tester')) {
          // Block#: =Hm)$hE}[xas*7u:9hNT
          com.fc.JavaScriptDistLib.SnapClinical.setEnvironmentVariables('https://powermomstaging.snapclinical.net', 'mobileApp');
        }
      } else {
        // Block#: u!d8m9WEJiOZhzXfA6PE
        com.fc.JavaScriptDistLib.Storage.add('tester', false)
      }
    });
  }
  /**
   * Describe this function...
   */
  function setFormFieldById(id, property, value) {
    return new Promise(function(resolve, reject) {
      // Block#: Eh2gp%^B+o:7[)p4*1/w
      _that.localFormData = (com.fc.JavaScriptDistLib.JSON.parseJSONDataForPath(_that.currentTask, '$.formData'))[0];
      // Block#: TVzSbhy;wS%%QBn1h$0e
      _that.localFormFields = (com.fc.JavaScriptDistLib.JSON.parseJSONDataForPath(_that.currentTask, '$.formData.fields[*]'));
      // Block#: ZJ1{2q4^@A8E/cSOtUdu
      var index_end4 = _that.localFormFields.length - 1;
      var index_inc4 = 1;
      if(0 > index_end4) {
        index_inc4 = -index_inc4;
      }
      for(index = 0; index_inc4 >= 0 ? index <= index_end4 : index >= index_end4; index += index_inc4) {
        // Block#: URK%a;(;=7hnsgX2OqT}
        _that.localVar1 = _that.localFormFields[index];
        // Block#: T0l2rW|P]Q*N6wL`;Gy{
        if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.localVar1, 'id'), "EQUAL", id)) {
          // Block#: r}#cOr*Wqgb/jU0(RpBl
          com.fc.JavaScriptDistLib.Dictionary.setDictValue(_that.localVar1, property, value);
          // Block#: MW-fMC}xYR-p_FE~G,Q0
          _that.localFormFields[index] = _that.localVar1;
        }
      }
      // Block#: EGV?N:SQ2/Q/x/d#CEwW
      com.fc.JavaScriptDistLib.Dictionary.setDictValue(_that.localFormData, 'fields', _that.localFormFields);
      // Block#: l~l|p;%`M-8d:mlSC0XI
      com.fc.JavaScriptDistLib.Dictionary.setDictValue(_that.currentTask, 'formData', _that.localFormData);
    });
  }
  /**
   * Describe this function...
   */
  function getOutcomeName(key) {
    // Block#: cC4.bP|PJ.B:3Gw{alT`
    if(_that.currentTask == null) {
      return null;
    }
    // Block#: U|CyQ3S^#l]`PrsOS{ck
    _that.localVar1 = (com.fc.JavaScriptDistLib.JSON.parseJSONDataForPath(_that.currentTask, ['$.formProperties[?(@.id=="outcomeAndFieldMapping")].enumValues[?(@.name=="', key, '")].id'].join('')));
    // Block#: /JboQt720a.?Wt+%%npt
    if(!(_that.localVar1 == null)) {
      // Block#: FA-6d7E]QR)v7Eutt2?{
      if(!!_that.localVar1.length) {
        // Block#: LaeJ5VPmbrTqzPrwMpYF
        _that.localVar1 = _that.localVar1[0];
        // Block#: hM555?Ge4{T{`]A~]1aW
        _that.localVar1 = com.fc.JavaScriptDistLib.TextLib.textReplace('outcome', '', _that.localVar1);
        // Block#: ;s(Nb+#g!m8Fz2*M)Hpt
        _that.localVar1 = (com.fc.JavaScriptDistLib.JSON.parseJSONDataForPath(_that.currentTask, ['$.formData.outcomes[', (com.fc.JavaScriptDistLib.MathLibrary.toNumber(_that.localVar1)) - 1, '].name'].join('')));
        // Block#: m~]1Ui-)s~w$x`ALWOm7
        if(_that.localVar1 != null) {
          // Block#: !C}hv|]{yg(2xsVnzWje
          _that.localVar1 = _that.localVar1[0];
        } else {
          // Block#: Vj3Nv(U]NT*$hw;kx,8i
          _that.localVar1 = null;
        }
      } else {
        // Block#: 8o!]xqZ.PU[*glZNC`i_
        _that.localVar1 = null;
      }
    } else {
      // Block#: kgK,uVfBBydcQ3T7Tqr-
      _that.localVar1 = null;
    }
    return _that.localVar1;
  }
  /**
   * Describe this function...
   */
  function onS1Continue() {
    return new Promise(function(resolve, reject) {
      // Block#: +foZ#K`uCf,vfY(_)_~.
      if(_that.checkBoxValue) {
        // Block#: jsl#LhZfk(M62Cr{vydp
        com.fc.JavaScriptDistLib.SnapClinical.setEnvironmentVariables('https://powermomstaging.snapclinical.net', 'mobileApp');
      } else {
        // Block#: L:rX=UREamG4[bUcX{[u
        com.fc.JavaScriptDistLib.SnapClinical.setEnvironmentVariables('https://powermom.snapclinical.net', 'mobileApp');
      }
      // Block#: kn:3o+V;Uflk6.W/)-+,
      com.fc.JavaScriptDistLib.Storage.add('tester', _that.checkBoxValue)
    });
  }
  /**
   * Describe this function...
   */
  function B23NextUpdate() {
    return new Promise(function(resolve, reject) {
      // Block#: gp~RcqO0%XK@oJ_hk|f-
      if(_that.selectionMade) {
        // Block#: K3H417nQU`#iO+HgXs8x
        com.fc.JavaScriptDistLib.Button.setProperty["Border color"]("B23Next", (com.fc.JavaScriptDistLib.ColourLibrary.getColourFromText('#dd198e'))); // Block#: Q5NmPA9mtoHW.Mq8yVnI
        com.fc.JavaScriptDistLib.Button.setProperty["Background color"]("B23Next", (com.fc.JavaScriptDistLib.ColourLibrary.getColourFromText('#dd198e')));
      } else {
        // Block#: wuRfe)#8T*)_Iba6be{@
        com.fc.JavaScriptDistLib.Button.setProperty["Border color"]("B23Next", (com.fc.JavaScriptDistLib.ColourLibrary.getColourFromText('#f4badd'))); // Block#: Y?d+Mf5NTX#%um%ZavSv
        com.fc.JavaScriptDistLib.Button.setProperty["Background color"]("B23Next", (com.fc.JavaScriptDistLib.ColourLibrary.getColourFromText('#f4badd')));
      }
    });
  }
  /**
   * Describe this function...
   */
  function s8End() {
    return new Promise(function(resolve, reject) {
      // Block#: `pM`yTrB%%3o=e9Kp(fD
      setRadioButtonOptionsValue().then(response => {;
      });
      // Block#: EC5!W|3BXHk1S%1C[*`4
      _that.returnError = saveTaskAndNext(getOutcomeName('B8Next'));
    });
  }
  /**
   * Describe this function...
   */
  function doesFieldExistInMap(key) {
    // Block#: JaCr!v_n58HlO`p7%|pQ
    if(_that.currentTask == null) {
      return false;
    }
    // Block#: Ej${Jx.0eu6jLmG|Fx%?
    _that.localVar1 = (com.fc.JavaScriptDistLib.JSON.parseJSONDataForPath(_that.currentTask, ['$.formProperties[?(@.id=="outcomeAndFieldMapping")].enumValues[?(@.name=="', key, '")].id'].join('')));
    // Block#: D76L9WJc?CE=TY8iU~81
    if(_that.localVar1 == null) {
      return false;
    }
    return true;
  }
  /**
   * Describe this function...
   */
  function getFormField(key, property) {
    // Block#: }[)L@hGkc:2$,f5QA{V}
    console.log(_that.currentTask);
    if(_that.debugService && _that.debugService.active) {
      _that.debugService.traces.push(_that.currentTask);
      _that.debugService.printLog();
    }
    // Block#: Kl*!_M8Ex#7H*F[49My!
    _that.localVar1 = (com.fc.JavaScriptDistLib.JSON.parseJSONDataForPath(_that.currentTask, ['$.formProperties[?(@.id=="outcomeAndFieldMapping")].enumValues[?(@.name=="', key, '")].id'].join('')));
    // Block#: |V8Vv2Ok.y$jaR)#^ZcR
    _that.localVar1 = _that.localVar1[0];
    // Block#: [t5^kO@V4Y#Hr32*Vy9Y
    _that.localVar1 = com.fc.JavaScriptDistLib.TextLib.textReplace('field', '', _that.localVar1);
    // Block#: GM{1wPk3/Sv0ytAbqoAa
    console.log(['getFormField  only number >', _that.localVar1, '<'].join(''));
    if(_that.debugService && _that.debugService.active) {
      _that.debugService.traces.push(['getFormField  only number >', _that.localVar1, '<'].join(''));
      _that.debugService.printLog();
    }
    // Block#: 0;1W+F.d1Je*ntAOv0kQ
    _that.localVar1 = (com.fc.JavaScriptDistLib.JSON.parseJSONDataForPath(_that.currentTask, ['$.formData.fields[', (com.fc.JavaScriptDistLib.MathLibrary.toNumber(_that.localVar1)) - 1, '].', property].join('')));
    // Block#: ,N{gr6l1]w3h_.|ulxkJ
    if(_that.localVar1 == null) {
      return null;
    }
    return _that.localVar1[0];
  }
  /**
   * Describe this function...
   */
  function checkBoxListHasSelection(checkBoxList) {
    // Block#: ha0*;z`+4]Ez|L+=QM$)
    for(var item_index12 in checkBoxList) {
      item = checkBoxList[item_index12];
      // Block#: f{z28u3.cXSy`uS6P}./
      if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'value'), "EQUAL", 'TRUE')) {
        // Block#: C7PsWIHLu!)dy`MKpN6n
        _that.itemValue = true;
      } else {
        // Block#: 53eL]@LnO.8lB?9I9$LI
        _that.itemValue = false;
      }
      // Block#: kNPf!4YWg6=O}vMLJbw^
      if(_that.itemValue) {
        return true;
      }
    }
    return false;
  }
  /**
   * Describe this function...
   */
  function S26SetDoubleBarGraph() {
    return new Promise(function(resolve, reject) {
      // Block#: _*;n}=7!U|+2+f1{qfr~
      _that.currentProperty = getFormProperty('topGraphXAxisName');
      // Block#: p!f7+JdS^Om`}%5n%N!_
      if(_that.currentProperty != null) {
        // Block#: V2^6}HRjCI$X.Ah_,.Md
        $('[obj-name="TopGraphXAxisLabel"]').show(); // Block#: Rh-hqfRdK*r1+8?x@M.G
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("TopGraphXAxisLabel", _that.currentProperty); // Block#: :u)^}yhMj)s%(.O4~0f~
        console.log(String('topGraphXAxisName: ') + String(_that.currentProperty));
        if(_that.debugService && _that.debugService.active) {
          _that.debugService.traces.push(String('topGraphXAxisName: ') + String(_that.currentProperty));
          _that.debugService.printLog();
        }
      }
      // Block#: =R6Z.h49egY*XJ1|9K1+
      _that.currentProperty = getFormProperty('topGraphYAxisName');
      // Block#: Ls]DH|hZg2n_S9*kgHx%
      if(_that.currentProperty != null) {
        // Block#: (hd0*2)Z{FSV,YA_~hqn
        $('[obj-name="TopGraphYAxisLabel"]').show(); // Block#: 4?hwSHolZf|]uUA,yd.l
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("TopGraphYAxisLabel", _that.currentProperty); // Block#: 0)1B0SlQl+}:mdDm?@KA
        console.log(String('topGraphYAxisName: ') + String(_that.currentProperty));
        if(_that.debugService && _that.debugService.active) {
          _that.debugService.traces.push(String('topGraphYAxisName: ') + String(_that.currentProperty));
          _that.debugService.printLog();
        }
      }
      // Block#: UNv]!h=S0ZPy{{p9hw+p
      _that.currentProperty = getFormProperty('bottomGraphXAxisName');
      // Block#: Y[2Y_ALp43n9Le*!pOWp
      if(_that.currentProperty != null) {
        // Block#: DnH`aUgD@Vm_M3SFUi}|
        $('[obj-name="BottomGraphXAxisLabel"]').show(); // Block#: EOztrWMAQd,6rL^5/KSj
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("BottomGraphXAxisLabel", _that.currentProperty); // Block#: x=CP0@dpc%(s2BoD5Ao~
        console.log(String('bottomGraphXAxisName: ') + String(_that.currentProperty));
        if(_that.debugService && _that.debugService.active) {
          _that.debugService.traces.push(String('bottomGraphXAxisName: ') + String(_that.currentProperty));
          _that.debugService.printLog();
        }
      }
      // Block#: YGP5^_J8jbjlA~I2H6oG
      _that.currentProperty = getFormProperty('bottomGraphYAxisName');
      // Block#: s^VS$9Kf!1?S@s;:bLp#
      if(_that.currentProperty != null) {
        // Block#: 6EI!$]C^NT,@?U=+Y|w3
        $('[obj-name="BottomGraphYAxisLabel"]').show(); // Block#: _99z],}6q[].^;s7UHag
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("BottomGraphYAxisLabel", _that.currentProperty); // Block#: $F?I`?MlS].r9pE7#bfm
        console.log(String('bottomGraphYAxisName: ') + String(_that.currentProperty));
        if(_that.debugService && _that.debugService.active) {
          _that.debugService.traces.push(String('bottomGraphYAxisName: ') + String(_that.currentProperty));
          _that.debugService.printLog();
        }
      }
      // Block#: ecmFcStAF}5kHhvmdiSg
      _that.currentProperty = getFormProperty('graphTitle1');
      // Block#: mG3|.Yq@Kuaw6u~2kq?A
      if(_that.currentProperty != null) {
        // Block#: L%W3(]_fTJ=-EqRo0w2g
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("L26TopGraphTitle", _that.currentProperty);
      }
      // Block#: 9el#M*IT5EO~}6gwHB_v
      _that.currentProperty = getFormProperty('graphTitle2');
      // Block#: N@e18.UT;Ya6}O`a%ArA
      if(_that.currentProperty != null) {
        // Block#: Snplt@Dw`6w;u$|,G9Wz
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("L26BottomGraphTitle", _that.currentProperty);
      }
      // Block#: YCXgGCfbFXITKm9lh9Ee
      if(com.fc.JavaScriptDistLib.TextLib.textComparison(_that.graphGroup, "EQUAL", 'weight')) {
        // Block#: X/|pO%j:]S=hc~N+re*M
        _that.groupData = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(com.fc.JavaScriptDistLib.Dictionary.getDictValue(com.fc.JavaScriptDistLib.JSON.parseJSONData(_that.JSON2), 'birthWeights'), 'boysWeight'));
        // Block#: L:2@wAW)RU6Nyqb=a(Tr
        _that.Xvalues = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.outcomeGroups, 'weight'));
        // Block#: iA~hxg}0IaEzrA_86Bjt
        _that.XAxisLabels = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.outcomeLabels, 'weight'));
        // Block#: `j%WO,vZwT%;VU?(158T
        _that.Yvalues = [];
        // Block#: i.:Mk^E=N(OjKAX/{R#=
        _that.totalNumberOfSubjects = 0;
        // Block#: lC5/BUEdYdZ^4(?y#.cK
        var item_list12 = _that.Xvalues;
        for(var item_index13 in item_list12) {
          item = item_list12[item_index13];
          // Block#: YgO[^uUgpHAKDSnPRV;M
          _that.totalNumberOfSubjects = _that.totalNumberOfSubjects + (com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.groupData, item));
        }
        // Block#: U!XZV@`M@oX7dJ~q6=Bi
        var item_list13 = _that.Xvalues;
        for(var item_index14 in item_list13) {
          item = item_list13[item_index14];
          // Block#: !GslB?Aq{IN^hrq#5v/P
          com.fc.JavaScriptDistLib.ListLibrary.listAdd(_that.Yvalues, Math.round(((com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.groupData, item)) / _that.totalNumberOfSubjects) * 100))
        }
        // Block#: (_0Ujbdq@z04|L-f1M:P
        com.fc.JavaScriptDistLib.GraphContainer.createChartWithList('GC26TopGraph', _that.XAxisLabels, _that.Yvalues, '%') // Block#: !tEPo-a|[o(jLQqJt7Ej
        _that.groupData = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(com.fc.JavaScriptDistLib.Dictionary.getDictValue(com.fc.JavaScriptDistLib.JSON.parseJSONData(_that.JSON2), 'birthWeights'), 'girlsWeight'));
        // Block#: K^fn#1Gf`*8n_8j5|yKK
        _that.Xvalues = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.outcomeGroups, 'weight'));
        // Block#: tm*cUP4Gniol)^6tJ0CR
        _that.XAxisLabels = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.outcomeLabels, 'weight'));
        // Block#: (T`7:HUW3G7Mk9={O1^R
        _that.Yvalues = [];
        // Block#: %{~DPA~ysdWQ~feZ]z%*
        _that.totalNumberOfSubjects = 0;
        // Block#: ;yvbl2`Wl@4bui-jd@q8
        var item_list14 = _that.Xvalues;
        for(var item_index15 in item_list14) {
          item = item_list14[item_index15];
          // Block#: g3i]J;5mve3Nz2sQZ_E@
          _that.totalNumberOfSubjects = _that.totalNumberOfSubjects + (com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.groupData, item));
        }
        // Block#: I4MaKtVC.R~{qNVAWr7-
        var item_list15 = _that.Xvalues;
        for(var item_index16 in item_list15) {
          item = item_list15[item_index16];
          // Block#: SdPswm`r5!o0[SBXud28
          com.fc.JavaScriptDistLib.ListLibrary.listAdd(_that.Yvalues, Math.round(((com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.groupData, item)) / _that.totalNumberOfSubjects) * 100))
        }
        // Block#: sLk;ijx3zL;exA]`D7VN
        com.fc.JavaScriptDistLib.GraphContainer.createChartWithList('GC26BottomGraph', _that.XAxisLabels, _that.Yvalues, '%')
      } else if(com.fc.JavaScriptDistLib.TextLib.textComparison(_that.graphGroup, "EQUAL", 'length')) {
        // Block#: uc,T=VLMQB!WWy]*NRwC
        _that.groupData = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(com.fc.JavaScriptDistLib.Dictionary.getDictValue(com.fc.JavaScriptDistLib.JSON.parseJSONData(_that.JSON2), 'birthLengths'), 'boysLength'));
        // Block#: Ll3n9!!i-d#K{N88LM1?
        _that.Xvalues = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.outcomeGroups, 'length'));
        // Block#: B-*aZbaykxeD]A65!EW,
        _that.XAxisLabels = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.outcomeLabels, 'length'));
        // Block#: aPW=K8$NbYP9w5hZbjK*
        _that.Yvalues = [];
        // Block#: MZxwX_:b|vlqhHn[r+*_
        _that.totalNumberOfSubjects = 0;
        // Block#: OYO+MD@]=m0Uy.LIkV]#
        var item_list16 = _that.Xvalues;
        for(var item_index17 in item_list16) {
          item = item_list16[item_index17];
          // Block#: ]8Zuk!gC4(/obVnOXEs0
          _that.totalNumberOfSubjects = _that.totalNumberOfSubjects + (com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.groupData, item));
        }
        // Block#: 3NS5zYw+:8+~w@x*?.g(
        var item_list17 = _that.Xvalues;
        for(var item_index18 in item_list17) {
          item = item_list17[item_index18];
          // Block#: juk9|?uBKX[t7Xh{YRjR
          com.fc.JavaScriptDistLib.ListLibrary.listAdd(_that.Yvalues, Math.round(((com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.groupData, item)) / _that.totalNumberOfSubjects) * 100))
        }
        // Block#: j/ii#SG]%}TtyJOJ_ZBx
        com.fc.JavaScriptDistLib.GraphContainer.createChartWithList('GC26TopGraph', _that.XAxisLabels, _that.Yvalues, '%') // Block#: =9FS5OBbR}ul5b/KxKAa
        _that.groupData = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(com.fc.JavaScriptDistLib.Dictionary.getDictValue(com.fc.JavaScriptDistLib.JSON.parseJSONData(_that.JSON2), 'birthLengths'), 'girlsLength'));
        // Block#: ECH`dzRc8sNFBZhTTTzt
        _that.Xvalues = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.outcomeGroups, 'length'));
        // Block#: ?NNpSRctfpPiXS|VUKl]
        _that.XAxisLabels = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.outcomeLabels, 'length'));
        // Block#: ?I-Ew|-/JWqhesR41DQj
        _that.Yvalues = [];
        // Block#: r1SEQSaVEe%glYKCQJy!
        _that.totalNumberOfSubjects = 0;
        // Block#: ||j@So]d0ni(-4d}$v`O
        var item_list18 = _that.Xvalues;
        for(var item_index19 in item_list18) {
          item = item_list18[item_index19];
          // Block#: 7dXj)Uv%u9a((Y5POJ7h
          _that.totalNumberOfSubjects = _that.totalNumberOfSubjects + (com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.groupData, item));
        }
        // Block#: NaL@Pf[?jW]d-pB+db?c
        var item_list19 = _that.Xvalues;
        for(var item_index20 in item_list19) {
          item = item_list19[item_index20];
          // Block#: g)ULz/]SQ5SsLT]Hm9t.
          com.fc.JavaScriptDistLib.ListLibrary.listAdd(_that.Yvalues, Math.round(((com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.groupData, item)) / _that.totalNumberOfSubjects) * 100))
        }
        // Block#: yLnAVA7N#RE%$-RU^x`@
        com.fc.JavaScriptDistLib.GraphContainer.createChartWithList('GC26BottomGraph', _that.XAxisLabels, _that.Yvalues, '%')
      }
      // Block#: WuXvKHQa}uX59H8)fgP0
      com.fc.JavaScriptDistLib.GraphContainer.addChartTransition('GC26TopGraph', 500, 500); // Block#: 9c]t~/!6?B8D%UEp2zH8
      com.fc.JavaScriptDistLib.GraphContainer.addChartTransition('GC26BottomGraph', 500, 500); // Block#: f3YriEV,z*t`5{46Auar
      $('[obj-name="S26DoubleGraphContainer"]').show();
    });
  }
  /**
   * Describe this function...
   */
  function s20IsValidName(name2) {
    // Block#: %?OE?^{h1h8Q7.~kU{`{
    _that.symbols = '`~!@#$%^&*()_+-=[]\\{}|;\':",./<>?';
    // Block#: Sh-5=0J/_;tJMF[l[]BF
    for(number = 0; number <= 9; number++) {
      // Block#: MIWBU~p!r|a:EcL$J8P/
      if(com.fc.JavaScriptDistLib.TextLib.textContains(name2, '  ')) {
        return false;
      }
    }
    // Block#: Sz-b|IoYFY=}}6D2FLP|
    for(number = 0; number <= 9; number++) {
      // Block#: ix,ROfWEt~hSyxr|kcSh
      if(com.fc.JavaScriptDistLib.TextLib.textContains(name2, com.fc.JavaScriptDistLib.TextLib.convertToText(number))) {
        return false;
      }
    }
    // Block#: `u|_^]ve:x62s(4O/!7L
    var index_end5 = name2.length - 1;
    var index_inc5 = 1;
    if(0 > index_end5) {
      index_inc5 = -index_inc5;
    }
    for(index = 0; index_inc5 >= 0 ? index <= index_end5 : index >= index_end5; index += index_inc5) {
      // Block#: RxuOytZ_`TDZtW)qxBka
      if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(com.fc.JavaScriptDistLib.TextLib.textIndexOf(_that.symbols, com.fc.JavaScriptDistLib.TextLib.textSubstring(name2, index, 1)), "NEQ", -1)) {
        return false;
      }
    }
    return true;
  }
  /**
   * Describe this function...
   */
  function S26SetPieChart() {
    return new Promise(function(resolve, reject) {
      // Block#: A6,N{YF3L3~dop$X__]1
      _that.currentProperty = getFormProperty('graphTitle1');
      // Block#: 6D@`Cc/lW^4KAx-iaNvX
      if(_that.currentProperty != null) {
        // Block#: Lj-XkJj-h~h+B+^TvVRF
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("L26PieGraphTitle", _that.currentProperty);
      }
      // Block#: xGx|_r]en:j)=,Rf9FaR
      if(com.fc.JavaScriptDistLib.TextLib.textComparison(_that.graphGroup, "EQUAL", 'genderOutcome')) {
        // Block#: }c,A-1?g3wV=Rp``)Dv4
        _that.groupData = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(com.fc.JavaScriptDistLib.JSON.parseJSONData(_that.JSON2), 'gender'));
        // Block#: Q1DXEvO;uAoC^%GwL$6+
        _that.Xvalues = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.outcomeGroups, 'gender'));
        // Block#: {AbO#]/@=L(%ka7o;D2[
        _that.ListOptions = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.outcomeLabels, 'gender'));
      } else if(com.fc.JavaScriptDistLib.TextLib.textComparison(_that.graphGroup, "EQUAL", 'genderHealthHistory')) {
        // Block#: G,j-P^,nJp;5^`FN/Q_l
        _that.groupData = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(com.fc.JavaScriptDistLib.JSON.parseJSONData(_that.JSON2), 'genderHealthHistory'));
        // Block#: 5nof5GMisZKrF1Py51-#
        _that.Xvalues = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.healthHistoryGroups, 'genderHealthHistory'));
        // Block#: BsB`p[=@c|7{uuv)E=?B
        _that.ListOptions = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.healthHistoryLabels, 'genderHealthHistory'));
      }
      // Block#: m9{yBqRR=Bn%t6/p.g6z
      _that.totalNumberOfSubjects = 0;
      // Block#: XQO-$lR+RdMKlG|,bAad
      var item_list20 = (com.fc.JavaScriptDistLib.Dictionary.getKeys(_that.groupData));
      for(var item_index21 in item_list20) {
        item = item_list20[item_index21];
        // Block#: _L}6i_!t/UCfJ$UITsr4
        _that.totalNumberOfSubjects = _that.totalNumberOfSubjects + (com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.groupData, item));
      }
      // Block#: GxS2;uer.U)aksXBUJH*
      S26BuildPieChart().then(response => {;
      });
      // Block#: eV_%Mbi8WSq@vG]uzOfv
      S26SetGenderFeedback().then(response => {;
      });
    });
  }
  /**
   * Describe this function...
   */
  function S26BuildPieChart() {
    return new Promise(function(resolve, reject) {
      // Block#: Hsi}Rf.2r1Y-KP42m?;0
      _that.ratio = 360 / _that.totalNumberOfSubjects;
      // Block#: uHhlE9g!RqR%33L[H8nO
      if(com.fc.JavaScriptDistLib.TextLib.textComparison(_that.graphGroup, "EQUAL", 'genderOutcome')) {
        // Block#: ucXgXkNQ+~bC$2,~bjC?
        _that.arcAngle = (com.fc.JavaScriptDistLib.MathLibrary.toNumber(com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.groupData, 'Boy'))) * _that.ratio;
        // Block#: .[_q1%u9O${#gD1y1^Vh
        if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(_that.arcAngle, "LTE", 180)) {
          // Block#: :(8):Vp$+y4}txod#BrT
          _that.pie1 = ['#pieSlice1 {     transform: rotate(0deg); }    #pieSlice1 .pie-chart {    background-color: #d7f4ff;     transform:rotate(', _that.arcAngle, 'deg); }'].join('');
        } else {
          // Block#: y~Qx~-{7_g4FIUjO9aRk
          _that.pie1 = ['#pieSlice1 {     transform: rotate(0deg); }    #pieSlice1 .pie-chart {    background-color: #d7f4ff;     transform:rotate(180deg); } #pieSlice1 {     transform: rotate(0deg); }    #pieSlice1_ext .pie-chart {    background-color: #d7f4ff;     transform:rotate(180deg); }   #pieSlice1_ext {     transform: rotate(', _that.arcAngle - 180, 'deg); }'].join('');
          // Block#: 5*1OK%H^fZ=cL]~E}HTp
          _that.startAngle = _that.arcAngle;
        }
        // Block#: kA.2*Rdi.irB4u)B73,c
        _that.arcAngle = (com.fc.JavaScriptDistLib.MathLibrary.toNumber(com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.groupData, 'Girl'))) * _that.ratio;
        // Block#: 4$3*8qK(!a|PeyVJ;/1m
        if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(_that.arcAngle, "LTE", 180)) {
          // Block#: w*X5-_$U#nr![7Woy:26
          _that.pie2 = ['#pieSlice2 {     transform: rotate(', _that.startAngle, 'deg); }  #pieSlice2 .pie-chart {background-color: #ffc8e7;     transform: rotate(', _that.arcAngle, 'deg); }'].join('');
          // Block#: vRRR/f{{=Fkwy{c0U{Gp
          _that.startAngle = _that.arcAngle + 180;
        } else {
          // Block#: Bsw6dmk,}RE0EvTb=t=2
          _that.pie2 = ['#pieSlice2 {     transform: rotate(', _that.startAngle, 'deg); }  #pieSlice2_ext .pie-chart {     background-color: #ffc8e7;     transform: rotate(', _that.arcAngle - 180, 'deg); }'].join('');
          // Block#: 5K@R*r;Y=HI{f/Uo/-kl
          _that.startAngle = _that.arcAngle;
        }
        // Block#: Eckl5,hPF5O[%Gx0$V`e
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("L26PieGraph", ([_that.pieChartStyle, _that.pie1, _that.pie2, _that.pieChartDivs].join('')));
      } else if(com.fc.JavaScriptDistLib.TextLib.textComparison(_that.graphGroup, "EQUAL", 'genderHealthHistory')) {
        // Block#: qZsTHAJd6S?*z@IK;M/i
        _that.arcAngle = (com.fc.JavaScriptDistLib.MathLibrary.toNumber(com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.groupData, 'Male'))) * _that.ratio;
        // Block#: zWBt7Y6`2PR@^bud7l^D
        if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(_that.arcAngle, "LTE", 180)) {
          // Block#: jP)`ucX*%H1siA5onbq]
          _that.pie1 = ['#pieSlice1 {     transform: rotate(0deg); }    #pieSlice1 .pie-chart {    background-color: #d7f4ff;     transform:rotate(', _that.arcAngle, 'deg); }'].join('');
        } else {
          // Block#: RE_m8a,_Zr-f7^Z$1kU]
          _that.pie1 = ['#pieSlice1 {     transform: rotate(0deg); }    #pieSlice1 .pie-chart {    background-color: #d7f4ff;     transform:rotate(180deg); } #pieSlice1 {     transform: rotate(0deg); }    #pieSlice1_ext .pie-chart {    background-color: #d7f4ff;     transform:rotate(180deg); }   #pieSlice1_ext {     transform: rotate(', _that.arcAngle - 180, 'deg); }'].join('');
          // Block#: Q`6wmW_/k@{f78=I}N)c
          _that.arcAngle = _that.arcAngle + 180;
        }
        // Block#: Dc[FD:D+BBscOII+pXV(
        _that.startAngle = _that.arcAngle;
        // Block#: #_1~|w|Qa6`iP60%EOEk
        _that.arcAngle = (com.fc.JavaScriptDistLib.MathLibrary.toNumber(com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.groupData, 'Female'))) * _that.ratio;
        // Block#: 3%W~:^;b|V+GiGX(A$1,
        if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(_that.arcAngle, "LTE", 180)) {
          // Block#: T44lvjz=oi)_~}ppnl_6
          _that.pie2 = ['#pieSlice2 {     transform: rotate(', _that.startAngle, 'deg); }  #pieSlice2 .pie-chart {background-color: #ffc8e7;     transform: rotate(', _that.arcAngle, 'deg); }'].join('');
        } else {
          // Block#: }K*GlnISW+$]fgXg?9sF
          _that.pie2 = ['#pieSlice2 {     transform: rotate(90deg); }  #pieSlice2 .pie-chart {     background-color: #ffc8e7;     transform: rotate(180deg); }  #pieSlice2_ext {     transform: rotate(', _that.startAngle, 'deg); }  #pieSlice2 .pie-chart {    background-color: #ffc8e7;     transform:rotate(180deg); }     #pieSlice2_ext .pie-chart {    background-color: #ffc8e7;     transform:rotate(180deg); }    #pieSlice2_ext {     transform: rotate(', _that.arcAngle - 180, 'deg); }'].join('');
          // Block#: +AxT|l;kp9H@.d$w#wiD
          _that.arcAngle = _that.arcAngle + 180;
        }
        // Block#: D:BJH[?B+$jp=/KVlbPK
        _that.startAngle = _that.arcAngle + _that.startAngle;
        // Block#: .cGYD(io{;!#K|`Hf6a)
        _that.arcAngle = (com.fc.JavaScriptDistLib.MathLibrary.toNumber(com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.groupData, 'Choose not to find out'))) * _that.ratio;
        // Block#: n~bCC:I)p#)[/Q~kgO{X
        if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(_that.arcAngle, "LTE", 180)) {
          // Block#: I,$PRvpgYu(,Op5hb|#3
          _that.pie3 = ['#pieSlice3 {      transform: rotate(', _that.startAngle, 'deg); }  #pieSlice3 .pie-chart {    background-color: #F4FFD7 ;     transform: rotate(', _that.arcAngle, 'deg); }'].join('');
        } else {
          // Block#: =D@l%SYZur,JMfeF|#h#
          _that.pie3 = ['#pieSlice3 {     transform: rotate(', _that.startAngle, 'deg); }  #pieSlice3 .pie-chart {    background-color: #F4FFD7;     transform:rotate(180deg); }     #pieSlice3_ext .pie-chart {    background-color: #F4FFD7;     transform:rotate(180deg); }    #pieSlice3_ext {     transform: rotate(', _that.arcAngle - 180, 'deg); }'].join('');
          // Block#: 4BVT47W`XZ@nYgPUG%Md
          _that.arcAngle = _that.arcAngle + 180;
        }
        // Block#: v(7a[xKKM|d^|wf,J2#|
        _that.startAngle = _that.arcAngle + _that.startAngle;
        // Block#: AvCPgp#NOkcfs]l/JJ6R
        _that.arcAngle = (com.fc.JavaScriptDistLib.MathLibrary.toNumber(com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.groupData, 'too early'))) * _that.ratio;
        // Block#: }mld|Ho+}Y2zc$t`SScu
        if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(_that.arcAngle, "LTE", 180)) {
          // Block#: _^kQy/TVIuEWhF,w(zto
          _that.pie4 = ['#pieSlice4 { transform: rotate(', _that.startAngle, 'deg); }  #pieSlice4 .pie-chart { background-color:#D7E0FF; transform: rotate(', _that.arcAngle, 'deg); }'].join('');
        } else {
          // Block#: G-!mj%#}MzHpa)Ip|pX*
          _that.pie4 = ['#pieSlice4 {     transform: rotate(', _that.startAngle, 'deg); }  #pieSlice4 .pie-chart {    background-color: #D7E0FF;     transform:rotate(180deg); }     #pieSlice4_ext .pie-chart {    background-color: #D7E0FF;     transform:rotate(180deg); }    #pieSlice4_ext {     transform: rotate(', _that.arcAngle - 180, 'deg); }'].join('');
        }
        // Block#: ;[lC;D~F7VO9azTqIk-U
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("L26PieGraph", ([_that.pieChartStyle, _that.pie1, _that.pie2, _that.pie3, _that.pie4, _that.pieChartDivs].join('')));
      }
      // Block#: IU@zNSwGFdz*I#j|%6R9
      $('[obj-name="S26PieGraphContainer"]').show();
    });
  }
  /**
   * Describe this function...
   */
  function S26SetGenderFeedback() {
    return new Promise(function(resolve, reject) {
      // Block#: x|5:;Lu[J6}e`Dq`l`;Y
      $('[obj-name="L26PieGraphTitle"]').show(); // Block#: {QQxJ-pmSH,$6LU$7qHu
      $('[obj-name="L26PieGraph"]').show(); // Block#: !Flvvj0C!-AX~Lz-eEN2
      com.fc.JavaScriptDistLib.ListView.saveTemplateCell('LV26PieGraphLegend');
      com.fc.JavaScriptDistLib.ListView.removeAllCells('LV26PieGraphLegend');
      on_listview_length_configured_LV26PieGraphLegend();
    });
  }
  // Block#: Z/N2*,Zez)G6#:ymj@D_
  let on_screen_back_button_pressS8Sharing = function() {
    try {
      // Block#: HDq|q5myF0g^vZck+_p-
      if(!_that.buttonClicked && ($('[obj-name="B8Back"]').is(':visible'))) {
        // Block#: E{[Kk*)q}(WE=nC.=3{R
        _that.buttonClicked = true;
        // Block#: 0)TM6HPuHRUF(poApnbp
        _that.returnError = saveTaskAndNext(getOutcomeName('B8Back'));
      } else {
        // Block#: pDZ/wwzD{;qSC]FCg}k:
        com.fc.JavaScriptDistLib.Application.sendToBackground();
      }
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  com.fc.JavaScriptDistLib.Screen.screenDict['backS8Sharing'] = on_screen_back_button_pressS8Sharing;
  // Block#: UHtM-!aCU,`hosyxt[^A
  let on_screen_back_button_pressS21Pin = function() {
    try {
      // Block#: OIJEo?{J+nb%_r;jcioQ
      if(!_that.buttonClicked && ($('[obj-name="B21Back"]').is(':visible'))) {
        // Block#: |3El;-KA1Z4dWS|8byN@
        _that.buttonClicked = true;
        // Block#: %Q|U=AKWBX5z1sKY},ZE
        com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("S21Pin", true); // Block#: XktPeMExbn(_:$,AcxT9
        _that.returnError = saveTaskAndNext(getOutcomeName('B21Back'));
      } else {
        // Block#: ^OTNfVhq,T_sw5dc=3Pz
        com.fc.JavaScriptDistLib.Application.sendToBackground();
      }
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  com.fc.JavaScriptDistLib.Screen.screenDict['backS21Pin'] = on_screen_back_button_pressS21Pin;
  // Block#: CFKJ6#sK}1SX`Be^JA_i
  function on_gridview_length_configured_GV21KeyPad() {
    try {
      com.fc.JavaScriptDistLib.GridView.configureCells('GV21KeyPad', 12);
      $('[obj-name="GV21KeyPad"]').children().each(function(i) {
        if(i >= 0) {
          com.fc.JavaScriptDistLib.GridView.setContext($(this));
          com.fc.JavaScriptDistLib.GridView.executeConfigCallback('GV21KeyPad', $(this), i);
          com.fc.JavaScriptDistLib.GridView.executeConfigHeightCallback('GV21KeyPad', $(this), i);
          com.fc.JavaScriptDistLib.GridView.executeConfigWidthCallback('GV21KeyPad', $(this), i);
          com.fc.JavaScriptDistLib.GridView.resetContext($(this));
        }
      });
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  // Block#: @{7i|mY$~$JK#v|rJl(s
  function on_listview_length_configured_LV25Medications() {
    try {
      com.fc.JavaScriptDistLib.ListView.configureCells('LV25Medications', _that.selectedMeds.length);
      $('[obj-name="LV25Medications"]').children().each(function(i) {
        if(i >= 0) {
          com.fc.JavaScriptDistLib.ListView.setContext($(this));
          com.fc.JavaScriptDistLib.ListView.executeConfigCallback('LV25Medications', $(this), i);
          com.fc.JavaScriptDistLib.ListView.executeConfigHeightCallback('LV25Medications', $(this), i);
          com.fc.JavaScriptDistLib.ListView.resetContext($(this));
        }
      });
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  // Block#: }!JX]0m|C=90cf@r7CI,
  let on_screen_back_button_pressS20BasicInput = function() {
    try {
      // Block#: lf/xTeqAEwrJXt4|-D6v
      if(!_that.buttonClicked && ($('[obj-name="B20Back"]').is(':visible'))) {
        // Block#: c)6*D_:62^88E/o[jmK$
        _that.buttonClicked = true;
        // Block#: ckkV;[|FyDhh?llgCi5u
        _that.returnError = saveTaskAndNext(getOutcomeName('B20Back'));
      } else {
        // Block#: )~Yny1`x!c#p/!Bk!li|
        com.fc.JavaScriptDistLib.Application.sendToBackground();
      }
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  com.fc.JavaScriptDistLib.Screen.screenDict['backS20BasicInput'] = on_screen_back_button_pressS20BasicInput;
  // Block#: ,wIhR_;CugtEb}drLtF9
  function on_B23Next_click(e) {
    try {
      // Block#: ?;y2~p?v.XHKDY0:Foz5
      _that.nextClicked = true;
      // Block#: $hw,|b9.Ubg/o{6q?x%z
      if(!_that.buttonClicked && _that.selectionMade) {
        // Block#: wh+Fb+;$AHr6xQp849{c
        if(getOutcomeName('B23Next') != null) {
          // Block#: 9Wd-6sIed+Jh^~)YW6lQ
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(_that.inputType, "EQUAL", 'text')) {
            // Block#: PGfJ3hLT|*uIhFlyc.S!
            setFormFieldByMapKey('answer1', 'value', com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("T23Text"));
            // Block#: yOk0-8iX^]}^A%sM9_cA
            _that.buttonClicked = true;
            // Block#: =x(A;?J_/EKWM,^98~/9
            _that.returnError = saveTaskAndNext(getOutcomeName('B23Next'));
          } else if(com.fc.JavaScriptDistLib.TextLib.textComparison(_that.inputType, "EQUAL", 'integer')) {
            // Block#: PG#Ka4M8-j-C4[j9VJ|(
            setFormFieldByMapKey('answer1', 'value', com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("T23Text"));
            // Block#: b=Z]l3uKt7?n?IeP9]/5
            _that.buttonClicked = true;
            // Block#: nuG1Mvw;*INX6Etonjpe
            _that.returnError = saveTaskAndNext(getOutcomeName('B23Next'));
          }
        }
      } else {
        // Block#: O@8hx|v;PCS%aozY,inE
        if(com.fc.JavaScriptDistLib.TextLib.textComparison(_that.validationType, "EQUAL", '2digits') ||
          com.fc.JavaScriptDistLib.TextLib.textComparison(_that.validationType, "EQUAL", '3digits')
        ) {
          // Block#: Gbu`MY|6Cvz`pZqDwzCJ
          if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(com.fc.JavaScriptDistLib.MathLibrary.toNumber(com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("T23Text")), "LT", com.fc.JavaScriptDistLib.MathLibrary.toNumber(_that.minInput))) {
            // Block#: lA*~LA-BaTGdEA{I0)r9
            $('[obj-name="L23Error"]').show();
          }
        } else if(com.fc.JavaScriptDistLib.TextLib.textComparison(_that.validationType, "EQUAL", 'zipcode')) {
          // Block#: 9;m4SWZ{[:S(B|,NY(0N
          if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("T23Text").length, "LT", 5)) {
            // Block#: 8?G*B-haxj{k{T9IBn:T
            $('[obj-name="L23Error"]').show();
          }
        } else if(com.fc.JavaScriptDistLib.TextLib.textComparison(_that.validationType, "EQUAL", '6digits')) {
          // Block#: VM`W3LnS8d5Sn_Z$9v!~
          if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("T23Text").length, "LT", 6)) {
            // Block#: -xYZT]z6y+CfUS:dz}i#
            $('[obj-name="L23Error"]').show();
          }
        }
      }
      // Block#: HO8DW:+/o0Owq2t*3!.L
      B23NextUpdate().then(response => {;
      });
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="B23Next"]').on('click', on_B23Next_click);
  // Block#: {N4K@7CP4fW7UMheKJPq
  function on_screen_showS25AddMedication() {
    try {
      // Block#: 9n|xL0=[?GrIh8s_mJ;l
      _that.currentScreen = 'S25AddMedication';
      // Block#: mlH5JyUHQB9m0$Rgo7L9
      com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("S25AddMedication", false); // Block#: Ds30i*!Nrf,U1)b`)rZR
      if(_that.S25FirstDisplay) {
        // Block#: 8S{vS/CN{c!5qb~o;pWr
        com.fc.JavaScriptDistLib.Button.setProperty["Text"]("B25Add", 'Add Medication'); // Block#: 2jcVwCe^4iYn{x19(hIS
        _that.selectionMade = false;
        // Block#: G7e9V#-h`m|a-C{ptSBF
        S25UpdateScreen().then(response => {;
        });
        // Block#: z6Ths%j{;}-tgWjPC0gm
        _that.S25FirstDisplay = false;
      }
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="S25AddMedication"]').on('show', on_screen_showS25AddMedication);
  com.fc.JavaScriptDistLib.Screen.screenDict['showS25AddMedication'] = on_screen_showS25AddMedication;
  // Block#: g?KW3@fEq^|J0;9l`N(?
  function on_screen_showS20BasicInput() {
    try {
      // Block#: !*0X?Uf`kWjy3yh_rAP-
      _that.currentScreen = 'S20BasicInput';
      // Block#: kusrdUGV:`DDW#uVq$Yu
      $('[obj-name="L20Error"]').hide(); // Block#: !icG()o3ZMlC,;:l?1vs
      if(_that.S28FirstDisplay) {
        // Block#: *Ij#O~T*=QW2#b0sh}~t
        _that.selectionMade = false;
        // Block#: ve5q2JvdND5=)0#*^}X$
        _that.numberSelected = 0;
        // Block#: pO@.d_%gYtUKP-/0(Z+n
        com.fc.JavaScriptDistLib.ListLibrary.listEmpty(_that.checkBoxList)
        // Block#: 8FDde==lEe+XM-`3igKW
        S20UpdateScreen().then(response => {;
        });
      }
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="S20BasicInput"]').on('show', on_screen_showS20BasicInput);
  com.fc.JavaScriptDistLib.Screen.screenDict['showS20BasicInput'] = on_screen_showS20BasicInput;
  // Block#: ~I`T`c],OgEP9Nr2ut6O
  let on_screen_back_button_pressS3BasicOrange = function() {
    try {
      // Block#: tJaRAHqv[L,B8%fg6[[;
      if(!_that.buttonClicked && ($('[obj-name="B3Back"]').is(':visible'))) {
        // Block#: IW8/,iW^^3iCt3OU$]OR
        _that.buttonClicked = true;
        // Block#: w3A2]]MK4eUZ;3iyG$n^
        _that.returnError = saveTaskAndNext(getOutcomeName('B3Back'));
      } else {
        // Block#: Kqie1S9)GMD.hBY)^Ii4
        com.fc.JavaScriptDistLib.Application.sendToBackground();
      }
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  com.fc.JavaScriptDistLib.Screen.screenDict['backS3BasicOrange'] = on_screen_back_button_pressS3BasicOrange;
  // Block#: -e5jtst~`},s*7XtEPG[
  function on_screen_showS3BasicOrange() {
    try {
      // Block#: !@u3d=v{PF;q2MPtwXcc
      _that.currentScreen = 'S3BasicOrange';
      // Block#: oAo!)Ban#NW*rv2$v)z-
      if(_that.S3FirstDisplay) {
        // Block#: -JVAy@7YJb|Gm:1(|EEa
        _that.S3FirstDisplay = false;
        // Block#: #}{JurtoAPoj@T2;+l{w
        S3UpdateScreen().then(response => {;
        });
      }
      // Block#: :.q(.Q+{^v~m=!A0|_D|
      $('[obj-name= "L3LearnMore"]').unbind('click');
      $('[obj-name= "L3LearnMore"]').bind('click', on_Label_L3LearnMore_CLICK); // Block#: yC%0fm@IW{dv|9)@~9!D
      $('[obj-name= "L3Dialog"]').unbind('click');
      $('[obj-name= "L3Dialog"]').bind('click', on_Label_L3Dialog_CLICK);
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="S3BasicOrange"]').on('show', on_screen_showS3BasicOrange);
  com.fc.JavaScriptDistLib.Screen.screenDict['showS3BasicOrange'] = on_screen_showS3BasicOrange;
  // Block#: |ngRk,/#$nyW*#4m_+8#
  function on_B8Back_click(e) {
    try {
      // Block#: RBC^[9jBFh8/B_Rg,i!+
      if(!_that.buttonClicked) {
        // Block#: UZT6dzcN0|{5{:$}gyCb
        if(getOutcomeName('B8Back') != null) {
          // Block#: 8n*Mt2NgHe~%}%-C7n-:
          _that.buttonClicked = true;
          // Block#: 9mFCWb25kZv$JIP@tg$A
          _that.returnError = saveTaskAndNext(getOutcomeName('B8Back'));
        }
      }
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="B8Back"]').on('click', on_B8Back_click);
  // Block#: B#02%y!]+(AL;n=!wy:C
  function on_screen_showS21Pin() {
    try {
      // Block#: i,,|PBS7P#W2NyD;Vobg
      _that.currentScreen = 'S21Pin';
      // Block#: J,L7{IYPF8|VfR(ZMZ^J
      com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("S21Pin", false); // Block#: lf$]?6:;Yps}RI]ZMarW
      _that.test = true;
      // Block#: 5:?cO5Ef4J~5./J{@yG_
      _that.buttonClicked = false;
      // Block#: 8uugL2Cq@88Df};T*L:{
      _that.userPinString = '';
      // Block#: W`Yz$e{l0B4pj!BPQ2.t
      S21UpdatePinProgress(_that.userPinString.length).then(response => {;
      });
      // Block#: K$|6/|~lRa(R!y3.pmXM
      if(_that.S21FirstDisplay) {
        // Block#: rE[nt80-8*3A2}IEUw/-
        com.fc.JavaScriptDistLib.GridView.saveTemplateCell('GV21KeyPad');
        com.fc.JavaScriptDistLib.GridView.removeAllCells('GV21KeyPad');
        on_gridview_length_configured_GV21KeyPad();
        // Block#: 4ARlb)AFK/cDu1I_b?Qn
        S21HideObjects().then(response => {;
        });
        // Block#: h;n,v|s62Jt%nDZpALI?
        S21UpdateScreen().then(response => {;
        });
      }
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="S21Pin"]').on('show', on_screen_showS21Pin);
  com.fc.JavaScriptDistLib.Screen.screenDict['showS21Pin'] = on_screen_showS21Pin;
  // Block#: WDG:Ju1U8h4cHe{^:|Nd
  try {
    $('[obj-name="LV20Answers"]').scroll(function(e) {
      var offsetY = e.currentTarget.scrollTop;
      // Block#: xZ99$%[9,29C^Y4_sBPh
      if(!(com.fc.JavaScriptDistLib.ListView.isCellVisible('LV20Answers', 1, 'ListViewCell'))) {
        // Block#: 7z;m4Df4eMCw^`~DfEEF
        $('[obj-name="I20TopScrollArrows"]').show();
      } else {
        // Block#: nQ=-C+/qjsOh;Q8kVZZ%
        $('[obj-name="I20TopScrollArrows"]').hide();
      }
      // Block#: 1%5g!/^%xdLbcx+{pV-~
      if(!(com.fc.JavaScriptDistLib.ListView.isCellVisible('LV20Answers', (_that.checkBoxList.length - 1), 'ListViewCell'))) {
        // Block#: D+sIq^?dNS)R5p-b1k*9
        $('[obj-name="I20BottomScrollArrows"]').show();
      } else {
        // Block#: 9sGAsn9XnX7@Y.^9(Ur#
        $('[obj-name="I20BottomScrollArrows"]').hide();
      }
    });
  } catch(e) {
    com.fc.JavaScriptDistLib.handleExceptionNative(e);
  }
  // Block#: Oox^8K3^(fj?nStH*6oe
  function on_listview_cell_clicked_LVC25Medications(LVC25Medications, number) {
    try {
      // Block#: p$4g~|Q^7mTX_Zp)pm(n
      _that.selectedMeds.splice(number, 1);
      // Block#: o}-U,v;k@2X%-l8Jke1P
      com.fc.JavaScriptDistLib.ListView.saveTemplateCell('LV25Medications');
      com.fc.JavaScriptDistLib.ListView.removeAllCells('LV25Medications');
      on_listview_length_configured_LV25Medications();
      // Block#: w5V$[xF_yLBOa293{;Hn
      S25UpdateScreen().then(response => {;
      });
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  }
  com.fc.JavaScriptDistLib.ListView.setClickCallback('LVC25Medications', on_listview_cell_clicked_LVC25Medications);
  // Block#: ^keU7V`N/Gy!q(,#~-VO
  function on_screen_showS23SingleInput() {
    try {
      // Block#: {6U6~L9s72Mi(zdl+9d3
      _that.currentScreen = 'S23SingleInput';
      // Block#: XI@|U.c^|9=!*/Wg!6dC
      com.fc.JavaScriptDistLib.Textbox.setProperty["Text"]("T23Text", ''); // Block#: yII,lXC7#|x~KMSYa~J)
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("L23Error", 'Invalid input'); // Block#: C%m@V]DnX;9b8:@u^b^3
      _that.selectionMade = false;
      // Block#: m`so:_OB-jIMjZbsS7G7
      _that.nextClicked = false;
      // Block#: |`;C]UtT;OA.F~{,@~{/
      S23UpdateScreen().then(response => {;
      });
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="S23SingleInput"]').on('show', on_screen_showS23SingleInput);
  com.fc.JavaScriptDistLib.Screen.screenDict['showS23SingleInput'] = on_screen_showS23SingleInput;
  // Block#: R.RcWcG8h~gg~lRow{GU
  function on_B21Back_click(e) {
    try {
      // Block#: #(Z;U^n4}9^JN)o;{Q{H
      if(!_that.buttonClicked) {
        // Block#: p/wA68TVWG:x2ksB}b6F
        if(!($('[obj-name="L21TextBody"]').is(':visible')) && com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Label.getProperty["Text"]("L21TextTitle"), "EQUAL", 'Enter Passcode') &&
          !_that.isLoggedIn) {
          // Block#: +GGekY6Ejop!6ClHo~W5
          let hideScreen = $('.HTML5-deploy-wrapper .Screen:visible');
          //Close all dialogs
          com.fc.JavaScriptDistLib.Screen.closeDialogs();
          hideScreen.hide();
          let showScreen = $('[obj-name="S12Email"]');
          showScreen.show();
          history.pushState({
            'view': 'S12Email'
          }, 'S12Email', '?S12Email');
          hideScreen.triggerHandler('hide');
          showScreen.triggerHandler('show');
        } else {
          // Block#: 8Ik@1Ty3u80gpqm0[yZQ
          _that.buttonClicked = true;
          // Block#: O+Fcn1|ocZ^K!+c829ho
          com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("S21Pin", true); // Block#: JY]cc@pU![Nc{z*:(f^{
          _that.returnError = saveTaskAndNext(getOutcomeName('B21Back'));
        }
        // Block#: ,H9@aOxq8pIyQh$uYfhw
        if(getOutcomeName('B21Back') != null) {}
      }
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="B21Back"]').on('click', on_B21Back_click);
  // Block#: IRf#NUiknzq`^!iqOMFP
  function on_listview_cell_configured_LVC25Medications(LVC25Medications, number) {
    try {
      // Block#: tzT()M;Om5Z+O9Y?f(cJ
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("L25Medication", (_that.selectedMeds[number]));
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  com.fc.JavaScriptDistLib.ListView.setConfigCallback('LVC25Medications', on_listview_cell_configured_LVC25Medications);
  // Block#: aU[BkuO*}bea/S:!0Qg=
  function on_B20Next_click(e) {
    try {
      // Block#: 9SPuRMNXa{1,iEtT;p:U
      if(!_that.buttonClicked && _that.selectionMade) {
        // Block#: ZI*2`%-|kE^}r1C|S=03
        if(getOutcomeName('B20Next') != null) {
          // Block#: K^ifnzW]0(meD-22Xu-e
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(_that.inputType, "EQUAL", 'boolean')) {
            // Block#: 3E1@f}U`/Q)^Id.s}E~8
            setCheckboxValues().then(response => {;
            });
          } else if(com.fc.JavaScriptDistLib.TextLib.textComparison(_that.inputType, "EQUAL", 'radio-buttons')) {
            // Block#: o5l,qp.OFWGE7m)gRJ#]
            setRadioButtonOptionsValue().then(response => {;
            });
          } else if(com.fc.JavaScriptDistLib.TextLib.textComparison(_that.inputType, "EQUAL", 'text') ||
            com.fc.JavaScriptDistLib.TextLib.textComparison(_that.inputType, "EQUAL", 'integer')
          ) {
            // Block#: fzbM{[%~oB!S{l6_Qw2(
            if(com.fc.JavaScriptDistLib.TextLib.textComparison(_that.validationType, "EQUAL", 'medication')) {
              // Block#: 3cY=tDyhtk^Y7c(.!_tp
              if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(_that.selectedMeds.length, "EQ", 1) &&
                com.fc.JavaScriptDistLib.TextLib.textComparison(String(_that.selectedMeds[0]), "EQUAL", 'None')
              ) {
                // Block#: 8V:Q#vDr=_45IB7GkT5O
                com.fc.JavaScriptDistLib.ListLibrary.listEmpty(_that.selectedMeds)
              }
              // Block#: n.P3bJWoy1#Xq/B2U/$H
              if(!isMedNameSelected(com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("T20Text"))) {
                // Block#: b-=+6e`W=CYUj{@9-Z:}
                com.fc.JavaScriptDistLib.ListLibrary.listAdd(_that.selectedMeds, com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("T20Text"))
                // Block#: dhXZ,Y973UVX.:n`V8HH
                setFormFieldByMapKey('answer1', 'value', com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("T20Text"));
              }
            } else {
              // Block#: nv%/fe4tD-[o(YemzLe[
              setFormFieldByMapKey('answer1', 'value', com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("T20Text"));
            }
          } else if(com.fc.JavaScriptDistLib.TextLib.textComparison(_that.inputType, "EQUAL", 'date')) {
            // Block#: JAA9A@f4bL{,aGkIf]9!
            _that.formDate = com.fc.JavaScriptDistLib.TextLib.textSplitWith(com.fc.JavaScriptDistLib.Button.getProperty["Text"]("B20Date"), '/');
            // Block#: fhs8K/.O`U`dzC#eie{Z
            setFormFieldByMapKey('answer1', 'value', [_that.formDate.slice(-1)[0], '-', _that.formDate[0], '-', _that.formDate[1]].join(''));
          }
          // Block#: J{S)d?b5HJK+$Jovg204
          _that.buttonClicked = true;
          // Block#: @g/mn8{m$*FuB/DXAH8Y
          _that.returnError = saveTaskAndNext(getOutcomeName('B20Next'));
        }
      }
      // Block#: Ed`iA0Cj90_v{zoEn]|X
      B20NextUpdate().then(response => {;
      });
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="B20Next"]').on('click', on_B20Next_click);
  // Block#: 7RXL-iOFa{|{crB/CmHw
  let on_screen_back_button_pressS23SingleInput = function() {
    try {
      // Block#: }Nq/P],4Q**U+u(i1R{}
      if(!_that.buttonClicked && ($('[obj-name="B23Back"]').is(':visible'))) {
        // Block#: vBkJuYS=$^0X5)dO.i*T
        _that.buttonClicked = true;
        // Block#: =jj6F:2.-Ttn7[,ysbzb
        _that.returnError = saveTaskAndNext(getOutcomeName('B23Back'));
      } else {
        // Block#: }avY:ceM`VM|*MNham8)
        com.fc.JavaScriptDistLib.Application.sendToBackground();
      }
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  com.fc.JavaScriptDistLib.Screen.screenDict['backS23SingleInput'] = on_screen_back_button_pressS23SingleInput;
  // Block#: 9RcX^?vni80LvXg1YuEV
  let on_screen_back_button_pressS12Email = function() {
    try {
      // Block#: mRkoyoU@1VdvE:j]xxGX
      if(!_that.buttonClicked && !_that.isLoggingIn) {
        // Block#: 7lb.%P;%)NuY!DA2LBbl
        _that.buttonClicked = true;
        // Block#: )ENH41f)|%^BRVC]Nn.v
        com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("S12Email", true); // Block#: g5@by+d4MF4BTOF%Zgyl
        _that.returnError = saveTaskAndNext(getOutcomeName('B12Back'));
      } else {
        // Block#: *0$#Bb5PBC.@?io*{yEE
        let hideScreen = $('.HTML5-deploy-wrapper .Screen:visible');
        //Close all dialogs
        com.fc.JavaScriptDistLib.Screen.closeDialogs();
        hideScreen.hide();
        let showScreen = $('[obj-name="S1Intro"]');
        showScreen.show();
        history.pushState({
          'view': 'S1Intro'
        }, 'S1Intro', '?S1Intro');
        hideScreen.triggerHandler('hide');
        showScreen.triggerHandler('show');
      }
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  com.fc.JavaScriptDistLib.Screen.screenDict['backS12Email'] = on_screen_back_button_pressS12Email;
  // Block#: CeFM,-@40)i?C8_Q9N,=
  function on_screen_showS15Webview() {
    try {
      // Block#: _W.mL0Z8;[[r]8{7D#$o
      _that.currentScreen = 'S15Webview';
      // Block#: Z{u~65.3[(@-dtls:uHd
      if(_that.S15FirstDisplay) {
        // Block#: YS4}=16:RcsQOg3lH6*:
        $('[obj-name="WC15StudyBlog"]').hide(); // Block#: sPylj#|p7oI}b0N~8-nh
        $('[obj-name="L15Title"]').hide(); // Block#: M|k7bt+[Wf:}k?)]8{Po
        _that.currentProperty = getFormProperty('url');
        // Block#: S[sm{1Lc0JW;OmdES4AD
        if(_that.currentProperty != null) {
          // Block#: w/j6#lX|kx-Q0aLa03f_
          com.fc.JavaScriptDistLib.WebContainer.setProperty["URL"]("WC15StudyBlog", _that.currentProperty); // Block#: .n}zXeNwJ8p_vl^rQ,[F
          $('[obj-name="WC15StudyBlog"]').show(); // Block#: mYi7yjq4hs9t09VB}az=
          com.fc.JavaScriptDistLib.WebContainer.refresh('WC15StudyBlog')
        }
        // Block#: 1g|)Z{2?30!)YGRa{#kX
        _that.currentProperty = getFormProperty('title');
        // Block#: Aq:BZ5!J#=mnJl_*7a|t
        if(_that.currentProperty != null) {
          // Block#: 9-UxK=pYn[Y*[bv[*x:f
          $('[obj-name="L15Title"]').show(); // Block#: +Og^twtX[uU1CX)R10nj
          com.fc.JavaScriptDistLib.Label.setProperty["Text"]("L15Title", _that.currentProperty);
        }
      }
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="S15Webview"]').on('show', on_screen_showS15Webview);
  com.fc.JavaScriptDistLib.Screen.screenDict['showS15Webview'] = on_screen_showS15Webview;
  // Block#: SZzCn/[lHw^1ya-9x3;M
  let on_screen_back_button_pressS25AddMedication = function() {
    try {
      // Block#: #n@s35y3cSj3TQ8t)x56
      if(!_that.buttonClicked && ($('[obj-name="B25Back"]').is(':visible'))) {
        // Block#: _zW4{Dc6|5/R|^(9J27P
        _that.buttonClicked = true;
        // Block#: Rfj7,BmJk=P!r|9R^4Gp
        com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("S25AddMedication", true); // Block#: GPRB;v{^V:%HKi=P{!:E
        _that.returnError = saveTaskAndNext(getOutcomeName('B25Back'));
      } else {
        // Block#: Rx(A(?z*y[6/afpO.K`e
        com.fc.JavaScriptDistLib.Application.sendToBackground();
      }
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  com.fc.JavaScriptDistLib.Screen.screenDict['backS25AddMedication'] = on_screen_back_button_pressS25AddMedication;
  // Block#: }#D^X5n3OVefwVQTTP`o
  function on_Label_L8LearnMore_CLICK(e) {
    try {
      // Block#: Oezz4,07R4ER}`/}?Y-P
      if(!_that.buttonClicked) {
        // Block#: R9XkEnG:HcM0%hKjW4wv
        if(getOutcomeName('B8LearnMore') != null) {
          // Block#: VB0.2s0xuH#/MNok@6V7
          _that.buttonClicked = true;
          // Block#: 0Bg$dV[*;ZW~P/LKorAu
          _that.returnError = saveTaskAndNext(getOutcomeName('B8LearnMore'));
        }
      }
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    };
  };
  if($('[obj-name= "L8LearnMore"]:visible') && $('[obj-name= "L8LearnMore"]:visible')[0]) {
    $('[obj-name= "L8LearnMore"]').on('click', on_Label_L8LearnMore_CLICK);
  }
  // Block#: h-|B`-w+v+/+c[YRZ7#P
  function on_B17Back_click(e) {
    try {
      // Block#: vx^leu.5CI}NAQid3`2q
      if(!_that.buttonClicked) {
        // Block#: j/V]u{A*8?R8x|T/VV[R
        if(getOutcomeName('B17Back') != null) {
          // Block#: Nu/N]H]l(Q[I_#eXId!N
          _that.buttonClicked = true;
          // Block#: U(cgqV4wVaIjU0XSvfC#
          _that.returnError = saveTaskAndNext(getOutcomeName('B17Back'));
        }
      }
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="B17Back"]').on('click', on_B17Back_click);
  // Block#: o+=~^-g789Lbt#J#EIr!
  function on_B3Back_click(e) {
    try {
      // Block#: rxs1SUTJuuo!A??[x!07
      if(!_that.buttonClicked) {
        // Block#: ,2VMe/g/:WUZ!eHz!q_]
        if(getOutcomeName('B3Back') != null) {
          // Block#: ^z[k={NXiiQj_c(9gykd
          _that.buttonClicked = true;
          // Block#: 197nqtf-d/*/BXmfzwJB
          _that.returnError = saveTaskAndNext(getOutcomeName('B3Back'));
        }
      }
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="B3Back"]').on('click', on_B3Back_click);
  // Block#: yI{.1g!^?7vwfuquV3_:
  function on_listview_cell_configure_height_LVC20Answer(LVC20Answer, number) {
    try {
      // Block#: ),h#~_W?L%i$ip|NEHq$
      _that.LVC20Height = (com.fc.JavaScriptDistLib.Label.getTextHeight(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.checkBoxList[number], 'name')), 280, 'Century Gothic', 16)) + 24;
      return _that.LVC20Height
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  com.fc.JavaScriptDistLib.ListView.setConfigHeightCallback('LVC20Answer', on_listview_cell_configure_height_LVC20Answer);
  // Block#: =GL-H7NfUND|^2]{_wvC
  let on_screen_back_button_pressS4BasicPurple = function() {
    try {
      // Block#: ;RTwD)!bmzJ8S6(u-=)o
      if(!_that.buttonClicked && ($('[obj-name="B4Back"]').is(':visible'))) {
        // Block#: bFx`e:qckIw,XHDE#AQx
        _that.buttonClicked = true;
        // Block#: :).u)9#-d?44_}L2#H(x
        _that.returnError = saveTaskAndNext(getOutcomeName('B4Back'));
      } else {
        // Block#: Cq9SAxW/MNm,/H/TWe{t
        com.fc.JavaScriptDistLib.Application.sendToBackground();
      }
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  com.fc.JavaScriptDistLib.Screen.screenDict['backS4BasicPurple'] = on_screen_back_button_pressS4BasicPurple;
  // Block#: H5vz}k{htaKsAD3|%;D@
  let on_screen_back_button_pressS17Profile = function() {
    try {
      // Block#: 4s2dOgct0U:(51[2K)03
      if(!_that.buttonClicked && ($('[obj-name="B17Back"]').is(':visible'))) {
        // Block#: rh#8LKl/hX((L75qdQ0L
        _that.buttonClicked = true;
        // Block#: [^(_apI9U%{1)R]yr=^0
        _that.returnError = saveTaskAndNext(getOutcomeName('B17Back'));
      } else {
        // Block#: ?oqxo#;=Q|B{DH%-V89=
        com.fc.JavaScriptDistLib.Application.sendToBackground();
      }
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  com.fc.JavaScriptDistLib.Screen.screenDict['backS17Profile'] = on_screen_back_button_pressS17Profile;
  // Block#: Wq8`NjQ|lE(:A#FoK{9~
  function on_screen_showS24Medication() {
    try {
      // Block#: :}$qZrSB5M#D.,M3XiS|
      _that.currentScreen = 'S24Medication';
      // Block#: 2m}9@cX5Gz=!KY|vwy6~
      com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("S24Medication", false); // Block#: O%FvmLcf(vk1xP,!yJ~/
      _that.symbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ#';
      // Block#: A1(g=tX172RNQtcL.0$9
      setMedicationList().then(response => {;
      });
      // Block#: fC3P1A+%)wUxj4=7U5X{
      _that.selectionMade = false;
      // Block#: ;+:dq!5MAr6|Y/j;c6^~
      _that.letterNumber = 0;
      // Block#: ~sBp^iA%BcYV0y%9Ih+r
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("L24Letter", 'A'); // Block#: +,afZgLzaZtr8KzsJY!t
      $('[obj-name="LV24Medications"]').show(); // Block#: /=feri(|3^i!E]d0kKEm
      com.fc.JavaScriptDistLib.GridView.saveTemplateCell('GV24Alphabet');
      com.fc.JavaScriptDistLib.GridView.removeAllCells('GV24Alphabet');
      on_gridview_length_configured_GV24Alphabet();
      // Block#: Q;-a.Mbt`brx8z[/x3(^
      com.fc.JavaScriptDistLib.ListView.saveTemplateCell('LV24Medications');
      com.fc.JavaScriptDistLib.ListView.removeAllCells('LV24Medications');
      on_listview_length_configured_LV24Medications();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="S24Medication"]').on('show', on_screen_showS24Medication);
  com.fc.JavaScriptDistLib.Screen.screenDict['showS24Medication'] = on_screen_showS24Medication;
  // Block#: ([vzk+eIhf?|:HWje(cn
  function on_B2Next_click(e) {
    try {
      // Block#: hA|#L1jz;rP%FZjUy/[J
      if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare((com.fc.JavaScriptDistLib.Dictionary.getKeys(_that.eQualAnswers)).length, "EQ", 4) &&
        !_that.buttonClicked) {
        // Block#: Dpaaw!Kj,?7IApJM[nl6
        if(getOutcomeName('B2Next') != null) {
          // Block#: Qy8Js.ZAJ{%~8L*OQ:bl
          _that.buttonClicked = true;
          // Block#: n=6-y7ntsZQ_BAd/QPBF
          com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("S2Qualification", true); // Block#: d{@d+SmJr/*c=wghx7d#
          _that.returnError = saveTaskAndNext(getOutcomeName('B2Next'));
        }
      }
      // Block#: K}Lt/Qq6Rv2jnVnuV:y4
      B2NextUpdate().then(response => {;
      });
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="B2Next"]').on('click', on_B2Next_click);
  // Block#: {:#?5#bZG$:YK|!lbF!.
  function on_B23Skip_click(e) {
    try {
      // Block#: Zoz+[r{?Yw~|L|Z#=12p
      if(!_that.buttonClicked) {
        // Block#: kKnY8F;Me8IBM}$p`jWp
        if(getOutcomeName('B23Skip') != null) {
          // Block#: wl2t61f63[{X5dt@~c:M
          _that.buttonClicked = true;
          // Block#: ebwK*nL:%46.LjGC=n~N
          _that.returnError = saveTaskAndNext(getOutcomeName('B23Skip'));
        }
      }
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="B23Skip"]').on('click', on_B23Skip_click);
  // Block#: ]$v(2{T.#r.MfqBiO4J,
  let on_screen_back_button_pressS11Signature = function() {
    try {
      // Block#: ~G$^E+FW7~DqGQu%Lz8$
      if(!_that.buttonClicked && ($('[obj-name="B11Back"]').is(':visible'))) {
        // Block#: YUR-,n%*/w/uKIm-E2ao
        _that.buttonClicked = true;
        // Block#: C)e:Z.ZQ)16SJ.5y52sy
        _that.returnError = saveTaskAndNext(getOutcomeName('B11Back'));
      } else {
        // Block#: qN=?rPXgYDH43C9]OC~3
        com.fc.JavaScriptDistLib.Application.sendToBackground();
      }
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  com.fc.JavaScriptDistLib.Screen.screenDict['backS11Signature'] = on_screen_back_button_pressS11Signature;
  // Block#: cIwLzlJ4N20WX30w1RHm
  function on_screen_showS26GraphDisplay() {
    try {
      // Block#: N6[00|Flow77mRk$=W6h
      _that.currentScreen = 'S26GraphDisplay';
      // Block#: 3H~D5pg~CLku|L}#ekEk
      s26HideObjects().then(response => {;
      });
      // Block#: .[(+2yVaYziuMx$!k$oV
      S26SetScreen().then(response => {;
      });
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="S26GraphDisplay"]').on('show', on_screen_showS26GraphDisplay);
  com.fc.JavaScriptDistLib.Screen.screenDict['showS26GraphDisplay'] = on_screen_showS26GraphDisplay;
  // Block#: {6GdES~#0[sNc5~{(k,z
  function on_B2Cancel_click(e) {
    try {
      // Block#: ZV(LO*yE]4qMUIk~36xp
      if(!_that.buttonClicked) {
        // Block#: iH~0Peo+tmU%_L]q[aX$
        _that.dialog = (com.fc.JavaScriptDistLib.Dialog.create(_that.genericDialogTitle, _that.genericDialogBody));
        // Block#: `n@Rs]Z~@t$]Xbi%VV%U
        com.fc.JavaScriptDistLib.Dialog.addCancelBtn('No', _that.dialog)
        // Block#: MXa+lSbaseucqATscO6|
        com.fc.JavaScriptDistLib.Dialog.addBtn('Yes', _that.dialog)
        // Block#: Sa4(}8n5pVD|,*+k1cww
        com.fc.JavaScriptDistLib.Dialog.show(_that.dialog, function(button_title) {
          // Block#: {UZ+TG$:X6J34`krg/=B
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(button_title, "EQUAL", 'Yes')) {
            // Block#: ]iovOSWho#CNu=P:#Ryv
            _that.buttonClicked = true;
            // Block#: ZPCE,2n/05i0IS1+MS(%
            com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("S2Qualification", true); // Block#: c84_?gjjM3%UyiE9GSqH
            _that.returnError = saveTaskAndNext(getOutcomeName('B2Cancel'));
          }
        })
      }
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="B2Cancel"]').on('click', on_B2Cancel_click);
  // Block#: TeOYUy$M]fv#,/C1hdDN
  function on_gridview_cell_clicked_GVC24Alphabet(GVC24Alphabet, number) {
    try {
      // Block#: 3?5M+.Daytsc`UVC/,S$
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("L24Letter", com.fc.JavaScriptDistLib.TextLib.textSubstring(_that.symbols, number, 1)); // Block#: 5+7rHJMe!w.ooa-s16j$
      _that.letterNumber = number;
      // Block#: 1w^+m9,=l@+4Ek(iN[dQ
      com.fc.JavaScriptDistLib.ListView.saveTemplateCell('LV24Medications');
      com.fc.JavaScriptDistLib.ListView.removeAllCells('LV24Medications');
      on_listview_length_configured_LV24Medications();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  }
  com.fc.JavaScriptDistLib.GridView.setClickCallback('GVC24Alphabet', on_gridview_cell_clicked_GVC24Alphabet);
  // Block#: #hc[X0rwG(pNE1y]`b#|
  function on_B12Back_click(e) {
    try {
      // Block#: +dAH0D@R~.8~loW`gZGE
      if(!_that.buttonClicked) {
        // Block#: J@q64+,^UhB%cC[vB^iz
        if(getOutcomeName('B12Back') != null) {
          // Block#: %8AdgJXmQ-_);Tz|.6Mk
          _that.buttonClicked = true;
          // Block#: dGH[6`YZd@W,iK8+/.{I
          com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("S12Email", true); // Block#: Uf:7}VY^HT$biOG2qMHq
          _that.returnError = saveTaskAndNext(getOutcomeName('B12Back'));
        }
      }
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="B12Back"]').on('click', on_B12Back_click);
  // Block#: ZH|[`!ahUW$!:l^.f%1C
  function on_screen_showS8Sharing() {
    try {
      // Block#: i=Z09duc=T#Ij:X1{Dv!
      _that.currentScreen = 'S8Sharing';
      // Block#: OA5ud:Nt2#P_#U_aay:E
      if(_that.S8FirstDisplay) {
        // Block#: $WhZdcJqepU9k0I0MAgU
        _that.S8FirstDisplay = false;
        // Block#: ?`}]qWN)dI8=0O(BIQO-
        _that.selectionMade = false;
        // Block#: 7,*;-x$=PL3-DIH_[B8.
        _that.checkBoxList = [];
        // Block#: dyt#%,U`@5x/X.}emYA+
        S8UpdateScreen().then(response => {;
        });
      }
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="S8Sharing"]').on('show', on_screen_showS8Sharing);
  com.fc.JavaScriptDistLib.Screen.screenDict['showS8Sharing'] = on_screen_showS8Sharing;
  // Block#: _+~qXd?vA+$9WqH3xj(a
  function on_B25Add_click(e) {
    try {
      // Block#: 0Nb]7!vb!BLZ*5]{*])|
      if(!_that.buttonClicked) {
        // Block#: K|neY4yN?UuvptQr5h$!
        if(getOutcomeName('B25Add') != null) {
          // Block#: ]L769%z=U%!-xg1A9(2-
          _that.tempMedList = [];
          // Block#: Lw./0KghR@?LL*OFn=Rf
          var item_list = _that.selectedMeds;
          for(var item_index in item_list) {
            item = item_list[item_index];
            // Block#: ZJ*;dK$KOi.9jvSW|*ay
            com.fc.JavaScriptDistLib.ListLibrary.listAdd(_that.tempMedList, item)
          }
          // Block#: oVgVL|p!Cq4Grb*LI;=j
          _that.buttonClicked = true;
          // Block#: G/7I1b:$El5I^c(V;/QX
          com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("S25AddMedication", true); // Block#: .]CVWLkYQPvaerP.Qsg6
          _that.returnError = saveTaskAndNext(getOutcomeName('B25Add'));
        }
      }
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="B25Add"]').on('click', on_B25Add_click);
  // Block#: |)|5WFXuvZTOO)c#8iM2
  function on_B8Next_click(e) {
    try {
      // Block#: ?_5F38Kx3GP==aQ]woa`
      if(!_that.buttonClicked && _that.selectionMade) {
        // Block#: 7nOq1:H[cM$@())}+;Fb
        _that.buttonClicked = true;
        // Block#: XcXdaozF8,]b%plxq-cF
        if(getFormProperty('HealthLink') != null) {
          // Block#: PTUh39s345w/v)1@?N4D
          console.log('B8Next');
          if(_that.debugService && _that.debugService.active) {
            _that.debugService.traces.push('B8Next');
            _that.debugService.printLog();
          }
          // Block#: Mxd~C4LXax,ZfqV8r[E[
          console.log(getFormProperty('HealthLink'));
          if(_that.debugService && _that.debugService.active) {
            _that.debugService.traces.push(getFormProperty('HealthLink'));
            _that.debugService.printLog();
          }
          // Block#: }`FFWD+12fhcnvh69M9P
          console.log(_that.lastOptionValue);
          if(_that.debugService && _that.debugService.active) {
            _that.debugService.traces.push(_that.lastOptionValue);
            _that.debugService.printLog();
          }
          // Block#: RD]bN+!Q^D+klxLss6@]
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(getFormProperty('HealthLink'), "EQUAL", _that.lastOptionValue)) {
            // Block#: EQ4Ze;YGKg*CZ=N[-dkR
            _that.buttonClicked = false;
            // Block#: m?Gby8im6ITsE#oAq+IH
            if(com.fc.JavaScriptDistLib.HealthKit.isAvailable()) {
              // Block#: c]Sb`uBO8`6CC{%z_JI5
              _that.S8AuthorizeList = [('com.apple.step_count.delta'), ('com.apple.heart_rate.bpm'), ('com.apple.weight'), ('com.apple.blood_pressure')];
            } else {
              // Block#: /n7M]#y_EO+5I~D?tlS!
              _that.S8AuthorizeList = [('com.google.step_count.delta'), ('com.google.heart_rate.bpm'), ('com.google.weight'), ('com.google.blood_pressure')];
            }
            // Describe this function...
            // Block#: `:L44A6uTs=QIL;8wl,;
            healthdashboardlibrary.authorize(_that.S8AuthorizeList).then(response => {;
              if(response.name === "success") {
                // Block#: OQ@IsEjhJJ5M^d||pP{M
                if(_that.isLoggedIn) {
                  // Describe this function...
                  // Block#: Ysl:{DnFY+is(V~etS)Q
                  healthdatauploadlibrary.startUploadProcess().then(response => {;
                  });
                }
                // Block#: E4%~?~O37~+@kuy:jaxg
                _that.buttonClicked = true;
                // Block#: YzBv-NsMuyc!{Nm+$dBx
                s8End().then(response => {;
                });
              }
              if(response.name === "Error") {
                // Block#: {%_mcl.quK5;ZloZSB3_
                console.log(response.data);
                if(_that.debugService && _that.debugService.active) {
                  _that.debugService.traces.push(response.data);
                  _that.debugService.printLog();
                }
              }
            });
          } else {
            // Block#: qu*C!fh!z@HNGXS9c[}Y
            s8End().then(response => {;
            });
          }
        } else {
          // Block#: g^/B,i?Ui2WzUWc4CvOe
          s8End().then(response => {;
          });
        }
      }
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="B8Next"]').on('click', on_B8Next_click);
  // Block#: 3*#vN5@PWhux9@|B_@5J
  function on_listview_length_configured_LV20Answers() {
    try {
      com.fc.JavaScriptDistLib.ListView.configureCells('LV20Answers', _that.checkBoxList.length);
      $('[obj-name="LV20Answers"]').children().each(function(i) {
        if(i >= 0) {
          com.fc.JavaScriptDistLib.ListView.setContext($(this));
          com.fc.JavaScriptDistLib.ListView.executeConfigCallback('LV20Answers', $(this), i);
          com.fc.JavaScriptDistLib.ListView.executeConfigHeightCallback('LV20Answers', $(this), i);
          com.fc.JavaScriptDistLib.ListView.resetContext($(this));
        }
      });
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  // Block#: _wXBV@rSN(el:pA.r:@l
  function on_screen_showS12Email() {
    try {
      // Block#: xPmY%qS%PT5ALS+=mf$M
      _that.currentScreen = 'S12Email';
      // Block#: ,?``[4i=wVZ(DS@]_oPj
      $('[obj-name="L12Error"]').hide(); // Block#: #lsI+D^s2a!m8^EfVHmC
      if(_that.S12FirstDisplay) {
        // Block#: aAx*:UORgzQY57,V.Zm2
        _that.S12FirstDisplay = false;
        // Block#: ^gtUu8G^EOZsw4*aLNF1
        _that.selectionMade = false;
        // Block#: hnLLv-Kq+D/hxGS-feK1
        com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("S12Email", false); // Block#: Ob:s3X%SR7xV|H+%=^bU
        S12UpdateScreen().then(response => {;
        });
      }
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="S12Email"]').on('show', on_screen_showS12Email);
  com.fc.JavaScriptDistLib.Screen.screenDict['showS12Email'] = on_screen_showS12Email;
  // Block#: L#8H;3w@t]/3cGJseJ8/
  function on_Container_C17Babies_CLICK(e) {
    try {
      // Block#: _:`/{YEkjwmmQabP136j
      if(!_that.buttonClicked) {
        // Block#: 2.)@nVqz./npo3o_)Td?
        _that.buttonClicked = true;
        // Block#: _[K`(+45)3eV1U3=HUk=
        _that.returnError = saveTaskAndNext(getOutcomeName('C17Babies'));
      }
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    };
  };
  if($('[obj-name= "C17Babies"]:visible') && $('[obj-name= "C17Babies"]:visible')[0]) {
    $('[obj-name= "C17Babies"]').on('click', on_Container_C17Babies_CLICK);
  }
  // Block#: *WnX.eZGs|@FS7e}rPrN
  function on_B3Cancel_click(e) {
    try {
      // Block#: 5dS);2EVE2UCA7_/-`{L
      if(!_that.buttonClicked) {
        // Block#: z,fon%KmOY0s.SpDETh`
        if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Button.getProperty["Text"]("B3Cancel"), "EQUAL", 'Cancel')) {
          // Block#: 3|.~2l=q.}-((]d8|6t:
          _that.dialog = (com.fc.JavaScriptDistLib.Dialog.create(_that.genericDialogTitle, _that.genericDialogBody));
          // Block#: SL1AbRtY[{([HWP|,M=c
          com.fc.JavaScriptDistLib.Dialog.addCancelBtn('No', _that.dialog)
          // Block#: PVqah;=p8QIuo+yw*DrK
          com.fc.JavaScriptDistLib.Dialog.addBtn('Yes', _that.dialog)
          // Block#: f17n^x9Ouqfcpk8J.Akq
          com.fc.JavaScriptDistLib.Dialog.show(_that.dialog, function(button_title) {
            // Block#: MiGTc|o`t,$(5HSHTl*=
            if(com.fc.JavaScriptDistLib.TextLib.textComparison(button_title, "EQUAL", 'Yes')) {
              // Block#: wGvQ-%`#C8n/f07$AX#$
              _that.buttonClicked = true;
              // Block#: b$]?q6#3Je%oo2v?7;8A
              _that.returnError = saveTaskAndNext(getOutcomeName('B3Cancel'));
            }
          })
        } else {
          // Block#: LzSD:}?bJKDwHg8G04~z
          _that.buttonClicked = true;
          // Block#: 0zHnv2i%?ejr[{zQhO:.
          _that.returnError = saveTaskAndNext(getOutcomeName('B3Cancel'));
        }
      }
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="B3Cancel"]').on('click', on_B3Cancel_click);
  // Block#: T`K!lcPiJ*,VW]1[]`E+
  function on_screen_showS4BasicPurple() {
    try {
      // Block#: 8B{1!L[y!(Xn+@aX_xnj
      _that.currentScreen = 'S4BasicPurple';
      // Block#: 1-+DLQ~~$Sz`]xCx;6,+
      com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("S4BasicPurple", false); // Block#: ?1T^RKx6*d2hqmC_1!(?
      if(_that.S4FirstDisplay) {
        // Block#: hCcJv_-tHq[I.(y14=l{
        _that.S4FirstDisplay = false;
        // Block#: Xt5vs$+}4G@Qa(@tkHZa
        S4UpdateScreen().then(response => {;
        });
      }
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="S4BasicPurple"]').on('show', on_screen_showS4BasicPurple);
  com.fc.JavaScriptDistLib.Screen.screenDict['showS4BasicPurple'] = on_screen_showS4BasicPurple;
  // Block#: guLZ!|A8oiSaqi~$t6;r
  function on_B21Cancel_click(e) {
    try {
      // Block#: EnL.U`2rmylC)F=dvz.^
      _that.dialog = (com.fc.JavaScriptDistLib.Dialog.create(_that.genericDialogTitle, _that.genericDialogBody));
      // Block#: (dXx]Q9^ucmVP[]r4`lh
      com.fc.JavaScriptDistLib.Dialog.addCancelBtn('No', _that.dialog)
      // Block#: :hJySG_PQ^@sEB.Igb`E
      com.fc.JavaScriptDistLib.Dialog.addBtn('Yes', _that.dialog)
      // Block#: %`4Gre|@:,m3F|1`j1mS
      if(!_that.buttonClicked) {
        // Block#: vJMQd}O*~pe0M1jn7Woz
        com.fc.JavaScriptDistLib.Dialog.show(_that.dialog, function(button_title) {
          // Block#: NjohO=5p=7Dyaj`QkWf7
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(button_title, "EQUAL", 'Yes')) {
            // Block#: /GU,Dv8Cv$}*xYuzsV7O
            _that.buttonClicked = true;
            // Block#: :)nNj3{,5rF,syMXhH2W
            com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("S21Pin", true); // Block#: R,@4k^*9NRb02u|nE^XH
            _that.returnError = saveTaskAndNext(getOutcomeName('B21Cancel'));
          }
        })
      }
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="B21Cancel"]').on('click', on_B21Cancel_click);
  // Block#: pcK)PP6w,v25|qy2H|q|
  function on_listview_cell_configured_LVC20Answer(LVC20Answer, number) {
    try {
      // Block#: zPQbH(!D+K8Sy]I~@Vav
      if(_that.checkBoxList != null) {
        // Block#: W!IUxTW%||Sy]FYN$92S
        if(!!_that.checkBoxList.length) {
          // Block#: f~|=NH8ye7P!TeH*/QNN
          if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(number, "EQ", 0)) {
            // Block#: N))QdQI:J_e@0_mhRl]-
            $('[obj-name="I20TopScrollArrows"]').hide();
          }
          // Block#: Kxp*Qv[#9Xxn%$lpLaON
          if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(number, "EQ", _that.checkBoxList.length - 1)) {
            // Block#: %dDg$^s_8.ub~7Q%Wvq^
            $('[obj-name="I20BottomScrollArrows"]').hide();
          }
          // Block#: /%lEr$.21n}%m0%@uoTB
          _that.checkBoxElement = _that.checkBoxList[number];
          // Block#: K_td_~,9o5)MLF,0H5|s
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.checkBoxElement, 'value'), "EQUAL", 'FALSE')) {
            // Block#: XoN{Gv|DPlj@5ksFFPE(
            com.fc.JavaScriptDistLib.Label.setProperty["Text color"]("L20Answer", (com.fc.JavaScriptDistLib.ColourLibrary.getColourFromText('#000000'))); // Block#: mp4B~j-oBciMhYDp5h=.
            $('[obj-name="I20Selected"]').show(); // Block#: VV1?]]1zyYg9.X|Y|);r
            com.fc.JavaScriptDistLib.Image.setProperty["Image"]("I20Selected", (com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("./img/empty.png")));
          } else {
            // Block#: [F~/PktuI(wem]jn6F|I
            com.fc.JavaScriptDistLib.Label.setProperty["Text color"]("L20Answer", (com.fc.JavaScriptDistLib.ColourLibrary.getColourFromText('#dd198e'))); // Block#: {d7RfR}@*]sAZfP}ILm-
            $('[obj-name="I20Selected"]').show(); // Block#: |+sOmXP*z~SM`o.M,D4^
            com.fc.JavaScriptDistLib.Image.setProperty["Image"]("I20Selected", (com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("./img/checked.png"))); // Block#: !t?SH={l0QR7M,CL|pW$
            _that.lastOptionValue = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.checkBoxElement, 'name'));
          }
          // Block#: uUZ,SB,]:dgw5BzFX1LX
          com.fc.JavaScriptDistLib.Label.setProperty["Text"]("L20Answer", (com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.checkBoxList[number], 'name')));
        }
      }
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  com.fc.JavaScriptDistLib.ListView.setConfigCallback('LVC20Answer', on_listview_cell_configured_LVC20Answer);
  // Block#: @ZGS9OWS2GgPTIb$B/Te
  function on_B24Done_click(e) {
    try {
      // Block#: 6KVp+C0C:62l.GHQ,b6G
      if(!_that.buttonClicked) {
        // Block#: )cB5JS,L98uSpmi3PXC6
        if(getOutcomeName('B24Done') != null) {
          // Block#: ~uO$.mj`ngt`1lRw2}hK
          _that.buttonClicked = true;
          // Block#: o5E1U6l#_U0S+5Dpno[S
          com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("S24Medication", true); // Block#: *M,|BR;;e8{RqlFyPr.P
          _that.returnError = saveTaskAndNext(getOutcomeName('B24Done'));
        }
      }
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="B24Done"]').on('click', on_B24Done_click);
  // Block#: 3+m[^/jSIjQvxp1AqdEd
  function on_screen_showS17Profile() {
    try {
      // Block#: M5c)H;3OJ{%GoN0,nH1i
      _that.currentScreen = 'S17Profile';
      // Block#: *jL3Lj;BnjMH.;MqgA]Z
      S17EnableGestures().then(response => {;
      });
      // Block#: 3VO5Vk,kDueRK=~*9^4`
      S17UpdateScreen().then(response => {;
      });
      // Block#: f{,8oXP|u0t9ENr`ghOZ
      $('[obj-name="C17Overlay"]').hide();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="S17Profile"]').on('show', on_screen_showS17Profile);
  com.fc.JavaScriptDistLib.Screen.screenDict['showS17Profile'] = on_screen_showS17Profile;
  // Block#: SfkV?w:[i?o:NpX]Fma/
  function on_B4Back_click(e) {
    try {
      // Block#: O(HO*djhr..Ks:*M{g#/
      if(!_that.buttonClicked) {
        // Block#: Qp-Ey1{o$cJ@EyYVsRGD
        if(getOutcomeName('B4Back') != null) {
          // Block#: NP5WU:x8(Pwk7f(f.7ZT
          _that.buttonClicked = true;
          // Block#: 8[A?ELZ/c9hIu-Uh/9+$
          _that.returnError = saveTaskAndNext(getOutcomeName('B4Back'));
        }
      }
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="B4Back"]').on('click', on_B4Back_click);
  // Block#: GNMXh2wh]u`7hUXhqX25
  function on_screen_showS14Learn() {
    try {
      // Block#: lNo*mK|B9LW)%*oOv.F:
      _that.currentScreen = 'S14Learn';
      // Block#: EljNFrRdBZNK?RBEZC7F
      if(_that.S14FirstDisplay) {
        // Block#: OY`JYw![;O6;^UicoSig
        _that.S14FirstDisplay = false;
        // Block#: uBl2aN:z97cjmSom#C`_
        _that.learnList = [];
        // Block#: w1}~$:,,PZ|Z/;,,)R:u
        for(index = 1; index <= 7; index++) {
          // Block#: M?|n[,mG,@bDie$*t_p!
          com.fc.JavaScriptDistLib.ListLibrary.listAdd(_that.learnList, getOutcomeName(String('learn') + String(index)))
        }
        // Block#: y0*H5e5Xlhc$Kg*s16Bc
        com.fc.JavaScriptDistLib.ListView.saveTemplateCell('LV14Menu');
        com.fc.JavaScriptDistLib.ListView.removeAllCells('LV14Menu');
        on_listview_length_configured_LV14Menu();
      }
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="S14Learn"]').on('show', on_screen_showS14Learn);
  com.fc.JavaScriptDistLib.Screen.screenDict['showS14Learn'] = on_screen_showS14Learn;
  // Block#: S8xd_2-pFDt9XimTjeu4
  let on_screen_back_button_pressS22DualInput = function() {
    try {
      // Block#: 0h{t5gG,CkiG$^UXKUvZ
      if(!_that.buttonClicked && ($('[obj-name="B22Back"]').is(':visible'))) {
        // Block#: /Vq[jH#s,%RG*/0}est5
        _that.buttonClicked = true;
        // Block#: M[};4pM)UF^jfO74gUSD
        _that.returnError = saveTaskAndNext(getOutcomeName('B22Back'));
      } else {
        // Block#: ts8Fn[+oy#-zM;Ef*0c!
        com.fc.JavaScriptDistLib.Application.sendToBackground();
      }
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  com.fc.JavaScriptDistLib.Screen.screenDict['backS22DualInput'] = on_screen_back_button_pressS22DualInput;
  // Block#: *9gwUp/NxtZtkc7dbTc5
  function on_B17Cancel_click(e) {
    try {
      // Block#: .U[gB!rOqXpL6aehe-(]
      $('[obj-name="C17Overlay"]').hide();
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="B17Cancel"]').on('click', on_B17Cancel_click);
  // Block#: }77zMJn|=/|?Jc-Sa3n4
  let on_screen_back_button_pressS28TextAreaInput = function() {
    try {
      // Block#: -z_nefgf,6}EMnAkg_$M
      if(!_that.buttonClicked && ($('[obj-name="B28Back"]').is(':visible'))) {
        // Block#: )I.$A3l_Rv%dm+=hc~]Y
        _that.buttonClicked = true;
        // Block#: 121!p7jgYEu(Ul@[;(Pr
        _that.returnError = saveTaskAndNext(getOutcomeName('B28Back'));
      } else {
        // Block#: czXhd,$^ZabRuNf_cLP$
        com.fc.JavaScriptDistLib.Application.sendToBackground();
      }
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  com.fc.JavaScriptDistLib.Screen.screenDict['backS28TextAreaInput'] = on_screen_back_button_pressS28TextAreaInput;
  // Block#: r=yvH$[}sdV]Mrt6Z{AS
  function on_B23Back_click(e) {
    try {
      // Block#: Sw@~E[oTg7r,w*99tnyA
      if(!_that.buttonClicked) {
        // Block#: }(_*H!4zu$@=F=MJHbg_
        if(getOutcomeName('B23Back') != null) {
          // Block#: U`D}Gx*2}CS:$3UzW9Gp
          _that.buttonClicked = true;
          // Block#: jkQXZS94FRp=@FVp;~31
          _that.returnError = saveTaskAndNext(getOutcomeName('B23Back'));
        }
      }
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="B23Back"]').on('click', on_B23Back_click);
  // Block#: 1{vH~$o!+mX::N,*!s~g
  function on_B11Back_click(e) {
    try {
      // Block#: [[|?SkPu[{w)bx^K.{%`
      if(!_that.buttonClicked) {
        // Block#: @g.eVe?a~6b`k2w{y2XW
        if(getOutcomeName('B11Back') != null) {
          // Block#: :Zx_e6Lr2eRa@VL}kti`
          _that.buttonClicked = true;
          // Block#: Az4at?uX*22fORSvU)KZ
          _that.returnError = saveTaskAndNext(getOutcomeName('B11Back'));
        }
      }
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="B11Back"]').on('click', on_B11Back_click);
  // Block#: e#Bj,HPwvbzsggjes%E3
  function on_start() {
    try {
      // Block#: a_.=%~VsEv@ThMvW7e5!
      _that.nextProcessAfterCompletion = '';
      // Block#: XLZprBbU*0eKh^A(KE@Z
      _that.flowImages = com.fc.JavaScriptDistLib.Dictionary.createDictionary(['activities-and-surveys', 'data-trends', 'data-use', 'follow-up', 'future-independent-research', 'leave-the-study', 'not-medical-care', 'potential-benefits', 'potential-risks', 'privacy', 'qualified-researchers', 'sensor-data', 'sharable-data', 'test-your-understanding', 'think-it-over', 'time-commitment', 'pregnant', 'green-check', 'red-x'], [(com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("./img/activity.png")), (com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("./img/graph1@4x.png")), (com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("./img/magnifyingglass.png")), (com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("./img/mail.png")), (com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("./img/future.png")), (com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("./img/1.png")), (com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("./img/stethoscope.png")), (com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("./img/benefits.png")), (com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("./img/risks.png")), (com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("./img/padlock.png")), (com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("./img/certified.png")), (com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("./img/wave.png")), (com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("./img/1.png")), (com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("./img/1@4x.png")), (com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("./img/hand.png")), (com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("./img/clock2.png")), (com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("./img/RGB.png")), (com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("./img/1.png")), (com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("./img/1.png"))]);
      // Block#: r-VHV?[Zrph*0M(dhfDI
      _that.buttonClicked = false;
      // Block#: ^?}.s:g#CK1@/,a{dLF,
      _that.isLoggedIn = false;
      // Block#: ,8/[fGp[%ZfG4ffO+7li
      _that.applicationInBG = false;
      // Block#: K_E,!2y%#DjYu;UAPXP{
      _that.applicationShouldDisplayAfterBG = false;
      // Block#: rswaayUC[PO{%I($z=%~
      _that.goToActivities = false;
      // Block#: {O,6vP91Fs:6vO{g7hNT
      _that.checkBoxList = [];
      // Block#: M7.1~ZhrPzXaVTL).V|T
      _that.selectedMeds = [];
      // Block#: AYI`?PyZO?Wq*pzg(^S1
      _that.tempMedList = [];
      // Block#: r=uz1+#@L-a1W|,ya/B?
      _that.editingMedList = false;
      // Block#: Bs[6+v1]wGWM*M|*W0Ib
      _that.activityList = [];
      // Block#: CnNYo!H[nESue58+Ap6{
      _that.genericDialogBody = 'If you cancel you will lose your answers to any questions answered and your progress will be lost. Do you still want to cancel this process?';
      // Block#: }L@RbbxDzs!|-Gwc,G`D
      _that.genericDialogTitle = 'Confirm';
      // Block#: q1PoQv17v%tDAWg]fCZ,
      _that.pieChartStyle = '<style> .pie-container-chart {     height: 130px;  margin-left: 0px;   margin-top: 0px; position: relative;   }   .pie-chart {    position: absolute;  width: 150px;    height: 150px;   border-radius: 75px;  clip: rect(0px, 75px, 150px, 0px);  } .hold-chart {  position: absolute;   width: 150px;  height: 150px;  border-radius:75px;  clip: rect(0px, 150px, 150px, 75px);}  ';
      // Block#: lF9Bs6i]}r?aGp}JlpU7
      _that.pieChartDivs = '</style>    </style> <div class="pie-container-chart grow">        <div class="pieBackground"></div>    <div id="pieSlice1" class="hold-chart"><div class="pie-chart"></div></div> <div id="pieSlice1_ext" class="hold-chart"><div class="pie-chart"></div></div>  <div id="pieSlice2" class="hold-chart"><div class="pie-chart"></div></div>  <div id="pieSlice2_ext" class="hold-chart"><div class="pie-chart"></div></div>  <div id="pieSlice3" class="hold-chart"><div class="pie-chart"></div></div> <div id="pieSlice3_ext" class="hold-chart"><div class="pie-chart"></div></div>  <div id="pieSlice4" class="hold-chart"><div class="pie-chart"></div></div>  <div id="pieSlice4_ext" class="hold-chart"><div class="pie-chart"></div></div> <div id="pieSlice5" class="hold-chart"><div class="pie-chart"></div></div>   <div id="pieSlice5_ext" class="hold-chart"><div class="pie-chart"></div></div> <div id="pieSlice6" class="hold-chart"><div class="pie-chart"></div></div> <div id="pieSlice6_ext" class="hold-chart"><div class="pie-chart"></div></div>';
      // Block#: 2r]CpTc,1^68*FVLb92J
      _that.currentScreen = '';
      // Block#: a9qv]fOBT+xv6,,opz0F
      _that.ListOptions = [];
      // Block#: sa@jDEq6QQz72^wD[FB:
      _that.S8AuthorizeList = [];
      // Block#: T,5,KgUS.DBna](|9x8x
      _that.ageGroups = ['18-19', '20-24', '25-29', '30-34', '35-39', '40+'];
      // Block#: U|iVUWc^pa()9Cv03kTZ
      _that.healthHistoryGroups = com.fc.JavaScriptDistLib.Dictionary.createDictionary(['genderHealthHistory', 'mentalHealth'], [
        ['Male', 'Female', 'Choose not to find out', 'too early'],
        ['anxiety', 'anxiety-depression', 'depression', 'No']
      ]);
      // Block#: cotsfHhp6.S}qh3WLj=3
      _that.healthHistoryLabels = com.fc.JavaScriptDistLib.Dictionary.createDictionary(['genderHealthHistory', 'mentalHealth'], [
        ['Male', 'Female', 'Choose not to find out', 'Too early'],
        ['Anxiety', 'Anxiety-Depression', 'Depression']
      ]);
      // Block#: @#rafv]F,,:*ZSN,qBJ:
      _that.outcomeGroups = com.fc.JavaScriptDistLib.Dictionary.createDictionary(['weight', 'length', 'gender'], [
        ['0-5', '6', '7', '8', '9', '10-over'],
        ['0-15', '16', '17', '18', '19', '20-over'],
        ['Boy', 'Girl']
      ]);
      // Block#: 8[cXeT4*YDmL:Yp4GA3D
      _that.outcomeLabels = com.fc.JavaScriptDistLib.Dictionary.createDictionary(['weight', 'length', 'gender'], [
        ['0-5', '6', '7', '8', '9', '10+'],
        ['0-15', '16', '17', '18', '19', '20+'],
        ['Boy', 'Girl']
      ]);
      // Block#: $YS.Uz$fez=BFwmftMI`
      _that.weeklyGroups = ['nausea', 'vomiting', 'cramping', 'none'];
      // Block#: 8b~@kHd-IP43YCDzV(^s
      _that.weeklyLabels = ['Nausea', 'Vomiting', 'Cramping', 'None'];
      // Block#: V{V-EvN,jtF$in`yr9wC
      _that.Xvalues = [];
      // Block#: os$lCH:#Gme`e;:]eUwm
      _that.colorLists = com.fc.JavaScriptDistLib.Dictionary.createDictionary(['genderHealthHistory', 'genderOutcome'], [
        [(com.fc.JavaScriptDistLib.ColourLibrary.getColourFromText('#d7f4ff')), (com.fc.JavaScriptDistLib.ColourLibrary.getColourFromText('#ffc8e7')), (com.fc.JavaScriptDistLib.ColourLibrary.getColourFromText('#F4FFD7')), (com.fc.JavaScriptDistLib.ColourLibrary.getColourFromText('#D7E0FF'))],
        [(com.fc.JavaScriptDistLib.ColourLibrary.getColourFromText('#d7f4ff')), (com.fc.JavaScriptDistLib.ColourLibrary.getColourFromText('#ffc8e7'))]
      ]);
      // Block#: hxd+u7mSwy3$[]L[d@ur
      setMedicationList().then(response => {;
      });
      // Block#: hJBfdj`~q|vfWJRF,=oD
      handleEnvironment().then(response => {;
      });
      // Describe this function...
      // Block#: !kDkOZl@!@AGJB_;yna$
      healthdatauploadlibrary.initHealthDataUploadLibrary().then(response => {;
      });
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  com.fc.JavaScriptDistLib.Application.registerEvent('start', on_start);
  // Block#: @Bd~%/Cr7fDjo]sH$cY8
  function on_screen_showS1Intro() {
    try {
      // Block#: yea8W7q:4tlAZzBFtKo;
      _that.checkBoxValue = false;
      // Block#: nT:rBR4mPj0V8`CFVTaw
      _that.currentScreen = 'S1Intro';
      // Block#: uS1iY6em$:(tM~,Is=`t
      _that.buttonClicked = false;
      // Block#: pYQ-uLly6T39h`ulKvz=
      $('[obj-name= "C1Checkbox"]').unbind('click');
      $('[obj-name= "C1Checkbox"]').bind('click', on_Container_C1Checkbox_CLICK); // Block#: `{s3.g)ZnUl(F{o~/@#Y
      c1CheckboxUpdate().then(response => {;
      });
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="S1Intro"]').on('show', on_screen_showS1Intro);
  com.fc.JavaScriptDistLib.Screen.screenDict['showS1Intro'] = on_screen_showS1Intro;
  // Block#: 1RIUm#og-PK{fVSf#WF.
  function on_screen_showHealthDashboardScreen() {
    try {
      // Block#: i|(#j(j,#;WT2HcAQwkn
      _that.currentScreen = 'HealthDashboardScreen';
      // Block#: Mc:u%{{W`plH`62_s;lS
      if(_that.dashboardFirstDisplay) {
        // Describe this function...
        // Block#: H5`b+XoCywm(uO9.@G|{
        healthdashboardlibrary.displayDashboard().then(response => {;
        });
        // Block#: oqzs85[cqBg[,3Fv,kJu
        _that.currentProperty = getProcessVariable('previousweight');
        // Block#: v]q1P_9H.g01~RoY[|LP
        if(!(_that.currentProperty == null)) {
          // Block#: r?^y(``h2p6r*3);`_;D
          console.log(String('previousweight: ') + String(_that.currentProperty));
          if(_that.debugService && _that.debugService.active) {
            _that.debugService.traces.push(String('previousweight: ') + String(_that.currentProperty));
            _that.debugService.printLog();
          }
          // Describe this function...
          // Block#: ;oHEE5Twm*W(kvQ/=R6j
          healthdashboardlibrary.setPrePregnancyWeight(_that.currentProperty).then(response => {;
          });
        }
        // Block#: J,ij-K*1B{./sLdu,o.S
        if(com.fc.JavaScriptDistLib.TextLib.textComparison('Web', "EQUAL", 'Web')) {
          // Block#: tgFn5GVG?tn!;nh!DDlm
          if(com.fc.JavaScriptDistLib.ListLibrary.listContains((com.fc.JavaScriptDistLib.Storage.getAllKeys()), 'showFitDialog')) {
            // Block#: WYRlmxG-p!F$;R}PG}C@
            if(com.fc.JavaScriptDistLib.Storage.getValue('showFitDialog')) {
              // Block#: DryBi8egV?GlZ?LMSk}M
              _that.dialog = (com.fc.JavaScriptDistLib.Dialog.create('Reconnect To Google Fit', 'We have lost connection with your google fit account. Would you like to reconnect?'));
              // Block#: `:yM/s@t[#=Vw`q5b/@L
              com.fc.JavaScriptDistLib.Dialog.addBtn('Yes', _that.dialog)
              // Block#: 5Q{)s0Z*)+0wD[PeA5Cy
              com.fc.JavaScriptDistLib.Dialog.addCancelBtn('No', _that.dialog)
              // Block#: V!h,qT`Hz|Eeb)k2#nb^
              com.fc.JavaScriptDistLib.Dialog.show(_that.dialog, function(button_title) {
                // Block#: Ze{4U!B.gXMx6roy5I*H
                if(com.fc.JavaScriptDistLib.TextLib.textComparison(button_title, "EQUAL", 'Yes')) {
                  // Describe this function...
                  // Block#: `Oo)-QoGNW9r.ES-SF@Q
                  healthdashboardlibrary.authorize([('com.google.step_count.delta'), ('com.google.heart_rate.bpm'), ('com.google.weight'), ('com.google.blood_pressure')]).then(response => {;
                    if(response.name === "success") {
                      // Block#: YF3j?{O`0g9*PN08(WCa
                      com.fc.JavaScriptDistLib.Storage.add('showFitDialog', false) // Describe this function...
                      // Block#: O[$Rzz+O1IW!p6b+!=-W
                      healthdashboardlibrary.displayDashboard().then(response => {;
                      });
                    }
                    if(response.name === "Error") {
                      // Block#: 6`-sqR@`Afk92*hU3}^r
                      console.log(response.data);
                      if(_that.debugService && _that.debugService.active) {
                        _that.debugService.traces.push(response.data);
                        _that.debugService.printLog();
                      }
                    }
                  });
                } else {
                  // Block#: 1^Daoa.D.^gOwiysTQYk
                  com.fc.JavaScriptDistLib.Storage.add('showFitDialog', false)
                }
              })
            }
          }
        }
      }
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="HealthDashboardScreen"]').on('show', on_screen_showHealthDashboardScreen);
  com.fc.JavaScriptDistLib.Screen.screenDict['showHealthDashboardScreen'] = on_screen_showHealthDashboardScreen;
  // Block#: ]1_f=y4Vj8yk*^B9;xS?
  com.fc.JavaScriptDistLib.FireBase.onRegTokenRefresh(function(token) {
    // Block#: ?/WeI]mDn|#F#M6^!lF]
    if(_that.isLoggedIn) {
      // Block#: naU(wQ2aL{)-29jzDOBC
      console.log(String('PUSH TOKEN:  ') + String(token));
      if(_that.debugService && _that.debugService.active) {
        _that.debugService.traces.push(String('PUSH TOKEN:  ') + String(token));
        _that.debugService.printLog();
      }
      // Block#: r[Qg@JWBmB$SzF.GmJFf
      PushFirebaseToken().then(response => {;
      });
    }
  });
  // Block#: F|PZ3]4oz}ie_g=+4?)V
  function on_gridview_length_configured_GV24Alphabet() {
    try {
      com.fc.JavaScriptDistLib.GridView.configureCells('GV24Alphabet', _that.symbols.length);
      $('[obj-name="GV24Alphabet"]').children().each(function(i) {
        if(i >= 0) {
          com.fc.JavaScriptDistLib.GridView.setContext($(this));
          com.fc.JavaScriptDistLib.GridView.executeConfigCallback('GV24Alphabet', $(this), i);
          com.fc.JavaScriptDistLib.GridView.executeConfigHeightCallback('GV24Alphabet', $(this), i);
          com.fc.JavaScriptDistLib.GridView.executeConfigWidthCallback('GV24Alphabet', $(this), i);
          com.fc.JavaScriptDistLib.GridView.resetContext($(this));
        }
      });
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  // Block#: Gp%vP1QFfZ7F?xLL_+7x
  function on_Container_C17DueDate_CLICK(e) {
    try {
      // Block#: J38nic4295)-)ys=4Ot_
      if(!_that.buttonClicked) {
        // Block#: /8M;uR`cT;xc+Y;vF,G{
        _that.buttonClicked = true;
        // Block#: X*a,OEJ}`}G%f=0;@xp`
        _that.returnError = saveTaskAndNext(getOutcomeName('C17DueDate'));
      }
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    };
  };
  if($('[obj-name= "C17DueDate"]:visible') && $('[obj-name= "C17DueDate"]:visible')[0]) {
    $('[obj-name= "C17DueDate"]').on('click', on_Container_C17DueDate_CLICK);
  }
  // Block#: ~*:LVY#_gxUXGNp.%wUM
  let on_screen_back_button_pressS9Html = function() {
    try {
      // Block#: IVE|]2oaTuxWc|#b`/X[
      if(!_that.buttonClicked && ($('[obj-name="B9Back"]').is(':visible'))) {
        // Block#: :mVL@9^FK$,ZWi|?;wK~
        _that.buttonClicked = true;
        // Block#: Y[*@tKmWf~uRr5lNXu^(
        _that.returnError = saveTaskAndNext(getOutcomeName('B9Back'));
      } else {
        // Block#: b]dGQs[NnTfz$5~`+Y.z
        com.fc.JavaScriptDistLib.Application.sendToBackground();
      }
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  com.fc.JavaScriptDistLib.Screen.screenDict['backS9Html'] = on_screen_back_button_pressS9Html;
  // Block#: O?q@?:a,xfE,B$pzc$OR
  function on_listview_length_configured_LV14Menu() {
    try {
      com.fc.JavaScriptDistLib.ListView.configureCells('LV14Menu', _that.learnList.length);
      $('[obj-name="LV14Menu"]').children().each(function(i) {
        if(i >= 0) {
          com.fc.JavaScriptDistLib.ListView.setContext($(this));
          com.fc.JavaScriptDistLib.ListView.executeConfigCallback('LV14Menu', $(this), i);
          com.fc.JavaScriptDistLib.ListView.executeConfigHeightCallback('LV14Menu', $(this), i);
          com.fc.JavaScriptDistLib.ListView.resetContext($(this));
        }
      });
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  // Block#: !PFW|4EEv4{:``DRcnBe
  function on_B15Back_click(e) {
    try {
      // Block#: H/?PW36n{9])eaA+D0a2
      if(!_that.buttonClicked) {
        // Block#: ;5hDdd8]2v$vfThWG#Pb
        if(getOutcomeName('B15Back') != null) {
          // Block#: Uf5Fv)!.Cj2ELmG#icK5
          _that.buttonClicked = true;
          // Block#: fy^_O_qB(V-0yo0Li+;W
          _that.returnError = saveTaskAndNext(getOutcomeName('B15Back'));
        }
      }
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="B15Back"]').on('click', on_B15Back_click);
  // Block#: bMb1=IDc]s=MI3YdQBA%
  function on_screen_showS28TextAreaInput() {
    try {
      // Block#: wX_OV`gYn#f@]u;lbEnr
      _that.currentScreen = 'S28TextAreaInput';
      // Block#: ,WcHxs((?0p#]S5A~*=N
      s28UpdateScreen().then(response => {;
      });
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="S28TextAreaInput"]').on('show', on_screen_showS28TextAreaInput);
  com.fc.JavaScriptDistLib.Screen.screenDict['showS28TextAreaInput'] = on_screen_showS28TextAreaInput;
  // Block#: rr0P?od2^}noyZg2V||x
  function on_B12Next_click(e) {
    try {
      // Block#: SvERU=Sb,mL.I-fUt}xQ
      if(!_that.buttonClicked && _that.selectionMade && validateEmail(com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("T12Email"))) {
        // Block#: lU=tk7IwiAxZ$5H.(k-@
        _that.buttonClicked = true;
        // Block#: h(fnr?YzYNik.ej$Ys74
        if(!_that.isLoggingIn) {
          // Block#: f-h^8#YbtxL.x_;7+V,z
          setFormFieldByMapKey('C12Email', 'value', com.fc.JavaScriptDistLib.TextLib.textTrim(com.fc.JavaScriptDistLib.TextLib.textChangeCase(com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("T12Email"), "LOWERCASE")));
          // Block#: PiTETzvz^(_dg+^seX,/
          com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("S12Email", true); // Block#: j4`(hRXnn`ngpi:aJWeL
          _that.returnError = saveTaskAndNext(getOutcomeName('B12Next'));
          // Block#: !cigVEdRLB(hOVr4VTKE
          com.fc.JavaScriptDistLib.Textbox.setProperty["Text"]("T12Email", 'jappleseed@example.com');
        } else {
          // Block#: Sx%Je]C_:c=,{4jGkFxc
          _that.userID = com.fc.JavaScriptDistLib.TextLib.textTrim(com.fc.JavaScriptDistLib.TextLib.textChangeCase(com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("T12Email"), "LOWERCASE"));
          // Block#: O9WEv83hEiX3]Uw.gi^d
          _that.S21FirstDisplay = true;
          // Block#: *20N|XOH|NvlF%D!!-jD
          let hideScreen = $('.HTML5-deploy-wrapper .Screen:visible');
          //Close all dialogs
          com.fc.JavaScriptDistLib.Screen.closeDialogs();
          hideScreen.hide();
          let showScreen = $('[obj-name="S21Pin"]');
          showScreen.show();
          history.pushState({
            'view': 'S21Pin'
          }, 'S21Pin', '?S21Pin');
          hideScreen.triggerHandler('hide');
          showScreen.triggerHandler('show');
        }
        // Block#: w:-.3=ApW(OFN;^cUit2
        $('[obj-name="L12Error"]').hide();
      } else {
        // Block#: jwnbh:)$HJC__#Kd|$Z@
        com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("S12Email", false); // Block#: 9:H{jqewa,.I_E$GrE!?
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("L12Error", 'Invalid email '); // Block#: V60(yU7I8B,IJPaPfP)#
        $('[obj-name="L12Error"]').show();
      }
      // Block#: _YlLY9wo7LUpag2Ojm5=
      B12NextUpdate().then(response => {;
      });
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="B12Next"]').on('click', on_B12Next_click);
  // Block#: e1{Hhp50w]!f8)hzyYa0
  function on_screen_showS13Home() {
    try {
      // Block#: cSU(U-KTkAOT*+6O~|?c
      _that.currentScreen = 'S13Home';
      // Block#: QQ5=rdudA0}bw9#DY5Mp
      com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("S13Home", false); // Block#: a*2||8Qzuf)TJSl)Bq!Q
      S13EnableGestures().then(response => {;
      });
      // Block#: 9M*X+g1d}m}}gR`0;MAw
      findActiveFlows().then(response => {;
      });
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="S13Home"]').on('show', on_screen_showS13Home);
  com.fc.JavaScriptDistLib.Screen.screenDict['showS13Home'] = on_screen_showS13Home;
  // Block#: GR^aZrtMG#}Ft]Tv4_v@
  function on_screen_showS2Qualification() {
    try {
      // Block#: I}c!](Y|p6%TQSTQ})+I
      _that.currentScreen = 'S2Qualification';
      // Block#: 2k0FOPLwepRQ5V[Bc7!L
      if(_that.S2FirstDisplay) {
        // Block#: 3-S,-2h_5YJ2:^rG+z,~
        _that.S2FirstDisplay = false;
        // Block#: |$IcuM9Zb;c-oCx!EyM!
        _that.eQualAnswers = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();
        // Block#: LJu9+z7%tQY2vz[lv+E?
        S2UpdateScreen().then(response => {;
        });
      }
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="S2Qualification"]').on('show', on_screen_showS2Qualification);
  com.fc.JavaScriptDistLib.Screen.screenDict['showS2Qualification'] = on_screen_showS2Qualification;
  // Block#: HVnY2GA7B2Fp]+p[Nv{e
  function on_screen_showS22DualInput() {
    try {
      // Block#: 8Yz/d*0xu4x8bHY_^F6~
      _that.currentScreen = 'S22DualInput';
      // Block#: ?9+J@_5#Ac,|/M8VFprP
      com.fc.JavaScriptDistLib.Textbox.setProperty["Text"]("T22Text2", ''); // Block#: U:NBqIivI![SQ]U)l*Wj
      com.fc.JavaScriptDistLib.Textbox.setProperty["Text"]("T22Text1", ''); // Block#: ^v[$YK`XOnjv`h}lV}Iv
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("L22Error", 'Invalid input'); // Block#: ?~~iFkDea(o)rx,@93u@
      _that.selectionMade = false;
      // Block#: KLE#ym73]ANCT||}M!=R
      _that.nextClicked = false;
      // Block#: AxX`am2lax{8~;.%vsK~
      S22UpdateScreen().then(response => {;
      });
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="S22DualInput"]').on('show', on_screen_showS22DualInput);
  com.fc.JavaScriptDistLib.Screen.screenDict['showS22DualInput'] = on_screen_showS22DualInput;
  // Block#: xoktR7gQaj=$fKap+Tyx
  function on_gridview_cell_configured_GVC24Alphabet(GVC24Alphabet, number) {
    try {
      // Block#: S$,C?]*D#1h8jEU)x54j
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("L24Alphabet", com.fc.JavaScriptDistLib.TextLib.textSubstring(_that.symbols, number, 1));
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  com.fc.JavaScriptDistLib.GridView.setConfigCallback('GVC24Alphabet', on_gridview_cell_configured_GVC24Alphabet);
  // Block#: h1Oh}oeVP.%UgbX?.iT3
  function on_screen_showS11Signature() {
    try {
      // Block#: U$avz`9U0M.$](Za9]j]
      _that.currentScreen = 'S11Signature';
      // Block#: FwaKPUR^;yz,n+p(m62i
      if(_that.S11FirstDisplay) {
        // Block#: 1QvSM;a[Z{pb[wW0E_6I
        $('[obj-name="L11Placeholder"]').show(); // Block#: dp)6[V]K(r[fHEkV/L^!
        com.fc.JavaScriptDistLib.DrawViewContainer.clear('DrawViewContainer') // Block#: Q8E@!4N:_=E2;Q[ih~O-
        _that.S11FirstDisplay = false;
        // Block#: ,7Yp%w|k.krKl^u0zgqF
        _that.selectionMade = false;
        // Block#: S2E6IU`?X1KuM-:wIlwj
        B11NextUpdate().then(response => {;
        });
        // Block#: S3=`Y4-66rG9-w~H+;.N
        $('[obj-name="B11Clear"]').hide();
      }
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="S11Signature"]').on('show', on_screen_showS11Signature);
  com.fc.JavaScriptDistLib.Screen.screenDict['showS11Signature'] = on_screen_showS11Signature;
  // Block#: ?n([KZ0]o4%=LC.JrGu#
  function on_screen_showMedicationListScreen() {
    try {
      // Block#: Pb8horF;?$,x)}%MDyDC
      _that.editingMedList = true;
      // Describe this function...
      // Block#: 8~,p@K=`}P$}eSEsrG$f
      medicationlistlib.initializeScreen(_that.selectedMeds).then(response => {;
      });
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="MedicationListScreen"]').on('show', on_screen_showMedicationListScreen);
  com.fc.JavaScriptDistLib.Screen.screenDict['showMedicationListScreen'] = on_screen_showMedicationListScreen;
  // Block#: t(8c9S]-G0Qwhv_,~pSv
  function on_listview_cell_configured_LVC14Menu(LVC14Menu, number) {
    try {
      // Block#: PO3Mq1g0)7RYD-)`AkIJ
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("L14MenuText", (_that.learnList[number]));
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  com.fc.JavaScriptDistLib.ListView.setConfigCallback('LVC14Menu', on_listview_cell_configured_LVC14Menu);
  // Block#: lH4cfY4nrL@+@)Eteg/9
  function on_B1Login_click(e) {
    try {
      // Block#: ,?+,lN^.Fw)7#kwN:P7d
      if(!_that.buttonClicked) {
        // Block#: m#:[0%:KuI$?FF}vlutl
        onS1Continue().then(response => {;
        });
        // Block#: F3(g-xaG}_hO8v^td.$1
        DisplayLogIn().then(response => {;
        });
      }
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="B1Login"]').on('click', on_B1Login_click);
  // Block#: VrVaiZ!rmEN,Qdl3:mqe
  function on_B4Next_click(e) {
    try {
      // Block#: uwDoTO/@r($%:e^so!JQ
      if(!_that.buttonClicked) {
        // Block#: #!sXARch=!4h+2}yF_]Z
        if(getOutcomeName('B4Next') != null) {
          // Block#: }-eLkRdJ,Au-Jmg9!Yr`
          _that.buttonClicked = true;
          // Block#: 5N/bD(kf8vq:cT}))Dy|
          if(com.fc.JavaScriptDistLib.TextLib.textContains(com.fc.JavaScriptDistLib.Label.getProperty["Text"]("L4TextBody"), 'Thank you for completing:') ||
            com.fc.JavaScriptDistLib.TextLib.textContains(com.fc.JavaScriptDistLib.Label.getProperty["Text"]("L4TextBody"), 'Thank you for your participation in POWERMOM') ||
            com.fc.JavaScriptDistLib.TextLib.textContains(com.fc.JavaScriptDistLib.Label.getProperty["Text"]("L4TextBody"), 'We are sorry for your loss. we will no longer') ||
            com.fc.JavaScriptDistLib.TextLib.textContains(com.fc.JavaScriptDistLib.Label.getProperty["Text"]("L4TextBody"), 'we appreciate your participation in the POWERMOM study')
          ) {
            // Block#: }ww0Zf*PG~in:^Lgi_J`
            com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("S4BasicPurple", true);
          }
          // Block#: :k(avtyF:GZmYNwg(NWu
          _that.returnError = saveTaskAndNext(getOutcomeName('B4Next'));
        }
      }
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="B4Next"]').on('click', on_B4Next_click);
  // Block#: @-H,xYJGTfC28M6*h]($
  function on_screen_showS19Activities() {
    try {
      // Block#: ?u/kr8cYV8YDM0(PR*Tq
      _that.currentScreen = 'S19Activities';
      // Block#: +RA$Q%!=Jpl0aV@^P-c4
      findActiveInstances().then(response => {;
      });
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="S19Activities"]').on('show', on_screen_showS19Activities);
  com.fc.JavaScriptDistLib.Screen.screenDict['showS19Activities'] = on_screen_showS19Activities;
  // Block#: 2[;2o4EAQ^eG#{5aQ7*0
  function on_B25Back_click(e) {
    try {
      // Block#: 0H!kJ]nz}jH}_S!l-I52
      if(!_that.buttonClicked) {
        // Block#: 1uprC(SBfW$`Y.ACJrT#
        if(getOutcomeName('B25Back') != null) {
          // Block#: scZD`%`1y!5xeQH7c$g-
          _that.buttonClicked = true;
          // Block#: :22*c)^hOMX_wGR`~nfT
          com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("S25AddMedication", true); // Block#: =?C!]#-RO:-ni5})XT@o
          _that.returnError = saveTaskAndNext(getOutcomeName('B25Back'));
        }
      }
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="B25Back"]').on('click', on_B25Back_click);
  // Block#: o$RWJh7?~y~nMx8`Xx6o
  function on_Container_C17Privacy_CLICK(e) {
    try {
      // Block#: L1k1#le2.N@l$7cGgVQM
      if(!_that.buttonClicked) {
        // Block#: Jyx~:PK+[/(2Y,$NeHU|
        _that.buttonClicked = true;
        // Block#: #~sMz{B`dNY_EPf?a`.T
        _that.returnError = saveTaskAndNext(getOutcomeName('C17Privacy'));
      }
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    };
  };
  if($('[obj-name= "C17Privacy"]:visible') && $('[obj-name= "C17Privacy"]:visible')[0]) {
    $('[obj-name= "C17Privacy"]').on('click', on_Container_C17Privacy_CLICK);
  }
  // Block#: }E;i.D6T{r1I*-S.KxxH
  function on_B22Skip_click(e) {
    try {
      // Block#: 2|wGUAj-Ny0$fdeyMrkA
      if(!_that.buttonClicked) {
        // Block#: c1yKcv9K]yk1JQ#^f2pK
        if(getOutcomeName('B22Skip') != null) {
          // Block#: SBSERJ:4cbA9Mw=~8#O}
          _that.buttonClicked = true;
          // Block#: T*Uc:2b^x^9KaTSy?B2V
          _that.returnError = saveTaskAndNext(getOutcomeName('B22Skip'));
        }
      }
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="B22Skip"]').on('click', on_B22Skip_click);
  // Block#: ^Hz_oV2[ddi(CCoo3R!Y
  function on_B22Next_click(e) {
    try {
      // Block#: y^2cX0KHtOU8[Z:TS`HP
      _that.nextClicked = true;
      // Block#: ~u9nHc_`s%P#Vydq3l8f
      if(!_that.buttonClicked && _that.selectionMade) {
        // Block#: #WB7q#Se}rKpC+L%7VGu
        if(getOutcomeName('B22Next') != null) {
          // Block#: T8PS*s,}nZ?`Wm)Ez9M:
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(_that.inputType, "EQUAL", 'text')) {
            // Block#: Buap,fI2VgJo$1=f9p!h
            setFormFieldByMapKey('answer1', 'value', com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("T22Text1"));
            // Block#: -|VN/cDMi|{~{Gr{@]%^
            setFormFieldByMapKey('answer2', 'value', com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("T22Text2"));
            // Block#: l{JZbBWf|O2gB#_P-mfx
            _that.buttonClicked = true;
            // Block#: q5(S8bgDmQBgN/u{[mKi
            _that.returnError = saveTaskAndNext(getOutcomeName('B22Next'));
          } else if(com.fc.JavaScriptDistLib.TextLib.textComparison(_that.inputType, "EQUAL", 'integer')) {
            // Block#: e3-CzdI^#af5_^B(Bh@2
            setFormFieldByMapKey('answer1', 'value', com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("T22Text1"));
            // Block#: s#;,%CAuuXAB2x.,!OHr
            setFormFieldByMapKey('answer2', 'value', com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("T22Text2"));
            // Block#: aU~Y`E+c~V6Z3#%[W.?~
            _that.buttonClicked = true;
            // Block#: iild8ANl3J{WJ2DKNVB=
            _that.returnError = saveTaskAndNext(getOutcomeName('B22Next'));
          }
        }
      } else {
        // Block#: ,1_H.?X:-piM,*:c#VRu
        if(com.fc.JavaScriptDistLib.TextLib.textComparison(_that.validationType, "EQUAL", 'adultHeight') ||
          com.fc.JavaScriptDistLib.TextLib.textComparison(_that.validationType, "EQUAL", 'babyWeight') ||
          com.fc.JavaScriptDistLib.TextLib.textComparison(_that.validationType, "EQUAL", '3digits')
        ) {
          // Block#: #eR:h$EVw;V%NLY@iZsh
          if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(com.fc.JavaScriptDistLib.MathLibrary.toNumber(com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("T22Text1")), "LT", com.fc.JavaScriptDistLib.MathLibrary.toNumber(_that.minInput1)) ||
            com.fc.JavaScriptDistLib.MathLibrary.mathCompare(com.fc.JavaScriptDistLib.MathLibrary.toNumber(com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("T22Text2")), "LT", com.fc.JavaScriptDistLib.MathLibrary.toNumber(_that.minInput2))
          ) {
            // Block#: V.UVh.*.fN;1P9YM8HHP
            $('[obj-name="L22Error"]').show();
          }
        }
      }
      // Block#: MQRpI*~;0v1VVBQA:Z+D
      B22NextUpdate().then(response => {;
      });
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="B22Next"]').on('click', on_B22Next_click);
  // Block#: NJ=L6huR13=M}Dcw=Uu#
  function on_listview_cell_configured_LVC24Medications(LVC24Medications, number) {
    try {
      // Block#: !M?/0{qTqOa}9cDq,U+N
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("L24MedTitle", (_that.medicationList[_that.letterNumber][number]));
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  com.fc.JavaScriptDistLib.ListView.setConfigCallback('LVC24Medications', on_listview_cell_configured_LVC24Medications);
  // Block#: u+D|J*nr*3=ISW*Q`SNm
  function on_Container_C13Dashboard_CLICK(e) {
    try {
      // Block#: 41UyC#4$X9^TRpmj/Gh,
      if(!_that.buttonClicked) {
        // Block#: o2EMiYxSFagjwgf4}L=B
        _that.buttonClicked = true;
        // Block#: 4!r|k_LL,R|T=!t}2{;o
        _that.returnError = saveTaskAndNext(getOutcomeName('C13Dashboard'));
      }
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    };
  };
  if($('[obj-name= "C13Dashboard"]:visible') && $('[obj-name= "C13Dashboard"]:visible')[0]) {
    $('[obj-name= "C13Dashboard"]').on('click', on_Container_C13Dashboard_CLICK);
  }
  // Block#: Djm)PnO`R|F8J1l_~Z9T
  function on_B28Next_click(e) {
    try {
      // Block#: =2(#|(HKX:3$t34EdvTA
      if(!_that.buttonClicked && _that.selectionMade) {
        // Block#: [WTI{9.m!s^pKpie*+np
        if(getOutcomeName('B28Next') != null) {
          // Block#: TXsn`3]*tWAB!0;~;zX[
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(_that.inputType, "EQUAL", 'text') ||
            com.fc.JavaScriptDistLib.TextLib.textComparison(_that.inputType, "EQUAL", 'integer')
          ) {
            // Block#: -bD+{,Gf1FU02sqf%QZc
            setFormFieldByMapKey('answer1', 'value', com.fc.JavaScriptDistLib.Textarea.getProperty["Text"]("TA28Textarea"));
          }
          // Block#: 5[Ziow*b;)(IXj#=qX9Y
          _that.buttonClicked = true;
          // Block#: 9B@XQiN!(Y/yJ!d3!bVw
          _that.returnError = saveTaskAndNext(getOutcomeName('B28Next'));
        }
      }
      // Block#: lC-12zpr_5X#0wkqUp)y
      b28NextUpdate().then(response => {;
      });
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="B28Next"]').on('click', on_B28Next_click);
  // Block#: O|m*os{J-Dk3KkOv`/7q
  function on_in_background() {
    try {
      // Block#: 6~7W-%YxT/kFc#{LIC/L
      _that.requirePinAt = ((com.fc.JavaScriptDistLib.MomentLibrary()).clone().add(5, 'minutes'));
      // Block#: {!;/^QF]G?GPXk1k4poy
      _that.applicationInBG = true;
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  com.fc.JavaScriptDistLib.Application.registerEvent('in_background', on_in_background);
  // Block#: kl|2/t~k^wTaf?J_-M(t
  let on_screen_back_button_pressS24Medication = function() {
    try {
      // Block#: ,pYG]CJ9D43wc4(Xg!?j
      if(!_that.buttonClicked) {
        // Block#: ,a*t(n;d,#5X|_D~+{[S
        _that.buttonClicked = true;
        // Block#: ~ajkyRc~a|R,.=*;2-Vq
        com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("S24Medication", true); // Block#: KzS!Zhfg5,$Gq0dxTs@M
        _that.returnError = saveTaskAndNext(getOutcomeName('B24Done'));
      }
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  com.fc.JavaScriptDistLib.Screen.screenDict['backS24Medication'] = on_screen_back_button_pressS24Medication;
  // Block#: 4:N1KG(f?E+L,AGCH7@-
  function on_B23Cancel_click(e) {
    try {
      // Block#: Yy=37;hJL4pUGG1dfh7*
      _that.dialog = (com.fc.JavaScriptDistLib.Dialog.create(_that.genericDialogTitle, _that.genericDialogBody));
      // Block#: /dn$QD]WG_dW_.*:fgYX
      com.fc.JavaScriptDistLib.Dialog.addCancelBtn('No', _that.dialog)
      // Block#: ]oB[d/00.:?Dg@-=QV_1
      com.fc.JavaScriptDistLib.Dialog.addBtn('Yes', _that.dialog)
      // Block#: 4gv*lDQZispvy+_vbpm9
      if(!_that.buttonClicked) {
        // Block#: QHt@V:OW-fcNXD^{X50h
        com.fc.JavaScriptDistLib.Dialog.show(_that.dialog, function(button_title) {
          // Block#: Vh0[}4V(~emIe|)[(sfT
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(button_title, "EQUAL", 'Yes')) {
            // Block#: +x)6pphM]vZn,6`K3XI=
            _that.buttonClicked = true;
            // Block#: 53-Q`QQBmCfJiK7fBr[Y
            _that.returnError = saveTaskAndNext(getOutcomeName('B23Cancel'));
          }
        })
      }
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="B23Cancel"]').on('click', on_B23Cancel_click);
  // Block#: [J-$2,,9k!/x)yjKgqC(
  function on_B11Cancel_click(e) {
    try {
      // Block#: e*s8?WtK540FoY9y9wT~
      _that.dialog = (com.fc.JavaScriptDistLib.Dialog.create(_that.genericDialogTitle, _that.genericDialogBody));
      // Block#: d9}7r%fx0`7bwQE!Gv9(
      com.fc.JavaScriptDistLib.Dialog.addCancelBtn('No', _that.dialog)
      // Block#: ~QPkfT1L*Wzl5UYxhK(k
      com.fc.JavaScriptDistLib.Dialog.addBtn('Yes', _that.dialog)
      // Block#: Q?|TJwoZbh!YvuFNZmhO
      if(!_that.buttonClicked) {
        // Block#: WBg*/GWxvI2@=4*aUm]1
        com.fc.JavaScriptDistLib.Dialog.show(_that.dialog, function(button_title) {
          // Block#: 7n4/J:o(1P#T{^rn~4%b
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(button_title, "EQUAL", 'Yes')) {
            // Block#: Gx7/h9`m?%z-x8:7BK*v
            _that.buttonClicked = true;
            // Block#: H5I.+ic3]9f}USayHyK-
            _that.returnError = saveTaskAndNext(getOutcomeName('B11Cancel'));
          }
        })
      }
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="B11Cancel"]').on('click', on_B11Cancel_click);
  // Block#: m2pmcIWN6GQO)~5#1N`;
  function on_B2Q1Yes_click(e) {
    try {
      // Block#: NRMSBGlmrUWLE)ohw#_w
      com.fc.JavaScriptDistLib.Button.setProperty["Text color"]("B2Q1Yes", (com.fc.JavaScriptDistLib.ColourLibrary.getColourFromText('#dd198e'))); // Block#: ~*,$c?rpn=M?Ksw3V@kV
      com.fc.JavaScriptDistLib.Button.setProperty["Text color"]("B2Q1No", (com.fc.JavaScriptDistLib.ColourLibrary.getColourFromText('#939598'))); // Block#: ;ZAw)d5010FA7ke-b.1_
      setFormFieldById('question1', 'value', 'Yes').then(response => {;
      });
      // Block#: ]]8gu(I-1RxndAbV/Q~1
      com.fc.JavaScriptDistLib.Dictionary.setDictValue(_that.eQualAnswers, 'question1', 'Yes');
      // Block#: N6*_*3odE|!@cv4rW;eN
      B2NextUpdate().then(response => {;
      });
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="B2Q1Yes"]').on('click', on_B2Q1Yes_click);
  // Block#: e0lBSqs*E!zwKv}3=60I
  function on_B9Back_click(e) {
    try {
      // Block#: Sr)G5%qN?vrm!etLdHX8
      if(!_that.buttonClicked) {
        // Block#: FUleV:,`9XD@ITVXIe5V
        if(getOutcomeName('B9Back') != null) {
          // Block#: Jy3$Rm,3CsBQHK{ZZI`t
          _that.buttonClicked = true;
          // Block#: IzAkHlb[pD6qZf~NtumB
          _that.returnError = saveTaskAndNext(getOutcomeName('B9Back'));
        }
      }
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="B9Back"]').on('click', on_B9Back_click);
  // Block#: m`a+dZ?ggHFbG]~{_}3.
  function on_listview_length_configured_LV19Activities() {
    try {
      com.fc.JavaScriptDistLib.ListView.configureCells('LV19Activities', _that.activityList.length);
      $('[obj-name="LV19Activities"]').children().each(function(i) {
        if(i >= 0) {
          com.fc.JavaScriptDistLib.ListView.setContext($(this));
          com.fc.JavaScriptDistLib.ListView.executeConfigCallback('LV19Activities', $(this), i);
          com.fc.JavaScriptDistLib.ListView.executeConfigHeightCallback('LV19Activities', $(this), i);
          com.fc.JavaScriptDistLib.ListView.resetContext($(this));
        }
      });
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  // Block#: kNzid7$!UE8s@~Kna-!(
  function on_B14Back_click(e) {
    try {
      // Block#: }_5M9SmW[o!kp~]0qiPP
      if(!_that.buttonClicked) {
        // Block#: 7la5]Cz/O@ZN5k2A}Rs0
        if(getOutcomeName('B14Back') != null) {
          // Block#: x_x{{i|`2z9O[vCOWfnz
          _that.buttonClicked = true;
          // Block#: ?kp[!ksluW_JKU9oM@rM
          _that.returnError = saveTaskAndNext(getOutcomeName('B14Back'));
        }
      }
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="B14Back"]').on('click', on_B14Back_click);
  // Block#: ./D%RP9DI0R[gvv~_qqf
  function on_listview_length_configured_LV24Medications() {
    try {
      com.fc.JavaScriptDistLib.ListView.configureCells('LV24Medications', _that.medicationList[_that.letterNumber].length);
      $('[obj-name="LV24Medications"]').children().each(function(i) {
        if(i >= 0) {
          com.fc.JavaScriptDistLib.ListView.setContext($(this));
          com.fc.JavaScriptDistLib.ListView.executeConfigCallback('LV24Medications', $(this), i);
          com.fc.JavaScriptDistLib.ListView.executeConfigHeightCallback('LV24Medications', $(this), i);
          com.fc.JavaScriptDistLib.ListView.resetContext($(this));
        }
      });
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  // Block#: r#2V?NF:!0K;i5dMh60A
  function on_listview_cell_clicked_LVC14Menu(LVC14Menu, number) {
    try {
      // Block#: /71Es1aL.sM-GcDt.Z0V
      if(!_that.buttonClicked) {
        // Block#: Xa68TtimLcuXymF^z?j6
        _that.buttonClicked = true;
        // Block#: As:5gTKD#zwm1?7HTz!y
        _that.returnError = saveTaskAndNext(_that.learnList[number]);
      }
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  }
  com.fc.JavaScriptDistLib.ListView.setClickCallback('LVC14Menu', on_listview_cell_clicked_LVC14Menu);
  // Block#: ]eQ+u8NQ5?p9V`S%t3?o
  function on_B2Q1No_click(e) {
    try {
      // Block#: DQ(i#CXFaPtB]]!K~`=,
      com.fc.JavaScriptDistLib.Button.setProperty["Text color"]("B2Q1No", (com.fc.JavaScriptDistLib.ColourLibrary.getColourFromText('#dd198e'))); // Block#: %zCB7asp_UOx7=[RY[XR
      com.fc.JavaScriptDistLib.Button.setProperty["Text color"]("B2Q1Yes", (com.fc.JavaScriptDistLib.ColourLibrary.getColourFromText('#939598'))); // Block#: #BSMK}ot=;0*Dm~ovB23
      setFormFieldById('question1', 'value', 'No').then(response => {;
      });
      // Block#: MBrZHG-xS;N3/pO%A6CA
      com.fc.JavaScriptDistLib.Dictionary.setDictValue(_that.eQualAnswers, 'question1', 'No');
      // Block#: .l[]6p0TTv:NAA|CwssE
      B2NextUpdate().then(response => {;
      });
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="B2Q1No"]').on('click', on_B2Q1No_click);
  // Block#: 732|/Vgs2uMFx;Lu8cyq
  function on_B1Join_click(e) {
    try {
      // Block#: t@)k1ZT#SXyrf#8TR^hm
      _that.isLoggingIn = false;
      // Block#: ^,@ZQ51FFq=sMvKt4=Hr
      if(!_that.buttonClicked) {
        // Block#: @@Bfr3JdtFB*{fj^^_F5
        _that.buttonClicked = true;
        // Block#: _n59!,vaDyrCM0{2jo^{
        onS1Continue().then(response => {;
        });
        // Block#: DA_sFpu/Ov?e:g8aAHyQ
        startSignUp().then(response => {;
        });
      }
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="B1Join"]').on('click', on_B1Join_click);
  // Block#: ZOdu04;[d~;8nWeog($g
  function on_screen_showS9Html() {
    try {
      // Block#: K{b]nQ:GgJk;^dP,pcdV
      _that.currentScreen = 'S9Html';
      // Block#: ]o^Y:Q6u6F05R-p-sd1w
      if(_that.S9FirstDisplay) {
        // Block#: ]}!i2*4pivrbfU;s.LYn
        _that.S9FirstDisplay = false;
        // Block#: @7u!6$AJ[XZFA}{Mi?p-
        S9UpdateScreen().then(response => {;
        });
      }
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="S9Html"]').on('show', on_screen_showS9Html);
  com.fc.JavaScriptDistLib.Screen.screenDict['showS9Html'] = on_screen_showS9Html;
  // Block#: ?;d/`npPNDF[P9:nRBT[
  let on_screen_back_button_pressS15Webview = function() {
    try {
      // Block#: HdA2-Y6`Cu+ex4[|ZFOW
      if(!_that.buttonClicked && ($('[obj-name="B15Back"]').is(':visible'))) {
        // Block#: k,GcE7h67/Cw5*;eb2S,
        _that.buttonClicked = true;
        // Block#: )gL^VS5:;f^$z1}NayfG
        _that.returnError = saveTaskAndNext(getOutcomeName('B15Back'));
      } else {
        // Block#: :_D`)J_4ST:M_PjGmop=
        com.fc.JavaScriptDistLib.Application.sendToBackground();
      }
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  com.fc.JavaScriptDistLib.Screen.screenDict['backS15Webview'] = on_screen_back_button_pressS15Webview;
  // Block#: ntH}V%PL(n`)jDs?c6{K
  function on_B21ForgotPin_click(e) {
    try {
      // Block#: {@N.t#T{qwh![!urHy$I
      if(!_that.buttonClicked) {
        // Block#: c/s4)OPWbgDN:UBROJK]
        _that.dialog = (com.fc.JavaScriptDistLib.Dialog.create('Forgot Passcode', 'Would you like to reset your passcode? If you are signed in, you will have to sign in again.'));
        // Block#: #to2mCId;ic4SA/W?9c|
        com.fc.JavaScriptDistLib.Dialog.addBtn('Reset', _that.dialog)
        // Block#: (++6UqKaLm,cZilXnn!Z
        com.fc.JavaScriptDistLib.Dialog.show(_that.dialog, function(button_title) {
          // Block#: /`}X]c8^]0r?tuI+`8LO
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(button_title, "EQUAL", 'Reset')) {
            // Block#: G5y|8.Qn-eq~yq;4mBRJ
            _that.isLoggingIn = false;
            // Block#: r`1P0Ull?9l~0.#f!:9.
            _that.isLoggedIn = false;
            // Block#: WEcTxRD/dT]G|=pJ;|}9
            _that.buttonClicked = true;
            // Block#: ~s}qY-{#sXb_RZZAGv$y
            com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("S21Pin", true); // Block#: UyS/PgN7G2Virr+#JWV@
            startForgotPasswordProcess().then(response => {;
            });
            // Block#: =a?#`(+Lcq5bNkT)9iIv
            clearUserData().then(response => {;
            });
          }
        })
      }
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="B21ForgotPin"]').on('click', on_B21ForgotPin_click);
  // Block#: OrF]Llg[ggUMMhWfL`*z
  function on_listview_cell_configured_LVC19Activity(LVC19Activity, number) {
    try {
      // Block#: neEb(TBajAgxlOWlPELl
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("L19Activity", (com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.activityList[number], 'name'))); // Block#: E01V:+XKdg]%%lznf;L4
      console.log('survey name: ');
      if(_that.debugService && _that.debugService.active) {
        _that.debugService.traces.push('survey name: ');
        _that.debugService.printLog();
      }
      // Block#: k*rY)OdL9gsk%cOe[!|]
      console.log(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.activityList[number], 'name')));
      if(_that.debugService && _that.debugService.active) {
        _that.debugService.traces.push(com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.activityList[number], 'name')));
        _that.debugService.printLog();
      }
      // Block#: EShhb:}-c`wb)X`%6YE1
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("L19Now", (com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.activityList[number], 'label'))); // Block#: DjGui?Z*~7*qVkKxPDvi
      if(com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.activityList[number], 'Active')) {
        // Block#: +p~UHJ|ixM?4jW`r@FE[
        com.fc.JavaScriptDistLib.Image.setProperty["Image"]("I19Radio", (com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("./img/empty.png")));
      } else {
        // Block#: YIi)D2yN:P#UC`-uJQ?d
        com.fc.JavaScriptDistLib.Image.setProperty["Image"]("I19Radio", (com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("./img/checked.png")));
      }
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  com.fc.JavaScriptDistLib.ListView.setConfigCallback('LVC19Activity', on_listview_cell_configured_LVC19Activity);
  // Block#: uyx8EF3n~l;MnNq@YLrk
  function on_in_foreground() {
    try {
      // Block#: VB*Y`}YJ[fAC!ME-bpil
      _that.applicationInBG = false;
      // Block#: =On(QoG}7n)f^!(S8Qbb
      if(!com.fc.JavaScriptDistLib.TextLib.textComparison(_that.currentScreen, "EQUAL", 'S21Pin')) {
        // Block#: `jxL!KHY8Awx9J(ZF{-=
        if(_that.isLoggedIn && ((com.fc.JavaScriptDistLib.MomentLibrary()).isSameOrAfter(_that.requirePinAt))) {
          // Block#: V=/}O3g|D=PcV3vd+qAN
          let hideScreen = $('.HTML5-deploy-wrapper .Screen:visible');
          //Close all dialogs
          com.fc.JavaScriptDistLib.Screen.closeDialogs();
          hideScreen.hide();
          let showScreen = $('[obj-name="S21Pin"]');
          showScreen.show();
          history.pushState({
            'view': 'S21Pin'
          }, 'S21Pin', '?S21Pin');
          hideScreen.triggerHandler('hide');
          showScreen.triggerHandler('show');
        } else {
          // Block#: 9WSy|xe`.ftAxE0Os?(W
          if(_that.applicationShouldDisplayAfterBG) {
            // Block#: VqB@Vk%:`W4a6T54x==l
            _that.applicationShouldDisplayAfterBG = false;
            // Block#: @o?9(EZGi+?r$YrCQ4p4
            displayPageEngine().then(response => {;
            });
          }
        }
      }
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  com.fc.JavaScriptDistLib.Application.registerEvent('in_foreground', on_in_foreground);
  // Block#: +?oI0o.i/X}YwBf_.PW3
  function on_gridview_cell_configured_GVC21KeyPadDigit(GVC21KeyPadDigit, number) {
    try {
      // Block#: hO@`J*Myh?nS=[X1Qa$C
      if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(number, "GTE", 0) &&
        com.fc.JavaScriptDistLib.MathLibrary.mathCompare(number, "LT", 9)
      ) {
        // Block#: nK:V6=FCTp.t[QBy6sw$
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("L21Button", (com.fc.JavaScriptDistLib.TextLib.convertToText(number + 1)));
      }
      // Block#: C/L4ncA-oy@L2g-T(k+A
      if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(number, "EQ", 9)) {
        // Block#: ^VoD:QEKPQZ-D;12K-z$
        com.fc.JavaScriptDistLib.GridView.setProperty["Highlight cell"](GVC21KeyPadDigit, false); // Block#: hz-Z+O0]Y(j3Vd|TAc^o
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("L21Button", '');
      }
      // Block#: _}}Rf8o|B(f767;a8o3W
      if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(number, "EQ", 10)) {
        // Block#: /E2UC`7DxJT8$~1iM0tu
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("L21Button", '0');
      }
      // Block#: %]|1KXlT9NWpGn.UD`7]
      if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(number, "EQ", 11)) {
        // Block#: q/M5)7F8};X,TvuFhjY}
        $('[obj-name="L21Button"]').hide(); // Block#: .{EIUuAlW7}l=d#{1!tm
        $('[obj-name="I21Button"]').show();
      } else {
        // Block#: p5+cioyAjVKav|l.u,2u
        $('[obj-name="I21Button"]').hide(); // Block#: ]_J(ow!ZJkKpKBu}eUuy
        $('[obj-name="L21Button"]').show();
      }
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  com.fc.JavaScriptDistLib.GridView.setConfigCallback('GVC21KeyPadDigit', on_gridview_cell_configured_GVC21KeyPadDigit);
  // Block#: R%mb|U]M+|YuN62Aj7Zs
  function on_Container_C17Consent_CLICK(e) {
    try {
      // Block#: -4b2LBrJ4|byU^-DziTp
      if(!_that.buttonClicked) {
        // Block#: FLYJEQ2]uv{@gHnf#BXT
        _that.buttonClicked = true;
        // Block#: aF0qN,P::QYqHrQ}DmQv
        _that.returnError = saveTaskAndNext(getOutcomeName('C17Consent'));
      }
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    };
  };
  if($('[obj-name= "C17Consent"]:visible') && $('[obj-name= "C17Consent"]:visible')[0]) {
    $('[obj-name= "C17Consent"]').on('click', on_Container_C17Consent_CLICK);
  }
  // Block#: Rf|EUQ0;dZvjN{X?y[=3
  let on_screen_back_button_pressS26GraphDisplay = function() {
    try {
      // Block#: PL!7C}$hGF{e^si-ANBC
      if(!_that.buttonClicked && ($('[obj-name="B26Back"]').is(':visible'))) {
        // Block#: 3!=}2G8oao9su+X^Z9#n
        _that.buttonClicked = true;
        // Block#: M}=3GtZnChI$1fp2XWIY
        _that.returnError = saveTaskAndNext(getOutcomeName('B26Back'));
      } else {
        // Block#: QvnBja(kjD2y:4m!|$[4
        com.fc.JavaScriptDistLib.Application.sendToBackground();
      }
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  com.fc.JavaScriptDistLib.Screen.screenDict['backS26GraphDisplay'] = on_screen_back_button_pressS26GraphDisplay;
  // Block#: 4$NH#/mO`:nHawZg5!Ed
  function on_Container_C13Learn_CLICK(e) {
    try {
      // Block#: )0CUS#rIM8or`F}k{r7_
      if(!_that.buttonClicked) {
        // Block#: P(v@nZ2ahsb@pWClTyT}
        _that.buttonClicked = true;
        // Block#: Z)SX(|w}s[7csk6/^/vk
        _that.returnError = saveTaskAndNext(getOutcomeName('C13Learn'));
      }
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    };
  };
  if($('[obj-name= "C13Learn"]:visible') && $('[obj-name= "C13Learn"]:visible')[0]) {
    $('[obj-name= "C13Learn"]').on('click', on_Container_C13Learn_CLICK);
  }
  // Block#: tlhr+,Ms.{_EWW3FAA*@
  function on_Label_L3LearnMore_CLICK(e) {
    try {
      // Block#: e2LsR8g8A#`F%c/K4ldk
      if(!_that.buttonClicked) {
        // Block#: _P59;2)!.d@KOuO.[;rk
        if(getOutcomeName('B3LearnMore') != null) {
          // Block#: Hd9v3jskhM#L_3-vTJ#+
          _that.buttonClicked = true;
          // Block#: :fVE(v{Z@aC%XwYI1zV.
          _that.returnError = saveTaskAndNext(getOutcomeName('B3LearnMore'));
        }
      }
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    };
  };
  if($('[obj-name= "L3LearnMore"]:visible') && $('[obj-name= "L3LearnMore"]:visible')[0]) {
    $('[obj-name= "L3LearnMore"]').on('click', on_Label_L3LearnMore_CLICK);
  }
  // Block#: {Gu%yj,/8#e-mBeO^QDq
  function on_listview_cell_clicked_LVC24Medications(LVC24Medications, number) {
    try {
      // Block#: #n50f9e({Y$LD~h+@nO(
      if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(_that.selectedMeds.length, "EQ", 1)) {
        // Block#: Fhw@NVMao=T@Yc1rIC|s
        if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.TextLib.convertToText(_that.selectedMeds[0]), "EQUAL", 'None')) {
          // Block#: unj_|e?EHs]uzD+NeTOa
          com.fc.JavaScriptDistLib.ListLibrary.listEmpty(_that.selectedMeds)
        }
      }
      // Block#: :@vw[e3$2nJSsQn%`UMl
      if(!_that.selectedMeds.length) {
        // Block#: IzlbK*E3a($$ra(@LC;p
        com.fc.JavaScriptDistLib.ListLibrary.listAdd(_that.selectedMeds, _that.medicationList[_that.letterNumber][number])
        // Block#: 0iqW`GlK1c7sv73]4Ptt
        com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("S24Medication", false); // Block#: IaoV2@76-gl-}6i)!Pkm
        _that.returnError = saveTaskAndNext(getOutcomeName('B24Done'));
      } else {
        // Block#: 2}Vh-HeR^I;4E*?tyEq+
        if(!(com.fc.JavaScriptDistLib.ListLibrary.listContains(_that.selectedMeds, _that.medicationList[_that.letterNumber][number]))) {
          // Block#: g!$$p^EL)n9/nINn18[z
          com.fc.JavaScriptDistLib.ListLibrary.listAdd(_that.selectedMeds, _that.medicationList[_that.letterNumber][number])
          // Block#: +!jsxk[{aLJE-,0J`$E1
          com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("S24Medication", false); // Block#: ~iN?[P7LfDOl*5wPBufS
          _that.returnError = saveTaskAndNext(getOutcomeName('B24Done'));
        }
      }
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  }
  com.fc.JavaScriptDistLib.ListView.setClickCallback('LVC24Medications', on_listview_cell_clicked_LVC24Medications);
  // Block#: OaF~2EKZTy4aXd3O]!nE
  function on_B22Back_click(e) {
    try {
      // Block#: QyRI%cA%Jj%xkpP9WopG
      if(!_that.buttonClicked) {
        // Block#: |?38=ch@fMD:h~jNc!5J
        if(getOutcomeName('B22Back') != null) {
          // Block#: LdPM_XJW_s)qrS]`^+_y
          _that.buttonClicked = true;
          // Block#: Uw4*wgxxdx^ouUl-]{l0
          _that.returnError = saveTaskAndNext(getOutcomeName('B22Back'));
        }
      }
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="B22Back"]').on('click', on_B22Back_click);
  // Block#: 6=PdML%pRlbh(:JD^9i7
  function on_B25Skip_click(e) {
    try {
      // Block#: #uzz9-@b~|k8jLAA5Snb
      if(!_that.buttonClicked) {
        // Block#: ^@|bd2rp]0:26x,ScM~G
        if(getOutcomeName('B25Skip') != null) {
          // Block#: ic*w/l|X$vX1@^-jB#K_
          _that.buttonClicked = true;
          // Block#: 8~P:D?J7n-HK.,jqor$g
          com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("S25AddMedication", true); // Block#: y.O@wmHq89[KX57@U~d3
          _that.returnError = saveTaskAndNext(getOutcomeName('B25Skip'));
        }
      }
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="B25Skip"]').on('click', on_B25Skip_click);
  // Block#: k.t5z~`WiKDu}GhFm2hv
  let on_screen_back_button_pressS14Learn = function() {
    try {
      // Block#: H2`Y:$7(N2b;T3,yNFvm
      if(!_that.buttonClicked && ($('[obj-name="B14Back"]').is(':visible'))) {
        // Block#: Q3T:4j7DUoDoWmtSG)l[
        _that.buttonClicked = true;
        // Block#: j-VI*DvGlDq{7l=ahR_H
        _that.returnError = saveTaskAndNext(getOutcomeName('B14Back'));
      } else {
        // Block#: u(@-uli+JtzK@H@Z7XdZ
        com.fc.JavaScriptDistLib.Application.sendToBackground();
      }
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  com.fc.JavaScriptDistLib.Screen.screenDict['backS14Learn'] = on_screen_back_button_pressS14Learn;
  // Block#: D0j!kl!q#1lRAst*B(DZ
  function on_B9Cancel_click(e) {
    try {
      // Block#: YCr!ZE.oKdC/4eApgb4w
      if(!_that.buttonClicked) {
        // Block#: 5EZ/1fhKpP]KYe3/L+-J
        _that.dialog = (com.fc.JavaScriptDistLib.Dialog.create(_that.genericDialogTitle, _that.genericDialogBody));
        // Block#: |377z/oRObXoC(YeE1l]
        com.fc.JavaScriptDistLib.Dialog.addCancelBtn('No', _that.dialog)
        // Block#: M%mM4uQ2TeieDOYhvg4t
        com.fc.JavaScriptDistLib.Dialog.addBtn('Yes', _that.dialog)
        // Block#: JMH:G/3l[H%!)^(6XxkE
        com.fc.JavaScriptDistLib.Dialog.show(_that.dialog, function(button_title) {
          // Block#: W^5M7FN,UtWBwh{g7gHf
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(button_title, "EQUAL", 'Yes')) {
            // Block#: g+zpBlrIg2CTcN)U;I-O
            _that.buttonClicked = true;
            // Block#: V0[fmk%`VXCeHvYVnY4S
            _that.returnError = saveTaskAndNext(getOutcomeName('B9Cancel'));
          }
        })
      }
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="B9Cancel"]').on('click', on_B9Cancel_click);
  // Block#: |j,#Y^YW({BB$|m)j1P,
  function on_B2Q2Yes_click(e) {
    try {
      // Block#: @q=_[Q]J[O08UJ)KV5G?
      com.fc.JavaScriptDistLib.Button.setProperty["Text color"]("B2Q2Yes", (com.fc.JavaScriptDistLib.ColourLibrary.getColourFromText('#dd198e'))); // Block#: 80%1DmareC,yL8NtjtH`
      com.fc.JavaScriptDistLib.Button.setProperty["Text color"]("B2Q2No", (com.fc.JavaScriptDistLib.ColourLibrary.getColourFromText('#939598'))); // Block#: pAzc^eDIGg*O6CtmkX5T
      setFormFieldById('question2', 'value', 'Yes').then(response => {;
      });
      // Block#: b@PfF-C_=9i6HQ=~#bV9
      com.fc.JavaScriptDistLib.Dictionary.setDictValue(_that.eQualAnswers, 'question2', 'Yes');
      // Block#: H5.G$eDX1X#14WX4zLpM
      B2NextUpdate().then(response => {;
      });
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="B2Q2Yes"]').on('click', on_B2Q2Yes_click);
  // Block#: M@(^i*w*O;EVrJto9Xwy
  function on_B20Date_click(e) {
    try {
      // due date and last date weighed case
      // Block#: fx?}(rwKmPay]Yk.(lqa
      if(com.fc.JavaScriptDistLib.TextLib.textComparison(_that.validationType, "EQUAL", '10MonthsToNow')) {
        // Block#: gy7_yJX;pXgrkE1Qw_3d
        let _startDate = (com.fc.JavaScriptDistLib.MomentLibrary()),
          _endDate = (com.fc.JavaScriptDistLib.TimeLibrary.addIntervalFromTime((com.fc.JavaScriptDistLib.MomentLibrary()), (com.fc.JavaScriptDistLib.TimeLibrary.createTimeInterval(0, 0, 0, 280, 0, 0))));
        if(!(_startDate instanceof Date)) _startDate = _startDate.toDate();
        if(!(_endDate instanceof Date)) _endDate = _endDate.toDate();
        com.fc.JavaScriptDistLib.Clock.pickDateRange(_startDate, _endDate)
          .then((date) => {
            date = com.fc.JavaScriptDistLib.MomentLibrary(date);
            // Block#: 93yDUXJ0Go.ZNNnj!oX}
            com.fc.JavaScriptDistLib.Button.setProperty["Text"]("B20Date", (com.fc.JavaScriptDistLib.TimeLibrary.textFromTime(date, "DATE_US"))); // Block#: -mH$?CUPSzW!/VX+IRTs
            _that.selectionMade = true;
            // Block#: #qB`2Ej3tw[920dvI~xM
            B20NextUpdate().then(response => {;
            });
          });
      } else if(com.fc.JavaScriptDistLib.TextLib.textComparison(_that.validationType, "EQUAL", 'week')) {
        // Block#: nU@B{uH=Dbsn{cb+,}*T
        let _startDate = (com.fc.JavaScriptDistLib.TimeLibrary.subtractIntervalFromTime((com.fc.JavaScriptDistLib.MomentLibrary()), (com.fc.JavaScriptDistLib.TimeLibrary.createTimeInterval(0, 0, 0, 6, 0, 0)))),
          _endDate = (com.fc.JavaScriptDistLib.MomentLibrary());
        if(!(_startDate instanceof Date)) _startDate = _startDate.toDate();
        if(!(_endDate instanceof Date)) _endDate = _endDate.toDate();
        com.fc.JavaScriptDistLib.Clock.pickDateRange(_startDate, _endDate)
          .then((date) => {
            date = com.fc.JavaScriptDistLib.MomentLibrary(date);
            // Block#: 3I}V-TSPU[h3CPEOXLUI
            com.fc.JavaScriptDistLib.Button.setProperty["Text"]("B20Date", (com.fc.JavaScriptDistLib.TimeLibrary.textFromTime(date, "DATE_US"))); // Block#: ekrxt.la]-FUYS;9g=I[
            _that.selectionMade = true;
            // Block#: |zax]i0*FGcl[^w7z~Xf
            B20NextUpdate().then(response => {;
            });
          });
      } else if(com.fc.JavaScriptDistLib.TextLib.textComparison(_that.validationType, "EQUAL", '1YearToNow')) {
        // Block#: N[2+!]Cz|I!uHZ=)=h}J
        let _startDate = (com.fc.JavaScriptDistLib.TimeLibrary.subtractIntervalFromTime((com.fc.JavaScriptDistLib.MomentLibrary()), (com.fc.JavaScriptDistLib.TimeLibrary.createTimeInterval(0, 0, 0, 0, 0, 1)))),
          _endDate = (com.fc.JavaScriptDistLib.MomentLibrary());
        if(!(_startDate instanceof Date)) _startDate = _startDate.toDate();
        if(!(_endDate instanceof Date)) _endDate = _endDate.toDate();
        com.fc.JavaScriptDistLib.Clock.pickDateRange(_startDate, _endDate)
          .then((date) => {
            date = com.fc.JavaScriptDistLib.MomentLibrary(date);
            // Block#: 5mLq7c/S)cMQc{S=*FYQ
            com.fc.JavaScriptDistLib.Button.setProperty["Text"]("B20Date", (com.fc.JavaScriptDistLib.TimeLibrary.textFromTime(date, "DATE_US"))); // Block#: ?8)pONKtbFSaRHQi1r.(
            _that.selectionMade = true;
            // Block#: EHg}v!5Otce~U}t7:rM]
            B20NextUpdate().then(response => {;
            });
          });
      } else if(com.fc.JavaScriptDistLib.TextLib.textComparison(_that.validationType, "EQUAL", '50YearsToNow')) {
        // Block#: mWVm522AXPRp+u=SU*P~
        let _startDate = (com.fc.JavaScriptDistLib.TimeLibrary.subtractIntervalFromTime((com.fc.JavaScriptDistLib.MomentLibrary()), (com.fc.JavaScriptDistLib.TimeLibrary.createTimeInterval(0, 0, 0, 0, 0, 50)))),
          _endDate = (com.fc.JavaScriptDistLib.MomentLibrary());
        if(!(_startDate instanceof Date)) _startDate = _startDate.toDate();
        if(!(_endDate instanceof Date)) _endDate = _endDate.toDate();
        com.fc.JavaScriptDistLib.Clock.pickDateRange(_startDate, _endDate)
          .then((date) => {
            date = com.fc.JavaScriptDistLib.MomentLibrary(date);
            // Block#: tg_m!vcQtZ@1tLJbbDxE
            com.fc.JavaScriptDistLib.Button.setProperty["Text"]("B20Date", (com.fc.JavaScriptDistLib.TimeLibrary.textFromTime(date, "DATE_US"))); // Block#: ~`?}r[]^C-Yf6-}P-Tcm
            _that.selectionMade = true;
            // Block#: 6uy2FX5zq-ce1YT#ES)N
            B20NextUpdate().then(response => {;
            });
          });
      } else if(com.fc.JavaScriptDistLib.TextLib.textComparison(_that.validationType, "EQUAL", '50YearsTo18Years')) {
        // birthday
        // Block#: AFjn4dMzy^8Lp)qFILLt
        let _startDate = (com.fc.JavaScriptDistLib.TimeLibrary.subtractIntervalFromTime((com.fc.JavaScriptDistLib.MomentLibrary()), (com.fc.JavaScriptDistLib.TimeLibrary.createTimeInterval(0, 0, 0, 0, 0, 50)))),
          _endDate = (com.fc.JavaScriptDistLib.TimeLibrary.subtractIntervalFromTime((com.fc.JavaScriptDistLib.MomentLibrary()), (com.fc.JavaScriptDistLib.TimeLibrary.createTimeInterval(0, 0, 0, 0, 0, 18))));
        if(!(_startDate instanceof Date)) _startDate = _startDate.toDate();
        if(!(_endDate instanceof Date)) _endDate = _endDate.toDate();
        com.fc.JavaScriptDistLib.Clock.pickDateRange(_startDate, _endDate)
          .then((date) => {
            date = com.fc.JavaScriptDistLib.MomentLibrary(date);
            // Block#: @R,|H[WOtjRdYG.Q/?DF
            com.fc.JavaScriptDistLib.Button.setProperty["Text"]("B20Date", (com.fc.JavaScriptDistLib.TimeLibrary.textFromTime(date, "DATE_US"))); // Block#: 0iw8%GIwWT.nq.f7k4$}
            _that.selectionMade = true;
            // Block#: wL.gH(qy%Q^82#PX$7JP
            B20NextUpdate().then(response => {;
            });
          });
      }
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="B20Date"]').on('click', on_B20Date_click);
  // Block#: s~v@4x,:L+u%rV?/0v4H
  function on_B2Q2No_click(e) {
    try {
      // Block#: z/4qm3oP`e/fTl(,nqaB
      com.fc.JavaScriptDistLib.Button.setProperty["Text color"]("B2Q2No", (com.fc.JavaScriptDistLib.ColourLibrary.getColourFromText('#dd198e'))); // Block#: (G6^u,Htc_DBN%-v.eWp
      com.fc.JavaScriptDistLib.Button.setProperty["Text color"]("B2Q2Yes", (com.fc.JavaScriptDistLib.ColourLibrary.getColourFromText('#939598'))); // Block#: :nU-#ttqb?.U!:h6RrJk
      setFormFieldById('question2', 'value', 'No').then(response => {;
      });
      // Block#: a?umWK4.3`Ljq;0*)R.S
      com.fc.JavaScriptDistLib.Dictionary.setDictValue(_that.eQualAnswers, 'question2', 'No');
      // Block#: O}(B5t4oFfu{05$}q-~d
      B2NextUpdate().then(response => {;
      });
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="B2Q2No"]').on('click', on_B2Q2No_click);
  // Block#: Y)xIC9k5K~n:YKH64iym
  function on_Container_C13Profile_CLICK(e) {
    try {
      // Block#: z3grwxdG!Q~:$uDIWeh`
      if(!_that.buttonClicked) {
        // Block#: B?t$k#l~}CRw?V}W%H+W
        _that.buttonClicked = true;
        // Block#: 2Zm@oZC{FiU.@JIoX+??
        _that.returnError = saveTaskAndNext(getOutcomeName('C13Profile'));
      }
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    };
  };
  if($('[obj-name= "C13Profile"]:visible') && $('[obj-name= "C13Profile"]:visible')[0]) {
    $('[obj-name= "C13Profile"]').on('click', on_Container_C13Profile_CLICK);
  }
  // Block#: RKpa90yI,:YjC,$*:m;C
  function on_B4Cancel_click(e) {
    try {
      // Block#: U=!^wRGxBD$sj#,Vp1$4
      if(!_that.buttonClicked) {
        // Block#: ?c$J.g0DUN1.sbr}Rg6o
        if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Button.getProperty["Text"]("B4Cancel"), "EQUAL", 'Cancel')) {
          // Block#: hfE%~)K]mP)mIr}y@evY
          _that.dialog = (com.fc.JavaScriptDistLib.Dialog.create(_that.genericDialogTitle, _that.genericDialogBody));
          // Block#: nRAeQA6PE}?kiKh:-7Xn
          com.fc.JavaScriptDistLib.Dialog.addCancelBtn('No', _that.dialog)
          // Block#: BR:c2j:%b~!b%rmP|nJ+
          com.fc.JavaScriptDistLib.Dialog.addBtn('Yes', _that.dialog)
          // Block#: qyudHyb8Jar5qRv@j3EE
          com.fc.JavaScriptDistLib.Dialog.show(_that.dialog, function(button_title) {
            // Block#: ;[xMoI2EBZc+=V7z-d9c
            if(com.fc.JavaScriptDistLib.TextLib.textComparison(button_title, "EQUAL", 'Yes')) {
              // Block#: ni:?/oakRxy!H/hgz@Oe
              _that.buttonClicked = true;
              // Block#: Ni=S}a-WKsNfKP~WOH+^
              _that.returnError = saveTaskAndNext(getOutcomeName('B4Cancel'));
            }
          })
        } else {
          // Block#: s7,_g+E]txjrgb:Mjz@l
          _that.buttonClicked = true;
          // Block#: 3J%LI7GXI9h0@_MpIfT4
          _that.returnError = saveTaskAndNext(getOutcomeName('B4Cancel'));
        }
      }
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="B4Cancel"]').on('click', on_B4Cancel_click);
  // Block#: t;:=bmQ[-G;L+xt|]Sqx
  com.fc.JavaScriptDistLib.DrawViewContainer.onStrokeStart('DrawViewContainer',
    function() {
      try {
        // Block#: Vn.;FS`zr#lt8H)*Tgk+
        $('[obj-name="L11Placeholder"]').hide(); // Block#: }~.da/~GE,I@4F*skL@B
        $('[obj-name="B11Clear"]').show(); // Block#: tk//WF4TDhM?#4vV3{C*
        _that.selectionMade = true;
        // Block#: #sXO+NB^y}3tHO0+;HCh
        B11NextUpdate().then(response => {;
        });
      } catch(e) {
        com.fc.JavaScriptDistLib.handleExceptionNative(e);
      }
    },
    function(e) {
      let msg = 'Error handling Event';
      let err = new Error(msg);
      com.fc.JavaScriptDistLib.handleExceptionNative(err);
    });
  // Block#: _U|ILBTmiZ{mK5?n0pQ`
  function on_B26Back_click(e) {
    try {
      // Block#: z*PJXs0F96hUfuIH5y{Z
      if(!_that.buttonClicked) {
        // Block#: !gPdGDzA/w/K7_4{w@M5
        if(getOutcomeName('B26Back') != null) {
          // Block#: #KS6DP#I2P#t9_iAe`x]
          _that.buttonClicked = true;
          // Block#: W=+7@wi)B@7gSRJkk#Mr
          _that.returnError = saveTaskAndNext(getOutcomeName('B26Back'));
        }
      }
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="B26Back"]').on('click', on_B26Back_click);
  // Block#: n}*BP7g1F.]5^l9$2dBJ
  com.fc.JavaScriptDistLib.FireBase.onMessageReceived(function(sender, message) {
    // Block#: b*oK$pjgqmANF~]WNqNg
    _that.dialog = (com.fc.JavaScriptDistLib.Dialog.create((com.fc.JavaScriptDistLib.JSON.parseJSONDataForPath(message, '$.data.firebase_notification_title'))[0], (com.fc.JavaScriptDistLib.JSON.parseJSONDataForPath(message, '$.data.firebase_notification_body'))[0]));
    // Block#: PTC{?C/,EPh{c*1Ny@_d
    com.fc.JavaScriptDistLib.Dialog.addBtn('Go To Surveys', _that.dialog)
    // Block#: O_xw!ThE6JpqEzv+-T$`
    com.fc.JavaScriptDistLib.Dialog.addCancelBtn('Dismiss', _that.dialog)
    // Block#: fvux[iZ5#gfb)k_Mr[4b
    com.fc.JavaScriptDistLib.Dialog.show(_that.dialog, function(button_title) {
      // Block#: H]Wl.)%:+Kpje|}V*EKk
      if(com.fc.JavaScriptDistLib.TextLib.textComparison(button_title, "EQUAL", 'Go To Surveys')) {
        // Block#: d`1@hi/p@1d]kIc:J#2]
        reminderNavigation().then(response => {;
        });
      }
    })
  });
  // Block#: t4*P6(%eT|v#bDFvZnaD
  function on_B28Skip_click(e) {
    try {
      // Block#: oHLBwZ62#383m*TC.TDX
      if(!_that.buttonClicked) {
        // Block#: T=,ZE+G1,ppL,bUwsV9A
        if(getOutcomeName('B28Skip') != null) {
          // Block#: s*|]z^{zks]^F_W2(NNI
          _that.buttonClicked = true;
          // Block#: 5w;tlI}=WG[{#~r`C0`h
          _that.returnError = saveTaskAndNext(getOutcomeName('B28Skip'));
        }
      }
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="B28Skip"]').on('click', on_B28Skip_click);
  // Block#: !;~O;L@{2vjEapbp)=cQ
  function on_B3Next_click(e) {
    try {
      // Block#: FE|~QcacmpWL4eW_34]z
      if(!_that.buttonClicked) {
        // Block#: {jmo*y/_[YMzqDF^2,x3
        if(getOutcomeName('B3Next') != null) {
          // Block#: k`XGI*i}K|{:|xGqSQ9V
          _that.buttonClicked = true;
          // Block#: $k/;Q=Uuu~U%pKbJ?Jpp
          _that.returnError = saveTaskAndNext(getOutcomeName('B3Next'));
        }
      }
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="B3Next"]').on('click', on_B3Next_click);
  // Block#: pit$.mKL]sO$@v,D5]Gx
  function on_B12Cancel_click(e) {
    try {
      // Block#: E|V3/w9Yz!C=v~w)PPY7
      if(!_that.buttonClicked) {
        // Block#: r_r;nnRqXw1PD8^dYcp_
        if(!_that.isLoggingIn) {
          // Block#: v~8)h}s+flZu.R`*2TS2
          _that.dialog = (com.fc.JavaScriptDistLib.Dialog.create(_that.genericDialogTitle, _that.genericDialogBody));
          // Block#: neH`/QL`xysKA)#Ac:bU
          com.fc.JavaScriptDistLib.Dialog.addCancelBtn('No', _that.dialog)
          // Block#: s#.q}q_XDoPcf|+UULZL
          com.fc.JavaScriptDistLib.Dialog.addBtn('Yes', _that.dialog)
          // Block#: |u,Wn*}SjngY%;u3PrXB
          com.fc.JavaScriptDistLib.Dialog.show(_that.dialog, function(button_title) {
            // Block#: N?.ZZcbMPW;~zTDac0M9
            if(com.fc.JavaScriptDistLib.TextLib.textComparison(button_title, "EQUAL", 'Yes')) {
              // Block#: gj@9VUw{@7;V|k.x%(Tv
              _that.buttonClicked = true;
              // Block#: o+58L?mFdh}ju*a*PHlf
              com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("S12Email", true); // Block#: $i$z$H#ek~k2loq[8P-P
              _that.returnError = saveTaskAndNext(getOutcomeName('B12Cancel'));
            }
          })
        } else {
          // Block#: 2P6F}lD.Nxfbc6)/RfT=
          let hideScreen = $('.HTML5-deploy-wrapper .Screen:visible');
          //Close all dialogs
          com.fc.JavaScriptDistLib.Screen.closeDialogs();
          hideScreen.hide();
          let showScreen = $('[obj-name="S1Intro"]');
          showScreen.show();
          history.pushState({
            'view': 'S1Intro'
          }, 'S1Intro', '?S1Intro');
          hideScreen.triggerHandler('hide');
          showScreen.triggerHandler('show');
        }
      }
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="B12Cancel"]').on('click', on_B12Cancel_click);
  // Block#: ,Y76=iQ?%C)Fjy--bg-S
  function on_B22Cancel_click(e) {
    try {
      // Block#: FR1SzLE~B-7VFmzan)O7
      _that.dialog = (com.fc.JavaScriptDistLib.Dialog.create(_that.genericDialogTitle, _that.genericDialogBody));
      // Block#: *Ub;c-`#_/Yr8tEdBdO:
      com.fc.JavaScriptDistLib.Dialog.addCancelBtn('No', _that.dialog)
      // Block#: j]utRt}$eQR~)SDsZJ:D
      com.fc.JavaScriptDistLib.Dialog.addBtn('Yes', _that.dialog)
      // Block#: d9rzCZamz!c}ydq7R#:X
      if(!_that.buttonClicked) {
        // Block#: `n,aUF:):m0`D_tSqR:3
        com.fc.JavaScriptDistLib.Dialog.show(_that.dialog, function(button_title) {
          // Block#: s%MYCR?=oowrFh_G!AYI
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(button_title, "EQUAL", 'Yes')) {
            // Block#: RfrxUqVkN:Cek2iv[be9
            _that.buttonClicked = true;
            // Block#: jF8kY25x~Np_HaQ^{Jb2
            _that.returnError = saveTaskAndNext(getOutcomeName('B22Cancel'));
          }
        })
      }
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="B22Cancel"]').on('click', on_B22Cancel_click);
  // Block#: hCE{9Se1fP84k)udbc`.
  function on_B11Next_click(e) {
    try {
      // Block#: =yq@=5+OcGFoyso@?c6]
      if(!_that.buttonClicked && _that.selectionMade) {
        // Block#: 8H=Yub)`lN/0k6w1%z(!
        if(getOutcomeName('B11Next') != null) {
          // Block#: 87)U_xSln6~dgxBn;q5(
          setFormFieldById('signature', 'value', (com.fc.JavaScriptDistLib.DrawViewContainer.getSvg('DrawViewContainer'))).then(response => {;
          });
          // Block#: CxY%wL.96sCnGo77!I`o
          _that.buttonClicked = true;
          // Block#: QLhaPMuoNCT/~8=hdpSp
          _that.returnError = saveTaskAndNext(getOutcomeName('B11Next'));
        }
      }
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="B11Next"]').on('click', on_B11Next_click);
  // Block#: L`lY]EqE;:lg4wDn8*#)
  function on_B20Skip_click(e) {
    try {
      // Block#: X8%K$5liDlQvz?4?j1cS
      if(!_that.buttonClicked) {
        // Block#: 1h/;8PyQLm`vEMC78RmR
        if(getOutcomeName('B20Skip') != null) {
          // Block#: pBf69D;xe]MWQDYC4#l2
          _that.buttonClicked = true;
          // Block#: TmXqY#4k@6K/3.BnR]G8
          _that.returnError = saveTaskAndNext(getOutcomeName('B20Skip'));
        }
      }
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="B20Skip"]').on('click', on_B20Skip_click);
  // Block#: s+~fwb87VPrx}c`Vvy9#
  var elemSelector = '[obj-name="T23Text"]';
  $(elemSelector).find(".textView").on('input', function(e) {
    var oldText = $(this).attr("previousValue");
    var newText = $(this).val();
    $(this).attr("previousValue", newText);
    // Block#: k(Br=s{jqx}xdw|_o.Zo
    _that.selectionMade = false;
    // Block#: h;RV%WVv-h6LTq3f8PO.
    $('[obj-name="L23Error"]').hide(); // Block#: =V|}$djvt4LKriA)=7J@
    _that.currentProperty = getFormProperty('error');
    // Block#: 2!B}3SWUW96WeD.x=+HW
    if(_that.currentProperty != null) {
      // Block#: va^F(f)A%1yN,G}mJng1
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("L23Error", _that.currentProperty);
    }
    // Block#: BUXzcqcwQ?OO4R7nZ3(q
    if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("T23Text").length, "GT", com.fc.JavaScriptDistLib.Textbox.getProperty["Max chars"]("T23Text"))) {
      // Block#: *s3i{jnW]WkTv;+?kqVa
      com.fc.JavaScriptDistLib.Textbox.setProperty["Text"]("T23Text", com.fc.JavaScriptDistLib.TextLib.textSubstring(newText, 0, com.fc.JavaScriptDistLib.Textbox.getProperty["Max chars"]("T23Text")));
    }
    // Block#: tV5eL21Az7lsAWy[@Ngz
    if(!!com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("T23Text").length && !com.fc.JavaScriptDistLib.TextLib.textContains(com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("T23Text"), '.')) {
      // Block#: BrMlcpSAjlNvC.Yr=VC=
      if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(com.fc.JavaScriptDistLib.MathLibrary.toNumber(newText), "LT", 0)) {
        // Block#: kU_C,LN:d4=VlqzRAI(y
        com.fc.JavaScriptDistLib.Textbox.setProperty["Text"]("T23Text", 0);
      }
      // Block#: KfQg(]3i%cR}+296c#hG
      if(com.fc.JavaScriptDistLib.TextLib.textComparison(_that.validationType, "EQUAL", '2digits') ||
        com.fc.JavaScriptDistLib.TextLib.textComparison(_that.validationType, "EQUAL", '3digits')
      ) {
        // Block#: Xj6-KX_W8u.SV_zxyV=^
        if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(newText.length, "GT", 1)) {
          // Block#: CIMkIlG7`CaVEcs@[5D6
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.TextLib.textSubstring(newText, 0, 1), "EQUAL", '0')) {
            // Block#: wnvHR[~^gAmWV{i*(ewY
            com.fc.JavaScriptDistLib.Textbox.setProperty["Text"]("T23Text", com.fc.JavaScriptDistLib.TextLib.textSubstring(newText, 1, newText.length - 1));
          }
        }
        // Block#: ]M-Wc,RO8+[#vCz,Gq)6
        if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(com.fc.JavaScriptDistLib.MathLibrary.toNumber(com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("T23Text")), "GTE", com.fc.JavaScriptDistLib.MathLibrary.toNumber(_that.minInput)) &&
          com.fc.JavaScriptDistLib.MathLibrary.mathCompare(com.fc.JavaScriptDistLib.MathLibrary.toNumber(com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("T23Text")), "LTE", com.fc.JavaScriptDistLib.MathLibrary.toNumber(_that.maxInput))
        ) {
          // Block#: o5xnT;thFI4fQ(fdQY0B
          _that.selectionMade = true;
        } else if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(com.fc.JavaScriptDistLib.MathLibrary.toNumber(com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("T23Text")), "GT", com.fc.JavaScriptDistLib.MathLibrary.toNumber(_that.maxInput))) {
          // Block#: caYSu4p])2O}JXO#@v`F
          $('[obj-name="L23Error"]').show();
        } else if(_that.nextClicked && com.fc.JavaScriptDistLib.MathLibrary.mathCompare(com.fc.JavaScriptDistLib.MathLibrary.toNumber(com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("T23Text")), "LT", com.fc.JavaScriptDistLib.MathLibrary.toNumber(_that.minInput))) {
          // Block#: TTx*G%3Pp=b3iaN3D_^w
          $('[obj-name="L23Error"]').show();
        }
      } else if(com.fc.JavaScriptDistLib.TextLib.textComparison(_that.validationType, "EQUAL", 'zipcode')) {
        // Block#: m(IQ1(-]Zg$wJTJI*rv0
        if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("T23Text").length, "EQ", 5)) {
          // Block#: hJXNejKDyid+8gp-empc
          _that.selectionMade = true;
        } else if(_that.nextClicked && com.fc.JavaScriptDistLib.MathLibrary.mathCompare(com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("T23Text").length, "LT", 5)) {
          // Block#: 2`q^IQ1O(0H-o^-kGR?u
          $('[obj-name="L23Error"]').show();
        }
      } else if(com.fc.JavaScriptDistLib.TextLib.textComparison(_that.validationType, "EQUAL", '6digits')) {
        // Block#: k#N/s@lg7h)z3=nWNFX7
        if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("T23Text").length, "EQ", 6)) {
          // Block#: 6@~+Ri%PxQ{li|^.fHLT
          _that.selectionMade = true;
        } else if(_that.nextClicked && com.fc.JavaScriptDistLib.MathLibrary.mathCompare(com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("T23Text").length, "LT", 6)) {
          // Block#: Wj*[|V;ZCtG-Q%+4}bfJ
          $('[obj-name="L23Error"]').show();
        }
      }
    } else if(com.fc.JavaScriptDistLib.TextLib.textContains(com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("T23Text"), '.')) {
      // Block#: `;2m#K:m}Zo#8`XI:sj4
      $('[obj-name="L23Error"]').show();
    }
    // Block#: vK4w-5Vp}NXg,xHr|JIs
    B23NextUpdate().then(response => {;
    });
  });
  // Block#: -CY.701#0b]*^L+mhuJQ
  function on_B25Cancel_click(e) {
    try {
      // Block#: Ra7SY4.Siuk-?Ramg8?(
      _that.dialog = (com.fc.JavaScriptDistLib.Dialog.create(_that.genericDialogTitle, _that.genericDialogBody));
      // Block#: :.MG{C4wHVxk/j*|M%Qq
      com.fc.JavaScriptDistLib.Dialog.addCancelBtn('No', _that.dialog)
      // Block#: )BP9=xH47~$#GQ$2oTt_
      com.fc.JavaScriptDistLib.Dialog.addBtn('Yes', _that.dialog)
      // Block#: jp5%;R/*.Lm0?wk}zh#6
      if(!_that.buttonClicked) {
        // Block#: 6z:LtVJmg#3J1.zfI?`M
        com.fc.JavaScriptDistLib.Dialog.show(_that.dialog, function(button_title) {
          // Block#: o*Ro9[g!R`]lC+5`j%@`
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(button_title, "EQUAL", 'Yes')) {
            // Block#: cs~]f/(*f4hhK7DPGVL+
            _that.buttonClicked = true;
            // Block#: ,TSsgfK*/Dc1~AWg1VD#
            com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("S25AddMedication", true); // Block#: /~pCG|rb!g-wC=_Ilo)g
            _that.returnError = saveTaskAndNext(getOutcomeName('B25Cancel'));
          }
        })
      }
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="B25Cancel"]').on('click', on_B25Cancel_click);
  // Block#: 4E:6*OOYxrL4M/ryzZq;
  function on_B8Cancel_click(e) {
    try {
      // Block#: *x@4|Vcg:Fzo05`=O,|c
      if(!_that.buttonClicked) {
        // Block#: l?}K+Mhdz@0L8od}Fu/2
        _that.dialog = (com.fc.JavaScriptDistLib.Dialog.create(_that.genericDialogTitle, _that.genericDialogBody));
        // Block#: tAlWd#[i#Chl{oG?aXFh
        com.fc.JavaScriptDistLib.Dialog.addCancelBtn('No', _that.dialog)
        // Block#: f%%__~kKxv1DK1:SfHa[
        com.fc.JavaScriptDistLib.Dialog.addBtn('Yes', _that.dialog)
        // Block#: 7lpj-FOFnViB!H(E`g;S
        com.fc.JavaScriptDistLib.Dialog.show(_that.dialog, function(button_title) {
          // Block#: L0y=_TQk@=TfS(:n?usP
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(button_title, "EQUAL", 'Yes')) {
            // Block#: K%;=Jh9#f||:xDdU)#Zy
            _that.buttonClicked = true;
            // Block#: MCNOpduG/zh?I@rPUnvt
            _that.returnError = saveTaskAndNext(getOutcomeName('B8Cancel'));
          }
        })
      }
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="B8Cancel"]').on('click', on_B8Cancel_click);
  // Block#: }IJDeQ6YKh:OJ%kKbIW/
  function on_B11Clear_click(e) {
    try {
      // Block#: Xj[y,-URNX**IxCF7H^|
      com.fc.JavaScriptDistLib.DrawViewContainer.clear('DrawViewContainer') // Block#: 4h,bl$PHTiQ,x?me/m$.
      $('[obj-name="L11Placeholder"]').show(); // Block#: _6YvIPJQgelXDS!8wtVf
      _that.selectionMade = false;
      // Block#: _LQ5+`~wh]Soog4J*T#x
      B11NextUpdate().then(response => {;
      });
      // Block#: iS]e|dZ|(w!{ovYT$X~C
      $('[obj-name="B11Clear"]').hide();
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="B11Clear"]').on('click', on_B11Clear_click);
  // Block#: bg4!J):JR0a+|=NVQY2L
  function on_Container_C13Blog_CLICK(e) {
    try {
      // Block#: /Gq82CqDEXg%!LXECCH}
      if(!_that.buttonClicked) {
        // Block#: }=+sqxNGNi}HW1?a4_sQ
        _that.buttonClicked = true;
        // Block#: 6wEd5t-}}gpFiUwVN}$W
        _that.returnError = saveTaskAndNext(getOutcomeName('C13Blog'));
      }
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    };
  };
  if($('[obj-name= "C13Blog"]:visible') && $('[obj-name= "C13Blog"]:visible')[0]) {
    $('[obj-name= "C13Blog"]').on('click', on_Container_C13Blog_CLICK);
  }
  // Block#: a2GP@}IPdwMKD(s*@l:C
  function on_B17Overlay_click(e) {
    try {
      // Block#: ,d*s9+|T4_!4;aA{YN~^
      if(!_that.buttonClicked) {
        // Block#: Ay[l0sb:DPZoPJl#M;W,
        _that.buttonClicked = true;
        // Block#: Qy4C8!Cveu-lV]}+GO+X
        if(com.fc.JavaScriptDistLib.TextLib.textComparison(_that.overlayAction, "EQUAL", 'withdraw')) {
          // Block#: 1A|Ri4QvPPW{q#NA1#.9
          _that.returnError = saveTaskAndNext(getOutcomeName('C17Withdraw'));
        } else if(com.fc.JavaScriptDistLib.TextLib.textComparison(_that.overlayAction, "EQUAL", 'download')) {
          // Block#: g[Nd({$Wo*oaUW#Z)]/w
          _that.returnError = saveTaskAndNext(getOutcomeName('C17Download'));
        }
        // Block#: 34d:IYr(6,b+xN;se)I_
        $('[obj-name="C17Overlay"]').hide();
      }
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="B17Overlay"]').on('click', on_B17Overlay_click);
  // Block#: ZzO1_iH9BPRRg]}|q,?e
  function on_gridview_cell_clicked_GVC21KeyPadDigit(GVC21KeyPadDigit, number) {
    try {
      // Block#: l-~Jxv-R|9eUE6wc#iq@
      if(!_that.buttonClicked) {
        // Block#: K2O-l7}3{Ra(ZBtNn`Sg
        if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(number, "EQ", 11)) {
          // Block#: $%|2Cp8k[%m_7}i,V0#D
          if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(_that.userPinString.length, "GT", 0) &&
            com.fc.JavaScriptDistLib.MathLibrary.mathCompare(_that.userPinString.length, "LTE", 6)
          ) {
            // Block#: r`12kV$fbKM=W56EBR4*
            _that.userPinString = com.fc.JavaScriptDistLib.TextLib.textTrim(com.fc.JavaScriptDistLib.TextLib.textSubstring(_that.userPinString, 0, _that.userPinString.length - 1));
            // Block#: BU07GlAaK:]~zadt=)Ar
            S21UpdatePinProgress(_that.userPinString.length).then(response => {;
            });
          }
        } else if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(number, "EQ", 10)) {
          // Block#: 6gW74lrI{qNG;:!43?l=
          _that.userPinString = String(_that.userPinString) + String(0);
          // Block#: CNw9+s*a3xj(E{HE-3OX
          S21UpdatePinProgress(_that.userPinString.length).then(response => {;
          });
        } else if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(number, "NEQ", 9) &&
          com.fc.JavaScriptDistLib.MathLibrary.mathCompare(number, "NEQ", 11)
        ) {
          // Block#: =5+d~OTr?Jz](m^w2y|T
          if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(_that.userPinString.length, "LT", 6)) {
            // Block#: xoOlO(VJn/tW#9so-OM#
            _that.userPinString = String(_that.userPinString) + String(com.fc.JavaScriptDistLib.TextLib.convertToText((com.fc.JavaScriptDistLib.MathLibrary.toNumber(com.fc.JavaScriptDistLib.TextLib.convertToText(number))) + 1));
            // Block#: UyF,UTeJlxgMZXrzbMli
            S21UpdatePinProgress(_that.userPinString.length).then(response => {;
            });
          }
        }
        // Block#: YF,x_!%bTzA~{]K{Tv{5
        if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(_that.userPinString.length, "EQ", 6)) {
          // Block#: pu[C$ffd78%GSgV%3#SL
          _that.buttonClicked = true;
          // Block#: Y7gTa(t@l8MtGe-t]E^v
          com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("S21Pin", true); // Block#: (a[KJ|S_8y?`1DIb+qDm
          onContinueEvent().then(response => {;
          });
        }
      }
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  }
  com.fc.JavaScriptDistLib.GridView.setClickCallback('GVC21KeyPadDigit', on_gridview_cell_clicked_GVC21KeyPadDigit);
  // Block#: 3^vZ.|hHFGd$#%-ieAoT
  function on_B2Q3Yes_click(e) {
    try {
      // Block#: h_.lMoCm+Rn:PvKv_uW6
      com.fc.JavaScriptDistLib.Button.setProperty["Text color"]("B2Q3Yes", (com.fc.JavaScriptDistLib.ColourLibrary.getColourFromText('#dd198e'))); // Block#: PFB[D$dapPi.%`HRl.Bp
      com.fc.JavaScriptDistLib.Button.setProperty["Text color"]("B2Q3No", (com.fc.JavaScriptDistLib.ColourLibrary.getColourFromText('#939598'))); // Block#: gzEEq[oRh#JR-fbe~ISj
      setFormFieldById('question3', 'value', 'Yes').then(response => {;
      });
      // Block#: gGvNfeZk6_D@-R0Y^r8D
      com.fc.JavaScriptDistLib.Dictionary.setDictValue(_that.eQualAnswers, 'question3', 'Yes');
      // Block#: a[z5e948O9$IcT!g_+Pg
      B2NextUpdate().then(response => {;
      });
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="B2Q3Yes"]').on('click', on_B2Q3Yes_click);
  // Block#: Vc--BNuIbi7MH=Amir98
  function on_Container_C17Download_CLICK(e) {
    try {
      // Block#: LEDW}yxy9RWw/R]14iZF
      if(!_that.buttonClicked) {
        // Block#: YyS9,0x(ps+B4F$^uR!}
        _that.overlayAction = 'download';
        // Block#: q)3W2.b~8EdM4*6EEbC|
        com.fc.JavaScriptDistLib.Button.setProperty["Text"]("B17Overlay", 'Send'); // Block#: D1U(6IZgo9~:XQ6xBn,L
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("L17OverlayButton", '<br /><b>Send Data</b><br><br />&nbsp;<br />Upon&nbsp;pressing&nbsp;the&nbsp;send&nbsp;button&nbsp;a&nbsp;PDF&nbsp;showing&nbsp;the<br />&nbsp;answers&nbsp;you&nbsp;gave&nbsp;to&nbsp;all&nbsp;surveys&nbsp;in&nbsp;this&nbsp;study&nbsp;will<br />&nbsp;be&nbsp;sent&nbsp;to&nbsp;your&nbsp;email&nbsp;on&nbsp;file.<br /><br /><br /><br />​​​​​​<font color="#FF0000">​</font>'); // Block#: 69}/V[EvJyx`*Z#F5]$F
        $('[obj-name="C17Overlay"]').show();
      }
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    };
  };
  if($('[obj-name= "C17Download"]:visible') && $('[obj-name= "C17Download"]:visible')[0]) {
    $('[obj-name= "C17Download"]').on('click', on_Container_C17Download_CLICK);
  }
  // Block#: )__!o3`#S`X,%n7H(%!O
  function on_B26Next_click(e) {
    try {
      // Block#: {,Cz|Y:jw9eN%]S|`O?i
      if(!_that.buttonClicked) {
        // Block#: U`eKy]QTk+#A1AB0ai|r
        if(getOutcomeName('B26Next') != null) {
          // Block#: J91GuedQ7jme,;S-*)0Q
          _that.buttonClicked = true;
          // Block#: T=W]`??seD;o2RJ.:s:t
          _that.returnError = saveTaskAndNext(getOutcomeName('B26Next'));
        }
      }
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="B26Next"]').on('click', on_B26Next_click);
  // Block#: zs.0W7%U`*hQSfo,/2.W
  let on_screen_back_button_pressS19Activities = function() {
    try {
      // Block#: R9#MsEH53n.Pk64eQ/}5
      if(!_that.buttonClicked && ($('[obj-name="B19Back"]').is(':visible'))) {
        // Block#: x*`Ac.;CrcMnH}Yn1X[W
        _that.buttonClicked = true;
        // Block#: ?*PFT@t5h|8$my#B97ws
        _that.returnError = saveTaskAndNext(getOutcomeName('B19Back'));
      } else {
        // Block#: 5/V1bzC36Do+?@AL/6w`
        com.fc.JavaScriptDistLib.Application.sendToBackground();
      }
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  com.fc.JavaScriptDistLib.Screen.screenDict['backS19Activities'] = on_screen_back_button_pressS19Activities;
  // Block#: Pc)amTS*L9i#%X.`j,0M
  function on_B28Back_click(e) {
    try {
      // Block#: qF2XyG@RoMA7:18:[=Ir
      if(!_that.buttonClicked) {
        // Block#: a^!2UP}e-36PrJm4Mtn*
        if(getOutcomeName('B28Back') != null) {
          // Block#: essw4YD?4Zv2-~,`I{z#
          _that.buttonClicked = true;
          // Block#: ZP]d4]k#M-!TN*bB;.Ap
          _that.returnError = saveTaskAndNext(getOutcomeName('B28Back'));
        }
      }
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="B28Back"]').on('click', on_B28Back_click);
  // Block#: kL5U^zFE$YY_+r[`NMk-
  function on_B2Q3No_click(e) {
    try {
      // Block#: F5/6mmRYu#{qo`e@95C~
      com.fc.JavaScriptDistLib.Button.setProperty["Text color"]("B2Q3No", (com.fc.JavaScriptDistLib.ColourLibrary.getColourFromText('#dd198e'))); // Block#: EktQ{[UVvY4qi^t5s$5d
      com.fc.JavaScriptDistLib.Button.setProperty["Text color"]("B2Q3Yes", (com.fc.JavaScriptDistLib.ColourLibrary.getColourFromText('#939598'))); // Block#: .dO^Ikh9nlP)f?.A|ef5
      setFormFieldById('question3', 'value', 'No').then(response => {;
      });
      // Block#: ym{O0||7038,j|YZZ%%J
      com.fc.JavaScriptDistLib.Dictionary.setDictValue(_that.eQualAnswers, 'question3', 'No');
      // Block#: 3=q)F}x/80-XWz.t~lQk
      B2NextUpdate().then(response => {;
      });
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="B2Q3No"]').on('click', on_B2Q3No_click);
  // Block#: i4dluVSYipg-pvDCvN7;
  function on_Label_L3Dialog_CLICK(e) {
    try {
      // Block#: ^NC`:@@wWiQr%4]N8#RU
      com.fc.JavaScriptDistLib.Dialog.addCancelBtn('Cancel', _that.problemDialog)
      // Block#: 9Yl.JE*_6yP[ht%Je(Au
      if(!_that.buttonClicked) {
        // Block#: ?$NNX39p)Yp{FOQ8NI+4
        com.fc.JavaScriptDistLib.Dialog.show(_that.problemDialog, function(button_title) {
          // Block#: dvnu:T2)Kqh7l^Rgvk.*
          if(!(com.fc.JavaScriptDistLib.TextLib.textComparison(button_title, "EQUAL", 'Cancel') ||
              com.fc.JavaScriptDistLib.TextLib.textComparison(button_title, "EQUAL", 'Dismiss')
            )) {
            // Block#: xYFht1hA21N/G2_8-xeN
            _that.buttonClicked = true;
            // Block#: ESyv2Avc#cW-L6^.ZE3Y
            _that.returnError = saveTaskAndNext(button_title);
          }
        })
      }
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    };
  };
  if($('[obj-name= "L3Dialog"]:visible') && $('[obj-name= "L3Dialog"]:visible')[0]) {
    $('[obj-name= "L3Dialog"]').on('click', on_Label_L3Dialog_CLICK);
  }
  // Block#: (a6*7O0F|N`yku^D}H,_
  function on_B20Back_click(e) {
    try {
      // Block#: N~1LLQ[$gGkuPOv@mJ$`
      if(!_that.buttonClicked) {
        // Block#: ?sWBvME=B{p)p#;9i]~s
        if(getOutcomeName('B20Back') != null) {
          // Block#: l*LP~?H5[mL{bY04{b[l
          _that.buttonClicked = true;
          // Block#: =mr-MhSrldsT7TX7R*P9
          _that.returnError = saveTaskAndNext(getOutcomeName('B20Back'));
        }
      }
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="B20Back"]').on('click', on_B20Back_click);
  // Block#: PHjd)_.0Gkh(P?NffoW8
  function on_B9Agree_click(e) {
    try {
      // Block#: #v1)UG#2:FvYR{8YX$PT
      _that.dialog = (com.fc.JavaScriptDistLib.Dialog.create(getFormProperty('dialogTitle'), getFormProperty('dialogBodyAgree')));
      // Block#: `+)`WKP)m6Qgy4rc(#DM
      com.fc.JavaScriptDistLib.Dialog.addCancelBtn('Cancel', _that.dialog)
      // Block#: =mr3eS,J=EZ7{chy?d=o
      com.fc.JavaScriptDistLib.Dialog.addBtn('Agree', _that.dialog)
      // Block#: ]Vl.1@|[S%hG(9%P49tL
      if(!_that.buttonClicked) {
        // Block#: [l3FPG/!nt%i.d*dyn;G
        com.fc.JavaScriptDistLib.Dialog.show(_that.dialog, function(button_title) {
          // Block#: XG;#pp/$PE$.%$zHge?n
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(button_title, "EQUAL", com.fc.JavaScriptDistLib.Button.getProperty["Text"]("B9Agree"))) {
            // Block#: sDn}[uzRlY=o;|*U,l/{
            _that.buttonClicked = true;
            // Block#: Kr%cOY99YnaT?@{Byz!`
            _that.returnError = saveTaskAndNext(getOutcomeName('B9Agree'));
          }
        })
      }
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="B9Agree"]').on('click', on_B9Agree_click);
  // Block#: ^GajaX8lwyx1YawmX(M}
  function on_Container_C13Activities_CLICK(e) {
    try {
      // Block#: RK7Rp=}8z.qhONhm#VAT
      if(!_that.buttonClicked) {
        // Block#: H)iC0yA@q$h;yQJJGjM}
        _that.buttonClicked = true;
        // Block#: bPE0f_ezdnnLV8aXt#Zn
        com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("S13Home", true); // Block#: kw5U=15:AnV/4amU$:B-
        _that.returnError = saveTaskAndNext(getOutcomeName('C13Activities'));
      }
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    };
  };
  if($('[obj-name= "C13Activities"]:visible') && $('[obj-name= "C13Activities"]:visible')[0]) {
    $('[obj-name= "C13Activities"]').on('click', on_Container_C13Activities_CLICK);
  }
  // Block#: lg@0}h)T)XddAnh4SA}0
  whenNotificationShown = function(local_notification) {
    try {
      // Block#: OstNM|kWOsK5m/QgU9GC
      reminderNavigation().then(response => {;
      });
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  // Block#: [FR_lZbYzEw=.;MQK|=A
  function on_Container_C17Withdraw_CLICK(e) {
    try {
      // Block#: %6`tDN_VyBChaNTr=.^F
      if(!_that.buttonClicked) {
        // Block#: y()~J!/Vf(,`t%V^Q0N}
        _that.overlayAction = 'withdraw';
        // Block#: kSwC*Wwpo1WLvfz`#y]|
        com.fc.JavaScriptDistLib.Button.setProperty["Text"]("B17Overlay", 'Withdraw'); // Block#: r^l,LcYJ^?NL4#%;k7a-
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("L17OverlayButton", '<br /><b>Withdraw</b><br />&nbsp;<br />Are&nbsp;you&nbsp;sure&nbsp;you&nbsp;want&nbsp;to&nbsp;completely&nbsp;withdraw&nbsp;from<br />&nbsp;the&nbsp;study?&nbsp;You&nbsp;will&nbsp;be&nbsp;logged&nbsp;out&nbsp;of&nbsp;your&nbsp;account<br />&nbsp;and&nbsp;no&nbsp;further&nbsp;data&nbsp;will&nbsp;be&nbsp;collected.&nbsp;If&nbsp;you&nbsp;wish&nbsp;to<br />&nbsp;re-enroll&nbsp;at&nbsp;a&nbsp;later&nbsp;date,&nbsp;you&nbsp;will&nbsp;be&nbsp;asked&nbsp;to&nbsp;give<br />&nbsp;informed&nbsp;consent&nbsp;again.<br /><br /><br /><br />​​​​​​<font color="#FF0000">​</font>'); // Block#: ;r4@.X`ewk;ZIujy/I`7
        $('[obj-name="C17Overlay"]').show();
      }
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    };
  };
  if($('[obj-name= "C17Withdraw"]:visible') && $('[obj-name= "C17Withdraw"]:visible')[0]) {
    $('[obj-name= "C17Withdraw"]').on('click', on_Container_C17Withdraw_CLICK);
  }
  // Block#: WYo`GH0M{!m%VObV;Tb5
  var elemSelector = '[obj-name="T22Text1"]';
  $(elemSelector).find(".textView").on('input', function(e) {
    var oldText = $(this).attr("previousValue");
    var newText = $(this).val();
    $(this).attr("previousValue", newText);
    // Block#: qEG3`?1cI4I*^076,_Tk
    if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(newText.length, "GT", 1)) {
      // Block#: Yi#]bsC~;aLz!v04d,H]
      if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.TextLib.textSubstring(newText, 0, 1), "EQUAL", '0')) {
        // Block#: U%LAop/#aVj1kK*CX]Hw
        com.fc.JavaScriptDistLib.Textbox.setProperty["Text"]("T22Text1", com.fc.JavaScriptDistLib.TextLib.textSubstring(newText, 1, newText.length - 1));
      }
    }
    // Block#: X3fw|:gn_dT`!/(Ss+*V
    if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(newText.length, "GT", com.fc.JavaScriptDistLib.Textbox.getProperty["Max chars"]("T22Text1"))) {
      // Block#: *-eeqc9**cYz.#RMQd#0
      com.fc.JavaScriptDistLib.Textbox.setProperty["Text"]("T22Text1", com.fc.JavaScriptDistLib.TextLib.textSubstring(newText, 0, com.fc.JavaScriptDistLib.Textbox.getProperty["Max chars"]("T22Text1")));
    }
    // Block#: Npg=BUzaQ)wCdZb7ha2:
    if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(com.fc.JavaScriptDistLib.MathLibrary.toNumber(newText), "LT", 0)) {
      // Block#: S6jHS=JS4!@0}0$A},i`
      com.fc.JavaScriptDistLib.Textbox.setProperty["Text"]("T22Text1", 0);
    }
    // Block#: Nw@kl3+8WuszH)-Ternh
    S22CheckFields().then(response => {;
    });
  });
  // Block#: WW#GN7f_[trA1mbtz_D2
  function on_B26Cancel_click(e) {
    try {
      // Block#: ]XMbP9%MCJ8:d~gdps5^
      _that.dialog = (com.fc.JavaScriptDistLib.Dialog.create(_that.genericDialogTitle, _that.genericDialogBody));
      // Block#: :hz{|4O]^JH{U3}w2=o)
      com.fc.JavaScriptDistLib.Dialog.addCancelBtn('No', _that.dialog)
      // Block#: H(m]WHAp@lq1IS.s-;{_
      com.fc.JavaScriptDistLib.Dialog.addBtn('Yes', _that.dialog)
      // Block#: ;]O2HL|iaX2di$t$ecyF
      if(!_that.buttonClicked) {
        // Block#: h3ln4u0(y?9o8h(rQffN
        com.fc.JavaScriptDistLib.Dialog.show(_that.dialog, function(button_title) {
          // Block#: 9D$9QZT1Kx]KL:YP1([}
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(button_title, "EQUAL", 'Yes')) {
            // Block#: [sX;mhysgO*.-ikIVTZt
            _that.buttonClicked = true;
            // Block#: Mszgl_mEhSKR7D}INc%)
            _that.returnError = saveTaskAndNext(getOutcomeName('B26Cancel'));
          }
        })
      }
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="B26Cancel"]').on('click', on_B26Cancel_click);
  // Block#: h{A!aUfMT3*?DgO9u]/]
  function on_B19Back_click(e) {
    try {
      // Block#: zV5,Yh_4gB9iH%AuInRx
      if(!_that.buttonClicked) {
        // Block#: p#qaOmlK9e#lBRl}Jf3J
        if(getOutcomeName('B19Back') != null) {
          // Block#: =[ww65E391]R`{470!0=
          _that.buttonClicked = true;
          // Block#: }9f.W*+^Nv2JhV@5Ni(d
          _that.returnError = saveTaskAndNext(getOutcomeName('B19Back'));
        }
      }
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="B19Back"]').on('click', on_B19Back_click);
  // Block#: kjc$GuD76!G)=SN}X+=i
  function on_B8Option1_click(e) {
    try {
      // Block#: V?H7rK|;77ke?2iuE9Tv
      com.fc.JavaScriptDistLib.Container.setProperty["Background color"]("C8Option1", (com.fc.JavaScriptDistLib.ColourLibrary.getColourFromText('#ababab'))); // Block#: 08(1iyt$iqZNGXom3tzZ
      com.fc.JavaScriptDistLib.Container.setProperty["Background color"]("C8Option2", (com.fc.JavaScriptDistLib.ColourLibrary.getColourFromText('#FFFFFF'))); // Block#: 5|/LL?.M1LtARcH6Rp!l
      com.fc.JavaScriptDistLib.Button.setProperty["Alpha"]("B8Next", 100); // Block#: }2mb]|hq2xxYOe{wwOC%
      _that.selectionMade = true;
      // Block#: FgW({8p2z2%TY6DN|_mD
      com.fc.JavaScriptDistLib.Dictionary.setDictValue(_that.checkBoxList[0], 'value', 'TRUE');
      // Block#: Q#xY`btfi,^:{{2}vBcW
      com.fc.JavaScriptDistLib.Dictionary.setDictValue(_that.checkBoxList.slice(-1)[0], 'value', 'FALSE');
      // Block#: [kXzQa6XEv!:2OT+vu$R
      _that.lastOptionValue = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.checkBoxList[0], 'name'));
      // Block#: CdPBl8;i=K;kWJ#Y0*j_
      com.fc.JavaScriptDistLib.Image.setProperty["Image"]("I8Selected1", (com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("./img/checked.png"))); // Block#: }/rms)qjVu3P:Gl9I~`7
      com.fc.JavaScriptDistLib.Image.setProperty["Image"]("I8Selected2", (com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("./img/empty.png")));
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="B8Option1"]').on('click', on_B8Option1_click);
  // Block#: $}k3Up+oBOVrVQCI$jX}
  function on_B25None_click(e) {
    try {
      // Block#: e!Kt?lT2!iM]h!GlfbfK
      B25NoneUpdate().then(response => {;
      });
      // Block#: `fTV1#]cO5U5cVa)BG*/
      if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(_that.selectedMeds.length, "EQ", 0)) {
        // Block#: Z;D9,x_HMO:rxee;H]v#
        if(!_that.buttonClicked) {
          // Block#: }yTTWFgv(%=oCB@R,+]6
          if(getOutcomeName('B25None') != null) {
            // Block#: 3#*uDaT:O)R+X^:7js3L
            _that.selectedMeds = ['None'];
            // Block#: g]DPZ(MjCpA%!?my#CUq
            setFormFieldByMapKey('answer1', 'value', 'None');
            // Block#: zi+y8=(,t,~}a9q;Zitu
            _that.buttonClicked = true;
            // Block#: zWA]dP%/q+3!wRUr!eg9
            com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("S25AddMedication", true); // Block#: q{$=)gX^BLdDn(vRG!yf
            _that.returnError = saveTaskAndNext(getOutcomeName('B25None'));
          }
        }
      }
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="B25None"]').on('click', on_B25None_click);
  // Block#: XgsR{%m{(*WiC9=q`pul
  function on_Label_L4LearnMore_CLICK(e) {
    try {
      // Block#: ZdbYIK}3D`-[,zw[t}D6
      if(!_that.buttonClicked) {
        // Block#: N2BoLwL|_9,TV^ojOt8O
        if(getOutcomeName('L4LearnMore') != null) {
          // Block#: z6En/o=cau+!22GG9CFn
          _that.buttonClicked = true;
          // Block#: Ba%Aj.~z?)w?-lQ1S*IZ
          _that.returnError = saveTaskAndNext(getOutcomeName('L4LearnMore'));
        }
      }
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    };
  };
  if($('[obj-name= "L4LearnMore"]:visible') && $('[obj-name= "L4LearnMore"]:visible')[0]) {
    $('[obj-name= "L4LearnMore"]').on('click', on_Label_L4LearnMore_CLICK);
  }
  // Block#: })lT@RWm9;uaZaJvyu-6
  function on_B2Q4Yes_click(e) {
    try {
      // Block#: bt87%p4?f38TesIFHlWu
      com.fc.JavaScriptDistLib.Button.setProperty["Text color"]("B2Q4Yes", (com.fc.JavaScriptDistLib.ColourLibrary.getColourFromText('#dd198e'))); // Block#: d-YEs|=8y-!Ms_OWU610
      com.fc.JavaScriptDistLib.Button.setProperty["Text color"]("B2Q4No", (com.fc.JavaScriptDistLib.ColourLibrary.getColourFromText('#939598'))); // Block#: #erxeoz410l!GMQ58d,-
      setFormFieldById('question4', 'value', 'Yes').then(response => {;
      });
      // Block#: 0R[kP`Qvzc27,inckh=.
      com.fc.JavaScriptDistLib.Dictionary.setDictValue(_that.eQualAnswers, 'question4', 'Yes');
      // Block#: pxDShcU6Be5g$K7S4_Yy
      B2NextUpdate().then(response => {;
      });
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="B2Q4Yes"]').on('click', on_B2Q4Yes_click);
  // Block#: :*ppsFA%JreVomn]p9-,
  function on_B28Cancel_click(e) {
    try {
      // Block#: f}MG*l3ODgY[_sQ=!*HX
      _that.dialog = (com.fc.JavaScriptDistLib.Dialog.create(_that.genericDialogTitle, _that.genericDialogBody));
      // Block#: os7sqt.Y{2WY9g~nCFeL
      com.fc.JavaScriptDistLib.Dialog.addCancelBtn('No', _that.dialog)
      // Block#: uWZ:e:F8?!x!h+MWpS8P
      com.fc.JavaScriptDistLib.Dialog.addBtn('Yes', _that.dialog)
      // Block#: )$8OUpBn!FRBZ1GH*|Mp
      if(!_that.buttonClicked) {
        // Block#: kHe$#KGhK}@QzS7Up?M$
        com.fc.JavaScriptDistLib.Dialog.show(_that.dialog, function(button_title) {
          // Block#: 9/-[:Sj5W%$vv4D5Gm*F
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(button_title, "EQUAL", 'Yes')) {
            // Block#: w=jB`KzcdN[|oUsb6SS-
            _that.buttonClicked = true;
            // Block#: ,m==/1*^CEOG`u%1oS8:
            _that.returnError = saveTaskAndNext(getOutcomeName('B28Cancel'));
          }
        })
      }
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="B28Cancel"]').on('click', on_B28Cancel_click);
  // Block#: TQi{D;=0*foI,DOZ`Z*_
  function on_B20Cancel_click(e) {
    try {
      // Block#: oUPh@?BWF#{ro=MgnC+#
      _that.dialog = (com.fc.JavaScriptDistLib.Dialog.create(_that.genericDialogTitle, _that.genericDialogBody));
      // Block#: E2`gnnj(tztu+[BXKYa:
      com.fc.JavaScriptDistLib.Dialog.addCancelBtn('No', _that.dialog)
      // Block#: hpf6PRJ`Jm8CQ!uM[%a)
      com.fc.JavaScriptDistLib.Dialog.addBtn('Yes', _that.dialog)
      // Block#: ?!lOx1yd|x+^V]ruy58m
      if(!_that.buttonClicked) {
        // Block#: B$-K-]~4$9M%C|_qx70d
        com.fc.JavaScriptDistLib.Dialog.show(_that.dialog, function(button_title) {
          // Block#: K?l5%(-`VtX09S+!q*tq
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(button_title, "EQUAL", 'Yes')) {
            // Block#: 3B40L?;)-syhgx68xEhf
            _that.buttonClicked = true;
            // Block#: (BRS*x/8o@}MlQx}tD~v
            _that.returnError = saveTaskAndNext(getOutcomeName('B20Cancel'));
          }
        })
      }
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="B20Cancel"]').on('click', on_B20Cancel_click);
  // Block#: H3L+Lg.m`G/au8pHf!kt
  function on_B2Q4No_click(e) {
    try {
      // Block#: -mdofXq]|fv:]#Om~:d!
      com.fc.JavaScriptDistLib.Button.setProperty["Text color"]("B2Q4No", (com.fc.JavaScriptDistLib.ColourLibrary.getColourFromText('#dd198e'))); // Block#: /q./$Q[MBk2*W(4O%eQO
      com.fc.JavaScriptDistLib.Button.setProperty["Text color"]("B2Q4Yes", (com.fc.JavaScriptDistLib.ColourLibrary.getColourFromText('#939598'))); // Block#: vm;U6X1J)l*ocJ8XN,{3
      setFormFieldById('question4', 'value', 'No').then(response => {;
      });
      // Block#: BC_8Hqozkr5Q9KYhs_K*
      com.fc.JavaScriptDistLib.Dictionary.setDictValue(_that.eQualAnswers, 'question4', 'No');
      // Block#: aCO;.j]#A%nk=VvT{peK
      B2NextUpdate().then(response => {;
      });
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="B2Q4No"]').on('click', on_B2Q4No_click);
  // Block#: re=H934G.#}dt[Fg.ogT
  function on_listview_cell_clicked_LVC19Activity(LVC19Activity, number) {
    try {
      // Block#: k0oV10[A/Tajvw4fP}-~
      if(com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.activityList[number], 'Active')) {
        // Block#: BB$yq}M~61.a57i?U+t`
        if(!_that.buttonClicked) {
          // Block#: -]Wp;l`zx,D@U0,Yls,:
          _that.buttonClicked = true;
          // Block#: oai/6-snKJRvsVaA_vu|
          completeTask().then(response => {;
            if(response.name === "complete") {
              // Block#: Imr/eQrEna/1VZ]A.JH/
              startFlow((com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.activityList[number], 'body'))).then(response => {;
                if(response.name === "error") {
                  // Block#: 8Y,)J?6{XS|Z@rd}L6_s
                  console.log('get active tasks failure');
                  if(_that.debugService && _that.debugService.active) {
                    _that.debugService.traces.push('get active tasks failure');
                    _that.debugService.printLog();
                  }
                  // Block#: |2SqIDTP$QlTj}4@E;g1
                  console.log(response.data);
                  if(_that.debugService && _that.debugService.active) {
                    _that.debugService.traces.push(response.data);
                    _that.debugService.printLog();
                  }
                  // Block#: U3X!`}7uxFB0gMIc_/Co
                  _that.pErrorData = response.data;
                  // Block#: X#/AeJ|J!QX+{?KqWDvF
                  _that.buttonClicked = false;
                }
              });
            }
          });
        }
      }
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  }
  com.fc.JavaScriptDistLib.ListView.setClickCallback('LVC19Activity', on_listview_cell_clicked_LVC19Activity);
  // Block#: S9gCrFz-X=[IYV-~4s2c
  function on_back_button_press() {
    try {
      // Block#: l?;^GZ9!!h)J}4d/qp82
      com.fc.JavaScriptDistLib.Application.sendToBackground();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  com.fc.JavaScriptDistLib.Application.registerEvent('back_button_press', on_back_button_press);
  // Block#: |H`Z+k)_A@J-p!u*D[Nu
  function on_B9Disagree_click(e) {
    try {
      // Block#: uXaIcKR=Uu.516km2Fd#
      _that.dialog = (com.fc.JavaScriptDistLib.Dialog.create(getFormProperty('dialogTitle'), getFormProperty('dialogBodyDisagree')));
      // Block#: ^[7Domf[Ye6+8c17bOGV
      com.fc.JavaScriptDistLib.Dialog.addCancelBtn('Cancel', _that.dialog)
      // Block#: Gkg14O3igb%T}3y{G8f.
      com.fc.JavaScriptDistLib.Dialog.addBtn('Disagree', _that.dialog)
      // Block#: 0C,EGS8Nyeh.[H[XBFeh
      if(!_that.buttonClicked) {
        // Block#: U?6P1(y.=GL.7kSwSLYM
        com.fc.JavaScriptDistLib.Dialog.show(_that.dialog, function(button_title) {
          // Block#: exs2V!Np[`!.5R;$,V$]
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(button_title, "EQUAL", com.fc.JavaScriptDistLib.Button.getProperty["Text"]("B9Disagree"))) {
            // Block#: :O=z89/LpMV8Bs35?hrQ
            _that.buttonClicked = true;
            // Block#: D6+|`KTG2ocs:ap9|Yam
            _that.returnError = saveTaskAndNext(getOutcomeName('B9Disagree'));
          }
        })
      }
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="B9Disagree"]').on('click', on_B9Disagree_click);
  // Block#: cZ(O6u^frE%Wl|IF$)h,
  var elemSelector = '[obj-name="T22Text2"]';
  $(elemSelector).find(".textView").on('input', function(e) {
    var oldText = $(this).attr("previousValue");
    var newText = $(this).val();
    $(this).attr("previousValue", newText);
    // Block#: Vfk~#pY[H=#eh4YUG*,3
    if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(newText.length, "GT", 1)) {
      // Block#: U((4)?U6yrf.q@e*R;]1
      if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.TextLib.textSubstring(newText, 0, 1), "EQUAL", '0')) {
        // Block#: ^A$r6HLEh_!.SHI}?1RY
        com.fc.JavaScriptDistLib.Textbox.setProperty["Text"]("T22Text2", com.fc.JavaScriptDistLib.TextLib.textSubstring(newText, 1, newText.length - 1));
      }
    }
    // Block#: u4u}N}y@HXLM}txPJ)9o
    if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(newText.length, "GT", com.fc.JavaScriptDistLib.Textbox.getProperty["Max chars"]("T22Text2"))) {
      // Block#: )zGA:F(z^$$WSumF.S;a
      com.fc.JavaScriptDistLib.Textbox.setProperty["Text"]("T22Text2", com.fc.JavaScriptDistLib.TextLib.textSubstring(newText, 0, com.fc.JavaScriptDistLib.Textbox.getProperty["Max chars"]("T22Text2")));
    }
    // Block#: bPCc|}x:h#i,s~^?[M|s
    if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(com.fc.JavaScriptDistLib.MathLibrary.toNumber(newText), "LT", 0)) {
      // Block#: 5i$K28awvV%zNpq[ICcL
      com.fc.JavaScriptDistLib.Textbox.setProperty["Text"]("T22Text2", 0);
    }
    // Block#: YO~;zp%II`rJN7y?Rct4
    S22CheckFields().then(response => {;
    });
  });
  // Block#: {GB5)QEn{CBVs4FwbZOm
  function on_Container_C8Option1_CLICK(e) {
    try {
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    };
  };
  if($('[obj-name= "C8Option1"]:visible') && $('[obj-name= "C8Option1"]:visible')[0]) {
    $('[obj-name= "C8Option1"]').on('click', on_Container_C8Option1_CLICK);
  }
  // Block#: lU*[Z=m`@5w7b3m?CS2v
  function on_B25Next_click(e) {
    try {
      // Block#: !pY~L5,8C#/h:CfS-Cp!
      _that.selectedMedsCsv = '';
      // Block#: }=W`J1).Loc~|F*IT}MA
      if(!_that.buttonClicked && _that.selectionMade) {
        // Block#: ~Nz9Z{[beUOp@96StM@r
        if(getOutcomeName('B25Next') != null) {
          // Block#: 9Gq4B)989}Q9Dfp`deP)
          var index_end2 = _that.selectedMeds.length - 1;
          var index_inc2 = 1;
          if(0 > index_end2) {
            index_inc2 = -index_inc2;
          }
          for(index = 0; index_inc2 >= 0 ? index <= index_end2 : index >= index_end2; index += index_inc2) {
            // Block#: odeckc=Lm.mby6*`p2k)
            if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(index, "EQ", 0)) {
              // Block#: QIAX:I5~XTgAnY5+,-|F
              _that.selectedMedsCsv = String(_that.selectedMeds[0]);
            } else {
              // Block#: d1iJo4XQ%UML3~jqtbro
              _that.selectedMedsCsv = [_that.selectedMedsCsv, ',', _that.selectedMeds[index]].join('');
            }
          }
          // Block#: B2S`$*qG]Nv|#@P8B;x}
          setFormFieldByMapKey('answer1', 'value', _that.selectedMedsCsv);
          // Block#: vMIa`py=/l[+lx4E.Bl!
          console.log('medications, csv:');
          if(_that.debugService && _that.debugService.active) {
            _that.debugService.traces.push('medications, csv:');
            _that.debugService.printLog();
          }
          // Block#: ]DaXihmRBGzX6?(ID]+P
          console.log(_that.selectedMedsCsv);
          if(_that.debugService && _that.debugService.active) {
            _that.debugService.traces.push(_that.selectedMedsCsv);
            _that.debugService.printLog();
          }
          // Block#: vcW`1M`XO}xZc)p1=Y=e
          _that.buttonClicked = true;
          // Block#: *6owY:gZ$p=@%CK{v;H:
          com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("S25AddMedication", true); // Block#: eqDx*G!J6Ut[]+2.3.Z]
          _that.returnError = saveTaskAndNext(getOutcomeName('B25Next'));
        }
      }
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="B25Next"]').on('click', on_B25Next_click);
  // Block#: INVB?E4wLHmA~G/S|e^H
  function on_Container_C8Option2_CLICK(e) {
    try {
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    };
  };
  if($('[obj-name= "C8Option2"]:visible') && $('[obj-name= "C8Option2"]:visible')[0]) {
    $('[obj-name= "C8Option2"]').on('click', on_Container_C8Option2_CLICK);
  }
  // Block#: Aj3hiTA)wL2_rI,B#!bo
  function on_listview_cell_clicked_LVC20Answer(LVC20Answer, number) {
    try {
      // Block#: DP3,FJR!Ij]2bu1GP5A_
      _that.numberSelected = number;
      // Block#: p3)ijVW(@%$%j=aG_GrL
      if(com.fc.JavaScriptDistLib.TextLib.textComparison(_that.inputType, "EQUAL", 'boolean')) {
        // Block#: Nc3EF(aSs^=c^s9U.2uu
        _that.checkBoxElement = _that.checkBoxList[number];
        // Block#: @9LdiLf|v{geQ.FyW]25
        if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.checkBoxList[number], 'name'), "EQUAL", 'None of the above')) {
          // Block#: 1Kr(746da7!1c1?33}YL
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.checkBoxElement, 'value'), "EQUAL", 'FALSE')) {
            // Block#: iJcNuBX3AKJg*A]oy]1c
            var item_list9 = _that.checkBoxList;
            for(var item_index9 in item_list9) {
              item = item_list9[item_index9];
              // Block#: E1NknGY#!k=^9S8R%PCs
              com.fc.JavaScriptDistLib.Dictionary.setDictValue(item, 'value', 'FALSE');
            }
            // Block#: TO8@,d-`IF|H4r754aK(
            com.fc.JavaScriptDistLib.Dictionary.setDictValue(_that.checkBoxElement, 'value', 'TRUE');
          } else {
            // Block#: s#cX.#E4(S52gu3.JLvI
            com.fc.JavaScriptDistLib.Dictionary.setDictValue(_that.checkBoxElement, 'value', 'FALSE');
          }
        } else if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.checkBoxElement, 'value'), "EQUAL", 'FALSE')) {
          // Block#: }1JX5Z6K=*#U7.%jk3Gi
          var item_list10 = _that.checkBoxList;
          for(var item_index10 in item_list10) {
            item = item_list10[item_index10];
            // Block#: RrxTq)?7?!d`lmjZ;kud
            if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'name'), "EQUAL", 'None of the above')) {
              // Block#: S4w;Go_YYIlWFqNv+q+m
              com.fc.JavaScriptDistLib.Dictionary.setDictValue(item, 'value', 'FALSE');
            }
          }
          // Block#: 5TS+Epnrun{vCPH9SN:h
          com.fc.JavaScriptDistLib.Dictionary.setDictValue(_that.checkBoxElement, 'value', 'TRUE');
        } else {
          // Block#: u6uX7IG=;2-Fd=(_.1g6
          var item_list11 = _that.checkBoxList;
          for(var item_index11 in item_list11) {
            item = item_list11[item_index11];
            // Block#: UdQ)7}mMcu!!Zq_b}7Ha
            if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(item, 'name'), "EQUAL", 'None of the above')) {
              // Block#: |b*BD-Po[R@Kuvuod:v,
              com.fc.JavaScriptDistLib.Dictionary.setDictValue(item, 'value', 'FALSE');
            }
          }
          // Block#: Mnp.vN$y|LrJh;;A2#M-
          com.fc.JavaScriptDistLib.Dictionary.setDictValue(_that.checkBoxElement, 'value', 'FALSE');
        }
        // Block#: =by`oJ^SRlXBM6fd{tww
        _that.checkBoxList[number] = _that.checkBoxElement;
      } else {
        // Block#: 1s%rS^phA@WY?B/p-vAS
        var index_end3 = _that.checkBoxList.length - 1;
        var index_inc3 = 1;
        if(0 > index_end3) {
          index_inc3 = -index_inc3;
        }
        for(index = 0; index_inc3 >= 0 ? index <= index_end3 : index >= index_end3; index += index_inc3) {
          // Block#: j5*-L9Aw[@1[k@qt9LKE
          _that.checkBoxElement = _that.checkBoxList[index];
          // Block#: pLOj,Bj/|.F.:$)qypV]
          if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(number, "EQ", index)) {
            // Block#: ]f7VaW`U%K`]`wQ8BfA,
            com.fc.JavaScriptDistLib.Dictionary.setDictValue(_that.checkBoxElement, 'value', 'TRUE');
          } else {
            // Block#: U-Il15gNq[D!Cp^3wZ-!
            com.fc.JavaScriptDistLib.Dictionary.setDictValue(_that.checkBoxElement, 'value', 'FALSE');
          }
          // Block#: fhwq{:mIM9*:@q{-nu@+
          _that.checkBoxList[index] = _that.checkBoxElement;
        }
      }
      // Block#: 7ffc[vq#pNDdinL$%(i(
      _that.selectionMade = checkBoxListHasSelection(_that.checkBoxList);
      // Block#: Avi$jRmUqdf]i++kXfdP
      com.fc.JavaScriptDistLib.ListView.saveTemplateCell('LV20Answers');
      com.fc.JavaScriptDistLib.ListView.removeAllCells('LV20Answers');
      on_listview_length_configured_LV20Answers();
      // Block#: X`AGL?BWG5ooty;$eNJo
      B20NextUpdate().then(response => {;
      });
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  }
  com.fc.JavaScriptDistLib.ListView.setClickCallback('LVC20Answer', on_listview_cell_clicked_LVC20Answer);
  // Block#: %DG0]2`nPST]s(Ay_O.t
  function on_Container_C1Checkbox_CLICK(e) {
    try {
      // Block#: GA6UGny~N_V`NU_stx{`
      _that.checkBoxValue = !_that.checkBoxValue;
      // Block#: rSMO5:l`iEBzqB%,2c*_
      c1CheckboxUpdate().then(response => {;
      });
      // Block#: 1604`AMJ,tZKo1BlfjmH
      if(_that.checkBoxValue) {
        // Block#: KLq#WbHecaseKesn/9q|
        _that.dialog = (com.fc.JavaScriptDistLib.Dialog.create('', 'Test users will not be part of the study. Any data collected will not be used in POWERMOM.'));
        // Block#: YpU)APIn6riL^Bo:#`B9
        com.fc.JavaScriptDistLib.Dialog.addCancelBtn('OK', _that.dialog)
        // Block#: oqq2x(!Bxz0D+_V@Q4~2
        com.fc.JavaScriptDistLib.Dialog.show(_that.dialog, function(button_title) {
        })
      }
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    };
  };
  if($('[obj-name= "C1Checkbox"]:visible') && $('[obj-name= "C1Checkbox"]:visible')[0]) {
    $('[obj-name= "C1Checkbox"]').on('click', on_Container_C1Checkbox_CLICK);
  }
  // Block#: gO~QI*C*=DTqDM;i:Svz
  var elemSelector = '[obj-name="TA28Textarea"]';
  var originalText = $(elemSelector).find("input").val();
  $(elemSelector).find("textarea").on('input', function(e) {
    var oldText = originalText;
    var newText = $(this).val();
    // Block#: Q*aq}S%(PT_OB~qvd5i]
    s28CheckField(newText).then(response => {;
    });
  });
  // Block#: h1=ytXx(]IvS0|gJRbEc
  function on_B8Option2_click(e) {
    try {
      // Block#: ON-KJ6*gK]B$2VucP6o$
      com.fc.JavaScriptDistLib.Container.setProperty["Background color"]("C8Option1", (com.fc.JavaScriptDistLib.ColourLibrary.getColourFromText('#FFFFFF'))); // Block#: IHRm|1o8{}$oT[G(3c/}
      com.fc.JavaScriptDistLib.Container.setProperty["Background color"]("C8Option2", (com.fc.JavaScriptDistLib.ColourLibrary.getColourFromText('#ababab'))); // Block#: 2`ER1OS/P?a)}lD0ufQh
      com.fc.JavaScriptDistLib.Button.setProperty["Alpha"]("B8Next", 100); // Block#: aQSPXosL@L`+*%jew5Ha
      _that.selectionMade = true;
      // Block#: VOe:BVP(=lwaVrx|tb5q
      com.fc.JavaScriptDistLib.Dictionary.setDictValue(_that.checkBoxList[0], 'value', 'FALSE');
      // Block#: *nT(Uk5k!6.ybp%2]dU1
      com.fc.JavaScriptDistLib.Dictionary.setDictValue(_that.checkBoxList.slice(-1)[0], 'value', 'TRUE');
      // Block#: ?@blJ[J@mIuBuVjW}{H1
      _that.lastOptionValue = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.checkBoxList.slice(-1)[0], 'name'));
      // Block#: JV[Xx.$5x_3bYwD/ZC}s
      com.fc.JavaScriptDistLib.Image.setProperty["Image"]("I8Selected1", (com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("./img/empty.png"))); // Block#: A|RL-drvJ*9_vhJ;2{oU
      com.fc.JavaScriptDistLib.Image.setProperty["Image"]("I8Selected2", (com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("./img/checked.png")));
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="B8Option2"]').on('click', on_B8Option2_click);
  // Block#: Tm2ByEB@ilH@Tvfr$5d|
  let graphViewLabelTransformFuncGC26SingleGraph = function(plotname, value) {
    try {
      return(String(com.fc.JavaScriptDistLib.TextLib.convertToText(value)) + String(' %'))
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  com.fc.JavaScriptDistLib.GraphContainer.setLabelTransformFunc('GC26SingleGraph', graphViewLabelTransformFuncGC26SingleGraph);
  // Block#: +eyHJT[d#]|pY0%HgOWm
  function on_B9Link_click(e) {
    try {
      // Block#: V!B)QpsM|8i**ff!#Hou
      if(!_that.buttonClicked) {
        // Block#: =HhV{e4DV]#iuMBA4=G@
        if(getOutcomeName('B9Link') != null) {
          // Block#: @WZ_Z,b:M2-HLCc*s0r?
          _that.buttonClicked = true;
          // Block#: 4RqLj8q9mb=]KtF4ZkJV
          _that.returnError = saveTaskAndNext(getOutcomeName('B9Link'));
        }
      }
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="B9Link"]').on('click', on_B9Link_click);
  // Block#: S5A8.(8h_sU0i~*lIU@R
  var elemSelector = '[obj-name="T12Email"]';
  $(elemSelector).find(".textView").on('input', function(e) {
    var oldText = $(this).attr("previousValue");
    var newText = $(this).val();
    $(this).attr("previousValue", newText);
    // Block#: mGJl/B7{jcH]WU7Yi_x*
    _that.selectionMade = !!newText.length;
    // Block#: Wk!hNZ[Vqh.xo||?%6~t
    B12NextUpdate().then(response => {;
    });
  });
  // Block#: Xwd#9E8k!Bt7?$stS_H,
  function on_B25EnterMed_click(e) {
    try {
      // Block#: ]-.h-{HpJz!dV#YH%OYe
      if(!_that.buttonClicked) {
        // Block#: QuetuiSbFQrWZ~a}~``H
        if(getOutcomeName('B25EnterMed') != null) {
          // Block#: phCLUZKh7nnHfr5yc+Rq
          _that.buttonClicked = true;
          // Block#: Ab3=iC*STDes`#_H3.e7
          com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("S25AddMedication", true); // Block#: Sr}.^:n?4~re2uOpFsNs
          _that.returnError = saveTaskAndNext(getOutcomeName('B25EnterMed'));
        }
      }
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="B25EnterMed"]').on('click', on_B25EnterMed_click);
  // Block#: hisX2$ovJ`DI}-j3~Ed|
  var elemSelector = '[obj-name="T20Text"]';
  $(elemSelector).find(".textView").on('input', function(e) {
    var oldText = $(this).attr("previousValue");
    var newText = $(this).val();
    $(this).attr("previousValue", newText);
    // Block#: +hVH5O[.VuV^IOQmSkx_
    _that.selectionMade = false;
    // Block#: +SDMP;b|p-ONx~kXWo0r
    if(!com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.TextLib.textTrim(newText), "EQUAL", '')) {
      // Block#: ?lQ%v5Wr6,%3?Z5z%QN0
      if(com.fc.JavaScriptDistLib.TextLib.textComparison(_that.validationType, "EQUAL", 'name')) {
        // Block#: ,L:;tR6=XOGya9]vJw^f
        if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(newText.length, "LT", 30)) {
          // Block#: iaMnM=B]U{~$A9q!eQ2@
          _that.selectionMade = s20IsValidName(newText);
          // Block#: 0)VKN{bY^nU$wwA#@HSu
          if(!_that.selectionMade) {
            // Block#: 3^ebj2qTqFjJhR[WE{qC
            $('[obj-name="L20Error"]').show(); // Block#: Wg,M7!uO4=HRo5q1kye)
            com.fc.JavaScriptDistLib.Label.setProperty["Text"]("L20Error", 'Remove numbers, symbols or excess spaces.');
          } else {
            // Block#: )P`zF;2O=a3l_+_rD%GD
            $('[obj-name="L20Error"]').hide();
          }
        } else {
          // Block#: =]2SX[r?cL_H(]45*8Sk
          com.fc.JavaScriptDistLib.Textbox.setProperty["Text"]("T20Text", com.fc.JavaScriptDistLib.TextLib.textSubstring(newText, 0, 29)); // Block#: `HkP#lykY5k}J.]KiL-F
          com.fc.JavaScriptDistLib.Label.setProperty["Text"]("L20Error", 'Name cannot exceed 30 characters limit'); // Block#: :fSDs7OvZ5g6pD#F+xv2
          $('[obj-name="L20Error"]').show();
        }
      } else if(com.fc.JavaScriptDistLib.TextLib.textComparison(_that.validationType, "EQUAL", 'medication')) {
        // Block#: -K50t:$^AzO$T,@uEHH|
        if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(newText.length, "LT", 30) &&
          !!newText.length) {
          // Block#: @Wr4UiU@.8;3[ui6xWGS
          _that.selectionMade = true;
          // Block#: E3iLsSxX*c)j+_t;NhUa
          $('[obj-name="L20Error"]').hide();
        } else {
          // Block#: x+|N0IoTQkS|z(VveS|q
          com.fc.JavaScriptDistLib.Textbox.setProperty["Text"]("T20Text", com.fc.JavaScriptDistLib.TextLib.textSubstring(newText, 0, 29)); // Block#: oQRWEHGvO6)9d5[Okj9s
          com.fc.JavaScriptDistLib.Label.setProperty["Text"]("L20Error", 'Name cannot exceed 30 characters limit'); // Block#: `i#ZA7f[ZA-C(3aXW_io
          $('[obj-name="L20Error"]').show();
        }
      }
    }
    // Block#: 1*i7z]8wEgyf%]KS%32[
    B20NextUpdate().then(response => {;
    });
  });
  // Block#: .7(e7[7bb)Jg/S1c%V%D
  let on_screen_createSplashScreen = function() {
    try {
      // Block#: +)q-Rf@:X/G]#EM#/.dv
      _that.isLoggingIn = false;
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  }();
  // Block#: Bsu86/OtZS8dc~6(=|3}
  function on_SplashContinue_click(e) {
    try {
      // Block#: nN7cycQxA-eH$ae^Oq[=
      if(!_that.buttonClicked) {
        // Block#: P)5cp|R2bGfCzqFT+KJ/
        _that.buttonClicked = true;
        // Block#: dTe8NV01}krE3kdsb[yP
        if(com.fc.JavaScriptDistLib.ListLibrary.listContains((com.fc.JavaScriptDistLib.Storage.getAllKeys()), 'resumeSignUpProcess')) {
          // Block#: M9]eF2iU-VdaN^SASD(3
          startSignUp().then(response => {;
          });
        } else {
          // Block#: }jmle_2p9p|4p+DRyP!U
          if(com.fc.JavaScriptDistLib.ListLibrary.listContains((com.fc.JavaScriptDistLib.Storage.getAllKeys()), 'email')) {
            // Block#: l(0BVMQvD8qGJMwVcxaV
            _that.userID = (com.fc.JavaScriptDistLib.Storage.getValue('email'));
            // Block#: S|/,kl8-:4]Q6t-ot:PL
            console.log('go to S21Pin');
            if(_that.debugService && _that.debugService.active) {
              _that.debugService.traces.push('go to S21Pin');
              _that.debugService.printLog();
            }
            // Block#: RVSf#_Vozx(17cP/|Gys
            _that.S21FirstDisplay = true;
            // Block#: kfl)M*l={zszUENF,0.e
            _that.isLoggingIn = true;
            // Block#: j-#7~wVy8UE$Z}8w/;K)
            let hideScreen = $('.HTML5-deploy-wrapper .Screen:visible');
            //Close all dialogs
            com.fc.JavaScriptDistLib.Screen.closeDialogs();
            hideScreen.hide();
            let showScreen = $('[obj-name="S21Pin"]');
            showScreen.show();
            history.pushState({
              'view': 'S21Pin'
            }, 'S21Pin', '?S21Pin');
            hideScreen.triggerHandler('hide');
            showScreen.triggerHandler('show');
          } else {
            // Block#: N9)E.~--}c-y(SnziI;b
            console.log('go to S27StudyInfo');
            if(_that.debugService && _that.debugService.active) {
              _that.debugService.traces.push('go to S27StudyInfo');
              _that.debugService.printLog();
            }
            // Block#: r=}8JHrqjQ)Iv775kPDx
            let hideScreen = $('.HTML5-deploy-wrapper .Screen:visible');
            //Close all dialogs
            com.fc.JavaScriptDistLib.Screen.closeDialogs();
            hideScreen.hide();
            let showScreen = $('[obj-name="S27StudyInfo"]');
            showScreen.show();
            history.pushState({
              'view': 'S27StudyInfo'
            }, 'S27StudyInfo', '?S27StudyInfo');
            hideScreen.triggerHandler('hide');
            showScreen.triggerHandler('show');
          }
        }
      }
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="SplashContinue"]').on('click', on_SplashContinue_click);
  // Block#: NX{FA4ejLK4A8$u9fo4(
  let graphViewLabelTransformFuncGC26TopGraph = function(plotname, value) {
    try {
      return(String(com.fc.JavaScriptDistLib.TextLib.convertToText(value)) + String(' %'))
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  com.fc.JavaScriptDistLib.GraphContainer.setLabelTransformFunc('GC26TopGraph', graphViewLabelTransformFuncGC26TopGraph);
  // Block#: f{huu8H)r}G6zMGtlOCf
  let graphViewLabelTransformFuncGC26BottomGraph = function(plotname, value) {
    try {
      return(String(com.fc.JavaScriptDistLib.TextLib.convertToText(value)) + String(' %'))
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  com.fc.JavaScriptDistLib.GraphContainer.setLabelTransformFunc('GC26BottomGraph', graphViewLabelTransformFuncGC26BottomGraph);
  // Block#: @c[j]zq%+Ja`e,002?ly
  function on_B27Continue_click(e) {
    try {
      // Block#: qqc_Ga|yKo+mQXmi-ZQw
      console.log('go to S1Intro');
      if(_that.debugService && _that.debugService.active) {
        _that.debugService.traces.push('go to S1Intro');
        _that.debugService.printLog();
      }
      // Block#: -tmZ=V!.ltC!dQNtvwke
      let hideScreen = $('.HTML5-deploy-wrapper .Screen:visible');
      //Close all dialogs
      com.fc.JavaScriptDistLib.Screen.closeDialogs();
      hideScreen.hide();
      let showScreen = $('[obj-name="S1Intro"]');
      showScreen.show();
      history.pushState({
        'view': 'S1Intro'
      }, 'S1Intro', '?S1Intro');
      hideScreen.triggerHandler('hide');
      showScreen.triggerHandler('show');
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="B27Continue"]').on('click', on_B27Continue_click);
  // Block#: S%=.movH}i(hSJQDMxBq
  function on_listview_length_configured_LV26PieGraphLegend() {
    try {
      com.fc.JavaScriptDistLib.ListView.configureCells('LV26PieGraphLegend', _that.ListOptions.length);
      $('[obj-name="LV26PieGraphLegend"]').children().each(function(i) {
        if(i >= 0) {
          com.fc.JavaScriptDistLib.ListView.setContext($(this));
          com.fc.JavaScriptDistLib.ListView.executeConfigCallback('LV26PieGraphLegend', $(this), i);
          com.fc.JavaScriptDistLib.ListView.executeConfigHeightCallback('LV26PieGraphLegend', $(this), i);
          com.fc.JavaScriptDistLib.ListView.resetContext($(this));
        }
      });
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  // Block#: $1]~;!:JwqgW*a*8Uc^U
  function on_listview_cell_configured_LVC26PieGraphItem(LVC26PieGraphItem, number) {
    try {
      // Block#: Yqudga89AW{d_f/+!n[#
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("L26Name", (_that.ListOptions[number])); // Block#: 1$6D@WO)bB)kom3dM%B6
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("L26Percent", ''); // Block#: [};Wd9IW1VFrZP47it/A
      if(com.fc.JavaScriptDistLib.TextLib.textComparison(_that.graphGroup, "EQUAL", 'genderOutcome')) {
        // Block#: Ztj|iA]1deQD)g[H[J%+
        com.fc.JavaScriptDistLib.Label.setProperty["Background color"]("L26ColorLabel", ((com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.colorLists, 'genderOutcome'))[number])); // Block#: z)DFy+Bfr{4k-d_WZ1(I
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("L26Percent", (String(Math.round(((com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.groupData, _that.Xvalues[number])) / _that.totalNumberOfSubjects) * 100)) + String(' %')));
      } else if(com.fc.JavaScriptDistLib.TextLib.textComparison(_that.graphGroup, "EQUAL", 'genderHealthHistory')) {
        // Block#: VC#NOK+yQfK?xo4a,om`
        com.fc.JavaScriptDistLib.Label.setProperty["Background color"]("L26ColorLabel", ((com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.colorLists, 'genderHealthHistory'))[number])); // Block#: Kv[vZk^pq29o$}l|#~iA
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("L26Percent", (String(Math.round(((com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.groupData, _that.Xvalues[number])) / _that.totalNumberOfSubjects) * 100)) + String(' %')));
      }
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  com.fc.JavaScriptDistLib.ListView.setConfigCallback('LVC26PieGraphItem', on_listview_cell_configured_LVC26PieGraphItem);
  com.fc.JavaScriptDistLib.Screen.screenPopInit();
  com.fc.JavaScriptDistLib.FireBase.configure('{"api-key":{"text":"AIzaSyAtG-Xm9iJMUOOis6JBzSoHkJJMzxir4jA"},"project-id":{"text":"powermom-2"},"client-id":{"text":"1036675267720-ecqe2taieje4fntrunau42l5jrj15h7j.apps.googleusercontent.com"},"project-number":{"text":"1036675267720"},"public-vapid-key":{"text":"BLsgEzGKVKqFjDGA_77l-A99tQ1eiNTnHDu6P15GJXHN6zaVebtq58a0ZrpbDzCKOb5Yxud3wyguZ8Wh1_zYJ_k"},"storage-bucket":{"text":"powermom-2.appspot.com"},"mobilesdk-app-id":{"text":"1:1036675267720:android:dfbc230ffe3b3f15"},"analytics-services":{"0":"d","1":"i","2":"s","3":"a","4":"b","5":"l","6":"e","7":"d"},"app-invite":{"0":"d","1":"i","2":"s","3":"a","4":"b","5":"l","6":"e","7":"d"},"ads-services":{"0":"d","1":"i","2":"s","3":"a","4":"b","5":"l","6":"e","7":"d"},"ios-bundle-id":{"text":"com.snapiot.scripps.powermom"},"ios-app-id":{"text":"1:1036675267720:ios:dfbc230ffe3b3f15"}}');
  var whenNotificationShown;
  com.fc.JavaScriptDistLib.Notification.configure(whenNotificationShown);
  var onGoogleFitAuthLost;
  com.fc.JavaScriptDistLib.GoogleFit.configureAuth(onGoogleFitAuthLost);
  $('[obj-name="SplashScreen"]').show();
});
// Generated by snapp
// 484689-937422-25269-142265
