import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Etl {

    public Map<String, Integer> transform(Map<Integer, List<String>> old) {
        Map<String, Integer> transformedResult = new HashMap<>();
            old.forEach((key, value) ->
                    value.forEach((item) ->
                            transformedResult.put(item.toLowerCase(), key)));
        return transformedResult;
    }
}
