<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
    <head>
        <meta http-equiv="content-type" content="text/html; charset=UTF-8"/>
        <jsp:include page="/jsp/common/styles.jsp" />
        <title>Joe Sondow - Tetris</title>
    </head>
    <body>
        <div class="outer">
            <div class="container topic tetris">
                <div class="header">
                    <a href="/"><img src="/static/images/joe_sondow.jpg"/><h1>Joe Sondow</h1></a>
                </div>
                <div class="inner">
                    <a href="/tetris.jnlp" class="screenshot"><img src="/static/images/tetris_screenshot.gif"/></a>
                    <p>
                        Launch app with Java Web Start:
                    </p>
                    <p>
                        <a href="/tetris.jnlp" class="launch">Tetris</a>
                    </p>
                    <p>
                        Game development is a good way to stretch programming muscles because it
                        requires so many concepts to work together in order to work properly. 
                        I implemented this Tetris game as an exercise in putting a bunch
                        of skills together for a clear outcome:
                    </p>
                    <ul>
                        <li>Swing</li>
                        <li>Arrow Key Controls</li>
                        <li>Multithreading</li>
                        <li>Timers</li>
                    </ul>
                    <p>
                        The game gradually speeds up as rows are deleted. To test the game, I ended 
                        up playing incessantly. Mostly I wanted to recreate the sort of casual 
                        desktop game that I grew up playing. 
                        Browse the <a href="http://code.google.com/p/joes-tetris/source/browse/#svn/trunk/tetris/src/com/sondow/tetris">source code.</a>
                    </p>
                    <p>
                        Download:
                    </p>
                    <ul class="downloads">
                        <li><a href="/app/Joe's_Tetris_Win.exe">Win</a></li>
                        <li><a href="/app/Joe's_Tetris_Mac.jar">Mac</a></li>
                        <li><a href="/app/tetris.jar">Jar</a></li>
                    </ul>
                    <div class="fix"></div>
                </div>
            </div>
        </div>
        <jsp:include page="/jsp/common/javascript.jsp" />
    </body>
</html>
