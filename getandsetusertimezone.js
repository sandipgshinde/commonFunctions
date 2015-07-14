//set the timezone to session..	
        var tz = jstz.determine();
        var timezone = tz.name();
        /* USE this timezone variable to set into global variable, may by session.
         * when displaying date stored into UTC timezone in DB convert it into user timezone using below function
         * IT IS WRITTEN IN PHP
         */
        /**
         * @PARAM:
         * $dateTime: Date time in UTC which needs to be converted into user timezone
         * $timeZone: timezone which we calculated and stored into SESSION
         * $format: return format
         */
        function getLocalDates($dateTime, $timeZone,$format)
        {
                $datetime = new DateTime($dateTime);//'2008-08-03 12:35:23'
                try
                {
                        $la_time = new DateTimeZone($timeZone);
                }catch(Exception $e)
                {
                        $la_time = new DateTimeZone('UTC');
                }
                $datetime->setTimezone($la_time);
                $newDate= $datetime->format('Y-m-d H:i:s');
                try
                {
                        $la_time1 = new DateTimeZone('UTC');
                }catch(Exception $e)
                {
                        $datetime->setTimezone($la_time1);	
                }
                //gets date time
                if($format=='dt')
                {
                        $newDate=date('Y-m-d H:i:s', strtotime($newDate));
                }
                else if($format=='d')
                {
                        $newDate=date('Y-m-d', strtotime($newDate));
                }
                else if($format=='t')
                {
                        $newDate=date('H:i:s', strtotime($newDate));
                        
                }
                
                return $newDate;
        }
        