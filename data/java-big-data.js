export const javaBigData = {
  id: "java-big-data",
  title: "Big Data Java",
  modules: [
    {
      title: "Module 1: The Foundations of Distributed Computing",
      lessons: [
        {
          title: "The Evolution of Data Storage",
          content: `
            <p>To understand Big Data, we must first understand the <strong>Vertical vs. Horizontal Scaling</strong> dilemma. Vertical scaling (buying a bigger server) has a physical limit and a massive price tag. Horizontal scaling (connecting thousands of cheap computers) is the foundation of Big Data.</p>
            <div style="background: #eff6ff; p-6 rounded-2xl border-l-4 border-blue-600 my-6">
              <h4 style="margin-top:0">The 3 V's of Big Data</h4>
              <ul>
                <li><strong>Volume:</strong> The sheer amount of data (Terabytes to Zettabytes).</li>
                <li><strong>Velocity:</strong> The speed at which data is generated and processed.</li>
                <li><strong>Variety:</strong> Structured, semi-structured (JSON/XML), and unstructured data (Images/Video).</li>
              </ul>
            </div>
            <p>In this course, we use Java to bridge the gap between high-level logic and low-level distributed hardware.</p>
          `
        },
        {
          title: "HDFS Architecture: NameNodes & DataNodes",
          content: `
            <p>The Hadoop Distributed File System (HDFS) is a master/slave architecture. An HDFS cluster consists of a single <strong>NameNode</strong> and multiple <strong>DataNodes</strong>.</p>
            <h3>1. The NameNode (The Brain)</h3>
            <p>It maintains the file system tree and the metadata for all the files and directories. It knows which blocks belong to which file and where they are located on the cluster.</p>
            <h3>2. DataNodes (The Muscle)</h3>
            <p>These store the actual data. Files are split into blocks (default 128MB). Each block is replicated (default 3 times) across different machines to ensure that if one computer explodes, your data is safe.</p>
            <div style="background: #fff7ed; padding: 20px; border-radius: 15px; border: 1px solid #fed7aa; margin: 20px 0;">
              <strong>Critical Security:</strong> If the NameNode fails, the cluster becomes unusable because the DataNodes don't know how to reconstruct the files. This is why we use <em>High Availability (HA)</em> with Standby NameNodes.
            </div>
          `
        },
        {
          title: "Java API: Interacting with HDFS",
          content: `
            <p>To write data to HDFS from a Java application, you need the Hadoop Common and HDFS libraries. Here is a complete example of writing a file to a distributed cluster:</p>
            <pre><code>import org.apache.hadoop.conf.Configuration;
import org.apache.hadoop.fs.FileSystem;
import org.apache.hadoop.fs.Path;
import java.io.BufferedWriter;
import java.io.OutputStreamWriter;

public class HDFSWriter {
    public static void main(String[] args) throws Exception {
        // 1. Load configuration
        Configuration conf = new Configuration();
        conf.set("fs.defaultFS", "hdfs://localhost:9000");

        // 2. Get FileSystem instance
        FileSystem fs = FileSystem.get(conf);

        // 3. Define the path
        Path filePath = new Path("/user/learnmate/test.txt");

        // 4. Create and Write
        BufferedWriter br = new BufferedWriter(new OutputStreamWriter(fs.create(filePath, true)));
        br.write("Learning Big Data with LearnMate Academy!");
        br.close();
        
        System.out.println("File written successfully to HDFS");
    }
}</code></pre>
          `
        }
      ]
    },
    {
      title: "Module 2: Mastering MapReduce",
      lessons: [
        {
          title: "The MapReduce Lifecycle",
          content: `
            <p>MapReduce is a programming model for processing large data sets with a parallel, distributed algorithm on a cluster. The process goes through 4 distinct stages:</p>
            <ol>
              <li><strong>Splitting:</strong> HDFS splits the input into manageable chunks.</li>
              <li><strong>Mapping:</strong> Your Java code processes each chunk and emits key-value pairs.</li>
              <li><strong>Shuffling & Sorting:</strong> Hadoop automatically moves all values with the same key to the same Reducer.</li>
              <li><strong>Reducing:</strong> Your Java code aggregates the values into a final result.</li>
            </ol>
          `
        },
        {
          title: "Advanced Java Mapper Implementation",
          content: `
            <p>Let's look at a "Word Count" Mapper. We use <code>LongWritable</code> for keys (file offsets) and <code>Text</code> for values (the actual line of text).</p>
            <pre><code>public class WordCountMapper extends Mapper&lt;LongWritable, Text, Text, IntWritable&gt; {
    private final static IntWritable one = new IntWritable(1);
    private Text word = new Text();

    @Override
    protected void map(LongWritable key, Text value, Context context) 
              throws IOException, InterruptedException {
        // Convert line to string and split by whitespace
        String line = value.toString();
        String[] words = line.split("\\s+");

        for (String w : words) {
            word.set(w.replaceAll("[^a-zA-Z]", "").toLowerCase());
            if (!word.toString().isEmpty()) {
                context.write(word, one);
            }
        }
    }
}</code></pre>
          `
        },
        {
          title: "The Reducer & Combiner Optimization",
          content: `
            <p>The Reducer sums up the counts. However, to save network bandwidth, we can use a <strong>Combiner</strong>. A Combiner is a "mini-reducer" that runs on the Mapper node before the data is sent across the network.</p>
            <pre><code>public class WordCountReducer extends Reducer&lt;Text, IntWritable, Text, IntWritable&gt; {
    @Override
    protected void reduce(Text key, Iterable&lt;IntWritable&gt; values, Context context) 
              throws IOException, InterruptedException {
        int sum = 0;
        for (IntWritable val : values) {
            sum += val.get();
        }
        context.write(key, new IntWritable(sum));
    }
}</code></pre>
          `
        }
      ]
    },
    {
      title: "Module 3: Apache Spark & In-Memory Processing",
      lessons: [
        {
          title: "Spark vs. MapReduce",
          content: `
            <p>Why is Spark faster? MapReduce reads from and writes to disk at every step. Spark performs operations in <strong>RAM</strong>. This makes Spark up to 100x faster for certain applications, especially iterative algorithms like Machine Learning.</p>
            <table style="width:100%; border-collapse: collapse; margin: 20px 0;">
              <tr style="background: #f1f5f9;">
                <th style="padding: 10px; border: 1px solid #ddd;">Feature</th>
                <th style="padding: 10px; border: 1px solid #ddd;">MapReduce</th>
                <th style="padding: 10px; border: 1px solid #ddd;">Apache Spark</th>
              </tr>
              <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Speed</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Standard (Disk-based)</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Lightning (In-memory)</td>
              </tr>
              <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Language</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Java mainly</td>
                <td style="padding: 10px; border: 1px solid #ddd;">Java, Scala, Python, R</td>
              </tr>
            </table>
          `
        },
        {
          title: "RDDs: Resilient Distributed Datasets",
          content: `
            <p>The RDD is the core abstraction in Spark. It is a collection of objects distributed across the cluster that can be operated on in parallel.</p>
            <p>In Java, we use transformations (lazy) and actions (eager). <strong>Transformations</strong> create a new RDD from an existing one, while <strong>Actions</strong> return a value to the driver program.</p>
            <pre><code>JavaRDD&lt;String&gt; lines = sc.textFile("hdfs://...");
// Transformation: filter
JavaRDD&lt;String&gt; errorLines = lines.filter(s -> s.contains("ERROR"));
// Action: count
long count = errorLines.count();</code></pre>
          `
        }
      ]
    },
    {
      title: "Module 4: Big Data Storage Formats",
      lessons: [
        {
          title: "Row vs. Columnar Storage (Parquet)",
          content: `
            <p>Storing Big Data in CSV or JSON is inefficient. Modern Big Data uses <strong>Columnar storage</strong> like Apache Parquet.</p>
            <ul>
              <li><strong>Row Storage (CSV):</strong> Great for writing data quickly. Bad for querying specific columns.</li>
              <li><strong>Columnar Storage (Parquet):</strong> Great for analytical queries. If you only want to see "User Ages", the system doesn't have to read "User Addresses" or "User Names."</li>
            </ul>
          `
        },
        {
          title: "Apache Hive: SQL on Hadoop",
          content: `
            <p>Hive is a data warehouse software project built on top of Apache Hadoop for providing data query and analysis. Hive gives an SQL-like interface to query data stored in various databases and file systems that integrate with Hadoop.</p>
            <pre><code class="language-sql">CREATE TABLE logs (user_id INT, action STRING) 
STORED AS PARQUET;

SELECT action, COUNT(*) FROM logs GROUP BY action;</code></pre>
          `
        }
      ]
    },
    {
      title: "Module 5: Real-Time Streaming with Kafka",
      lessons: [
        {
          title: "Introduction to Message Brokers",
          content: `
            <p>Big Data isn't always sitting in a file. Sometimes it's a constant stream of events (clicks, sensor data, stock prices). <strong>Apache Kafka</strong> is the standard for high-throughput, distributed messaging.</p>
          `
        },
        {
          title: "Kafka Producers in Java",
          content: `
            <p>Here is how you send a message to a Kafka cluster using Java:</p>
            <pre><code>Properties props = new Properties();
props.put("bootstrap.servers", "localhost:9092");
props.put("key.serializer", "org.apache.kafka.common.serialization.StringSerializer");
props.put("value.serializer", "org.apache.kafka.common.serialization.StringSerializer");

KafkaProducer&lt;String, String&gt; producer = new KafkaProducer&lt;&gt;(props);
producer.send(new ProducerRecord&lt;&gt;("my-topic", "key", "Hello Kafka!"));
producer.close();</code></pre>
          `
        }
      ]
    }
  ]
};