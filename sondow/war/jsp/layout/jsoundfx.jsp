<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
    <head>
        <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
        <jsp:include page="/jsp/common/styles.jsp" />
        <title>Joe Sondow - JSoundFX</title>
    </head>
    <body>
        <div class="outer">
            <div class="container topic">
                <div class="header">
                    <a href="/"><img src="/static/images/joe_sondow.jpg"/><h1>Joe Sondow</h1></a>
                </div>
                <div class="inner">
                    <a href="/jsoundfx.jnlp" class="screenshot"><img src="/static/images/jsoundfx_screenshot.jpg"/></a>
                    <p>
                        Launch app with Java Web Start:
                    </p>
                    <p>
                        <a href="/jsoundfx.jnlp" class="launch">JSoundFX</a>
                    </p>
                    <p>
                        JSoundFX is a sound player with graphical buttons.
                        I wrote it as a JavaFX exercise just before the 
                        <a href="http://www.mindviewinc.com/Conferences/JavaPosseRoundup/">Java Posse Roundup 2010</a>.
                        The app includes some inside jokes about the <a href="http://javaposse.com/">Java Posse</a> podcast,
                        such as whipping sounds and common discussion topics.
                    </p>
                    <p>
                        I made the buttons appear tactile and shiny, and they recess when pressed, without using multiple
                        images per button. JavaFX's Lighting and ShapeSubtract are well suited to the job.
                    </p>
                    <p>
                        Browse the <a href="http://code.google.com/p/jsoundfx/source/browse/#svn/trunk/jsoundfx/src/jsoundfx">source code</a>.
                    </p>
                    <div class="fix"></div>
                </div>
            </div>
        </div>
        <jsp:include page="/jsp/common/javascript.jsp" />
    </body>
</html>
