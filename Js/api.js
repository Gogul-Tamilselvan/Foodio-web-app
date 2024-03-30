let url = "https://www.themealdb.com/api/json/v1/1/categories.php";
 
async function fetchCatrgory()
{
    const res = await fetch(url);
    const result = await res.json();
    const end = result.categories;
    // console.table(end.categories);

    end.map((trend) => {
        
        console.log(trend.strCategoryThumb);
    })
}
fetchCatrgory();