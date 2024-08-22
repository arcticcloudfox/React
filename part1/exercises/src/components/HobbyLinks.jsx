export default function HobbyLinks() {
    let hobbyLinks = ["https://www.gamestop.com/?utm_source=rakutenls&utm_medium=affiliate&utm_content=Digchic&utm_campaign=10&utm_id=4034968&utm_kxconfid=tebx5rmj3&cid=afl_10000087&affID=77777&sourceID=M0pdR8_nZs0-TB7z.jWzrT_HRb5eliu_Iw&ranMID=24348&ranEAID=M0pdR8%2FnZs0&ranSiteID=M0pdR8_nZs0-TB7z.jWzrT_HRb5eliu_Iw&gad_source=1&gclid=Cj0KCQjww5u2BhDeARIsALBuLnNCYUKdgXOFxFgOSSGFVDBicC13OyuS6cSk9sEobVykAMNVnH9f7YoaAqcIEALw_wcB", "https://www.barnesandnoble.com/", "https://www.dickblick.com/?gad_source=1&gclid=Cj0KCQjww5u2BhDeARIsALBuLnPAekqsZe0ILeYOCoXCvt4QScI7gIoZIBvJUJfCIZ-QtFgSb3JBa1saAuraEALw_wcB"];
    return (<div>
            <a href = {hobbyLinks[0]} target = "blank">GameStop</a> <br></br>
            <a href = {hobbyLinks[1]} target = "blank">Barnes and Noble</a> <br></br>
            <a href = {hobbyLinks[2]} target = "blank">Blick Art</a>
            </div>
            );
}